const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    platform: { type: String, required: true },
    username: { type: String, required: true },
    profileImage: { type: String },
    bio: { type: String },
    followerCount: { type: Number, default: 0 },
    goals: [{
        goalType: String,
        targetNumber: Number,
        currentNumber: Number,
        createdAt: { type: Date, default: Date.now },
        achieved: { type: Boolean, default: false }
    }],
    achievements: [String],
    verified: { type: Boolean, default: false },
    vip: { type: Boolean, default: false },
    messages: [],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
