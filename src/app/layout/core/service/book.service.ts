import {Injectable} from '@angular/core';
import {ServiceCommonConstants} from '../constants/service-common-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private readonly BOOK = '/book';
  // private readonly PUBLIC_BOOK = ServiceCommonConstants.PUBLIC_BOOK;
  // private readonly PRIVATE_BOOK = ServiceCommonConstants.PRIVATE_BOOK;

  constructor(private http: HttpClient) {
  }

  getBookById(id): Observable<any> {
    return this.http.get(`/book/read/${id}`);
  }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.BOOK}/read/all`);
  }

  // getAuthorByBookId(id): Observable<any> {
  //   return this.http.get(`${this.BOOK}/read/authorByBook/${id}`);
  // }

}
