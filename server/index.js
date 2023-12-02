import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import CustomerRoutes from "./src/routes/customerRouter.js"
import Connection from "./src/db/Connection.js";

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
