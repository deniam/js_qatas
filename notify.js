const notifyByEmail = (email) => {
    return `Email sent to: ${email} `;
};
const notifyByText = (number) => {
    return `Text sent to: ${number}`;
};
const notify = (emailOrNumber, notifyFunction) => {
    return notifyFunction(emailOrNumber)
}

console.log(notify('0684892565', notifyByText));
console.log(notify('deniam24@gmail.com', notifyByEmail));
