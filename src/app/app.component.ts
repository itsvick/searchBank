import { Component, OnInit, OnChanges } from '@angular/core';
import { BanksSearchService } from './services/banks-search.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
    CITIES = ['BANGALORE', 'MUMBAI', 'CHENNAI'];
    city = 'BANGALORE';
    searchKey = '';
    searchResults = [];

    constructor(private bankSearch: BanksSearchService) {

    }

    ngOnChanges(changes) {
        console.log("Changes", changes);
    }

    ngOnInit() {
        this.changeCity();
    }


    changeCity(event?) {
        console.log("Event", event);
        this.bankSearch.getBanks(this.city).subscribe((response: any) => {
            console.log("Response", response);
            this.searchResults = response;
        });

    }
}
