import { XHRBackend, Http, RequestOptions } from '@angular/http';

import { LoaderService, ToastrService, HttpInterceptorService } from './shared/services';

export function HttpService(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  toastr: ToastrService,
  loaderService: LoaderService
): Http {

  return new HttpInterceptorService(xhrBackend, requestOptions, toastr, loaderService);
}