import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { provideRouter } from '@angular/router';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IndexComponent],
            providers: [
                provideRouter([]),
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
