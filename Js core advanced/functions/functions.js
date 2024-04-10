function unique(string) {
  const arr = string.split("");
  return arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
}

console.log(unique("qweqe"));
