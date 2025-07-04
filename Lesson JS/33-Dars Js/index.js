// Error hnding - Errorlarning Oldini Olish

// Try Catch Name Message Stack Error ni Tutib beradigan Funcion


// try {
//     console.log(5 + 2);
// } catch (error) {
//     console.log(error.name);
// }



// try {
//     console.log(name);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     // console.log(error.stack);
// }


// Callback - bu bir function ni paarametirida yana boshqa function ishlatilishiga aytiladi



// function GetAction(prop) {
//     prop()
// }

// function GetLog() {
//     console.log(`hi`);
// }

// GetAction(GetLog)






let obj = {
    name: null
}
console.log(`Start`);

function SetName(call) {
    setTimeout(() => {
        obj.name = `Ahadjon`
        call()
    }, 1000)
}

let CallFunc = () => {
    console.log(obj.name);
    console.log(`end`);
}
SetName(CallFunc)

// Callback hel - --