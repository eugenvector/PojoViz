var Canvas = require('../view/Canvas'),
  canvas;

module.exports = {
  clean: function () {
    if (canvas) {
      canvas.destroy();
    }
  },
  render: function (data) {
    canvas = new Canvas(data);
    canvas.render();
  }
};