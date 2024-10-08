import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'personagens', component: CharactersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
