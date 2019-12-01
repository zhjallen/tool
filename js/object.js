/*
 * @Description: 对象方法
 * @Version: 1.0
 * @Author: 赵会杰
 * @LastEditors: 赵会杰
 * @Date: 2019-11-21 21:22:25
 * @LastEditTime: 2019-12-01 21:43:50
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

/**继承 */

function Parent1() {
    this.name = "parent"
}
function Child1() {
    Parent1.call(this);
    this.type = "child1"
}
// console.log(new Child1())
function Child2() {
    this.type = "child2"
}
Child2.prototype = new Parent1()
// console.log(new Child2().name)

function Child4() {
    Parent1.call(this);
    this.type = "child4"
}
Child4.prototype = Parent1.prototype
// console.log("child4", new Child4())


/**----------new
 * new 
 * 1、创建一个新对象
 * 2、将this指向该对象
 *  --------- */
function newOperation(ctor, ...args) {
    if (typeof ctor !== "function") {
        throw new Error("newOperator function the first param must be a function")

    }
    let object = Object.create(ctor.prototype);
    let res = ctor.apply(object, args);
    let isObject = typeof res === 'object' && res !== null;
    let isFunction = typeof res === 'function';
    return isObject || isFunction ? res : object;
}

let obj1 = {
    name: "obj1",
    getName() {
        return "obj1"
    }
}
let obj2 = {
    __proto__: obj1,
    getName() {
        return "obj2" + super.getName()
    }
}
console.log(obj2.getName())
