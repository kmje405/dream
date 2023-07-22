document.addEventListener("DOMContentLoaded", function () {
  // Object to store DOM elements
  const domElements = {
    textarea: document.querySelector("#promptInput"),
    submitButton: document.querySelector("#generate"),
    loadingMessage: document.querySelector("#loadingMessage"),
    resultWindow: document.querySelector("#imageProcessor"),
    resultImage: document.querySelector("#resultImage"),
  };

  // Function to toggle UI Elements
  function toggleUIElements(isLoading, showButton) {
    domElements.loadingMessage.style.display = isLoading ? "block" : "none";
    domElements.textarea.style.display = showButton ? "none" : "block";
    domElements.resultWindow.style.display = isLoading ? "none" : "block";

    if (showButton) {
      domElements.submitButton.textContent = "Ready for Another Prompt";
    } else {
      domElements.submitButton.textContent = "Generate";
    }
  }

  // Function to fetch Dream Image
  async function fetchDreamImage(prompt) {
    const response = await fetch("http://localhost:3000/dream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dream image");
    }

    const { image } = await response.json();
    return image;
  }

  // Add event listener for Button Click
  domElements.submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    // If the button text is "Generate", fetch the image and display it
    if (domElements.submitButton.textContent === "Generate") {
      try {
        toggleUIElements(true, false);
        const image = await fetchDreamImage(domElements.textarea.value);
        domElements.resultImage.src = image;
        domElements.resultImage.style.display = "block";
        toggleUIElements(false, true);
      } catch (err) {
        console.error(err);
        toggleUIElements(false, false);
      }
    } else {
      // If the button text is "Ready for Another Prompt", reload the page
      location.reload();
    }
  });
});
