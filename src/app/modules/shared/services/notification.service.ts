import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class NotificationService {

  requestNotificationAccess() {
    if (!("notification" in window)) {
      console.log("Browser notification access is not available.");
    } else {
      Notification.requestPermission().then(permission => {
        console.log(permission);
      });
    }
  }

  // @ts-ignore
  sendNotification (data) {
    if (data == undefined || !data) { return }

    const title = (data.title === undefined) ? 'Notification' : data.title
    const clickCallback = data.clickCallback
    const message = (data.message === undefined) ? 'null' : data.message
    const icon = (data.icon === undefined) ? 'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png' : data.icon
    const sendNotification = function (){
      const notification = new Notification(title, {
        icon: icon,
        body: message
      })
      if (clickCallback !== undefined) {
        notification.onclick = function () {
          clickCallback()
          notification.close()
        }
      }
    }

    if (!window.Notification) {
      console.log("No browser notification service.");
      return;
    } else {
      if (Notification.permission === 'default') {
        Notification.requestPermission(function (p) {
          if (p !== 'denied') {
            sendNotification()
          }
        })
      } else {
        sendNotification()
      }
    }
  }
}
