// Import dotenv package for handling environment variables.
import * as dotenv from "dotenv";
// Load environment variables from a .env file into process.env.
dotenv.config();

// Import the required objects from the OpenAI package.
import { Configuration, OpenAIApi } from "openai";

// Create a configuration object for OpenAI with API key loaded from environment variables.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Get the API key from environment variables
});

// Initialize the OpenAI API with the configuration object.
const openai = new OpenAIApi(configuration);

// Import the express and cors packages.
import express from "express";
import cors from "cors";

// CORS options for enabling cross-origin requests.
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your front end's localhost port
  optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE11) choke on 204
};


// Create a new express application instance.
const app = express();
// Use CORS middleware to enable CORS with various options.
app.use(cors(corsOptions));
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
      size: "1024x1024", // Define the size of the image to be created
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

// Define a GET route handler for the "/dream" endpoint.
app.get("/dream", async (req, res) => {
  // Just send a "hello" message for this GET request.
  res.send("hello");
});

// Start the express server and listen for connections on port 3000.
app.listen(3000, () => console.log("Server started. Make art on http://localhost:3000/dream"));
