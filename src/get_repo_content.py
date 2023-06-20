import requests
import json
import base64


# Repository details
repo_owner = "AlexandruNae"
repo_name = "FRED"

# GitHub API URL for the repository
repo_api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents"
# Headers for the API request
headers = {
    "Accept": "application/vnd.github.v3+json",
}


# Function to fetch file content
def fetch_content(path=''):
    contents_url = f"{repo_api_url.format(owner=repo_owner, repo=repo_name)}/{path}"
    response = requests.get(contents_url, headers=headers)

    if response.status_code == 200:
        files = response.json()
        if type(files) is dict:
            files = [files]

        for file in files:
            if file["type"] == "file" and '.idea' not in file['path']:
                file_response = requests.get(file["url"], headers=headers)
                if file_response.status_code == 200:
                    file_data = file_response.json()
                    file_content = base64.b64decode(file_data["content"]).decode('utf-8')
                    repo_data[file["path"]] = file_content
            elif file["type"] == "dir":
                fetch_content(file["path"])


# Create a dictionary to store the file paths and contents
repo_data = {}

# Call the function to fetch the content
fetch_content()

# Print the repository data
print(json.dumps(repo_data, indent=4))
with open('repository.json', 'w') as json_file:
    json.dump(repo_data, json_file, indent=4)



# repo_url = "https://github.com/AlexandruNae/FRED"
# json_file_path = "C:\\Users\\alexn\\PycharmProjects\\fred_repo_testing\\repo.json"
# access_token = "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"