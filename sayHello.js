const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
  }

// console.log(isValidLength('00'));
// // false
  
module.exports = isValidLength;
// console.log(isValidLength('00112233445'));
// //  true