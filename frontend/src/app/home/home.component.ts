import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'da-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
