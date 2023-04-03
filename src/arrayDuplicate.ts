/**
 * find duplicate number from array [1,2,3,4,5,6,5,7,7,8,9,10,11,12,13,10]
 * input: [1,2,3,4,5,6,5,7,7,8,9,10,11,12,13,10]
 * output: [5,7,10]
 **/

const arrayInput: number[] = [1,2,3,4,5,6,5,7,7,8,9,10,11,12,13,10]
arrayInput.sort((previousNo: number, nextNo: number): any => {
  return previousNo - nextNo
})

console.log(arrayInput);