import { Routes } from '@angular/router';
import { ContributorsComponent } from './about/contributors/contributors.component';
import { PinComponent } from './about/pin/pin.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { baseTitle, formatTitle } from './title';
import { IntellectualComponent } from './intellectual/intellectual.component';
import { SearchComponent } from './search/search.component';


export const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        title: formatTitle('Intellectuals'),
    },
    {
        path: 'intellectual/:id',
        component: IntellectualComponent,
        title: baseTitle,
    },
    // {
    //     path: 'map',
    //     component: MapContainerComponent
    // },
    // {
    //     path: 'timeline',
    //     component: CompleteTimelineComponent,
    // },
    {
        path: 'search',
        component: SearchComponent,
        title: formatTitle('Search'),
    },
    {
        path: 'about',
        children: [
            {
                path: 'contributors',
                component: ContributorsComponent,
            },
            {
                path: 'PIN',
                component: PinComponent,
            },
            {
                path: '',
                title: formatTitle('About'),
                component: AboutComponent,
            }
        ]
    },
    {
        path: '',
        redirectTo: '/map',
        pathMatch: 'full'
    }
];
