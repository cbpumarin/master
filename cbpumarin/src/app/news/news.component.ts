import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  twitter = 'Twitter';
  facebook = 'Facebook';
  instagram = 'Instagram';


  constructor() { }

  ngOnInit() {

  }

}
