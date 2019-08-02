/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/

function getPoint(tim) {
  var score = 0
  for(var i = 0; i<tim.length; i++){
    if ( tim[i] === 'O') {
      score += 2;
    } else if (tim[i] === 'o') {
      score++;
    }
  }
  return score;
}

function winner(tim1, tim2) {
  if (tim1.score > tim2.score) {
    return [tim1, tim2];
  } else {
    return [tim2, tim1];
  }
}

function guildWars(guilds) {
  var arr = [];
  for(var i = 0; i<guilds.length; i++){
    arr.push({tim: guilds[i], score: getPoint(guilds[i])});
  }

  var firstMatch = winner(arr[0], arr[1])
  var secondMatch = winner(arr[2], arr[3])
  var final = winner(firstMatch[0], secondMatch[0])

  return 'Juara ke-2 adalah tim '+ final[1].tim;
}

console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// // Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo