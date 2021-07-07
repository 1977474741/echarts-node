var { createCanvas } = require('canvas');
var echarts = require('echarts');
echarts.setCanvasCreator(createCanvas);

module.exports = {
    init:(width = 300,height = 300) => {
        let w = width,
            h = height;
        if(typeof width == 'object' && width != null){
            w = width.width,
            h = width.height;
        }
        var canvas = createCanvas(w, h);
        return echarts.init(canvas);
    }
}
