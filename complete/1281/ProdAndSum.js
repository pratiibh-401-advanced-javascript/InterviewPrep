// 1281. Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

/*

Example 1:

Input: n = 234
Output: 15 
Explanation: 
    Product of digits = 2 * 3 * 4 = 24 
    Sum of digits = 2 + 3 + 4 = 9 
    Result = 24 - 9 = 15

Example 2:

Input: n = 4421
Output: 21
Explanation: 
    Product of digits = 4 * 4 * 2 * 1 = 32 
    Sum of digits = 4 + 4 + 2 + 1 = 11 
    Result = 32 - 11 = 21

Constraints:
    1 <= n <= 10^5
*/

var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    let popped = n % 10;
    product = product * popped;
    sum = sum + popped;
    n = Math.floor(n / 10);
  }

  return product - sum;
};
