var marginsArray = [5,12,16];
var selectedMargin;

var onRun = function(context) {

  var sketch = context.api();
  var document = sketch.selectedDocument
  var page = document.selectedPage
  var selection = document.selectedLayers;

if(selection.isEmptyszzzz === true){
    sketch.message("Please select a layer")
  }else{

     var getStringFromUser = sketch.getStringFromUser("Enter a custom unit", "0");
     if(getStringFromUser == null){
      sketch.message("y u cancel 😕");
    }else{

      var firstMargin = Number(getStringFromUser);

      if(getStringFromUser != firstMargin){
        sketch.message('number only 🤖');
      }else{
        sketch.message('Custom unit set. use with q + arrows 🙃');
        sketch.setSettingForKey('firstMargin', firstMargin);
      }
    }
 }

};
