import os
import requests
import json

url = "https://api.openai.com/v1/chat/completions"
api_key = os.getenv('OPENAI_API_KEY')

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

with open('src/repo_json/customer-app.json', 'r') as file:
    json_repo = json.load(file)
data_passed = json_repo['src']['main']['java']['com']['ing']['customerapidemo']['controller']
data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {"role": "system", "content": "You are a software architect "
                                      "that understands the code that I give you and"
                                      "complete tasks based on the code and context that I give you."
                                      f"This is the project: {data_passed}"},

        {"role": "user", "content": f"Please create a unit test for getById method and tell me"
                                    f"where to put this test file in the project"}
    ]
}

response = requests.post(url, headers=headers, json=data)
response_data = response.json()
print(response_data)
with open(f'response.json', 'w') as json_file:
    json.dump(response_data, json_file, indent=4)
