import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Gallery } from "./gallery";

import { environment } from '../environments/environment'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private apiUrl = "api.php"

  constructor(private http: Http) { }

  getGalleries(): Promise<Gallery[]> {

    console.log(environment);

    return Promise.resolve([])
      .then(response => response as Gallery[])
      .catch(this.handleError);

    // return this.http.get(this.apiUrl)
    //   .toPromise()
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
