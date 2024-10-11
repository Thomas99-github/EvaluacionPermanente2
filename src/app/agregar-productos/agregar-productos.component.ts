import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      descripcion: ['', Validators.required]
    });
  }

  agregarProducto() {
    if (this.productoForm.valid) {
      alert('Producto agregado');
      this.productoForm.reset();
    }
  }
}
