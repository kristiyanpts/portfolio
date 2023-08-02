import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    AboutComponent,
    CertificatesComponent,
    TechnologiesComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    WorkComponent,
    AboutComponent,
    CertificatesComponent,
    TechnologiesComponent,
  ],
})
export class ComponentsModule {}
