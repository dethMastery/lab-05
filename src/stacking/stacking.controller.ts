import StackingModel from "./stacking.model";
import StackingView from "./stacking.view";

class StackingController {
  private view: StackingView
  private model: StackingModel

  constructor(view: StackingView, model: StackingModel) {
    this.view = view
    this.model = model
  }

  stack(inputArray: (string | number)[]): void {
    this.view.render(this.model.popOut(inputArray))
  }
}

export function stacking(inputArray: (string | number)[]): void {
  let view = new StackingView
  let model = new StackingModel
  let controller = new StackingController(view, model)

  controller.stack(inputArray)
}