let pro = Number(prompt(`Yoshingizni Kiriting`));
let yosh = 2025-pro
let user ={
  id : 1,
  name:`Ismoil`,
  age :yosh,
}
if(yosh<=7){
  user.Kimligi=`Maktabgacha Ta'lim`
}else if (yosh>=7 && yosh<=18){
  user.Kimligi=`Maktab Ta'lim`
}else if (yosh<=25){
  user.Kimligi=`UniVersitet`
}else{
  console.log(`Not a User`);
}
console.log(user);