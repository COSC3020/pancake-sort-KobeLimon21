function flip(array, endIndex) {
    let startIndex = 0; // initialize start index
    while (startIndex < endIndex) { // keeps looping until it reaches endIndex
        [array[startIndex], array[endIndex]] = [array[endIndex], array[startIndex]]; // swap elements at endindex and startindex
        startIndex++; // decrement startindex counter
        endIndex--; // decrement endindex counter
    }
    return array; 
}

function findLargestPancake(array, n) {
    let largestIndex = n - 1; // starts at last element

    for (let i = n - 2; i >= 0; i--) { // iterates from last element to start element
        if (array[i] > array[largestIndex]) {
            largestIndex = i; // updates index it's bigger than current 
        }
    }
    return largestIndex;  
}

function pancakeSort(array) {
    
    for (let currentSize = array.length; currentSize > 1; currentSize--) { // iterates through array
      
    let largestPancakeIndex = findLargestPancake(array, currentSize); // function to find largest element
        
    if (largestPancakeIndex !== currentSize - 1) { // checks to see if it's sorted
    if (largestPancakeIndex > 0) { // flips if not 
                flip(array, largestPancakeIndex);  
            }
          
            flip(array, currentSize - 1);
        }
    }
    return array;  
}




//var testArray = [1, 2, 3, 4];
//var flippedArray = flip(testArray, 2); 
//console.log(flippedArray); 
//var testArray = [0,1];
//var flippedArray = flip(testArray, 1); 
//console.log(flippedArray); 
//var testArray = [];
//var flippedArray = flip(testArray, 0); 
//console.log(flippedArray); 
//var testArray = [21,23,453,543,23,675,1];
//var flippedArray = flip(testArray, 2); 
//console.log(flippedArray); 


