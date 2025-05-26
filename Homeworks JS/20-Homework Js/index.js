
let people = [
    { id: 1, firstName: "Ashmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
    { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
    { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
    { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
    { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
    { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
    { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
    { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
    { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
    { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
  ];
  

//   2. people array ichida lastName ning oxiri “va” qo’shimchasi bilan tugagan shaxslar qolsin.

// let chanAction = (val,Users)=>{people=Users.filter((obj)=>{if(obj?.lastName.endsWith(val))return obj})}
// chanAction(`va`,people);
// console.log(people);



// 5. shu people arrayni lastName bo’yicha sort qilib bering.
// let SortAction=(Users)=>{people = Users.sort((a,b)=>{return a?.lastName.localeCompare(b?.lastName)})
// }
// SortAction(people);
// console.log(people);



// id si 4 ga teng bo’lgan odamlar arraydan o’chirib tashlansin.


// let delAction =(Users,id)=>people = Users.filter((obj)=>{if(obj?.id!==id)return obj;})
// delAction(people,7);
// console.log(people);





// 4. id si 7 ga teng bo’lgan object firstName ning qiymatini "AHADJON"ga o’zgartirib bering.

// let ChangeName=(Users,ID)=>people = Users.map((obj)=>{if(obj.id===ID){return obj.firstName=`Ahadjon`}})
// ChangeName(people,7);
// console.log(people);