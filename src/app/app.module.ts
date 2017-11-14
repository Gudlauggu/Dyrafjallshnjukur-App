import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {VideoService} from './videos/shared/video.service';
import {HttpClientModule} from '@angular/common/http';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoCreateComponent } from './videos/video-create/video-create.component';

const appRoutes: Routes = [
  { path: 'video/:id',
    component: VideoDetailComponent},
  {
    path: 'videos',
    component: VideoListComponent,
    data: { title: 'Video List' }
  },
  {
  path: 'videos/create',
  component: VideoCreateComponent,
  },
  { path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
