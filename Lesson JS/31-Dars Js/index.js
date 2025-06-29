// Class


// Static Verables "static" key method

// class Counter {
//    static count = 0;
//     constructor() {
//         console.log(Counter.count++);
//     }
// }

// // O'zgaruvchi Oldiga "static" deb yozishimiz o'zgaruvchini { scop } ichidagi
// // Globalga emas Class Ga Briktirib beradi

// new Counter();
// new Counter();
// new Counter();
// new Counter();




// Static Function "static" key method



// class Counter {
//     static count = 0;
//     static getCount() {
//         console.log(Counter.count++);
//     }
// }

// let a = new Counter;

// Counter.getCount();
// Counter.getCount();
// Counter.getCount();
// Counter.getCount();



// Built-in Class {Built-in-O'rnatilgan} JS Tomonidan Yozilgan Tayyor Class lar
// Misol : NewArray
// Misol : NewDate


// instanceof - Bir Class Ni Boshqa Class ga Bog'langanini tekshirib beradi
// Boolen Malumot qaytaradi

// class Parent { }

// class Child extends Parent { }

// class Pro { }
// let obj = new Child()

// console.log(obj instanceof Child);
// console.log(obj instanceof Child);
// console.log(obj instanceof Pro);
// console.log(obj instanceof Object);


// Public va Private _ # {[faild verables]}

// Public ligini bildirish uchub paski chiziq _ qo'yish kerak


// Private Qilish Uchun oldiga Reshodka # qo'yish kerak

// class Parent {
//     _name = `Oxford`
//     #id = 1650411653014
//     constructor() {
//         console.log(this.#id);
//     }
// }

// let obj = new Parent;
// console.log(obj._name);
// // console.log(obj.#id);



// Mixins - Getting a Lot of Inheritance


// let obj1 = {
//     name: "Oxford"
// }

// let obj2 = {
//     Id: 10010320504205
// }





// class Parent {
//     constructor(props) {
//         this.name = props
//         console.log(this.Id);
//     }
// }

// let NewObj = Object.assign(Parent.prototype, obj1, obj2)
// let a = new Parent(`Algoritm`)
