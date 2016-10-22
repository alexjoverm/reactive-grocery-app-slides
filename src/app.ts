import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  // 5/ router-active reemplaza dinámicamente el contenido de
  // la ruta activa. Lo demás compone el Shell de la app.
  template: `
    <h1> Esto es un toolbar </h1>
    <router-outlet></router-outlet>
  `
})
export class App { }