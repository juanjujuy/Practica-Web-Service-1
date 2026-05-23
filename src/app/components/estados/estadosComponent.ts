import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo-service';
import { Estados } from '../../models/estados';
import { FormsModule } from '@angular/forms';
import { Paises } from '../../models/paises';

@Component({
  selector: 'app-estados',
  imports: [FormsModule],
  templateUrl: './estadosComponent.html',
  styleUrl: './estados.css',
})
export class EstadosComponent implements OnInit {
  provincias: Array<Estados> = [];
  provincia!: Estados;
  countries: Array<any> = [];
  pais!: any;

  codigo: string = "";

  constructor(
    private geoService: GeoService,
    private cd: ChangeDetectorRef) {}

  cargarProvincias(codigo: string) {
    this.geoService.getStatesByCountry(codigo).subscribe(
      (resultado: any) => {
        this.provincias = [];                       //Lista de Provincias vacia
        resultado.forEach((elemento: any) => {      //Recorre el resultado de la consulta a la API
          this.provincia = new Estados();           //Crea un nuevo objeto Provincia vacio
          Object.assign(this.provincia, elemento);  //Convierte un elemento de la API en objeto Provincia
          this.provincias.push(this.provincia);     //Agrega el objeto Provincia en la lista de Provincias
        });
        this.cd.detectChanges();
        console.log(this.provincias);
      },
      error => {
        alert("Error en la peticion");
      }
    )
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
