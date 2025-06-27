// Class Object ga Template(Shablon)Yaratib Beradi
// OOP-Object Orented Proporties

// Yaratili

// class Parent {

// }

// Class Ichida "let" islatib Bo'lmaydi

// class Parent {
//     // let a = `Bunda Error Beradi`
//     a = `Bu Tog'ri Usul`
// }


// Class Ichida "Function" Kalit So'zi Orqali Yaratib Bolmaydi

// class Parent {
//     GetName() {
//         console.log("Bu To'g'ri usul");
//     }
// }


// Class Konstruktor Bilan Ishlaydi
// class Parent {
//     GetName() {
//         console.log(`Name`);
//     }
// }
// let user = new Parent()
// user.GetName()



// this metodidan foydalanish
// class Parent {
//     name = "Oxford"
//     GetName() {
//         console.log(this.name);
//     }
// }
// let user = new Parent()
// user.GetName()


// ! Important

// Class Chaqirilgan Joyidan (Argument) dan Malumot Yuborilsa Uni Parameytr (Prop)da Tutish Uchun
// Classning "LIVESIKLE"si Yani "Construtor" kerak bo'ladi


// Class ni Ichida Eng Birinchi Ishlaydigani Bu "Coanstructor"
// class Parent {
//     constructor(prop1) {
//         this.name=prop1
//     }
//     GetName() {
//         console.log(this.name);
//     }
// }
// let user = new Parent(`Oxford`)
// user.GetName()


// Class Function da Inpior Verable dan Foydalanish Ham Mumkin
// let a = `Algoritm`
// class Parent {
//     constructor(prop1) {
//         this.name = prop1
//     }
//     GetName() {
//         console.log(this.name,`and`,a);
//     }
// }
// let user = new Parent(`Oxford`)
// user.GetName()


// Class da Getter va Setter

// Get

// class Parent {
//     constructor(props) {
//         this.name = props
//     }
//     get GetSetAction() {
//         return (this.name.toUpperCase());
//     }
//     set GetSetAction(NewName) {
//         if (NewName.length < 5) {
//             this.name = NewName
//         } else {
//             this.name = `Siz 5ta harfdan kam kiritdingiz`
//         }

//     }
// }
// let user = new Parent(`Oxford`);
// console.log(user.GetSetAction);
// console.log(user.GetSetAction = `Algoritm`);








// OOP-Object Orented Proporties




// Inheretence - meros olish Parent Child Extends

// class Parent{
//     name = `Algoritm`
//     getName() {
//         console.log(`Parent`);
//     }
// }

// class Child extends Parent{
//     chName = `Oxford`
//     getChildName() {
//         console.log(`Child`);
//     }
// }

// let child = new Child()
// let parent = new Parent
// child.getName()
// child.getChildName()
// console.log(parent.name);
// console.log(child.chName);


// Inheritance Supper Overading Constructor

// class Parent {
//     constructor(prorp) {
//         this.chName = prorp
//     }
//     name = `Algoritm`
//     getName() {
//         console.log(`Parent`, this.chName);
//     }
// }

// class Child extends Parent {
//     constructor(prorp) {
//         // super(prorp)
//         console.log(prorp);
//         this.chName = prorp
//     }
//     chName = `Oxford`
//     getChildName() {
//         console.log(`Child`);
//     }
// }

// let child = new Child(`Ahadjon`)

// let a = new Parent()
// a.getName()


// Overading class Faild

// Bu Oxirgisini Oladi