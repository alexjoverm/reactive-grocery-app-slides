import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'
// Importamos Selector en app.module
import { Selector } from './selector'

import {App} from './app/app'
import 'rxjs/Rx'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ lists: reducer })
  ],
  declarations: [ App ],
  // Proveemos Selector
  providers: [ Selector ],
  bootstrap: [ App ]
})
export class AppModule {}