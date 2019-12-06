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


function _instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype;
    // 获得对象的原型
    let left = left.__proto_;
    while (true) {
        if (left === null) {
            return false
        }
        if (left === prototype) {
            return true
            left = left.__proto_
        }

    }


}
// console.log(typeof console.log)