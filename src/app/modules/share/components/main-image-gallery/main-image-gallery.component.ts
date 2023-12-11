import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-main-image-gallery',
  templateUrl: './main-image-gallery.component.html',
  styleUrls: ['./main-image-gallery.component.scss']
})
export class MainImageGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slidesStore = [
    {id: '1',
      image: 'https://img.freepik.com/free-photo/ecstatic-white-girl-beret-posing-with-amazement-elegant-caucasian-female-model-t-shirt-standing-red-wall_197531-11462.jpg?w=1380&t=st=1687975781~exp=1687976381~hmac=7cf0c180da19e2f2f01225f507ddf020eb2d1b9388a4363e5dad2fb20b476e60',isHovered: false,
      alt:'girl-image',
      head:'Wordpress Theme',
      title:'BEAUTY',


    },

    {id: '2',
      image: 'https://img.freepik.com/free-photo/trendy-street-style-image-amazing-fashionable-young-pretty-woman-posing-street_291049-2.jpg?w=1380&t=st=1687975853~exp=1687976453~hmac=78b5ae99144f8d61793733d7804fe918e119df2bc1a38f846cde7f3bf89352d3',isHovered: false,
      alt:'image-imb',
      head:'Wordpress Theme',
      title:'BEAUTY',


    },
    {id: '3',
      image: 'https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4654.jpg?w=1380&t=st=1687975950~exp=1687976550~hmac=dec6b57f2a1954a9b869caca7ec33b4318bf61cf19ba0013c8419c56908b9f61',isHovered: false,
      alt:'image-imb',
      head:'Wordpress Theme',
      title:'BEAUTY',


    },
    {id: '4',
      image: 'https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-470.jpg?w=1380&t=st=1687976128~exp=1687976728~hmac=375a4b2f04a0469ef616e08bc604bdb0af824876169f518768da9ad1cb75f3e0',isHovered: false,
      alt:'image-imb',
      head:'Wordpress Theme',
      title:'BEAUTY',


    },
    {id: '5',
      image: 'https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg?w=1060&t=st=1687975835~exp=1687976435~hmac=c7720d88e8c56453f0df489822fce578717e1a0647b84eaa02d696fbdbdd9cd7',isHovered: false,
      alt:'image-imb',
      head:'Wordpress Theme',
      title:'BEAUTY',


    },
    {id: '6',
      image: 'https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated-showing-peace-sign_158538-8572.jpg?w=1060&t=st=1687976084~exp=1687976684~hmac=f7d9486a73ccb207723b5f2f372629410e7c5440fe958989b098e0b50723d251',isHovered: false,
      alt:'image-imb',
      head:'Wordpress Theme',
      title:'BEAUTY',


    },

  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      300: {
        items: 1
      },
      650: {
        items: 3
      },
      1024: {
        items: 5
      }
    },
  }
}
