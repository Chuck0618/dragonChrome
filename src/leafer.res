type leaferConfig={
    view: string,
}
type rectHandle={}
 
type leaferHandle={
    add : (. rectHandle )=> unit
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

 



// @get external add: (leaferHandle) => (rectHandle)=> unit="add"

let lf= leaferJS({view: "mydiv"});

let re = rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    draggable: true,
})

let lfadd = (re)=>{lf.add(. re )} 
lfadd(re)


