/*
 * @Description: 对象方法
 * @Version: 1.0
 * @Author: 赵会杰
 * @LastEditors: 赵会杰
 * @Date: 2019-11-21 21:22:25
 * @LastEditTime: 2019-11-26 23:29:45
 */
/**
 * 深复制
 * @param {Object} oldObject 
 */
function deepClone(oldObject) {
    if (typeof oldObject !== "object") {
        return oldObject
    }
    let newObj = oldObject instanceof Array ? [] : {};
    for (let key in oldObject) {
        if (typeof oldObject[key] === "object") {
            newObj[key] = deepClone(oldObject[key])
        } else {
            newObj[key] = oldObject[key]
        }
    }
    return newObj
}


/**
 * instanceof 的实现
 * @param {*} left 
 * @param {*} right 
 */
function myInstanceOf(left, right) {
    if (typeof left !== "object" || left == null) {
        return false
    }
    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto == null) {
            return false
        } else {
            if (proto == right.prototype) {
                return true
            }
            proto = Object.getPrototypeOf(proto)
        }
    }
}