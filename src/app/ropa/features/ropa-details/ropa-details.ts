import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RopaService } from '../../data-access/ropa.service';
import { single } from 'rxjs';
import { Ropa, RopaData } from '../../data-access/ropa.model';
import { RopaForm } from '../ropa-form/ropa-form';

@Component({
  imports: [RopaForm],
  selector: 'app-ropa-details',
  styleUrl: './ropa-details.css',
  templateUrl: './ropa-details.html',
})
export class RopaDetails implements OnInit{
  aRoute=inject(ActivatedRoute)
  ropaService=inject(RopaService)
  route=inject(Router)

  editando=signal<boolean>(false)
  ropa=signal<Ropa|null>(null)

  private id= this.aRoute.snapshot.paramMap.get('id')!

  ngOnInit(){
    this.ropaService.getById(this.id).subscribe({
      next:(ropa)=>{
        this.ropa.set(ropa)
      }
    })
  }

  onUpdate(ropa:Ropa){
    this.editando.set(false)
    this.ropa.set(ropa)
  }

  deleteRopa(id:string|number){
    if(!confirm('Seguro que desea eliminar la ropa?'))return
    this.ropaService.delete(id).subscribe({
      next:()=>{
        alert('Ropa eliminada correctamente')
        this.route.navigate(['/ropa'])
      }

    })
  }
}
