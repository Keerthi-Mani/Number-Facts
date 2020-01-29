let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

let userInput = document.querySelector("#numberInput");
userInput.addEventListener("input", getFactFetch);

//Fetch with FETCH API
function getFactFetch() {
  //   console.log("123...");
  let number = userInput.value;
  //   console.log(number);
  fetch("https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + number)
    .then(response => response.text())
    .then(data => {
      fact.style.display = "block";
      factText.innerText = data;
    })
    .catch(err => console.log(err));
}

// userInput.addEventListener("input", getFactAjax);

// function getFactAjax() {
//   //console.log("123....");
//   let number = userInput.value;
//   //   console.log(number);

//   //Fetch with XHR
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://numbersapi.com/" + number);

//   xhr.onload = function() {
//     if (this.status == 200 && number != "") {
//       //   console.log(this.responseText);
//       fact.style.display = "block";
//       factText.innerText = this.responseText;
//     }
//   };
//   xhr.send();
// }
