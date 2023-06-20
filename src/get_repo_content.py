import os
import json
from git import Repo


def copy_repo_contents(repo_url, destination_folder):
    # Clone the Git repository
    repo = Repo.clone_from(repo_url, destination_folder)

    # Get the root directory of the cloned repository
    repo_root = repo.working_tree_dir

    # Traverse the repository directory and its subdirectories
    files_data = []
    for root, dirs, files in os.walk(repo_root):
        for file_name in files:
            file_path = os.path.join(root, file_name)

            # Read the contents of each file
            with open(file_path, "r") as file:
                file_content = file.read()

            # Create a dictionary entry for the file
            file_data = {
                "file_path": file_path,
                "file_content": file_content
            }
            files_data.append(file_data)

    # Write the files' data to a JSON file
    json_file_path = os.path.join(destination_folder, "repo_contents.json")
    with open(json_file_path, "w") as json_file:
        json.dump(files_data, json_file, indent=4)

    print(f"Repository contents copied and JSON file created: {json_file_path}")


# Example usage
repo_url = "https://github.com/example-user/example-repo.git"
destination_folder = "repo_copy"

copy_repo_contents(repo_url, destination_folder)
