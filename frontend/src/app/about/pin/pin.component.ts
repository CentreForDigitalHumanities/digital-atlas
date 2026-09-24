import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
    selector: 'da-pin',
    templateUrl: './pin.component.html',
    styleUrls: ['./pin.component.scss'],
    standalone: false
})
export class PinComponent implements OnInit {

    constructor(titleService: TitleService) {
        titleService.setTitle('PIN');
    }

    ngOnInit(): void {
    }

}
