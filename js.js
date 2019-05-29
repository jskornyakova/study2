 
    if (!("a" in window)) {
        var a = 1;
    }
    alert(a);  //undefined



    var b = function a(x) {
        x && a(--x);
    };
    alert(a); //undefined, если бы "a" была определена, то вывелось бы значение

    

    function a(x) {
        return x * 2;
    }
    var a;
    alert(a); //'function a (x) {return x * 2;}'


    function b(x, y, a) {
        arguments[2] = 10;
        alert(a); // a=10
    }
    b(1, 2, 3);
    

    function a() {
        alert(this);
    }
    a.call(null); // представление глобального объека, [object Window]
