const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    class: String,
    attack: String,
});

const godSchema = new mongoose.Schema({
    name: { type: String, unique: true},
    class: [classSchema],
})

const God = mongoose.model('God', godSchema);

module.exports = God