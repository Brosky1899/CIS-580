/**
 * Javascript for Mancala Game
 * Alex Breault - CIS 580 - Project 1
 * function to set up the game and initialize values
 */
var Mancala = function() {
    "use strict";
    var a = function(a) {
        this.game = a;
        this.playerOne_pits = [4, 4, 4, 4, 4, 4];
        this.playerTwo_pits = [4, 4, 4, 4, 4, 4];
        this.playerOne_store = 0;
        this.playerTwo_store = 0;
    };
    /*
    * function to swap values of current player
     */
    return a.prototype.flip_board = function() {
        var a = this.playerOne_pits;
        this.playerOne_pits = this.playerTwo_pits;
        this.playerTwo_pits = a;
        var b = this.playerOne_store;
        this.playerOne_store = this.playerTwo_store;
        this.playerTwo_store = b;
    },
     /*
     function that gets pebbles and values
      */
    a.prototype.get_pebbles = function(a) {
      if (6 === a) return this.playerOne_store;
      if (13 === a) return this.playerTwo_store;
      if (6 > a) return this.playerOne_pits[a];
      if (a > 6) return this.playerTwo_pits[a-7];
        },
    /*
    function that sets pebbles and values
     */
    a.prototype.set_pebbles = function(a, b) {
        6 === a ? this.playerOne_store = b : 13 === a ? this.playerTwo_store = b : 6 > a ? this.playerOne_pits[a] = b : a > 6 && (this.playerTwo_pits[a - 7] = b)
    },
    /*
    function that adds pebbles and values
     */
    a.prototype.add_pebbles = function(a, b) {
        6 === a ? this.playerOne_store += b : 13 === a ? this.playerTwo_store[a] += b : 6 > a ? this.playerOne_pits[a] += b : a > 6 && (this.playerTwo_pits[a - 7] += b)
    }, a
}();
! function() {
  /*
  function to handle all pebble movement
   */
    "use strict";
    Mancala.prototype.move_pebbles = function(a) {
        if (this.get_pebbles(a) < 1) return !1;
        var b = this.get_pebbles(a);
        for (this.set_pebbles(a, 0), this.game.draw_pebbles(a); b > 0;) ++a, a > 12 && (a = 0), this.add_pebbles(a, 1), b--, this.game.draw_pebbles(a);
        var c = 5 - a;
        return 6 > a && 1 === this.playerOne_pits[a] && this.playerTwo_pits[c] > 0 && (this.playerOne_store += this.playerTwo_pits[c] + 1, this.game.draw_pebbles(6), this.playerOne_pits[a] = 0, this.playerTwo_pits[c] = 0, this.game.draw_pebbles(a), this.game.draw_pebbles(12 - a)), 6 !== a
    }
}();
! function() {
    "use strict";
    /*
    function to check winner
    gets called after each move
     */
    Mancala.prototype.check_winner = function() {
        var a = function(a) {
                return a.every(function(a) {
                    return 0 === a
                })
            },
            b = a(this.playerOne_pits),
            c = a(this.playerTwo_pits);
        if (!b && !c) return -1;
        var d;
        if (b && !c)
            for (d = 0; 6 > d; d++) {
              this.playerTwo_store += this.playerTwo_pits[d];
              this.playerTwo_pits[d] = 0;
            }
        else if (c && !b)
            for (d = 0; 6 > d; d++) {
              this.playerOne_store += this.playerOne_pits[d];
              this.playerOne_pits[d] = 0;
            }
        return this.game.draw_all_pebbles(),
               this.playerOne_store > this.playerTwo_store ? "two" === this.game.player ? 2 : 1 : this.playerTwo_store > this.playerOne_store ? "two" === this.game.player ? 1 : 2 : 0
    }
}();
var Game = function() {
    "use strict";
    var a = function(a, b) {
      /*
      function to determine current player
       */
        this.mancala = new a(this);
        this.player = "two" === b ? "two" : "one";
    };
    return a.prototype.init = function() {
      /*
      function to prep board
       */
        this.refresh_queries();
        this.draw_all_pebbles();
    }, a.prototype.get_playerTwo_player = function() {
      /*
      function to get player
       */
        return "one" === this.player ? "two" : "one"
    }, a.prototype.refresh_queries = function() {
      /*
      function to set player pits and stores
       */
        this.playerOne_player_pits = document.querySelectorAll(".row.player-" + this.player + " .pit p");
        this.playerTwo_player_pits = document.querySelectorAll(".row.player-" + this.get_playerTwo_player() + " .pit p");
        this.playerOne_player_store = document.querySelector(".store.player-" + this.player + " p");
        this.playerTwo_player_store = document.querySelector(".store.player-" + this.get_playerTwo_player() + " p");
    }, a.prototype.do_player_turn = function(a) {
      /*
      function to move pebbles and perform turn
       */
        var b = this.mancala.move_pebbles(a);
        return this.check_game_over() ? (this.reset_game(), !0) : (b && this.switch_turn(), this.save_game(), !1)
    }, a.prototype.switch_turn = function() {
      /*
      function to swtich values to other player
       */
        this.player = this.get_playerTwo_player();
        this.mancala.flip_board();
        this.refresh_queries();
        this.draw_all_pebbles();
        var a = this.player;
        setTimeout(function() {
            document.body.setAttribute("data-player", a);
            document.querySelector(".current-player").textContent = a;
        }, 700)
    }, a.prototype.check_game_over = function() {
      /*
      function to check if a winner exists
       */
        var a = this.mancala.check_winner();
        if (0 > a) return !1;
        document.body.classList.add("game-over");
        var b = document.querySelector(".status");
        return 1 === a ? b.textContent = "Player one wins!" : 2 === a ? b.textContent = "Player two wins!" : b.textContent = "Draw!", this.player = "", !0
    }, a
}();
! function() {
    "use strict";
    Game.prototype.draw_all_pebbles = function() {
      /*
      function to add pebbles to board
       */
        var a = function(a) {
            return 0 === a ? "" : a
        };
        this.playerOne_player_store.textContent = a(this.mancala.playerOne_store);
        this.playerTwo_player_store.textContent = a(this.mancala.playerTwo_store);
        for (var b = 0; 6 > b; b++) {
           this.playerOne_player_pits[b].textContent = a(this.mancala.playerOne_pits[b]);
           this.playerTwo_player_pits[b].textContent = a(this.mancala.playerTwo_pits[b]);
         }
    }, Game.prototype.draw_pebbles = function(a) {
      /*
      function to add pebbles
       */
        var b = function(a) {
            return 0 === a ? "" : a
        };
        6 === a ? this.playerOne_player_store.textContent = b(this.mancala.playerOne_store) : 13 === a ? this.playerTwo_player_store.textContent = b(this.mancala.playerTwo_store) : 6 > a ? this.playerOne_player_pits[a].textContent = b(this.mancala.playerOne_pits[a]) : a > 6 && (a -= 7, this.playerTwo_player_pits[a].textContent = b(this.mancala.playerTwo_pits[a]))
    }
}();
! function() {
    "use strict";
    Game.prototype.load_game = function() {
      /*
      function to load game from previous run
       */
        localStorage.getItem("pebbles") && (localStorage.removeItem("pebbles"), localStorage.removeItem("player")),
        localStorage.getItem("playerOne_pits") ? (this.mancala.playerOne_store = parseInt(localStorage.getItem("playerOne_store")),
        this.mancala.playerTwo_store = parseInt(localStorage.getItem("playerTwo_store")),
        this.mancala.playerOne_pits = JSON.parse(localStorage.getItem("playerOne_pits")),
        this.mancala.playerTwo_pits = JSON.parse(localStorage.getItem("playerTwo_pits")),
        "two" === localStorage.getItem("player") && this.switch_turn()) : this.save_game();
    }, Game.prototype.save_game = function() {
      /*
      function to save game state
       */
        localStorage.setItem("player", this.player);
        localStorage.setItem("playerOne_store", JSON.stringify(this.mancala.playerOne_store));
        localStorage.setItem("playerTwo_store", JSON.stringify(this.mancala.playerTwo_store));
        localStorage.setItem("playerOne_pits", JSON.stringify(this.mancala.playerOne_pits));
        localStorage.setItem("playerTwo_pits", JSON.stringify(this.mancala.playerTwo_pits));
    }, Game.prototype.reset_game = function() {
      /*
      function that resets games
       */
        localStorage.removeItem("player");
        localStorage.removeItem("playerOne_store");
        localStorage.removeItem("playerTwo_store");
        localStorage.removeItem("playerOne_pits");
        localStorage.removeItem("playerTwo_pits");
    }
}();
var game = function() {
  /*
  controller function
   */
    "use strict";
    var a = new Game(Mancala);
    a.load_game();
    a.init();
    var b = !0,
        c = function(c, d) {
            for (var e = function() {
                    if (a.player === c && b) {
                        b = !1;
                        var d = parseInt(this.getAttribute("data-pit"));
                        a.do_player_turn(d) || (b = !0)
                    }
                }, f = 0; f < d.length; f++) d[f].setAttribute("data-pit", f), d[f].onclick = e
        };
    return c("one",
            document.querySelectorAll(".row.player-one .pit")),
            c("two", document.querySelectorAll(".row.player-two .pit")),
            document.querySelector(".new-game").onclick = function() {
        a.reset_game(), window.location.reload()
    }, a
}();
