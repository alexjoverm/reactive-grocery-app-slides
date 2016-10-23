import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
// Importamos ADD_LIST_ITEM action
import { ADD_LIST, ADD_LIST_ITEM } from '../reducer'
import { Selector } from '../selector'
// 2/ Importar ItemsSelector y Actions
import { ADD_ITEM } from '../items-reducer'
import { ItemsSelector } from '../items-selector'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class App implements OnInit, OnDestroy{
  lists$
  items$
  newList = {}

  // 12/ Inyectamos itemsSelector y lo usamos para obtener los items
  constructor(
    private store: Store<any>,
    private selector: Selector,
    private itemsSelector: ItemsSelector
  ) {
    this.lists$ = this.selector.getLists()
    // 4/ Obtenemos items de la lista 0. MergeMap es como map, pero
    // desenvuelve Observables. getItemsFromIds devuelve un Observable
    this.items$ = this.lists$.mergeMap(lists =>
      this.itemsSelector.getItemsFromIds(lists[0].items)
    )
  }

  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.newList, { id: randomId })
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }

  // 7/ Funcion simple para añadir item
  createListItem() {
    const randomId = Math.floor(Math.random() * 1000)
    const item = Object.assign({}, this.newList, { id: randomId })
    // 2/ Añadimos item, y además tenemos que actualizar la lista
    this.store.dispatch({ type: ADD_LIST_ITEM, payload: { listId: 0, itemId: item.id } })
    this.store.dispatch({ type: ADD_ITEM, payload: item })
  }

}