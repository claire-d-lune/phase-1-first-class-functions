function receivesAFunction(callback) {
    console.log("some random stuff");
    callback();
}

function namedFunction() {
    console.log(4 + 5);
    return
}
function returnsANamedFunction () {
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("some crazy stuff")
    }
}
