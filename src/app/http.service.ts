import { XHRBackend, Http, RequestOptions } from '@angular/http';

import { ToastrService, HttpInterceptorService } from './shared/services';

export function HttpService(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  toastr: ToastrService
): Http {

  return new HttpInterceptorService(xhrBackend, requestOptions, toastr);
}