import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'

import {App} from './app/app'

// Incluimos todo RxJS (para el ejemplo)
import 'rxjs/Rx'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ lists: reducer })
  ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}