var onRun = function(context) {

  var sketch = context.api();
  var document = sketch.selectedDocument
  var page = document.selectedPage
  var selection = document.selectedLayers;

if(selection.is === true){
    sketch.message("Please select a layer")
  }else{
     selection.iterate(function(layer){
     var frame = layer.frame;
     sketch.log(frame)

     var nudgeByFirstMargin = sketch.settingForKey('firstMargin') || 5;


     var newX = frame.x;
     var newY = frame.y;
     var newHeight = frame.height + nudgeByFirstMargin;
     var newWidth = frame.width;

     var rect = {
      height : newHeight,
      width : newWidth,
      x : newX,
      y : newY
     }

     layer.frame = rect;

  })

 }

 };
