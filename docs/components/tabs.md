---
title: Tabs - 标签切换
---
# 标签切换
<ClientOnly>
  <tabs-demo1></tabs-demo1>
</ClientOnly>

# 选项
#### 1.  selected 
默认高亮状态 i-tabs 需要设置 <font color="#3eaf7c">selected</font> 属性来确定默认标签。你可以这样：<font color="#3eaf7c">:selected.sync="selectedTab"</font>,其中  <font color="#3eaf7c">selectedTab </font> 是你需要传递的默认值。
并且该标签的子组件应该是 i-tabs-head 和 i-tabs-body ，否则你会得到一个警告。
#### 2. disabled
disabled 状态 <font color="#3eaf7c">disabled</font>  属性用于 i-tabs-item 标签，可以设置该标签的不可用状态。
#### 3. ez-icon
利用ez-icn组件，即可给tabs添加icon ,使用时需要给ez-icon 传递 <font color="#3eaf7c">name</font> 值
