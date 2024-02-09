import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/locations'

  getAllHousingLocations(): Observable<HousingLocation[] | []> {
    return this.http.get<HousingLocation[] | []>(this.baseUrl) ?? [];
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    return this.http.request<HousingLocation | undefined>('GET', `${this.baseUrl}/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,)
    }
  
}
