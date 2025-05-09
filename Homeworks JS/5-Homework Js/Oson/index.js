let age = parseInt(prompt("Yoshingizni kiriting")) ,Student = prompt("Siz talabamisiz? (Ha / Yo'q)").toLowerCase();;
let Chipta;
Student === "ha" ?  Chipta =` "5000"uzs` :age <= 18 ? Chipta = 5000 : age > 18 && Student === "yo'q" ? Chipta = `"10000"uzs` :console.log("Error: Iltimos, (Ha / Yo'q) orqali javob bering!")
if (Chipta) {
  console.log("Siz Chipta Narxi: " + Chipta + "");
}