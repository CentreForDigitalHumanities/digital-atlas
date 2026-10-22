import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardSelectorComponent } from './event-card-selector.component';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';

describe('EventCardSelectorComponent', () => {
    let component: EventCardSelectorComponent;
    let fixture: ComponentFixture<EventCardSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EventCardSelectorComponent],
            providers: [
                { provide: DataService, useClass: DataServiceMock },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventCardSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
