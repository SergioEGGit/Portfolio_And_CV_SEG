import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'seg-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  isSound: boolean;
 audio = new Audio();
public activeLang = 'ES';
 Lang = "Español";
 t_Title_Me:string = "";
 t_Title_Ref:string = "";
 t_Email:string = "";
 t_Phone:string = "";
 t_Message:string = "";

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }


  ngOnInit(): void {
     this.isSound = false;
     
  }

ChangeCV(): string 
{

	if(this.activeLang == "ES") 
	{
	
		return "https://drive.google.com/file/d/1sVkaTxwdsxFLfd_pgkRlp8q0djH4geJJ/view?usp=sharing";			

	}
 	else if(this.activeLang == "EN")
	{

		return "https://drive.google.com/file/d/1eh2nnbsv-926JzgEb_rZRYw7IhOZQenV/view?usp=sharing";	

	}
	else 
	{

		return "";

	}	

}

Contact(email: string, phone: string, type: string):void {

	if(this.activeLang=="ES") 
	{

		this.t_Title_Me = "Contáctame!";
		this.t_Title_Ref = "Contacto De Refencia";		
		this.t_Email = "Correo Electrónico:";
		this.t_Phone = "Teléfono:";	
		this.t_Message = "¿Quieres enviar un correo electrónico?";

	}
	else if(this.activeLang == "EN")
	{

		this.t_Title_Me = "Contact Me!";
		this.t_Title_Ref = "Reference Contact";		
		this.t_Email = "Email:";
		this.t_Phone = "Phone:";	
		this.t_Message = "Do you want to send an email?";		

	}

	if(type == "ti") {

		Swal.fire({
  			title: this.t_Title_Me,
			text: this.t_Email + email + ' ' + this.t_Phone + phone,
  			width: 600,
  			padding: '3em',
 			background: '#fff url(/assets/backcontact.jpg)',
  			backdrop: `
    				rgba(0,0,123,0.4)
    				left top
  			`,
			footer: '<a href="https://mail.google.com/mail/u/0/" target="_blank" rel="tooltip">' + this.t_Message + '</a>'
		});

	}
	else 
	{
	
		Swal.fire({
  			title: this.t_Title_Ref,
			text: this.t_Email + email + ' ' + this.t_Phone + phone,
  			width: 600,
  			padding: '3em',
  			background: '#fff url(/assets/backcontact.jpg)',
  			backdrop: `
    				rgba(0,0,123,0.4)
    				left top
  				`,
			footer: '<a href="https://mail.google.com/mail/u/0/" target="_blank" rel="tooltip">' + this.t_Message + '</a>'
		});

	}

}

    PlayMusic(src:string) {        

	if(this.isSound == false) 
	{
	     	
		if(src == "Sakuya")
		{
	
			this.audio.src = 'assets/touhou.mp3';	
	
		}
		else if(src == "Joran") 
		{

			this.audio.src = 'assets/joran.mp3';

		}   
		else 
		{

			this.audio.src = 'assets/touhou.mp3';	

		}                  	

		this.audio.load();
		this.audio.play();
		this.isSound = true;
                
	}
                else 
	{
		
		this.audio.pause();
	  	this.audio.currentTime = 0;
	                this.isSound = false; 

	}

    }

	public ChangeLang() {

    		
		if(this.activeLang == "ES") 
		{
			
			this.Lang = 'English';	
			this.activeLang = 'EN';
    			this.translate.use('EN');

		}
		else
		{
			
			this.Lang = 'Español';
			this.activeLang = 'ES';
    			this.translate.use('ES');

		} 
		
  	}

}
