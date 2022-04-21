import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AuthInterceptorProvider } from './interceptors/token-interceptor.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo:'/login' ,pathMatch:'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'hotellist', component: HotelListComponent },
  { path: '**', redirectTo:'/login' },
  // { path: '/hotellist', component: SecondComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HotelListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
