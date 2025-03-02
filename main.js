// API endpoint configuration
const API_BASE_URL = "http://localhost:8000";

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const inputText = document.getElementById("inputText");
    const refineBtn = document.getElementById("refine");
    const sentimentBtn = document.getElementById("sentiment");
    const summaryBtn = document.getElementById("summary");
    const outputContainer = document.querySelector(".output-container");
    const outputContent = document.getElementById("outputContent");
    const copyBtn = document.getElementById("copyResult");
    
    // Add event listeners
    if (refineBtn) refineBtn.addEventListener("click", () => processText("refine"));
    if (sentimentBtn) sentimentBtn.addEventListener("click", () => processText("sentiment"));
    if (summaryBtn) summaryBtn.addEventListener("click", () => processText("summary"));
    if (copyBtn) copyBtn.addEventListener("click", copyToClipboard);
    
    // Function to process text based on action type
    async function processText(action) {
        const text = inputText.value.trim();
        
        if (!text) {
            showError("Please enter some text first!");
            return;
        }
        
        // Show loading state
        showLoading();
        
        let result;
        try {
            switch(action) {
                case "refine":
                    result = await refineText(text);
                    break;
                case "sentiment":
                    result = await getSentiment(text);
                    break;
                case "summary":
                    result = await getSummary(text);
                    break;
                default:
                    result = "Invalid action";
            }
            
            showResult(result);
        } catch (error) {
            showError("An error occurred: " + error.message);
        }
    }
    
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
            throw new Error("Error refining text.");
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
            throw new Error("Error analyzing sentiment.");
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
            throw new Error("Error summarizing text.");
        }
    }
    
    // UI helper functions
    function showLoading() {
        outputContainer.classList.remove("hidden");
        outputContent.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Processing...</div>';
    }
    
    function showResult(result) {
        outputContainer.classList.remove("hidden");
        outputContent.innerHTML = result;
    }
    
    function showError(message) {
        outputContainer.classList.remove("hidden");
        outputContent.innerHTML = `<div class="error"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
    }
    
    function copyToClipboard() {
        const textToCopy = outputContent.innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Show temporary success message
                const originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }
});
