import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
date: Date = new Date();
user: User;

  constructor(
    private authServie: AuthService,
              private router: Router
              ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
  onLogOut(){
this.authServie.logout();
this.router.navigate(['/login']);
  }
}