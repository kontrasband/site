(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{67:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(a){n(e,a,t[a])})}return e}var c=t(11),l=t(13),s=t(0),o=t.n(s),m=t(26);function i(e){var a=e.src,t=e.alt,n=e.className,i=e.paddingTop,u=e.style,d=Object(l.a)(e,["src","alt","className","paddingTop","style"]),f=Object(s.useState)("none"),b=Object(c.a)(f,2),E=b[0],p=b[1];return o.a.createElement(o.a.Fragment,null,"none"===E&&o.a.createElement(m.a,{className:"mb-3 ".concat(n),paddingTop:i}),o.a.createElement("img",Object.assign({src:a,alt:t,className:n},d,{style:r({},u,{display:E}),onLoad:function(){return p("block")}})))}t.d(a,"a",function(){return i})},68:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(0),r=t.n(n),c=t(63),l=t(64),s=t(65);function o(e){var a=e.title,t=e.subtitle;return r.a.createElement(c.a,null,r.a.createElement(l.a,{className:"justify-content-center"},r.a.createElement(s.a,{xs:12,md:10,lg:9},r.a.createElement("div",{className:"block-content text-center gap-one-bottom-md"},r.a.createElement("div",{className:"block-title "},t?r.a.createElement("h2",{className:"uppercase"},a):r.a.createElement("h1",{className:"uppercase"},a))))))}},69:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(0),r=t.n(n),c=t(67);function l(e){var a=e.img,t=e.url;return t?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,{src:"".concat("").concat(a),alt:"",className:"animated"})):r.a.createElement(c.a,{src:"".concat("").concat(a),alt:"",className:"animated"})}},70:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(0),r=t.n(n),c=t(8),l=t(9),s=t(27);function o(e){var a=e.details,t=void 0===a?[]:a,n=e.stores,o=e.released,m="/lyrics/:slug"===Object(c.i)().path?t.filter(function(e){return"Lyrics"!==e.key}):t;return r.a.createElement("div",{className:"block-content gap-one-bottom-sm"},r.a.createElement("div",{className:"block-album-info"},r.a.createElement("ul",null,m.map(function(e){var a=e.key,t=e.value,n=e.href,c=e.navlink;return r.a.createElement("li",{key:a},r.a.createElement("h5",{className:"uppercase list-inline-item"},a),r.a.createElement("span",null,c?r.a.createElement(l.b,{to:c},t):null,n?r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t):null,c||n?null:t))}))),n&&r.a.createElement(s.a,{stores:n,show:o,className:"mt-4"}))}},76:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return b});var n=t(0),r=t.n(n),c=t(63),l=t(64),s=t(65),o=t(28),m=t(19),i=t(27),u=t(70),d=t(68),f=t(69);function b(){return r.a.createElement(o.a,{name:"music"},r.a.createElement(d.a,{title:"Discography"}),m.a.map(function(e){return r.a.createElement("div",{className:"even-odd-bg"},r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{xs:12},r.a.createElement("h5",{className:"mb-0 opc-70 uppercase"},e.title),r.a.createElement("a",{className:"link",href:e.url},"View Release \u203a")),r.a.createElement(s.a,{xs:12,md:6,lg:6,key:e.id},r.a.createElement("div",{className:"block-album block-content"},r.a.createElement(f.a,{url:e.url,img:e.img}),r.a.createElement(i.a,{stores:e.stores,show:e.released,classname:"mb-md-3"}))),r.a.createElement(s.a,{xs:12,md:6},r.a.createElement(u.a,{details:e.details,hideArtwork:!0})))))}))}}}]);
//# sourceMappingURL=7.36160cd4.chunk.js.map