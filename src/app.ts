import {Rect, Leafer,  AnimateEvent} from "leafer-ui"
const leafer = new Leafer({view: "myview",
width: 600,
height: 400,
})
const fill1 = {  
    type: 'image',
    url: 'dragon.png',
    mode: 'clip',
    offset: { x: -850, y: 2 },
    // scale: { x: 1.1, y: 1.1 },
    rotation: 0
}
const fill2 = {  
    type: 'image',
    url: 'dragon.png',
    mode: 'clip',
    offset: { x: -894, y: 2 },
    // scale: { x: 1.1, y: 1.1 },
    rotation: 0
}
const x_offset:number[]=[850,850+44,850+44*2,850+44*3,850+44*4];
const IPaint=[];

for(let x1 of x_offset){
    let fill={
        type: 'image',
        url: 'dragon.png',
        mode: 'clip',
        offset: { x: -x1, y: 2 },
        // scale: { x: 1.1, y: 1.1 },
        rotation: 0
    };
    IPaint.push(fill);
}  

const rect = new Rect({
    width: 39,
    height: 56,
    fill: IPaint[0],
    draggable: true,
})
leafer.add(rect);

function getSec(){
    return Math.floor(Date.now());
}


let flag = 0;
let tick = getSec();
let rectTimeDuration=200;


function rectUpdate()
{
    if (getSec()-tick >rectTimeDuration){
        tick = getSec();
        flag = (flag+1) % IPaint.length;
        rect.fill = IPaint[flag]; 
    }
    return ;
}
const event = leafer.on_(AnimateEvent.FRAME, () => { 
    rectUpdate();
    console.log("test")
    // rect.forceUpdate();
})
