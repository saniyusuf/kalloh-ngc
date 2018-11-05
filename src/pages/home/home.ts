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
  filteredMovies: Observable<Movie[]>;

  constructor(
    private filmService: FilmProvider,
    public navCtrl: NavController) {
    this.movies = this.filmService.getMovies();
    this.filteredMovies = this.filmService.getFilteredMovies();
  }

  goToDetail(movie) {
    this.navCtrl.push('detail', {
      movie: movie
    });
  }
}
