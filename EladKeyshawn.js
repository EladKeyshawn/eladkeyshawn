require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({10:[function(require,module,exports) {
"use strict";function e(e,n){for(var t,r=[],o=[],i=arguments.length;i-- >2;)r.push(arguments[i]);for(;r.length;)if((t=r.pop())&&t.pop)for(i=t.length;i--;)r.push(t[i]);else null!=t&&!0!==t&&!1!==t&&o.push(t);return"function"==typeof e?e(n||{},o):{nodeName:e,attributes:n||{},children:o,key:n&&n.key}}function n(e,n,t,r){var o,i=[],u=r&&r.children[0]||null,l=u&&function e(n,t){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:t.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,t)})}}(u,[].map),a=s(e),f=s(n);return d(function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){return"function"==typeof(e=o(e))&&(e=e(p(n,a),r)),e&&e!==(t=p(n,a))&&!e.then&&d(a=h(n,s(t,e),a)),e}}(o,r[o]):e(n.concat(o),t[o]=t[o]||{},r[o]=s(r[o]))}([],a,f)),f;function c(){o=!o;var e=t(a,f);for(r&&!o&&(u=function e(n,t,r,o,u,l){if(o===r);else if(null==r)t=n.insertBefore(N(o,u),t);else if(o.nodeName&&o.nodeName===r.nodeName){!function(e,n,t,r){for(var o in s(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&m(e,o,t[o],r,n[o]);t.onupdate&&i.push(function(){t.onupdate(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var a=[],f={},c={},d=0;d<r.children.length;d++){a[d]=t.childNodes[d];var h=r.children[d],p=v(h);null!=p&&(f[p]=[a[d],h])}for(var d=0,g=0;g<o.children.length;){var h=r.children[d],y=o.children[g],p=v(h),k=v(y);if(c[p])d++;else if(null==k)null==p&&(e(t,a[d],h,y,u),g++),d++;else{var w=f[k]||[];p===k?(e(t,w[0],w[1],y,u),d++):w[0]?e(t,t.insertBefore(w[0],a[d]),w[1],y,u):e(t,a[d],null,y,u),g++,c[k]=y}}for(;d<r.children.length;){var h=r.children[d];null==v(h)&&b(t,a[d],h),d++}for(var d in f)c[f[d][1].key]||b(t,f[d][0],f[d][1])}else o.nodeName===r.nodeName?t.nodeValue=o:(t=n.insertBefore(N(o,u),l=t),b(n,l,r));return t}(r,u,l,l=e));e=i.pop();)e()}function d(){o||(o=!o,setTimeout(c))}function s(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function h(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?h(e.slice(1),n,t[e[0]]):n,s(t,r)):n}function p(e,n){for(var t=0;t<e.length;t++)n=n[e[t]];return n}function v(e){return e?e.key:null}function m(e,n,t,r,o){if("key"===n);else if("style"===n)for(var i in s(o,t))e[n][i]=null==t||null==t[i]?"":t[i];else"function"==typeof t||n in e&&!r?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function N(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&i.push(function(){e.attributes.oncreate(t)});for(var r=0;r<e.children.length;r++)t.appendChild(N(e.children[r],n));for(var o in e.attributes)m(t,o,e.attributes[o],n)}return t}function b(e,n,t,r){function o(){e.removeChild(function e(n,t,r){if(r=t.attributes){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}t.attributes&&(r=t.attributes.onremove)?r(n,o):o()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={init:function(){return function(e,t){feednami.load("https://medium.com/feed/@eladk",function(e){e.error?console.log(e.error):t.showPosts(e.feed.entries)})}},showPosts:function(e){return function(){return{posts:e}}}};
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={posts:[]};
},{}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(t,a){var l=t.posts,n=a.init;return(0,e.h)("div",{class:"container",oncreate:n},(0,e.h)("div",{class:"row buffer-top"},(0,e.h)("div",{class:"six columns"},(0,e.h)("h1",null,"Hey, I’m Elad 👋"),(0,e.h)("div",{class:"thick-line"}),(0,e.h)("p",null," CS student, software engineer, cyclist and travel enthusiast.",(0,e.h)("br",null),"Interested in deep learning, cryptography and articulated software architecture."))),(0,e.h)("div",{class:"row"},(0,e.h)("h4",null,"Posts"),(0,e.h)("div",{class:"eight columns"},l.map(function(t){return(0,e.h)("div",{class:"post"},(0,e.h)("span",null,t.date),(0,e.h)("a",{href:t.link,target:"_blank"},(0,e.h)("p",null,t.title)))}))),(0,e.h)("div",{class:"row buffer-top"},(0,e.h)("p",null,"You can find me on:"),(0,e.h)("h5",null,(0,e.h)("a",{href:"https://github.com/EladKeyshawn",target:"_blank"}," Github ")," |",(0,e.h)("a",{href:"https://il.linkedin.com/in/elad-keyshawn-a68938119",target:"_blank"}," LinkedIn ")," |",(0,e.h)("a",{href:"mailto:me@elad.636@gmail.com",target:"_blank"}," Email ")," |",(0,e.h)("a",{href:"../../assets/files/resume.pdf",target:"_blank"}," Resume "))))};
},{"hyperapp":10}],4:[function(require,module,exports) {

},{}],7:[function(require,module,exports) {
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window.feednami={},feednami.load=function(o,n){var t=o;"object"==(void 0===o?"undefined":e(o))&&(t=o.url);var a="url="+encodeURIComponent(t);o.format&&(a+="&include_xml_document&format="+o.format),o.includeXml&&(a+="&include_xml_document");var d="https://api.feednami.com/api/v1/feeds/load?"+a;if(window.XDomainRequest){var r=document.createElement("script"),l="jsonp_callback_"+(new Date).getTime()+"_"+Math.round(1e6*Math.random());d+="&jsonp_callback="+l,window[l]=function(e){n(e),document.body.removeChild(r),window[l]=null;try{delete window[l]}catch(e){}},r.src=d,document.body.appendChild(r)}else{var i=new XMLHttpRequest;i.onreadystatechange=function(){4==i.readyState&&n(JSON.parse(i.responseText))},i.open("GET",d),i.send()}},feednami.loadGoogleFormat=function(e,o){return feednami.load({url:e,format:"google",includeXml:!0},o)};
},{}],2:[function(require,module,exports) {
"use strict";var e=require("hyperapp"),r=require("./actions"),s=n(r),u=require("./state"),i=n(u),t=require("./components/main"),a=n(t);function n(e){return e&&e.__esModule?e:{default:e}}require("./css/skeleton.css"),require("./css/main.css"),require("./js/feednami.min"),(0,e.app)(i.default,s.default,a.default,document.body);
},{"hyperapp":10,"./actions":11,"./state":12,"./components/main":6,"./css/skeleton.css":4,"./css/main.css":4,"./js/feednami.min":7}]},{},[2])