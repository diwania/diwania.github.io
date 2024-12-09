!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",y="suspendedYield",v="executing",d="completed",m={};function g(){}function w(){}function b(){}var x={};l(x,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(G([])));E&&E!==n&&o.call(E,c)&&(x=E);var _=b.prototype=g.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(n,a,i,c){var u=f(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function j(t,r,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(t,r,n);if("normal"===s.type){if(o=n.done?d:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},k(P.prototype),l(P.prototype,u,(function(){return this})),r.AsyncIterator=P,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new P(h(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(_),l(_,s,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},r}function e(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}System.register(["./index-legacy-B6nlsNrh.js"],(function(r,n){"use strict";var o,a,i,c,u,s,l,h,f,p,y,v;return{setters:[t=>{o=t.at,a=t.bf,i=t.be,c=t.bG,u=t.bH,s=t.N,l=t.$,h=t.c,f=t.bq,p=t.aQ,y=t.bI,v=t.bJ}],execute:function(){function n(){var r;return r=t().mark((function e(r,n={}){var l,h,f,p,y;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null==(l=s())||l.exposed,h=o(),r===a.h5_pay_channel_click&&i(r,{type:c(h.currentPayType),type2:u(h.currentPayType),good_id:(null===(f=h.currentPayItem)||void 0===f?void 0:f.payItemDisplayMethods[0].methods[0].recharge_id)||0,amount:(null===(p=h.currentPayItem)||void 0===p?void 0:p.amount)||0,number:(null===(y=h.currentPayItem)||void 0===y?void 0:y.coin)||0});case 4:case"end":return t.stop()}}),e)})),n=function(){var t=this,n=arguments;return new Promise((function(o,a){var i=r.apply(t,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))},n.apply(this,arguments)}r("p",{"-6":{ksa:["card","sa"],are:["card","eg","wallet"]},6:{ksa:["card","sa"],are:["card","eg","wallet"]},8:{ksa:["onecard","zain"],are:["voda","eg","onecard"]},9:{ksa:["card"],are:["card"]},10:{ksa:["card"],are:["card"]},13:{ksa:["amex","diners","discover","visa","master"],are:["card2","master","visa"]}}),r("g",(t=>{switch(console.log("item",t),t){case"Checkout":return["amex","diners","discover","visa","master"];case"Payermax":return["card","sa"];case"Apple Pay":return["apple"];case"Adyen":return["visa","master"]}}));var d="pay-channel-item";r("s",l(d,(t=>{var e={availableChannelList:h((()=>{var t=o().currentPayItem;return t?t.payItemDisplayMethods.filter((t=>t.displayName!==f.Apple||p())):[]})),selectChannel:t=>{var e=o();e.setCurrentDisplayType(t.displayName),e.setCurrentDisplayMethod(y.显示支付渠道),v(),console.log(d,t),function(t){n.apply(this,arguments)}(a.h5_pay_channel_click)},isChannelActive:t=>{var e=o();return t.displayName===e.currentDisplayType&&e.currentDisplayMethod===y.显示支付渠道}};return{exposed:e}})))}}}))}();