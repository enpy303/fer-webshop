import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../model/user';
import { BaseService } from '../service/base.service';

import { Observable }     from 'rxjs/Observable';


@Injectable()
export class UserService extends BaseService {
    
    private url = '/webshop2/users'; 
  
    constructor (private http: Http) {
        super();
    } 
    
    addUser(user: User): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, user, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
        
}
