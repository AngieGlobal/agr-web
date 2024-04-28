import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'agr-timeline',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./timeline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent {
  @Input()
  variant = 'primary';

  @Input()
  number = 1;

  @Input()
  endsymbol = '';
}
