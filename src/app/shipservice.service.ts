import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{AngularFireList, AngularFireDatabase} from '@angular/fire/database'
import { Ship } from './model/ship';
import { route } from './model/route';
import { Shipd } from './model/shipd';
import{Observable} from 'rxjs';
import { user } from './model/user';
import { Schedule } from './model/schedule';
import { ship3 } from './model/ship3';
import { analytics } from 'firebase';
@Injectable({
  providedIn: 'root'
})


export class ShipserviceService {
  r:route;
  db:AngularFirestore;
  
  
  items: Observable<any[]>;
  dbref:AngularFireList<Shipd>=null;
    constructor(db:AngularFirestore,data:AngularFirestore) 
    {
      this.db=db;
      this.data=data;
   
     }


// Adding Ship Details to DB 
d1:any;
  public addship(sh:Ship)
  {
      var col=this.db.collection('Ship');
      this.d1={
      usr:sh.usr,
      src:sh.src,
      dst:sh.dst,
      td:sh.td,
      sc:sh.sc,
      rc:sh.rc

  }
col.add(this.d1);
alert("Added Ship Successfully")
  }

  //Deleting Ship details in DB
  d2:any;
  data:any;
  public deleteData1(d2:string)
  { 
    this.d2={
      usr:d2
    }
    this.db.collection<Shipd>('Ship').doc('x9qd9qi7EOrZ3QXuEUN7').delete();
    alert("Deleted Ship Succesfully")
  }

  //adding ShipRoute to DB
public insertData(r:route)
{
  var coll=this.db.collection<route>('Ship');
  this.r={
    Source:r.Source,
    Destination:r.Destination,
    Distance:r.Distance,
    Duration:r.Duration,
    Cost:r.Cost
}
coll.add(this.r);
alert("Added Ship Route Succesfully")
}
  //Deleting route of Ship in DB
  d:any;
  public deleteData2(d:string)
  {
    this.d={
      Source:d
    }
    this.db.collection<Shipd>('Ship').doc('delroute').delete();
    alert("Deleted Route Succesfully")
  }

  //View DB
  public selectAll()
  {
    this.data=this.db.collection('/ship').valueChanges();
    return this.data;
    alert("Working but Not showing Data")
  }

  // user Details service started
// User registration form
      u:user;
      public insertuserData(u:user)
      {
        var coll=this.db.collection<user>('ship');
        this.u={
        user:u.user,
        Fname:u.Fname,
        DOB:u.DOB,
        Gender:u.Gender,
        addr:u.addr,
        Paddr:u.Paddr,
        state:u.state,
        PinCode:u.PinCode,
        num:u.num,
        Email:u.Email,
        pass:u.pass
      }
      alert("New User "+this.u.user+" Details saved")
      coll.add(this.u);
      }

      // Ship Schedule Details added in DB def
      s:any;
      public insertData2(s:Schedule)
   {
     var coll=this.db.collection<Schedule>('Ship');
     this.s={
      date:s.date,
      src:s.src,
      dst:s.dst,

     }
     
     coll.add(this.s);
   }

   //Inserting reserved data to Database
   r1:any;
   public insertresData(r1:ship3)
  {
    
    var coll=this.db.collection<ship3>('ship');
    this.r1={
            name:r1.name,
            age:r1.age,
            Date:r1.Date,
            time:r1.time,
            src:r1.src,
            dst:r1.dst,
     
          }
        {
          coll.add(this.r1);
          alert("Reservation Done");
        }
// //DB for manage DB 
// r3:any;
// public canData(r3:)
//   {
    
//     var coll=this.db.collection<can>('ship');
//     this.r={
//       name:r.name,
//       age:r.age,
//       Date:r.Date,
//       time:r.time,
//       src:r.src,
//       dst:r.dst,
     
//        }

//     coll.add(this.r);
//     alert("Reserved")
//   
}
}



