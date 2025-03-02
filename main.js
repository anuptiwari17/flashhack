const API_BASE_URL = "http://localhost:8000";

// Function to call the Refiner API
async function refineText(inputText) {
    try {
        const response = await fetch(`${API_BASE_URL}/refiner`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ q: inputText }),
        });

        const data = await response.json();
        return data.response || data.error;
    } catch (error) {
        console.error("Error fetching refined text:", error);
        return "Error refining text.";
    }
}

// Function to call the Sentiment API
async function getSentiment(inputText) {
    try {
        const response = await fetch(`${API_BASE_URL}/sentiment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ q: inputText }),
        });

        const data = await response.json();
        return data.response || data.error;
    } catch (error) {
        console.error("Error fetching sentiment analysis:", error);
        return "Error analyzing sentiment.";
    }
}

//Function to call summary API
async function getSummary(inputText) {
    try {
        const response = await fetch(`${API_BASE_URL}/summarizer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ q: inputText }),
        });

        const data = await response.json();
        return data.response || data.error;
    } catch (error) {
        console.error("Error fetching sentiment analysis:", error);
        return "Error analyzing sentiment.";
    }
}


// Select elements
const output = document.getElementById("output");
const inputField = document.getElementById("inputText"); // Fix input field ID

// Event Listener for Refining
document.getElementById("refine").addEventListener("click", async () => {
    const inputText = inputField.value.trim(); // Get input value

    if (inputText === "") {
        alert("Please enter text to refine.");
        return;
    }

    // Call API and update output
    output.textContent = "Refining...";
    const refinedText = await refineText(inputText);
    output.textContent = refinedText;
});

// Event Listener for Sentiment Analysis
document.getElementById("sentiment").addEventListener("click", async () => {
    const inputText = inputField.value.trim(); // Get input value

    if (inputText === "") {
        alert("Please enter email to analyze.");
        return;
    }

    // Call API and update output
    output.textContent = "Analyzing sentiment...";
    const sentiment = await getSentiment(inputText);
    output.textContent = sentiment;
});

//Event listener for summariser
document.getElementById("summary").addEventListener("click", async () => {
    const inputText = inputField.value.trim(); // Get input value

    if (inputText === "") {
        alert("Please enter text to refine.");
        return;
    }

    // Call API and update output
    output.textContent = "Summarising...";
    const sum = await getSummary(inputText);
    output.textContent = sum;
});

