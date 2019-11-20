import { Injectable } from '@angular/core';
import { HttpInterceptor ,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import {Observable } from 'rxjs/internal/Observable'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
   
    //GET
    if(req.method ==='GET'){
      debugger
      req=req.clone({
        headers:req.headers
        .set('Accept','Application/json')
        .append('Access-Control-Allow-Credentials', 'true')
        .append('Authorization','Bearer'+ localStorage.getItem('authenticationToken'))
      });
      return next.handle(req);
    }

    //POST
    if(req.method==='POST'){
      debugger
      req=req.clone({
        headers:req.headers
        .append('Authorization','Bearer'+ localStorage.getItem('authenticationToken'))
      });
      return next.handle(req);
    }

    // PUT
    if (req.method === 'PUT') {
      debugger;
      req = req.clone({
        headers: req.headers
           // .set('Accept', 'application/json')
                  //  .append('Content-Type', 'text/plain')
      });
      return next.handle(req);
    }

    // DELETE
    if (req.method === 'DELETE') {
      return next.handle(req);
    }

    // Default
    req = req.clone({
      headers: req.headers
        .set('Accept', 'application/json')
        .append('Access-Control-Allow-Credentials', 'true')
    });
    return next.handle(req);
  }
  }

 

