import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, type OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NavigationItem, structure } from './navigation-item';
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
  navigation: NavigationItem[] = structure;

  ngOnInit(): void {
    const pathName = location.pathname;
    if(pathName){
      this.navigation.map(item=> item.isActive = item.url ===pathName);
    }
   }

  renderLogo(){
    return environment.logo;
  }

}
