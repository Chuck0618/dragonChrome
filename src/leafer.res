type leaferConfig={
    view: string,
}
type rectHandle={}
 
type leaferHandle={}


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

@send external addRect: (leaferHandle, rectHandle) => unit = "add"



// @get external add: (leaferHandle) => (rectHandle)=> unit="add"
let main=()=>{"leafer-ui writting by rescript"}
let leafer= leaferJS({view: "mydiv"});

let re = rect({
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "#32cd29",
    draggable: true,
})

// let lfadd = (re)=>{lf.add(. re )} 
// lfadd(re)
addRect(leafer, re);



