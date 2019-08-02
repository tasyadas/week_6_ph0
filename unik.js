var notUniq = ['Range','melee','Range'];
var uniq = {};
var arr = [];
for(var i = 0; i<notUniq.length; i++){
    if ( uniq[notUniq[i]] === undefined ) {
        uniq[notUniq[i]] = notUniq[i];
    }
}

for(var arrUniq in uniq){
    arr.push(arrUniq);
}

console.log(arr);
