import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(public studentService: StudentService,public firestore: AngularFirestore) { }
students:any=[];
stud:any;
id:any
  ngOnInit(): void {
    this.getstudent();
  }

  addstudents(data:any){ this.students.push(data)};

  onSubmit() {
    this.studentService.form.value.students = this.students;
    let data = this.studentService.form.value;
    alert("Recored inserted...")
    this.studentService.createstudent(data).then((res:any) => {
     
    });
  }


  
  getstudent(){ 
    this.studentService
      .getstudents()
      .subscribe(res => (this.stud = res));
  }   

  deletestudent(data:any) {this.studentService.deletestudents(data);}

  updatedata(student:any){
     this.studentService.form.patchValue({
    name:student.name,
    age:student.age,
    address:student.address, 
  //  id: this.firestore.collection('students').snapshotChanges().forEach((changes:any)=>{
  //    changes.map((a:any)=>{
  //      this.id=a.payload.doc.id
  //      console.log(this.id)
  //    })
  //  }) 
  })

  this.id=this.studentService.getstudid(student.id).subscribe((data:any)=>{console.log(data.id)})
  console.log(this.id)
  
  }

}
