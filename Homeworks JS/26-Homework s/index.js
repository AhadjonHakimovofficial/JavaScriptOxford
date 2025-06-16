// Call "Context" ga Qiymat Biriktirib Beradi
{


    // 1-Call


    // let user = {
    //   name :"Ahadjon",
    //   age: 15,
    //   id:1001
    // }
    // function GetObj() {
    //   console.log(this.name,this.id);
    // }
    // GetObj.call(user)



    // 2-call

    // let user = {
    //   name :"Ahadjon",
    //   age: 15,
    //   id:1001
    // }
    // let a = `Hi`
    // let b =`Oxford`
    // let c = 2025
    // function GetObj(one,two,theare) {
    //   console.log(this.name, this.id);
    //   console.log(one);
    //   console.log(two);
    //   console.log(theare);
    // }
    // GetObj.call(user,a,b,c)

    // 3-call

    // let user = {
    //   name :"Ahadjon",
    //   age: 15,
    //   id:1001
    // }
    // let hi =`Salom `
    // function GetObj(a) {
    //   console.log(a +this.name);
    // }
    // GetObj.call(user,hi)

    // 4-call


    // let user = {
    //   name :"Ahadjon",
    //   age: 15,
    //   id: 1001,
    //   day:` 10-mart`
    // }
    // function GetObj(year) {
    //   console.log(year-this.age+this.day);
    // }
    // GetObj.call(user, 2025)


    // 5-call

    // let Salary = {
    //   Senior: 10_000_000,
    //   Middle: 7_000_000,
    //   Junior:5_000_000
    // }

    // function GetSalary() {
    //   console.log(this.Senior+=this.Middle+=this.Junior);
    // }
    // GetSalary.call(Salary)
}

// Aplly "Context"ga Qiymat Biriktirib Beradi Va Argumetntni ichidagi keyingi qiymatar [Array] ni ichida ketadi

// 1 -Apply

// let user = {
//   name :"Ahadjon",
//   age: 15,
//   id:1001
// }
// function GetObj() {
//   console.log(this.name,this.id);
// }
// GetObj.apply(user)


// 2-aplly

// let user = {
//   name :"Ahadjon",
//   age: 15,
//   id:1001
// }
// let a = `Hi`
// let b =`Oxford`
// let c = 2025
// function GetObj(one,two,theare) {
//   console.log(this.name, this.id);
//   console.log(one);
//   console.log(two);
//   console.log(theare);
// }
// GetObj.call(user,[a,b,c])


// 3-aplly

// let user = {
//   name :"Ahadjon",
//   age: 15,
//   id:1001
// }
// let hi =`Salom `
// function GetObj(a) {
//   console.log(a +this.name);
// }
// GetObj.call(user,[hi])


// 4-aplly



// let user = {
//   name :"Ahadjon",
//   age: 15,
//   id: 1001,
//   day:` 10-mart`
// }
// function GetObj(year) {
//   console.log(year-this.age+this.day);
// }
// GetObj.call(user,[ 2025])

// 5-aplly


// let Salary = {
//   Senior: 10_000_000,
//   Middle: 7_000_000,
//   Junior:5_000_000
// }

// function GetSalary(a) {
//   console.log(a+=this.Senior+=this.Middle+=this.Junior);
// }
// GetSalary.call(Salary,[`Salary Budget = `])



// Bind- "Context" ga qiymat biriktirib beradi /lekin o'zini o'zi chaqira olmaydi uni chaqirish uchun yani bitta (qavs) qo'yib qo'yish kerak

// 1-Bind


// let obj = {
//     name :`Ali`
//   }

// function ExamBind() {
//     console.log(this);
// }
// // Bu yerda ishlamaydi /:Bind o'zini o'zi chaqira olmaydi
// ExamBind.bind(obj)



// 2-Bind


// let obj = {
//   name: `Ali`
// }

// function ExamBind() {
//   console.log(this);
// }
// // /:ishlashi uchun yana bitta () qo'yish kerak
// ExamBind.bind(obj)()


// 3-Bind


// let obj = {
//   name: `Ali`
// }

// function ExamBind(a, b, c) {
//   console.log(this);
//   console.log(a += b += c);
// }
// // /:ishlashi uchun yana bitta () qo'yish kerak
// ExamBind.bind(obj, 1, 2, 7)();

// 4-Bind

// let obj = {
//   name: `Ali`
// }

// function ExamBind(a, b, c) {
//   console.log(this);
//   console.log(a += b += c);
// }
// // /:ishlashi uchun yana bitta () qo'yish kerak
// let newName = ExamBind.bind(obj, 1, 2, 7);

// 5-Bind


// let obj = {
//     name: `Ali`,
//     age: 15
// }

// function ExamBind(a) {
//     console.log(this.age - a);
// }
// // /:ishlashi uchun yana bitta () qo'yish kerak
// ExamBind.bind(obj, 2025)();