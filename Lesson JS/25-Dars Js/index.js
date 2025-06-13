// IIFE -  Immediately invoked function expression;

// 1-IIFE


(function (){
    let a = `Oxford`
    if(a=`Oxford`){
      console.log(true)}else{
        console.log(false);
      }
  })()
  
  
  // 2-IIFE
  
  
  (function (){
    let b = `+998991234567`;
    if((b.includes("+998"))){
      console.log(`Uzbekistan`);
    }else{
      console.log(`Bu Raqam xato`);
    }
  })();
  
  // NFE - Named Function Expression;
  
  
  // 1-NFE
  
  let Num  = 11
  let GetNFE = function QoshimchaName (n){
    if(n%2==0){
      console.log(`Bu Juft Son`);
    }else{
      console.log(`Bu Toq Son`);
    }
  }
  GetNFE(Num);
  
  
  // 2-NFE
  
  
  let n = 12346789
  let str = `Oxford`
  let obj = {}
  let arr = []
  let GetDataType = function InsideName (a,b,c,d){
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
  }
  
  GetDataType(n, str,obj,arr)
  
  
  
  
  // SetTimeOut and SetInterval
  
  
  // 1
  
  setTimeout(()=>{
    console.log(`1s`);
  },1000)
  
  setTimeout(()=>{
    console.log(`2s`);
  },2000)
  
  setTimeout(()=>{
    console.log(`3s`);
  },3000)
  
  setTimeout(()=>{
    console.log(`4s`);
  },4000)
  
  setTimeout(()=>{
    console.log(`5s`);
  },5000)
  
  
  // 2 
  
  console.log(1);
  setTimeout(()=>{
    console.log(3);
  },0)
  console.log(2);
  
  
  // 3 
  
  setInterval(()=>{
    console.log(`Bu loop Chiqadi Har 1s da `);
  },1000)
  
  
  
  // 4
  
  setInterval(()=>{
    console.log(`Bu loop Chiqadi Har 1s da `);
  },1000)
  setInterval(()=>{
    console.log(`Bu loop Chiqadi Har 2s da `);
  },2000)
  
  
  // 5
  
  let Interval = setInterval(()=>{
    console.log(`Bu 5000s da To'xtaydi `);
  },1000)
  
  setTimeout(()=>{
    clearInterval(Interval)
  },5000)
  
  // 6
  
  let Inter = setInterval(()=>{
    console.log(`Bu loop Chiqadi  `);
  },1000)
  
  let Set = setTimeout(()=>{
    clearInterval(Inter)
  },5000)
  
  clearTimeout(Set)