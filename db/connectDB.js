import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://maria:maria@cluster0.zjxj2xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;