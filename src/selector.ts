import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

@Injectable()
export class Selector {
  constructor(private store: Store<any>) { }

  // 3/ Helper para acceder a una porción del State. Gracias a la
  // naturaleza FP de RxJS, podemos combinar y reutilizar funciones
  private getState() {
    return this.store.select(state => state.lists)
  }

  // 5/ Obtener un array de listas, procesando los ids y entities
  public getLists() {
    return this.getState().map(state =>
      state.ids.map(id => state.entities[id])
    )
  }

  // 3/ Obtener solo las entidades
  public getListEntities() {
    return this.getState().map(state => state.entities)
  }
}