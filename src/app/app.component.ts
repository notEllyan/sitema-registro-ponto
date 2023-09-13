import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sistema-registro-ponto';
  password: string = ''; //Variável para armazenar a senha
  login: string=''; //Variável para armazenar o usuário

  loginFailed: boolean = false; // Variável para controlar se o login falhou
  onLoginSubmit() {
    if (this.login === 'seuUsuario' && this.password === 'suaSenha') {
      // Autenticação bem-sucedida
      alert('Login bem-sucedido! Redirecionando...');
      // Implemente aqui o redirecionamento para a próxima página ou ação desejada
      this.router.navigate(['/adm-control']);
    } else {
      // Autenticação falhou
      this.loginFailed = true; // Define loginFailed como true
      // Você pode adicionar código adicional para lidar com falhas de autenticação
    }
  }
  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.zIndex = {
          modal: 1100,    // dialog, sidebar
          overlay: 1000,  // dropdown, overlaypanel
          menu: 1000,     // overlay menus
          tooltip: 1100   // tooltip
      };
      this.primengConfig.filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };
    }
}