import mongoose from'mongoose';


const connectToMongoDB = async () => {  
    try {
        const conn = await mongoose.connect(process.env.Mongo_DB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,

        });
        console.log(
            `MongoDB connected`
            // `MongoDB connected: ${conn.connection.host}`
        );
    } 
    catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

export default connectToMongoDB;