import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningsComponent } from './earnings/earnings.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent} ,
  {path: 'inventory', component: InventoryComponent} ,
  {path: 'orders', component: OrdersComponent},
  {path: 'earnings', component: EarningsComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DashboardComponent, InventoryComponent, OrdersComponent, EarningsComponent, SettingsComponent]
