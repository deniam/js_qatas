const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// way1
const generateMessages = (names) => {
    const messages = [];
    for (const name of names) {
        messages.push(`Hi ${name}! 50% off our best candies for you today!`);
    }
    return messages;
}

const messages = generateMessages(names);
console.log(messages);

// way2
const generateMessages2 = (namesList) => {
    return names.map((name) => {
        return (`Hi ${name}! 50% off our best candies for you today!`);
    });
}
console.log(generateMessages2(names));

module.exports = generateMessages2;