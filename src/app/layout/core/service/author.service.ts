import {Injectable} from '@angular/core';
import {ServiceCommonConstants} from '../constants/service-common-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  // private readonly PUBLIC_AUTHOR = ServiceCommonConstants.PUBLIC_AUTHOR;
  // private readonly PRIVATE_AUTHOR = ServiceCommonConstants.PRIVATE_AUTHOR;

  constructor(private http: HttpClient) {
  }

  getAuthorById(id): Observable<any> {
    return this.http.get(`/author/read/${id}`);
  }

}
