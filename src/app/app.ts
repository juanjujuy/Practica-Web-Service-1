import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { GeoComponent } from './components/geo-component/geo-component';
import { EstadosComponent } from './components/estados/estadosComponent';
import { F1Component } from './components/f1-component/f1-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, GeoComponent, EstadosComponent, F1Component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-web-service');
}
