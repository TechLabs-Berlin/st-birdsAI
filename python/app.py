from flask import Flask, request
import json


app = Flask(__name__)

@app.route("/home", methods=["GET"])
def testing():
    return('hello world')

if __name__ == "__main__":
  app.run(port=5000, debug=True)
