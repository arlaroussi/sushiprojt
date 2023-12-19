import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StructureBox } from '../models/StructureBox';
import { SushiAPI } from '../models/SushiAPI';
import { Box } from '../models/Box';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManagerMenuService {
  apiBoxesUrl = environment.apiBoxesUrl;

  constructor(private http: HttpClient) {}

  getBoxes(): Observable<any> {
    return this.http.get(environment.apiBoxesUrl)
  }

} 