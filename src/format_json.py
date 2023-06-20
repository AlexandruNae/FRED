import json

# Initial JSON data
with open('repository.json') as json_file:
  data = json.load(json_file)

# Function to convert the initial JSON data to the desired format
def transform_data(input_data):
    output_data = {}
    for path, content in input_data.items():
        path_parts = path.split('/')
        current_level = output_data
        for part in path_parts[:-1]:
            if part not in current_level:
                current_level[part] = {}
            current_level = current_level[part]
        current_level[path_parts[-1]] = content
    return output_data

# Transform the data
transformed_data = transform_data(data)

# Print the transformed data
with open('repository.json', 'w') as json_file:
    json.dump(transformed_data, json_file, indent=4)