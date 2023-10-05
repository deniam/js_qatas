function domainName(url){
    url = url.replace(/(https?:\/\/)?/, '');
    url = url.replace(/(www\d?\.)?/, '');
    const regexPattern = /([a-zA-Z0-9-]+)\./;
    const match = url.match(regexPattern);

    if (match) {
        return match[1];
    } 
    return null;
}

url = "http://google.com";
const result = domainName(url);
console.log(result);