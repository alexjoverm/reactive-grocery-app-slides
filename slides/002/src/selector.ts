import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

// 30/ Un Service en Angular es simplemente una clase de
// Typescript/ES6 que usa el decorator @Injectable
@Injectable()
export class Selector {

  // Inyectamos el Store
  constructor(private store: Store<any>) { }

  // 3/ Helper para acceder a una porción del State
  private getState() {
    return this.store.select(state => state.lists)
  }

  // 5/ Obtener un array de listas, procesando los ids y entities
  public getLists() {
    return this.getState().map(state =>
      state.ids.map(id => state.entities[id])
    )
  }

  // 5/ Obtener una lista en base a un id
  public getList(id: string) {
    // 3/ RxJS permite combinar funciones gracias a su naturaleza FP
    return this.getListEntities()
      .map(listEntities => listEntities[id])
      .filter(list => !!list) // Aseguramos que exista
  }

}