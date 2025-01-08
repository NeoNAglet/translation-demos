import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-translation-demo';

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
