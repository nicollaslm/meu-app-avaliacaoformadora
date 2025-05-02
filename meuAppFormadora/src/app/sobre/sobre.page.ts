import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: false,
})
export class SobrePage implements OnInit {

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    
  }

  voltar() {
    this.location.back(); 
  }

  irParaPiadas() {
    this.router.navigate(['/piadas']);
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }
}
