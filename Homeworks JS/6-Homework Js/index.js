let n = prompt(`Qiymat kiriting`);
n = parseInt(n);

for (let i = 2; i <= n; i++) {
  let j;
  for (j = 2; j < i; j++) {
    if (i % j == 0) break;
  }
  if (j == i) console.log(i);
}