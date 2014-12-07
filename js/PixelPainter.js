$(function() {
  function PixelPainter(width, height) {
    this.artboard = $("<div>");
    this.controls = $("<div>");

    for (var i = 0; i < width; i++) {
      var row = $('<div class="row">')
      for (var j = 0; j < height; j++) {
        var block = $('<div class="block">')
        $(row).append(block);
      }
     this.artboard.append(row); 
    }

    for (var i = 0; i < 15; i++) {
      var row = $('<div class="row">')
      for (var j = 0; j < 9; j++) {
        var block = $('<div class="block">')
        $(row).append(block);
        // Random Color Generator
        var rgb = [];
        for (var k = 0; k < 3; k++) {
          rgb.push(Math.floor(Math.random() * 255))
        }
        block.css('background-color', 'rgb(' + rgb.join(',') + ')');
      }
     this.controls.append(row); 
    }

  }


  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});
