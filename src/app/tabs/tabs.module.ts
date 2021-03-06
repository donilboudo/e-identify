import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { VisitorsPageModule } from '../pages/visitors/visitors.module';
import { AboutPageModule } from '../pages/about/about.module';
import { HomePageModule } from '../pages/home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    VisitorsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
