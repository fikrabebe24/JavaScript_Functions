console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdd(count){
    
    for(let d = 1; d < count; d++){
        if (d % 2 > 0){
            console.log(d);
        }
    }

    //if count < 0
}

printOdd(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    
    let aboveSixteen = `Congrats! ${userName}, you can drive!`;

    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16){
        console.log(belowSexteen);
    }
    else if(age > 16){
        console.log(aboveSixteen);
    }


}

checkAge(`aspiringDriver`, 25);

//Exercise 3
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y){
    
    let point = [x, y];
    
    if(x > 0 && y > 0){
        console.log(`${point} is in Quadrant 1`);
    }
    else if(x < 0 && y > 0){
        console.log(`${point} is in Quadrant 2`);
    }
    else if(x < 0 && y < 0){
        console.log(`${point} is in Quadrant 3`);
    }
    else if(x > 0 && y < 0){
        console.log(`${point} is in Quadrant 4`);
    }
    else if(x = 0 && y > 0){
        console.log(`${point} is on the x-axis`);
    }
    else if(x > 0 && y == 0){
        console.log(`${point} is on the y-axis`);
    }

}

cartesianPlane(-4, 5);

//Exercise 4:
console.log("EXERCISE 4:\n==========\n");
function triangleCheck(s, a, h){

    return s + a > h || s + h > a || h + a > s;
}

function triangleType(s, a, h){
    let isTriangle = triangleCheck(s, a, h);
    
    if(isTriangle){
       if(s == a && a == h){
        console.log(`equalateral triangle`);
    }
    else if (s == a || s == h || a == h){
        console.log(`isosceles triangle`);
    }
    else if(s != a && a != h && s != h){
        console.log(`scalene triangle`);
    }
    }
    else{
        return `Not a triangle`;
    }
}

triangleType(3, 4, 7);
triangleCheck(5, 5, 6);
triangleCheck(2, 8, 15);

//Exercise 5:
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage){
    let periodLength = 30;
    let average = usage / day;
    let predictedAverage = planLimit / average;
    let remainingData = planLimit - usage;

    if(average > predictedAverage){
        currentStat = "Exceeding"
    }else if(average < predictedAverage){
        currentStat = "Below"
    }else{
        currentStat = "At"
    }

    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);

    console.log(`Average projected daily use: ${usage / day} GB/day`);

    console.log(`You're ${currentStat} your ${average} GB/day, at this rate, you will use ${planLimit - predictedAverage} GB of your limit.`);


}
dataUsage(70, 15, 75);

