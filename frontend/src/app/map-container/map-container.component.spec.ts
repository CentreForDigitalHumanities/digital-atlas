import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContainerComponent } from './map-container.component';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';
import { provideRouter } from '@angular/router';

describe('MapContainerComponent', () => {
    let component: MapContainerComponent;
    let fixture: ComponentFixture<MapContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MapContainerComponent],
            providers: [
                { provide: DataService, useClass: DataServiceMock },
                provideRouter([]),
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MapContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
