import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html'
})
export class FindComponent {
  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private _activateRoute: ActivatedRoute
  ) {
    this._activateRoute.params.subscribe( params => {
      this.heroes = this._heroesService.findHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

}
