let body = document.querySelector("body")

body.style.cssText = `display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   ;

`


let h1 = document.createElement("h1")
h1.textContent = "Online Counter"
body.append(h1)



h1.style.cssText = `color: #1d9cbf;
    font-family: sans-serif;
    font-size: 25px; `

let div = document.createElement("div")
body.append(div)


div.style.cssText = `border-radius: 20px;
    background-color: #638b86;
     width:500px;
     height:300px;
     border:3px solid #fff;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:200px
  border-radius:50px;
    `

let button = document.createElement("button")
button.textContent = "Click"

let cout = document.createElement("h2")
cout.textContent = "0"
div.append(cout)

cout.style.cssText = `color: #1d9cbf;
    background-color: antiquewhite;
    border: 1px solid #fff;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`




button.style.cssText = `  padding: 15px 35px 15px 35px;
    background-color: #104cb9;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor:pointer;
    `

div.append(button)


let link = document.createElement("a")
link.setAttribute("href", "./index.html")
link.textContent = "Tozalash"

link.style.cssText = `
color: #fff;
    margin-top: 20px;
    text-decoration: none;

`




div.append(link)

let a = 0;
button.onclick = function () {
    a++;
    cout.textContent = `${a}`
}



