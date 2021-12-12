import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtistsComponent} from './artists/artists.component';

const routes: Routes = [
  {path: '', redirectTo: '/artists', pathMatch: 'full'},
  {path: 'artists', component: ArtistsComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
