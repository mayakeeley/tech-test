# tech-test

Aim:
Create a minesweeper grid with random mines and the appropriate clues. This grid should be dynamically generated so that it works for any positive integer. Mines are marked with an "X", while the clues are numbers, denoting the number of mines surrounding the cell.

Approach:
Use html, css and js to solve problem as this is the language I am most familiar with and allows me to focus solely on the logic of the problem. 

Generate Grid:
Generate a hardcoded grid with 15 columns and 15 rows using js 
Grid is created using a table generated by nested for loops
Make the grid dynamic by replacing the hardcoded values with variables

Generate Random Mines:
Set the number of mines
Ensure the number of mines does not exceed the number of cells
Create a while loop to choose a random number in the grid, if the number of mines placed is less than the total number of mines
This is done by generating two random numbers for the row and column values

Generate Clues:
Find each cell with a mine in it
Find all surrounding cell IDs for each mine cell
Add a marker in each of these cells to check if the clues are being generated in the correct places
Add a counter so that if there are multiple mines in the surrounding cells, the clue will increase in number
By adding clues based on the placement of the mines, it will produce a more efficient solution than checking each cell for surrounding mines
