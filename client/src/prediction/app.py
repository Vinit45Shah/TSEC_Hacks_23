import numpy as np
from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = pickle.load(open("model.pkl", "rb"))


@app.route("/")
def home():
    return "<p>Hello, World!</p>"


@app.route("/predict", methods=["POST"])
def predict():
    print(request.headers)
    preg = int(request.headers.get("pregnancies"))
    glucose = int(request.headers.get("glucose"))
    bp = int(request.headers.get("bp"))
    skin = int(request.headers.get("skin"))
    insulin = int(request.headers.get("insulin"))
    bmi = float(request.headers.get("bmi"))
    pedigree = float(request.headers.get("pedigree"))
    age = int(request.headers.get("age"))

    features = [preg, glucose, bp, skin, insulin, bmi, pedigree, age]
    print(features)
    final_features = [np.array(features)]
    predicttion = model.predict(final_features)
    print(predicttion)
    result = {"prediction": int(predicttion[0])}
    return jsonify(result)


if __name__ == "__main__":
    app.run(port=7000, debug=True)