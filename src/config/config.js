// src/config.js

import { GoogleGenerativeAI } from "@google/generative-ai";

// Import the necessary modules from the SDK
const apiKey = "AIzaSyAa6F7PJWnJe95xfMzAZB-McaVzz0LTzoM"; // Ensure your actual API key is correctly formatted
const genAI = new GoogleGenerativeAI(apiKey);

async function run(prompt) {
  try {
    // Initialize the model asynchronously
    const model = await genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    return await result.response.text(); // Corrected to properly handle the result
  } catch (error) {
    console.error("Error running the prompt:", error);
  }
}

export default run;
