import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { NavComponent } from './component/nav.component';
import { SidenavComponent } from './component/sidenav.component';
import { ProductComponent } from './component/product.component';
import { ProductInfoComponent } from './component/product-info.component';
import { CartComponent } from './component/cart.component';
import { SigninComponent } from './component/signin.component';
import { UserInfoComponent } from './component/user-info.component';
import { FooterComponent } from './component/footer.component';

import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: 'productinfo/:id',
      component: ProductInfoComponent
    },
    {
      path: 'cart/:id',
      component: CartComponent
    },
    {
      path: 'signin',
      component: SigninComponent
    },
    {
      path: 'userinfo',
      component: UserInfoComponent
    },
    {
      path: '**',
      component: HomeComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        ProductInfoComponent,
        NavComponent,
        SidenavComponent,
        CartComponent,
        SigninComponent,
        UserInfoComponent,
        FooterComponent
    ],
    providers: [ 
        ProductService,
        OrderService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
