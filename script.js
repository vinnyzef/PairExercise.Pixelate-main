const tab = document.getElementById('table');


function makeRow() {
  let row = document.createElement("tr");


  for (let i = 0; i < 20; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
  }

  tab.appendChild(row);
}

document.getElementById('add-row').addEventListener('click', function () {
  makeRow();

});


// document.querySelector('#table td').addEventListener('click', function () {
// document.querySelector('#table td').style.backgroundColor = 'red';

// });
function changeBackground(color) {
  let row = document.createElement("tr");
  let td = document.createElement("td");
  document.getElementById('#table td').style.background = color;
}

document.getElementById('td').addEventListener("click",function() { changeBackground('red') });