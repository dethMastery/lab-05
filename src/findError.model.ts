export class Model {
  private Row: number = 0
  private Col: number = 0

  private ErrorRow: number = 0
  private ErrorCol: number = 0

  checkError(input: number) {
    let checkStatus: boolean = true

    if (input != 0) {
      checkStatus = true
    } else {
      checkStatus = false
    }

    return checkStatus
  }

  setRow(Row: number) {
    this.Row = Row
  }

  setCol(Col: number) {
    this.Col = Col
  }

  setErrorRow(Row: number) {
    this.ErrorRow = Row
  }

  setErrorCol(Col: number) {
    this.ErrorCol = Col
  }

  sendPosition(): number[] {
    return [this.Row, this.Col]
  }

  sendErrorPosition(): number [] {
    return [this.ErrorRow, this.ErrorCol]
  }
}