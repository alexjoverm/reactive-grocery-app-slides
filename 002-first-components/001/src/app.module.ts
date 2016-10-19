import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

// 3/ Importar componentes
import {App} from './app/app'
import {GroceriesContainer} from './components/groceries/groceries'
import {ListComponent} from './components/list/list'


@NgModule({
  imports: [ BrowserModule ],
  // 5/ Añadir a declarations
  declarations: [
    App,
    GroceriesContainer,
    ListComponent
  ],
  bootstrap: [ App ]
})
export class AppModule {}