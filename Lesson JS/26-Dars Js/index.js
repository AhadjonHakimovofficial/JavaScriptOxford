let arr = [7, 5, 11, 9, 2, 30];
function Get() {
    let a = this;
    a.sort((a, b) => {
        return a - b
    })
    let v = a.length - 1
    console.log(a[v] - this[0]);
}
Get.call(arr)
