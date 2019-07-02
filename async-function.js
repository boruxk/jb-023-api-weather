// functions until today
function a() {
    console.log('hello');
}
a();

function b(n1) {
    console.log('hello ' + n1);
}
b('name');

function c(n1, n2) {
    console.log('hello ' + n1 + ' and ' + n2);
}
c('name', 'name2');

function d(n1) {
    return 'return hello ' + n1;
}
var resutlOfD = d('name');
console.log(resutlOfD);

/* async functions */
function afterSeconds() {
    var randomNumber = 100 + Math.floor(Math.random()*10);

    afterSecondsCallback(randomNumber);
}
var b = setTimeout(afterSeconds, 4 * 1000)

console.log(1)
console.log(2)
for(let i=0; i < 1000; i++) {
    
}
console.log(3)


function afterSecondsCallback(r) {
    console.log(r);
}

/* anonumous functions */
setTimeout(function() {
    console.log('timeout anonymous');
}, 2 * 1000);

document.getElementById('d1').addEventListener('click', function() {
    everyClick(Math.random() * 10);
})

function everyClick(randNum) {

}

// IIFE - Immediately Invoked Function Expression
(function() {
    console.log('iife');
}())
console.log(i); // i from main.js




/* async function - anonymous - callback */
// setTimeout - async function
// setTimeout parameter - anonymous function, also a callback
setTimeout(function() {

}, 10 * 1000);
