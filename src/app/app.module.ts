import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DataStoreService } from './data-store.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { CamalcasePipe } from './camalcase.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const appRoutes : Routes = [
  { path : 'empdata', component : EmpdataComponent },
  { path : 'sidebar', component : SidebarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmpdataComponent,
    ParentChildComponent,
    CamalcasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent],
})
export class AppModule { }
