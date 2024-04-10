function oddOrEven(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject(new Error("Error"));
    } else {
      if (data % 2 === 0) setTimeout(() => resolve("Even"), 2000);
      if (data % 2 === 1) setTimeout(() => resolve("Odd"), 1000);
    }
  });
}

console.log(oddOrEven(1));
