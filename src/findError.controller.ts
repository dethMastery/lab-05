import { Model } from "./findError.model";

let Row: number = 0
let Col: number = 0

export interface ErrorPosition {
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

  runCheck(Position: any[]) {
    if (isNaN(Position[0])) {
      Position[0] = 0
      Position[1] = 0
    }

    this.Row = Position[0]
    this.Col = Position[1]

    console.log(Position);
    console.log(this.Col);
    console.log(this.Sheet[this.Row].length);

    let Index = this.Col

    for (Index; Index < this.Sheet[this.Row].length; Index++) {
      console.log(Index);
      
      let Status = this.Model.checkError(this.Sheet[this.Row][this.Col])

      if (Index == 7) {
        this.Model.setErrorRow(this.Row + 1)
        this.Model.setErrorCol(0)
      }

      if (!Status) {
        this.Model.setErrorRow(this.Row)
        this.Model.setErrorCol(this.Col)

        break;
      }

      this.Col++
    }

    return this.Model.ErrorPosition()
  }
}

let InputModel: Model = new Model(Row, Col)

export function findCursorError(sheet: number[][], Position: number[]): ErrorPosition {
  let Scanning: Controller = new Controller(InputModel, sheet)

  Scanning.runCheck(Position)

  return {row: InputModel.ErrorPosition()[0] , col: InputModel.ErrorPosition()[1]}
}