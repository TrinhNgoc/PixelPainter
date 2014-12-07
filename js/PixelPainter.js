$(function() {
  function PixelPainter(width, height) {
    this.artboard = $("<div>");
    this.controls = $("<div>");

    for (var i = 0; i < width -1; i++) {
      var row = $('<div class="row">')
      for (var j = 0; j < height -1; j++) {
        var block = $('<div class="block">')
        $(row).append(block);
      }
     this.artboard.append(row); 
    }

    // return PixelPainter;
  }


  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});
