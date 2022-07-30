---
title: Collapse - 折叠面板
---
# 折叠面板
<ClientOnly>
  <collapse-demo1></collapse-demo1>
</ClientOnly>

# 选项
#### 1. 双向绑定
Collapse 组件的双向绑定与 Vue 官方的类似，支持 <font color="#3eaf7c">.sync</font> 修饰符。  
<font color="#3eaf7c">< ez-collapse :selected.sync="selected" ></font>

#### 2. 必选参数
Collapse 组件必须接受两个参数： <font color="#3eaf7c">title</font> 用于显示折叠面板的标题。 <font color="#3eaf7c">name</font> 用于表示选中的 item。  
<font color="#3eaf7c">< ez-collapse-item title="标题1" name="1" >1< /ez-collapse-item ></font>

#### 3. 折叠面板 单折叠效果、多折叠效果
Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置 <font color="#3eaf7c">single</font> 属性来更改，默认是 <font color="#3eaf7c">false</font> 。
#### 设置single预览
<ClientOnly>
  <collapse-demo2></collapse-demo2>
</ClientOnly>
