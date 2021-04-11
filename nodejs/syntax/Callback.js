// function a() {
//     console.log("A");
// }
// a();
// 이름이 없는 함수 : 익명 함수

var a = function () {
    console.log("A");
};

function showfunc(callback) {
    callback();
}

showfunc(a);
