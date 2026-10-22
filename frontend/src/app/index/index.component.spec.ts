import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { provideRouter } from '@angular/router';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IndexComponent],
            providers: [
                provideRouter([]),
                { provide: DataService, useClass: DataServiceMock },
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
