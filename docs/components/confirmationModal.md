# ConfirmationModal

## Описание

Компонент позволяет запросить подтверждение у пользователя при инициализации действия. \
Примеры действий, которые могу нуждаться в данном компоненте: удаление пользователя, выход из системы, публикация статьи
и т.п.

## Применение

```TSX
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useConfirmationModal } from "@worksolutions/antd-react-components";
import { Typography } from "antd";

function LogoutButton() {
  const navigate = useNavigate();
  const [withConfirmation, ConfirmationDialog] = useConfirmationModal();

  const logout = () => navigate("/auth/login");

  return (
    <>
      <ConfirmationDialog cancelText="Отменить" okText="Выйти" subtitle="Вы уверены, что хотите выйти?" title="Выйти" />
      <Typography.Text type="danger" onClick={withConfirmation(logout)}>
        Выйти
      </Typography.Text>
    </>
  );
}
```

## API

### withConfirmation

| Param    | Description                                                   | Type                                | Default     | Required |
|:---------|:--------------------------------------------------------------|:------------------------------------|:------------|:---------|
| `action` | Действие, которое необходимо выполнить в рамках подтверждения | `() => void \| () => Promise<void>` | `undefiend` | `true`   |

### ConfirmationDialog

Компонент `ConfirmationDialog` поддерживает все свойства `ModalProps` из `antd`, кроме
следующих: `open`, `confirmLoading`, `children`, `onOk` и `onCancel`.

---
[Навигация](../navigation.md)