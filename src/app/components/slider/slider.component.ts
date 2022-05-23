import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {


  @Input() movies: Movie[] = [];

  constructor(config: NgbCarouselConfig) {

    config.interval = 7000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {

  }



 

}
