var container = document.querySelector('#photo-group');
if (container) {
  imagesLoaded( container, function() {
    new Masonry( container, {
      columnWidth: 0,
      gutter: 0,
      itemSelector: '.photo-box'
    });
  });
}
