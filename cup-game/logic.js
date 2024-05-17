
let classes = ["cup-open","cup-open","cup-open-ball"]
let shuffled = classes.sort(() => 0.5 - Math.random())


document.getElementById("button-1").addEventListener("click", function() {
        console.log("Toggled ON");
        let element = document.querySelector("#button-1");
        element.classList.replace("cup-closed", shuffled[0]);
});


document.getElementById("button-2").addEventListener("click", function() {

        console.log("Toggled ON");
        let element = document.querySelector("#button-2");
        element.classList.replace("cup-closed", shuffled[1]);
});


document.getElementById("button-3").addEventListener("click", function() {
        console.log("Toggled ON");
        let element = document.querySelector("#button-3");
        element.classList.replace("cup-closed", shuffled[2]);
});

function shuffle() {
    let element = document.querySelector("#button-1");
    element.classList.replace(shuffled[0], "cup-closed");

    let element2 = document.querySelector("#button-2");
    element2.classList.replace(shuffled[1], "cup-closed");

    let element3 = document.querySelector("#button-3");
    element3.classList.replace(shuffled[2], "cup-closed");

    shuffled = classes.sort(() => 0.5 - Math.random())

}