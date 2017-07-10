import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Book } from '../types/Book';
import { books } from '../books.data';
import { Card } from '../types/Card';
import { cards } from '../cards.data';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBook(+params['id'])
    });

  }

  getBook(book_id: number): void {
    this.apiService.getBook(book_id)
      .then(book => {
        this.book = book
      })
  }

}
