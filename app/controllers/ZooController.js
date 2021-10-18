import {Ant} from "../models/Ant.js"
import {Bear} from "../models/Bear.js"
import {Catfish} from "../models/Catfish.js"
import {Duck} from "../models/Duck.js"
import {Fox} from "../models/Fox.js"
import {Goose} from "../models/Goose.js"
import {Horse} from "../models/Horse.js"
import {Iguana} from "../models/Iguana.js"






let _animaltype = {
    ant: new Ant('ant','plants','extrasmall'),
    bear: new Bear('bear', 'fish', 'extralarge'),
    Catfish: new Catfish('Catfish', 'algae', 'small'),
    Duck: new Duck('Duck', 'Bread', 'small'),
    Fox: new Fox('Fox', 'mice', 'medium'),
    Goose: new Goose('Goose', 'bread', 'small'),
    Horse: new Horse('Horse', 'grain', 'large'),
    Iguana: new Iguana('Iguana', 'insects', 'extrasmall')
}

        function _draw(){
            let template = ''
            for (const key in _animaltype) {
     
        const animal = _animaltype[key]
        template += `<li> ${animal.name} eats ${animal.food} and is ${animal.size}</li>`
        }
        document.getElementById('template').innerHTML = template
        }
export class ZooController{
    constructor(){
        console.log(_animaltype)
       _draw()
    }
    
}
