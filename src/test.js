
let data = "data from global"

function _foo(){
    let data = "data from foo "
    console.log(this.data)
};

let x={
    data : "data from x",
    foo : _foo
}

x.foo();

// _foo();

console.log("-------------")
let foo3 = x.foo;
foo3.bind(x)();
let foo4 = foo3.bind(x);
foo4();

function combine(fun, v)
{
    console.log(foo3.bind)
    return fun(v)
}

let foo5= combine(foo3.bind,x)
foo5();