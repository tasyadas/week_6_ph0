/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/


function parseNumber(equation) {
  var ubah = String(equation);
  var pangkat = ubah.length - 1;
  
  if (ubah.length > 1 && ubah[ubah.length - 1] !== '0') {
    return parseInt(ubah[0]) * Math.pow(10,pangkat) +'+'+parseNumber(Number(ubah.slice(1)));
  } else {
    return ubah;
  }
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(9005)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3