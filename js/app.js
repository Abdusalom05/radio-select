const API = "https://jsonplaceholder.typicode.com/todos";
fetch(API)
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
    for (let i = 0; i < 20; i++) {
      const element = json[i];
      document.querySelector(".cards").innerHTML += `
          <div class="cards-ichidagi">
        
        <h2>Id : <span>${element.id}</span></h2>
        <p>Nomi : <span>${element.title}</span></p>
        <p>Bajarilganligi : <span class="comp">${element.completed}</span></p>
    </div>
            `;
    }
  });
function select_click() {
  let html_val = document.querySelectorAll(".d-f div");
  html_val.forEach((element) => {
    console.log(element);
    if (element.querySelector(".comp").innerHTML == "true") {
    } else {
    }
  });
}

function select_val() {
  let select_val = document.querySelector("select").value;
  let comp_h = document.querySelectorAll(".comp");
  if (select_val == "true") {
    for (let i = 0; i < comp_h.length; i++) {
      const element = comp_h[i];
      if (element.innerHTML == "true") {
        comp_h[i].parentElement.parentElement.classList = "d-child";
      } else {
        comp_h[i].parentElement.parentElement.classList.add("d-n");
      }
    }
  } else if (select_val == "false") {
    for (let i = 0; i < comp_h.length; i++) {
      const element = comp_h[i];
      if (element.innerHTML == "true") {
        comp_h[i].parentElement.parentElement.classList.add("d-n");
      } else {
        comp_h[i].parentElement.parentElement.classList = "d-child";
      }
    }
  } else {
    for (let i = 0; i < comp_h.length; i++) {
      const element = comp_h[i];
      comp_h[i].parentElement.parentElement.classList = "d-child";
    }
  }
  // console.log(comp_h);
}
