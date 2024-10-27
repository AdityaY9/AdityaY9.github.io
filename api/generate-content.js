import { GoogleGenerativeAI } from "@google/generative-ai";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const credentials = JSON.parse(process.env.FIREBASE_CREDENTIALS); // Read credentials from .env.local
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}
const db = admin.firestore();

const genAI = new GoogleGenerativeAI("AIzaSyDjYQJK41A58l0gE6JaBgx1sVEZcPatoBA");

// Detailed information about Aditya
const personalInfo = `...`; // Keep your existing personalInfo content

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { prompt, userAgent } = req.body; // Get the userAgent from request body
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Construct the full prompt with Aditya's details and instructions
      const fullPrompt = `
        Here is detailed information about Aditya Yedurkar: "${personalInfo}". 
        Based on this information, please respond to questions related to Aditya’s background, skills, projects, and professional experience. 
        Chat as if you are Aditya, and provide interactive, personable responses.
        For off-topic questions, suggest they reach out via email at aditya@adityayedurkar.social.
        
        Question: "${prompt}"
      `;

      const result = await model.generateContent(fullPrompt);

      // Extract device information from the User-Agent header
      const deviceName = getDeviceName(userAgent); // Function to get device name

      // Save user details and prompt in Firestore
      await db.collection("chatbot_queries").add({
        query: prompt,
        userDetails: {
          userAgent: userAgent,
          deviceName: deviceName, // Add extracted device name
          ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
          language: req.headers['accept-language'],
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        },
      });

      // Send the response back to the client
      res.status(200).json({ response: result.response.text() });
    } catch (error) {
      console.error("Error generating content:", error);
      res.status(500).json({ error: "Failed to generate content" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Helper function to extract device name from User-Agent
function getDeviceName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (/mobile/.test(ua)) {
    if (/android/.test(ua)) {
      return "Android Device";
    } else if (/iphone|ipad|ipod/.test(ua)) {
      return "iOS Device";
    }
    return "Mobile Device";
  } else if (/tablet/.test(ua)) {
    return "Tablet";
  } else if (/desktop/.test(ua)) {
    return "Desktop";
  }
  return "Unknown Device";
}
