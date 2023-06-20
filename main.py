import os

import requests
import json

url = "https://api.openai.com/v1/chat/completions"
api_key = os.getenv('OPENAI_API_KEY')

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
}

response = requests.post(url, headers=headers, json=data)
response_data = response.json()
print(response_data)