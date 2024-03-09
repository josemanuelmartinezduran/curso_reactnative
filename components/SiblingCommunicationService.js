// SiblingCommunicationService.js
import { Subject } from 'rxjs';

const messageSubject = new Subject();

export const sendMessage = (message) => {
  messageSubject.next(message);
};

export const getMessage = () => {
  return messageSubject.asObservable();
};
