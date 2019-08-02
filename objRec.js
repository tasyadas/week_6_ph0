var emptyKeys = [];
function isEmpty(obj, keysArr) {
    for (var key in obj) {
        if (typeof obj[key] === "object" && obj.hasOwnProperty(key)) {
            isEmpty(obj[key], keysArr);
        } else {
            if (obj[key] == "" || obj[key] == null) {
                keysArr.push(key);
            }
        }
    }
}

var x = {
    z: "",
    y: 1,
    b: {
        a: "",
        c: 3
    }
}

isEmpty(x, emptyKeys)
console.log(emptyKeys);