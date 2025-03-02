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

// Function to call the Summary API
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
        console.error("Error fetching summary:", error);
        return "Error summarizing text.";
    }
}

// Select elements
const outputDiv = document.getElementById("output");
const inputField = document.getElementById("inputText");

// Hide output initially
outputDiv.style.display = "none";

// Function to display output
function displayOutput(text) {
    if (text.trim() !== "") {
        outputDiv.textContent = text;
        outputDiv.style.display = "block"; // Show output box
    } else {
        outputDiv.style.display = "none"; // Hide output box when empty
    }
}

// Event Listener for Refining
document.getElementById("refine").addEventListener("click", async () => {
    const inputText = inputField.value.trim();

    if (inputText === "") {
        alert("Please enter text to refine.");
        return;
    }

    displayOutput("Refining...");
    const refinedText = await refineText(inputText);
    displayOutput(refinedText);
});

// Event Listener for Sentiment Analysis
document.getElementById("sentiment").addEventListener("click", async () => {
    const inputText = inputField.value.trim();

    if (inputText === "") {
        alert("Please enter text to analyze.");
        return;
    }

    displayOutput("Analyzing sentiment...");
    const sentiment = await getSentiment(inputText);
    displayOutput(sentiment);
});

// Event Listener for Summarizer
document.getElementById("summary").addEventListener("click", async () => {
    const inputText = inputField.value.trim();

    if (inputText === "") {
        alert("Please enter text to summarize.");
        return;
    }

    displayOutput("Summarizing...");
    const summary = await getSummary(inputText);
    displayOutput(summary);
});
