import { Component, OnInit } from '@angular/core';

import { Card } from '../types/Card';
import { cards } from '../cards.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor() { }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cards = cards;
  }

}
