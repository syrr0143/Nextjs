import mongoose from "mongoose";

// Define the schema for the Blog collection
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Example of required field
    },
    description: {
        type: String,
        required: true,
    },
    // Example of adding timestamps
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // Example of adding updated timestamp
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Create the Blog model based on the schema
// export const Blog = mongoose.model('Blog', BlogSchema);
export const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

