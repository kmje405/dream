document.addEventListener("DOMContentLoaded", function () {
  // Object to store DOM elements
  const domElements = {
    promptInput: document.querySelector("#promptInput"),
    generateButton: document.querySelector("#generate"),
    loadingMessage: document.querySelector("#loadingMessage"),
    resultImage: document.querySelector("#resultImage"),
  };

  domElements.promptInput.value = '';


  // Initial state of the page
  let isLoading = false;
  let imageLoaded = false;

  // Function to handle submission
  function submitPrompt() {
    isLoading = true;
    domElements.promptInput.style.display = 'none';
    domElements.generateButton.style.display = 'none';
    domElements.loadingMessage.style.display = 'block';

    // Fetch request
    fetch('http://localhost:3000/dream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: domElements.promptInput.value
      })
    })
      .then(response => response.json())
      .then(data => {
        displayImage(data.image);
      })
      .catch(error => {
        console.error('Error:', error);
        resetPage();
      });
  }

  // Function to display image
  function displayImage(url) {
    isLoading = false;
    imageLoaded = true;

    domElements.loadingMessage.style.display = 'none';
    domElements.resultImage.src = url;
    domElements.resultImage.style.display = 'block';
    domElements.generateButton.innerText = 'Submit another response';
    domElements.generateButton.style.display = 'block';
  }

  // Function to reset page
  function resetPage() {
    imageLoaded = false;
    domElements.promptInput.style.display = 'block';
    domElements.generateButton.style.display = 'block';
    domElements.generateButton.innerText = 'Generate';
    domElements.resultImage.style.display = 'none';
    domElements.loadingMessage.style.display = 'none';
    domElements.promptInput.value = '';
  }

  // Event Listener for the Generate Button
  domElements.generateButton.addEventListener('click', function () {
    if (isLoading || imageLoaded) {
      location.reload();
    } else {
      submitPrompt();
    }
  });

  // Event Listener for the Enter Key
  domElements.promptInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      submitPrompt();
    }
  });
});
