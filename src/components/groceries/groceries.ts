import {Component} from '@angular/core'

@Component({
  moduleId: __moduleName,
  selector: 'groceries',
  templateUrl: 'groceries.html'
})
export class GroceriesContainer {
  lists
  // Definimos una lista temporal como modelo del formulario
  tempList = {}

  constructor() {
    this.lists = [
      { id: '0', title: 'Lista 1', items:[] },
      { id: '1', title: 'Lista 2', items:[1] }
    ]
  }

  deleteList(list) {
    this.lists = this.lists.filter(l => l.id !== list.id)
  }

  // 8/ Añadimos la lista al array
  createList(list) {
    // 5/ Ojo! Añade un objeto nuevo, no añadas "list" en si
    this.lists.push({
      id: 'random',
      title: list.title,
      items: []
    })
  }
}