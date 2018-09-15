x = 1 // global
var y = 2 // closure

function some() {
    z = 3 // global
    if (z == y) {
        var p = 2
        let q = 5
    }
}

some()