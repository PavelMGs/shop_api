import { config } from "dotenv";
import express from "express";
import cors from "cors";
config();
import sequelize from "./db";
import "./models/models";
import router from "./routes";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";
import fileUpload from "express-fileupload";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload())
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Get endpoint" });
});

app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log("### server started at port: ", PORT);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
