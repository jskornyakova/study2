product = [
    {
        id: 1,
        name: 'Брелок',
        price: 20,
        count: 3,
    },
    {
        id: 2,
        name: 'Компьютер',
        price: 7000,
        count: 3,
    },
    {
        id: 3,
        name: 'Iphone 6',
        price: 2000,
        count: 3,
    },
    {
        id: 4,
        name: 't-shirt',
        price: 300,
        count: 3,
    },
    {
        id: 5,
        name: 'Защитное стекло',
        price: 52,
        count: 3,
    },
    {
        id: 6,
        name: 'Ноутбук',
        price: 6500,
        count: 3,
    },
]   

$catalog = document.getElementById('catalog');

for (var i = 0; i < product.length; i++) {
    var $product = document.createElement('div');
    $product.className = 'product';
    $product.innerHTML = '<h3>'+ product[i].name+'</h3>'+'<p>'+ product[i].price+' руб. </p>';
    $button = document.createElement('button');
    $button.className = 'button';
    $button.id = i+1;
    $button.innerHTML = 'купить';
    $product.appendChild($button);
    $catalog.appendChild($product);
}


var $basket = document.getElementById('basket');
totalBasket = [];

var $sumBasket = document.createElement('div');
$sumBasket.className = 'sumBasket';
$basket.appendChild($sumBasket);

function totalBasketIs() {
    if (totalBasket.length == 0) {
        $sumBasket.innerHTML = '<p>Корзина пуста.</p>';
    } else {
        $sumBasket.innerHTML = '<p>В корзине '+ totalBasket.length + ' товаров на сумму ' + countBasketPrice()+' руб. </p>';  
    }
}

totalBasketIs();

var basket_price = 0;
function countBasketPrice() {
    var basket_price = 0;
    for (i=0; i < totalBasket.length; i++) { 
        basket_price += (totalBasket[i].price);
    }
    return basket_price;
} 
 
function init(){
	var $button = document.getElementsByTagName('button');
	for (var i = 0; i < $button.length; i++) {
		$button[i].onclick = addTotalBasket;
    }
}

function addTotalBasket(eventObj){
    console.log(eventObj);
    var eventElement = eventObj.target;
	var $buttonId = eventElement.id.split('_');
    var a = $buttonId[0];
     var $totalBasketObj = product[a-1];
    totalBasket.push($totalBasketObj)
    for (i = 0; i <= totalBasket.length; i++){
        var $product_basket = document.createElement('div');
        $product_basket.className = 'product_basket';
        $product_basket.innerHTML = '<h3>'+ totalBasket[i].name+'</h3>'+'<p>'+ totalBasket[i].price+' руб. </p>';
        $basket.appendChild($product_basket);
        totalBasketIs();
    }
 
}
window.onload = init;

function handleThumbnailClick(event) {
    var $preview = document.querySelector('#preview');
    if(event.target.tagName === 'IMG'){
        $preview.innerHTML = '';
        $preview.appendChild(event.targer.cloneNode(true));
    }
}

function init2() {
    var $thumbnails = document.querySelector('#thumbnails')

    for(i = 0; i < images.length; i++) {
        var $img= document.createElement('img');
        $img.src = images[i].thumbnail;
        $img.dataset.original = images[i].original;

        var $li = document.createElement('li')

        $li.appendChild($img);
        $thumbnails.appendChild($li);
    }
    $thumbnails.addEventListener('click', handleThumbnailClick);
}

window.addEventListener('load', init2);

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
