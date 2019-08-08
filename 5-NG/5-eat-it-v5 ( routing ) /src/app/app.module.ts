import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HighlightDirective } from './highlight.directive';
import { AuthTokenInterceptorService } from './auth-token-interceptor.service';
import { ReviewFormComponent } from './review-form/review-form.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemsResolverService } from './items-resolver.service';
import { OrderViewComponent } from './order-view/order-view.component';
import { GuardService } from './guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'items',
    component: ItemListComponent,
    resolve: {
      foodItems: ItemsResolverService
    }
  },
  {
    path: 'orders',
    component: OrderViewComponent,
    canActivate: [GuardService],
    canDeactivate: [GuardService]
  },
  { path: 'cart', component: CartViewComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartViewComponent,
    PriceDiscountPipe,
    HighlightDirective,
    ReviewFormComponent,
    HomeComponent,
    ItemListComponent,
    NotFoundComponent,
    OrderViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
