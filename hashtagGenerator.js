function generateHashtag (str) {
    let hashStr = "#";
    str.split(" ").map((char) => {
        hashStr += char.charAt(0).toUpperCase() + char.substring(1);
    });
    return hashStr == "#" || hashStr.length > 140 ? false : hashStr;
};
