import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  baseUrl = environment.apiBaseUrl;

  getPlot(url: string){
    return this.httpClient.get(url, { responseType: 'blob' })
    .pipe(map(res => {return this.sanitize(res)}));
  }

  sanitize(data: any){
    let url = URL.createObjectURL(data);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  sendData(body: any){
    return this.httpClient.post(this.baseUrl+'/fake_or_not',body);
  }

  sendCSV(formData: any){
    return this.httpClient.post(this.baseUrl+'/fake_or_not_bulk', formData, { responseType: 'blob' });
  }
}
