import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LargeBtnComponent } from './large-btn/large-btn.component';
import { SkillComponent } from './about/skill/skill.component';
import { HistoryComponent } from './history/history.component';
import { GalleryphotoComponent } from './portfolio/galleryphoto/galleryphoto.component';
import { SendFormComponent } from './contact/send-form/send-form.component';
import { SocialMediaBtnComponent } from './social-media-btn/social-media-btn.component';
import { ScrollManager } from './scroll-manager.directive';
import { ScrollSection } from './scroll-section.directive';
import { ScrollAnchor } from './scroll-anchor.directive';
import { FormValidationComponent } from './form-validation/form-validation.component';




@NgModule({
  declarations: [													
    AppComponent,
      SidebarComponent,
      HeaderComponent,
      AboutComponent,
      EducationComponent,
      ExperienceComponent,
      ServiceComponent,
      PortfolioComponent,
      ReviewComponent,
      ContactComponent,
      FooterComponent,
      LargeBtnComponent,
      SkillComponent,
      HistoryComponent,
      GalleryphotoComponent,
      SendFormComponent,
      SocialMediaBtnComponent,      
      ScrollManager,
      ScrollSection,
      ScrollAnchor,
      FormValidationComponent
  
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
