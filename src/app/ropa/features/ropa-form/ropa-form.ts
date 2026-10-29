import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RopaService } from '../../data-access/ropa.service';
import { Ropa } from '../../data-access/ropa.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-ropa-form',
  styleUrl: './ropa-form.css',
  templateUrl: './ropa-form.html',
})
export class RopaForm implements OnInit {
  fb = inject(FormBuilder)
  ropaService = inject(RopaService)

  ropaAEditar = input<Ropa>()
  ropaEditada = output<Ropa>()
  cancelar = output<void>()

  ropaForm = this.fb.nonNullable.group({
    modelo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    precio: [0, [Validators.required,Validators.min(0)]],
    categoria: ['', [Validators.required]],
    enOferta: [false],
  })

  ngOnInit() {
    const ropaAEditar = this.ropaAEditar()
    if (ropaAEditar) {
      this.ropaForm.patchValue(ropaAEditar)
    }
  }

  submitRopa() {
    if (this.ropaForm.invalid) {
      this.ropaForm.markAllAsTouched
      return
    }

    const ropaAEditar = this.ropaAEditar()
    const nuevaRopa = this.ropaForm.getRawValue()

    if (ropaAEditar) {
      this.ropaService.update(ropaAEditar.id, nuevaRopa).subscribe({
        next: (ropa) => {
          alert('Ropa editada con exito')
          this.ropaEditada.emit(ropa)
        }
      })
    } else {
      this.ropaService.create(nuevaRopa).subscribe({
        next: () => {
          this.ropaForm.reset()
          alert('Ropa agregada correctamente')
          
        }
      })
    }
  }

  
}
