<<<<<<< HEAD
=======
/**
 * find the cursor error from the sheet
 * input:  [
 *  [1, 1, 0, 1, 0, 0, 1],
 *  [0, 1, 0, 1, 0, 1, 0],
 *  [1, 1, 1, 1, 1, 1, 0],
 *  [1, 1, 1, 1, 1, 0, 0],
 *  [0, 0, 0, 0, 0, 0, 0],
 *  [0, 1, 1, 1, 1, 1, 0],
 *  [1, 0, 1, 1, 1, 1, 0],
 *  [1, 1, 0, 0, 1, 0, 0],
 * ];
 *
 * output:
 * error at row:1, col: 3
 * error at row:1, col: 5
 * error at row:1, col: 6
 * ...
 * error at row:8, col: 3
 * error at row:8, col: 4
 * error at row:8, col: 6
 * error at row:8, col: 7
 **/

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

import { findCursorError } from './src/findError.controller'
let Position: number[] = [NaN, NaN]

const sheet = [
  [1, 1, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 1, 0],
  [1, 1, 0, 0, 1, 0, 0],
];

console.log('press `enter` key to find the cursor error.');
process.stdin.on('keypress', (_str, key) => {
  if (key.name !== 'enter') {
    console.log('please press `enter` key to find the error.');
    return;
  }
  
  const { row, col } = findCursorError(sheet, Position);

  console.log(`error at row:${row + 1}, col: ${col + 1}`);
  console.log('press `enter` key to find the next cursor error.');

  Position[0] = row
  Position[1] = col + 1
});
>>>>>>> parent of e0a53e6 (fix: row count and col count (with great sol :D))
