import { Component, OnInit } from '@angular/core';
import { Author, CollectedData } from '../models/data';
import { DataService } from '../services/data.service';
import { VisualService } from '../services/visual.service';
import { IntellectualMenuComponent } from '../intellectual-menu/intellectual-menu.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
    selector: 'da-complete-timeline',
    templateUrl: './complete-timeline.component.html',
    styleUrls: ['./complete-timeline.component.scss'],
    standalone: true,
    imports: [IntellectualMenuComponent, TimelineComponent]
})
export class CompleteTimelineComponent implements OnInit {
    data?: CollectedData;
    icons: any;

    filteredData?: CollectedData;

    constructor(private dataService: DataService, private visualService: VisualService) {
    }

    ngOnInit(): void {
        this.dataService.getData().then(data => {
            this.data = data;
            this.filteredData = data;
        });
        this.icons = this.visualService.icons;
    }

    updateAuthors(authors: Author[]): void {
        if (this.data) {
            this.filteredData = this.dataService.filterData(
                this.data,
                authors,
                ['Life', 'Work', 'Legacy'],
                undefined,
            );
        }
    }

}
