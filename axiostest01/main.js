var btn=document.getElementById("btn").addEventListener("click",getData);
var div=document.getElementById("postDiv");
var con=0;
function getData(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      console.log(response.data);
      for(let index=0;index<1;index++){
          div.innerHTML+=`
          <div class="card-body">
          <p class="card-title">ID: ${response.data[con].id}</p>
          <p class="card-title">TITLE: ${response.data[con].title}</p>
          <p>BODY: ${response.data[con].body}</p>
          </div>
          </div>
          `
          con=con+1;
      }
    })
    .catch(function (error) {
      // handle error
      console.log("THE ERROR:"+error);
    })
}
