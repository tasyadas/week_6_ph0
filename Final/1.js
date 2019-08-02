/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

/**
 * CREATE function split with 2 parameter string and separator
 * CREATE variable arr equal with empty array
 * FOR variable i less than length of string DO
 *  IF string index i not equal to params Do
 *    add string index i to kata 
 *  IF string index i equal to params OR i equal to length of string minus 1 DO
 *    push kata to arr
 *    set kata to empty string
 * ADD 1 to variable i
 * RETURN variable arr
 * 
 * in function heroPick
 * CREATE variable toArr set to equal to result of function split with parameter composition and separator coma
 * CREATE variable list equal to name 5 of list hero
 * CREATE variable notList equal with empty array
 * FOR variable i less than length of toArr DO
 * CREATE variable count equal to 0
 *  FOR variable j less than length of list DO
 *   IF toArr index i equal to list index j Do
 *     add 1 to count
 *   ADD 1 to variable j
 * IF count equal to 0 push toArr index i to notList DO
 * ADD 1 to variable i
 * IF notList length not equal 0 DO
 *  DISPLAY variable notList is not on the pick list
 * ELSE IF toArr length equal to 5 DO
 *  CREATE variable bad equal to empty string
 *  FOR variable i less than length of toArr DO
 *  CREATE variable count equal to 0
 *   FOR variable j less than length of toArr DO
 *    IF toArr index i equal to toArr index j Do
 *      add 1 to count
 *    ADD 1 to variable j
 *  IF count more than 2 push toArr index i to notList DO
 *  SET bad equal to toArr index i
 *  ADD 1 to variable i
 *  IF variable bad not equal to 0 Do
 *   DISPLAY bad pick too many variable bad
 *  ELSE 
 *   DISPLAY good pick
 * ELSE
 *  DISPLAY not sufficient players 
 * 
 */

function split(string, params) {
  var arr = [];
  var kata = '';
  for(var i = 0; i<string.length; i++){
    if ( string[i] !== params) {
      kata += string[i];
    }
    if (string[i] === params || i === string.length-1) {
      arr.push(kata);
      kata = '';
    }
  }
  return arr;
}

function heroPick(composition) {
  var toArr = split(composition, ',');
  var list = ['ranger', 'mage', 'tank', 'warrior', 'assassin'];
  var notList = [];
  for(var i = 0; i<toArr.length; i++){
    var count = 0;
    for(var j = 0; j<list.length; j++){
      if (toArr[i] === list[j]) {
        count++;
      }
    }
    if (count === 0) {
      notList.push(toArr[i]);
    }
  }
  if (notList.length !== 0) {
    return notList+' is not on the pick list';
  } else if (toArr.length === 5) {    
    var bad = '';
    for(var i = 0; i<toArr.length; i++){
      var count = 0;
      for(var j = 0; j<toArr.length; j++){
        if ( toArr[i] === toArr[j] ) {
          count++;
        }
      }
      if (count > 2) {
        bad = toArr[i];
      }
    }

    if (bad !== '') {
      return 'bad pick too many '+bad;
    } else {
      return 'good pick';
    }
  } else {
    return 'not sufficient players';
  }
}

// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list


