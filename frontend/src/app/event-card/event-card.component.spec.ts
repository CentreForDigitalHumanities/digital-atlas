import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';

describe('EventCardComponent', () => {
    let component: EventCardComponent;
    let fixture: ComponentFixture<EventCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EventCardComponent],
            providers: [{provide: DataService, useClass: DataServiceMock}],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
