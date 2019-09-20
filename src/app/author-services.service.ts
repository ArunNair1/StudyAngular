import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorServicesService {

  getList()
  {
    return ["auth1","auth2","auth3"];
  }
  constructor() { }
}
