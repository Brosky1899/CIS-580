! function(t) {
    var e = {};

    function i(s) {
        if (e[s]) return e[s].exports;
        var r = e[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(s, r, function(e) {
                return t[e]
            }.bind(null, r));
        return s
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 3)
}([function(t, e) {
    t.exports = function() {
        var t = [],
            e = [],
            s = [],
            r = 0,
            h = 0,
            n = 0;
        return {
            load: function(o, a) {
                var l = 0;
                t = [], e = [], r = o.tilewidth, h = o.tileheight, n = o.width, o.height, o.tilesets.forEach(function(s, n) {
                    var o = new Image;
                    l++, o.onload = function() {
                        0 == --l && a.onload && a.onload()
                    }, o.src = s.image, e.push(o), console.log(s);
                    var d = Math.floor(s.imagewidth / r),
                        u = d * Math.floor(s.imageheight / h);
                    for (i = 0; i < u; i++) {
                        var c = {
                            image: o,
                            sx: i % d * r,
                            sy: 0,
                            solid: !(!s.tileproperties[i] || "true" != s.tileproperties[i].solid)
                        };
                        t.push(c)
                    }
                }), o.layers.forEach(function(e) {
                    if ("tilelayer" == e.type) {
                        var i = {
                            name: e.name,
                            width: e.width,
                            height: e.height,
                            visible: e.visible
                        };
                        t.length < Math.pow(2, 8) ? i.data = new Uint8Array(e.data) : t.length < Math.Pow(2, 16) ? i.data = new Uint16Array(e.data) : i.data = new Uint32Array(e.data), s.push(i)
                    }
                })
            },
            render: function(e) {
                s.forEach(function(i) {
                    if (i.visible)
                        for (y = 0; y < i.height; y++)
                            for (x = 0; x < i.width; x++) {
                                var s = i.data[x + i.width * y];
                                if (0 != s) {
                                    var n = t[s - 1];
                                    n.image && void 0 !== e && e.drawImage(n.image, n.sx, n.sy, r, h, x * r, y * h, r, h)
                                }
                            }
                })
            },
            tileAt: function(e, i, r) {
                return console.log("x: " + e), console.log("y: " + i), console.log(r), console.log(t), console.log(s), console.log(Math.round(Math.round(e / 32) + Math.round(i / 32 * n))), t[s[r].data[Math.round(e / 32) + Math.round(i / 32) * n]]
            }
        }
    }()
}, function(t) {
    t.exports = {
        height: 30,
        infinite: !1,
        layers: [{
          data:[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          height: 30,
            id: 5,
            name: "Tile Layer 1",
            opacity: 1,
            type: "tilelayer",
            visible: !0,
            width: 42,
            x: 0,
            y: 0
        }],
        nextlayerid: 6,
        nextobjectid: 1,
        orientation: "orthogonal",
        renderorder: "right-down",
        tiledversion: "1.2.0",
        tileheight: 32,
        tilesets: [{
            firstgid: 1,
            tilecount: 104,
            columns: 13,
            image: "tileset1.png",
            imageheight: 256,
            imagewidth: 416,
            margin: 0,
            name: "tileset1",
            properties: {},
            spacing: 0,
            tileheight: 32,
            tileproperties: {
                8: {
                    solid: "true"
                },
                3: {
                    solid: "true"
                }
            },
            tilewidth: 32
        }],
        tilewidth: 32,
        type: "map",
        version: 1.2,
        width: 42
    }
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAgCAYAAAALxXRVAAAEBElEQVR4Xu1cQXLbMAxMPtBLJ7dc+oT8/xF5Qi+5ZXrpB9phLCokDBALiqJsa320KK+42AVISNbzE/b5hw27GvXceZ48jfh9RJL/Pt6m6c8LkCn8v5+f1UX+eHlpTdXDsc4lvsEM+X8M/XnGqAwgg265RjGjhwMZkPi16Mi/zsA96a9ljNV8qPAlHYKIqAmJvxBK/rHEc4/6s0yxWfyZjE4TEn+j+cj/hYFb11/TgL2Zt5GJ0Cr4ZUDi92V+8l8zUJjw5vRHA+rbCCYAJsApBUAaEGq6pIyideGsihXYFDfx/7y9Pf18f282lrUxo/B7OtpGd9hd+o9YAWQujpy/sgxMX0HzH8HBFvykZ0Rzni5a/IcNmH/MaoNrJhwlgERG+lgmtI6PwveI1o4fbcDMF7gXghJwlIde/o80YDZfS28oD2EDIpWsdR8KOL9r6ZsNppHSOqY0JLrwUcK1BkjiBNiLDF36yoQ0G79jL7rOvxTtxF5Axb+X8DfoYdWfWgEBA6lL0HxBwPldBqABYyGXfNGA68Mirv6QhB6LRtWRpQEN8oZWIJnFZxuABgx3Q9f4H2HAYfferMzg7EMeDr9hQK0RMXz+DQNOwW8sQV38nZegLv7OBlzxy1I8XABbAhAt78j4syUA8m9WQNeAiJ6iYzT9XRlw1IYXqIKh/Wd0ssTXGWgsg4cuv8k/xj8N+M0TBTjw5jsNGDPg7stPrTVf3JAl/kLQxBVIuQwj/wfxnysgA3BQABZY8n9S/isD7p19lSpI/AspU5a/5P/CgLIPPox/GmAHAxiPn2mbgin8ly31dBG/Pj7ytUzBlxO3DOA12kYVCAv/9+trdQnec8fe9SL7YCgAAUFVmIEnYuAMJMUkJ4mQNisDArxB/PcG2uLq3gw4ynjeCkAaMI9HNBWJUak/WACAmCDzbVkCeOZDCZtlQCXgMk4w/5EAezzdiwFHG6/XgKiu0BhJA8INANSEHnHW77TO80QVqYQ9+Ci5yDji6y/w8nSDcIuMuSX+UwaGDSiqlzpXhMQoAVHzeRkrio8ENTKG+DRguQmH918RkXljpQgR43q/GTlO/NoE5H/M6z9QDWb9rRWQATgmADlg5P+c/NOAiwNogHMa4OgESAPSgF8MMAEdk4CuDGj9Dyt/XwbK+g55XYW1ByP+994M4VqaJ/G3B/+5Add7TbLSROP/qPiVAbXunHiXyZotNQI184h7buo7P7KIiH/dHTyIfzcxe/HfGNPT4Fe3IYoODvr91cPcyz8cqrdridfQyWNa44j4xe2hRlz24F/9k/ZyDTIuKH463YqpjP+p8C1CS1KSYTRS1D/UKmPluPTblgmtscT/jkjmjvzX1tV4kdrNZ9yM/v4DwFq9UxojCA0AAAAASUVORK5CYIIA"
}, function(t, e, s) {
    "use strict";
    s.r(e);
    class r {
        constructor() {
            this.oldState = {}, this.newState = {}, window.addEventListener("keydown", t => {
                t.preventDefault(), this.newState[t.key] = !0
            }), window.addEventListener("keyup", t => {
                t.preventDefault(), this.newState[t.key] = !1
            })
        }
        update() {
            this.oldState = JSON.parse(JSON.stringify(this.newState))
        }
        keyPressed(t) {
            return this.newState[t]
        }
        keyDown(t) {
            return this.newState[t] && !this.oldState[t]
        }
        keyUp(t) {
            return !this.newState[t] && this.oldState[t]
        }
    }
    var h = s(0),
        n = s(1);
    var o = s(0);
    s(2);
    var a = new class {
        constructor(t, e) {
            console.log(h), console.log(n), this._start = null, this.WIDTH = t, this.HEIGHT = e, this.input = new r, this.entities = [], this.backBuffer = document.createElement("canvas"), this.backBuffer.width = this.WIDTH, this.backBuffer.height = this.HEIGHT, this.backBufferCtx = this.backBuffer.getContext("2d"), this.screenBuffer = document.createElement("canvas"), this.screenBuffer.width = this.WIDTH, this.screenBuffer.height = this.HEIGHT, this.screenBufferCtx = this.screenBuffer.getContext("2d"), document.body.append(this.screenBuffer), h.load(n, {
                onload: function() {
                    h.render(this.backBufferCtx)
                }
            })
        }
        addEntity(t) {
            this.entities.push(t)
        }
        update(t) {
            this.entities.forEach(e => e.update(t, this.input)), this.input.update()
        }
        render(t) {
            this.backBufferCtx.fillStyle = "white", this.backBufferCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT), h.render(this.backBufferCtx), this.entities.forEach(e => e.render(t, this.backBufferCtx)), this.screenBufferCtx.drawImage(this.backBuffer, 0, 0)
        }
        loop(t) {
            var e = this._frame_start ? t - this._frame_start : 0;
            this.update(e), this.render(e), this._frame_start = t, window.requestAnimationFrame(t => {
                this.loop(t)
            })
        }
    }(1344, 960);
    a.addEntity(new class {
        constructor(t, e) {
            this.x = t, this.y = e, this.sprites = [], this.direction = "south", this.spritesheet = new Image, this.spritesheet.src = "../sprite/Mushroom.png";
            var s = Math.floor(7),
                r = s * Math.floor(1);
            for (i = 0; i < r; i++) {
                var h = {
                    image: this.spritesheet,
                    sx: i % s * 32,
                    sy: 0
                };
                this.sprites.push(h)
            }
            console.log(this.sprites)
        }
        isPassible(t, e) {
            var i = o.tileAt(t, e, 0);
            return console.log(i), i && !i.solid
        }
        update(t, e) {
            e.keyDown("ArrowLeft") && this.isPassible(this.x - 16, this.y) && (this.timer = 0), e.keyDown("ArrowRight") && this.isPassible(this.x + 16, this.y) && (this.timer = 0), e.keyDown("ArrowUp") && this.isPassible(this.x, this.y - 16) && (this.timer = 0), e.keyDown("ArrowDown") && this.isPassible(this.x, this.y + 16) && (this.timer = 0), e.keyPressed("ArrowLeft") && this.isPassible(this.x - 16, this.y) && (this.x--, this.direction = "west", this.timer += t), e.keyPressed("ArrowRight") && this.isPassible(this.x + 16, this.y) && (this.x++, this.direction = "east", this.timer += t), e.keyPressed("ArrowUp") && this.isPassible(this.x, this.y - 16) && (this.y--, this.direction = "north", this.timer += t), e.keyPressed("ArrowDown") && this.isPassible(this.x, this.y + 16) && (this.y++, this.direction = "south", this.timer += t), this.timer > 1e3
            
        }
        render(t, e) {
            switch (e.beginPath(), this.direction) {
                case "north":
                    e.drawImage(this.spritesheet, this.sprites[4].sx, this.sprites[4].sy, 32, 32, this.x, this.y, 32, 32);
                    break;
                case "east":
                    e.drawImage(this.spritesheet, this.sprites[2].sx, this.sprites[2].sy, 32, 32, this.x, this.y, 32, 32);
                    break;
                case "west":
                    e.drawImage(this.spritesheet, this.sprites[5].sx, this.sprites[5].sy, 32, 32, this.x, this.y, 32, 32);
                    break;
                default:
                    e.drawImage(this.spritesheet, this.sprites[0].sx, this.sprites[0].sy, 32, 32, this.x, this.y, 32, 32)
            }
        }
    }(100, 580)), a.loop()
}]);
