import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { ADD_LIST } from '../reducer'
import { Selector } from '../selector'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class App implements OnInit, OnDestroy{
  lists$
  newList = {}

  // 9/ Utilizamos nuestro Selector
  constructor(
    private store: Store<any>,
    // Lo inyectamos
    private selector: Selector
  ) {
    // 2/ Usando el selector, abstraemos el componente del
    // procesamiento de obtener el estado en el formato deseado
    this.lists$ = this.selector.getLists()
  }

  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.newList, { id: randomId })
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }

}