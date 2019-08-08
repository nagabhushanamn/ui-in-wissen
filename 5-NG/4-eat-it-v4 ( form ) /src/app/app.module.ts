import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HighlightDirective } from './highlight.directive';
import { AuthTokenInterceptorService } from './auth-token-interceptor.service';
import { ReviewFormComponent } from './review-form/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartViewComponent,
    PriceDiscountPipe,
    HighlightDirective,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
