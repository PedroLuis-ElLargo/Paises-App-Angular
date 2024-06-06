import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css',
})
export class PorCapitalComponent {
  public termino: string = '';
  hayError: boolean = false;
  public capital: Country[] = [];

  constructor(private paisService: PaisService) {
    console.log('Componente de por capital cargado');
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe(
      (capital) => {
        this.capital = capital;
        console.log(capital);
      },
      (error) => {
        this.hayError = true;
        this.capital = [];
      }
    );
  }
}
