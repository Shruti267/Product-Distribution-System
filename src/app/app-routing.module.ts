import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataBrandComponent } from './features/add-data/add-data-brand/add-data-brand.component';
import { AddCityComponent } from './features/add-data/add-data-city/add-city/add-city.component';
import { AddDataCityComponent } from './features/add-data/add-data-city/add-data-city.component';
import { AddClientComponent } from './features/add-data/add-data-client/add-client/add-client.component';
import { AddDataClientComponent } from './features/add-data/add-data-client/add-data-client.component';
import { AddDataHomeComponent } from './features/add-data/add-data-home/add-data-home.component';
import { AddDataMillComponent } from './features/add-data/add-data-mill/add-data-mill.component';
import { AddDataProductComponent } from './features/add-data/add-data-product/add-data-product.component';
import { AddDataComponent } from './features/add-data/add-data.component';
import { OrderComponent } from './features/order/order.component';
import { PaymentComponent } from './features/payment/payment.component';
import { ReportComponent } from './features/report/report.component';
import { TransportationComponent } from './features/transportation/transportation.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent, pathMatch: 'full' },
  { path: 'transportation', component: TransportationComponent, pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent, pathMatch: 'full' },
  { path: 'report', component: ReportComponent, pathMatch: 'full' },
  { 
    path: 'add-data', 
    component: AddDataComponent,
    children: [
      { path: '', component: AddDataHomeComponent, pathMatch: 'full'},
      { 
        path: 'client', 
        component: AddDataClientComponent, 
        children: [
          { path: 'new', component: AddClientComponent, pathMatch: 'full'},
        ]
      },
      { 
        path: 'city', 
        component: AddDataCityComponent,
        children: [
          { path: 'new', component: AddCityComponent, pathMatch: 'full'},
        ]
      },
      { path: 'mill', component: AddDataMillComponent, pathMatch: 'full'},
      { path: 'product', component: AddDataProductComponent, pathMatch: 'full'},
      { path: 'brand', component: AddDataBrandComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
