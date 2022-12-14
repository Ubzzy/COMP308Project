var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var dailyInformation = mongoose.Schema(
    {
        cp: {type: String, required: true},
        user_id: {type: String, required: true},
        trestbps: {type: String, required: true},
        chol: {type: String, required: true},
        fps: {type: String, required: true},
        restecg: {type: String, required: true},
        thalch: {type: String, required: true},
        exang: {type: String, required: true},
        oldpeak: {type: String, required: true},
        slope: {type: String, required: true},
        thal: {type: String, required: true},
        target: {type: String, required: true},

    },
    {
        collection: "dailyinformation",
    }
);


module.exports = mongoose.model("dailyInformation", dailyInformation);
