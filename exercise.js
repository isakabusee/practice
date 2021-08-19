// let doSomething = () => {
//     console.log("what's up")
// }
// doSomething();
// Answer for question 1
// function yearCentury(year) {
//     if ( year % 100 == 0) {
//         return year/100;
//     }
//     else
//     {
//         return Math.floor(year/100) + 1;
//     }

// }

// Answer for question 2

function almostIncreasingSequence(sequence) {
    let temp = 0;
    for (let i = 1; i < sequence.length; i++) {
        if ( sequence[i] <= sequence[i-1]) {
            temp++;
            if ( temp>1){
                return false;
            }
            if (sequence[i] <= sequence[i-2] && sequence[i+1]<=sequence[i-1]) {
                return false;
            }
        }
    }
    return true;
}

almostIncreasingSequence()


//Question 3

// Given an array of strings, return another array containing all of its longest strings.

// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Answer

function allLongestStrings(inputArray) {
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}

// Question 4

// For every pair of adjacent indicies. Swap them if the item on the left is larger than the item on the right. Continue until array is fully sorted

//Answer

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j +1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Question 5

// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list .
// Then ignoring the first position, which is now sorted, iterate through the list again finding the next


