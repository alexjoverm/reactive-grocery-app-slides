import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
// Importar los action types
import { ADD_LIST } from '../reducer'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class App {
  lists$
  newList = {}

  constructor(private store: Store<any>) {
    this.lists$ = this.store.select(state => state.lists)
  }

  // 5/ Crear una lista en el store
  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.newList, { id: randomId })
    // Usamos store.dispatch, siempre con estructure {type, payload}
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }

}