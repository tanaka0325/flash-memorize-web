import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
