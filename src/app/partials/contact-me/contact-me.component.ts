import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { Requests } from 'src/app/services/requests.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.sass']
})
export class ContactMeComponent implements OnInit, OnDestroy {
  name: string = '';
  email: string = '';
  message: string = '';
  showModal: boolean = false;
  private modalSubscription: Subscription = new Subscription;
  data: any;

  constructor(
    private modalService: ModalService,
    private requestsService: Requests
    ) {}

  ngOnInit() {
    this.modalSubscription = this.modalService.watch().subscribe((status: boolean) => {
      this.showModal = status;
    });
  }

  submitForm(){
    const messageData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.requestsService.sendMessage(messageData).subscribe((response) => {
      this.showModal = false;
    },
    (error) => {
      console.error('Error sending message', error);
      this.showModal = false;
    }
    )
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  close() {
    this.modalService.close();
  }
}
