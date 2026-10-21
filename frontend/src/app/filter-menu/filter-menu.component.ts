import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { VisualService } from '../services/visual.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'da-filter-menu',
    templateUrl: './filter-menu.component.html',
    styleUrls: ['./filter-menu.component.scss'],
    standalone: true,
    imports: [
        CommonModule, FormsModule, FontAwesomeModule, CheckboxesComponent,
        MatSliderModule, MatTooltipModule,
    ]
})
export class FilterMenuComponent implements OnChanges {
    faArrowLeft = faArrowLeft;
    faArrowRight = faArrowRight;

    @Input() aboveFooter = false;

    categories = ['Life', 'Work', 'Legacy'];
    eventIcons: VisualService['icons'][keyof VisualService['icons']][];

    @Input() dateRange?: [number, number];
    minYear?: number;
    maxYear?: number;

    selectedCategories: string[] = [];

    selectedMin?: number;
    selectedMax?: number;

    @Output() filter = new EventEmitter<{
        categories: string[],
        dateRange?: [number, number],
    }>();

    @Input() showPrevButton = false;
    @Input() showNextButton = false;

    @Output() jump = new EventEmitter<'previous'|'next'>();

    constructor(private visualService: VisualService) {
        this.eventIcons = [
            visualService.icons['life event'],
            visualService.icons.work,
            visualService.icons.legacy];
    }

    ngOnChanges(): void {
        if (this.dateRange) {
            [this.minYear, this.maxYear] = this.dateRange;
            [this.selectedMin, this.selectedMax] = this.dateRange;
        }
    }

    emitFilters(): void {
        this.filter.emit({
            categories: this.selectedCategories,
            dateRange: [this.selectedMin ?? NaN, this.selectedMax ?? NaN],
        });
    }

    triggerJump(direction: 'previous'|'next'): void {
        this.jump.emit(direction);
    }
}
