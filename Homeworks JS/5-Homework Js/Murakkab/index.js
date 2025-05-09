let m = prompt("Mahsulot turini kiriting (Telefon, Laptop, Quloqchin)").toLowerCase() ,s = parseInt(prompt("Nechta sotib olmoqchisiz?")) ,k = prompt("Chegirma kartangiz bormi? (Ha / Yo'q)").toLowerCase();
let narxi;
if (m === "telefon") {
  narxi = 200;
} else if (m === "laptop") {
  narxi = 800;
} else if (m === "quloqchin") {
  narxi = 50;
}
if (narxi && !isNaN(s) && (k === "ha" || k === "yo'q")) {
  let umumiy = narxi * s;
  let yakuniy = umumiy;
  if (k === "ha" && umumiy > 300) {
    yakuniy = umumiy * 0.9; 
  }
  console.log("Yakuniy to'lov: $" + yakuniy.toFixed(2));
} else {
  console.log("Siz noto'g'ri ma'lmot kiritdingiz ! 1-ga Mahsulot Turini Kiriting 2-ga Mahsulot sonini kiriting 3ga Sizda Chegirma kartasi borligini kiriting ");
}