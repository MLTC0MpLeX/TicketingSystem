import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { VerifyTicketComponent } from './verify-ticket/verify-ticket.component';

const routes: Routes = [
  { path: 'add-ticket', component: AddTicketComponent },
  { path: 'verify-ticket', component: VerifyTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
