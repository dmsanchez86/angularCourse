import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() i: number;

  constructor() { }

  ngOnInit() {
  }

}
