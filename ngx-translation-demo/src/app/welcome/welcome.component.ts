import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  
  constructor(private translate:TranslateService){
    // this.translate.setDefaultLang('en')    
    this.translate.addLangs(['en', 'af']);
    if (localStorage.getItem('locale')) {
      let currentLang = localStorage.getItem('locale') || 'en'
        this.translate.setDefaultLang(currentLang);
        this. translate.use(currentLang);
    } else {
        translate.setDefaultLang('en');
        translate.use('en');
        localStorage.setItem('locale', 'en');
    }

  }

  switchLanguage(lang:string){
    localStorage.setItem('locale', lang);
    this.translate.setDefaultLang(lang);
    this. translate.use(lang);
  }
}
