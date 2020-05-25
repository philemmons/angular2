import { Injectable } from '@angular/core';

// we need the injector here if there are dependency 
// in the constructor

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //constructor(logService: LogService) { }
  constructor() { }
}


/*

$ ng g s email
g: generate
s: service
email: service name
CREATE src/app/email.service.spec.ts (352 bytes)
CREATE src/app/email.service.ts (134 bytes)
*/