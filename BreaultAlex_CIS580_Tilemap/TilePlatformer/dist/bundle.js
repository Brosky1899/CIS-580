!function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t){e.exports=function(){var e=[],t=[],o=[],s=0,r=0,a=0;return{load:function(l,p){var d=0;e=[],t=[],s=l.tilewidth,r=l.tileheight,a=l.width,l.height,l.tilesets.forEach(function(o,a){var l=new Image;d++,l.onload=function(){0==--d&&p.onload&&p.onload()},l.src=o.image,t.push(l);var n=Math.floor(o.imagewidth/s),u=n*Math.floor(o.imageheight/r);for(console.log(o),i=0;i<u;i++){var h={image:l,sx:i%n*s,sy:0,solid:!(!o.tiles[i]||!o.tiles[i].solid)};e.push(h)}e[4].solid=!0}),l.layers.forEach(function(t){if("tilelayer"==t.type){var i={name:t.name,width:t.width,height:t.height,visible:t.visible};e.length<Math.pow(2,8)?i.data=new Uint8Array(t.data):e.length<Math.Pow(2,16)?i.data=new Uint16Array(t.data):i.data=new Uint32Array(t.data),o.push(i)}})},render:function(t){o.forEach(function(i){if(i.visible)for(y=0;y<i.height;y++)for(x=0;x<i.width;x++){var o=i.data[x+i.width*y];if(e.length>0&&0!=o){var a=e[o-1];a.image&&void 0!==t&&t.drawImage(a.image,a.sx,a.sy,s,r,x*s,y*r,s,r)}}})},tileAt:function(t,i,s){return e[o[s].data[Math.round(t/32)+Math.round(i/32)*a]]}}}()},function(e){e.exports={height:30,infinite:!1,layers:[{data:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,3,3,3,3,1,1,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],height:30,id:1,name:"Tile Layer 1",opacity:1,type:"tilelayer",visible:!0,width:42,x:0,y:0}],nextlayerid:2,nextobjectid:1,orientation:"orthogonal",renderorder:"right-down",tiledversion:"1.2.0",tileheight:32,tilesets:[{columns:13,firstgid:1,image:"../tilesets/tileset.png",imageheight:256,imagewidth:416,margin:0,name:"tileset",spacing:0,tilecount:104,tileheight:32,tiles:[{id:2,properties:[{name:"solid",type:"bool",value:!0}]},{id:3,properties:[{name:"solid",type:"bool",value:!0}]},{id:4,properties:[{name:"solid",type:"bool",value:!0}]},{id:5,properties:[{name:"solid",type:"bool",value:!0}]},{id:6,properties:[{name:"solid",type:"bool",value:!0}]},{id:7,properties:[{name:"solid",type:"bool",value:!0}]},{id:8,properties:[{name:"solid",type:"bool",value:!0}]},{id:9,properties:[{name:"solid",type:"bool",value:!0}]},{id:10,properties:[{name:"solid",type:"bool",value:!0}]},{id:11,properties:[{name:"solid",type:"bool",value:!0}]},{id:12,properties:[{name:"solid",type:"bool",value:!0}]},{id:15,properties:[{name:"solid",type:"bool",value:!0}]},{id:16,properties:[{name:"solid",type:"bool",value:!0}]},{id:17,properties:[{name:"solid",type:"bool",value:!0}]},{id:18,properties:[{name:"solid",type:"bool",value:!0}]},{id:19,properties:[{name:"solid",type:"bool",value:!0}]},{id:20,properties:[{name:"solid",type:"bool",value:!0}]},{id:21,properties:[{name:"solid",type:"bool",value:!0}]},{id:22,properties:[{name:"solid",type:"bool",value:!0}]},{id:23,properties:[{name:"solid",type:"bool",value:!0}]},{id:24,properties:[{name:"solid",type:"bool",value:!0}]},{id:25,properties:[{name:"solid",type:"bool",value:!0}]},{id:26,properties:[{name:"solid",type:"bool",value:!1}]},{id:27,properties:[{name:"solid",type:"bool",value:!1}]},{id:28,properties:[{name:"solid",type:"bool",value:!1}]},{id:29,properties:[{name:"solid",type:"bool",value:!1}]},{id:30,properties:[{name:"solid",type:"bool",value:!1}]},{id:31,properties:[{name:"solid",type:"bool",value:!1}]},{id:32,properties:[{name:"solid",type:"bool",value:!1}]},{id:33,properties:[{name:"solid",type:"bool",value:!1}]},{id:34,properties:[{name:"solid",type:"bool",value:!1}]},{id:35,properties:[{name:"solid",type:"bool",value:!1}]},{id:36,properties:[{name:"solid",type:"bool",value:!1}]},{id:37,properties:[{name:"solid",type:"bool",value:!1}]},{id:38,properties:[{name:"solid",type:"bool",value:!1}]},{id:39,properties:[{name:"solid",type:"bool",value:!1}]},{id:40,properties:[{name:"solid",type:"bool",value:!1}]},{id:41,properties:[{name:"solid",type:"bool",value:!1}]},{id:42,properties:[{name:"solid",type:"bool",value:!1}]},{id:43,properties:[{name:"solid",type:"bool",value:!1}]},{id:44,properties:[{name:"solid",type:"bool",value:!1}]},{id:45,properties:[{name:"solid",type:"bool",value:!1}]},{id:46,properties:[{name:"solid",type:"bool",value:!1}]},{id:47,properties:[{name:"solid",type:"bool",value:!1}]},{id:48,properties:[{name:"solid",type:"bool",value:!1}]},{id:49,properties:[{name:"solid",type:"bool",value:!1}]},{id:50,properties:[{name:"solid",type:"bool",value:!1}]},{id:51,properties:[{name:"solid",type:"bool",value:!1}]},{id:59,properties:[{name:"solid",type:"bool",value:!1}]},{id:60,properties:[{name:"solid",type:"bool",value:!1}]},{id:61,properties:[{name:"solid",type:"bool",value:!1}]},{id:62,properties:[{name:"solid",type:"bool",value:!1}]},{id:63,properties:[{name:"solid",type:"bool",value:!1}]},{id:64,properties:[{name:"solid",type:"bool",value:!1}]},{id:72,properties:[{name:"solid",type:"bool",value:!1}]},{id:73,properties:[{name:"solid",type:"bool",value:!1}]},{id:74,properties:[{name:"solid",type:"bool",value:!1}]},{id:75,properties:[{name:"solid",type:"bool",value:!1}]},{id:76,properties:[{name:"solid",type:"bool",value:!1}]},{id:77,properties:[{name:"solid",type:"bool",value:!1}]},{id:85,properties:[{name:"solid",type:"bool",value:!1}]},{id:86,properties:[{name:"solid",type:"bool",value:!1}]},{id:87,properties:[{name:"solid",type:"bool",value:!1}]},{id:88,properties:[{name:"solid",type:"bool",value:!1}]},{id:89,properties:[{name:"solid",type:"bool",value:!1}]},{id:90,properties:[{name:"solid",type:"bool",value:!1}]},{id:98,properties:[{name:"solid",type:"bool",value:!1}]},{id:99,properties:[{name:"solid",type:"bool",value:!1}]},{id:100,properties:[{name:"solid",type:"bool",value:!1}]},{id:101,properties:[{name:"solid",type:"bool",value:!1}]},{id:102,properties:[{name:"solid",type:"bool",value:!1}]},{id:103,properties:[{name:"solid",type:"bool",value:!1}]}],tilewidth:32}],tilewidth:32,type:"map",version:1.2,width:42}},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,o){"use strict";o.r(t);class s{constructor(){this.oldState={},this.newState={},window.addEventListener("keydown",e=>{e.preventDefault(),this.newState[e.key]=!0}),window.addEventListener("keyup",e=>{e.preventDefault(),this.newState[e.key]=!1})}update(){this.oldState=JSON.parse(JSON.stringify(this.newState))}keyPressed(e){return this.newState[e]}keyDown(e){return this.newState[e]&&!this.oldState[e]}keyUp(e){return!this.newState[e]&&this.oldState[e]}}var r=o(0),a=o(1);var l=o(0);o(2);var p=new class{constructor(e,t){this._start=null,this.WIDTH=e,this.HEIGHT=t,this.input=new s,this.entities=[],this.backBuffer=document.createElement("canvas"),this.backBuffer.width=this.WIDTH,this.backBuffer.height=this.HEIGHT,this.backBufferCtx=this.backBuffer.getContext("2d"),this.screenBuffer=document.createElement("canvas"),this.screenBuffer.width=this.WIDTH,this.screenBuffer.height=this.HEIGHT,this.screenBufferCtx=this.screenBuffer.getContext("2d"),document.body.append(this.screenBuffer),r.load(a,{onload:function(){r.render(this.backBufferCtx)}})}addEntity(e){this.entities.push(e)}update(e){this.entities.forEach(t=>t.update(e,this.input)),this.input.update()}render(e){this.backBufferCtx.fillStyle="white",this.backBufferCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),r.render(this.backBufferCtx),this.entities.forEach(t=>t.render(e,this.backBufferCtx)),this.screenBufferCtx.drawImage(this.backBuffer,0,0)}loop(e){var t=this._frame_start?e-this._frame_start:0;this.update(t),this.render(t),this._frame_start=e,window.requestAnimationFrame(e=>{this.loop(e)})}}(1344,960);p.addEntity(new class{constructor(e,t){this.x=e,this.y=t,this.sprites=[],this.direction="south",this.spritesheet=new Image,this.spritesheet.src="../sprite/Mushroom.png";var o=Math.floor(7),s=o*Math.floor(1);for(i=0;i<s;i++){var r={image:this.spritesheet,sx:i%o*32,sy:0};this.sprites.push(r)}}isPassible(e,t){var i=l.tileAt(e,t,0);return console.log(i),i&&!i.solid}update(e,t){t.keyPressed("ArrowLeft")&&this.isPassible(this.x-16,this.y)&&(this.x--,this.direction="west"),t.keyPressed("ArrowRight")&&this.isPassible(this.x+16,this.y)&&(this.x++,this.direction="east"),t.keyPressed("ArrowUp")&&this.isPassible(this.x,this.y-16)&&(this.y--,this.direction="north"),t.keyPressed("ArrowDown")&&this.isPassible(this.x,this.y+16)&&(this.y++,this.direction="south")}render(e,t){switch(t.beginPath(),this.direction){case"north":t.drawImage(this.spritesheet,this.sprites[1].sx,this.sprites[4].sy,32,32,this.x,this.y,32,32);break;case"east":t.drawImage(this.spritesheet,this.sprites[1].sx,this.sprites[3].sy,32,32,this.x,this.y,32,32);break;case"west":t.drawImage(this.spritesheet,this.sprites[1].sx,this.sprites[6].sy,32,32,this.x,this.y,32,32);break;default:t.drawImage(this.spritesheet,this.sprites[1].sx,this.sprites[1].sy,32,32,this.x,this.y,32,32)}}}(100,580)),p.loop()}]);