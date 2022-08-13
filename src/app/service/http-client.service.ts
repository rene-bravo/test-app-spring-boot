import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class TestDTO{
  constructor(public arrayOne: string[], public arrayTwo: string[]){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public countRepeatedNumberInArray(testDTO: TestDTO){
    return this.httpClient.post<TestDTO>("http://localhost:8080/api/testArray", testDTO);
  }
}
