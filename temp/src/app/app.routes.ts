import { Routes } from '@angular/router';
import { ContributorsComponent } from './about/contributors/contributors.component';
import { PinComponent } from './about/pin/pin.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';

const title = (page: string) => `${page} - Digital Atlas`;

export const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        title: title('Intellectuals'),
    },
    // {
    //     path: 'intellectual/:id',
    //     component: IntellectualComponent,
    // },
    // {
    //     path: 'map',
    //     component: MapContainerComponent
    // },
    // {
    //     path: 'timeline',
    //     component: CompleteTimelineComponent,
    // },
    // {
    //     path: 'search',
    //     component: SearchComponent,
    // },
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
                title: title('About'),
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
