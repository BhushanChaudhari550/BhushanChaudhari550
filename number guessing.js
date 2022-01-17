let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

// number between 1 to 100
var randNum = Math.floor(Math.random() * 100);

btn.addEventListener('click', function() {
            let randNum = document.getElementById('userinput').value;
            if (randNum === userinput) {
                text("Guessed Correct !!!");
            } else if (randNum > userinput) {
                text("Guessed too High");
            } else if (randNum < userinput) {
                text("Guessed too Low");
            }
        }