
function handleThumbnailClick(event) {
    var $preview = document.querySelector('#preview');
    console.log(event)
    if(event.target.tagName === 'IMG'){
        $preview.innerHTML = '';
        $preview.appendChild(event.target.cloneNode(true));
    }
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
}

window.addEventListener('load', init);

var images = [
    {
        thumbnail: 'http://www.topoboi.com/mini/201309/14529.jpg',
        original:'http://www.kartinki.me/pic/201305/1920x1080/kartinki.me-11590.jpg',
    },
    {
        thumbnail: 'https://image.freepik.com/free-photo/_19-116981.jpg',
        original:'https://img.fonwall.ru/o/7f/pushistyy-kotenok.jpg?route=mid&amp;h=750',
    },
    {
        thumbnail: 'https://www.artleo.com/mini/201106/2784.jpg',
        original:'https://images.wallpaperscraft.ru/image/kot_morda_son_pyatnistyy_52396_2560x1080.jpg',
    },
    
];
