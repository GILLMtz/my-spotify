import { ElementRef } from '@angular/core';
import { ColorCardCategoryDirective } from './color-card-category.directive';

describe('ColorCardCategoryDirective', () => {
  it('should create an instance', () => {
    const mockElement=new ElementRef('');
    const directive = new ColorCardCategoryDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
