const mongoose = require('../config/database');

const Schema = mongoose.schema;

const TaskSchema = new Schema({
    macAdress:{type: String, required: true},
    type: {type: Number, requerid: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, required: false},
    created: {type: Date, required: Date.now},
});

module.exports = mongoose.model('Task', TaskSchema);