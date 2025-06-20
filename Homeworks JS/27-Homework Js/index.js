// 1
let arr = [1, 2, 34, 5, 6]
Array.prototype.DelArr = function (val) {
    DelVal = this.filter((value) => value !== val)
    console.log(DelVal);
}
arr.DelArr(5)


// 2
let obj = {
    name: `Oxford`,
    year: 2022
}

Object.prototype.AgeCalc = function (val) {
    console.log(2025 - val);
}
obj.AgeCalc(obj.year)

// 3
let num = 15
Number.prototype.PairCounts = function (val) {
    val % 2 === 0 ? console.log(`Pair`) : console.log(`Toq`);
}
num.PairCounts()

// 4
let str = `Oxford`
String.prototype.InStr = function (val) {
    this.includes(val) ? console.log(true) : console.log(false);
}
str.InStr(`f`)