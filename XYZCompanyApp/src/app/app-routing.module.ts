import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Route[]= [
  {path:'product-list', component:ProductListComponent},
  {path:'search-form',component: SearchFormComponent},
  {path:'mainpage',component: MainpageComponent },
  {path:'',redirectTo:'mainpage', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
