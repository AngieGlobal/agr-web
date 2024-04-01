import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'agr-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input()
  title ='';

  @Input()
  desc = '';

  @Input()
  image = '';

  @Input()
  imagePos = 'top';

  @Input()
  variant = 'primary';

  @Input()
  additionalcls = '';

  renderImage(){
    return environment.domain+'/'+this.image;
  }
 }
