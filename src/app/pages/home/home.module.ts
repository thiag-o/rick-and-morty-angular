import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { SectionContentComponent } from './components/section-content/section-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HomeComponent, SectionContentComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
