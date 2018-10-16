function varTest() {
    var x = 100;
    if (true) {
        var x = 200;
        console.log("[1]var x", x)
    }
    console.log("[2]var x", x)
}

function letTest() {
    let x = 5
    if (true) {
        let x = 6
        console.log("[1]let x", x)
    }
    console.log("[2]let x", x)
}
letTest()
varTest()