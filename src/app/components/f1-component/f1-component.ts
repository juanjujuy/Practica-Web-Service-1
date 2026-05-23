import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { F1Class } from '../../models/f1-class';
import { F1Service } from '../../services/f1-service';
import { SessionClass } from '../../models/session-class';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-f1-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './f1-component.html',
  styleUrl: './f1-component.css',
})
export class F1Component implements OnInit {
  raices: Array<F1Class> = [];
  race!: F1Class;
  selectYear: number = 2020;
  sessions!: SessionClass[];
  session_id!: number;
  drivers :any[] = [];
  driver:any;
  constructores:any[]=[];
  nroTabla : number = 2;
  constructoresFiltrados:any[]=[];

  constructor(
    private f1Service: F1Service,
    private cd: ChangeDetectorRef
  ) { }

  cargarRaces() {
    this.nroTabla=1;
    this.f1Service.getRacesByYear(this.selectYear).subscribe(
      (resultado: any) => {
        this.raices = [];
        this.raices = resultado.results;
        console.log(this.raices);
        this.cd.detectChanges();
      },
      error => {
        console.log(error)
      }
    )

  }

  cargarPosiciones(session_id :number) {
    this.f1Service.getPositionBySession(session_id).subscribe(
      (resultado:any) => {
        this.drivers=[];
        console.log(resultado)
        this.drivers = resultado.results.drivers;
        console.log(this.drivers);
        this.cd.detectChanges();
      },
      error=> {
        console.log(error)
      }
    )
  }

  cargarClasificacion() {
    this.nroTabla=2;
    this.f1Service.getConstructoresByYear(this.selectYear).subscribe(
      (resultado:any) => {
        this.constructores=[];
        this.constructoresFiltrados=[];
        this.constructores = resultado.results;
        console.log(this.constructores);
        this.constructoresFiltrados.push(this.constructores[0],this.constructores[this.constructores.length-1])
        this.cd.detectChanges();
      },
      error=> {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    
  }
}
