// Enhanced JavaScript for Giga Text application
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const inputText = document.getElementById('inputText');
    const refineBtn = document.getElementById('refine');
    const sentimentBtn = document.getElementById('sentiment');
    const summaryBtn = document.getElementById('summary');
    const outputContainer = document.querySelector('.output-container');
    const outputContent = document.getElementById('outputContent');
    const copyBtn = document.getElementById('copyResult');
    
    // Add event listeners
    refineBtn.addEventListener('click', () => processText('refine'));
    sentimentBtn.addEventListener('click', () => processText('sentiment'));
    summaryBtn.addEventListener('click', () => processText('summary'));
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Process text based on action type
    function processText(action) {
        const text = inputText.value.trim();
        
        if (!text) {
            showError('Please enter some text first!');
            return;
        }
        
        // Show loading state
        showLoading();
        
        // Simulate API processing (replace with actual API calls)
        setTimeout(() => {
            let result;
            
            switch(action) {
                case 'refine':
                    result = refineText(text);
                    break;
                case 'sentiment':
                    result = getSentiment(text);
                    break;
                case 'summary':
                    result = summarizeText(text);
                    break;
                default:
                    result = 'Invalid action';
            }
            
            showResult(result);
        }, 800); // Simulated delay
    }
    
    // Mock functions (replace with actual implementation)
    function refineText(text) {
        // Example refinement logic - replace with actual implementation
        return text
            .replace(/\s+/g, ' ')
            .replace(/\bi\b/g, 'I')
            .replace(/\b[a-z]/g, m => m.toUpperCase())
            .replace(/\.\s+[a-z]/g, m => m.toUpperCase());
    }
    
    function getSentiment(text) {
        // Example sentiment analysis - replace with actual implementation
        const words = text.toLowerCase().split(/\W+/);
        const positiveWords = ['good', 'great', 'excellent', 'amazing', 'love', 'happy'];
        const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'sad', 'angry'];
        
        let positive = 0, negative = 0;
        
        words.forEach(word => {
            if (positiveWords.includes(word)) positive++;
            if (negativeWords.includes(word)) negative++;
        });
        
        let sentiment;
        if (positive > negative) {
            sentiment = 'Positive 😊';
        } else if (negative > positive) {
            sentiment = 'Negative 😞';
        } else {
            sentiment = 'Neutral 😐';
        }
        
        return `<strong>Sentiment Analysis:</strong> ${sentiment}<br>
                <strong>Positive words:</strong> ${positive}<br>
                <strong>Negative words:</strong> ${negative}`;
    }
    
    function summarizeText(text) {
        // Example summarization logic - replace with actual implementation
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
        
        if (sentences.length <= 1) {
            return text;
        }
        
        // Simple summarization: take first and last sentence
        return sentences[0] + (sentences.length > 2 ? '... ' : ' ') + sentences[sentences.length - 1];
    }
    
    // UI helper functions
    function showLoading() {
        outputContainer.classList.remove('hidden');
        outputContent.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Processing...</div>';
    }
    
    function showResult(result) {
        outputContainer.classList.remove('hidden');
        outputContent.innerHTML = result;
    }
    
    function showError(message) {
        outputContainer.classList.remove('hidden');
        outputContent.innerHTML = `<div class="error"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
    }
    
    function copyToClipboard() {
        const textToCopy = outputContent.innerText;
        navigator.clipboard.writeText(textToC
