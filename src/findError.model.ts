export class Model {
  private ErrorRow: number = 0
  private ErrorCol: number = 0

  constructor(Row: number, Col: number) {
    this.ErrorRow = Row
    this.ErrorCol = Col
  }

  checkError(input: number) {
    let checkStatus: boolean = true

    if (input != 0) {
      checkStatus = true
    } else {
      checkStatus = false
    }

    return checkStatus
  }

  setErrorRow(Row: number) {
    this.ErrorRow = Row
  }

  setErrorCol(Col: number) {
    this.ErrorCol = Col
  }

  ErrorPosition(): number [] {
    return [this.ErrorRow, this.ErrorCol]
  }
}