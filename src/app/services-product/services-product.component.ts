import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-product',
  templateUrl: './services-product.component.html',
  styleUrls: ['./services-product.component.css']
})
export class ServicesProductComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) {
          element.scrollIntoView();
        }
      }
    });

  }

}
