import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies:Movie[];
  search:string;
  constructor(private activatedRoute:ActivatedRoute, private moviesService: MoviesService) { 
    this.movies = [];
    this.search = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.searchMovie(params.movie).subscribe(results => {
        console.log(results);
        this.movies = results;
        this.search = params.movie;
      });
    });
  }

}
