import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FilmProvider, Movie} from "../../providers/film/film";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: Observable<Movie[]>;

  constructor(
    private filmService: FilmProvider,
    public navCtrl: NavController) {
    this.movies = this.filmService.getMovies();
  }

}
