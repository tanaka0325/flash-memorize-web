import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './types/Book';

@Injectable()
export class ApiService {
  private url = 'http://localhost:8888';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getBooks(): Promise<Book[]> {
    return this.http.get(`${this.url}/books`)
      .toPromise()
      .then(res => {
        return res.json() as Book[]
      })
      .catch(this.handleError);
  }

  getBook(book_id: number): Promise<Book> {
    return this.http.get(`${this.url}/books/${book_id}`)
      .toPromise()
      .then(res => {
        return res.json() as Book
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

