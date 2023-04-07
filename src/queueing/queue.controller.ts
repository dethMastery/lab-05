import QueueingModel from "./queue.model";
import QueueingView from "./queue.view";

class QueueController {
  private view: QueueingView
  private model: QueueingModel

  constructor(view: QueueingView, model: QueueingModel) {
    this.view = view
    this.model = model
  }

  stack(inputArray: (string | number)[]): void {
    this.view.render(this.model.popOut(inputArray))
  }
}

export function queuing(inputArray: (string | number)[]): void {
  let view = new QueueingView
  let model = new QueueingModel
  let controller = new QueueController(view, model)

  controller.stack(inputArray)
}