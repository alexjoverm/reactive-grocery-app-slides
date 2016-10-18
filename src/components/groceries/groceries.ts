import {Component} from '@angular/core'

@Component({
  moduleId: __moduleName,
  selector: 'groceries',
  templateUrl: 'groceries.html'
})
export class GroceriesContainer {
  lists

  constructor() {
    this.lists = [
      { id: '0', title: 'Lista 1', items:[] },
      { id: '1', title: 'Lista 2', items:[1] }
    ]
  }

  // 4/ Borrar lista del array
  deleteList(list) {
    // FRP tip: no mutar lists
    this.lists = this.lists.filter(l => l.id !== list.id)
  }
}