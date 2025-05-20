let arr=[
    {id:`10wa1520101`,name:`Ali`,age:`21`,status:`Talaba`},
    {id:`10wa1520103`,name:`Abror`,age:`13`,status:`O'quvchi`},
    {id:`10wa1520107`,name:`Sarvar`,age:`6`,status:`M.T.T`},
    {id:`10wa1520102`,name:`Eshmat`,age:`67`,status:`Nafaqaxo'r`}
]

let a =prompt(`Statusni Kiriting`)
 newArr=arr.map((val)=>{
    if(val.status==a)return val
})
console.log(newArr);
