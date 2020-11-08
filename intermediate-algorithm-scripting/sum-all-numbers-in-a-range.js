/**
 * Intermediate Algorithm Scripting: Sum All Numbers in a Range
 * 
 * We'll pass you an array of two numbers. Return the sum of 
 * those two numbers plus the sum of all the numbers between 
 * them. The lowest number will not always come first.
 * 
 * For example, sumAll([4,1]) should return 10 because sum of 
 * all the numbers between 1 and 4 (both inclusive) is 10.
 */

// const larger = array => (array[0] >= array[1]) ? array[0] : array[1]

function sumAll(arr) {
    if (arr[0] === arr[1]) {
        return arr[0]
    } else {
        const sortedArray = arr.sort((a,b) => b - a)
        console.log(sortedArray)
        return arr[0] + sumAll([sortedArray[0] - 1, sortedArray[1]])
    }    
}

console.log(sumAll([4, 4]))
