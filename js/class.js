/*
 * @Description: 类
 * @Version: 1.0
 * @Author: 赵会杰
 * @LastEditors: 赵会杰
 * @Date: 2019-07-17 20:58:12
 * @LastEditTime: 2019-12-01 21:45:51
 */

class Parent {
    constructor(name) {
        this.name = name;
    }
    /**
     * 公有属性，相当于原型上的属性
     */
    getName() {
        console.log(this.name)
    }
}

let p = new Parent("zhj");
p.getName();