import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  artist: any;
  search: any;
  searchResults: any;
  artists: any;
  artistData = [];
  mode = 'search';
  albums: any;
  top: any;

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  searchArtist(): void {
    this.mode = 'search';
    if (this.search.length >= 4) {
      this.api.get(`/search/artist?q=${this.search}`).then(response => {
        console.log(response);
        const {data} = response;
        this.artists = data;
      });
    } else {
      this.artists = [];
    }
  }

  viewArtist(artist: any): void {
    this.mode = 'artist';
    this.artist = artist;
    this.getTop(artist.id);
    this.getAlbums(artist.id);
  }

  getTop(id: string): void {
    this.api.get(`/artist/${id}/top`).then(response => {
      console.log('Top', response);
      const {data} = response;
      this.top = data;
    });
  }

  getAlbums(id: string): void {
    this.api.get(`/artist/${id}/albums`).then(response => {
      console.log('Albums', response);
      const {data} = response;
      this.albums = data;
    });
  }
}
