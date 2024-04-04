let data = ["a", "b", "c"];
let listMhs = document.getElementById('listMhs');

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    // listMhs.innerHTML = "<li>" + value + "</li>";
    listMhs.innerHTML += `<li>${value}</li>`;

}


let npm = document.getElementById("npm");
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// Simpan data ke localStorage
localStorage.setItem("email", "ahmad@test.com");

// Data Array
let hobi = ["Baca", "Game", "Coding"];

localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));   

// Data dalam bentuk object
let mhs = {"npm" : 2226240103, "nama" : "Donok"};
localStorage.setItem("mhs", mhs)

console.log(mhs.npm);
console.log(mhs.nama);

// Kombinasi array dan object
let nilai = [
    {"kode_mk" : "SI0001", "nama_mk" : "Pemrograman Web"}, 
    {"kode_mk" : "SI0002", "nama_mk" : "Pengembangan Aplikasi Bergerak"},
];

// Tampilkan nama_mk pemrograman web
console.log(nilai[0].nama_mk);

// Tampilkan nama_mk Pengembangan Aplikasi Bergerak
console.log(nilai[1].nama_mk);

// simpan nilai ke dalam locaStorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [index, data] of lsNilai.entries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);

    // tampilkan data mk ke dalam id = "listMk">
    document.getElementById("listMk").innerHTML += `<li>${data.kode_mk} ${data.nama_mk}</li>`

}

let nama_kamu = "";
let testimoni_kamu = "";
let simpan = "";


function print(){
    
    nama_kamu = document.getElementById("nama_kamu").value
    testimoni_kamu = document.getElementById("testimoni_kamu").value
    simpan = document.getElementById("simpan").value;

    localStorage.getItem("nama_kamu");
    localStorage.getItem("testimoni_kamu");
    localStorage.getItem("simpan");

    simpan.push(nama_kamu, testimoni_kamu)
    document

}














    