import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Gallery} from './model/gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zdjecia';
  galleries: Gallery[];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getGalleries()
      .then((galleries) => {
        this.galleries = galleries;
      });
  }
}
