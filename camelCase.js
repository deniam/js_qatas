// complete the function
function solution(string) {
    let newString = "";
    string.split('').forEach((char) => {
        char === char.toUpperCase() ? newString += ` ${char}` : newString += char;
    });
    console.log(newString);
    return newString;
};

string = 'camelCasing';
const newSolution = solution(string);