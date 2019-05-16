var $container = document.getElementById('container');
var $table = document.createElement('table');
$table.className = 'task_table';

for (var i = 0; i < 8; i++) {
    var $row = document.createElement('tr');
    $row.className = 'task';

    for (var j = 0; j < 8; j++) {
        var $cell = document.createElement('td');
        $cell.className = 'task_black';
        $row.appendChild($cell);
    }
    $table.appendChild($row);
}
$container.appendChild($table);


var $num = document.createElement('div'); //создаем ячейки для цифр
$num.className = 'num';

for (i = 0; i < 8; i++) {
    var $task_num = document.createElement('div');
    $task_num.className = 'task_num';
    $task_num.innerHTML = 8-i;
    $num.appendChild($task_num);
}

$container.appendChild($num);

var $chess = document.getElementById('chess');
var arr = ['a','b','c','d','e','f','g','h'];
var $abc = document.createElement('div'); //создаем ячейки для букв
$abc.className = 'abc';

for (i = 0; i < 8; i++) {
    var $task_abc = document.createElement('div');
    $task_abc.className = 'task_abc';
    $task_abc.innerHTML = arr[i];
    $abc.appendChild($task_abc);
}

$chess.appendChild($abc);

product = [
    {
        id: 1,
        name: 't-shirt',
        price: 52,
        count: 3,
    },
    {
        id: 2,
        name: 't-shirt',
        price: 52,
        count: 3,
    },
    {
        id: 3,
        name: 't-shirt',
        price: 52,
        count: 3,
    },
    {
        id: 4,
        name: 't-shirt',
        price: 52,
        count: 3,
    },
    {
        name: 't-shirt',
        price: 52,
        count: 3,
    },
    {
        name: 't-shirt',
        price: 52,
        count: 3,
    },
]   

$catalog = document.getElementById('catalog');

for (i = 0; i < product.length; i++) {
    var $product = document.createElement('div');
    $product.className = 'product';
    $product.innerHTML = '<h3>'+ product[i].name+'</h3>'+'<p>'+ product[i].price+' USD </p>';
    $button = document.createElement('button');
    $button.className = 'button';
    $button.innerHTML = 'купить';
    $product.appendChild($button);
    $catalog.appendChild($product);
}


var $basket = document.getElementById('basket');
totalBasket = [];
totalBasketIs();
function totalBasketIs() {
    if (totalBasket.length == 0) {
        document.write('Корзина пуста. ');
    } else {

        document.write('В корзине '+ totalBasket.length + ' товаров на сумму ' + countBasketPrice()+" рублей");  
    }
}


for (i=0; i < 3; i++) { 
    
    totalBasket[i] = product[i];
}

totalBasketIs();
var basket_price = 0;
function countBasketPrice() {
    var basket_price = 0;
    for (i=0; i < totalBasket.length; i++) { 
        basket_price += (totalBasket[i].price * totalBasket[i].count);
    }
    return basket_price;
} 
 
