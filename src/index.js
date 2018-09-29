module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    if (str.length % 2 != 0) {
        return false;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (arr[i] == bracketsConfig[j][0] && arr[i + 1] == bracketsConfig[j][1]) {
                    arr.splice(i, 2);
                }
            }
    }
    return (arr.length == 0);
}

