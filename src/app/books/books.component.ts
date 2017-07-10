import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../types/Book';
import { books } from '../books.data';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.apiService.getBooks()
      .then(books => this.books = books)
  }

  gotoBook(book_id): void {
    this.router.navigate(['/books', book_id]);
    return;
  }

}
