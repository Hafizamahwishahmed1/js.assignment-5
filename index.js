// CHAPTER NO 5
// Practice exercise 5.1


const numValue = 5;
console.log(numValue); 


const solution = Math.floor(Math.random() * numValue) + 8;
console.log(solution); 


let isCorrect = false;


// while (!isCorrect) {
//     let userInput = prompt(`Enter a number between 1 and 5, ${numValue}:`);
//     let userNumber = parseInt(userInput);
// }
//     if (isNaN(guess) || guess < 2 || guess > numValue) {
//         alert('Please enter a number between 1 and 5' + numValue);
//     }    
    

//     if (guess === solution) {
//         isCorrect = true;
//         alert('Congratulations! You guessed the correct number.');
//     } 
//     else if (guess < solution) {
//         alert('Too low! Try a higher number.');
//     }
//      else {
//         alert('Too high! Try a lower number.');
//     }



 // Practice exercise 5.2

let counter = 0;
const step = 7; 

do {
  console.log(`Counter: ${counter}`);
  
  counter += step;
} while (counter < 100); 


// Practice exercise 5.3


let myWork = [];

for (let i = 1; i <= 10; i++) {
  
  const status = i % 2 === 0 ? false : true;

  const lesson = {
    name: `Lesson ${i}`,
    status: status
  };

  myWork.push(lesson);
}

console.log(myWork);


// Practice exercise 5.4


let myTable = [];

const numRows = 5;
const numCols = 4;

let counterValue = 0;

for (let i = 0; i < numRows; i++) {
  
  let tempTable = [];

  for (let j = 0; j < numCols; j++) {

    counterValue++;

    tempTable.push(counterValue);

  }

  myTable.push(tempTable);
}

console.table(myTable);


// Practice exercise 5.5


let gridArray = [];

const numCells = 56;

let counterNum = 0;

let row = [];

for (let i = 0; i <= numCells; i++) {
  
  if (counterNum % 8 === 0) {
    
    if (typeof row !== 'undefined') {
      
      gridArray.push(row);
    }
    
    row = [];
  }

  counterNum++;

  row.push(counterNum);

  if (counterNum === 8) {

    gridArray.push(row);
  }
}

console.log(gridArray);


// Practice exercise 5.6


let myArray = [];

for (let i = 0; i < 10; i++) {
  myArray.push(i);
}

console.log("Array:", myArray);

for (let j = 0; j < myArray.length; j++) {
  console.log("Value at index", j, ":", myArray[j]);
}

for (const value of myArray) {
  console.log("Value:", value);
}


// Practice exercise 5.7


let myObject = {
    name: "Ayesha",
    age: 15,
    city: "Islamabad"
  };
  
  for (let property in myObject) {
    console.log(property + ": " + myObject[property]);
  }
  
  let Arrayy = ["Ayesha", 15, "Islamabad"];
  
  for (let i = 0; i < Arrayy.length; i++) {
    console.log("Value at index", i, ":", Arrayy[i]);
  }


//   Practice exercise 5.8



let $output = "";

let skipNumber = 6;

for (let i = 1; i <= 10; i++) {

  if (i === skipNumber) {
    
    continue;
  }

  $output += i;
}

console.log("Output with 'continue':", $output);

$output = "";

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {

    break;
  }
  $output += i;
}

console.log("Output with 'break':", $output);


// Chapter project

// Math multiplication table


let multiTable = [];

const numValues = 4; 

for (let i = 1; i <= numValues; i++) {
  let row = [];

  for (let j = 1; j <= numValues; j++) {

    let product = i * j;
    
    row.push(product);
  }

  multiTable.push(row);
}

console.log("MultiTable:");
for (let row of multiTable) {
  console.log(row.join("\t"));
}





  





