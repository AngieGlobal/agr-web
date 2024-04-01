import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, type OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'agr-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  ngOnInit(): void { }

  renderLogo(){
    return environment.logo;
  }

}
