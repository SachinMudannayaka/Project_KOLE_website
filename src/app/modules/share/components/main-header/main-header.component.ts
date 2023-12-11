import {Component, Injectable, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Home',
    children: [{name: 'Original Home'}, {name: 'Catalogue Home'}, {name: 'Slider Showcase'},{name: 'Shop Home'},{name: 'Carousel Home'},{name: 'Interactive Catalogue'},{name: 'Masonry Shop'},{name: 'Parallax Showcase'},{name: 'Portfolio Pinterest'},{name: 'Modelling Agency'},{name: 'Blog with Sidebar'},{name: 'Blog Centered'},{name: 'Left Menu'},{name: 'Landing Page'}],
  },
  {
    name: 'Pages',
    children: [{name: 'About me'}, {name: 'About us'}, {name: 'Clients & Brands'},{name: 'Services'},{name: 'Faq & Help'},{name: 'Contact us'}],
  },
  {
    name: 'Portfolio',
    children: [
      {
        name: 'Standard Style',
        children: [{name: 'Two Columns Grid'}, {name: 'Three Columns Grid'},{name: 'Four Columns Grid'},{name: 'Five Columns Grid'},{name: 'Six Columns Grid'}],
      },
      {
        name: 'Gallery Style',
        children: [{name: 'Two Columns Grid'}, {name: 'Three Columns Grid'},{name: 'Four Columns Grid'},{name: 'Five Columns Grid'},{name: 'Six Columns Grid'}],
      },
      {
        name: 'Masonry and Pinterest',
        children: [{name: 'Masonry Grid'}, {name: 'Masonry Wide'}, {name: 'Pinterest Three Columns'}, {name: 'Pinterest Four Columns'},{name: 'Pinterest Five Columns'}],
      },
      {
        name: 'Portfolio Single',
        children: [{name: 'Portfolio Big Slider'}, {name: 'Portfolio Gallery'}, {name: 'Portfolio Small Slider'}, {name: 'Portfolio Big Images'}, {name: 'Portfolio Small Images'}],
      }
    ],
  },
  {
    name: 'Blog',
    children: [{name: 'Blog Centered'}, {name: 'Centered with Sidebar'}, {name: 'Whole Post Layout'},{name: 'Standard With Sidebar'},{name: 'Blog Masonry'},{name: 'Single Post',children: [{name:'Standard Post'},{name:'Gallery Post'},{name:'Quote Post'},{name:'Link Post'},{name:'Audio Post'},{name:'Video Post'}]}],
  },
  {
    name: 'Shop',
    children: [{name: 'Standard Layouts',children: [{name:'Shop with Sidebar'},{name:'Shop Masonry'},{name:'Product Category'},{name:'Product Cart'},{name:'Single Product'}]},
      {name: 'More Layouts',children: [{name:'Two Columns'},{name:'Three Columns'},{name:'Four Columns'},{name:'Five Columns'},{name:'Four Columns Wide'},{name:'Five Columns Wide'}]},
      {name: 'Recent Product'}, {name: 'Popular Products'}],
  },
  {
    name: 'Elements',
    children: [
      {name: 'Kole Specials',children: [{name:'Process with Arrows'},{name:'Interactive Banners'},{name:'Service Tables Images'},{name:'Portfolio Showcase'},{name:'Service Tables Icon'},{name:'Testimonial Standards'},{name:'Testimonial Box'},{name:'Image Carousel'},{name:'Portfolio Slider'},{name:'Blog Carousel'},{name:'Portfolio Slider'},{name:'Blog Carousel'},{name:'Video Presentation'}]},
      {name: 'Standards',children: [{name:'Team'},{name:'Buttons'},{name:'Tabs'},{name:'Accordions'},{name:'Clients'},{name:'Clients Carousel'},{name:'Blog Posts'},{name:'Pricing Tables'},{name:'Google Maps'},{name:'Flex Slider'},{name:'Gallery Grayscale'}]},
      {name: 'Typographic',children: [{name:'Headlines'},{name:'Dropcaps'},{name:'Separators'},{name:'Social Icons'},{name:'Icon With Text'},{name:'List with Icons'}]},
      {name: 'Infographics',children: [{name:'Progress Bars'},{name:'Progress Standards'},{name:'Counters'},{name:'Pie Charts'},{name:'Icon Pie Charts'},{name:'Call to Action'},{name:'Message Boxes'},{name:'Contact Form 7'}]},
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  animations: [
    trigger('navSlider1', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.4s')
      ]),
      transition('* => void', [
        animate('0.3s', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('navSlider', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('0.4s')
      ]),
      transition('* => void', [
        animate('0.3s', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]


})
export class MainHeaderComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;




  ngOnInit(): void {

  }



//navigation
  navSliderState: boolean = false;
  manageNavBar() {
    this.navSliderState = !this.navSliderState;
  }

  navSliderState1: boolean = false;
  manageNavBar1() {
    this.navSliderState1 = !this.navSliderState1;
  }
//navigation


}
