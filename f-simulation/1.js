/*
=======================
INVENTARIS KERAN MASJID
=======================

[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string , 
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu

[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output : 
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'

input: 'XX?XX?XX^XX'
output: 
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'

input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'

input : 'XX?XX?XX'
output :
'Semua keran rusak'

[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr

// YOUR PSEUDOCODE/ALGORITHM HERE
CREATE variable jalan and SET equal to empty array
CREATE variable rusak and SET equal to empty array
CREATE variable count and SET equal to 0
CREATE variable i and SET equal to 0
FOR i less than variable str length DO
    IF str index i not equal to "X" AND str index i equal to "^" DO
        add 1 to variable count
        push variable count to variable jalan
    IF str index i not equal to "X" AND str index i equal to "?" DO
        add 1 to variable count
        push variable count to variable rusak
Add 1 to variable i
IF length of variable jalan equal to 0 DO
    DISPLAY 'Semua keran rusak'
IF length of variable rusak equal to 0 DO
    DISPLAY 'Semua keran berjalan dengan baik'
ELSE
    DISPLAY terdapat (variable jalan length) keran yang berjalan nomor(variable jalan) , dan (variable rusak length) keran rusak nomor(variable rusak)
*/

function inventarisKeran(str){
    var jalan = [];
    var rusak = [];
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if (str[i] !== "X" && str[i] === '^') {
            count++;
            jalan.push(count);
        }
        if (str[i] !== "X" && str[i] === '?') {
            count++;
            rusak.push(count);
        }
    }

    if ( jalan.length === 0) {
        return 'Semua keran rusak';
    }
    if ( rusak.length === 0 ) {
        return 'Semua keran berjalan dengan baik';
    }

    return `terdapat ${jalan.length} keran yang berjalan nomor(${jalan}) , dan ${rusak.length} keran rusak nomor(${rusak})`;
}

console.log(inventarisKeran('XX^XX^XX^XX?XX^XX'));
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran('XX?XX?XX^XX'))
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran('XX^XX^XX'));
// Semua keran berjalan dengan baik
console.log(inventarisKeran('XX?XX?XX'));
// Semua keran rusak
