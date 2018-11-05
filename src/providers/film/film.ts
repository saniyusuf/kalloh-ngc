import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


const API = "https://api.myjson.com/bins/102p72";
/*
  Generated class for the FilmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmProvider {

  constructor(private http: HttpClient) {
    console.log('Hello FilmProvider Provider');
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(API);
  }

}


export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: boolean | string;
  Preview: string;
  Featured?: boolean;
  FeaturedImage?: string;
  Trending?: boolean;
  TopPick?: boolean;
  totalSeasons?: string;
}
