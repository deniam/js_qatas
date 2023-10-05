function comp(array1, array2){
    if (array1 === null || array2 === null) {
        return false
    }
    array1sorted = [...new Set(array1.slice().sort((a, b) => a - b))];
    array2sorted = [...new Set(array2.slice().sort((a, b) => a - b))];
    console.log(array1sorted);
    console.log(array2sorted);
    if (array1sorted.length != array2sorted.length) {
        return false
    }

    for (i = 0; i < array1sorted.length; i++) {
        if (array1sorted[i] ** 2 != array2sorted[i]) {
            console.log("arr1", array1sorted[i] ** 2);
            console.log("arr1", array2sorted[i]);
            return false
        };
    }
    return true
}


// return array2.some((squareNumber) => {
//     let squareNumber = Math.floor(Math.pow(squareNumber, 1/2));
//     console.log("number of array1", number);
//     console.log("number of array2", squareNumber);
//     return array1.includes(squareNumber);
// })


    // 
    //     for (i = 0; i < array1.length; i++) {
    //             console.log("(array1[i]", array1[i]);
    //         for (j = 0; j < array2.length; j++) {
    //             console.log("(array1[i]", array1[i]);
    //             console.log("Math.pow(array2[j]", Math.pow(array2[j], 1/2));
    //             if (array1[i] != Math.pow(array2[j], 1/2)) {
    //             // console.log(true);
    //             return false;
    //             } else { 
    //                 return true; 
    //             }
    //         }
    //     }
    // }



array1 = [121, 144, 19, 161, 19, 144, 19, 11];
array2 = [231, 14641, 20736, 361, 25921, 361, 20736, 361];
result = comp(array1, array2);
console.log(result);