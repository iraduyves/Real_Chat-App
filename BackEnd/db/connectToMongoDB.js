import mongoose from'mongoose';


const connectToMongoDB = async () => {  
    try {
        const conn = await mongoose.connect(process.env.Mongo_DB_URI, {
        });
        console.log(
            `MongoDB connected`
        );
    } 
    catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

export default connectToMongoDB;