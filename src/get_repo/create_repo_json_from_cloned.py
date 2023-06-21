import os
from src.get_repo.clone.clone_repo import clone_repo
from src.get_repo.clone.parse_to_json import load_files


repo_owner = os.getenv('repo_owner_apicrypto')
repo_name = os.getenv('repo_name_apicrypto')
token = os.getenv('apicrypto_repo')
folder_path = f"../../cloned_repos/{repo_name}"

clone_repo(repo_owner, repo_name, token)
folder_dict = load_files(folder_path, repo_name)
