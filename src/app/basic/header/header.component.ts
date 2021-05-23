import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  username: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.getItem('user') ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  logout(): void {
    this.resetLocalVariables();
    this.router.navigate(['/']);
    window.location.reload();
  }

  private resetLocalVariables(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
