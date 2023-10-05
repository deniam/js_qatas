function countSmileys(arr) {
    let count = 0;
    arr.forEach((smile) => 
    [":)", ";)", ":-D", ":D", ";-)", ";~)", ":~D", ";D", ";-D", ":~)", ";~D", ":-)"].includes(smile) ? 
    count += 1 : null);
    return count;
};

arr = [";>" , ";>" , ":~(" , ":D" , ";->" , ":D" , ":~)"]
const count = countSmileys(arr);
console.log('count', count);