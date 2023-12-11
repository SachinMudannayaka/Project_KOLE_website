import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {ShareModule} from "../share/share.module";
import { MainPageContextComponent } from './components/main-page-context/main-page-context.component';
import { MainPageMainSliderComponent } from './components/main-page-context/inner-items/main-page-main-slider/main-page-main-slider.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatIconModule} from "@angular/material/icon";
import { MainPageFeaturesComponent } from './components/main-page-context/inner-items/main-page-features/main-page-features.component';
import { MainPageServicesComponent } from './components/main-page-context/inner-items/main-page-services/main-page-services.component';
import { MainPageSkillsComponent } from './components/main-page-context/inner-items/main-page-skills/main-page-skills.component';




@NgModule({
  declarations: [
    MainComponent,
    MainPageContextComponent,
    MainPageMainSliderComponent,
    MainPageFeaturesComponent,
    MainPageServicesComponent,
    MainPageSkillsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule,
    CarouselModule,
    MatIconModule
  ]
})
export class MainModule { }
