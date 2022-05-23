import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  moviesSlideShow: Movie[] = [];
  movies: Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const posicion = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(posicion > max){
      if(this.movieService.loading){return;}
      this.movieService.getMovies().subscribe(resp => {
        this.movies.push(...resp);
      });
    }
  }

  
  constructor(private movieService: MoviesService) { 
    this.movies = [];
    
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(resp => {
      this.moviesSlideShow = resp;
      this.movies = resp;
    });
  }

  ngOnDestroy(){
    this.movieService.resetMoviesShowTimes();
  }
}
