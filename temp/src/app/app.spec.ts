import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [provideRouter([])],
        })
            .compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', async () => {
        const fixture = TestBed.createComponent(App);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, temp');
    });


    it(`should have as title 'digital-atlas'`, () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual(`digital-atlas`);
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.navbar-brand .navbar-item').textContent).toContain('Digital Atlas');
    });
});
