var { createCanvas } = require('canvas');
var echarts = require('echarts');
echarts.setCanvasCreator(createCanvas);

module.exports = {
    init:(width = 300,height = 300) => {
        let w = width,
            h = height;
        if(typeof width == 'object' && width != null){
            w = width.width || 300,
            h = width.height || 300;
        }
        var canvas = createCanvas(w, h);
        return echarts.init(canvas);
    }
}
