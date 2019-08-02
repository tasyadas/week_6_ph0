/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  var toArr = [];
  var kata = '';
  for(var i = 0; i<hero.length; i++){
    if ( hero[i] !== '&') {
      kata += hero[i];
    } else if ( kata !== '') {
      toArr.push(kata);
      kata = '';
    }
    if (i === (hero.length - 1)) {
      toArr.push(kata);
    }
  }
  
  var hasil = [];
  var obj = {}
  for(var i = 0; i<toArr.length; i++){
    if (obj[toArr[i]] === undefined) {
      obj[toArr[i]] = 0;
    } else {
      obj[toArr[i]] += 1;
    }
  }

  for(var i in obj){
    hasil.push(i);
  }
  
  return hasil;
}

// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""))
// There's no heroes