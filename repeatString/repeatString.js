const repeatString = function(word, times) {
    if (times<0)
        return ('ERROR')
    else    
        return (new Array(times + 1)).join(word);
}

module.exports = repeatString
