import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.css',
})
export class Categoria {
  camposForm: FormGroup;
  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }
  salvar() {
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid) {
      console.log(this.camposForm.value);
    }
  }
  isCamposInvalidos(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo.touched) || false;
  }
}
