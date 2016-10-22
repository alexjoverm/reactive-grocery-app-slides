import { Component } from '@angular/core'

@Component({
  // 5/ Como 2º param de [routerLink], pasamos el id de la lista
  template: `
    <p [routerLink]="['details', list.id]" *ngFor="let list of lists">
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