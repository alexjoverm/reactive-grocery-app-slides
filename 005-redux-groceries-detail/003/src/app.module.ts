import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'
import { Selector } from './selector'

// 2/ Importamos nuevos ficheros
import { itemsReducer } from './items-reducer'
import { ItemsSelector } from './items-selector'

import {App} from './app/app'
import 'rxjs/Rx'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // Añadimos items al store
    StoreModule.provideStore({ lists: reducer, items: itemsReducer })
  ],
  declarations: [ App ],
  // Añadimos ItemsSelector
  providers: [ Selector, ItemsSelector ],
  bootstrap: [ App ]
})
export class AppModule {}