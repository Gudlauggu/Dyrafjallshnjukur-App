import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './videos/video/video.component';
import {VideoService} from './videos/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'video/:id',
    component: VideoDetailComponent },
  {
    path: 'videos',
    component: VideoListComponent,
    data: { title: 'Video List' }
  },
  { path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoListComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
