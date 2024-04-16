# PageSpin

## Описание

Компонент отображает элемент `Spin` из библиотеки `antd` с фиксированным позиционированием.

## Применение

```TSX
import React from "react";
import { useAsync } from "react-use";
import { PageSpin } from "@worksolutions/antd-react-components";

import { App } from "./app";

function AppController() {
  const { loading } = useAsync(...);

  if (loading) return <PageSpin />;

  return <App />
}
```

## API

Компонент не настраивается.

---
[Навигация](../navigation.md)