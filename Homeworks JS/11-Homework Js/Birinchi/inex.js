
// let obj={
//     id:1,
//     name:"WebBrain"
// }

// for(key in obj);
// console.log(key);


// let obj = {
//     id: 1,
//     name: "WebBrain"
// };

// for ( key in obj) {
//   if (typeof obj[key] === "number") {
//     console.log( obj[key]);
//   }
// }



// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// for (key in obj) {
//   if (typeof obj[key] === "boolean") {
//     console.log(key + ":" + obj[key]);
//   }
// }



// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// for (key in obj) {
//     if(typeof obj[key] === "string"){
//         console.log(key+ ":" + obj[key]
//         );
//     }
// }



// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }

// for(key in obj){
//     if(typeof obj[key] === "string"){
//         console.log(obj[key]);
//     }
// }



// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }

// let a = person.ageperson.child.age + person.child.child.age;
// console.log(a);




// let person = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age: 48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age: 20
//         }
//     }
// };

// function ALLAges(person) {
//     let zero = person.age || 0;
//     if (person.child) {
//         zero += ALLAges(person.child);
//     }
//     return zero;
// }

// console.log(ALLAges(person));




// let obj={
// id:1,name:'Usmon',job:'developer'
// }

// let newobj = structuredClone(obj)
// let newobj2 = structuredClone(obj)
// newobj.name = 'eshmat';
// newobj2.name = 'toshmat'

// console.log(newobj);
// console.log(newobj2);
// console.log(obj);




// let year = +prompt("Tug'ilgan yilingizni kiriting:");
// let age = +prompt("Yoshingizni kiriting:");

// let obj = {
//     id: 1,
//     name: 'Usmon',
//     year: year,
//     age: age
// };

// if (2025 - obj.year === obj.age) {
//     console.log(`to'g'ri ma'lumot`);
// } else {
//     console.log(`xato ma'lumot`);
// }



obj={
  id:1,
  title:'the best',
  address:{street:"Faroiy",number:'34'}
}

for(key in obj){
    if(typeof obj[key] === "object"){
        console.log(`object bor`);
    } else console.log(`object yo'q`);
    
}

