// class 类

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
p.getName()