var echarts = require('./index.js');
var option = {
    animation:false,
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
var myChart = echarts.init(300,300);
myChart.setOption(option);
var src = myChart.getDataURL({
    pixelRatio: 2,
    backgroundColor: '#fff'
});
console.log(src);