/*
  # Escape Rooms
  > ⏰ Time Estimation: 45 mins

  Team kita sebagai mata-mata memiliki waktu yang sedikit agar bisa keluar dari bangunan yang akan meledak itu.

  Kamu, yang bertugas untuk memetakan gedung tersebut, harus memiliki prediksi yang tepat, berapa langkah mata-mata tersebut bisa keluar dari bangunan ini.

  Function escapeRooms adalah sebuah fungsi yang menerima satu parameter berupa array multi dimensi. Adapun team lain sudah memetakan beberapa koordinat dengan penjelasan sebagai berikut:

  - '*' adalah posisi start mata-mata tersebut berada
  - 'L' adalah posisi tangga yang bisa memindahkan kamu ke lantai bawah gedung tersebut
  - Setiap kamu pindah ke lantai bawah, kamu akan muncul di posisi 'S', kemudian kamu pergi lagi menuju 'L'
  - Jika kamu sudah berada di posisi lantai akhir, kamu akan muncul di posisi L dan harus menemukan pintu exit yang bertanda 'F'

  ### NOTES

    - Asumsi kamu selalu berada di posisi paling atas dan kamu selalu menuju lantai paling bawah
    - Kamu hanya bisa berjalan ke atas, ke bawah, ke kanan dan ke kiri.

  ## RELEASE 0

  Temukan cara menemukan koordinat dengan tepat, dan kamu memiliki perhitungan untuk menuju ke koordinat yang dituju dengan tepat

  ## RELEASE 1

  Kamu bisa mengkalkulasikan total step yang dibutuhkan dengan tepat.
*/


// javascript
function escapeRooms(board) {
  var indeksL = [];
  var S = [];
  var start = [];
  var floor = [];
  for( var i = 0; i<board.length; i++){
    for( var j = 0; j<board[i].length; j++){
      for( var k = 0; k<board[i][j].length; k++){
        if (board[i][j][k] === 'L') {
          indeksL.push([i,j,k]);
        }
        if (board[i][j][k] === '*') {
          start.push([i,j,k]);
        }
        if (board[i][j][k] === 'S') {
          S.push([i,j,k]);
        }
        if (board[i][j][k] === 'F') {
          floor.push([i,j,k]);
        }
      }
    }
  }
  
  var count = 0;
  var j = -1;
  var l = -1;
  
  for (let i = 0; i < indeksL.length; i++) {
    for (let k = 0; k <= board.length; k++) {
      if (k === indeksL[i][0] && k === 0) {
        count += Math.abs(start[i][0] - indeksL[i][0]);
        count += Math.abs(start[i][1] - indeksL[i][1]);
        count += Math.abs(start[i][2] - indeksL[i][2]);
      }
      
      if (k === indeksL[i][0] && k !== 0) {
        if (k === board.length - 1) {
          count += Math.abs(floor[l+1][0] - indeksL[i][0]);
          count += Math.abs(floor[l+1][1] - indeksL[i][1]);
          count += Math.abs(floor[l+1][2] - indeksL[i][2]);
          l++
        } else {
          count += Math.abs(S[j+1][0] - indeksL[i][0]);
          count += Math.abs(S[j+1][1] - indeksL[i][1]);
          count += Math.abs(S[j+1][2] - indeksL[i][2]);
          j++
        }
      }
    }
  }

  return `Anda memerlukan ${count} untuk keluar dari bangunan ini`;
}

const stage1 = [
  [
    ['*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'L', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ],
  [
    [' ', ' ', ' ', ' ', ' '],
    [' ', 'S', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'L']
  ],
  [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'L', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'F']
  ]
]
console.log(escapeRooms(stage1))
// Anda memerlukan 16 untuk keluar dari bangunan ini

const stage2 = [
  [
    ['*', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', 'L']
  ],
  [
    ['L', ' ', ' '],
    [' ', ' ', 'S'],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ],
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
    ['L', ' ', ' '],
  ],
  [
    ['L', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
  ],
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
    [' ', ' ', 'L'],
  ],
  [
    ['L', 'S', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ],
  [
    ['L', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
    [' ', ' ', ' '],
  ],
  [
    [' ', 'S', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'L', ' '],
  ],
  [
    [' ', ' ', ' '],
    ['F', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', 'L'],
  ]
]
console.log(escapeRooms(stage2))
// Anda memerlukan 27 untuk keluar dari bangunan ini