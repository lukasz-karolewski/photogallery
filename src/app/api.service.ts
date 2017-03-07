import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Gallery } from "./gallery";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private apiUrl = "api.php"

  constructor(private http: Http) { }

  getGalleries(): Promise<Gallery[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Gallery[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
