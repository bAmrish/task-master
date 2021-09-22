import {Component} from '@angular/core';
import {NotificationService} from "../modules/shared/services/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-master';

  constructor(private notificationService: NotificationService) {
  }

  sendNotification() {
    const icon = '/assets/images/logo-32x32.png';
    console.log(icon);
    this.notificationService.sendNotification({
      title: 'New Notification',
      message: 'Your message goes here',
      icon,
      clickCallback: function () {
        alert('do something when clicked on notification');
      }
    });
  }
}
