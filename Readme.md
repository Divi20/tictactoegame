
# Tic Tac Toe React App

A two player game where first player will be assigned X symbol and next player will be assigned O


## Screenshots

Sart Game

<img src="src/assets/Screenshot 2023-03-30 at 8.15.43 PM.jpg">

Game Started

![App Screenshot](tic-tac-toe-game/src/assets/Screenshot 2023-03-30 at 8.16.52 PM.png)

Game Tied

![App Screenshot](tic-tac-toe-game/src/assets/Screenshot 2023-03-30 at 8.18.38 PM.png)

Winner

![App Screenshot](tic-tac-toe-game/src/assets/Screenshot 2023-03-30 at 8.18.52 PM.png)

###Steps of Implementation

Steps 1: Create a React App name : tic-tac-toe-game using vite

npm I vite/@latest
select react and js

React app structure is created

Step 2: Created components folder. All components will be created inside this to manage structure
Step 3: Starting from smallest unit designed a Square in Square component 
2.	which could display X, O or nothing based on state changes 
Step3: As a Next Step design a board which will display grid of 9 squares
5.	Create array of length 9 and fill with null
6.	Loop over this array and generate 9 squares by calling square component and passing the value to it
7.	Use css classes to align 3 Squares in a row and next 3 in next and so on.
8.	apply on click function on square and pass the state

Step 3: Create list of winning combination
3.	loop over winning combination array 
4.	for each combinaton check if Array[comb0] == Arr[comb1] = Arr[comb2] 
a.	take which player from Arr
b.	print result