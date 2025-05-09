// let quesition = prompt(`"Confirm" or "Cancel" clicked`)

// function getHomework (check, yes, no, ){
//   if(check===null){
//     console.log(`You canceled the execution`);
//   }else if (check==="underfined"){
//     console.log(`You agred.`);
//   }else{
//     console.log(`"Not fined" your "calc"`);
//   }
// }

// getHomework (quesition);


// FUNCTION DECARATION >>>  ARROW FUNCTION  //


let quesition = prompt(`"Confirm" or "Cancel" clicked`)

let getHomework =(check)=>{
  if(check===null){
    console.log(`You canceled the execution`);
  }else if (check===" "){
    console.log(`You agred.`);
  }else{
    console.log(`"Not fined" your "calc"`);
  }
}

getHomework (quesition);