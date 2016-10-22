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

  constructor(
    private store: Store<any>,
    private selector: Selector
  ) {
    this.lists$ = this.selector.getLists()
  }

  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.newList, { id: randomId })
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }

}