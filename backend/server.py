from flask import Flask

app = Flask(__name__)


@app.route("/story")
def get_story():
    return "STORY TIME!!"
