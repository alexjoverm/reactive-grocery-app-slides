import { Component } from '@angular/core'
// 4/ En App component, ya no necesitamos referencias a
// NgRx Store o los reducers. De eso se encarga actions.ts
import { Actions } from '../actions'
import { Selector } from '../selector'
import { ItemsSelector } from '../items-selector'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class App {
  lists$
  items$
  newList = {}

  // 5/ Inyectamos actions en app.ts
  constructor(
    private selector: Selector,
    private itemsSelector: ItemsSelector,
    private actions: Actions
  ) {
    this.lists$ = this.selector.getLists()
    this.items$ = this.lists$.mergeMap(lists =>
      this.itemsSelector.getItemsFromIds(lists[0].items)
    )
  }

  // 11/ Actualizamos métodos para usar los action creators
  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.newList, { id: randomId })
    this.actions.addList(list) // addList
  }

  createListItem() {
    const randomId = Math.floor(Math.random() * 1000)
    const item = Object.assign({}, this.newList, { id: randomId })
    this.actions.addListItem(item) // addListItem
  }
}