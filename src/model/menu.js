import mongoose from 'mongoose';
const { Schema } = mongoose;

const menu = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Menu', menu);
