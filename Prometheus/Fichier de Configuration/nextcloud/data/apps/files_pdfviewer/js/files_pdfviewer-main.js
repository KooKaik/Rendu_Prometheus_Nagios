/*! For license information please see files_pdfviewer-main.js.LICENSE.txt */
(()=>{var t={9753:(t,e,n)=>{"use strict";n(2772),n(9601),n(1539),n(4916),n(9714),n(5306),e.nu=void 0;e.nu=function(t,e,n){var r=Object.assign({escape:!0,noRewrite:!1},n||{}),i=function(t,e){return e=e||{},t.replace(/{([^{}]*)}/g,(function(t,n){var o=e[n];return r.escape?"string"==typeof o||"number"==typeof o?encodeURIComponent(o.toString()):encodeURIComponent(t):"string"==typeof o||"number"==typeof o?o.toString():t}))};return"/"!==t.charAt(0)&&(t="/"+t),!0!==OC.config.modRewriteWorking||r.noRewrite?o()+"/index.php"+i(t,e||{}):o()+i(t,e||{})};var r=function(t,e,n){var r=-1!==OC.coreApps.indexOf(t),i=o();return"php"!==n.substring(n.length-3)||r?"php"===n.substring(n.length-3)||r?(i+="settings"!==t&&"core"!==t&&"search"!==t||"ajax"!==e?"/":"/index.php/",r||(i+="apps/"),""!==t&&(i+=t+="/"),e&&(i+=e+"/"),i+=n):(i=OC.appswebroots[t],e&&(i+="/"+e+"/"),"/"!==i.substring(i.length-1)&&(i+="/"),i+=n):(i+="/index.php/apps/"+t,"index.php"!==n&&(i+="/",e&&(i+=encodeURI(e+"/")),i+=n)),i};var o=function(){return OC.webroot}},1530:(t,e,n)=>{"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9670:(t,e,n)=>{var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,e,n)=>{var r=n(5656),o=n(7466),i=n(1400),a=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},9341:(t,e,n)=>{"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:(t,e,n)=>{var r=n(1694),o=n(4326),i=n(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},9920:(t,e,n)=>{var r=n(6656),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,u(e,f))}}},8880:(t,e,n)=>{var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,n)=>{var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,n)=>{var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:(t,e,n)=>{var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:(t,e,n)=>{var r,o,i=n(7854),a=n(8113),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,n)=>{var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),u=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,v,d=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[d]||c(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(n,f))&&v.value:n[f],!s(h?f:d+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,e,n)=>{"use strict";n(4916);var r=n(1320),o=n(2261),i=n(7293),a=n(5112),c=n(8880),u=a("species"),s=RegExp.prototype,f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),p=a("replace"),v=!!/./[p]&&""===/./[p]("a","$0"),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var h=a(t),g=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),x=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!x||"replace"===t&&(!f||!l||v)||"split"===t&&!d){var y=/./[h],m=n(h,""[t],(function(t,e,n,r,i){var a=e.exec;return a===o||a===s.exec?g&&!i?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),b=m[0],S=m[1];r(String.prototype,t,b),r(s,h,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}p&&c(s[h],"sham",!0)}},5005:(t,e,n)=>{var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},647:(t,e,n)=>{var r=n(7908),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,s,f){var l=n+t.length,p=u.length,v=c;return void 0!==s&&(s=r(s),v=a),i.call(f,v,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":a=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>p){var f=o(c/10);return 0===f?r:f<=p?void 0===u[f-1]?i.charAt(1):u[f-1]+i.charAt(1):r}a=u[c-1]}return void 0===a?"":a}))}},7854:(t,e,n)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:(t,e,n)=>{var r=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},3501:t=>{t.exports={}},4664:(t,e,n)=>{var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,n)=>{var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,n)=>{var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:(t,e,n)=>{var r,o,i,a=n(8536),c=n(7854),u=n(111),s=n(8880),f=n(6656),l=n(5465),p=n(6200),v=n(3501),d="Object already initialized",h=c.WeakMap;if(a||l.state){var g=l.state||(l.state=new h),x=g.get,y=g.has,m=g.set;r=function(t,e){if(y.call(g,t))throw new TypeError(d);return e.facade=t,m.call(g,t,e),e},o=function(t){return x.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var b=p("state");v[b]=!0,r=function(t,e){if(f(t,b))throw new TypeError(d);return e.facade=t,s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},4705:(t,e,n)=>{var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,n)=>{var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:(t,e,n)=>{var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},1574:(t,e,n)=>{"use strict";var r=n(9781),o=n(7293),i=n(1956),a=n(5181),c=n(5296),u=n(7908),s=n(8361),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||i(f({},e)).join("")!=o}))?function(t,e){for(var n=u(t),o=arguments.length,f=1,l=a.f,p=c.f;o>f;)for(var v,d=s(arguments[f++]),h=l?i(d).concat(l(d)):i(d),g=h.length,x=0;g>x;)v=h[x++],r&&!p.call(d,v)||(n[v]=d[v]);return n}:f},3070:(t,e,n)=>{var r=n(9781),o=n(4664),i=n(9670),a=n(7593),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:(t,e,n)=>{var r=n(9781),o=n(5296),i=n(9114),a=n(5656),c=n(7593),u=n(6656),s=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,n)=>{var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,n)=>{var r=n(6656),o=n(5656),i=n(1318).indexOf,a=n(3501);t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},1956:(t,e,n)=>{var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},288:(t,e,n)=>{"use strict";var r=n(1694),o=n(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},3887:(t,e,n)=>{var r=n(5005),o=n(8006),i=n(5181),a=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},857:(t,e,n)=>{var r=n(7854);t.exports=r},1320:(t,e,n)=>{var r=n(7854),o=n(8880),i=n(6656),a=n(3505),c=n(2788),u=n(9909),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=f(n)).source||(u.source=l.join("string"==typeof e?e:""))),t!==r?(s?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},7651:(t,e,n)=>{var r=n(4326),o=n(2261);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},2261:(t,e,n)=>{"use strict";var r,o,i=n(7066),a=n(2999),c=n(2309),u=RegExp.prototype.exec,s=c("native-string-replace",String.prototype.replace),f=u,l=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(l||v||p)&&(f=function(t){var e,n,r,o,a=this,c=p&&a.sticky,f=i.call(a),d=a.source,h=0,g=t;return c&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),n=new RegExp("^(?:"+d+")",f)),v&&(n=new RegExp("^"+d+"$(?!\\s)",f)),l&&(e=a.lastIndex),r=u.call(c?n:a,g),c?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:l&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),v&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},7066:(t,e,n)=>{"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:(t,e,n)=>{"use strict";var r=n(7293);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,n)=>{var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:(t,e,n)=>{var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,n)=>{var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:(t,e,n)=>{var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.14.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:(t,e,n)=>{var r=n(9958),o=n(4488),i=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:(t,e,n)=>{var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:(t,e,n)=>{var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:(t,e,n)=>{var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:(t,e,n)=>{var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:(t,e,n)=>{var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:(t,e,n)=>{var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:(t,e,n)=>{var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,n)=>{var r=n(7854),o=n(2309),i=n(6656),a=n(9711),c=n(133),u=n(3307),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)&&(c||"string"==typeof s[t])||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},2772:(t,e,n)=>{"use strict";var r=n(2109),o=n(1318).indexOf,i=n(9341),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,u=i("indexOf");r({target:"Array",proto:!0,forced:c||!u},{indexOf:function(t){return c?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},9601:(t,e,n)=>{var r=n(2109),o=n(1574);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},1539:(t,e,n)=>{var r=n(1694),o=n(1320),i=n(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},4916:(t,e,n)=>{"use strict";var r=n(2109),o=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},9714:(t,e,n)=>{"use strict";var r=n(1320),o=n(9670),i=n(7293),a=n(7066),c="toString",u=RegExp.prototype,s=u.toString,f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},5306:(t,e,n)=>{"use strict";var r=n(7007),o=n(9670),i=n(7466),a=n(9958),c=n(4488),u=n(1530),s=n(647),f=n(7651),l=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(n,r){var o=c(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!v&&d||"string"==typeof r&&-1===r.indexOf(h)){var c=n(e,t,this,r);if(c.done)return c.value}var g=o(t),x=String(this),y="function"==typeof r;y||(r=String(r));var m=g.global;if(m){var b=g.unicode;g.lastIndex=0}for(var S=[];;){var E=f(g,x);if(null===E)break;if(S.push(E),!m)break;""===String(E[0])&&(g.lastIndex=u(x,i(g.lastIndex),b))}for(var w,O="",A=0,j=0;j<S.length;j++){E=S[j];for(var C=String(E[0]),R=l(p(a(E.index),x.length),0),_=[],T=1;T<E.length;T++)_.push(void 0===(w=E[T])?w:String(w));var P=E.groups;if(y){var I=[C].concat(_,R,x);void 0!==P&&I.push(P);var U=String(r.apply(void 0,I))}else U=s(C,x,R,_,P,r);R>=A&&(O+=x.slice(A,R)+U,A=R+C.length)}return O+x.slice(A)}]}))},5002:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(7537),o=n.n(r),i=n(3645),a=n.n(i)()(o());a.push([t.id,"iframe[data-v-7229e1f8]{width:100%;top:50px;position:absolute;height:calc(100vh - 50px)}","",{version:3,sources:["webpack://./src/views/PDFView.vue"],names:[],mappings:"AAoDA,wBACC,UAAA,CACA,QAAA,CACA,iBAAA,CACA,yBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\niframe {\n\twidth: 100%;\n\ttop: 50px;\n\tposition: absolute;\n\theight: calc(100vh - 50px);\n}\n"],sourceRoot:""}]);const c=a},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},7537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},3379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=n(l),v={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(v);else{var d=o(v,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var f=n(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(9753),e=document.getElementById("hideDownload");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}const o={name:"PDFView",computed:{iframeSrc:function(){return(0,t.nu)("/apps/files_pdfviewer/?file={file}&canDownload={canDownload}",{canDownload:!e||e&&"true"!==e.value?1:0,file:this.davPath})}},mounted:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.doneLoading(),e.$nextTick((function(){this.$el.focus()}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))})()}};var i=n(3379),a=n.n(i),c=n(7795),u=n.n(c),s=n(569),f=n.n(s),l=n(3565),p=n.n(l),v=n(9216),d=n.n(v),h=n(4589),g=n.n(h),x=n(5002),y={};y.styleTagTransform=g(),y.setAttributes=p(),y.insert=f().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=d();a()(x.Z,y);x.Z&&x.Z.locals&&x.Z.locals;const m=function(t,e,n,r,o,i,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{attrs:{src:t.iframeSrc}})}),[],!1,null,"7229e1f8",null).exports;window.addEventListener("DOMContentLoaded",(function(){OCA.Viewer.registerHandler({id:"pdf",mimes:["application/pdf","application/illustrator"],component:m})}))})()})();
//# sourceMappingURL=files_pdfviewer-main.js.map?v=e6925a546b82639c875b