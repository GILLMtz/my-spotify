import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { ColorCardCategoryDirective } from './directives/color-card-category.directive';



@NgModule({
  declarations: [
    SearchPageComponent,
    CategoriesComponent,
    ColorCardCategoryDirective
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
