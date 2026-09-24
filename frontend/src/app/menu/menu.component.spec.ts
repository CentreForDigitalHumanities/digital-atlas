import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { MenuComponent } from './menu.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    declarations: [MenuComponent],
    imports: [NoopAnimationsModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
