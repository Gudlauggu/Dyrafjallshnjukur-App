import { Component, OnInit } from '@angular/core';
import {Video} from '../shared/video.model';
import {VideoService} from '../shared/video.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[];
  videoToDelete: Video;
  constructor(private videoService: VideoService,
             private router: Router) {

  }

  ngOnInit() {
    this.videoService.get().subscribe(
      videos => {
        this.videos = videos;
      }
    );
  }

  details(video: Video) {
    this.router.navigateByUrl('/video/' + video.id);
  }

  delete(video: Video, $event) {
    console.log('delete clicked');
    this.videoToDelete = video;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.videoToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.videoService.delete(this.videoToDelete.id)
      .switchMap(video => this.videoService.get())
        .subscribe(
          videos => {
            this.videos = videos
          }
        );
    $event.stopPropagation();
  }

  createVideo() {
    this.router.navigateByUrl('/videos/create');
  }
}
