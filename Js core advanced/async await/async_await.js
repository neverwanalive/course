async function fetchAndProcessData() {
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((response) => response.json());
    console.log(JSON.stringify(data));
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

fetchAndProcessData();
