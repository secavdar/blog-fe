import { XHRBackend, Http, RequestOptions } from '@angular/http';

import { HttpInterceptorService } from '../shared/services';

export function HttpService(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions
): Http {

  return new HttpInterceptorService(xhrBackend, requestOptions);
}