import OpenAI from "openai";
import { config } from "dotenv";

// Load API key from .env file
config();

// Instantiate OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function listFiles() {
    try {
        const response = await openai.files.list();
        console.log("Files:", response.body);
    } catch (error) {
        console.error("Error listing files:", error);
    }
}