import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksSearchComponent } from './books-seach/book-seach.component';
import { RouterModule } from '@angular/router';
import { BOOKS_ROUTES } from './books.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(BOOKS_ROUTES)
  ],
  declarations: [
    BooksSearchComponent
  ]
})
export class BooksModule { }
