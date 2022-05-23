import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-movie-poster-grid',
  templateUrl: './movie-poster-grid.component.html',
  styleUrls: ['./movie-poster-grid.component.css']
})
export class MoviePosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

  viewDetails(id:number){
    this.router.navigate(['/movie',id]);
  }

}
