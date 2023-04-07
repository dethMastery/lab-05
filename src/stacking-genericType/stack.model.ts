export type Data<DataType> = (inputData: DataType) => DataType;

export default class StackingModel {
  popOut<DataType>(inputArray: Data<DataType>[]): Data<DataType>[][] {
    let popOutData: Data<DataType> = () => {
      throw new Error('No data to pop out.');
    };
    let newArray: Data<DataType>[] = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
      newArray.push(inputArray[i]);
    }

    popOutData = inputArray[inputArray.length - 1];

    return [
      newArray, 
      [popOutData]
    ]
  }
}
