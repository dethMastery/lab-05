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

    let Index: number = (this.Row * 7 ) + this.Col
    let MergingData: number[] = []
    let i: number = 0

    this.Sheet.forEach(sheetRow => {
      sheetRow.forEach(sheetCol => {
        MergingData.push(sheetCol)
      })
      i++
    })

    for (Index; Index < MergingData.length; Index++) {
      let Status = this.Model.checkError(MergingData[Index])

      if (!Status) {
        console.log(Index);
        console.log(Index / 7);
        console.log(Math.floor(Index / 7));
        console.log(Index % 7);
        
        
        
        this.Model.setErrorRow(Math.floor(Index / 7))
        this.Model.setErrorCol(Index % 7)

        break;
      }
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