const tab = document.getElementById('table');
let currColor = 'red';


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


document.getElementById('table').addEventListener('click', function (e) {

let cell = e.target.closest('td');

cell.style.backgroundColor = currColor;
});


document.getElementById('select').addEventListener('change', function(e){
currColor = e.target.value;

});
