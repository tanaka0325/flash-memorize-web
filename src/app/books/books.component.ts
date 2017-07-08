import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../types/Book';
import { books } from '../books.data';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books = books;
  }

  gotoCards(book_id): void {
    this.router.navigate(['/cards', book_id]);
    return;
  }

}
