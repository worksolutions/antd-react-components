# AdaptiveContainer

## Описание

Компонент предназначен для разделения вариантов отображения в зависимости от ширины экрана.

## Применение

```TSX
import React from "react";
import { AdaptiveContainer } from "@worksolutions/antd-react-components";

function Article() {
  return (
    <AdaptiveContainer 
        mobile={<ArticleMobileView />}
        tablet={<ArticleTabletView />}
        desktop={<ArticleDesktopView />}
    />
  );
}
```

## API

| Property           | Description                                                | Type              | Default     | Required |
|:-------------------|:-----------------------------------------------------------|:------------------|:------------|:---------|
| `mobile`           | Отображает элемент на разрешениях: `xs`, `sm`              | `React.ReactNode` | `undefiend` | `false`  |
| `tablet`           | Отображает элемент на разрешениях: `md`, `lg`              | `React.ReactNode` | `undefiend` | `false`  |
| `tabletAndDesktop` | Отображает элемент на разрешениях: `md`, `lg`, `xl`, `xxl` | `React.ReactNode` | `undefiend` | `false`  |
| `desktop`          | Отображает элемент на разрешениях: `xl`, `xxl`             | `React.ReactNode` | `undefiend` | `false`  |

---
[Навигация](../navigation.md)