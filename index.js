var { createCanvas } = require('canvas');
var echarts = require('echarts');
echarts.setCanvasCreator(createCanvas);

module.exports = {
    init: function(width,height){
        let w = width || 300,
            h = height || 300;
        if(typeof width == 'object' && width != null){
            w = width.width || 300,
            h = width.height || 300;
        }
        var canvas = createCanvas(w, h);
        return echarts.init(canvas);
    }
}
