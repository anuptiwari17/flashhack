from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
app = FastAPI()
import requests
import json
API_KEY = "AIzaSyC_WQRG1JmV42vlZfA04gRb3IGj3KgpZqI"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API_KEY}"

class Query(BaseModel):
    q: str

@app.post("/sentiment")
def give_sentiment(query: Query):
    return sentiment(query.q)

@app.post("/refiner")
def refine(query:Query):
    return refiner(query.q)

#Email refiner:
def refiner(text: str):
    data = {
        "contents": [{
            "parts": [{"text": "You are now a text refiner and you have to fix the grammatical error and spelling error also paraphrase the text and return the refined text in the same amount of words as given. The text is:"+text}]
        }] 
    }

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(URL, headers=headers, json=data)

    if response.status_code == 200:
        result = response.json()

        try:
            return {"response": result["candidates"][0]["content"]["parts"][0]["text"]}
        except (KeyError, IndexError) as e:
            return {"error": "Unexpected response format", "details": str(e)}
    else:
        return {"error": "API request failed", "status_code": response.status_code, "message": response.text}

"""--------------------------------------------------------------------------"""

#Sentiment analyser
def sentiment(text: str):
    data = {
        "contents": [{
            "parts": [{"text": "You are now a sentiment analyser and you will be given an email and you have to give the sentiment of the email in less than 30 words.Give the answer only as a single paragrpah.The email is:"+text}]
        }] 
    }

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(URL, headers=headers, json=data)

    if response.status_code == 200:
        result = response.json()

        try:
            return {"response": result["candidates"][0]["content"]["parts"][0]["text"]}
        except (KeyError, IndexError) as e:
            return {"error": "Unexpected response format", "details": str(e)}
    else:
        return {"error": "API request failed", "status_code": response.status_code, "message": response.text}