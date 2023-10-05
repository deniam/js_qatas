const getNumberSign = (number) => {
    if (number === 0) {return 'zero'}
    else if (number > 0) {return 'positive'}
    else {return 'negative'}
}

console.log(getNumberSign(3));
console.log(getNumberSign(0));
console.log(getNumberSign(-5));