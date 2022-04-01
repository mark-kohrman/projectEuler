//Project Euler Problem #4

function largestPalindrome(multiplier, decrementMultiplier) {
	while (multiplier > 899) {
		decrementMultiplier = multiplier;
		while (decrementMultiplier > 899) {
		let product = decrementMultiplier * multiplier;
		let productString = product.toString();
		let reversedProductString = reverseString(productString);

		if (reversedProductString === productString) {
			console.log(product);
			return product;
		}
		decrementMultiplier --;
		}
		multiplier --;
	}
	}

	largestPalindrome(999,999);

	function reverseString(productString) {
	let i = 0;
	let j = productString.length - 1;
	let reversedString = "";

	while (i < productString.length) {
		reversedString += productString[j];
		j --;
		i ++;
	}

	return reversedString;
}
