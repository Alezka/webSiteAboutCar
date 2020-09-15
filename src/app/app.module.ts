import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CarComponent} from './components/car/car.component';
import {ContactsComponent} from './components/contacts/contacts.component';

const routing: Routes = [
  {path: '', component: CarComponent},
  {path: 'about', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
