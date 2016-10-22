import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  template: `
    <h2>Detalle: {{id}}</h2>
  `
})
export class GroceriesDetailComponent implements OnInit {
  id

  // Instanciamos ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  // 8/ En ngOnInit accedemos a la ruta activa
  ngOnInit() {
    // 4/ route.params es un Observable. Podemos utilizar forEach,
    //--  que es como subscribe, pero finaliza el stream
    //--  (algo como Promise.then)
    this.route.params.forEach((params: Params) => {
      this.id = params['id']
    })
  }
}