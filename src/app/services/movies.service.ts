import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieShowtimes, Movie } from '../interfaces/movies';
import { MovieResponse } from '../interfaces/movie';
import { CreditsResponse, Cast } from '../interfaces/credits';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl:string = 'https://api.themoviedb.org/3';
  private page: number;
  public loading: boolean;

  constructor(private httpClient: HttpClient) { 
    this.page = 1;
    this.loading = false;
  }

  get params(){
    return {
      api_key: 'e32d9fde39d025863dee9210deeaad91',
      language: 'es-MX',
      page: this.page
    }
  }


  getMovies():Observable<Movie[]>{
    if(this.loading){
      return of([]);
    }

    this.loading = true;
    return this.httpClient.get<MovieShowtimes>(`${this.baseUrl}/movie/now_playing`,{params: this.params})
                          .pipe(
                            map((resp) => resp.results),
                            tap( () => {
                            this.page +=1;
                            this.loading =false;
                          }));
  }

  searchMovie(search:string):Observable<Movie[]>{
    const params = {...this.params, page:1, query:search};

    return this.httpClient.get<MovieShowtimes>(`${this.baseUrl}/search/movie`,{params: params})
                          .pipe(map(resp => resp.results));
  }

  getMovie(id:number):Observable<MovieResponse | null>{
    return this.httpClient.get<MovieResponse>(`${this.baseUrl}/movie/${id}?api_key=${this.params.api_key}&language=${this.params.language}`)
                          .pipe(catchError(err => of(null) ));

  }

  getCast(id:number):Observable<Cast[] | never[]>{
    return this.httpClient.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.params.api_key}&language=${this.params.language}`)
                          .pipe(map(resp => resp.cast), catchError(err => of([]) ));
  }

  resetMoviesShowTimes(){
    this.page = 1;
  }
}
