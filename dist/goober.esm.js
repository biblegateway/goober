var e={data:""},t=function(t){return"undefined"!=typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e},r=function(e){var r=t(e),n=r.data;return r.data="",n},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,a=/\/\*[^]*?\*\/|\s\s+|\n/g,o=function e(t,r){var n,a="",o="",c="",i=function(i){var f=t[i];"object"==typeof f?(n=r?r.replace(/([^,])+/g,function(e){return u=i,i.replace(/([^,])+/g,function(t){return/&/.test(t)?(u=i,t.replace(/&/g,e)):(u=i,e?e+" "+t:t)})}):i,o+="@"==i[0]?"f"==i[1]?e(f,i):i+"{"+e(f,"k"==i[1]?"":r)+"}":e(f,n)):"@"==i[0]&&"i"==i[1]?a=i+" "+f+";":(i=i.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=e.p?e.p(i,f):i+":"+f+";"),u=i};for(var u in t)i(u);return c[0]?a+(n=r?r+"{"+c+"}":c)+o:a+o},c={},i=function(e,t,r,i,u){var f="object"==typeof e?function e(t){var r="";for(var n in t)r+=n+("object"==typeof t[n]?e(t[n]):t[n]);return r}(e):e,s=c[f]||(c[f]=function(e){for(var t=0,r=11;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r}(f));if(!c[s]){var p,l="object"==typeof e?e:function(e){for(var t,r=[{}];t=n.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]}(e);c[s]=o(u?((p={})["@keyframes "+s]=l,p):l,r?"":"."+s)}return function(e,t,r){-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)}(c[s],t,i),s},u=function(e,t,r){return e.reduce(function(e,n,a){var c=t[a];if(c&&c.call){var i=c(r),u=i&&i.props&&i.props.className||/^go/.test(i)&&i;c=u?"."+u:i&&"object"==typeof i?i.props?"":o(i,""):i}return e+n+(null==c?"":c)},"")};function f(e){var r=this||{},n=e.call?e(r.p):e;return i(n.unshift?u(n,[].slice.call(arguments,1),r.p):n,t(r.target),r.g,r.o,r.k)}var s,p,l,d=f.bind({g:1}),g=f.bind({k:1});function v(e,t,r,n){o.p=t,s=e,p=r,l=n}function b(e,t){var r=this||{};return function(){var n=arguments;function a(o,c){var i=Object.assign({},o),u=i.className||a.className;r.p=Object.assign({theme:p&&p()},i),r.o=/ *go\d+/.test(u),i.className=f.apply(r,n)+(u?" "+u:""),t&&(i.ref=c);var d=i.as||e;return l&&d[0]&&l(i),s(d,i)}return t?t(a):a}}export{f as css,r as extractCss,d as glob,g as keyframes,v as setup,b as styled};