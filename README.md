# @worksolutions/antd-react-components

Кастомизации AntD для проектов Work Solutions

---

## Установка

Для установки выполните следующую команду:

```bash
npm i @worksolutions/antd-react-components
```

После установки, необходимо переопределить тему Ant Design:

```TSX
import React from "react";
import { theme } from "@worksolutions/antd-react-components";
import { App as AntdApp, ConfigProvider } from "antd";


function App() {
  return (
    <ConfigProvider theme={theme}>
      <AntdApp>
        ...
      </AntdApp>
    </ConfigProvider>
  );
}
```

## Компоненты

### [— AdaptiveContainer](./docs/components/adaptiveContainer.md)

### [— ConfirmationModal](./docs/components/confirmationModal.md)

### [— PageSpin](./docs/components/pageSpin.md)

## Разработка

### Кастомизация темы

Для кастомизации объекта `theme` необходимо
воспользоваться [визуальным редактором темы](https://ant.design/theme-editor), который предоставляется
разработчиками `antd`.

**Примечание:** \
Некоторые свойства объекта `theme` могут отсутствовать в визуальном редакторе. Допускается их замена через код.

### Разработка компонентов

В ходе разработки приложений, которые используют библиотеку `@worksolutions/antd-react-components`, будут появляться
общие компоненты.
Их необходимо выносить.

Каждый новый компонент должен быть задокументирован в [./docs/components](./docs/components). \
Обновление компонентов также должно сопровождаться обновлением документации к компоненту.

## Публикация

Для публикации новой версии необходимо запустить один из скриптов.
Скрипт автоматически изменит версию библиотеки и опубликует изменения на npm.

Опубликовать патч:

```bash
npm run publish:patch
```

Опубликовать минорную версию:

```bash
npm run publish:minor
```

Опубликовать мажорную версию:

```bash
npm run publish:major
```