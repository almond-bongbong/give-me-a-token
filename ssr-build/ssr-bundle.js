module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/give-me-a-token/",n(n.s="QfWi")}({"3br2":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("HteQ"),o=n("FA6U"),i=n.n(o),u=n("irnv"),a=n.n(u),c=function(t){var e=t.label,n=t.value,o=t.onChange;return Object(r.h)("div",{class:a.a.input},Object(r.h)("label",{htmlFor:e},e),Object(r.h)("input",{type:"password",id:e,value:n,onChange:o}))},l=n("b3QI"),p=n.n(l),s=function(t){var e=t.color,n=t.onClick,o=t.children;return Object(r.h)("button",{type:"button",onClick:n,class:p.a.button,style:{backgroundColor:e}},o)},f=n("Puv4"),h=n.n(f),d=function(t){var e=t.children;return Object(r.h)("div",{class:h.a.result},Object(r.h)("b",null,"access token")," : ",e)};var y=function(t){var e,n;function o(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={clientKey:"15aeb436a7c03a06c86277eba1ee485c",token:null},e.handleClientKey=function(t){e.setState({clientKey:t.target.value})},e.handleLogin=function(){e.state.clientKey?(window.Kakao.cleanup(),window.Kakao.init(e.state.clientKey),window.Kakao.Auth.login({success:function(t){e.setState({token:t.access_token})},fail:function(t){alert(t)}})):alert("Client Key를 입력해주세요.")},e}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)(c,{label:"client key",value:this.state.clientKey,onChange:this.handleClientKey}),Object(r.h)(s,{color:"#fee501",onClick:this.handleLogin},"카카오 로그인"),this.state.token&&Object(r.h)(d,null,this.state.token))},o}(r.Component);var v=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var u=o.prototype;return u.componentDidMount=function(){},u.render=function(){return Object(r.h)("div",{class:i.a.home},Object(r.h)(y,null))},o}(r.Component)},"7A1p":function(t,e,n){t.exports={header:"header__2uitE",active:"active__3taVy"}},FA6U:function(t,e,n){t.exports={home:"home__MseGd"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},KUAB:function(t,e,n){"use strict";var r=n("HteQ"),o=n("nlDB"),i=n.n(o);e.a=function(){return Object(r.h)("p",{class:i.a.info},"Key 정보는 절대 수집되지 않습니다.")}},Ogzj:function(t,e,n){"use strict";var r=n("HteQ"),o=n("ox/y"),i=n("7A1p"),u=n.n(i);e.a=function(){return Object(r.h)("header",{class:u.a.header},Object(r.h)(o.Link,{href:"/"},Object(r.h)("h1",null,"Give me a token")))}},Puv4:function(t,e,n){t.exports={result:"result__1d33x"}},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("ugae");e.default=r.a},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return y})),n.d(e,"route",(function(){return v})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return k})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),a={};if(u&&u[1])for(var c=u[1].split("&"),p=0;p<c.length;p++){var s=c[p].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(i,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),y=(e[h].match(/[+*?]+$/)||o)[0]||"",v=~y.indexOf("+"),b=~y.indexOf("*"),g=t[h]||"";if(!g&&!b&&(y.indexOf("?")<0||v)){r=!1;break}if(a[d]=decodeURIComponent(g),v||b){a[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&a}function a(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(p).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function p(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var s=null,f=[],h=[],d={};function y(){var t;return""+((t=s&&s.location?s.location:s&&s.getCurrentLocation?s.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),s&&s[e]?s[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),b(t)}function b(t){for(var e=!1,n=0;n<f.length;n++)!0===f[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function g(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return g(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(g(e))return O(t)}}while(e=e.parentNode)}}var _=!1;var C=function(t){function e(e){t.call(this,e),e.history&&(s=e.history),this.state={url:e.url||y()},_||("function"==typeof addEventListener&&(s||addEventListener("popstate",(function(){b(y())})),addEventListener("click",j)),_=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;s&&(this.unlisten=s.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(a).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var a={url:e,matches:o};return i(a,o),delete a.ref,delete a.key,Object(r.cloneElement)(t,a)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),a=u[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:c,active:u,current:a})),a},e}(r.Component),k=function(t){return Object(r.createElement)("a",i({onClick:m},t))},x=function(t){return Object(r.createElement)(t.component,t)};C.subscribers=h,C.getCurrentUrl=y,C.route=v,C.Router=C,C.Route=x,C.Link=k,C.exec=u,e.default=C},b3QI:function(t,e,n){t.exports={button:"button__38IWe"}},irnv:function(t,e,n){t.exports={input:"input__3Cf5J"}},nlDB:function(t,e,n){t.exports={info:"info__30j0S"}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n("HteQ"),i=n("Y3FI");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=e.Match=function(t){function e(){var n,r;u(this,e);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=r=a(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},a(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,i.exec)(n,t.path,{})})},e}(o.Component),l=function(t){var e=t.activeClassName,n=t.path,u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,o.h)(c,{path:n||u.href},(function(t){var n=t.matches;return(0,o.h)(i.Link,r({},u,{class:[u.class||u.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=l,e.default=c,c.Link=l},ugae:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n("HteQ"),o=n("Ogzj"),i=n("3br2"),u=n("KUAB");var a=function(e){var n,r;function a(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleRoute=function(e){t.currentUrl=e.url},t}return r=e,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,a.prototype.render=function(){return t("div",{id:"app"},t(o.a,null),t(u.a,null),t(i.a,null))},a}(r.Component)}).call(this,n("HteQ").h)}});
//# sourceMappingURL=ssr-bundle.js.map