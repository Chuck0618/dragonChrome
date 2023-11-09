
let data = "data from global"

function _foo(){
    let data = "data from foo "
    console.log(this.data)
};

class XX{
    data="data from XX";
    foo(a){
    console.log(this.data+a) 
    }
}
let xx = new XX()

function _1(f, v)
{
    f(v)
}
let foo = _1( xx.foo.bind , xx);

_1(foo,"haha");
// _foo();