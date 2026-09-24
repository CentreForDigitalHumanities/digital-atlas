import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { Legacy, LifeEvent, Work } from '../models/data';

@Injectable({
    providedIn: 'root'
})
export class DatesService {

    constructor() { }

    getStartYear(event: LifeEvent|Work|Legacy): number {
        if (event.startDate?.year) {
            return event.startDate.year;
        }
        if (event.date?.year) {
            return event.date.year;
        }
        return 0;

    }

    getEndYear(event: LifeEvent|Work|Legacy): number {
        if (event.endDate?.year) {
            return event.endDate.year;
        }
        if (event.date?.year) {
            return event.date.year;
        }
        return 2022;
    }

    formatEventDate(event: LifeEvent|Work|Legacy): string {
        if (event.date) {
            return event.date.toString();
        }
        if (event.startDate && event.endDate) {
            return `${event.startDate.toString()} to ${event.endDate.toString()}`;
        }
        if (event.startDate) {
            return `since ${event.startDate.toString()}`;
        }
        if (event.endDate) {
            return `until ${event.endDate.toString()}`;
        }
        return '';
    }

    eventInDateRange(event: LifeEvent|Work|Legacy, dateRange: number[]|undefined): boolean {
        if (dateRange !== undefined) {
            const [minYear, maxYear] = dateRange;
            const startYear = this.getStartYear(event);
            const endYear = this.getEndYear(event);
            return startYear <= maxYear && endYear >= minYear;
        }
        return true;
    }

}
