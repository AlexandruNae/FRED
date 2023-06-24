import json


# Function to convert the initial JSON data to the desired format
def transform_data():
    # Initial JSON data
    with open('../../repo_json/repository.json') as json_file:
        input_data = json.load(json_file)
    output_data = {}
    for path, content in input_data.items():
        path_parts = path.split('/')
        current_level = output_data
        for part in path_parts[:-1]:
            if part not in current_level:
                current_level[part] = {}
            current_level = current_level[part]
        current_level[path_parts[-1]] = content
    with open('../../repo_json/repository.json', 'w') as json_file:
        json.dump(output_data, json_file, indent=4)
