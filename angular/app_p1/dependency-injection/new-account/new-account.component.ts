import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    private __loggingService: LoggingService, 
    private __accountService: AccountService
  ) {
    this.__accountService.statusUpdated.subscribe((status: string) => {
      alert(status);
    })
   }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.__accountService.addAccount(accountName, accountStatus);
  }

  ngOnInit() {
  }

}
