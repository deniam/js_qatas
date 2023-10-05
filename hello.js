const lowercaseMessage = (string) => {
    return string.toLowerCase();
};

const transform = (string, transformFunction) => {
    return transformFunction(string);
};

console.log(transform('hellO', lowercaseMessage));