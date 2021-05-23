import { Component, OnInit } from '@angular/core';
import {Author} from '../../core/model/Author';
import {AuthorService} from '../../core/service/author.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  id: number;
  author: Author;

  constructor(private authorService: AuthorService,
              private activateRoute: ActivatedRoute) {
    this.id = parseInt(this.activateRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.authorService.getAuthorById(this.id).subscribe(res => {
      this.author = res;
      console.log(this.author);
    });
  }

}
