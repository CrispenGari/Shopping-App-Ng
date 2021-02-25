import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home/home.component';
import { BasketComponent } from './views/basket/basket/basket.component';
import { BarnerComponent } from './components/barner/barner/barner.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { NotFoundComponent } from './views/not-found/not-found/not-found.component';
import RouterModule from './router/router';
import { HeaderComponent } from './components/header/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BasketProductComponent } from './components/basket-product/basket-product/basket-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    BarnerComponent,
    ProductComponent,
    ProductListComponent,
    NotFoundComponent,
    HeaderComponent,
    BasketProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
