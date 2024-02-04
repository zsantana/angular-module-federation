import { Routes } from '@angular/router';
import { BooksSearchComponent } from './books-seach/book-seach.component';

export const BOOKS_ROUTES: Routes = [
    {
      path: 'book-search',
      component: BooksSearchComponent
    }
];
