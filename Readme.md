
# Tic Tac Toe React App

A two player game where first player will be assigned X symbol and next player will be assigned O

## Requirement

Node 14
React 18
## Instructions to run app

git clone https://github.com/Divi20/tictactoegame.git
cd tictactoegame
npm i
npm run dev

## Screenshots

Sart Game

<img src="src/assets/Screenshot 2023-03-30 at 8.15.43 PM.jpg">

Game Started

<img src="src/assets/Screenshot 2023-03-30 at 8.16.52 PM.png">

Game Tied

<img src="src/assets/Screenshot 2023-03-30 at 8.18.38 PM.png">

Winner

<img src="src/assets/Screenshot 2023-03-30 at 8.18.52 PM.png">

## Implementation and Logic

Steps 1: Create a React App name : tic-tac-toe-game using vite

npm I vite/@latest
select react and js

React app structure is created

Step 2: Created components folder. All components will be created inside this folder to manage structure

Step 3: Starting from smallest unit designed a Square in Square component 
        1. which could display X, O or nothing based on state changes

Step 4: As a Next Step design a board which will display grid of 9 squares
        1. Create array of length 9 and fill with null
        2. generate 9 squares by calling square component and passing the value to it
        3. Use css classes to align 3 Squares in a row and next 3 in next and so on.
        4. apply on click function on square and pass the state

Step 5: Create list of winning combination
        1. loop over winning combination array 
        2. for each combinaton check if Array[combindex0] == Arr[combindex1] = Arr[combindex2] 
        3. take which player from Array[combindex0] or 1, or 2
        4. print result Array[combindex0] as winner
        5. if no winner even after all the moves are complete print game tied.

        Wining Combinations:

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]