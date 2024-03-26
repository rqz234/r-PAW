// TODO : JAVASCRIPT ELEMENT
document.getElementById("welcome").innerHTML = "Selamat Datang";
document.getElementById("nama").innerHTML = "<b>Ahmad</b>";
document.getElementById("email").innerText = "Ahmad@test.com";

console.log("Hanya bisa dilihat di console")

// document.body.style.backgroundColor = "green"

let nama = "";
let email = "";
let data = []; // * array / larik

// TODO Function
function tampil(){
    console.log("Button Ditekan");
    // * SIMPAN VALUE txtNama ke dalam variabel "nama"
    nama = document.getElementById("txtNama").value;
    console.log(nama);
    // * Ubah konten <p id="nama">
    document.getElementById("nama").innerHTML = nama;
    // * Ubah konten <p id="email">
    document.getElementById("email").innerHTML = email;
    // * Simpan ke dalam array data
    data.push(nama);
    console.log(data)
}

