/*************************
Achlys
15
Week 3
Term 2
*************************/

//Variables
var userName

/*************************
Main Code
*************************/
userName = askUserName();
console.log("Well " +userName+ ". You want a cd? Worry not! As long as you've answered the questions [which will appear if you press the button] then you only need to read a bit furthor");


/*************************
Functions
*************************/
function askUserName() {
    var temp1 = prompt("Before we start, I was hopping you could tell me your name down below");
    return (temp1);
}