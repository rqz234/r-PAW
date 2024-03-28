let angka1 = document.getElementById('angka1');
let angka2 = document.getElementById('angka2');
let hasil = document.getElementById('hasil');

function tambahBilangan(){
    hasil.innerHTML = parseFloat(angka1.value) + parseFloat(angka2.value);
}

function kurangBilangan(){
    hasil.innerHTML = parseFloat(angka1.value) + parseFloat(angka2.value);
}

function perkalianBilangan(){
    hasil.innerHTML = parseFloat(angka1.value) * parseFloat(angka2.value);
}

function pembagianBilangan(){
    hasil.innerHTML = parseFloat(angka1.value) / parseFloat(angka2.value);
}

function operatorBilangan(operator){
    if(operator == "+"){
        hasil.innerHTML = parseFloat(angka1.value) + parseFloat(angka2.value)
    }
    if(operator == "-"){
        hasil.innerHTML = parseFloat(angka1.value) - parseFloat(angka2.value)
    }
    if(operator == "*"){
        hasil.innerHTML = parseFloat(angka1.value) * parseFloat(angka2.value)
    }
    if(operator == "/"){
        hasil.innerHTML = parseFloat(angka1.value) / parseFloat(angka2.value)
    }
}