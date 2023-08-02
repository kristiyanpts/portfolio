import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopButtonComponent } from './top-button/top-button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TopButtonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, TopButtonComponent],
})
export class SharedModule {}
