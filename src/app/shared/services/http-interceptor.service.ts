import { Injectable } from '@angular/core';
import {
  ConnectionBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Http,
  Headers,
} from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { ToastrService, LoaderService } from './'

@Injectable()
export class HttpInterceptorService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,
              private toastr: ToastrService, private loaderService: LoaderService) {
    super(backend, defaultOptions);
  }

  request(
    url: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.request(url, options).catch(this.catchErrors());
  }

  catchErrors() {
    return (res: Response) => {
      if (res.status === 400 || res.status === 401 || res.status === 500) {
         this.toastr.showToaster(res.statusText);
         return Observable.throw(res);
      }

      console.error('An error occured', res);
      return Observable.throw(res);
    };
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.showLoader();
    url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options)).timeout(5000).finally(() => this.onEnd())
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.showLoader();
    url = this.updateUrl(url);
    return super.post(url, body, this.getRequestOptionArgs(options)).finally(() => this.onEnd());
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.showLoader();
    url = this.updateUrl(url);
    return super.put(url, body, this.getRequestOptionArgs(options)).finally(() => this.onEnd());
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.showLoader();
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options)).finally(() => this.onEnd());
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.displayLoader(true)
  }

  private hideLoader(): void {
    this.loaderService.displayLoader(false);
  }

  private updateUrl(req: string) {
    return environment.origin + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');
    }
    options.withCredentials = true;

    return options;
  }
}