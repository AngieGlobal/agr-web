import { Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'agrSafeUrl',
  standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, ...args: unknown[]): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
