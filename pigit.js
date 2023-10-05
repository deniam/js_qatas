function pigIt(str){

    return str.split(' ').map((word) => {
        let newWord = "";
        word.match(/([a-zA-Z0-9-])/) ? word += word[0] + "ay" : word += word[0];
            for (i = 0; i < word.length; i++)
                i != 0 ? newWord += word[i] : null;
        return newWord
    }).join(' ').toString();
}

module.exports = pigIt;