import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoDbConnection from "./db/connectDB.js";

dotenv.config();
// mongoDB connection
mongoDbConnection();

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
	console.log(`server running on port : ${port}`);
});
