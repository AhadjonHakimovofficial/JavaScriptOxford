function* GetUnicVal(id) {
    while (1) {
        yield id++
    }
}

let obj = GetUnicVal(1)





let arr = [
    {
        id: obj.next().value, name: `Ahadjon`
    },
    {
        id: obj.next().value, name: `Oxford`
    }
]

let list = document.querySelector("#list")




function SetUser() {
    list.innerHTML = null
    arr.map((obj) => {
        let h1 = document.createElement("h1")
        h1.innerHTML = `${obj?.name} - ${obj?.id} <button onclick="del(${obj?.id})">Delate</button>`
        list.append(h1)
    })
}




SetUser()

function AddUser() {
    document.querySelector("#inp")
    let name = inp.value
    if (name) {
        arr.push({ id: obj.next().value, name: name })
        SetUser()
        inp.value = String
    }

}



let del = (id) => {
    arr = arr.filter((obj) => obj.id !== id)
    SetUser()
}