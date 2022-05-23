import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie';
import { Cast } from 'src/app/interfaces/credits';
import { MoviesService } from 'src/app/services/movies.service';
import { combineLatest } from 'rxjs';

;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:MovieResponse | null;
  cast:Cast[] | null;

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router , 
              private moviesService:MoviesService) { 
    this.movie = {} as MovieResponse;  
    this.cast = [];
  }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.moviesService.getMovie(id),
      this.moviesService.getCast(id)
    ]).subscribe(([movie, cast]) => {

      if(!movie){
        this.router.navigateByUrl('/home');
        return;
      }
      else{
        this.movie = movie;
        this.cast = cast.filter(actor => actor.profile_path !== null);
      }
    });
  }

}
