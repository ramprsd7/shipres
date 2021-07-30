import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenwindowComponent } from './openwindow/openwindow.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { AddshipComponent } from './addship/addship.component';
import { DelshipComponent } from './delship/delship.component';
import { ViewshipComponent } from './viewship/viewship.component';
import { DelrouteComponent } from './delroute/delroute.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ShipserviceService } from './shipservice.service';
import { ModifyshipComponent } from './modifyship/modifyship.component';
import { AddrouteComponent } from './addroute/addroute.component';
import { ViewrouteComponent } from './viewroute/viewroute.component';
import { ModifyrouteComponent } from './modifyroute/modifyroute.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import {MatButtonModule,MatCardModule,MatCheckboxModule} from '@angular/material';
import { SchdcomComponent } from './schdcom/schdcom.component';
import { ResshipComponent } from './resship/resship.component';
import { ManageticketComponent } from './manageticket/manageticket.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ship } from './model/can';
const platform = platformBrowserDynamic();



@NgModule({
  declarations: [
    AppComponent,
    OpenwindowComponent,
    SignupComponent,
    AddshipComponent,
    DelshipComponent,
    ViewshipComponent,
    DelrouteComponent,
    ModifyshipComponent,
    AddrouteComponent,
    ViewrouteComponent,
    ModifyrouteComponent,
    UsersignupComponent,
    SchdcomComponent,
    ResshipComponent,
    ManageticketComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,FormsModule,MatSliderModule,MatButtonModule,
    MatCardModule,MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,ship),
   AngularFirestoreModule,
    AppRoutingModule,RouterModule.forRoot([{path:'openwindow',component:OpenwindowComponent},
  {path:'signup',component:SignupComponent},
  {path:'addship',component:AddshipComponent},
  {path:'delship',component:DelshipComponent},
  {path:'viewship',component:ViewshipComponent},
  {path:'modifyship',component:ModifyshipComponent},


  {path:'addroute',component:AddrouteComponent},
  {path:'delroute',component:DelrouteComponent},
  {path:'viewroute',component:ViewrouteComponent},
  {path:'modifyroute',component:ModifyrouteComponent},

  {path:'userreg',component:UsersignupComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'loginagn',component:OpenwindowComponent},
  {path:'sched',component:SchdcomComponent},
  {path:'res',component:ResshipComponent},
  {path:'man',component:ManageticketComponent

  }]), BrowserAnimationsModule
  ],
  providers: [ShipserviceService], 

})
export class AppModule { }
