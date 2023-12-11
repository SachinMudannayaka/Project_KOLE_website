import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTreeModule} from "@angular/material/tree";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MainAboutUsComponent } from './components/main-about-us/main-about-us.component';
import { MainImageGalleryComponent } from './components/main-image-gallery/main-image-gallery.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { MainQuoteSliderComponent } from './components/main-quote-slider/main-quote-slider.component';


@NgModule({
    declarations: [
        ShareComponent,
      MainHeaderComponent,
      MainAboutUsComponent,
      MainImageGalleryComponent,
      MainQuoteSliderComponent
    ],
    exports: [
        MainHeaderComponent,
        MainAboutUsComponent,
        MainImageGalleryComponent,
        MainQuoteSliderComponent
    ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatTreeModule,
    MatProgressBarModule,
    CarouselModule
  ]
})
export class ShareModule { }
