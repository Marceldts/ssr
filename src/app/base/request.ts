import { HttpClient, HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class Request {

  protected basePath = ``;
  protected http: HttpClient = this.injector.get(HttpClient);

  constructor(protected injector: Injector) {}

  protected doRequest<T>(
    method: keyof HttpClient,
    url: string,
    body: unknown = undefined,
  ): Observable<T> {
    return this.http.request<T>(method,url, {body})
  }

}