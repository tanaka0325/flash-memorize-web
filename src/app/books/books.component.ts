import { Component, OnInit } from '@angular/core';

import { Book } from '../types/Book';
import { books } from '../books.data';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books = books;
  }

}
