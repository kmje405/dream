// Select the form element from the DOM.
const form = document.querySelector("#imageProcessor");

// Select the spinner from the DOM.
const spinner = document.querySelector("#spinner");

// Add a submit event listener to the form.
form.addEventListener("submit", async (e) => {
  // Prevent the default form submission action.
  e.preventDefault();

  // Show the spinner.
  spinner.classList.remove("d-none");

  try {
    // Create a new FormData object from the form.
    const data = new FormData(form);

    // Send a POST request to the "/dream" endpoint with the form data.
    const response = await fetch("http://localhost:3000/dream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Convert the form data to a JSON string before sending it in the request body.
      body: JSON.stringify({
        prompt: data.get("promptInput"),
      }),
    });

    // Parse the JSON response and extract the "image" property from it.
    const { image } = await response.json();

    // Select the result element from the DOM.
    const resultImage = document.querySelector("#resultImage");
    // Update the src attribute of the result image.
    resultImage.src = image;
  } catch (err) {
    // Log any errors that occur during the fetch operation.
    console.error(err);
  } finally {
    // Hide the spinner.
    spinner.classList.add("d-none");
  }
});
