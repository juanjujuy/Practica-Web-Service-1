import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Estados } from '../../models/estados';
import { Paises } from '../../models/paises';
import { GeoService } from '../../services/geo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-geo-component',
  imports: [CommonModule],
  templateUrl: './geo-component.html',
  styleUrl: './geo-component.css',
})
export class GeoComponent implements OnInit{
  countries: Array<Paises> =[];

  pais!: Paises;

  constructor(
    private geoService: GeoService,
    private cd: ChangeDetectorRef) {
    
  }

  cargarPaises() {
    this.geoService.getCountries().subscribe(
      (resultado) => {
        //Pasar de JSON a JS
        this.countries = new Array<Paises>();
        resultado.forEach((elemento:any) => {
          this.pais = new Paises();
          Object.assign(this.pais, elemento); //Conversion
          this.countries.push(this.pais);
        });
        this.cd.detectChanges();
        console.log(this.countries);
      },
      error => { alert ("Error en la peticion"); }
    )
  }

  ngOnInit(): void {
    //this.cargarPaises();
  }

}
