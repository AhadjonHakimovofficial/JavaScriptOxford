// let user ={
//     id:1,
//     firstName:`Eshmat`,
//     surName:`Toshmatov`,
//     age: 30,
//     getFullName:()=>{
//         return `${this.firstName} ${this.surName}`;
//     },
// }
// console.log(user.getFullName);

// Bu Yerda Returnga return this.firstName this.surName} Tashlanyabti Bu Faqat FUNCTIONNI Ichidan Qidiradi 



let ladder={
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;
    },
}
ladder.up().up.down().showStep().down().showStep();





