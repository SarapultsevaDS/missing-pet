import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { FindPetComponent } from './find-pet/find-pet.component';

const routes: Routes = [{ path: 'account', component: AccountComponent }, { path: '', component: FindPetComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
