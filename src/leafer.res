type leaferConfig={
    view: string,
}
type rectHandle={
}
 
type rec admitBind={
    bind: (leaferHandle) =>  ((rectHandle,unit)=> unit)
} 
and leaferHandle={
    add :  admitBind
}


type rectConfig={
   x: int,
   y: int,
    width: int,
    height: int,
    fill: string,
    draggable: bool
}

@new @module("leafer-ui") external leaferJS: leaferConfig => leaferHandle = "Leafer"
@new @module("leafer-ui") external rect: rectConfig => rectHandle = "Rect"
let lf= leaferJS({view: "mydiv"})
let lfadd= lf.add.bind(lf);


let re = rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    draggable: true
}) 

lfadd(re,())