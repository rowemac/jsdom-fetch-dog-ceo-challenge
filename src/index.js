console.log('%c HI', 'color: firebrick')


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages()


document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
  });