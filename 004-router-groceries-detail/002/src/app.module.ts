import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import {App} from './app'
import 'rxjs/Rx'

import { Routes, RouterModule } from '@angular/router'

import { GroceriesComponent } from './groceries'
import { GroceriesDetailComponent } from './groceries-detail'

const routes: Routes = [
  { path: '', component: GroceriesComponent },
  { path: 'details/:id', component: GroceriesDetailComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ App, GroceriesComponent, GroceriesDetailComponent ],
  bootstrap: [ App ]
})
export class AppModule {}