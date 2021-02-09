function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }

    else {
        result = "5 or smaller";
    }

    return result

}

testElse(4);

// console.log(testElse(4))

function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }

    else {
        return "between 5 and 10";
    }
}


testElseIf(7);

// console.log(testElseIf(7))

function boo(x) {
    if (x < 1) {
        return "less than one"
    }

    else if (x < 2) {
        return "less than two"
    }

    else {
        return "Greater than or equal to two"
    }
}

boo(4)

console.log(boo(0))


function bar(x) {
    if (x < 2) {
        return "less than two";
    }

    else if (x < 1) {
        return "less than one";
    }

    else {
        return "greater than or equal to two";
    }
}

bar(4)

console.log(bar(0))

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }

    else if (num < 10) {
        return "small";
    }
    else if (num < 15) {
        return "Large";
    }
    else if (num >= 20) {
        return "Huge";
    }
    
}

console.log(testSize(5))
