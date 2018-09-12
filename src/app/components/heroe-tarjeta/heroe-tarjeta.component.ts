import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() i: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(private _router: Router ) {
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  seeHeroe() {
    this._router.navigate(['/heroe', this.i]);
    // this.selectedHeroe.emit(this.i);
  }

}
