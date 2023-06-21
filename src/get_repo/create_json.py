import os
import json


def create_or_append_to_json(file_path):
    existing_data = {}
    with open(file_path, 'w') as file:
        json.dump(existing_data, file, indent=4)

