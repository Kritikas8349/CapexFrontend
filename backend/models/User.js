const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    username: { type: String, default: "" },
    fullName: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, default: null },
    applicationType: { type: String, default: "" },
    country: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: { type: String, required: true },

    // ✅ Profile Fields
    state: { type: String, default: "" },
    city: { type: String, default: "" },
    zipCode: { type: String, default: "" },
    address: { type: String, default: "" },
    avatar: { type: String, default: "" },

    // ✅ Old 2FA Field (optional but keeping)
    google2fa: { type: String, default: null },

    // ✅ New 2FA Fields (Required)
    twoFactorSecret: { type: String, default: "" },
    isTwoFactorEnabled: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
