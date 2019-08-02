/*
=================
AGE VERIFICATION
=================

[INSTRUCTION]
Terdapat function ageVerification , function akan mengembalikan list 
orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
- jika gender male diberikan imbuhan Mr.
- jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
- jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

[EXAMPLE]
input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/

function ageVerification(list) {
    var arr = [];
    for(var i = 0; i<list.length; i++){
        var data = '';
        var obj = {}
        for(var j = 0; j<list[i].length; j++){
            if (list[i][j] !== ',') {
                data += list[i][j];
            } 
            if (list[i][j] === ',') {
                if ( data.toLowerCase() !== 'male' && data.toLowerCase() !== 'female') {
                    obj['name'] = data;
                } else {
                    obj['gender'] = data;
                }
                data = '';
            }
            if (j === list[i].length - 1) {         
                obj['age'] = data;
                arr.push(obj);
                data = '';
            }
        }
    }

    var hasil = [];
    for(var i = 0; i<arr.length; i++){
        if ( parseInt(arr[i]['age']) > 19 && arr[i]['gender'] === 'male') {
            hasil.push('Mr.'+arr[i]['name']);
        }
        if ( parseInt(arr[i]['age']) > 19 && arr[i]['gender'] === 'female' && parseInt(arr[i]['age']) >= 30) {
            hasil.push('Mrs.'+arr[i]['name']);
        }
        if ( parseInt(arr[i]['age']) > 19 && arr[i]['gender'] === 'female' && parseInt(arr[i]['age']) < 30) {
            hasil.push('Ms.'+arr[i]['name']);
        }
    }
    return hasil;
}
   
  
var people = ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19'];

console.log(ageVerification(people)); 
// ['Mr. Miftah', 'Mr. Dhimas', 'Mr.Toni', 'Mrs. Nita', 'Ms.Nana']

var people2 = ['Arya,female,22', 'Greyjoy,male,100', 'littlefinger,male,45', 'Bran,male,15']
console.log(ageVerification(people2));
// ['Ms. Arya', 'Mr. Greyjoy', 'Mr. littlefinger']
