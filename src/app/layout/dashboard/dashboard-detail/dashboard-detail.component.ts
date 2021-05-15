import { Component, OnInit } from '@angular/core';
import {Book} from '../../core/model/Book';
import {BookService} from '../../core/service/book.service';
import {ActivatedRoute, Routes} from '@angular/router';
import {Author} from '../../core/model/Author';
import {AuthorService} from '../../core/service/author.service';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

  id: number;
  book: Book;
  author: Author;

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = parseInt(this.activateRoute.snapshot.params['id']);

    this.bookService.getBookById(this.id).subscribe(resBook => {
      this.book = resBook;
      console.log(this.book);
      this.authorService.getAuthorById(this.book.authorId).subscribe(resAuthor => {
        this.author = resAuthor;
        console.log(this.author);
      });
    });

    // this.bookService.getAuthorByBookId(this.id).subscribe(resAuthor => {
    //   this.author = resAuthor;
    // });
  }

}
