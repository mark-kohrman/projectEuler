// Euler Problem #5
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function largestDividend (dividend) {
	let twentyDivisorsArray = Array.from({length: 20}, (_, i) => i + 1);
	let newDividend = dividend;
	let trueCount = 0;
	let maxTrue = 0;
	while(trueCount < 20) {
		let i = 0;
		while (i < twentyDivisorsArray.length) {
			if (newDividend % twentyDivisorsArray[i] === 0) {
				trueCount += 1;
				if (trueCount > maxTrue) {
					maxTrue = trueCount;
				}
				if (trueCount === 20) {
					console.log("TrueCount");
					console.log(newDividend);
					break;
				}
			} else {
				// console.log('NotTrue');
				trueCount = 0;
	
			}
			i += 1;
		}
		if (trueCount === 20) {
			console.log("HELLO FROM BREAK 2");
			break;
		}
		newDividend += 2;
		console.log(newDividend);
	}
}
largestDividend(2520);