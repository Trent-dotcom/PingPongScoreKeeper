let scoreOne = 0;  // set a variable to keep track of score
let scoreTwo = 0;   // set a variable to keep track of score
const p1DisplayScore = document.querySelector('#player1score'); // set variables for all Elements needing easy access in the DOM
const p2DisplayScore = document.querySelector('#player2score');
const p1Button = document.querySelector('.plr1');
const p2Button = document.querySelector('.plr2');
let pointSelector = 0  // set points selector to a starting value
let isGameOver = false; // make a binary toggle for easy declaration of game in progress or not
p1Button.addEventListener('click', function (e) {   // listen for click on player ones score 
    if (pointSelector === 0) {
        alert('Score Must Be More Than 0')
        e.preventDefault()  //stop the buttons default action resulting in a refreshed page
    }
})
p2Button.addEventListener('click', function (e) {  // listen for click on player twos score 
    if (pointSelector === 0) {
        alert('Score Must Be More Than 0')
        e.preventDefault()
    }
})
document.querySelector('#gamePoint').addEventListener('change', function () {
    pointSelector = parseInt(document.querySelector('#gamePoint').value);
    p1Button.addEventListener('click', function (e) {
        if (!isGameOver) {              // only add points if the game is not over
            scoreOne += 1
            p1DisplayScore.innerText = scoreOne  // update the display text every time a new point is scored
            if (scoreOne === pointSelector) {  // set game over to be true if score limit is reached
                isGameOver = true;
                p1DisplayScore.style.color = 'green';
                p2DisplayScore.style.color = 'red'  // change colors and stop adding points once game is complete. 
            }
            e.preventDefault()
        }
        e.preventDefault()
    })
    p2Button.addEventListener('click', function (e) {  // repeat for player two 
        if (!isGameOver) {
            scoreTwo += 1
            p2DisplayScore.innerText = scoreTwo
            if (scoreTwo === pointSelector) {
                isGameOver = true;
                p2DisplayScore.style.color = 'green';
                p1DisplayScore.style.color = 'red'
            }
            e.preventDefault()
        }
        e.preventDefault()
    })
})


