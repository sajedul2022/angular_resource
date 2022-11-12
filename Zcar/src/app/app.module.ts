import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RepairComponent } from './repair/repair.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ContactComponent } from './contact/contact.component';
import { PricelistService } from './services/pricelist.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MaintenanceComponent,
    RepairComponent,
    PriceListComponent,
    ContactComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [PricelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
