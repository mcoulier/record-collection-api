const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

let Record = module.exports = mongoose.model('record', recordSchema);

module.exports.get = function (callback, limit) {
    Record.find(callback).limit(limit);
}