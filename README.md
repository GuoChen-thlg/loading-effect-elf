# loading-effect-elf

### 安装

```
npm i loading-effect-elf
```

初试发布 npm
|options|type|effect |
| --- | ---- | ----- |
|type| string | 展示类型|
|name| string | 名字|
|el| string | 待添加 Elf 容器的选择器|
|mask_bgcolor| string | 加载蒙版背景色|
|line_color| string | 加载条颜色|
|icon_size| string | 旋转图标大小|
|icon_className| string | 旋转图标样式名称|
|icon_Innerhtml| string | 旋转图标填充 HTML|

#### type

目前只有两种方式 article_loaded mask_loaded

#### name

当同时使用多个时，必填，否则出现意料之外的效果

#### el

当想给某个区域添加加载蒙版时，可以添加值，可以是 id class

### icon_className

当自定义旋转图标时，可以添加自己的 class

也可以添加 icon_Innerhtml 自定义 html 代码
