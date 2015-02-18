var spinnerContainer = document.getElementById('spinner-container');
var spinner = new Spinner({top: '100px'}).spin(spinnerContainer);

var container = document.getElementById('photo-group');
if (container) {
  imagesLoaded( container, function() {
    spinnerContainer.className += 'hidden';
    new Masonry( container, {
      columnWidth: 0,
      gutter: 0,
      itemSelector: '.photo-box'
    });
  });
}
