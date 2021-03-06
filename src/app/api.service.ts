import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Gallery} from './model/gallery';
import {GALLERIES_MOCK} from './model/gallery-mock';

import {environment} from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private apiUrl = 'api.php';

  constructor(private http: Http) {
  }

  getGalleries(): Promise<Gallery[]> {
    if (environment.production) {
      return this.http.get(this.apiUrl)
        .toPromise()
        .then((response) => response.json())
        .catch(this.handleError);
    } else {
      return Promise.resolve(GALLERIES_MOCK)
        .then(response => response as Gallery[])
        .catch(this.handleError);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
