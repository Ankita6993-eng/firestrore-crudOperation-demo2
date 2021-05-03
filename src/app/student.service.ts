import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase,AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFireDatabase) { }
  studlist:AngularFireList<any>;

   form = new FormGroup({
    $key: new FormControl(""),
    name: new FormControl(""),
    age: new FormControl(""),
    address: new FormControl("")
  });


  createstudent(data) {
    // return new Promise<any>((resolve, reject) => {
    //   this.firestore
    //     .collection("students")
    //     .add(data)
    //     .then(res => {}, err => reject(err));
    // });
    this.studlist.push({
    name:data.name,
    age: data.age,
    address:data.address
    })
  }

  updatestudent(data) {
    // return this.firestore
    //   .collection("students")
    //   .doc(data.payload.doc.id)
    //   .set({ completed: true }, { merge: true });
this.studlist.update(data.$key,{
  name:data.name,
    age: data.age,
    address:data.address
})

  }

  getstudents() {
    //return this.firestore.collection("students").snapshotChanges();
    this.studlist= this.firestore.list('stud');
    return this.studlist.snapshotChanges();
  }

  deletestudents(data) {
    // return this.firestore
    //   .collection("students")
    //   .doc(data.payload.doc.id)
    //   .delete();

    this.studlist.remove(data)
  }
  // getstudid(id:any){
  //    return this.firestore
  //     .collection("students").doc(id).get()
  // }

  populateForm(data){
    this.form.setValue(data)
  }
}
