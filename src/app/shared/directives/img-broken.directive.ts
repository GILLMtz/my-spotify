import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'//img indica que solo se usara en elementos img
})
export class ImgBrokenDirective {
@HostListener ('error') handleError():void{
  const elNative=this.elHost.nativeElement;
  elNative.src='../../assets/images/img-broken.png';
}
  constructor(private elHost:ElementRef) {
   }

}
