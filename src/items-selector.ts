import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

// 14/ ItemsSelector
@Injectable()
export class ItemsSelector {
  constructor(private store: Store<any>) { }

  // 3/ En este caso, nos interesa la parte de items del state
  private getState() {
    return this.store.select(state => state.items)
  }

  // 7/ Obtener un array de items en base a ids
  public getItemsFromIds(ids) {
    console.log(ids)
    return this.getState()
      .map(state => ids
        .map(id => state.entities[id])
      )
  }
}