import { Component } from '@angular/core';
import { PiadaService } from 'src/app/piada.service';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piadas',
  templateUrl: './piadas.page.html',
  styleUrls: ['./piadas.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PiadasPage {
  piada: string = '';
  carregando: boolean = false;

  constructor(
    private piadaService: PiadaService,
    private router: Router
  ) {}

  gerarPiada() {
    this.carregando = true;
    this.piadaService.pegarPiada().subscribe(
      (res) => {
        this.carregando = false;
        if (res.type === 'single') {
          this.piada = res.joke || '';
        } else if (res.type === 'twopart') {
          this.piada = `${res.setup} - ${res.delivery}`;
        }
      },
      (error) => {
        this.carregando = false;
        this.piada = 'Erro ao carregar a piada. Tente novamente.';
        console.error('Erro ao buscar piada:', error);
      }
    );
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }

  irParaSobre() {
    this.router.navigate(['/sobre']);
  }
}


