Pythonic stories is a story generation website that was built with `create-react-app`, `flask`, a humble `JSON` dataset & ❤️

Feel free to take a look at `CONTRIBUTING.md` for contribution guidelines and areas to contribute!

# Local Development Instructions

## Prerequisites

The following is required for local dev:

- [Python 3](https://www.python.org/downloads/)
- Pip (would automatically come with Python, type `pip help` in command line to verify)
- [Node](https://nodejs.org/en/)
- npm (would come with Node installation, type `npm -version`)

## Setting up backend and starting server

Make sure you are in the `backend` - `hacktoberfest22-pythonic-stories/backend` in your terminal or command prompt.

- Follow the instructions here to set up the [virtual environment](https://docs.python.org/3/tutorial/venv.html)
- After activating the virtual env from the above step, install `flask` and `python-dotenv` using:

```
pip install flask python-dotenv
```

- Open up a new terminal or command prompt tab and start up server using:

```
flask run
```

Awesome! Now the server is up and running!

## Setting up frontend

- Install dependences and generate the `package-lock.json`

```
npm install
```

- Start up client side

```
npm start
```

And you're all set up! Navigate to http://localhost:3000/story, and hit `read new story` to see story content.

## Troubleshooting

If you run into an error such as `Could not proxy request /pusher/auth from localhost:3000 to http://localhost:5000 (ECONNREFUSED)`, please make sure you have the correct port and address of the running the server under `proxy` in `package.json`.

If there's anything missing in this README, feel free to create an issue and a PR to address it. Thank you and happy hacking!
