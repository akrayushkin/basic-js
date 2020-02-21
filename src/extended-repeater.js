module.exports = function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
    if (typeof str === 'object' && str !== null) {
        str = str.toString();
    } else {
        str = String(str);
    }
    let addStr = '';
    if (addition !== undefined) {
        if (typeof addition === 'object' && addition !== null) {
            addition = addition.toString();
        } else {
            addition = String(addition);
        }
        addStr += addition;
        if (additionRepeatTimes > 1) {
            for (i = 1; i < additionRepeatTimes; i++) {
                addStr += `${additionSeparator || '|'}${addition}`;
            }
        }
    }
    let newStr = '';
    if (repeatTimes > 1) {
        for (i = 0; i < repeatTimes; i++) {
            newStr += i === repeatTimes - 1 ? `${str}${addStr}` : `${str}${addStr}${separator || '+'}`;
        }
    } else {
        newStr = str + addStr;
    }
    return newStr;
};
