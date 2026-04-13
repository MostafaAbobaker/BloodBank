import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoadingServic } from '../../shared/services/loading-servic';
import { Language } from '../../shared/services/language';
import { finalize } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingServic);
  const languageService = inject(Language);
  const baseUrl = environment.apiUrl;
  const token = localStorage.getItem('BloodBankToken');
  const lang = languageService.language();

  loadingService.showLoading();

  // Determine the correct URL
  let finalUrl = req.url;
  const isAssetRequest = finalUrl.includes('/assets/i18n/') || finalUrl.startsWith('assets/');
  const isExternalRequest = finalUrl.startsWith('http');

  if (!isAssetRequest && !isExternalRequest) {
    // Prefix with API baseUrl if it's a relative API request
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanReqUrl = finalUrl.startsWith('/') ? finalUrl.slice(1) : finalUrl;
    finalUrl = `${cleanBaseUrl}${cleanReqUrl}`;
  }

  // Set headers only for non-asset requests (or as per your requirements)
  const headers: { [key: string]: string } = {};
  if (!isAssetRequest) {
    headers['lang'] = lang;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const modifiedReq = req.clone({
    url: finalUrl,
    setHeaders: headers
  });

  return next(modifiedReq).pipe(
    finalize(() => {
      loadingService.hideLoading();
    })
  );
};
