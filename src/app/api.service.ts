import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

  constructor(private http: HttpClient) {
  }

  async get(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + endpoint, {},
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        console.log('ERROR ', endpoint, err);
        reject(err);
      });
    });
  }

}
