import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    menuId: [{ type: Schema.Types.ObjectId, ref: 'Menu' }],
}, { timestamps: true });

module.exports = mongoose.model('User', user);
