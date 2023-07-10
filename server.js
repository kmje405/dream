// Import dotenv package for handling environment variables.
import * as dotenv from "dotenv";
// Load environment variables from a .env file into process.env.
dotenv.config();

// Import the required objects from the OpenAI package.
import { Configuration, OpenAIApi } from "openai";

// Create a configuration object for OpenAI with API key loaded from environment variables.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize the OpenAI API with the configuration object.
const openai = new OpenAIApi(configuration);

// Import the express and cors packages.
import express from "express";
import cors from "cors";

// Create a new express application instance.
const app = express();
// Use CORS middleware to enable CORS with various options.
app.use(cors());
// Use express.json() middleware for parsing incoming JSON in request bodies.
app.use(express.json());

// Define an asynchronous route handler for POST requests to the "/dream" endpoint.
app.post("/dream", async (req, res) => {
  // Log the received request body.
  console.log("Received a request:", req.body);

  // Extract the "prompt" property from the request body.
  const prompt = req.body.prompt;

  // Make an API call to OpenAI to create an image based on the provided prompt.
  // The function call is wrapped in a try-catch block to handle any potential errors.
  const aiResponse = await openai
    .createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    })
    .catch((err) => {
      // Log the error message if the API call fails.
      console.error("Error with OpenAI API call:", err);
    });

  // Extract the URL of the generated image from the API response.
  const image = aiResponse.data.data[0].url;
  // Send the image URL back to the client in the response.
  res.send({ image });
});

// Start the express server and listen for connections on port 5500.
app.listen(5500, () => console.log("make art on http://localhost:5500/dream"));
