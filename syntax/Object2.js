// array, object
// array : 순서대로 정렬
// object : 무작위 정렬

// 배열과 객체는 서로 연관되어 담을 수 있다
var f = function () {
    console.log(1 + 1);
    console.log(1 + 2);
};
var a = [f];
a[0]();

var o = {
    func: f,
};
o.func();

// statement 값이 될 수 없다
// var i = if (true) {console.log(1)};

// var w = while(true) {console.log(1)};
