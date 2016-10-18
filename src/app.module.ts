import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {App} from './app/app'
import {GroceriesContainer} from './components/groceries/groceries'
import {ListComponent} from './components/list/list'


@NgModule({
  imports: [ BrowserModule ],

  declarations: [
    App,
    GroceriesContainer,
    ListComponent
  ],
  bootstrap: [ App ]
})
export class AppModule {}