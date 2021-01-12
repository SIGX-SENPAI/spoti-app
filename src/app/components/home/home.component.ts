import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevascanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  // paises: any[] = [];
  constructor( private spotify: SpotifyService) {
    // private http: HttpClient
    // console.log('constructor home hecho');
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe( ( resp: any ) => {
    //   this.paises = resp;
    //   console.log(resp);
    //   }
    // );
    this.loading = true;
    this.error = false;
    this.spotify.getNewRelease().subscribe( (data: any) => {
      this.nuevascanciones = data;
      this.loading = false;
    }, ( errorServicio ) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
