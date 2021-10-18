import { ZooController } from "./controllers/ZooController.js"

let zooController = new ZooController()



console.log(zooController, "Main JS")

window['zooController'] = zooController