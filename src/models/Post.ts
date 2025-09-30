import { Schema, models, model } from 'mongoose';

const PostSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    category: { type: String },
    imageBase64: { type: String },
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export type IPost = {
    _id: string; title: string; description: string; date: string; location: string;
    category?: string; imageBase64?: string; authorId: string; authorName: string; createdAt: string;
};

export default models.Post || model('Post', PostSchema);