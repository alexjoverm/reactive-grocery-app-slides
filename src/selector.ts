import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

@Injectable()
export class Selector {
  constructor(private store: Store<any>) { }

  private getState() {
    return this.store.select(state => state.lists)
  }

  public getLists() {
    return this.getState().map(state =>
      state.ids.map(id => state.entities[id])
    )
  }
}