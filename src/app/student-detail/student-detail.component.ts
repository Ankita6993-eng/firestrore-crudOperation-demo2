import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(public studentService: StudentService,public firestore: AngularFirestore) { }
students:any=[];
stud:any;
issubmit:boolean=false;
  ngOnInit(): void {
   this.studentService.getstudents().subscribe((list:any)=>{
     this.students=list.map((item:any)=>{
       return {
         $key:item.key,
         ...item.payload.val()
       }
     })
   })
  }

  addstudents(data:any){ 
    this.students.push(data)
    };

  createstud() {
     this.issubmit=false
      this.studentService.createstudent(this.studentService.form.value)
      alert("Recored inserted...") 
      this.studentService.form.reset()
  }

  getstudent(){
    this.studentService
      .getstudents()
      .subscribe(res => (this.stud = res));
  }   

  deletestudent(data:any) {
     this.issubmit=false
    if(confirm("Are you sure to delete this recored")){
      this.studentService.deletestudents(data)
    }
    //this.studentService.deletestudents(data);
    }
  updaterecorde(){
    this.issubmit=true
     this.studentService.updatestudent(this.studentService.form.value)
      alert("Recored Updated...") 
      this.studentService.form.reset()
       this.issubmit=false
  }

  populateForm1(data){
   this.studentService.form.setValue(data)
   this.issubmit=true
  }

}
