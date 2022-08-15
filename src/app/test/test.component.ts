import { Component, OnInit } from '@angular/core';
import { HttpClientService, TestDTO, ServiceDTO} from '../service/http-client.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testDTO: TestDTO = new TestDTO("","");
  serviceDTO: ServiceDTO = new ServiceDTO([],[]);

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {}

  countRepeatedNumberInArray(): void {
    this.serviceDTO = new ServiceDTO(this.testDTO.arrayOne.split(''),this.testDTO.arrayTwo.split(''));
    this.httpClientService.countRepeatedNumberInArray(this.serviceDTO)
        .subscribe( data => {
          alert("results from back");
          console.log("response from back: " +data);
        });
  };

}
