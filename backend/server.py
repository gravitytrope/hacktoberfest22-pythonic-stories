from flask import Flask
import json
import random

app = Flask(__name__)


def get_random_content(contents):
    return random.choice(contents)


@app.route("/story")
def get_story():
    stories_json = {}
    stories = []

    with open('stories.json', 'r') as file:
        stories_json = json.load(file)

        for story in stories_json:
            story_string = story["prompt"] + " " + \
                get_random_content(story["content"])
            stories.append(story_string)

    return stories
