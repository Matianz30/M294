function helloWorld() {
    alert("Hello World!");
}

function helloinline() {
    document.getElementById("demo").innerHTML = "Hallo Welt!";
}

function goodDay() {
    let name = prompt("Was ist dein Name: ");
    let hour = new Date().getHours();

    if (hour < 5) {
        alert(`Gute Nacht ${name}`);
    } else if(hour < 12){
        alert(`Guten Morgen ${name}`);
    } else if (hour < 18) {
        alert(`Guten Tag ${name}`);
    } else if (hour < 22) {
        alert(`Guten Abend ${name}`);
    } else {
        alert(`Gute Nacht ${name}`);
    }
}


function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 100)
    let guessedNumber = prompt("Guess a Number between 0 and 100: ")
    if (guessedNumber > randomNumber) {
        alert("Wrong Number. Random number was lower")
    } else if (guessedNumber < randomNumber) {
        alert("Wrong Number. Random number was higher")
    } else {
        alert("Guessed Correct")
    }
}
