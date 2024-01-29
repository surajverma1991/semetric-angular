import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './config.service';
import { ContcatComponent } from './contcat/contcat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   { path: '', redirectTo: '/Home', pathMatch: 'full' },  
//   { path: 'Home',component:HeaderComponent},
//   { path: 'About',component:IntroComponent},
//   { path: 'Services',component:ContentComponent},
//   { path: 'Testimonials',component: TestimonialComponent},
//   { path: 'Gallery',component:GalleryComponent},
//   { path: 'Clients',component:ClientsComponent},
//   { path: 'Pricing',component:PricingComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    ClientsComponent,
    FooterComponent,
    PricingComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    ContcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // RouterModule.forRoot(routes)
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
