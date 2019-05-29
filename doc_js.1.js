
function handleThumbnailClick(event) {
    
    console.log(event)
    if(event.target.tagName === 'IMG'){
        var $overlay = document.querySelector('.overlay');
        $overlay.style.display = 'block';
        $overlay.querySelector('.preview').src = event.target.src;
    }

}

function handleCloseClick() {
        var $overlay = document.querySelector('.overlay');
        $overlay.style.display = 'none';
}



function init() {
    var $thumbnails = document.querySelector('#thumbnails')

    for(i = 0; i < images.length; i++) {
        var $img= document.createElement('img');
        $img.src = images[i].thumbnail;
        $img.dataset.original = images[i].original;

        var $li = document.createElement('li');

        $li.appendChild($img);
        $thumbnails.appendChild($li);
    }
    $thumbnails.addEventListener('click', handleThumbnailClick);
    var $close = document.querySelector('.close');
    $close.addEventListener('click', handleCloseClick);
    $next = document.querySelector('.next');
    $next.addEventListener('click', handleNextClick);
}

window.addEventListener('load', init);

var images = [
    {
        id: 1,
        thumbnail: 'http://www.topoboi.com/mini/201309/14529.jpg',
        original:'http://www.kartinki.me/pic/201305/1920x1080/kartinki.me-11590.jpg',
    },
    {
        id: 2,
        thumbnail: 'https://image.freepik.com/free-photo/_19-116981.jpg',
        original:'https://img.fonwall.ru/o/7f/pushistyy-kotenok.jpg?route=mid&amp;h=750',
    },
    {
        id: 3,
        thumbnail: 'https://www.artleo.com/mini/201106/2784.jpg',
        original:'https://images.wallpaperscraft.ru/image/kot_morda_son_pyatnistyy_52396_2560x1080.jpg',
    },
    
];

var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel = 0;

function handleNextClick(event) {
    nextCarousel();
}


function nextCarousel(){
    carousels[currentCarousel].className = 'carousel';
    currentCarousel = (currentCarousel+1)%carousels.length;
    carousels[currentCarousel].className = 'carousel demonstration';
}