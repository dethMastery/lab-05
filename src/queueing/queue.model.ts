export default class QueueingModel {
  popOut(inputArray: (string | number)[]): (string | number)[][] {
    let popValue: (string | number)
    let newArray: (string | number)[] = []

    for (let i = 0; i < inputArray.length - 1; i++) {
      newArray.push(inputArray.reverse()[i])
    }

    popValue = inputArray[0]

    return [
      newArray.reverse(),
      [popValue]
    ]
  }
}