import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

// 30/ Un Service en Angular es simplemente una clase de
// Typescript/ES6 que usa el decorator @Injectable
@Injectable()
export class Selector {

  // Inyectamos el Store
  constructor(private store: Store<any>) { }

  // 3/ Accedemos a una parte del state concreta
  public getLists() {
    return this.store.select(state => state.lists)
  }

}