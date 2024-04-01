import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';

interface Setting{
  bgImage?: string,
  cls: string
}

@Component({
  selector: 'agr-hero',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit {


  @Input()
  size ='md';

  @Input()
  bgimage = '';

  @Input()
  additionalcls = '';

  ngOnInit(): void {
  } 

  renderInlineStyles(){
    if(this.bgimage && this.bgimage !==''){
      let imgUrl;
      if(this.bgimage.includes('http') || this.bgimage.includes('https')){
        imgUrl= this.bgimage;
      }else{
        imgUrl = environment.domain + '/' +this.bgimage;
      }
      const image = 'url("'+imgUrl+'")';
      return {'background-image':image};
    }
    return {};
  }

}
