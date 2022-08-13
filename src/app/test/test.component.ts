import { Component, OnInit } from '@angular/core';
import { HttpClientService, TestDTO} from '../service/http-client.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testDTO: TestDTO = new TestDTO(["1","2","3","4","5"],["1","6","7","8","9"]);

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {}

  countRepeatedNumberInArray(): void {
    this.httpClientService.countRepeatedNumberInArray(this.testDTO)
        .subscribe( data => {
          alert("results from back");
          console.log("response from back: " +data);
        });
  };

}
