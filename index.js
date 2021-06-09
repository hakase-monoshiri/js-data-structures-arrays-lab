// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver (name) {
    let appended = [...drivers, name];
    return appended
}

function prependDriver(name) {
    let prepended = [name,...drivers];
    return prepended;
}

function  removeLastDriver() {
   let removed = drivers.slice(0, -1);
   return removed;
}

function  removeFirstDriver() {
    let removed = drivers.slice(1);
    return removed;
 }