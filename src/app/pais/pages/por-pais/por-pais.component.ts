import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css',
})
export class PorPaisComponent {
  public termino: string = '';
  hayError: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  mostrarSugerencia = true;

  constructor(private paisService: PaisService) {
    console.log('Componente de por pais cargado');
  }
  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencia = false;

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais(termino).subscribe((paises) => {
      this.paisesSugeridos = paises.splice(0, 5);
    });
    console.log(this.paisesSugeridos);
  }

  seleccionarPais(termino: string) {
    this.buscar(termino);
    this.paisesSugeridos = [];
    this.hayError = false;
    this.termino = '';
  }
}
