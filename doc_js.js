product = [
    {
        id: 1,
        name: 'Брелок',
        price: 20,

    },
    {
        id: 2,
        name: 'Компьютер',
        price: 7000,

    },
    {
        id: 3,
        name: 'Iphone 6',
        price: 2000,

    },
    {
        id: 4,
        name: 't-shirt',
        price: 300,

    },
    {
        id: 5,
        name: 'Защитное стекло',
        price: 52,

    },
    {
        id: 6,
        name: 'Ноутбук',
        price: 6500,

    },
]   

function buildCatalog () { //создаем каталог
    var $catalog = document.getElementById('catalog');

    for (var i = 0; i < product.length; i++) {

        var $template = document.querySelector('#template').children[0].cloneNode(true);

        $template.querySelector('.title').textContent = product[i].name;
        $template.querySelector('.price').textContent = product[i].price;
        $template.querySelector('.button').dataset.id = product[i].id;
        $template.querySelector('.button').dataset.name = product[i].name;
        $template.querySelector('.button').dataset.price = product[i].price;


        $catalog.appendChild($template);
    }
}



var $basket = document.getElementById('basket');
totalBasket = [];

var $sumBasket = document.createElement('div');
$sumBasket.className = 'sumBasket';
$basket.appendChild($sumBasket);


function totalBasketIs(items) {
    var total = 0;
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
        count += items[i].quantity;
    }
    var message = '';
    
    if (items.length) {
        message = 'В корзине ' + count + ' товаров на сумму ' + total + ' рублей';
        createElementBasket();
    } else {
        message = 'Корзина пуста.';
    }

    $sumBasket.textContent = message;
}


function isExist(id){
    for(var i = 0; i < totalBasket.length; i++) {
        if(totalBasket[i].id === id) {
            return true;
        } 
    }
    return false;
}

function findIdx(id) {
    for (var i = 0; i < totalBasket.length; i++) {
        if(totalBasket[i].id === id) {
            return i;
        }
    }
}

function handleBuyClick(event) {
    if(event.target.tagName === 'BUTTON') {
        if(isExist(+event.target.dataset.id)) {
            var idx = findIdx(+event.target.dataset.id);
            totalBasket[idx].quantity++;
            
        } else {
            totalBasket.push(
            {
                id:+event.target.dataset.id,
                name: event.target.dataset.name,
                price: +event.target.dataset.price,
                quantity: 1,
            })
            
        }
      
        totalBasketIs(totalBasket);
        delProductElement();
    }
    
}

totalBasketIs(totalBasket);

function delProductElement() {
    var elem = document.querySelectorAll('.product_basket');
    if(elem.length > 1) {
        document.querySelector('.product_basket').remove();
    }
}

function createElementBasket(){
    var $product_basket = document.createElement('div');
    $product_basket.className = 'product_basket';

    for (var i = 0; i < totalBasket.length; i++) {

        var $elem_basket = document.querySelector('#template').children[1].cloneNode(true);
    
        $elem_basket.querySelector('.title2').textContent = 'Наименование: ' + totalBasket[i].name;
        $elem_basket.querySelector('.price2').textContent = 'Цена: ' + totalBasket[i].price;
        $elem_basket.querySelector('.quantity').textContent = 'Количество: ' + totalBasket[i].quantity;
        $elem_basket.querySelector('.sumElem').textContent = 'Сумма: ' + (totalBasket[i].quantity * totalBasket[i].price);
        $elem_basket.querySelector('.delete2').dataset.id = totalBasket[i].id;
    
        $product_basket.appendChild($elem_basket);

    }

    $basket.appendChild($product_basket);
}

function handleDelElemClick(event) {
    console.log(event);
 
}

function init(){
    var $catalog = document.querySelector('#catalog');
    $catalog.addEventListener('click', handleBuyClick);
    buildCatalog ();                                               
    $basket.addEventListener('click', handleDelElemClick);
}


window.onload = init;