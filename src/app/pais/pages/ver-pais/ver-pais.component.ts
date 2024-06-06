import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais: Country | undefined;
  mensajeError: string = '';

  constructor(
    private activadorRutas: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activadorRutas.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisById(id)),
        tap(console.log)
      )
      .subscribe({
        next: (pais) => {
          this.pais = pais;
        },
        error: (err) => {
          console.error('Error fetching country:', err);

          this.mensajeError =
            'No se pudo cargar la información del país. Por favor, inténtelo de nuevo más tarde.';
        },
      });
  }
}
