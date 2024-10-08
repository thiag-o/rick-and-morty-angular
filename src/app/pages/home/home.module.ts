import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { SectionContentComponent } from './components/section-content/section-content.component';

@NgModule({
  declarations: [HomeComponent, SectionContentComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
