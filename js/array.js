/*
 * @Description: 
 * @Version: 1.0
 * @Author: 赵会杰
 * @LastEditors: 赵会杰
 * @Date: 2018-12-08 20:37:46
 * @LastEditTime: 2019-12-01 21:24:05
 */
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

const max = [{ sort: 1 }, { sort: 8 }].reduce((pVal, cVal) => {
    return pVal > cVal.sort ? pVal : cVal.sort

}, 0)
console.log(max)

// filter 简单实现
Array.prototype.myFilter = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr;
}
let arr = [1, 45, 67].myFilter(function (item) {
    return item > 8
})
console.log(arr, "myfiler")

//数组some简单实现
Array.prototype.mySome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        let result = cb(this[i])
        if (result) {
            return true
        }
    }
    return false
}

const some = [2, 34, 454].mySome(item => {
    return item > 9
})
console.log(some, "some")


