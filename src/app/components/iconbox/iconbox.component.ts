import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'agr-iconbox',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './iconbox.component.html',
  styleUrl: './iconbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconboxComponent { 
  @Input()
  title = '';

  @Input()
  icon = '';

  renderIcon(){
    if(this.icon.includes('http') || this.icon.includes('https')){
      // meaning it's an full url image 
      return this.icon;
    }
    return environment.domain + '/' + this.icon;
  }
}
