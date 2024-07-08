import mongoose from 'mongoose'
const connectToDb = async () => {

    const connectionurl = 'mongodb+srv://sy816120:qc9VdWkM5Ywqt038@cluster0.z0pjf9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    mongoose.connect(connectionurl)
        .then(() => {
            console.log('connected to mongodb')
        })
        .catch((error) => console.error('Failed to connect to MongoDB', error))
};

export default connectToDb;