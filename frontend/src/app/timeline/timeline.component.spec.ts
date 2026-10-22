import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TimelineComponent } from './timeline.component';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';

describe('TimelineComponent', () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TimelineComponent, FontAwesomeModule],
            providers: [
                { provide: DataService, useClass: DataServiceMock },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('authors', []);
        fixture.componentRef.setInput('narrowCardColumn', false);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
