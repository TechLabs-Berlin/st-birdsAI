from flask import Flask, request, Response, jsonify
import json
from data import area_by_state, record_pred_df, amz_state
app = Flask(__name__)

@app.route("/sumarea", methods=["GET", "POST"])
def data_json():
    
    #return(area_by_state.to_json(orient='records'))
    #? returns the json object of the specific states coordinates and their area_km total deforested
    return(amz_state.to_json())
    
@app.route("/ESM", methods=["GET", "POST"])
def ESM_json():
  #return(predicted_ESM_df.to_json(orient='records'), recorded_areakm_df.to_json(orient='records'))
  return(record_pred_df.to_json())
if __name__ == "__main__":
  app.run(port=5000, debug=True)
 