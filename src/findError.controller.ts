import { Model } from "./findError.model";

interface ErrorPosition {
  row: number,
  col: number
}

class Controller {
  private Model: Model
  private Sheet: number[][]

  private Row: number = 0
  private Col: number = 0

  constructor(Model: Model, Sheet: number[][]) {
    this.Model = Model
    this.Sheet = Sheet
  }

  runCheck() {
    let Position = this.Model.sendPosition()

    this.Col = Position[1]
    this.Row = Position[0]

    for (this.Col; this.Col < this.Sheet[this.Row].length; this.Col++) {
      let Status = this.Model.checkError(this.Sheet[this.Row][this.Col])

      if (this.Col >= 7) {
        this.Model.setRow(this.Row + 1)
        this.Model.setCol(0)
      }

      if (!Status) {
        this.Model.setErrorRow(this.Row)
        this.Model.setErrorCol(this.Col)

        break;
      }
    }
  }
}

export function findCursorError(sheet: number[][]): ErrorPosition {
  let InputModel: Model = new Model
  let Position: Controller = new Controller(InputModel, sheet)

  Position.runCheck()

  return {row: InputModel.sendErrorPosition()[0] , col: InputModel.sendErrorPosition()[1]}
}