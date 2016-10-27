import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

// Importar angular material
import {MaterialModule} from '@angular/material'

import {App} from './app/app'
import {GroceriesContainer} from './components/groceries/groceries'
import {ListComponent} from './components/list/list'


@NgModule({
  // 6/ Añadimos Angular Material al modulo
  imports: [
    BrowserModule,
    FormsModule,
    // Utilizamos el método forRoot
    MaterialModule.forRoot()
  ],

  declarations: [
    App,
    GroceriesContainer,
    ListComponent
  ],
  bootstrap: [ App ]
})
export class AppModule {}