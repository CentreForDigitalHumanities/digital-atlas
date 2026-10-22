import { Component, OnInit, signal } from '@angular/core';
import * as _ from 'underscore';
import { Author, CollectedData } from '../models/data';
import { DataService } from '../services/data.service';
import { VisualService } from '../services/visual.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'da-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    imports: [RouterLink],
})
export class IndexComponent implements OnInit {
    authors = signal<CollectedData['authors'] | undefined>(undefined);
    pictures = signal<{ [name: string]: string } | undefined>(undefined);;

    constructor(private dataService: DataService, private visualService: VisualService) {
    }

    async ngOnInit(): Promise<void> {
        const data = await this.dataService.getData();
        this.authors.set(data.authors);
        this.pictures.set(this.getPictures(data, data.authors));
    }

    getPictures(data: CollectedData, authors: Author[]): { [name: string]: string } {
        const pictures: any = {};
        authors.forEach(author => {
            const picture = this.visualService.getPictureSource(author, data);
            pictures[author.name] = picture;
        });
        return pictures;
    }
}
