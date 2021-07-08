

# echarts-node
让echarts支持服务端渲染

## 安装
```
npm install echarts-node
如果安装报错：https://github.com/Automattic/node-canvas/wiki
```
## 使用
```
var echartsNode = require('echarts-node');
//配置项，canvas的尺寸等
var config = {
    width: 300,
    height: 300
};
var myChart = echartsNode.init(config);

//echarts配置
var option = {};
myChart.setOption(option);
```
## 函数说明
| 函数名 | 参数 | 描述  | 必填 | 返回值 |
| ----- |:------:|:-----:|:-----:|:-----:|
| init | Object config | 创建canvas，初始化echarts | 是 | Object echartsInstance |

## 配置项（config）

| 属性   | 类型   | 缺省值  | 描述  | 必填 |
| ----- |:------:|:-----:|:-----:|:-----:|
| width | Number | 300 | canvas宽度 | 否 |
| height | Number | 300 | canvas高度 | 否 |

## echarts实例（myChart）
https://echarts.apache.org/zh/api.html#echartsInstance

## echarts配置项（option）
https://echarts.apache.org/zh/api.html#echartsInstance.setOption