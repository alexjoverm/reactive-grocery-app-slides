import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
// 2. No olvides importarlo
import {FormsModule} from '@angular/forms'

import {App} from './app/app'
import {GroceriesContainer} from './components/groceries/groceries'
import {ListComponent} from './components/list/list'


@NgModule({
  // 4/ 1. Lo primero es añadir FormsModule
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    App,
    GroceriesContainer,
    ListComponent
  ],
  bootstrap: [ App ]
})
export class AppModule {}