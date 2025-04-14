// Project: Rick and Morty API
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {
  private defaultUrl = 'https://rickandmortyapi.com/api/character';
  private nextUrl: string = '';
  private prevUrl: string = '';

  constructor(private http: HttpClient) {}

  getNextPage(): Observable<ApiResponse> {
    const url = this.nextUrl || this.defaultUrl;
    return this.http.get<ApiResponse>(url);
  }

  getPreviousPage(): Observable<ApiResponse> {
    const url = this.prevUrl || this.defaultUrl;
    return this.http.get<ApiResponse>(url);
  }

  setPagination(info: any) {
    this.nextUrl = info.next || '';
    this.prevUrl = info.prev || '';
  }
}
