let obj = {
    name: `Oxford`,
    surName: `Algoritm`,
    get GetActon() {
        console.log(this.name, this.surName);
    },
    set GetActon(param) {
        console.log(param);
        let arr = param.split(" ")
        this.name = arr[0]
        this.surName = arr[1]
        console.log(obj);

    }
}

obj.GetActon = `NewName NewSurName`