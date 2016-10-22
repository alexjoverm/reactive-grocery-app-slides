import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// 2/ Importamos StoreModule y nuestro reducer principal
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'

import {App} from './app/app'

@NgModule({
  imports: [
    BrowserModule,
    // Iniciamos nuestra store y definimos nuestro state principal
    StoreModule.provideStore({ lists: reducer })
  ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}