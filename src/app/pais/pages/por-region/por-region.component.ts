import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    .btn-outline-primary {
        background-color: black;
        border-color: white;
        color: white;
      }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas','asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  termino:string = '';

  constructor( private paisService: PaisService ) {}

  buscar( termino: string ) {
 
    this.regionActiva = termino;

    this.paisService.buscarRegion( termino ).subscribe( (region ) => {
      this.paises = region;

    }, (err) => {
      this.paises = []
  });
  }

  getClaseCSS( region: string ): string {
    return(region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }
  activarRegion( region: string ) {
    this.regionActiva = region;
    this.buscar(region);

    //TODO hacer un llamado al servicio
  }
}
