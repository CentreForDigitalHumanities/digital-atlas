import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'da-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class MenuComponent {
    burgerActive = false;

    constructor() { }

    toggleBurger(): void {
        this.burgerActive = !this.burgerActive;
    }
}
