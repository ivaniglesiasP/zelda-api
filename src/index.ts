import express from "express";
import charactersRouter from "./routes/characters";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/api/characters", charactersRouter);

app.listen(PORT, () => {
  console.log("Server runnig!");
});
