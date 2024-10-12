import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
