import subprocess

# Install dependencies
subprocess.run(["pip", "install", "fastapi", "uvicorn", "pydantic", "requests", "python-multipart"], check=True)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

API_KEY = "AIzaSyBxDC6r-G42icC9K00XCpXIyR45hXhSQDA"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API_KEY}"

class Query(BaseModel):
    q: str

@app.post("/sentiment")
def give_sentiment(query: Query):
    return sentiment(query.q)

@app.post("/refiner")
def refine(query: Query):
    return refiner(query.q)

@app.post("/summarizer")
def summariser(query: Query):
    return summarise(query.q)

# Email refiner function
def refiner(text: str):
    data = {
        "contents": [{
            "parts": [{"text": "You are now a text refiner and you have to fix the grammatical error and spelling error also paraphrase the text and return the refined text in the same amount of words as given. The text is:" + text}]
        }]
    }
    response = requests.post(URL, headers={"Content-Type": "application/json"}, json=data)
    return handle_response(response)

# Email summarizer function
def summarise(text: str):
    data = {
        "contents": [{
            "parts": [{"text": "You are now a text summariser and you have to give the summary of a text that you will be given and you have to return a summary in a paragraph not more than 100 words. If the text itself is less than 100 words then summarise in same amount of words. The text is:" + text}]
        }]
    }
    response = requests.post(URL, headers={"Content-Type": "application/json"}, json=data)
    return handle_response(response)

# Sentiment analyzer function
def sentiment(text: str):
    data = {
        "contents": [{
            "parts": [{"text": "You are now a sentiment analyser and you will be given a text and you have to give the sentiment of the text in less than 30 words. Give the answer only as a single paragraph. The text is:" + text}]
        }]
    }
    response = requests.post(URL, headers={"Content-Type": "application/json"}, json=data)
    return handle_response(response)

# Handle API response
def handle_response(response):
    if response.status_code == 200:
        result = response.json()
        try:
            return {"response": result["candidates"][0]["content"]["parts"][0]["text"]}
        except (KeyError, IndexError) as e:
            return {"error": "Unexpected response format", "details": str(e)}
    else:
        return {"error": "API request failed", "status_code": response.status_code, "message": response.text}
