import { Component, Input } from '@angular/core';
import { Feature } from '../feature.model';

@Component({
  selector: 'lbk-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
  @Input() isImageFirst!: boolean;

  get order(): string {
    return this.isImageFirst ? 'order-first' : 'order-last';
  }
}
