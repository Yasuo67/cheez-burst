import { Component } from '@angular/core';
import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
 
  page = 1;
  Cheese1:boolean = false;
  Cheese2 = false;
  denyCheese1(){
    this.page++;
    this.Cheese1 = true;
    this.Cheese2 = false;
  }
  denyCheese2(){
    this.page++;
    this.Cheese2 = true;
    this.Cheese1 = false;
  }
  acceptCheese(){
    this.page = 4;
    this.Cheese2 = false;
    this.Cheese1 = false;
  }
  goNextPage(){
    this.page++;
  }
  userComment: string = '';
  

  sendComment() {
    emailjs.init('u2g34dfrzunbEDHQT');
    const emailParams = {
      message: this.userComment,
      // Add other parameters like to, subject, etc.
    };
    
    emailjs.send('service_6jjjj9g' , 'template_wgsp4zu', emailParams)
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent:', response);
        this.page++;
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  }
}

