// 5 Masala

let OxfordShcoolTeachers = {
    Id:10,
    Specialty:`Engilish`,
    Salary:10_000_000,
    Person:[
      {
        Id:1001,
        Specialty:`Eng Support Mentor`,
        Salary:5_000_000,
        Person:[]
  
      }
    ],
    Id:11,
    Specialty:`IT`,
    Salary:12_000_000,
    Person:[
      {
        Id:1101,
    Specialty:`IT Kids Teacher`,
    Salary:8_000_000,
    Person:[]
  
      }
    ]
  }
  
  let SalaryBudget = 0;
  function GetSalary(obj){
    SalaryBudget+=obj.Salary
    for(let value of obj.Person)GetSalary(value)
  }
  GetSalary(OxfordShcoolTeachers)
  console.log(SalaryBudget);