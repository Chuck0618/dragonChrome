type leaferConfig = {view: Dom.window, width?: int, height?: int}
type leaferHandle = {}
type cordinate = {x: int, y: int}
type fillConfig = {type_: string, url: string, mode: string, offset: cordinate}
type rectConfig = {
  x: int,
  y: int,
  width: int,
  height: int,
  mutable fill: option<fillConfig>,
  draggable: bool,
}
type rectHandle = rectConfig
type eventHandle = {_frame: string}
@new @module("leafer-ui") external 
leaferJS: leaferConfig => leaferHandle = "Leafer"
@new @module("leafer-ui") external 
rect: rectConfig => rectHandle = "Rect"
@val @module("leafer-ui") external 
event:eventHandle = "AnimateEvent";
@send external on_:(leaferHandle, string, (unit)=>unit) => unit = "on_"
@send external 
add : (leaferHandle, rectHandle ) => unit = "add"
let leafer: leaferHandle
let x_offset: array<int>
let fillContainer: array<fillConfig>
let fillx: int => unit
let rectCurrent: rectHandle
let flag: ref<int>
let flagTimeup: ref<bool>
let rectTimeDuration: int
let rectUpdate: unit => unit
let name: unit => string
