import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {

    transform(items: any, searchKey: string, excludes: any = []): any {

        const toCompare = searchKey.toLowerCase().split(' ').filter(x => x.length);

        if (!toCompare.length) {
            return items;
        }

        const checkInside = (item: any, term: string) => {
            for (const property in item) {
                if (item[property] === null || item[property] === undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                } else if (item[property].toString().toLowerCase().includes(term)) {
                    return true;
                }
            }
            return false;
        };

        return toCompare.map((key) => {
            return items.filter((item) => {
                return checkInside(item, key.toLowerCase());
            });
        }).flat();
    }
}
