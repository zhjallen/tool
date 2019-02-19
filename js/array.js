// 数组方法

/**
 * 数组去重
 * arr{Array} 
 */
function uniqueArray(arr) {
    let newArr = [];
    let obj = {};
    for (let key in arr) {
        if (!obj[arr[key]]) {
            obj[arr[key]] = "a" // 若使用 arr[key] 时0 null undefined 无法去重
            newArr.push(arr[key])
        }
    }
    return newArr;
}
