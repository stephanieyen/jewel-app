import mongoose from 'mongoose'; // Used to specify uniformity for documents

const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String, 
    tags: [String], 
    selectedFile: String, 
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Turn schema into a model that we can run commands on 
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;