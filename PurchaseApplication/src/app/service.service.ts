import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  brandidval:any;
  brandvalue:any;
  categoryvalue:any;
  seasonvalue:any;
  constructor() {
    this.brandvalue  = [{"id":1,"name":"BA"},{"id":2,"name":"CA"},{"id":3,"name":"TA"}];
    this.categoryvalue  = [{"id":1,"name":"BA"},{"id":2,"name":"CA"},{"id":3,"name":"TA"}];
    this.seasonvalue  = [{"id":1,"name":"BA"},{"id":2,"name":"CA"},{"id":3,"name":"TA"}];
    this.brandidval  = [{"id":1,"name":"BA"},{"id":2,"name":"CA"},{"id":3,"name":"TA"}]
   }
}
