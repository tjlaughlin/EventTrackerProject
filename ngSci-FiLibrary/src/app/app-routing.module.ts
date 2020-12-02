import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SciFiLibraryComponent } from './components/sci-fi-library/sci-fi-library.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'novels', component: SciFiLibraryComponent },
  { path: 'novels/:novelId', component: SciFiLibraryComponent },
  { path: '**', component: NotFoundComponent }

  // { path: 'contact', component: ContactComponent },
  // { path: 'todos/:todoId', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
