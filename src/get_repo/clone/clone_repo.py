from git import Repo


def clone_repo(repo_owner, repo_name, token):
# Define the name of the repo you want to clone
    repo_url = f"https://github.com/{repo_owner}/{repo_name}.git" # Replace with your repo URL

    # The local path where the repo will be cloned
    local_dir = f"../../cloned_repos/{repo_name}" # Replace with your local directory

    # Add your token to the repo url
    repo_url_with_token = repo_url.replace("https://", "https://x-access-token:" + token + "@")

    # Clone the repository
    Repo.clone_from(repo_url_with_token, local_dir)
