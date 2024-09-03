import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.sass']
})
export class ContactMeComponent implements OnInit, OnDestroy {
  showModal: boolean = false;
  private modalSubscription: Subscription = new Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    console.log("ContactMeComponent: Initializing and subscribing to modal changes.");
    this.modalSubscription = this.modalService.watch().subscribe((status: boolean) => {
      this.showModal = status;
      console.log("ContactMeComponent: Modal status changed to ", status); // Confirm subscription is working
    });
  }

  submitForm(){
    
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
    console.log("ContactMeComponent: Unsubscribed from modal changes.");
  }

  close() {
    this.modalService.close();
  }
}
