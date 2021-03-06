  
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getEmployeesList(){
    console.log("in service")
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('http://localhost:8080/employeepayroll/get');
  }

  deleteEmployee(id){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete('http://localhost:8080/employeepayroll/delete/'+id);
  }

  createEmployee(data){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/employeepayroll/create/',data);

  }
}