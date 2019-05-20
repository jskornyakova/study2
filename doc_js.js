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