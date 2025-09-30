import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true, index: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export type IUser = {
    _id: string; name: string; email: string; password: string; createdAt: string;
};

export default models.User || model('User', UserSchema);