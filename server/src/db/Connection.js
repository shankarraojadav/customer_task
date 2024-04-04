import mongoose from "mongoose";

const Connection = async () => {
  try {
    const username = "shankarjadav";
    const password = encodeURIComponent("shankar123"); // Encode special characters
    const hostname = "cluster0.j0dfw.mongodb.net";
    const database = "your_database_name"; // Replace with your actual database name

    const url = `mongodb+srv://${username}:${password}@${hostname}/${database}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(url);

    console.log("db connected successfully");
  } catch (error) {
    console.log("error while connecting to db", error);
  }
};

export default Connection;
