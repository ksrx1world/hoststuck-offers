import { Component, OnInit } from '@angular/core';
import { Offers } from '../util/interface/offers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offersList : Offers[] = [
    {
      id: 1,
       hprovider: "Hoststuck",
        price: 5,
        ram: 1,
        cpu: 1,
        bandwidth: 1,
        url: "https://hoststuck.com",
        rating: "5"
    },
    {
      id: 2,
       hprovider: "gtrtr",
        price: 4,
        ram: 4,
        cpu: 2,
        bandwidth: 4,
        url: "https://hststuck.com",
        rating: "2"
    },
    {
      id: 3,
      hprovider: "ZIl",
        price: 2,
        ram: 7,
        cpu: 8,
        bandwidth: 5,
        url: "https://hoststuck.com",
        rating: "1"
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
