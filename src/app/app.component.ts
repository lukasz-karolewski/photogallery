import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Gallery} from './model/gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() search = '';
  originalGalleries: Gallery[];
  galleries: Gallery[];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getGalleries()
      .then((galleries) => {
        this.galleries = this.originalGalleries = galleries;
      });
  }

  onSearch(): void {
    if (this.originalGalleries) {
      this.galleries = this.originalGalleries.filter((gallery) => gallery.name.toLowerCase().includes(this.search.toLowerCase()) || gallery.date.includes(this.search));
    }
  }
}
