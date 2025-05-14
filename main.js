/*************************
Achlys
15
Week 3
Term 2
*************************/

//Variables
var userName;
var cdArray = ["Everything is a Lot - Will Wood", "Eureka - Mother Mother", "Diamond Dogs - David Bowie", "Reputation - Taylor Swift", "Bad Hair Day - “Weird Al” Yankovic", "The Black Parade - My Chemical Romance"];

/*************************
Main Code
*************************/
console.log("Well " + userName + ". You want a cd? Worry not! As long as you've answered the questions [which will appear if you press the button] then you only need to read a bit furthor");
userName = askUserName();
function recomendation() {
    alert("So. To get your recomendation, I am going to tell you six genres and their corresponding number [0-5].");
    alert("Then a prompt will come up, telling you to enter the number of your desired genre.");
    alert("After that, all you need to do is open the console [ctrl-shift-i] and you'll see your recomendation!");
    alert("If you need to write them down, feel free to do so.");
    alert("Choose 0 if you prefer more obscure music.");
    alert("Choose 1 if you prefer something that's alternative.");
    alert("Choose 2 if you prefer something older compared to the rest.");
    alert("Choose 3 if you prefer pop music.");
    alert("Choose 4 if you prefer comedic and parody music.");
    alert("Choose 5 if you prefer something that falls under the emo category.");
    var choice = prompt("Now just enter the number");
    alert("To see what you got, look at the console [ctrl-shift-i].")
    if (choice == 0) {
        console.log("Okay " + userName + ". You want something obscure? Then I have to recomend " + cdArray[choice]);
    }
    else if (choice == 1) {
        console.log("Okay " + userName + ". You want something alternative? Then I have to recomend " + cdArray[choice]);
    }
    else if (choice == 2) {
        console.log("Okay " + userName + ". You want something older? Then I have to recomend " + cdArray[choice]);
    }
    else if (choice == 3) {
        console.log("Okay " + userName + ". You want something pop? Then I have to recomend " + cdArray[choice]);
    }
    else if (choice == 4) {
        console.log("Okay " + userName + ". You want something comedic? Then I have to recomend " + cdArray[choice]);
    }
    else if (choice == 5) {
        console.log("Okay " + userName + ". You want something emo? Then I have to recomend " + cdArray[choice]);
    }
}



/*************************
Functions
*************************/
function askUserName() {
    var temp1 = prompt("Before we start, I was hopping you could tell me your name down below");
    return (temp1);
}