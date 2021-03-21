import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  products: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllProducts()
      .then(response => {
        console.log(response);
        this.products = response;

      })
      .catch(error => console.log(error));

  }

}
