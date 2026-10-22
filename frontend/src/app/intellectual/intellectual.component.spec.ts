import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntellectualComponent } from './intellectual.component';
import { provideRouter } from '@angular/router';
import { DataService } from '../services/data.service';
import { DataServiceMock } from '../services/data.service.mock';

describe('IntellectualComponent', () => {
    let component: IntellectualComponent;
    let fixture: ComponentFixture<IntellectualComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IntellectualComponent],
            providers: [
                provideRouter([]),
                { provide: DataService, useClass: DataServiceMock },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IntellectualComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
