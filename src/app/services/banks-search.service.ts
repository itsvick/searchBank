import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BanksSearchService {

    constructor(private http: HttpClient) { }

    getBanks(city) {
        return this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`);
    }
}
