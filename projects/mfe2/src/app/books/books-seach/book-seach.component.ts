import {Component} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-book-seach',
  templateUrl: './book-seach.component.html'
})
export class BooksSearchComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }
}
