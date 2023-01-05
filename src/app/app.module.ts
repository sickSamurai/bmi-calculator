import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { AppRoot } from './app.root'
import { FormViewComponent } from './components/form-view/form-view.component'
import { ResultViewComponent } from './components/result-view/result-view.component'

const routes: Routes = [
  { path: '', component: FormViewComponent },
  { path: 'results/:value', component: ResultViewComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [AppRoot, FormViewComponent, ResultViewComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppRoot],
})
export class AppModule {}
