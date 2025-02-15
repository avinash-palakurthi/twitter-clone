import mongoose from "mongoose";

const mongoDbConnection = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected :${conn.connection.host}`);
	} catch (error) {
		console.error(`Error while connecting to MongoDB : ${error}`);
		process.exit(1);
	}
};

export default mongoDbConnection;
