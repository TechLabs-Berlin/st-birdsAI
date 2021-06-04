from flask import Flask, request, Response
import json
from data import area_by_state

app = Flask(__name__)

@app.route("/home", methods=["GET"])
def data_json():
    
    return(area_by_state.to_json(orient='records'))
    

if __name__ == "__main__":
  app.run(port=5000, debug=True)
