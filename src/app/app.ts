import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class App {
  // Definimos stream de listas ($ al final es una convencion)
  lists$

  // Inyectamos store
  constructor(private store: Store<any>) {
    // 2/ Mediante store.select accedemos al state
    // De esta manera accedemos a la parte del state que nos interese
    this.lists$ = this.store.select(state => state.lists)
  }

}