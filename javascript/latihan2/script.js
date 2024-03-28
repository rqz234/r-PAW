let data = ["a", "b", "c"];
let listMhs = document.getElementById('listMhs');

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    // listMhs.innerHTML = "<li>" + value + "</li>";
    listMhs.innerHTML += `<li>${value}</li>`;

}