import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualMenuComponent } from './intellectual-menu.component';
import { provideRouter } from '@angular/router';

describe('IntellectualMenuComponent', () => {
    let component: IntellectualMenuComponent;
    let fixture: ComponentFixture<IntellectualMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IntellectualMenuComponent],
            providers: [
                provideRouter([]),
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IntellectualMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
