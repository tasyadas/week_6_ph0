/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  var bankAccount = [
    { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
    { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 95000, owner: 'Google' }
  ]
  
  var arr = [];
  for(var i = 0; i<tradeActivity.length; i++){
    for(var j = 0; j<tradeActivity[i].length; j++){
      var name = '';
      var persen = '';
      var operator = '';
      for(var k = 0; k<tradeActivity[i][j].length; k++){
        if ((tradeActivity[i][j][k] !== '+' && tradeActivity[i][j][k] !== '-') && operator === '') {
          name += tradeActivity[i][j][k];
        }
        if ((tradeActivity[i][j][k] !== '+' && tradeActivity[i][j][k] !== '-') && operator !== '' && tradeActivity[i][j][k] !== '%') {
          persen += tradeActivity[i][j][k];
        }
        if (tradeActivity[i][j][k] === '+') {
          operator += '+';
        }
        if (tradeActivity[i][j][k] === '-') {
          operator += '-';
        }
        if (tradeActivity[i][j][k] === '%') {
          arr.push({name:name, operator:operator, persen:persen});
        }
      }
    }
  }

  var deposit = [];
  for(var j = 0; j<arr.length; j++){
    for(var i = 0; i<bankAccount.length; i++){
      if (bankAccount[i]['name'] === arr[j]['name']) {
        var hasilPersen = bankAccount[i]['deposit'] * arr[j]['persen']/100;
        switch (arr[j]['operator']) {
          case '+':
            var sisa = bankAccount[i]['deposit'] + hasilPersen;
            bankAccount[i]['deposit'] = sisa;
            break;
          case '-':
            var sisa = bankAccount[i]['deposit'] - hasilPersen;
            bankAccount[i]['deposit'] = sisa;
            break;
        }
        deposit.push({name: arr[j]['name'], deposit: sisa, owner: bankAccount[i]['owner']});
      }
    }
  }  

  return deposit;
}


console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], 
  ['Larry Page+2%', 'Larry Page-1%'], 
  ['Jack Ma+4%'], 
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/

console.log(economyChangeSummary([['Jeff Bezos-10%']]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/