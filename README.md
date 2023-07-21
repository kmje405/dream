# AI Photo Generator

This AI Photo Generator is a project that integrates OpenAI's DALL·E to generate images based on user-defined prompts. The project is comprised of a nice and aesthetically pleasing front-end that interacts with a back-end Express server, which is responsible for communicating with OpenAI's API.

## Features

- Takes user input as a prompt to generate custom images.
- An aesthetically pleasing and responsive front-end.
- Backend server to handle communication with OpenAI's DALL·E API.
- Gradient color animations.

## Setup and Installation

### Step 1: Clone the Repository

Clone the repository to your local machine.

### Step 2: Install Dependencies

Run `npm install` in the root directory to install all the necessary packages that are listed in the `package.json` file.

### Step 3: OpenAI API Key

You'll need to sign up for an account on the OpenAI website to get an API key. After obtaining the key, create a `.env` file in your root directory and add your OpenAI API key as follows:

``` bash
OPENAI_API_KEY=your-api-key-goes-here
```

### Step 4: Run the Server

Start the server by running `node server.js`. The server runs on port 3000.

### Step 5: Open the Web Application

Open `index.html` in your browser to start using the AI Photo Generator.

## Documentation

### HTML & CSS

The HTML markup consists of a main container that houses the page title, result window (where the generated image will appear), and a form for user input. The form comprises a textarea for user prompts and a submit button.

The CSS uses custom properties for color and font choices, and an innovative gradient color animation. We've made use of Flexbox for layout purposes, and blur effects for a pleasant UI experience.

### Server-Side JavaScript

The server is built using Express.js and makes use of the OpenAI API to generate images. dotenv is used for handling environment variables, and cors for handling cross-origin requests. There are two routes defined: a POST route to receive the prompt from the client, generate the image, and send the URL back to the client; and a static GET route that sends a "hello" message.

### Client-Side JavaScript

Client-side JavaScript is responsible for handling the form submission event, sending the prompt to the server, and displaying the generated image. A custom function, `rotateGradient`, is also defined to handle the gradient rotation animation.

Please ensure to keep the documentation updated as the code evolves, to help current and future developers understand the design and implementation choices.

## License

This project is licensed under the MIT License.

## Disclaimer

Please use this software responsibly and respect all terms and conditions of OpenAI's API use.
