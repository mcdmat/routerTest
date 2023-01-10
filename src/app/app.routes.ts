import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Error404Component} from './error404/error404.component';



const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', redirectTo:'/user', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

export { ROUTES };
