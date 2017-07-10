import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Card } from '../types/Card';
import { cards } from '../cards.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCards(+params['id'])
    });
  }

  getCards(book_id): void {
    this.cards = cards.filter( card => card.book_id === book_id );
  }

}
