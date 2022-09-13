<<<<<<< HEAD
'use strict'

// const diceimg = document.querySelector('.dice');
// const player1 = document.querySelector('#score--0')
// const player2 = document.querySelector('#score--1')

// const scorezero = function()
// {
//     const player1 = document.querySelector('#score--0').innerHTML = 0;
//     const player2 = document.querySelector('#score--1').innerHTML = 0;
// }


// const rolldice = function()
// {
//     const score = Math.trunc(Math.random()*6)+1
//     console.log(score)
//     switch(score)
//     {
//         case 1:
//             diceimg.src = "dice-1.png";
//             break;
//         case 2:
//             diceimg.src = "dice-2.png";
//             break;
//         case 3: 
//             diceimg.src = "dice-3.png";
//             break;
//         case 4: 
//             diceimg.src = "dice-4.png";
//             break;
//         case 5: 
//             diceimg.src = "dice-5.png";
//             break;
//         case 6: 
//             diceimg.src = "dice-6.png";
//             break;
//     }
// }

// const newgame = document.querySelector('.btn--new').addEventListener('click', scorezero)
// const roll = document.querySelector('.btn--roll').addEventListener('click', rolldice)
// const diceImg = document.querySelector('.dice').addEventListener('click', rolldice)

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const totalscore0El = document.getElementById()

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function(){
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random()*6)+1
    // 2. display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`
    // 3. check for rolled 1 if true switch to next player
    if(dice !== 1)
    {
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        // switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})

btnHold.addEventListener('click', function()
{

})
=======
'use strict'

// const diceimg = document.querySelector('.dice');
// const player1 = document.querySelector('#score--0')
// const player2 = document.querySelector('#score--1')

// const scorezero = function()
// {
//     const player1 = document.querySelector('#score--0').innerHTML = 0;
//     const player2 = document.querySelector('#score--1').innerHTML = 0;
// }


// const rolldice = function()
// {
//     const score = Math.trunc(Math.random()*6)+1
//     console.log(score)
//     switch(score)
//     {
//         case 1:
//             diceimg.src = "dice-1.png";
//             break;
//         case 2:
//             diceimg.src = "dice-2.png";
//             break;
//         case 3: 
//             diceimg.src = "dice-3.png";
//             break;
//         case 4: 
//             diceimg.src = "dice-4.png";
//             break;
//         case 5: 
//             diceimg.src = "dice-5.png";
//             break;
//         case 6: 
//             diceimg.src = "dice-6.png";
//             break;
//     }
// }

// const newgame = document.querySelector('.btn--new').addEventListener('click', scorezero)
// const roll = document.querySelector('.btn--roll').addEventListener('click', rolldice)
// const diceImg = document.querySelector('.dice').addEventListener('click', rolldice)

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const totalscore0El = document.getElementById()

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function(){
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random()*6)+1
    // 2. display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`
    // 3. check for rolled 1 if true switch to next player
    if(dice !== 1)
    {
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        // switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})

btnHold.addEventListener('click', function()
{

})
>>>>>>> afdc738da8edc403461094f5700f17b216f72386
