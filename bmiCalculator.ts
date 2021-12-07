function calculateBmi(height: number, weight: number): string{
    let BMI = weight/((height/100)^2);
    
    if(BMI > 25.0){
        return `Overweight (overweight weight)`
    } else if(BMI > 18.5){
        return `Normal (healthy weight)`
    } else {
        return `Skinny (under weight)`
    }
}

console.log(calculateBmi(180, 74))