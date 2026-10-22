import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTimelineComponent } from './complete-timeline.component';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';
import { provideRouter } from '@angular/router';

describe('CompleteTimelineComponent', () => {
    let component: CompleteTimelineComponent;
    let fixture: ComponentFixture<CompleteTimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CompleteTimelineComponent],
            providers: [
                { provide: DataService, useClass: DataServiceMock },
                provideRouter([]),
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CompleteTimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
