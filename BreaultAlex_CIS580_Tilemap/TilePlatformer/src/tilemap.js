// Tilemap engine defined using the Module pattern
module.exports = (function (){
    var tiles = [],
        tilesets = [],
        layers = [],
        tileWidth = 0,
        tileHeight = 0,
        mapWidth = 0,
        mapHeight = 0;

    var load = function(mapData, options) {

      var loading = 0;

      // Release old tiles & tilesets
      tiles = [];
      tilesets = [];

      // Resize the map
      tileWidth = mapData.tilewidth;
      tileHeight = mapData.tileheight;
      mapWidth = mapData.width;
      mapHeight = mapData.height;

      // Load the tileset(s)
      mapData.tilesets.forEach( function(tilesetmapData, index) {
        // Load the tileset image
        var tileset = new Image();
        loading++;
        tileset.onload = function() {
          loading--;
          if(loading == 0 && options.onload) options.onload();
        }
        tileset.src = tilesetmapData.image;
        tilesets.push(tileset);

        // Create the tileset's tiles
        var colCount = Math.floor(tilesetmapData.imagewidth / tileWidth),
            rowCount = Math.floor(tilesetmapData.imageheight / tileHeight),
            tileCount = colCount * rowCount;

        console.log(tilesetmapData);

        for(i = 0; i < tileCount; i++) {
          //if (tilesetmapData.)

          var tile = {
            // Reference to the image, shared amongst all tiles in the tileset
            image: tileset,
            // Source x position.  i % colCount == col number (as we remove full rows)
            sx: (i % colCount) * tileWidth,
            // Source y position. i / colWidth (integer division) == row number
            //sy: Math.floor(i / rowCount) * tileHeight,
            sy: 0,
            // Indicates a solid tile (i.e. solid property is true).  As properties
            // can be left blank, we need to make sure the property exists.
            // We'll assume any tiles missing the solid property are *not* solid
            solid: (tilesetmapData.tiles[i] && tilesetmapData.tiles[i].solid) ? true : false
          }

          tiles.push(tile);
        }
        tiles[4].solid = true;
      });

      // Parse the layers in the map
      mapData.layers.forEach( function(layerData) {

        // Tile layers need to be stored in the engine for later
        // rendering
        if(layerData.type == "tilelayer") {
          // Create a layer object to represent this tile layer
          var layer = {
            name: layerData.name,
            width: layerData.width,
            height: layerData.height,
            visible: layerData.visible
          }

          // Set up the layer's data array.  We'll try to optimize
          // by keeping the index data type as small as possible
          if(tiles.length < Math.pow(2,8))
            layer.data = new Uint8Array(layerData.data);
          else if (tiles.length < Math.Pow(2, 16))
            layer.data = new Uint16Array(layerData.data);
          else
            layer.data = new Uint32Array(layerData.data);

          // save the tile layer
          layers.push(layer);
        }
      });
    }

    var render = function(screenCtx) {
      layers.forEach(function(layer){

        // Only draw layers that are currently visible
        if(layer.visible) {
          for(y = 0; y < layer.height; y++) {
            for(x = 0; x < layer.width; x++) {
              var tileId = layer.data[x + layer.width * y];
              //console.log(tiles);
              if (tiles.length > 0) {
              // tiles with an id of 0 don't exist
                if(tileId != 0) {
                  var tile = tiles[tileId - 1];
                  if(tile.image && screenCtx !== undefined) { // Make sure the image has loaded
                      screenCtx.drawImage(
                      tile.image,     // The image to draw
                      tile.sx, tile.sy, tileWidth, tileHeight, // The portion of image to draw
                      x*tileWidth, y*tileHeight, tileWidth, tileHeight // Where to draw the image on-screen
                    );
                  }
                }
              }
            }
          }
        }

      });
    }

    var tileAt = function(x, y, layer) {


      // sanity check
      // if(layer < 0 || x < 0 || y < 0 || layer >= layers.length || x > mapWidth || y > mapHeight)
      //   return undefined;
      return tiles[layers[layer].data[Math.round(x/32) + Math.round((y/32)) * mapWidth]];
    }

    // Expose the module's public API
    return {
      load: load,
      render: render,
      tileAt: tileAt
    }


  })();