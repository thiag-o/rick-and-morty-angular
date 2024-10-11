import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrl: './section-content.component.scss',
})
export class SectionContentComponent {
  @Input('label') title!: string;

  @Input() link?: {
    name: string;
    path: string;
  };
  constructor() {}
}
