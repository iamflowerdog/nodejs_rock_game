let a = '';
for (let i = 1; i < 4000; i++) {
  if (i % 7 == 0 || i % 10 == 7) {
    a = a + i + '过' + '\t' 
  }
}

console.log(a);

