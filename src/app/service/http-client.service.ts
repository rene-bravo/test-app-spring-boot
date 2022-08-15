import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class TestDTO{
  constructor(public arrayOne: string, public arrayTwo: string){}
}

export class ServiceDTO{
  constructor(public arrayOne: string[], public arrayTwo: string[]){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public countRepeatedNumberInArray(serviceDTO: ServiceDTO){
    return this.httpClient.post<ServiceDTO>("http://localhost:8080/api/testArray", serviceDTO);
  }
}
