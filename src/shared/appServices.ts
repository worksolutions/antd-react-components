import { useMemo } from "react";
import { MessageInstance } from "antd/es/message/interface";
import { ModalStaticFunctions } from "antd/es/modal/confirm";
import { NotificationInstance } from "antd/es/notification/interface";
import { Container, Service } from "typedi";

@Service({ global: true })
export class AppServices {
  public message!: MessageInstance;

  public notification!: NotificationInstance;

  public modal!: Omit<ModalStaticFunctions, "warn">;

  public setMessageInstance(message: MessageInstance) {
    this.message = message;
  }

  public setNotificationInstance(notification: NotificationInstance) {
    this.notification = notification;
  }

  public setModalInstance(modal: Omit<ModalStaticFunctions, "warn">) {
    this.modal = modal;
  }
}

export function useAppServices() {
  return useMemo(() => Container.get(AppServices), []);
}
