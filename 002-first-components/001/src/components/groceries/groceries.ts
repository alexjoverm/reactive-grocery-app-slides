import {Component} from '@angular/core'

// 6/ Es buena practica tener un lugar centralizado con interfaces,
// aunque por brevedad no lo veremos en los ejemplos
interface IList {
  id: string,
  title: string,
  items: any[]
}

@Component({
  moduleId: __moduleName,
  selector: 'groceries',
  templateUrl: 'groceries.html'
})
export class GroceriesContainer {
  lists

  // 6/ Fake lists.
  // Container tip: maneja datos relacionados con la app
  constructor() {
    this.lists = [
      { id: '0', title: 'Lista 1', items:[] },
      { id: '1', title: 'Lista 2', items:[1] }
    ]
  }
}