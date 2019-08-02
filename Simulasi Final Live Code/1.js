/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/

function selectOption(array, key) {
  var temp = [];
  for(var i = 0; i<array.length; i++){
    if ( array[i] % key === 0 ) {
      temp.push(array[i]);
    }
  }

  if (temp.length === 0) {
    return "There's not option";    
  }
  if (temp.length % 2 === 0) {
    return ( temp[(Math.round(temp.length/2)) - 1] + temp[Math.round(temp.length/2)] ) / 2;
  }
  if (temp.length % 2 !== 0) {
    return temp[(Math.round(temp.length/2) - 1)];
  }
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option


/*
PSEUDOCODE

SET variable temp equal to empty array
SET variable i equal to 0
FOR variable less than length of variable array DO
  IF variable array in index i modulus variable key is equal to 0 DO
    push variable array in index i to variable temp
Add 1 to i
IF length of variable temp is equal to 0 DO
  DISPLAY "There's not option"
IF length of variable temp modulus 2 is equal to 0 DO
  DISPLAY variable temp in index length of variable temp devided to 2, add with variable temp in index length of variable temp devided to 2 minus 1. Then devide the result with 2
IF length of variable temp modulus 2 is not equal to 0 DO
  DISPLAY variable temp in index length of variable temp devided to 2
IF length of variable temp is equal to 1 DO
  DISPLAY variable temp in index 0
  
*/