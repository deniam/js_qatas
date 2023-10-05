const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
numbers.forEach((numbers) => {
    sum += numbers
    console.log(numbers);
})

console.log(sum);

const iteratorFunction = (number) => {
    console.log(number);
}

numbers.forEach(iteratorFunction);

numbers.forEach((number) => {
    sum += number;

})

