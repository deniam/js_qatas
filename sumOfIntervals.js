function sumIntervals(intervals) {
    let numbersArray = [];
    intervals.map((interval) => {
        let numbers = [];
        for (let counter = interval[0]; counter < interval[1]+1; counter++) {
            numbers.push(counter);
        }
        numbersArray.push(numbers);
    })
    console.log(numbersArray);
    let sumOfIntervals = 0;
    numbersArray.map((numbers, index, array) => {
        console.log("numbers[0]", numbers[numbers.length-1])
        console.log("array.indexOf(numbers)", array.indexOf(numbers))
        if (numbers[0] === array.indexOf(numbers) || numbers[numbers.length-1] === array.indexOf(numbers)) {
            console.log("array", array)
        }
        sumOfIntervals += numbers.length-1;
    })
    return sumOfIntervals;
}

    module.exports = sumIntervals;