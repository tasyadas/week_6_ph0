var heroes = [
    ['Sniper','Ranger'],
    ['Dini','Mage'],
    ['Bower','Ranger'],
    ['Kiki','Knight'],
    ['Rina','Support'],
    ['Lisa','Mage'],
    ['Riri','Knight'],
    ['Laila','Ranger']
];

var obj = {}
for(var i = 0; i<heroes.length; i++){
    if(obj[heroes[i][1]] === undefined) {
        obj[heroes[i][1]] = [heroes[i][0]];
    } else {
        obj[heroes[i][1]].push(heroes[i][0]);
    }
}

for(var i in obj){
    console.log(`Terdapat ${obj[i].length} Hero ${i}`);
    for(var j = 0; j<obj[i].length; j++){
        console.log('-'+obj[i][j]);
    }
}

/*
    Terdapat 3 Hero Ranger
      - Sniper
      - Bower
      - Laila
    Terdapat 2 Hero Mage
    Terdapat 2 Hero Knight
    Terdapat 1 Hero Support
*/
