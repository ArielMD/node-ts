import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
createConnection();

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
