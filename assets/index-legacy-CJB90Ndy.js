!function(){function t(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var r,o,n,i,d=[],s=!0,l=!1;try{if(n=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=n.call(a)).done)&&(d.push(r.value),d.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(l)throw o}}return d}}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return e(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(t,e,a){t[e]=a.value},i="function"==typeof Symbol?Symbol:{},d=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,a){return t[e]=a}}function u(t,e,a,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),d=new M(r||[]);return n(i,"_invoke",{value:z(t,a,d)}),i}function f(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h="suspendedStart",g="suspendedYield",A="executing",p="completed",m={};function v(){}function w(){}function x(){}var b={};c(b,d,(function(){return this}));var y=Object.getPrototypeOf,k=y&&y(y(j([])));k&&k!==r&&o.call(k,d)&&(b=k);var E=x.prototype=v.prototype=Object.create(b);function B(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function a(r,n,i,d){var s=f(t[r],t,n);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&o.call(c,"__await")?e.resolve(c.__await).then((function(t){a("next",t,i,d)}),(function(t){a("throw",t,i,d)})):e.resolve(c).then((function(t){l.value=t,i(l)}),(function(t){return a("throw",t,i,d)}))}d(s.arg)}var r;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,r){a(t,o,e,r)}))}return r=r?r.then(n,n):n()}})}function z(e,a,r){var o=h;return function(n,i){if(o===A)throw Error("Generator is already running");if(o===p){if("throw"===n)throw i;return{value:t,done:!0}}for(r.method=n,r.arg=i;;){var d=r.delegate;if(d){var s=U(d,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=A;var l=f(e,a,r);if("normal"===l.type){if(o=r.done?p:g,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}function U(e,a){var r=a.method,o=e.iterator[r];if(o===t)return a.delegate=null,"throw"===r&&e.iterator.return&&(a.method="return",a.arg=t,U(e,a),"throw"===a.method)||"return"!==r&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=f(o,e.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,m;var i=n.arg;return i?i.done?(a[e.resultName]=i.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,m):i:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(e){if(e||""===e){var a=e[d];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function a(){for(;++r<e.length;)if(o.call(e,r))return a.value=e[r],a.done=!1,a;return a.value=t,a.done=!0,a};return n.next=n}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=x,n(E,"constructor",{value:x,configurable:!0}),n(x,"constructor",{value:w,configurable:!0}),w.displayName=c(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},B(R.prototype),c(R.prototype,s,(function(){return this})),e.AsyncIterator=R,e.async=function(t,a,r,o,n){void 0===n&&(n=Promise);var i=new R(u(t,a,r,o),n);return e.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},B(E),c(E,l,"Generator"),c(E,d,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var r in e)a.push(r);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var a in this)"t"===a.charAt(0)&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function r(r,o){return d.type="throw",d.arg=e,a.next=r,o&&(a.method="next",a.arg=t),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],d=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var n=r;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),I(a),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var o=r.arg;I(a)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,a,r){return this.delegate={iterator:j(e),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function r(t,e,a,r,o,n,i){try{var d=t[n](i),s=d.value}catch(l){return void a(l)}d.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(o,n){var i=t.apply(e,a);function d(t){r(i,o,n,d,s,"next",t)}function s(t){r(i,o,n,d,s,"throw",t)}d(void 0)}))}}System.register(["./index-legacy-B6nlsNrh.js"],(function(e,r){"use strict";var n,i,d,s,l,c,u,f,h,g,A,p,m,v,w,x,b,y,k,E,B,R;return{setters:[t=>{n=t.g,i=t.c,d=t.d,s=t.a,l=t.b,c=t.e,u=t.r,f=t.o,h=t.p,g=t.f,A=t.h,p=t.i,m=t.j,v=t.t,w=t.u,x=t.n,b=t.k,y=t.l,k=t.m,E=t.q,B=t.s,R=t._}],execute:function(){var r=document.createElement("style");r.textContent=':root{--u: 10px}@media screen and (max-width: 600px){:root{--u: $basePx}}@media screen and (min-width: 600px){:root{--u: 1px}}body{margin:0;width:100%;height:100%;overflow:hidden}html,body{margin:0;-webkit-tap-highlight-color:transparent}html{box-sizing:border-box}@font-face{font-family:ArabicContent-Medium;src:url(../src/assets/font/ArabicContent-Medium.woff2?t=2) format("woff2"),url(../src/assets/font/ArabicContent-Medium.woff?t=2) format("woff"),url(../src/assets/font/ArabicContent-Medium.ttf?t=2) format("ttf")}@font-face{font-family:ArabicTitle-Bold;src:url(../src/assets/font/ArabicTitle-Bold.woff2?t=2) format("woff2"),url(../src/assets/font/ArabicTitle-Bold.woff?t=2) format("woff"),url(../src/assets/font/ArabicTitle-Bold.ttf?t=2) format("ttf")}@font-face{font-family:notomid;src:url(../src/assets/font/ArabicContent-Medium.woff2?t=2) format("woff2"),url(../src/assets/font/ArabicContent-Medium.woff?t=2) format("woff"),url(../src/assets/font/ArabicContent-Medium.ttf?t=2) format("ttf")}@font-face{font-family:pf;src:url(../src/assets/font/ArabicContent-Medium.woff2?t=2) format("woff2"),url(../src/assets/font/ArabicContent-Medium.woff?t=2) format("woff"),url(../src/assets/font/ArabicContent-Medium.ttf?t=2) format("ttf")}@font-face{font-family:TajawalZii;src:url(../src/assets/font/ArabicTitle-Bold.woff2?t=2) format("woff2"),url(../src/assets/font/ArabicTitle-Bold.woff?t=2) format("woff"),url(../src/assets/font/ArabicTitle-Bold.ttf?t=2) format("ttf")}*,*:before,*:after{font-family:TajawalZii;box-sizing:inherit}[data-v-ad14610d]:root{--u: 10px}@media screen and (max-width: 600px){[data-v-ad14610d]:root{--u: $basePx}}@media screen and (min-width: 600px){[data-v-ad14610d]:root{--u: 1px}}.new-share[data-v-ad14610d]{background:linear-gradient(180deg,#7f70f5,#c2b6ff);display:flex;justify-content:center;align-items:center;justify-content:flex-start;flex-direction:column;height:calc(100% - 100px);position:relative;overflow-y:scroll;overflow-x:hidden}.new-share .top[data-v-ad14610d]{background-image:url(/assets/top-o7szU2f7.png);position:absolute;top:0;right:0;width:512px;height:416px}.new-share .top-star1[data-v-ad14610d]{width:360px;height:228px;position:absolute;left:0;top:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAADkBAMAAABHzqPxAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACXRSTlMABxQmXDyI+L36SEchAAADJUlEQVR42u3d0XGcMBQFUF4HuuoAMWlgZSow7ORfbCrAjDtgC8jsbtkB2Z785IMsM8BN7mlg78hPIAnzKERERERERERERISXA5wrqJhhYgUVB5QlwDXUQJgABRGDDzGGkix0qLr2FKjqAz7U5z6Fkit01Q1De6KqD/j6PAx94godXob3YXgNVKH9yzDQhQ6M5fE5EamuHsZ4yaO8uRSct/GjLZjMnFuQ2vsjLU0dzJaM9aEyu0V7EjtQbeS1cnmgMVw6xw41wxZfzUJJtmfNFzOyu0ZRTAN94ro/F2ZT6EAWOi8r+MrjYyI+8zeyYi9meGqggT0P9xx8+cTPIyt2Yga4p25Juy5VzRXuiat73HP+2lQifz/OVbwkqsMby5nPb5HoSMHg58yPn4loe24I8dK8j7c28oSeBrruzvfx2iae+kCI3fl9HK89T33YfEj2uM+hic6cUP14jBOmorYp9H2cXXueokbV3cfsRhQ61O9jdm1PRKHPn/XxxhPax+5jqB88oc1X3TzU1wfRRJxC5/q49S3Rkgmhnq4fj75lWpxaLupbc4lM2/ipPr4/+ks8ER1dGkL8MWemOrmcp+Ilkj04yvstuhNi4FjPjRYxHOsZzDKMmYvCsf2XnoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiPyTzPjezpkzg+3lLQcENaTeQH4h8RSI3lb9CF03iezVT/jwMrQ8PUl+98Htm8QXehjIOg7nNsnDK1nouYs2Uf+Gr9CMTda7M19D6qruhleu3pFAqOomcd1cDD5Ukaukp9SEC6bjNaSesTWkXoqsNuQP/t8WE26XT0E52Orjgo0H2+ZfdKvbrm8a2szyQK3JXG3dcmnOHIB1n1VK2x4X5MyhBKg+MYLc6Qlu1RnHxstQM1/FdHp+pIGqa5qNdykIsV7T2M78t2aStgztUMVLHZ+fR9ghtMHHlFJYMdKf5YFiM3kTmlbMROwxEYGqXrWd2+GSl+tjzU/a182l2JCDz0sHt+ZCv/lRNOBXPdOxHT74abb2OdQ+T7LgnK0psD0y8+2VZlxfIBIRERERERERERE5ll93eKZzJ4W9NAAAAABJRU5ErkJggnRpbnk=);background-size:100% 100%}.new-share .top-star2[data-v-ad14610d]{width:300px;height:228px;position:absolute;right:0;top:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADkBAMAAADQnwQrAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACXRSTlMADBkwUHX7mtAC6eNOAAACsElEQVR42uzX0W3rMAwFUHEDUhuE3sDyW+DZmqA20gncLJAmCzTp2KXconV/BQJRgXvyL1xTNM0EAAAAAAAAAPg72H5emLwOIxK3XEzidJgUXrFIDLNLLFURr1TR5zAiUU0q7BRLU+9yGEUdpv4gTrG6adSDQyzRlJdRXWKxxJSn5HAY2/MtZ5dYRnTI89Q7HBaH5XKZeyu8g/KMeXaIRXE4Xi6LW6w8V1eLf8XqrFrn0a1aeR5VKice7S6xy1Ytr1iapul/zWstEg8iv7r0eC51d8Cf00a4IlZU1Z/nYYu1zEnFa5x2dbNZNKW0yyVxm4ASXIho1VkUO2vKXS6ynKrCXguE4cAVA+/5XnIJ+3+qDdVtI7EbrqfzNPa7chl22ygNVdxhyq/rfdl/uKjUih+66pIO+baeLNf3XOfwcCTdcLytlms/1yk8mk2D57V4f9IGyrRrretanNqKVe6wuI9txfoqlvVWM7GI9N9XsebUTqxgsd7X4m3qW4plvXW9bXfYS2gGRVu2Lddpbqnjt7XGcq0vTbXWtl0N0/F2t091aAiJpiFf30ZtqLUMxZJrbuk9NBwkbltzW7G+/2O0dYeFiKVqrVhGpMVUHKiF1W+vnYUUAAAAAAAAAAAAAAAAAAA+2rmDG4ZBIAqi+ztgKYH+i4zAdqRIuVqaw7wK0FoG+8BIkiRJkiRJkiTpK2lCJOJXqpH3F08ShXYH9a6X4cZ19YRwV3ZPvYx2G7zG3PUy3LKuehntlvpTL+Mta9fLSCWSLXe9DLasp15GSn4cV70M9yZm18twBYScehnv8KmewKO6KsgPm1QBZwVmLEKSXoapWP4xkMfACHNa3cBxjUzaX9HRazVvWpmLF4Y7w1q437UazGVRH+J+isAdgrpBMLfTFPPwMTooSZIkSZLe8wHF9X5YBqIWWwAAAABJRU5ErkJggnRpbnk=);background-size:100% 100%}.new-share .bottom-star1[data-v-ad14610d]{width:344px;height:344px;position:absolute;left:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAFYBAMAAADkQvlzAAAAD1BMVEUAAAD///////////////+PQt5oAAAABXRSTlMACBgwWzYVYhkAAAJASURBVHja7d3BjdwwDEBRsQNxOhhNB9Z0YPdfU2h7M0ByyiW7+sB/FRAELcuSRTVJa+q9N4iIyGgQPTMp0UZkPhNSCD1zDEpqMx+v7ZmMzEaOOUdmA4hK7Jzbk1G0MWZ5UjLLCbbFXQaMKrgfMMxocA5djNHgeilARq5Cet2eqcUktkQ0xtSgROPEKkmSfl4HzRx6p6zXXHPzZM3NIamNyDFGMr5++7m8RFlmjBzvfYN8/+ZjvI+KlrCyEDlex3FMRGq/gt3nWH+9OeIx5nFHu35mayx4H5dt/cxWsAcl2JZVBZd9/WAjf1fBvn7NRn6qYP315k+w+wbYdcgxrzqYY/1dh8hHRcuogusNNmZVAWLDNCu1r3nsA1CyX9G+d0IVlDwLgTAWlB6VW8x3TctCibW1AMXaWk/Udg4pVkmSJEmSJEmSJEmSJEmSJEmSJEmSJDhWU39OKzNYU/8HppMZqql/gJr6B6mpf0M19Sf1yQ/UDQSBKgOb+v8vpKb+qDt0WoAmMiUgaT2B7h+QJGktlHlUiYIJl7SA1RPUij8yOU0gSV+BkbAFrDejf+193SejAXvpWYkltAn/tArf9w2R2ZZj7gdkBSvOBwzRJvyzNEh5K5B2Ne79Isq9lIHqudxAU0RYF+OKFVMFkiRJkiRJkiRJkv5JBGfTMlrnHCYm/d2IOi/k8dw/eTx3fazjuaBgYWXg8dy/eDx3fUn5t7FEi875r83juZIkSZIkSZIkSZIkSZIkSZIkSZIkSZL07X4BqI1UNh5AHR0AAAAASUVORK5CYIJ0aW55);background-size:100% 100%}.new-share .bottom-star2[data-v-ad14610d]{width:404px;height:344px;position:absolute;right:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAAFYAgMAAAAJgeL8AAAADFBMVEUAAAD///////////84wDuoAAAABHRSTlMAES9WPmNjcQAAAi9JREFUeNrt2z1u20AUBOBZgOy1QNbnUQAytQTwEQhdp7BU5DLhEVSILtgnQHQeqUltCeBGruxCSZrMg2nMd4Gn0Yg/InchIiIiIiIiIiIiIiIiDmIFB+UKfCE1S/CZga80c8gSrL9RzEyztHY7ywzbR2rwB7M7KoElROStCPAQI/hCahagC8njAhbb3iNLt6tAV2/2HjcWw7AGXT0MHlk2e4cssds5ZCna3uXm1QrwlS5/KirdJImIiMh7Fz4s4cDgIFoFvtLp+WYDvvT5VjEzzfLFcNMM2w/2fo5KFBAREREREREREREReYMWcFB89BgTrQBftDXoQnpweRE32BJsRTv04OuG3QJsxXUK+Nphx+8lpKEBX3poSFniq75r1g85xNcf3ypQFGYvYYoFOEK7W9GX6IfU7RvQ2fbIP3cV9ng2sMV2PPcVyMruMPEXZtdDzvz678bLrxM9y90h5+kbyD79yJcLfUp6/Jm/06fETZ74vZTdOO3WICvaw8lhi4GNZ1uALKStxzm53jBreanfZedHsgX46n9EmdMyJa2FEhERmZ1iCQfRY09GaY3DlGh9BbbSOodt7tEenwxsdTeeG7DZcJiMXX/oxjz1YLvP1yns+sM258x/4Hz/PIWepbtOOdKztIecnxpwhecp0wpkabxmoU+x65Q9vZfyaz71/G9sm/cGtnB/7vmXsaI72gp0rUMUhGRrOPjrED1NERERERERERERERERERGR/+43vQ+fzLOQzWEAAAAASUVORK5CYIJ0aW55);background-size:100% 100%}.new-share .bottom[data-v-ad14610d]{background-image:url(/assets/bottom-Bcwm_h_P.png);width:640px;height:480px;position:absolute;left:0;bottom:0}.new-share .title[data-v-ad14610d]{font-family:ArabicTitle-Bold;font-size:40px;color:#fff;margin-top:82px;text-align:center;width:686px}.new-share .card[data-v-ad14610d]{width:600px;height:800px;border-radius:56px;border:4px solid #c3bbff;background:linear-gradient(180deg,#fff,rgba(255,255,255,0));box-shadow:0 8px 40px rgba(255,255,255,.9) inset;margin-top:84px;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.new-share .head[data-v-ad14610d]{width:176px;height:176px;border:8px solid #fff;border-radius:24px;margin:64px auto auto;background-size:100% 100%;position:relative;z-index:1;background-color:#f2f2fa}.new-share .head .head-r[data-v-ad14610d]{background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.3));position:absolute;left:0;bottom:0;z-index:1;width:100%;height:48px;border-radius:0 0 18px 18px}.new-share .head-room[data-v-ad14610d]{border-radius:50%}.new-share .icon2[data-v-ad14610d]{position:absolute;background-image:url(/assets/icon2-CW_pdMqY.png);width:144px;height:144px;left:-68px;top:-74px;background-size:100% 100%}.new-share .icon3[data-v-ad14610d]{position:absolute;background-image:url(/assets/icon3-BcO8NLi8.png);width:224px;height:224px;right:-36px;bottom:-144px;background-size:100% 100%}.new-share .icon4[data-v-ad14610d]{position:absolute;background-image:url(/assets/icon4-CPE4ADX5.png);width:224px;height:224px;right:-52px;top:-8px;background-size:100% 100%;z-index:4}.new-share .icon5[data-v-ad14610d]{position:absolute;background-image:url(/assets/icon5-l9rzSvAX.png);width:182px;height:182px;left:-82px;top:130px;background-size:100% 100%;z-index:2}.new-share .icon6[data-v-ad14610d]{position:absolute;background-image:url(data:image/png;base64,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);width:528px;height:64px;left:50%;transform:translate(-50%);bottom:-118px;background-size:100% 100%}.new-share .card-content[data-v-ad14610d]{width:520px;height:404px;border-radius:24px;background:#fff;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-bottom:16px;margin:-80px auto auto;position:relative}.new-share .card-content .name[data-v-ad14610d]{font-family:ArabicTitle-Bold;font-size:32px;color:#333;width:456px;text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-top:112px}.new-share .card-content .num[data-v-ad14610d]{display:flex;justify-content:center;align-items:center;color:rgba(0,0,0,.3);font-family:ArabicContent-Medium;font-size:24px;margin-top:16px}.new-share .card-content .home-icon[data-v-ad14610d]{width:24px;height:24px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlNNACNBCyazxTwAAABZSURBVBjTpcy7DcAgDIThC2SAgBgAlAUoWACx/045HnaUNvyN9RU+uJ5P4wyEbKuiAUXgwdJC7DATDaNC8HvCViJiZYgMicA+OBqi4nTuUhy/YYlbYIi3Lx6d8AsyRMAtKwAAAABJRU5ErkJggnRpbnk=);margin-left:16px;background-size:100% 100%}.new-share .card-content .room-card[data-v-ad14610d]{width:488px;height:112px;border-radius:16px;background:rgba(129,113,246,.1);margin-top:68px;padding-right:24px;display:flex;justify-content:center;align-items:center;justify-content:flex-end}.new-share .card-content .room-card .room-name[data-v-ad14610d]{display:flex;justify-content:center;align-items:center;flex-direction:column;align-items:flex-end;width:344px}.new-share .card-content .room-card .room-name .room-name-top[data-v-ad14610d]{color:#333;font-family:ArabicContent-Medium;font-size:24px;text-align:right;overflow:hidden;width:344px;text-overflow:ellipsis;white-space:nowrap}.new-share .card-content .room-card .room-name .room-name-bottom[data-v-ad14610d]{color:rgba(0,0,0,.3);font-family:ArabicContent-Medium;font-size:20px;margin-top:4px}.new-share .card-content .room-card .room-head[data-v-ad14610d]{border-radius:100%;background-size:100% 100%;width:64px;height:64px;margin-left:24px}.new-share .card-content .icon1[data-v-ad14610d]{position:absolute;background-image:url(data:image/png;base64,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);width:112px;height:112px;bottom:92px;left:-24px;background-size:100% 100%}.new-share .card-content .icon7[data-v-ad14610d]{position:absolute;background-image:url(/assets/icon7-D6dNT6m_.png);width:264px;height:120px;bottom:61px;left:60px;background-size:100% 100%}.new-share .card-content .icon8[data-v-ad14610d]{position:absolute;background-image:url(data:image/png;base64,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);width:176px;height:176px;bottom:0;right:0;background-size:100% 100%}@keyframes breath-ad14610d{0%{transform:scale(1.02)}50%{transform:scale(.95)}to{transform:scale(1.02)}}.new-share .button[data-v-ad14610d]{height:92px;width:fit-content;display:flex;justify-content:center;align-items:center;color:#fff;font-family:ArabicTitle-Bold;margin:64px auto auto;font-size:28px;padding:0 54px;position:relative;z-index:1}.new-share .button .button-icon[data-v-ad14610d]{background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAkCAMAAABPJrEfAAAAElBMVEWv//9MaXGw//+v//+r//+w//8mZTsdAAAABnRSTlMyAE0iBEEQFAdbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAXUlEQVR4nO3TOw7AMAwCUAz4/leu0k+kKpanqupQ1rcZg1hjJVMOFJQcSRemnUgVlqdlYbzyvlkA5Mo86IacdhCgwmZ+iyfuoubWbjqKptv40g8u6bbSbazb5tz0BqiBBO/ggqvlAAAAAElFTkSuQmCCdGlueQ==);width:18px;height:24px;display:inline-block}.new-share .button .button-left[data-v-ad14610d]{transform:rotate(180deg);margin-left:12px}.new-share .button .button-right[data-v-ad14610d]{margin-right:12px}.new-share .button-b[data-v-ad14610d]{background-size:100% 100%;width:480px;height:172px;background-image:url(/assets/button-b-CZ8q6p97.png);margin:-115px auto auto}.new-share .button-c[data-v-ad14610d]{background-size:100% 100%;width:480px;height:172px;background-image:url(/assets/share_btn_bg-DvB5k7fH.png);margin:-115px auto auto}.new-share .button-c.-isLudo[data-v-ad14610d]{background-image:url(/assets/share_ludo_btn_bg-q0l6YwVx.png);background-size:100% 100%}.breath[data-v-ad14610d]{animation:breath-ad14610d .7s ease-in-out infinite}.header[data-v-ad14610d]{z-index:9;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;background:#fff;height:100px;width:100%}.header .logoC[data-v-ad14610d]{display:flex;flex-direction:row;align-items:center;margin-top:10px;margin-left:26px;margin-right:32px}.header .logo[data-v-ad14610d]{background-size:100% 100%;background-repeat:no-repeat;background-image:url(/assets/logo_sawa-k9qE4xO7.png);height:48px;width:48px;margin-top:-4px}.header .logo.sawa[data-v-ad14610d]{background-image:url(/assets/logo_sawa-k9qE4xO7.png)}.header .logo.jackaroo[data-v-ad14610d]{background-image:url(/assets/logo_jko-CzzpOqmD.png)}.header .logo.diwania[data-v-ad14610d]{background-image:url(/assets/logo-corner-BsoazeQS.png)}.header .text[data-v-ad14610d]{margin-right:16px;font-family:TajawalZii;font-style:normal;font-size:32px;line-height:42px;text-align:right;color:#353537}.header .logo2[data-v-ad14610d]{background-size:100% 100%;background-repeat:no-repeat;height:60px;width:114px;background-image:url(/assets/logo_jko-CzzpOqmD.png)}.header .setting[data-v-ad14610d]{background-size:100% 100%;background-repeat:no-repeat;width:48px;height:48px;margin-right:26px}.dot-c[data-v-ad14610d]{position:absolute;left:50%;transform:translate(-50%);bottom:6px;z-index:2}.dot-c .dot[data-v-ad14610d]{background-color:#fff;display:inline-block;width:6px;border-top-left-radius:8px;border-top-right-radius:8px;height:26px}.dot-c .dot1[data-v-ad14610d]{animation:1s up-ad14610d linear infinite backwards normal;animation-delay:-1.1s}.dot-c .dot2[data-v-ad14610d]{animation:1s up-ad14610d linear infinite backwards normal;animation-delay:-1.3s;margin-left:6px}.dot-c .dot3[data-v-ad14610d]{animation:1s up-ad14610d linear infinite backwards normal;animation-delay:-1.6s;margin-left:6px}@keyframes up-ad14610d{0%{height:26px}25%{height:10px}75%{height:20px}to{height:26px}}\n',document.head.appendChild(r);var z=t=>n("https://arab-pk.badambiz.com/api/room/get_share_detail/",{info:t});function U(){!function t(e){var a=d.getPlatform();if(!a.isPc){var r=window.innerWidth;if(Math.min(window.screen.height,window.innerHeight)<5)setTimeout((()=>{t(e)}),16);else{var o=Number((r/e).toFixed(3)),n=document.getElementById("viewport-config");n.name="viewport",n.content=`width=device-width,initial-scale=${o},user-scalable=no,maximum-scale=${o},minimum-scale=${o},viewport-fit=cover`,document.documentElement.style.width=`${e}px`,a.isIPhone?document.documentElement.style.height="100%":document.documentElement.style.height=`${window.innerHeight}px`}}}(750);var t=d.getArgsFromUrl("r");var e=0;"diwania"!==S.value.class&&(d.getPlatform().isAndroid?function(){var a=document.createElement("iframe"),r=document.body;if(a.style.cssText="position:absolute;width:1px;height:1px;",window.location.origin.indexOf("sawa-are")>=0)a.src=`sawa://live_room?room_id=${t}`;else{var o=d.getArgsFromUrl("ludo");a.src=o?`sawaludo://live_room?room_id=${t}`:`sawaksa://live_room?room_id=${t}`}r.appendChild(a),clearTimeout(e),e=setTimeout((()=>{d.getPlatform().isAndroid?s():l()}),1500)}():function(){if(window.location.origin.indexOf("sawa-are")>=0)window.location.href=`sawa://live_room?room_id=${t}`;else{var e=d.getArgsFromUrl("ludo");window.location.href=e?`sawaludo://live_room?room_id=${t}`:`sawaksa://live_room?room_id=${t}`}}())}var S=i((()=>d.getArgsFromUrl("ludo")?{class:"jackaroo",name:"Sawa Jackaroo"}:d.getArgsFromUrl("video")?{class:"diwania",name:"Diwania"}:{class:"sawa",name:"Sawa"})),I=t=>(E("data-v-ad14610d"),t=t(),B(),t),M={style:{overflow:"scroll",height:"100%"}},j={class:"header"},O={class:"logoC"},K={class:"text"},T={class:"new-share",id:"new-share"},D=I((()=>m("div",{class:"top"},null,-1))),C=I((()=>m("div",{class:"top-star1"},null,-1))),X=I((()=>m("div",{class:"top-star2"},null,-1))),F={key:0,class:"bottom"},N={class:"title",dir:"auto"},P={class:"card"},H={key:0,class:"head-r"},L={key:1,class:"dot-c"},Q=[I((()=>m("div",{class:"dot dot1"},null,-1))),I((()=>m("div",{class:"dot dot2"},null,-1))),I((()=>m("div",{class:"dot dot3"},null,-1)))],Y=I((()=>m("div",{class:"icon2"},null,-1))),G=I((()=>m("div",{class:"icon3"},null,-1))),V=I((()=>m("div",{class:"icon4"},null,-1))),W={key:0,class:"icon5"},J=I((()=>m("div",{class:"icon6"},null,-1))),Z={class:"name",dir:"auto"},q={class:"num"},_={key:0,class:"home-icon"},$={key:1},tt={key:0,class:"icon1"},et={key:1,class:"icon7"},at={key:2,class:"icon8"},rt={key:3,class:"room-card"},ot={class:"room-name"},nt={class:"room-name-top",dir:"auto"},it={class:"room-name-bottom"},dt={class:"breath"},st=I((()=>m("div",{class:"button-icon button-left"},null,-1))),lt=I((()=>m("div",{class:"button-icon button-right"},null,-1))),ct=c({__name:"index",setup(e){var r=u(!1),n=u(0),i=u(0),c=u(""),E=u(""),B=u(""),R=u(""),I=u(0),ct=u(0),ut=u(""),ft=u(""),ht=u(""),gt=u(0),At=u(!1);function pt(){return mt.apply(this,arguments)}function mt(){return(mt=o(a().mark((function e(){var o,s,l,u,f,h,g;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=d.getArgsFromUrl("info"))){e.next=12;break}return e.next=4,z(o);case 4:s=e.sent,l=t(s,2),u=l[0],f=l[1],h=f.result,g=f.data,f.message,u&&0===h&&(E.value=g.room_avatar,E.value=E.value.replace(/ /g,"+"),i.value=g.room_level,c.value=g.room_user_nickname,n.value=g.room_user_duid,B.value=g.room_id,R.value=g.uid,ut.value=g.avatar,ft.value=g.display_uid,ht.value=g.nickname,g.room_id&&(r.value=!0));case 12:document.addEventListener("visibilitychange",(()=>{"visible"!==document.visibilityState&&(console.log("不可见了"),clearTimeout(I.value),clearTimeout(ct.value))})),setTimeout((()=>{var t;document.getElementById("new-share")&&(gt.value=null===(t=document.getElementById("new-share"))||void 0===t?void 0:t.scrollHeight,setTimeout((()=>{At.value=!0})))}),500);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vt(){var t=d.getArgsFromUrl("ludo");if(clearTimeout(I.value),window.location.origin.indexOf("sawa-are")>=0)window.location.href=`sawa://live_room?room_id=${B.value}`;else if(d.getPlatform().isAndroid){var e=document.createElement("iframe"),a=document.body;e.style.cssText="position:absolute;width:1px;height:1px;",e.src=t?`sawaludo://live_room?room_id=${B.value}`:`sawaksa://live_room?room_id=${B.value}`,a.appendChild(e)}else"jackaroo"===S.value.class?window.location.href=`sawaludo://live_room?room_id=${B.value}`:"diwania"===S.value.class?window.location.href=`sawavideo://live_room?room_id=${B.value}`:window.location.href=`sawaksa://live_room?room_id=${B.value}`;I.value=setTimeout((()=>{"diwania"!==S.value.class&&(d.getPlatform().isAndroid?s():l())}),1e3)}return f(o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:U();case 3:case"end":return t.stop()}}),t)})))),g(o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:pt();case 1:case"end":return t.stop()}}),t)})))),(t,e)=>(A(),p("div",M,[m("div",j,[m("div",O,[m("div",K,v(w(S).name),1),m("div",{class:x(["logo",[`${w(S).class}`]])},null,2)])]),m("div",T,[D,C,X,At.value?(A(),p("div",F)):b("",!0),At.value?(A(),p("div",{key:1,class:"bottom-star1",style:y({top:gt.value-344+"px"})},null,4)):b("",!0),At.value?(A(),p("div",{key:2,class:"bottom-star2",style:y({top:gt.value-344+"px"})},null,4)):b("",!0),m("div",N,v(w(d.sprintf)(w(d._T)("我在{appname}等你来"),{appname:w(S).name})),1),m("div",P,[m("div",{class:x(["head",!r.value&&"head-room"]),style:y({backgroundImage:`url(${r.value?E.value:ut.value})`})},[r.value?(A(),p("div",H)):b("",!0),r.value?(A(),p("div",L,Q)):b("",!0)],6),Y,G,V,r.value?b("",!0):(A(),p("div",W)),J,m("div",{class:"card-content",style:y({justifyContent:r.value?"space-between":"flex-start"})},[m("div",Z,v(r.value?c.value:ht.value),1),m("div",q,[k(v(r.value?n.value:ft.value)+" ",1),r.value?(A(),p("div",_)):b("",!0),r.value?b("",!0):(A(),p("div",$,"  ID"))]),r.value?(A(),p("div",tt)):b("",!0),r.value?b("",!0):(A(),p("div",et)),r.value||"diwania"===w(S).class?b("",!0):(A(),p("div",at)),r.value?(A(),p("div",rt,[m("div",ot,[m("div",nt,v(ht.value),1),m("div",it,v(ft.value)+"   ID",1)]),m("div",{class:"room-head",style:y({backgroundImage:`url(${ut.value})`})},null,4)])):b("",!0)],4),m("span",dt,[m("div",{class:"button",dir:"auto",onClick:vt},[st,k(" "+v(w(d.sprintf)(w(d._T)("下载并打开{appname}"),{appname:w(S).name}))+" ",1),lt]),m("div",{class:x(["button-c",{"-isLudo":"jackaroo"===w(S).class}])},null,2)])])])]))}});e("default",R(ct,[["__scopeId","data-v-ad14610d"]]))}}}))}();