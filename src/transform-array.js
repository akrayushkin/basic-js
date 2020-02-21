module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid argument');
    }
    const newArr = [];
    const [disNext, disPrev, doubNext, doubPrev] = ['--discard-next', '--discard-prev','--double-next', '--double-prev'];
    let i = (arr[0] === disPrev || arr[0] === doubPrev) ? 1 : 0;
    const end = (arr[arr.length - 1] === disNext || arr[arr.length - 1] === doubNext) ? arr.length - 1 : arr.length;
    for (; i < end; i++) {
        switch (arr[i]) {
            case disNext:
                i++;
                break;
            case disPrev:
                newArr.pop();
                break;
            case doubNext:
                newArr.push(arr[i+1]);
                break;
            case doubPrev:
                newArr.push(arr[i-1]);
                break;
            default:
                newArr.push(arr[i]);
                break;
        }
    }
    return newArr;
};
