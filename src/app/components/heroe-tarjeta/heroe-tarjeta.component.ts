import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() i: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor() {
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  seeHeroe() {
    this.selectedHeroe.emit(this.i);
  }

}
