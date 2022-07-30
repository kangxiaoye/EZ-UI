---
title: Toast - 弹出提示框
---
# 弹出提示框

<ClientOnly>
  <toast-demo1></toast-demo1>
</ClientOnly>

# 选项

#### 1. zIndex
此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。
若你的项目不可见 Toast 组件，尝试传入一个 <font color="#3eaf7c">zIndex</font> 试试。

#### 2. autoClose 
此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。

若传值<font color="#3eaf7c">autoClose: false</font>  则取消该功能

使用方式:
```
<template>
  <div>
    <ez-button @click="auto">自动关闭</ez-button>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Button from '../../../src/Button'
  import plugin from '../../../src/plugin'
  Vue.use(plugin)
  export default {
    components: { 'ez-button': Button },
    methods: {
      auto() { this.$toast('我是 toast 内容', { autoClose: 5, }) }
    }
  }
</script>
```

#### 3. closeButton
弹出的 Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。

使用方式
```
<template>
  <div>
    <ez-button @click="auto">点我</ez-button>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Button from '../../../src/Button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)
  export default {
    components: {'ez-button': Button},
    methods: {
      auto() {
        this.$toast('我是 toast 内容', 
         {autoClose: 5, closeButton: { text:'确定', callback:()=>{ console.log('回调的输出') } } }
        )
      }
    }
  }
</script>
```

#### 4. enableHtml
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, <font color="#3eaf7c">enableHtml:true</font> 。 开启后就可以在 Toast 内容区域写 HTML 语法。
```vue
this.$toast('<p>我是 toast 内容</p>')
```

#### 5. position
可以设定 Toast 弹出的位置 ，支持 <font color="#3eaf7c">top, middle, bottom</font> 三个值。
```vue
this.$toast('我是 toast 内容', { position: 'top' })
```
