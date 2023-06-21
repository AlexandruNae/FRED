from src.get_repo.get_repo_content import fetch_content
from src.get_repo.format_json import transform_data
from src.get_repo.create_json import create_json


json_file_path = 'repository.json'
create_json(json_file_path)
fetch_content(json_file_path)
transform_data()
