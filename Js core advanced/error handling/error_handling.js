try {
  console.log(a);
} catch (e) {
  console.log(e instanceof ReferenceError);
  console.log(e.message);
  console.log(e.name);
  console.log(e.stack);
}
