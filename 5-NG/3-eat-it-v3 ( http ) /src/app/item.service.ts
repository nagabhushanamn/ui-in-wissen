import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items = [
    // {
    //   id: 1,
    //   name: 'Veg',
    //   canBuy: true,
    //   imgPath: 'assets/veg.png',
    //   makeDate: Date.now(),
    //   price: 100.00,
    //   discount: 100.00,
    //   description: 'free'
    // },
    // {
    //   id: 2,
    //   name: 'Non-Veg',
    //   canBuy: true,
    //   imgPath: 'assets/non-veg.png',
    //   makeDate: Date.now(),
    //   price: 100.00,
    //   discount: 100.00,
    //   description: 'free'
    // }
  ]

  reviews = {
    // 1: [
    //   { author: 'Nag@mail.com', stars: 3, body: 'veg is good' }
    // ],
    // 2: [
    //   { author: 'Nag@mail.com', stars: 1, body: 'non-veg is bad' }
    // ]
  }

  constructor(private httpClient: HttpClient) { }

  apiURL = "http://localhost:8181/api/items";

  getItems() {
    return this.httpClient.get(this.apiURL)
      .pipe(tap((items: any) => {
        this.items = items;
      }))
  }
  getReviews(itemId) {
    return this.httpClient.get(this.apiURL + `/${itemId}/reviews`)
      .pipe(tap((reviews: any) => {
        this.reviews[itemId] = reviews;
      }))
  }

}
