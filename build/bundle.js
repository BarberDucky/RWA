!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.Movie=function e(n,t,o){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=n,this.year=t,this.score=o}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();n.MoviesService=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"get",value:function(){return fetch("http://localhost:3000/movies").then(function(e){return e.json()})}}]),e}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MovieService=void 0;var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=t(0);n.MovieService=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.movies=[],this.movies.push(new r.Movie("Rambo",1985,10)),this.movies.push(new r.Movie("Rocky",1987,8)),this.movies.push(new r.Movie("Expendables",2015,9)),this.movies.push(new r.Movie("Mrak film",2005,2))}return o(e,[{key:"getCb",value:function(e){setTimeout(function(){return e(movies)},1e3)}},{key:"get",value:function(e){var n=this;return new Promise(function(t,o){setTimeout(function(){return t(n.movies[e])},1e3)})}},{key:"get",value:function(){var e=this;return new Promise(function(n,t){setTimeout(function(){return n(e.movies)},1e3)})}},{key:"retRand",value:function(){return new Promise(function(e,n){setTimeout(function(){return e(Math.floor(4*Math.random()))},1e3)})}}]),e}()},function(e,n,t){"use strict";t(0),t(2);t(1).MoviesService.get().then(function(e){return console.log(e)})}]);
//# sourceMappingURL=bundle.js.map