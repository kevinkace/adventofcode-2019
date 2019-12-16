const Intcode = require("../Intcode");
const readFile = require("../../lib/ezFs");

function test() {
    console.log("1 is not equal to 8, output 0");

    readFile("./test-input-0.txt")
    .then(d => {
        const intcode = new Intcode(d, "1");

        intcode.process();
    });
}

function test2() {
    console.log("8 is equal t0 8, output 0");

    readFile("./test-input-0.txt")
    .then(d => {
        const intcode = new Intcode(d, "8");

        intcode.process();
    });
}

function test3() {
    console.log("9 is greater than 8, output 0");

    readFile("./test-input-x.txt")
    .then(d => {
        const intcode = new Intcode(d, "9");

        intcode.process();
    });
}

function test4() {
    console.log("1 is less than 8, output 1");

    readFile("./test-input-1.txt")
    .then(d => {
        const intcode = new Intcode(d, "1");

        intcode.process();
    });
}

function test5() {
    console.log("9 is greater than 8, output 0");

    readFile("./test-input-1.txt")
    .then(d => {
        const intcode = new Intcode(d, "9");

        intcode.process();
    });
}

function test6() {
    console.log("9 is not equal to 8, output 0");

    readFile("./test-input-2.txt")
    .then(d => {
        const intcode = new Intcode(d, "9");

        intcode.process();
    });
}

function test7() {
    console.log("8 is equal to 8, output 1");

    readFile("./test-input-2.txt")
    .then(d => {
        const intcode = new Intcode(d, "8");

        intcode.process();
    });
}

function test8() {
    console.log("input is 0, output 0");

    readFile("./test-input-3.txt")
    .then(d => {
        const intcode = new Intcode(d, "0");

        intcode.process();
    });
}

function test9() {
    console.log("input is non 0, output 1");

    readFile("./test-input-3.txt")
    .then(d => {
        const intcode = new Intcode(d, "10");

        intcode.process();
    });
}

function test10() {
    console.log("input less than 8, output 999");

    readFile("./test-input-4.txt")
    .then(d => {
        const intcode = new Intcode(d, "7");

        intcode.process();
    });
}

function test11() {
    console.log("input is 8, output 1000");

    readFile("./test-input-4.txt")
    .then(d => {
        const intcode = new Intcode(d, "8");

        intcode.process();
    });
}

function test12() {
    console.log("input greater than 8, output 1001");

    readFile("./test-input-4.txt")
    .then(d => {
        const intcode = new Intcode(d, "9");

        intcode.process();
    });
}

// test();
// test2();
// test3();

// test4();
// test5();
// test6();
// test7();

// test8();
// test9();

// test10();
// test11();
test12();
