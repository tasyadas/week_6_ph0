var names = ['sfsfs', 'sf', 'rfe', 'erefeg', 's']

for (var limit = names.length - 1; limit >= 0; limit--){
    for( var i = 0; i < limit; i++){
        if (names[i].length > names[i + 1].length) {
            var sort = names[i];
            names[i] = names[i + 1];
            names[i+1] = sort;
        }
    }
}

console.log(names);
