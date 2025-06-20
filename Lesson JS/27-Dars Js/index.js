// Obj -FLAGS

let user = {
    name: `Ahadjon`,
    age: 15,
    status: `Student`
}

// getOwnPropertyDescriptor - Object ni FLAG larini chiqarib beradi
let Data = Object.getOwnPropertyDescriptor(user, `name`);


// defineProperty - Object ni FLAG larini cheklab qo'yish 
Object.defineProperty(user, `name`, { writable: false, configurable: false })
user.name = `Hakimov`
delete user.name



// defineProperties - Bir Neche Value larni Uchun
Object.defineProperties(user, {
    name: { enumerable: false, writable: false },
    age: { configurable: false }
})


// Clone Olis

// let newUser = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user))
// console.log(newUser);

Object.preventExtensions(user)
// Addition :false

Object.seal(user)
// update:true

Object.freeze(user)
// 3Proporties :false

Object.isExtensible
Object.isSealed
Object.isFrozen