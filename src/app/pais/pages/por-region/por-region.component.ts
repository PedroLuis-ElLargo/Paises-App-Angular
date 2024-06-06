import { Country } from './../../interfaces/pais.interface';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrl: './por-region.component.css',
})
export class PorRegionComponent {
  regiones: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  public paises: Country[] = [];

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
  constructor(private paisService: PaisService) {
    console.log('Componente de por region cargado');
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];
    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }

  // buscarRegion(termino: string) {
  //   this.hayError = false;
  //   this.termino = termino;
  //   this.paisService.buscarRegion(this.regionActiva).subscribe(
  //     (paises) => {
  //       this.paises = paises;
  //     },
  //     (error) => {
  //       this.hayError = true;
  //       this.paises = [];
  //     }
  //   );
  //   console.log(this.regionActiva);
  // }
}

// this.paisService.buscarRegion(this.regionActiva).subscribe(
//   (paises) => {
//     this.paises = paises;
//   },
//   (error) => {
//     console.log(error);
//   }
// );
