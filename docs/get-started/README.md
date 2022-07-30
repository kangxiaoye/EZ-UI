---
title：快速上手
---

# 快速上手

## 引入必要资源
```
import {Button} from "ez-ui-1";
import "ez-ui-1/dist/index.css";
```

## 注册组件
```
export default {
  name: "ComponentName",
  components: {
    "ez-button": Button,
  },
}
```

## 使用
#### 效果展示

<ClientOnly>
  <button-demo3></button-demo3>
</ClientOnly>

#### 使用方法
```
<template>
  <div>
    <ez-button>默认按钮</ez-button>
  </div>
</template>
```
