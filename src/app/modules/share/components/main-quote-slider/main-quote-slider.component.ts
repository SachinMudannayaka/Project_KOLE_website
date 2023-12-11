import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-main-quote-slider',
  templateUrl: './main-quote-slider.component.html',
  styleUrls: ['./main-quote-slider.component.scss']
})
export class MainQuoteSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slidesStore = [
    {id: '1',
      image: 'https://img.freepik.com/free-photo/ecstatic-white-girl-beret-posing-with-amazement-elegant-caucasian-female-model-t-shirt-standing-red-wall_197531-11462.jpg?w=1380&t=st=1687975781~exp=1687976381~hmac=7cf0c180da19e2f2f01225f507ddf020eb2d1b9388a4363e5dad2fb20b476e60',isHovered: false,
      alt:'girl-image',
      main_head:'Get Inspired',
      second_head:'A TRENDY QUOTE',
      description_body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u',
      author:'Coco Chanel'

    },

    {id: '2',
      image: 'https://img.freepik.com/free-photo/ecstatic-white-girl-beret-posing-with-amazement-elegant-caucasian-female-model-t-shirt-standing-red-wall_197531-11462.jpg?w=1380&t=st=1687975781~exp=1687976381~hmac=7cf0c180da19e2f2f01225f507ddf020eb2d1b9388a4363e5dad2fb20b476e60',isHovered: false,
      alt:'girl-image',
      main_head:'Get Inspired',
      second_head:'A TRENDY QUOTE',
      description_body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u',
      author:'Coco Chanel'

    },
    {id: '3',
      image: 'https://img.freepik.com/free-photo/ecstatic-white-girl-beret-posing-with-amazement-elegant-caucasian-female-model-t-shirt-standing-red-wall_197531-11462.jpg?w=1380&t=st=1687975781~exp=1687976381~hmac=7cf0c180da19e2f2f01225f507ddf020eb2d1b9388a4363e5dad2fb20b476e60',isHovered: false,
      alt:'girl-image',
      main_head:'Get Inspired',
      second_head:'A TRENDY QUOTE',
      description_body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u',
      author:'Coco Chanel'

    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      300: {
        items: 1
      },
      650: {
        items: 1
      },
      1024: {
        items: 1
      }
    },
  }
}
