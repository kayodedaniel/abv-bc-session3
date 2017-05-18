module.exports = reverseString; function reverseString(entry){
  
   var str = entry;
    var count = 0;

    if(str==="") {
        return null;
    }

    if ((str.length) % 2 === 0) {
        count = (str.length) / 2;
    } else {

        if (str.length === 1) {
            return true;
        } else {

            count = (str.length - 1) / 2;
        }
    }

    for (var x = 0; x < count; x++) {

        if (str[x] != str.slice(-1-x)[0]) {
            return str.split('').reverse().join('');
        }
}
    return true
}

