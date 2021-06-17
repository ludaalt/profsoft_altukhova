const arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];


const increaseSort = (arr) => {
   let result = arr.slice();

    for (let i = 0; i < result.length; i += 1) {

        for (let j = i + 1; j < result.length; j += 1) {
            if(result[i] > result[j]) {     
                let temp = result[j];
                result[j] = result[i]; 
                result[i] = temp                     
            }
        }
    }
   return result
}

const decreaseSort = (arr) => {
    let result = arr.slice(); 
 
     for (let i = 0; i < result.length; i += 1) {
 
         for (let j = i + 1; j < result.length; j += 1) {
             if(result[i] < result[j]) {     
                 let temp = result[j];
                 result[j] = result[i]; 
                 result[i] = temp                     
             }
         }
     }
    return result
 }

const increaseSortWithoutElemRepeat = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i += 1) {
        if(!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
 
     for (let i = 0; i < result.length; i += 1) {
 
         for (let j = i + 1; j < result.length; j += 1) {
             if(result[i] > result[j]) {     
                 let temp = result[j];
                 result[j] = result[i]; 
                 result[i] = temp                     
             }
         }
     }
    return result
 }

const decreaseSortWithoutElemRepeat = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i += 1) {
        if(!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
 
     for (let i = 0; i < result.length; i += 1) {
 
         for (let j = i + 1; j < result.length; j += 1) {
             if(result[i] < result[j]) {     
                 let temp = result[j];
                 result[j] = result[i]; 
                 result[i] = temp                     
             }
         }
     }
    return result
 }
 
const findSmallestElem = (arr) => {
    let smallestElem = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if(arr[i] < smallestElem) {
            smallestElem = arr[i]
        }
    }

    return smallestElem
}

const findBiggestElem = (arr) => {
    let biggestElem = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if(arr[i] > biggestElem) {
            biggestElem = arr[i]
        }
    }

    return biggestElem
}
 
console.log(increaseSort(arr)) 
console.log(decreaseSort(arr))

console.log(increaseSortWithoutElemRepeat(arr)) 
console.log(decreaseSortWithoutElemRepeat(arr))

console.log(findSmallestElem(arr))
console.log(findBiggestElem(arr))