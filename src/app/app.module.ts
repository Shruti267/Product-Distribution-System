import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './features/payment/payment.component';
import { ReportComponent } from './features/report/report.component';
import { AddDataComponent } from './features/add-data/add-data.component';
import { TransportationComponent } from './features/transportation/transportation.component';
import { OrderComponent } from './features/order/order.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDataHomeComponent } from './features/add-data/add-data-home/add-data-home.component';
import { AddDataClientComponent } from './features/add-data/add-data-client/add-data-client.component';
import { AddDataCityComponent } from './features/add-data/add-data-city/add-data-city.component';
import { AddDataMillComponent } from './features/add-data/add-data-mill/add-data-mill.component';
import { AddDataProductComponent } from './features/add-data/add-data-product/add-data-product.component';
import { AddDataBrandComponent } from './features/add-data/add-data-brand/add-data-brand.component';
import { AddClientComponent } from './features/add-data/add-data-client/add-client/add-client.component';
import { AddCityComponent } from './features/add-data/add-data-city/add-city/add-city.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ReportComponent,
    AddDataComponent,
    TransportationComponent,
    OrderComponent,
    AddDataHomeComponent,
    AddDataClientComponent,
    AddDataCityComponent,
    AddDataMillComponent,
    AddDataProductComponent,
    AddDataBrandComponent,
    AddClientComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
