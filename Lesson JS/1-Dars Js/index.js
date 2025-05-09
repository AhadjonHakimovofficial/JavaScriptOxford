
// verable lar 3 xil bo'ladi ("Decler qilinadi")




// __________________________________________________________________________________
// 1-usul var "var glabal usul deyiladi"
var text0 = "var global uslub bo'lib undan ko'pincha ishlatilmaydi";
console.log(text0);
// __________________________________________________________________________________________________





// ________________________________________________________________________________________________
// 2-usul let "let scop deyiladi"
let text1 = "let scop verable "
console.log(text1);
// _______________________________________________________________________________________________





// ___________________________________________________________________________________________________
// 3-usul const "constenta verable deyiladi o'z nomidan o'zgarmas degan ma'noni anglatadi"
const text2 = "scop o'zgarmas verable"
console.log(text2);
// _____________________________________________________________________________________________________________





// ------------------------------------------------------------------------------------------------------------------
//console.log(qiymat); ni bittada chiqarish isuli ham bor 
console.log(text0, text1, text2);
// ------------------------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------
// war ning bitta xususiyatini ko'rib ketamiz

console.log(num0);

var num0 = 123456789;

// var log dan pastda e'lom qilinsa terminalga "underfined" yozuvi chiqadi lekin borlgini biladi
// ----------------------------------------------------------------------------------------------------------




//-------------------------------------------------------------------------------------------------------------
//  let ning bitta xususiyatini ko'rib ketamiz
let num1 = 123456789;
console.log(num1);

num1 = 987654321

console.log(num1);

// log ni pastda qiymatini onabort;'zgartirish mimkun o'zgartirgan qatorimizgacha tepadagi qiymatishlay di pasti o'zgarma qiymat ishlaydi!
// ----------------------------------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------------------------------
// const ni xususiyatimi ko'ramiz
// constni let kabi o'zgartirib bo'lmnaydi
// ko'pincha o'zgartirilmadigab qiynatlarda ishlatiladi

// ------------------------------------------------------------------------------------------------------------------------------------




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// VERABLE larni nomlash usullari 5 xil bo'ladi
// 1 - camelCase
// 2 - snace-case
// 3 - PascalCase
// 4 - kebab-case
// 5 - UPPER_CASE

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





// JS da Reserverd Keywords lar bor bular nima ?
// JS tomonida band qilib qo'yilgan So'zlar biz ularni Verable name da ishhlatolmaymiz 
// ularga misol: funsion, let , var , const





// _______ENG MUHIM QISIM  yani "DATA TYPES"______________________


// _________________(DATA TYPES)_____________________________


// Data Type lar ikkiga bo'linadi

// 1-Primative 


// 1 - num : bu type number lar yozish uchun ishlatiladi Numberlarni Faqat 2^53  darajasigacha bu num bol'ladi


// 2 - bigint : bu 2^53 darajasidan katta sonlar bu type ga kiradi va oxiriga n qo'yiladi


// 3 - string  : bu matn type bu type a amatn yoziladi matnlari ajratish  usuli 1 - "matn" 2 - 'matn' 3 - `matn bunda raqam ham yozish mumkin faqayt log bn`


// 4 - boolin : bu ikkita eelemntni bir biriga solishtirsh uchun uchun lerak bo'ladi unung ikkta qiymati bor true va folse true- rost folse - xato unug ishltish log ga birinchi e === ikkichi e ga


// 5 - underfined : bu JS tomonidan bo'sh bo'lgan qiymatlarga auto qo'yiladi


// 6 - null : bu devoloper tomonidan elementrning valyusini bo'shatish uchun qo'yiladi


// 7 - Symble : bu unikal qiymatlarga ishlatiladi ishlatish let name = Symbol(123)  let name2 = Symbol(123) yashirib qo'yilsa han bo'ladi






// 2-Nonprimative


// 1- Abyekt 