/**
======================
 SISA BELANJA LEBARAN
======================

[INSTRUCTION]
Menjelang lebaran emak-emak ramai belanja ke pasar, 
seorang emak ingin berbelanja ke pasar dengan uang yang seadanya hasil dari THR suaminya,
dan emak bingung untuk memilih mana yang harus jadi prioritas agar sesuai kebutuhan lebaran.

Buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian belanja.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Buatlah code se-dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 

*/

function sisaBelanjaLebaran(bayar, harga){
  var kembalian = bayar - harga;
  var obj = {}
  for(var i = 0; i<kembalian; i++){
    if (kembalian >= 100000) {
      if (obj['100000'] === undefined) {
        obj['100000'] = 1;
      } else {
        obj['100000'] += 1;
      }
      kembalian -= 100000;
    }
    if (kembalian >= 50000 && kembalian < 100000) {
      if (obj['50000'] === undefined) {
        obj['50000'] = 1;
      } else {
        obj['50000'] += 1;
      }
      kembalian -= 50000;
    }
    if (kembalian >= 20000 && kembalian < 50000) {
      if (obj['20000'] === undefined) {
        obj['20000'] = 1;
      } else {
        obj['20000'] += 1;
      }
      kembalian -= 20000;
    }
    if (kembalian >= 10000 && kembalian < 20000) {
      if (obj['10000'] === undefined) {
        obj['10000'] = 1;
      } else {
        obj['10000'] += 1;
      }
      kembalian -= 10000;
    }
    if (kembalian >= 5000 && kembalian < 10000) {
      if (obj['5000'] === undefined) {
        obj['5000'] = 1;
      } else {
        obj['5000'] += 1;
      }
      kembalian -= 5000;
    }
    if (kembalian >= 2000 && kembalian < 5000) {
      if (obj['2000'] === undefined) {
        obj['2000'] = 1;
      } else {
        obj['2000'] += 1;
      }
      kembalian -= 2000;
    }
    if (kembalian >= 1000 && kembalian < 2000) {
      if (obj['1000'] === undefined) {
        obj['1000'] = 1;
      } else {
        obj['1000'] += 1;
      }
      kembalian -= 1000;
    }
  }

  if ( bayar < harga) {
    return 'Uang tidak cukup mak, minta lagi sama suami';
  } else {
    return obj;
  }
}

// Belanja Bahan Pokok 
console.log(sisaBelanjaLebaran(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Belanja Kue Lebaran
console.log(sisaBelanjaLebaran(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Belanja Baju Baru
console.log(sisaBelanjaLebaran(50000,50000)); // {}

// Belanja Opor Ayam
console.log(sisaBelanjaLebaran(50000,500000)); // Uang tidak cukup mak, minta lagi sama suami
