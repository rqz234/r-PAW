let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnsimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data1 = []

btnsimpan.addEventListener("click", function(){
    if(localStorage.getItem("testimoni")){
        data1 = JSON.parse(localStorage.getItem("testimoni"));
        data1.push({
            nama: inputnama.value,
            testimoni : inputtestimoni.value,
        });
    }
    else{
        data1.push({
            nama : inputnama.value,
            testimoni : inputtestimoni.value,
        })
    }
    localStorage.setItem("testimoni", JSON.stringify(data1))

    // Panggil GetData()
    getData();
})

// tampilkan data localStorage
function getData(){
    // Clear Element List
    list.innerHTML = "";
    if(localStorage.getItem("testimoni")){
        // ada localstorage dengan key testimoni
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const [index, row] of data.entries){
            list.innerHTML += `<li>${row.nama} ${row.testimoni}</li>`;
        }
    }
}










    