import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.scss',
})

export class Labs {
  name = "Alejandra";
  edad = "23";
  email = "maria.montilladiaz@campusucc.edu.co";
  num1 = 20;
  num2 = 27;
  img1 = "https://scontent-bog2-1.cdninstagram.com/v/t51.82787-15/548055551_17881448769388046_5522630009884486305_n.webp?_nc_cat=102&ig_cache_key=MzcxOTQ1NDExNDg3NjMwOTEzNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuNzM2LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=Co-ynsVo9Q8Q7kNvwHcjnvE&_nc_oc=Adr6WN_F2zqH4lJB5iX1StFHlGGXW7nZu4JR0zMkHR0VB-NsTrNSUJPvElKtySo4DpA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_gid=-qsVcTcK9ePjsxf_WqjpDg&_nc_ss=7a22e&oh=00_AQKrpRazuZfmoHTCanjT9Q6TpLPCZ8y_Zmxe_3enHVTmoQ&oe=6A9E791C"
  img2 = "https://scontent-bog2-2.cdninstagram.com/v/t51.82787-15/545475220_17881448787388046_4688208831497869328_n.webp?_nc_cat=110&ig_cache_key=MzcxOTQ1NDExNDg3NjMxMjA1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuNzA1LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=VO4a2JUjJR4Q7kNvwEZhgn3&_nc_oc=Ados-TFEFF7ceg2t12r6EH_M30I4Dg2Ir7rF7inp2X9yG9NpS3NLHMo9-gZ1MSENlBA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-2.cdninstagram.com&_nc_gid=-qsVcTcK9ePjsxf_WqjpDg&_nc_ss=7a22e&oh=00_AQIdverZNZ_Zq8Gd_KRA4HQJCIepJSsMZZ09XjqKe1LSPA&oe=6A9E5238"
  
  
  onClick() {
    alert('¡Hola! Has hecho clic en el botón.');
  }

  Suma() {
    alert(this.num1 + this.num2);
  }
  nombreCampo = "Ciudad";
  placeholderCampo = "Ingrese su ciudad de nacimiento";

  recibirValor(event: any) {
    console.log(event.target.value);
  }
}
