import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'], 
  providers: [LoggingService]
})
export class DependencyInjectionComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(
    private __loggingService: LoggingService, 
    private __accountService: AccountService
  ) { }

  ngOnInit() {
    this.accounts = this.__accountService.accounts;
  }

}
