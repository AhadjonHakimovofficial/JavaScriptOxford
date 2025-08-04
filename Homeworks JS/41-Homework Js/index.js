let form = document.querySelector("form")
let name = document.querySelector(".name")
let password = document.querySelector(".password")
let submit = document.querySelector(".submit")
let h1 = document.createElement("h1")
let check = document.querySelector("#eslabqolish")





submit.addEventListener("click", function (e) {
    e.preventDefault()

    let sahrt1 = ""

    if (password.value.length > 8) {
        sahrt1 = password.value
    } else {
        h1.textContent = "8 ta Harfdan Katta Bo'lsin"
        form.append(h1)
    }

    let shart2 = ""
    if (sahrt1) {
        if (sahrt1 === sahrt1.toUpperCase()) {
            h1.textContent = "Kamida Bitta Kichik Harf bo'lsishi kerakl"
            form.append(h1)
        } else if (sahrt1 === sahrt1.toLowerCase()) {
            h1.textContent = "Kamida Bitta Katta Harf bo'lsishi kerakl"
            form.append(h1)
        } else {
            h1.textContent = ""
            form.append(h1)
            shart2 = sahrt1
        }
    } else {
        h1.textContent = "8 ta Harfdan Katta Bo'lsin"
        form.append(h1)
    }




    let symbol = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
        '_', '+', '=', '-', '{', '}', '[', ']', ':', ';',
        '"', "'", '<', '>', ',', '.', '?', '/', '|', '\\',
        "`", "~"

    ];
    let shart3 = ""

    for (let val of shart2) {
        let bool = null
        if (symbol.includes(val)) {
            bool = true
        } else {
            bool = false
        }
        if (bool) {
            shart3 = shart2
        } else {
            h1.textContent = " Kamida 1 Ta Symbol Kiriting"
            form.append(h1)
        }
    }

    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let numval of shart3) {
        if (number.includes(numval)) {

            h1.textContent = "Chekking ... "
            form.append(h1)
            setTimeout(() => {
                if (check.value) {
                    h1.textContent = " Okey Your Passvord Saved "
                    form.append(h1)
                } else {
                    h1.textContent = " Okey Your Passvord DisSaved "
                    form.append(h1)
                }
            }, 2000);
            setTimeout(() => {
                alert(`Your password is - " ${shart3} " ,Your name is " ${name.value} "`)
            }, 4000);


        } else {
            h1.textContent = "Kamida Bitta Son Bo'lsin"
            form.append(h1)
        }
    }

    console.log(check.value);



})



