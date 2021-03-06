import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs-compat/Observable';
@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:81/users';
  }
  public findAll(): Observable<User[]> {
	  console.log(this.usersUrl);
    return this.http.get<User[]>(this.usersUrl);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  
  
 /*  public getProductById(id: number): Observable<User>{
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }*/
  public updateProduct(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.usersUrl}/${id}`, user);
  }
  /*public findById(id: number): Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${id}`);
  }*/
}