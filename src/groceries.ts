import { Component } from '@angular/core'

@Component({
  // 5/ Usando [routerLink] podemos añadir un link a la ruta
  template: `
    <p [routerLink]="['details']" *ngFor="let list of lists">
      {{list.title}}
    </p>
  `
})
export class GroceriesComponent {
  lists = [
    { id: 0, title: 'Paco' },
    { id: 1, title: 'Pepe' }
  ]
}