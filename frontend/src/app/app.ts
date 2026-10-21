import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { Subscription } from 'rxjs';
import { VisualService } from './services/visual.service';

@Component({
    imports: [RouterOutlet, MenuComponent, FooterComponent],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})
export class App {
    private subscription = new Subscription();
    title = 'digital-atlas';
    compactFooter = false;

    main = viewChild.required<ElementRef<HTMLElement>>('main');

    constructor(private visualService: VisualService, router: Router) {
        this.subscription.add(router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects?.split(/[\/#\?]/)[1] === 'map') {
                    this.compactFooter = true;
                } else {
                    this.compactFooter = false;
                }
            }
        }));
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.main) {
                this.visualService.setMainHeight(this.main().nativeElement.clientHeight);
            }
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
