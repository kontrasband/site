(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{67:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){n(e,t,a[t])})}return e}var c=a(11),l=a(13),s=a(0),i=a.n(s),m=a(26);function o(e){var t=e.src,a=e.alt,n=e.className,o=e.paddingTop,u=e.style,E=Object(l.a)(e,["src","alt","className","paddingTop","style"]),d=Object(s.useState)("none"),f=Object(c.a)(d,2),b=f[0],p=f[1];return i.a.createElement(i.a.Fragment,null,"none"===b&&i.a.createElement(m.a,{className:"mb-3 ".concat(n),paddingTop:o}),i.a.createElement("img",Object.assign({src:t,alt:a,className:n},E,{style:r({},u,{display:b}),onLoad:function(){return p("block")}})))}a.d(t,"a",function(){return o})},68:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),c=a(63),l=a(64),s=a(65);function i(e){var t=e.title,a=e.subtitle;return r.a.createElement(c.a,null,r.a.createElement(l.a,{className:"justify-content-center"},r.a.createElement(s.a,{xs:12,md:10,lg:9},r.a.createElement("div",{className:"block-content text-center gap-one-bottom-md"},r.a.createElement("div",{className:"block-title "},a?r.a.createElement("h2",{className:"uppercase"},t):r.a.createElement("h1",{className:"uppercase"},t))))))}},69:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),c=a(67);function l(e){var t=e.img,a=e.url;return a?r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,{src:"".concat("").concat(t),alt:"",className:"animated"})):r.a.createElement(c.a,{src:"".concat("").concat(t),alt:"",className:"animated"})}},70:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),c=a(8),l=a(9),s=a(27);function i(e){var t=e.details,a=void 0===t?[]:t,n=e.stores,i=e.released,m="/lyrics/:slug"===Object(c.i)().path?a.filter(function(e){return"Lyrics"!==e.key}):a;return r.a.createElement("div",{className:"block-content gap-one-bottom-sm"},r.a.createElement("div",{className:"block-album-info"},r.a.createElement("ul",null,m.map(function(e){var t=e.key,a=e.value,n=e.href,c=e.navlink;return r.a.createElement("li",{key:t},r.a.createElement("h5",{className:"uppercase list-inline-item"},t),r.a.createElement("span",null,c?r.a.createElement(l.b,{to:c},a):null,n?r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},a):null,c||n?null:a))}))),n&&r.a.createElement(s.a,{stores:n,show:i,className:"mt-4"}))}},71:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),c=a(63),l=a(64),s=a(65),i=a(70),m=a(69);function o(e){var t=e.release,a=e.md,n=void 0===a?4:a,o=t.url,u=t.img,E=t.stores,d=t.released,f=t.details,b=void 0===f?[]:f;return r.a.createElement(c.a,null,r.a.createElement(l.a,{className:"justify-content-center"},r.a.createElement(s.a,{xs:12,md:n},r.a.createElement(m.a,{url:o,img:u})),r.a.createElement(s.a,{xs:12,md:6},r.a.createElement(i.a,{details:b,released:d,stores:E}))))}},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a(28),s=a(63),i=a(64),m=a(65),o=a(9),u=a(69),E=a(68),d=a(19),f=a(14);function b(){return r.a.createElement(s.a,null,r.a.createElement(E.a,{title:"Lyrics"}),r.a.createElement(i.a,null,d.a.map(function(e){return r.a.createElement(m.a,{xs:12,md:6,xl:3,key:e.title},r.a.createElement(m.a,{xs:12},r.a.createElement("h5",{className:"mb-0 opc-70 uppercase"},e.title)),r.a.createElement(o.b,{to:"/lyrics/".concat(Object(f.d)(e.title))},r.a.createElement(u.a,{img:e.img})))})))}var p=a(71);function v(e){var t=e.song,a=t.title,n=t.lyrics;return r.a.createElement("div",{className:"even-odd-bg"},r.a.createElement(E.a,{title:a,subtitle:!0}),r.a.createElement(s.a,{className:"lyrics-container"},n))}function g(){var e=Object(c.h)().slug,t=Object(f.c)(e),a=Object(f.b)(t.title).tracks;return t&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:t.title}),r.a.createElement("div",{className:"gap-one-bottom-md"},r.a.createElement(p.a,{release:t,md:4})),a.map(function(e){return r.a.createElement(v,{key:e.title,song:e})})):r.a.createElement(c.a,{to:"/lyrics"})}function y(){var e=Object(c.i)().path;return r.a.createElement(l.a,{name:"lyrics"},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"".concat(e,"/:slug"),children:r.a.createElement(g,null)}),r.a.createElement(c.b,{exact:!0,path:e,component:b})))}a.d(t,"default",function(){return y})}}]);
//# sourceMappingURL=3.63b25fb0.chunk.js.map