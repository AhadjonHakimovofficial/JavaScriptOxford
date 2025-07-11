
// Curry Function

let GetCurry = (curry) => {
    return (twoo) => {
        if (twoo) {
            return GetCurry(curry + twoo)
        }
        return curry
    }
}
console.log(GetCurry(1)(2)(4)(7)(8)());


