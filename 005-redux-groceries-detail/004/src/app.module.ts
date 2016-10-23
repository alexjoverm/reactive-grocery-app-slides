import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'
import { Selector } from './selector'

// 3/ Como siempre, importamos Actions en el módulo
import { itemsReducer } from './items-reducer'
import { ItemsSelector } from './items-selector'
import { Actions } from './actions'

import {App} from './app/app'
import 'rxjs/Rx'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ lists: reducer, items: itemsReducer })
  ],
  declarations: [ App ],
  // y lo añadimos a providers
  providers: [ Selector, ItemsSelector, Actions ],
  bootstrap: [ App ]
})
export class AppModule {}