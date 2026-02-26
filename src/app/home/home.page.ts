import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  projeto: any = [
    { descricao: "tomar banho", 
      local: "casa",
      hora_inicio: "19:00",
      hora_termino: "22:50",
      status: "em espera"
    },
    { descricao: "beber agua", 
      local: "casa",
      hora_inicio: "10:00",
      hora_termino: "10:02",
      status: "realizado"
    },
    { descricao: "lavar o cabelo", 
      local: "casa",
      hora_inicio: "9:00",
      hora_termino: "9:20",
      status: "realizado"
    },
    { descricao: "assistir tv!", 
      local: "casa",
      hora_inicio: "22:00",
      hora_termino: "00:30",
      status: "em espera"
    },
    

  ];


}
