var container = document.querySelector('#js-masonry');
var masonry;
imagesLoaded( container, function() {
  masonry = new Masonry( container, {
    columnWidth: 0,
    gutter: 0,
    itemSelector: '.photo-box'
  });
});
