import StackingModel from "./stack.model";
import StackingView from "./stack.view";

import type { Data } from "./stack.model";

class StackingController {
  private view: StackingView;
  private model: StackingModel;

  constructor(view: StackingView, model: StackingModel) {
    this.view = view;
    this.model = model;
  }

  stack<DataType>(inputArray: Data<DataType>[]): void {
    this.view.render(this.model.popOut(inputArray))
  }
}

export function stacking<DataType>(inputArray: Data<DataType>[]): void {
  let view = new StackingView
  let model = new StackingModel
  let controller = new StackingController(view, model)

  controller.stack(inputArray)
}