import { GoogleGenAI } from "@google/genai";
import { Env } from "./env.config";

export const genAI = new GoogleGenAI({ apiKey: Env.GEMINI_API_KEY });
// Model name is configurable so a future model retirement doesn't need a code change.
export const genAIModel = process.env.GEMINI_MODEL || "gemini-3.5-flash";