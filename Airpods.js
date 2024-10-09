const mongoose = require('mongoose');

const airPodsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    AirPodName: { type: String, required: true },
    image: { type: String, required: true },
    Price: { type: Number, required: true }
});

const AirPods = mongoose.model('AirPods', airPodsSchema,'AirPods');

module.exports = AirPods;