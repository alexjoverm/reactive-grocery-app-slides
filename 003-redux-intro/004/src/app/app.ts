// 3/ 4. Siempre es necesario subscribirse a un observable.
// Si no utilizamos async pipe, tenemos que subscribir manualmente
// 5. Para ello utilizaremos los ciclos de vida OnInit y OnDestroy
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { ADD_LIST } from '../reducer'

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.html'
})
// 6. Los declaramos con implements
export class App implements OnInit, OnDestroy{
  lists$
  lists
  listsSubs
  newList = {}

  constructor(private store: Store<any>) {
    // 8/ 1. lists$ es un Observable, al que se le puede aplicar
    //-- differentes operadores (ver más en https://www.learnrxjs.io)
    this.lists$ = this.store
      .select(state => state.lists)
      // 2. map transforma la entrada proveniente el operador anterior
      .map(lists => [...lists, { id: 23423, title: 'Otro mas' }])
      // 3. do va bien para debuggear
      .do(console.log)
  }

  // 6/ 7. Implementamos ngOnInit y ngOnDestroy
  ngOnInit() {
    // 3/ 8. Subscribe devuelve un Subscription, que usaremos para desubscribir
    this.listsSubs = this.store
      .select(state => state.lists)
      .subscribe(lists => this.lists = lists)
  }

  // 3/ 9. Y no olvides desubscribir
  ngOnDestroy() {
    this.listsSubs.unsubscribe()
  }

  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.newList, { id: randomId })
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }

}