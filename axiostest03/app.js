function req1() {
  fetch('https://jsonplaceholder.typicode.com/posts/2/')
    .then(response => response.json())
    .then(json => {
      const title = json.title;
      const body = json.body;
      document.getElementById("printTitle").innerHTML = title;
      document.getElementById("printBody").innerHTML = body;
    });
}

req1();