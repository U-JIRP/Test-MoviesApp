import { Component, OnInit, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cast-slide',
  templateUrl: './cast-slide.component.html',
  styleUrls: ['./cast-slide.component.css'],
  providers: [NgbCarouselConfig]
})
export class CastSlideComponent implements OnInit {

  @Input() cast:Cast[]=[];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
