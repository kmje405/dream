# OpenAI Image Creation Project

This project uses the OpenAI API to generate images based on provided prompts.

## Prerequisites

- Node.js installed on your local machine
- npm (Node Package Manager) installed
- An OpenAI API key

## Setup

1. Clone this repository to your local machine.
2. Navigate into the directory of the project.
3. Install the required packages using npm by running the following command:

    ```bash
    npm install express cors openai dotenv
    ```

4. Create a `.env` file in the root directory of the project and add the OpenAI API key:

    ```env
    OPENAI_API_KEY=your_openai_api_key
    ```

    Replace `your_openai_api_key` with your actual OpenAI API key.

## Usage

1. Start the server by running the following command:

    ```bash
    node server.js
    ```

2. Once the server is running, you can make a POST request to `http://localhost:3000/dream` with a JSON body that includes a `prompt` key. The server will return a URL of an image based on the provided prompt.
