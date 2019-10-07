import { Component, OnInit, OnChanges } from '@angular/core';
import { BanksSearchService } from './services/banks-search.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    CITIES = ['BANGALORE', 'MUMBAI', 'CHENNAI'];
    city = 'BANGALORE';
    searchKey = '';
    searchResults = [];
    loading = false;

    constructor(private bankSearch: BanksSearchService) { }

    ngOnInit() {
        this.changeCity();
    }

    changeCity(event?) {
        this.loading = true;
        this.bankSearch.getBanks(this.city).subscribe((response: any) => {
            this.loading = false;
            this.searchResults = response;
        });

    }
}
