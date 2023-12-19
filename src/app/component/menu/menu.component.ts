import { Component, OnInit } from '@angular/core';
import { ManagerMenuService } from 'src/app/service/manager-menu.service';
import { StructureBox } from 'src/app/models/StructureBox';
import { environment } from 'src/environments/environment';
import { Box } from 'src/app/models/Box';
import { HttpClient } from '@angular/common/http';
import { ManagerPanierService } from 'src/app/service/manager-panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  boxs: StructureBox[] = []; 
  apiBoxesUrl = environment.apiBoxesUrl;
  apiImageUrl = environment.apiImageUrl

  constructor(private managerMenuService: ManagerMenuService, private http: HttpClient, private managerPanierService: ManagerPanierService) {
  }

  ngOnInit(){
    this.managerMenuService.getBoxes().subscribe({
      next:(boxs: StructureBox[]) => {
        this.boxs = boxs
      }, 
    })
  }

  ajouterBox(box: Box){
    this.managerPanierService.ajouterBoxAuPanier(box);
  } 
}


