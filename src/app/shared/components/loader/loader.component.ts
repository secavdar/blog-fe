import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoaderService } from '../../services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show: boolean;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.show = false;
  }

  ngOnInit() {
    this.subscription = this.loaderService
                          .loaderStatus
                          .subscribe(state => this.show = state);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
