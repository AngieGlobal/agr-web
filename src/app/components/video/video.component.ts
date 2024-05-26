import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, type OnInit } from '@angular/core';
import { SafeUrlPipe } from '../../safeUrl.pipe';

@Component({
  selector: 'agr-video',
  standalone: true,
  imports: [
    CommonModule,
    SafeUrlPipe
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None

})
export class VideoComponent implements OnInit {

  @Input()
  url!: string;

  @Input()
  title= "Youtube Video Player";

  @Input()
  ratio="ratio-16x9"

  ngOnInit(): void { }

  calculateRatio(){
    return this.ratio;
  }

}
