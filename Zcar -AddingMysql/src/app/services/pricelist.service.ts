import { Injectable } from '@angular/core';
import{ Product } from '../product';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {
  API_PATH = 'http://localhost/Angular_WDPF/Zcar/api/';

  constructor(private httpClient:HttpClient) { }

  readProducts():Observable<Product[]>{
   return this.httpClient.get<Product[]>((`${this.API_PATH}/index.php`));
  }
}
