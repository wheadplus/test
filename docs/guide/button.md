---
title: 基础组件

---



## button 按钮

基础组件，点击触发业务逻辑。

### 基础用法

<ClientOnly>
  <button-demo/>
</ClientOnly>

::: details 点击查看代码
```js
<a-button >default</a-button>
<a-button primary>primary</a-button>
<a-button error>error</a-button>
<a-button icon="settings">default</a-button>
<a-button icon="settings" position="right">default</a-button>
<a-button :loading="true" >loading</a-button>
```
:::


### 属性
| 参数        | 说明       | 类型   | 可选值      | 默认值  |
| :-:       |:--------:   | :-----:| :-----:    | :-----:|
| icon      | icon 图标名 | String  |       ——      |    ——     |
| position  | icon 位置   | String  | left , right| left |
| primary   | 主题色按钮   | Boolean |       ——       | false |
| error   | 警告色按钮   | Boolean |       ——       | false |
| loading   | 带 loading 效果的按钮   | Boolean |       ——       | false |
