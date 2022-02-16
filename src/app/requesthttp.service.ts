import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Userdata{
  id:number;
  name:string;
  email:any;
}
@Injectable({
  providedIn: 'root'
})
export class RequesthttpService {

  constructor(private http: HttpClient) { }
  public url=environment.URL+'/users';
  product(): Observable<any> {
    //console.log('hiii', this.http.get(this.url))
    return this.http.get<Userdata[]>(this.url);
}
postuser(data:any){
  return this.http.post<Userdata[]>(this.url,data)
}
deleteuser(id:any){
  const deleteUrl = this.url + '/' +id;
  return this.http.delete<Userdata[]>(deleteUrl
    )
}

}
