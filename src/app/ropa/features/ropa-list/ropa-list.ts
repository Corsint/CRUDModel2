import { Component, inject, OnInit, signal } from '@angular/core';
import { RopaService } from '../../data-access/ropa.service';
import { Ropa } from '../../data-access/ropa.model';
import { RopaCard } from '../../../shared/ropa-card/ropa-card';

@Component({
  imports: [RopaCard],
  selector: 'app-ropa-list',
  styleUrl: './ropa-list.css',
  templateUrl: './ropa-list.html',
})
export class RopaList implements OnInit {
  ropaService = inject(RopaService)

  ropa = signal<Ropa[]>([])
  filteredRopa = signal<Ropa[]>([])

  ngOnInit() {
    this.ropaService.getAll().subscribe({
      next: (ropa) => {
        this.ropa.set(ropa)
        this.filteredRopa.set(ropa)
      }
    })
  }

  filterByCategory(category:string){
    this.filteredRopa.set(
    category ? this.ropa().filter((r)=>r.categoria === category ): this.ropa()
    )
  }

  filterOnSale(onSale:boolean){
    this.filteredRopa.set(
    onSale? this.ropa().filter((r)=>r.enOferta === onSale ): this.ropa()
    )
  }
}
