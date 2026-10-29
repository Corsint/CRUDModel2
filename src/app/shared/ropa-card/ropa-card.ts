import { Component, inject, input } from '@angular/core';
import { Ropa } from '../../ropa/data-access/ropa.model';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-ropa-card',
  styleUrl: './ropa-card.css',
  templateUrl: './ropa-card.html',
})
export class RopaCard {
  route=inject(Router)
  ropa=input<Ropa>()

  goToDetails(id:string|number){
    this.route.navigate(['/detalleRopa/',id])
  }
}
