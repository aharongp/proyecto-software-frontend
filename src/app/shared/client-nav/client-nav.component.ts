import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
@Component({
  selector: 'app-client-nav',
  templateUrl: './client-nav.component.html',
  styleUrls: ['./client-nav.component.css']
})
export class ClientNavComponent {
  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public location: Location, private router: Router) {
  }

  userId: any
  userName: any


  ngOnInit() {

    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('userName');

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
         if (event.url != this.lastPoppedUrl)
             this.yScrollStack.push(window.scrollY);
     } else if (event instanceof NavigationEnd) {
         if (event.url == this.lastPoppedUrl) {
             this.lastPoppedUrl = undefined;
             window.scrollTo(0, this.yScrollStack.pop());
         } else
             window.scrollTo(0, 0);
     }
   });
   this.location.subscribe((ev:PopStateEvent) => {
       this.lastPoppedUrl = ev.url;
   });
  }

  isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '#/home' ) {
          return true;
      }
      else {
          return false;
      }
  }
  isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '#/documentation' ) {
          return true;
      }
      else {
          return false;
      }
  }
}
