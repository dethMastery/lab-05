export default class StackingModel {
  popOut(inputArray: (string | number)[]): (string | number)[][] {
    let popValue: (string | number)
    let newArray: (string | number)[] = []

    for (let i = 0; i < inputArray.length - 1; i++) {
      newArray.push(inputArray[i])
    }

    popValue = inputArray[inputArray.length - 1]

    return [
      newArray,
      [popValue]
    ]
  }
}