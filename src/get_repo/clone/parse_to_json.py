import os
import json


def load_files(folder_path, repo_name):
    folder_dict = {}
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path) and 'src' in item_path:
            if '.git' in item_path or '.mvn' in item_path:
                continue
            folder_dict[item] = load_files(item_path, repo_name)
        elif '.git' not in item_path and '.mvn' not in item_path and 'src' in item_path:
            with open(item_path, 'r', errors='ignore') as f:
                content = f.read()
            folder_dict[item] = content
    with open(f'../{repo_name}.json', 'w') as json_file:
        json.dump(folder_dict, json_file, indent=4)
    return folder_dict


# Specify the directory where the files are located
 # replace with your directory


