const phoneNumbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'AAAA#####AAAA#87@768767382672',
    '4763687363',
    '4763687363'
];

const checkLength = (phoneNumber) => {
    if (phoneNumber.length < 11) {
        return true;
    } else {
        return false;
    }
    }
console.log(checkLength('AAAA#####AAAA#87@768767382672'));

const fllterLongNumbers = (phoneNumber) => {
    return phoneNumber.filter(checkLength);
}
console.log(fllterLongNumbers(phoneNumbers));
console.log(fllterLongNumbers(['4763687363', '7867867862']));
console.log(fllterLongNumbers([]));
