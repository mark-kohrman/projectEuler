//Project Euler Problem #1
let sum = 0;
function sumOfMultiples()
{
  let i = 0;
  for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

let finalSum = sumOfMultiples();

//Project Euler Problem #2
