import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';

import { ConfigService } from './config.service';
import { ContcatComponent } from './contcat/contcat.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },  
  { path: 'Home',component:HeaderComponent},
  { path: 'About',component:IntroComponent},
  { path: 'Services',component:ContentComponent},
  { path: 'Testimonials',component: TestimonialComponent},
  { path: 'Gallery',component:GalleryComponent},
  { path: 'Clients',component:ClientsComponent},
  { path: 'Pricing',component:PricingComponent},
  { path: 'Contact',component:ContcatComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConfigService],
  exports: [RouterModule]
})
export class AppRoutingModule { }