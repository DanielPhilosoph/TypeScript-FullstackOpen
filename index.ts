import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  if (req.query.weight && req.query.height) {
    const weight = +req.query.weight;
    const height = +req.query.height;
    if (weight && height) {
      const result = calculateBmi(height, weight);
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
  } else {
    res.json({
      error: "malformation parameters",
    });
  }
});

interface body {
  daily_exercises?: string[];
  target?: string;
}
app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body: body = req.body;
  if (body["daily_exercises"] && body.target) {
    const target: number = +body.target;
    const daily_exercises: number[] = body["daily_exercises"].map(
      (hours: string) => {
        return +hours;
      }
    );
    if (target && !daily_exercises.includes(NaN)) {
      const result = calculateExercises(daily_exercises, target);
      res.json(result);
    } else {
      res.json({
        error: "malformation parameters",
      });
    }
  } else {
    res.json({
      error: "parameters missing",
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
