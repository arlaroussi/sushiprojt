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
export class ApiService {

  public boxs: StructureBox[] = [];
  apiBoxesUrl = environment.apiBoxesUrl;


  constructor(private http: HttpClient) {}

  @Output() apiService = new EventEmitter<StructureBox>()

  
  getBoxes(): Observable<SushiAPI> {
    return this.http.get<SushiAPI>(this.apiBoxesUrl);
  }
}


  // getBoxById(id: number): Observable<Box> {
  //   const url = `${this.apiUrl}/boxes/${id}`;
  //   return this.http.get<Box>(url);
  // }
  