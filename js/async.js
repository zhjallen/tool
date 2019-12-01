/*
 * @Description: 
 * @Version: 1.0
 * @Author: 赵会杰
 * @LastEditors: 赵会杰
 * @Date: 2019-11-30 21:02:14
 * @LastEditTime: 2019-11-30 21:56:20
 */

//定义三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function myPromise(excutor) {
    let _self = this; // 缓存当前promise实例
    _self.status = PENDING;
    _self.error = null;
    _self.value = null;
    // 绑定多个回调，在resolve后一起执行，需要将其改为数组
    _self.onFulfilleds = []; // 成功的回调函数
    _self.onRejecteds = []; // 失败的回调函数

    const resolve = (value) => {
        if (_self.status === PENDING) return;
        setTimeout(() => {
            _self.status = FULFILLED;
            _self.value = value;
            _self.onFulfilleds.forEach(cb => {
               cb(_self.value) 
            });// 执行成功的回调
        })
    }

    const reject = (error) => {
        if (_self.status === PENDING) return;
        setTimeout(() => {
            _self.status = REJECTED;
            _self.error = error;
            _self.onRejecteds.forEach(cb=>{
                cb(_self.error)
            })
        })
    }
    excutor(resolve, reject)
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
    if (this.status === PENDING) {
        this.onFulfilleds.push(onFulfilled);
        this.onRejecteds.push(onRejected);
    } else if (this.status === FULFILLED) {
        onFulfilled(this.value)
    } else {
        onRejected(this.error)
    }
    return this;
}