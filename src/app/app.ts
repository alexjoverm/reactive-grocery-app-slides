import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class App {
  lists = [
    { id: 3, title: 'Manzana' }
  ]
  newList = {}

  // 4/ Esto no es immutable
  createListMutable() {
    // MAL! De esta manera se mantienen las referencias
    this.lists.push(this.newList)
  }

  // 25/ Veamos formas de crear objectos y arrays immutables
  createList() {
    // Array spread operator para crear nuevos arrays
    this.lists = [...this.lists, this.newList]
  }

  // 6/ Si pruebas createList, verás que todavía se mantiene la referencia
  // Necesitamos clonar newList
  //-- Para ello, Object.assign({}, objecto) es útil
  createListWithClone() {
    const listClone = Object.assign({}, this.newList)
    this.lists = [...this.lists, listClone]
  }

  editList() {
    // 4/ Map para editar arrays
    this.lists = this.lists.map(list =>
      // Object assign tambien se puede utilizar para "merge"
      Object.assign({}, list, {title: list.title + ' uala'})
    )
  }

  deleteList() {
    // Filter para eliminar elementos
    this.lists = this.lists.filter(list => list.id !== 3)
  }
}