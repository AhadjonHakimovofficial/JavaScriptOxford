let form = document.querySelector(".form");
let name = document.querySelector(".name");
let surName = document.querySelector(".surname");
let phone = document.querySelector(".phone");
let age = document.querySelector(".age");
let button = document.querySelector(".add");
let bottom = document.querySelector(".bottom");

function* gen() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
let g = gen();

button.addEventListener("click", function (e) {
    e.preventDefault();

    let aname = "";
    let asurName = "";
    let aphone = "";
    let aage = "";




    // -------------------

    if (name.value.length > 0) {
        aname = name.value;
        name.value = null;
    } else {
        name.style.backgroundColor = "red";
        setTimeout(() => {
            name.style.backgroundColor = "#fff";
        }, 1000);
    }

    if (surName.value.length > 0) {
        asurName = surName.value;
        surName.value = null;
    } else {
        surName.style.backgroundColor = "red";
        setTimeout(() => {
            surName.style.backgroundColor = "#fff";
        }, 1000);
    }

    if (phone.value.length > 0) {
        aphone = phone.value;
        phone.value = null;
    } else {
        phone.style.backgroundColor = "red";
        setTimeout(() => {
            phone.style.backgroundColor = "#fff";
        }, 1000);
    }

    if (age.value.length > 0) {
        aage = age.value;
        age.value = null;
    } else {
        age.style.backgroundColor = "red";
        setTimeout(() => {
            age.style.backgroundColor = "#fff";
        }, 1000);
    }






    let obj = {
        name: aname,
        surName: asurName,
        age: aage,
        phone: aphone,
        id: g.next().value,
    };





    let student = document.createElement("div");
    student.classList.add("student");

    let idText = document.createElement("p");
    idText.textContent = obj.id;

    let idDiv = document.createElement("div");

    idDiv.classList.add("id__div");
    idDiv.appendChild(idText);

    let nameset = document.createElement("p");
    nameset.textContent = obj.name;


    let surnameset = document.createElement("p");

    surnameset.textContent = obj.surName;

    let phoneset = document.createElement("p");
    phoneset.textContent = obj.phone;
    let ageset = document.createElement("p");
    ageset.textContent = obj.age;

    let rasm = document.createElement("img");
    rasm.src = "./assets/icons/Vector (3).svg";
    rasm.classList.add("del");

    rasm.onclick = function () {
        student.remove();

    };
    student.appendChild(idDiv);
    student.appendChild(nameset);
    student.appendChild(surnameset);
    student.appendChild(phoneset);
    student.appendChild(ageset);
    student.appendChild(rasm);

    bottom.appendChild(student);
});
