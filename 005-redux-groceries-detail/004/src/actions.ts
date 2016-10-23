// 20/ Creamos una clase para los Action creators
import { Injectable } from '@angular/core'
// 3/ Importamos Store y action types de los reducers
import { Store } from '@ngrx/store'
import { ADD_ITEM } from './items-reducer'
import { ADD_LIST, ADD_LIST_ITEM } from './reducer'

@Injectable()
export class Actions {

  // 10/ Añadimos Actions correspondientes
  constructor(private store: Store<any>) { }

  addList(list) {
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }

  addListItem(item) {
    this.store.dispatch({ type: ADD_LIST_ITEM, payload: { listId: 0, itemId: item.id } })
    this.store.dispatch({ type: ADD_ITEM, payload: item })
  }
}