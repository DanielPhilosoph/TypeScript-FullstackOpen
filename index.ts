import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  if (req.query.weight && req.query.height) {
    let weight = +req.query.weight;
    let height = +req.query.height;
    if (weight && height) {
      let result = calculateBmi(height, weight);
      res.json({
        weight,
        height,
        bmi: result,
      });
    } else {
      res.json({
        error: "malformation parameters",
      });
    }
  }

  //
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
