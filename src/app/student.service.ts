import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }
   form = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(""),
    address: new FormControl("")
  });


  createstudent(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("students")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updatestudent(data) {
    return this.firestore
      .collection("students")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getstudents() {
    return this.firestore.collection("students").snapshotChanges();
  }

  deletestudents(data) {
    return this.firestore
      .collection("students")
      .doc(data.payload.doc.id)
      .delete();
  }
  getstudid(id:any){
     return this.firestore
      .collection("students").doc(id).get();
  }
}
