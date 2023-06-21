import requests
import json
import base64
import os


# Function to fetch file content
def fetch_content(path=''):
    # Repository details
    repo_owner = os.getenv('repo_owner')
    repo_name = os.getenv('repo_name')
    fine_grained_token = os.getenv('fine_grained_token')
    # GitHub API URL for the repository
    repo_api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents"
    # Headers for the API request
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"Bearer {fine_grained_token}",
        "X-GitHub-Api-Version": "2022-11-28"
    }
    contents_url = f"{repo_api_url.format(owner=repo_owner, repo=repo_name)}/{path}"
    response = requests.get(contents_url, headers=headers)

    # Create a dictionary to store the file paths and contents
    repo_data = {}

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
            elif file["type"] == "dir" and '.idea' not in file['path']:
                fetch_content(file["path"])

    with open('repository.json', 'r') as file:
        existing_data = json.loads(file.read())

    existing_data.update(repo_data)
    # Print the repository data
    # print(json.dumps(repo_data, indent=4))
    with open('repository.json', 'w') as json_file:
        json.dump(existing_data, json_file, indent=4)
