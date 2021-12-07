interface result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating?: number;
  ratingDescription: string;
  target?: number;
  average: number;
}

function calculateExercises(dailyExercise: number[], rating?: number): result {
  let trainingDays = dailyExercise.filter((hours) => hours !== 0).length;
  let sum = dailyExercise.reduce((a, b) => a + b, 0);
  let average = sum / trainingDays;
  let returned: result;
  if (rating) {
    returned = {
      periodLength: dailyExercise.length,
      trainingDays,
      success: sum > 20 ? true : false,
      rating: rating,
      ratingDescription:
        sum > 20
          ? "You did well! Keep it up!"
          : "not too bad but could be better",
      target: rating,
      average,
    };
  } else {
    returned = {
      periodLength: dailyExercise.length,
      trainingDays,
      success: sum > 20 ? true : false,
      ratingDescription:
        sum > 20
          ? "You did well! Keep it up!"
          : "not too bad but could be better",
      average,
    };
  }
  return returned;
}

let args = process.argv.slice(2);
let numbersArr: number[];
try {
  numbersArr = args.map((arg) => {
    return parseInt(arg);
  });
  console.log(calculateExercises(numbersArr, 2));
} catch (error) {
  console.log("All args must be number");
}
