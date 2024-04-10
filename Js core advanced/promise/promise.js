function square(data) {
  return Math.pow(data, 2);
}

new Promise((resolve, reject) => {
  resolve(3);
})
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(square(res));
      }, 3000);
    });
  })
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(square(res));
      }, 3000);
    });
  })
  .then((res) => console.log(res));
