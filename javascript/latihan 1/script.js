function expresi(value){
    document.getElementById('expresi').value += value;
}

function tambahBilangan(a, b){
    return a + b
}

function kurangBilangan(a, b){
    return a - b
}

function perkalianBilangan(a, b){
    return a * b
}

function pembagianBilangan(a, b){
    return a / b
}

function hitung(operator){
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);
 
    var hasil;
    switch(operator){
        case '+':
            result = tambahBilangan(angka1, angka2);
            break;
        case '-':
            result = kurangBilangan(angka1, angka2);
            break;
        case '*':
            result = perkalianBilangan(angka1, angka2);
            break;
        case '/':
            result = pembagianBilangan(angka1, angka2);
            break;
    }
    document.getElementById('hasil').value = hasil;
}