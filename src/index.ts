import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/test", (_req, res) => {
  console.log("Someone is getting data");
  res.send("Sending data about zelda");
});

app.listen(PORT, () => {
  console.log("Server runnig!");
});
