// Promise - Collback ni O'rnini Bosish Uchun Ishlatiladi

// let prom = new Promise((resolve, reject) => {
//     let s = new Date().getSeconds()
//     if (s % 2) {
//         resolve(`${s} - bu toq son`)
//     } else {
//         reject(`${s} - bu juft son`)
//     }
// })

// prom.then((res) => res)
//     .then((res) => console.log(`${res} - bu resolve 'dan kelyapti`))
//     .catch((err) => console.log(err))

// console.log(`Started...`);





// let prom = new Promise((resolve, reject) => {
//     let s = new Date().getSeconds()
//     if (s % 2) {
//         resolve(`${s} - bu toq son`)
//     } else {
//         reject(`${s} - bu juft son`)
//     }
// })

// prom.then((res) => console.log(res))
//     .catch((err) => console.log(err))

// console.log(`...Finished`);

// Async Await foydalanish
// console.log(`Started...`);

// async function GetInc() {
//     let prom = new Promise((resolve, reject) => {
//         let str = `Oxford`
//         if (str.includes(`s`)) {
//             resolve(`Ha Bu Yerda Bu Harf Bor `)
//         } else {
//             reject(`Yo'q Bu Yerda Bu Harf Yo'q`)
//         }
//     })

//     prom.then((res)=>console.log(res)).catch((err)=>console.log(err))
//     let a = await prom
//     console.log(a);
//     console.log(`Finished...`);
// }

// GetInc()

// console.log(`Started...`);

// async function GetName() {

//     let obj = {
//         name: null
//     }
//     let prom = new Promise((resolve, reject) => {
//         let s = new Date().getSeconds()
//         if (s % 2) {
//             setTimeout(() => {
//                 obj.name = `Resolve`
//                 resolve(obj.name)
//             }, 1000);
//         } else {
//             setTimeout(() => {
//                 obj.name = `Reject `
//                 resolve(obj.name)
//             }, 1000);
//         }
//     })

//     prom.then((res) => console.log(res)).catch((err) => console.log(err))
//     let a = await prom
//     // console.log(a);

//     console.log(`...Finished`);
// }

// GetName()

let obj = {
    name: null
}


console.log(`Started...`);


async function GetName() {
    prom = new Promise((resolve, reject) => {
        let s = new Date().getSeconds()
        if (s % 2) {
            setTimeout(() => {
                obj.name = `Resolve`
                resolve(obj.name)
            }, 1000)
        } else {
            setTimeout(() => {
                obj.name = `Reject`
                reject(obj.name)
            }, 1000)
        }
    });
    prom.then((res) => console.log(res)).catch((err) => console.log(err))
    let a = await prom
    console.log(`...Finished`);

}

GetName()