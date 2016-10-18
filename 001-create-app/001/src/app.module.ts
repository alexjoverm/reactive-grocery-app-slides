// 2/ Importamos NgModule y BrowserModule
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {App} from './components/app/app'

// 5/ Usar @NgModule para crear un modulo
@NgModule({
  imports: [ BrowserModule ], // Modules
  declarations: [ App ], // Componentes
  bootstrap: [ App ] // Componente raiz
})
export class AppModule {}