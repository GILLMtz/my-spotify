import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { SharedModule } from '@shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    TracksPageComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
