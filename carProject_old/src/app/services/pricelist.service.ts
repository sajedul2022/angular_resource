import { Injectable } from '@angular/core';
import { Product } from 'src/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {

  API_PATH = 'http://localhost/wdpf-51/me/f_s_w_d/angular/carProject/api';

  constructor(private httpClient: HttpClient) {}

  readProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.API_PATH}/index.php`);
  }
}

