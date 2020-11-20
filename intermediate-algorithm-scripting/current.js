/**
 * Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that 
 * are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
 * number in the sequence is the sum of the two previous numbers. The first six 
 * numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
 * than or equal to 10 are 1, 1, 3, and 5.
 */
function sumFibs(num) {
  const sum = 0;
  let proto = 0;
  for (let index = 1; index <= num; index = proto + index)  {
    proto = index + proto;
    index = proto;
    console.log("index", index);
    console.log("proto", proto);
  }
  return null;
}

sumFibs(10);