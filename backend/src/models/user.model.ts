import mongoose, { Schema } from 'mongoose';
import { UserDocument } from '../api/interfaces/user.interface';

const UserSchema: Schema<UserDocument> = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        code: { type: String },
        createdAt: { type: Date },
        type: { type: Number, enum: [1, 2] } // i for 'verification', and 2 for 'password'
    },
    verified: {
        type: Boolean,
        default: false
    },
}, {
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            delete ret.password; // Remove password from the JSON response
            delete ret.__v; // Optionally remove __v
            return ret;
        }
    },
    timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;
