/* Your task is to write a program to calculate the next generation of Conway's Game of Life, given any starting position. You start with a two dimensional grid of cells, where each cell is either alive or dead. The grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these four rules:

Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
Any live cell with more than three live neighbors dies, as if by overcrowding.
Any live cell with two or three live neighbors lives on to the next generation.
Any dead cell with exactly three live neighbors becomes a live cell.
(You may wish to Google this (very popular) kata for examples and additional instructions.) */
var sget = require("sget");

function gameOfLife() {
  init();

  function init() {
    var rows = getRows();
    var columns = getColumns();
    console.log(createGrid(rows, columns));

  }

  function getRows() {
    return Number(sget("How many rows?").trim());
  }

  function getColumns() {
    return Number(sget("How many columns?").trim());
  }

  function createGrid(row, column) {
    var grid = [];
    for (var i=0; i<row; i++) {
      grid[i] = [];
      for (var j=0; j<column; j++) {
        grid[i][j] = "x";
      }
    }
    return grid;
  }
  
}

gameOfLife();