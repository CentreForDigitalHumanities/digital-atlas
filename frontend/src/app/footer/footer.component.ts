import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'da-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink],
})
export class FooterComponent {
    environment = environment;

    @Input()
    compact = false;

    constructor() { }

}
