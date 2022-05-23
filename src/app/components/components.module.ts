import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MoviePosterGridComponent } from './movie-poster-grid/movie-poster-grid.component';
import { CastSlideComponent } from './cast-slide/cast-slide.component';

// Slider
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Rating
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    MoviePosterGridComponent,
    CastSlideComponent
  ],
  exports:[
    NavbarComponent,
    SliderComponent,
    MoviePosterGridComponent,
    CastSlideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    RatingModule,
    PipesModule
  ],
  bootstrap:[
    SliderComponent,
    CastSlideComponent
  ]
})
export class ComponentsModule { }
