import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DatasheetComponent } from './datasheet/datasheet.component';
import { DesignComponent } from './design/design.component';
import { LoginComponent } from './login/login.component';
import { PrimarypageComponent } from './primarypage/primarypage.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path:'', redirectTo:'primarypage', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user', component:UserhomeComponent},
  {path:'primarypage', component:PrimarypageComponent},
  {path:'article' , component:ArticleComponent},
  {path:'videos', component:VideosComponent},
  {path:'datasheet',component:DatasheetComponent},
  {path:'design', component:DesignComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
