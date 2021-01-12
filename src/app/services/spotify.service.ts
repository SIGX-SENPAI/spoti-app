import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private  http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAn4_hOSW4E2vtbp4LuMxY5KPybR0-rx_Ufn0t1gKH_R_dYwjJ_8Hpbx8cTgywUcruvMBpdsJ5MW80dSAhlpZTehrEMwa3b0jOEu4aX9tzQ49BYqMKi7rOB_LiqWKDYXfYwUUgOQ1q5'
    });
    return this.http.get(url, { headers });
  }
  getNewRelease() {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQC8v2le1lWnSMkmJDFpo5Gt1KM60zKNqTXSh9vW2DEe5btF24dJyXbGEil_L_hA7KOr86Y3z45trezje8PxDRQqP9C7x37jSKJX2ZFC9GMC6I5wd1rJPmpKhq2-4z7XoRV7PSsNjhjq'
    // });


    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items ));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data['artists'].items ));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map( data => data['tracks']));
  }
}
