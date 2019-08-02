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
  let indexRuangTerakhir = board.length - 1;
  let jumlahStep = 0;
  for (let i = 0; i < board.length; i++) {

    // Tampung semua kemungkinan jarak terdekat
    let posisiAwal = {
      indexI: -1,
      indexJ: -1
    }

    let posisiAkhir = {
      indexI: -1,
      indexJ: -1
    }
    for (let j = 0; j < board[i].length; j++) {

      for (let k = 0; k < board[i][j].length; k++) {
        if (i === 0) {
          if (board[i][j][k] === '*') {
            posisiAwal.indexI = j;
            posisiAwal.indexJ = k;
          }

          if (board[i][j][k] === 'L') {
            posisiAkhir.indexI = j;
            posisiAkhir.indexJ = k;
          }
        } else if (i === indexRuangTerakhir) {
          if (board[i][j][k] === 'L') {
            posisiAwal.indexI = j;
            posisiAwal.indexJ = k;
          }

          if (board[i][j][k] === 'F') {
            posisiAkhir.indexI = j;
            posisiAkhir.indexJ = k;
          }
        } else {
          if (board[i][j][k] === 'S') {
            posisiAwal.indexI = j;
            posisiAwal.indexJ = k;
          }

          if (board[i][j][k] === 'L') {
            posisiAkhir.indexI = j;
            posisiAkhir.indexJ = k;
          }
        }
      }
    }


    jumlahStep += Math.abs(posisiAwal.indexI - posisiAkhir.indexI) + Math.abs(posisiAwal.indexJ - posisiAkhir.indexJ);
  }
  return `Anda memerlukan ${jumlahStep} untuk keluar dari bangunan ini`
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