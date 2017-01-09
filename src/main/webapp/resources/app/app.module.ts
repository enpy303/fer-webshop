import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav.component';
import { FooterComponent} from  './component/footer.component';
import { HomeComponent} from  './component/home.component';
import { ProductComponent} from  './component/product.component';
import { ProductInfoComponent} from  './component/product-info.component';
import { SidenavComponent} from  './component/sidenav.component';
import { CartComponent} from  './component/cart.component';
import { SigninComponent} from  './component/signin.component';
import { UserInfoComponent} from  './component/user-info.component';
        

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
      path: 'productinfo',
      component: ProductInfoComponent
    },
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: 'signin',
      component: SigninComponent
    },
    {
      path: 'cart',
      component: CartComponent
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
        NavComponent,
        FooterComponent,
        HomeComponent,
        ProductComponent,
        ProductInfoComponent,
        SidenavComponent,
        CartComponent,
        SigninComponent,
        UserInfoComponent
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
