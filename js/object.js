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
