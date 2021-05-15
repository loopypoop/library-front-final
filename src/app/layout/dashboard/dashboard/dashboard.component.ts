import { Component, OnInit } from '@angular/core';
import {BookService} from '../../core/service/book.service';
import {Book} from '../../core/model/Book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: number;
  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(res => {
      this.books = res;
      console.log(this.books);
    });
  }

}
