import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Author, CollectedData, Picture, } from '../models/data';
import { DataService } from '../services/data.service';
import { VisualService } from '../services/visual.service';
import { Title } from '@angular/platform-browser';
import { formatTitle } from '../title';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
    selector: 'da-intellectual',
    templateUrl: './intellectual.component.html',
    styleUrls: ['./intellectual.component.scss'],
    standalone: true,
    imports: [TimelineComponent],
})
export class IntellectualComponent implements OnInit, OnDestroy {
    private data?: CollectedData;
    author = signal<Author | undefined>(undefined);
    pictureFile = signal<string | undefined>(undefined);
    picture = signal<Picture | undefined>(undefined);
    subscription = new Subscription();

    icons: any;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private visualService: VisualService,
        private titleService: Title,
    ) {
        this.icons = this.visualService.icons;
    }

    ngOnInit(): void {
        this.subscription.add(
            this.route.params.subscribe(params =>
                this.loadData(parseInt(params['id'], 10))));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private async loadData(id: number): Promise<void> {
        this.data = await this.dataService.getData();
        const author = this.dataService.findAuthorById(id, this.data.authors);
        this.author.set(author);
        if (author) {
            const picture = this.visualService.getPicture(author, this.data);
            this.picture.set(picture);
            if (picture) {
                this.pictureFile.set(this.visualService.pictureSource(picture));
            }
            this.titleService.setTitle(formatTitle(author.name));
        }
    }

}
