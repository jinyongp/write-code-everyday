function primeFactorization(n) {
  let p = 2;
  const fac = [];
  while (p * p <= n) {
    if (n % p) {
      p += 1;
    } else {
      n = ~~(n / p);
      fac.push(p);
    }
  }
  if (n > 1) fac.push(n);
  return fac;
}

console.log(primeFactorization(100));
