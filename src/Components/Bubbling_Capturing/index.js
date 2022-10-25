document.querySelector('#grandparent').
addEventListener('click', (e) => {
    console.log("I am grand parent");
    //e.stopPropagation();
}, false);
document.querySelector('#parent').
addEventListener('click', () => {console.log("I am parent")}, true);
document.querySelector('#child').
addEventListener('click', (e) => {
    console.log("I am child");
   // e.stopPropagation();

}, false);