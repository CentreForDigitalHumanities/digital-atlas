import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'da-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class MenuComponent implements OnInit {
    burgerShow = 'hide';
    burgerActive = false;

    constructor(private ngZone: NgZone) { }

    ngOnInit(): void {
    }

    toggleBurger(): void {
        if (!this.burgerActive) {
            // make it active to make it visible (add a class to
            // override it being hidden for smaller screens)
            this.burgerActive = true;
            // immediately hide it
            this.burgerShow = 'hide';
            setTimeout(() => {
                this.ngZone.run(() => {
                    // trigger the transition
                    this.burgerShow = 'show';
                });
            });
            return;
        }

        this.burgerShow = this.burgerShow === 'show' ? 'hide' : 'show';
    }
}
