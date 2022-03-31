//Project Euler Problem #1

function largestPalindrome(multiplier,storage)
{
  let product = multiplier * storage;
  let stopper = "go";
  while (multiplier > 899) {
    storage = multiplier;
    while (storage > 899) {
      product = storage * multiplier;
      product = product.toString();

      let reversedProduct = reverseString(product);

      if (reversedProduct === product)
      {
        console.log(product);
        console.log("TRUE");
        stopper = "stop";
        break;
      }
      if (stopper === "stop") {
        break;  
      }
      storage --;
    }
    multiplier --;
  }
  
  return product;
}

largestPalindrome(999,999);

function reverseString(array)
{
  let i = 0;
  let j = array.length - 1;
  let reversedArray = [];
  array = array.split("");

  while (i < array.length) {
    reversedArray.push(array[j]);
    j --;
    i ++;
  }

  let reversedString = reversedArray.join("");

  return reversedString;
}
