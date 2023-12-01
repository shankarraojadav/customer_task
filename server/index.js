import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./src/config/connection.js";
import CustomerRoutes from "./src/routes/customerRouter.js"

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("", CustomerRoutes);
app.listen(port, () => {
  console.log("Server started on port", port);
});

Connection();
