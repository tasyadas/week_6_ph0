/*
=============
TUG OF WAR WINNER
=============
Name :_____________
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level 
  - A = 1 
  - B = 2
  - C = 3

Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!

[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
CREATE variable kanan equal to empty array
CREATE variable kiri equal to empty array
CREATE variable count equal to 0
CREATE variable i equal to 0
FOR i less than length of variable sentence DO
  IF sentence index i not equal to '-' AND count equal to 0 DO
    push variable sentence index i to variable kiri
  IF sentence index i not equal to '-' AND count equal to 4 DO
    push variable sentence index i to variable kanan
  IF sentence index i equal to '-' DO
    add one to count
Add one to variable i
CREATE variable scoreKanan equal to 0
FOR i less than length of variable kanan DO
  IF kanan index i equal to 'A' DO
  add one to variable scoreKanan
  IF sentence index i equal to 'B' AND count equal to 4 DO
  add two to variable scoreKanan
  IF sentence index i equal to 'C' DO
  add three to variable scoreKanan
Add one to variable i
CREATE variable scoreKiri equal to 0
FOR i less than length of variable kiri DO
  IF kiri index i equal to 'A' DO
  add one to variable scoreKiri
  IF sentence index i equal to 'B' AND count equal to 4 DO
  add two to variable scoreKiri
  IF sentence index i equal to 'C' DO
  add three to variable scoreKiri
Add one to variable i
IF variable scoreKiri more than variable scoreKanan DO
  DISPLAY "Team Kiri Menang!"
IF variable scoreKanan more than variable scoreKiri DO
  DISPLAY "Team Kanan Menang!"
IF length of variable kanan equal to 0 AND kiri of variable length equal to 0 DO
  DISPLAY 'NO PLAYERS'
IF variable scoreKanan equal to variable scoreKiri DO
  DISPLAY 'DRAW'
*/

function tugOfWar(sentence){
  var kanan = [];
  var kiri = [];
  var count = 0;
  for(var i = 0; i<sentence.length; i++){
    if (sentence[i] !== '-' && count === 0) {
      kiri.push(sentence[i]);
    }
    if (sentence[i] !== '-' && count === 4) {
      kanan.push(sentence[i]);
    }
    if (sentence[i] === '-') {
      count++;
    }
  }

  var scoreKanan = 0;
  for(var i = 0; i<kanan.length; i++){
    if (kanan[i] === 'A') {
      scoreKanan++;
    }
    if (kanan[i] === 'B') {
      scoreKanan += 2;
    }
    if (kanan[i] === 'C') {
      scoreKanan += 3;
    }
  }

  var scoreKiri = 0;
  for(var i = 0; i<kiri.length; i++){
    if (kiri[i] === 'A') {
      scoreKiri++;
    }
    if (kiri[i] === 'B') {
      scoreKiri += 2;
    }
    if (kiri[i] === 'C') {
      scoreKiri += 3;
    }
  }

  if (scoreKiri > scoreKanan) {
    return "Team Kiri Menang!"
  } else if (scoreKanan > scoreKiri) {
    return "Team KANAN Menang!";
  } else if (kanan.length === 0 && kiri.length === 0) {
    return 'NO PLAYERS';
  } else if (scoreKanan === scoreKiri) {
    return 'DRAW';
  }
}

console.log(tugOfWar('ABCA--V--ABCC')); // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
console.log(tugOfWar('--V--')); // 'NO PLAYERS'