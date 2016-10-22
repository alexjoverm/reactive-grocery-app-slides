import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import {App} from './app'
import 'rxjs/Rx'

// Importamos modulos necesarios
import { Routes, RouterModule } from '@angular/router'

// 2/ Importamos componentes
import { GroceriesComponent } from './groceries'
import { GroceriesDetailComponent } from './groceries-detail'

// 7/ Definimos rutas
const routes: Routes = [
  { path: '', component: GroceriesComponent },
  { path: 'details', component: GroceriesDetailComponent },
  // Podemos definir rutas por defecto
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    BrowserModule,
    // Inicializar rutas
    RouterModule.forRoot(routes)
  ],
  // No olvidemos añadir componentes al módulo
  declarations: [ App, GroceriesComponent, GroceriesDetailComponent ],
  bootstrap: [ App ]
})
export class AppModule {}