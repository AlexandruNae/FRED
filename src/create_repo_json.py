from no_clone.get_repo_content import fetch_content
from no_clone.format_json import transform_data
from no_clone.create_json import create_json


json_file_path = 'repo_json/repository.json'
create_json(json_file_path)
fetch_content(json_file_path)
transform_data()
