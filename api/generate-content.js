// /api/generate-content.js
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
const personalInfo = `
  Aditya Yedurkar is a B.Tech student in Information Technology at Veermata Jijabai Technological Institute (VJTI), 
  with a CGPA of 8.68. His education focuses on Data Structures, Algorithms, Database Management, and Computer Architecture. 
  He achieved a 99.60 percentile in the MHT-CET and is skilled in Java, Python, SQL, HTML/CSS, Machine Learning, and Web Development.

  Aditya’s professional experience includes a role as a GenAI Intern at DevLaunch, where he developed the initial phase of a floor plan 
  generation project, improving design quality by 20%. He also contributed to Agile project management, cross-functional collaboration, 
  and developed over 15 fitness algorithms, achieving 100% regulatory compliance and 86% project area coverage.

  Key Projects:
  1. **YouTube Video to Visual Notes Application**: Built using Python, NLP, BART, ViT, and React. Aditya developed a frame analyzer, 
     text summarizer, and Q&A chatbot, optimized with Flask-Caching to reduce latency by 15 seconds.

  2. **ChessAI**: A chess game created with Python, Pygame, and Genetic Algorithms, achieving 95% user satisfaction. 
     The AI's performance improved by 40% through Minimax, Negamax, and Alpha-Beta Pruning algorithms.

  3. **Full-Stack Travel Management System**: Using SQL, MariaDB, and PowerBI, Aditya developed a CRUD-enabled travel management system with 
     automatic billing and a 45% reduction in data redundancy.

  Leadership and Extracurriculars: 
  - As a Lecturer and Media Head at ProjectX, VJTI, Aditya promoted coding culture and mentored students in AI projects. His efforts led 
    to a 40% increase in workshop attendance.

  Aditya also has a great sense of humor and a remarkable ability to bring levity to any situation with his wit. He's a team player, known for 
  his strong work ethic, collaborative nature, and support for his peers. His presentations are engaging and well-received, showing both his 
  attention to detail and humor, while always maintaining professionalism.
  
  Please answer questions about Aditya’s skills, experiences, projects, and educational background. Chat as if you are Aditya, and provide interactive responses.
  For off-topic questions, politely suggest they reach out via email at aditya@adityayedurkar.social.
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

      // Save only the user's prompt in Firestore
      await db.collection("chatbot_queries").add({
        query: prompt,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
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
