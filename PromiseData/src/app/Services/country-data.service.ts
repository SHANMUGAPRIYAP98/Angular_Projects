import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../Classes/country';
import { Coun } from '../coun';
@Injectable({
  providedIn: 'root'
})
export class CountryDataService {
  cid: number;
  cusType: string;
  creditType: string;
  curr: string;
  counName: string;
  cityName: string;
  dbUrl="  http://localhost:3000/country";
  con:Country[];
  constructor(private http:HttpClient) { }
  
  setCountryData(con):Promise<Country>
  {
    return this.http.post<Country>(this.dbUrl,con).toPromise();
  }
  getCountryData()
  {
     return this.http.get<Country[]>(this.dbUrl)
  }
  getConData():Observable<Country[]>
  {
    return this.http.get<Country[]>(this.dbUrl);
  }
  getCounData(cid):Promise<Country[]>
  {
    return this.http.get<Country[]>(`${this.dbUrl}/${cid}`).toPromise();
  }
}
