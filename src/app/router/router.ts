import { RouterModule } from '@angular/router';
import { HomeComponent } from '../views/home/home/home.component';
import { BasketComponent } from '../views/basket/basket/basket.component';
import { NotFoundComponent } from '../views/not-found/not-found/not-found.component';

export default RouterModule.forRoot([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: '**', component: NotFoundComponent },
]);
