import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorCardCategory]'
})
export class ColorCardCategoryDirective {
  background: Array<any> = [
    {color:'radial-gradient(circle at 50% -20.71%, #e6f58f 0, #e9eb7f 10%, #ecdf6e 20%, #efd25d 30%, #f1c44d 40%, #f2b53c 50%, #f3a52d 60%, #f59522 70%, #f8851d 80%, #fa741e 90%, #fc6324 100%)'},
    {color:'radial-gradient(circle at 50% -20.71%, #d1fff8 0, #befff6 10%, #a7fff4 20%, #8dfff3 30%, #6cfbf2 40%, #3cf2f2 50%, #00e8f3 60%, #00dff5 70%, #00d6f9 80%, #00cefd 90%, #00c6ff 100%'},
    {color:'radial-gradient(circle at 37.72% -19.64%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%)'},
    {color:'radial-gradient(circle at 50% -20.71%, #ff7f85 0, #ff748c 8.33%, #ff6994 16.67%, #ff5d9c 25%, #ff52a4 33.33%, #ff47ad 41.67%, #f23cb5 50%, #e234be 58.33%, #cf32c8 66.67%, #b935d2 75%, #9f3bdb 83.33%, #7e42e5 91.67%, #514aed 100%)'},
    {color:'linear-gradient(to right, #c94b4b, #4b134f)'}
 
  ];
  @Input() set appColorCardCategory(colorRGGB: string) {
    const index=Math.floor(Math.random() * ((this.background.length-1) - 0)) + 0;
    colorRGGB=this.background[4].color;
    //this.elHost.nativeElement.style.background = colorRGGB;
  };
  constructor(private elHost: ElementRef) { }

}
