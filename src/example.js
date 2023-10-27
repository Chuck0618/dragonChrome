import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: "mydiv" })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 20,
    height: 20,
    fill: '#32cd79',
    draggable: true
})

leafer.add(rect)