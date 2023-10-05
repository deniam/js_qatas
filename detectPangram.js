function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let stringMod = string
    .toLowerCase()
    .split("")
    .filter((char, index, array) => 
    char >= 'a' & char <= 'z' & array.indexOf(char) === index)
    .sort()
    .join('');
    console.log(stringMod);
    return stringMod === alphabet ? true : false;
};
string = "The quick brown fox jumps over the lazy dog."
const ispangram = isPangram(string);
console.log(ispangram);