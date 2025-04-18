from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

STATE_FILE = 'state.json'

# Load current state from file or default to OFF
def load_state():
    try:
        with open(STATE_FILE, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {"state": "OFF"}

# Save state to file
def save_state(state):
    with open(STATE_FILE, 'w') as f:
        json.dump({"state": state}, f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/toggle', methods=['POST'])
def toggle():
    current = load_state()
    new_state = "OFF" if current["state"] == "ON" else "ON"
    save_state(new_state)
    return jsonify({"state": new_state})

@app.route('/state', methods=['GET'])
def get_state():
    return jsonify(load_state())

if __name__ == '__main__':
    app.run(debug=True)
