// Stacking & Queueing

// Stacking
import { stacking } from "./src/stacking/stacking.controller";

let array = [1, 2, 3, 4, 5, "a", "b"];

console.log("stacking pop : ");
stacking(array);

// Queueing
import { queuing } from "./src/queueing/queue.controller";

console.log("queueing pop : ");
queuing(array);
