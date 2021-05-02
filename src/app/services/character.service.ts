import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private endpoint = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.endpoint).pipe(map((data) => data));
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(this.endpoint + id).pipe(map((data) => data));
  }
}
