// /api/generate-content.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import admin from "firebase-admin";
import UAParser from "ua-parser-js";

if (!admin.apps.length) {
  const credentials = JSON.parse(process.env.FIREBASE_CREDENTIALS); // Read credentials from .env.local
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}
const db = admin.firestore();

const genAI = new GoogleGenerativeAI("AIzaSyDjYQJK41A58l0gE6JaBgx1sVEZcPatoBA");

// Detailed information about Aditya
const personalInfo = `
  Aditya Yedurkar is a B.Tech student in Information Technology at Veermata Jijabai Technological Institute (VJTI), 
  with a CGPA of 8.68. His education focuses on Data Structures, Algorithms, Database Management, and Computer Architecture. 
  He achieved a 99.60 percentile in the MHT-CET and is skilled in Java, Python, SQL, HTML/CSS, Machine Learning, and Web Development.
  (Additional personal details...)
`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;

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

      // Extract device information from User-Agent using ua-parser-js
      const parser = new UAParser(req.headers['user-agent']);
      const deviceInfo = parser.getResult();
      const deviceBrand = deviceInfo.device.vendor || "Unknown";
      const deviceModel = deviceInfo.device.model || "Unknown";

      // Save user details and prompt in Firestore
      await db.collection("chatbot_queries").add({
        query: prompt,
        userDetails: {
          userAgent: req.headers['user-agent'],
          brand: deviceBrand,
          model: deviceModel,
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
