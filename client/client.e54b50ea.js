function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e,t,n,s,r,o,i){const c=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(c){const r=a(t,n,s,i);e.p(r,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function d(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function y(){return b("")}function $(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function w(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:_(e,s,t[s])}function S(e){return Array.from(e.childNodes)}function k(e,t,n,s){for(let s=0;s<e.length;s+=1){const r=e[s];if(r.nodeName===t){let t=0;const o=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)r.removeAttribute(o[e]);return e.splice(s,1)[0]}}return s?g(t):m(t)}function x(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return b(t)}function A(e){return x(e," ")}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function T(e,t){e.value=null==t?"":t}let I,N;function L(){if(void 0===I){I=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){I=!0}}return I}function H(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=L();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=$(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=$(n.contentWindow,"resize",t)}),d(e,n),()=>{(s||r&&n.contentWindow)&&r(),h(n)}}function R(e,t=document.body){return Array.from(t.querySelectorAll(e))}class O{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)f(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(h)}}function U(e){N=e}function C(){if(!N)throw new Error("Function called outside component initialization");return N}function j(e){C().$$.on_mount.push(e)}function D(e){C().$$.after_update.push(e)}function G(e){C().$$.on_destroy.push(e)}const M=[],B=[],q=[],z=[],J=Promise.resolve();let K=!1;function V(e){q.push(e)}let F=!1;const W=new Set;function Y(){if(!F){F=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];U(t),Q(t.$$)}for(U(null),M.length=0;B.length;)B.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];W.has(t)||(W.add(t),t())}q.length=0}while(M.length);for(;z.length;)z.pop()();K=!1,F=!1,W.clear()}}function Q(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const X=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||r(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function se(e,t,n,s){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push((()=>{X.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function re(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function oe(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function ae(e,t){e&&e.l(t)}function ce(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||V((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(V)}function le(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(M.push(e),K||(K=!0,J.then(Y)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(t,n,o,i,a,c,l=[-1]){const u=N;U(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let f=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),f&&ue(t,e)),n})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const e=S(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor,n.customElement),Y()}U(u)}class fe{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const he=[];function pe(t,n=e){let s;const r=[];function o(e){if(i(t,e)&&(t=e,s)){const e=!he.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),he.push(n,t)}if(e){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.push(c),1===r.length&&(s=n(o)||e),i(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const me={};var ge={owner:"gesisnotebooks",repo:"status",sites:[{name:"GESIS Notebooks - Persistent BinderHub",url:"https://notebooks.gesis.org"},{name:"GESIS Notebooks - BinderHub",url:"https://notebooks.gesis.org/binder"},{name:"GESIS Notebooks - Gallery",url:"https://notebooks.gesis.org/gallery/"},{name:"Persistent BinderHub - Health",url:"https://notebooks.gesis.org/services/binder/health",__dangerous__body_degraded:'{"ok": false,'},{name:"Persistent BinderHub - Docker",url:"https://notebooks.gesis.org/services/binder/health",__dangerous__body_degraded:'{"service": "Docker registry", "ok": false}'},{name:"Persistent BinderHub - Hub API",url:"https://notebooks.gesis.org/services/binder/health",__dangerous__body_degraded:'{"service": "JupyterHub API", "ok": false}'},{name:"BinderHub - Health",url:"https://notebooks.gesis.org/binder/health",__dangerous__body_degraded:'{"ok": false,'},{name:"BinderHub - Docker",url:"https://notebooks.gesis.org/binder/health",__dangerous__body_degraded:'{"service": "Docker registry", "ok": false}'},{name:"BinderHub - Hub API",url:"https://notebooks.gesis.org/binder/health",__dangerous__body_degraded:'{"service": "JupyterHub API", "ok": false}'}],"status-website":{baseUrl:"/status",logoUrl:"https://raw.githubusercontent.com/gesiscss/orc/master/load_balancer/static/images/logo/logo_new.svg",name:"GESIS Notebooks",introMessage:"Status page tracking various services running at GESIS notebooks. This status page tracks the deployed Persistent BinderHub, BinderHub (available through mybinder.org), and Gallery.",navbar:[{title:"Status",href:"/status"},{title:"GitHub",href:"https://github.com/gesiscss/orc"}]},path:"https://gesisnotebooks.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function be(e,t,n){const s=e.slice();return s[1]=t[n],s}function ve(t){let n,s,r,o=ge["status-website"]&&!ge["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=m("img"),this.h()},l(e){n=k(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(s=ge["status-website"].logoUrl)&&_(n,"src",s),_(n,"class","svelte-a08hsz")},m(e,t){f(e,n,t)},p:e,d(e){e&&h(n)}}}(),i=ge["status-website"]&&!ge["status-website"].hideNavTitle&&function(t){let n,s,r=ge["status-website"].name+"";return{c(){n=m("div"),s=b(r)},l(e){n=k(e,"DIV",{});var t=S(n);s=x(t,r),t.forEach(h)},m(e,t){f(e,n,t),d(n,s)},p:e,d(e){e&&h(n)}}}();return{c(){n=m("div"),s=m("a"),o&&o.c(),r=v(),i&&i.c(),this.h()},l(e){n=k(e,"DIV",{});var t=S(n);s=k(t,"A",{href:!0,class:!0});var a=S(s);o&&o.l(a),r=A(a),i&&i.l(a),a.forEach(h),t.forEach(h),this.h()},h(){_(s,"href",ge["status-website"].logoHref||ge.path),_(s,"class","logo svelte-a08hsz")},m(e,t){f(e,n,t),d(n,s),o&&o.m(s,null),d(s,r),i&&i.m(s,null)},p(e,t){ge["status-website"]&&!ge["status-website"].hideNavLogo&&o.p(e,t),ge["status-website"]&&!ge["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&h(n),o&&o.d(),i&&i.d()}}}function ye(e){let t,n,s,r,o,i=e[1].title+"";return{c(){t=m("li"),n=m("a"),s=b(i),o=v(),this.h()},l(e){t=k(e,"LI",{});var r=S(t);n=k(r,"A",{"aria-current":!0,href:!0,class:!0});var a=S(n);s=x(a,i),a.forEach(h),o=A(r),r.forEach(h),this.h()},h(){_(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),_(n,"href",e[1].href.replace("$OWNER",ge.owner).replace("$REPO",ge.repo)),_(n,"class","svelte-a08hsz")},m(e,r){f(e,t,r),d(t,n),d(n,s),d(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&_(n,"aria-current",r)},d(e){e&&h(t)}}}function $e(t){let n,s,r,o,i,a=ge["status-website"]&&ge["status-website"].logoUrl&&ve(),c=ge["status-website"]&&ge["status-website"].navbar&&function(e){let t,n=ge["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=ye(be(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);f(e,t,n)},p(e,r){if(1&r){let o;for(n=ge["status-website"].navbar,o=0;o<n.length;o+=1){const i=be(e,n,o);s[o]?s[o].p(i,r):(s[o]=ye(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){p(s,e),e&&h(t)}}}(t),l=ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&function(t){let n,s,r,o=ge.i18n.navGitHub+"";return{c(){n=m("li"),s=m("a"),r=b(o),this.h()},l(e){n=k(e,"LI",{});var t=S(n);s=k(t,"A",{href:!0,class:!0});var i=S(s);r=x(i,o),i.forEach(h),t.forEach(h),this.h()},h(){_(s,"href",`https://github.com/${ge.owner}/${ge.repo}`),_(s,"class","svelte-a08hsz")},m(e,t){f(e,n,t),d(n,s),d(s,r)},p:e,d(e){e&&h(n)}}}();return{c(){n=m("nav"),s=m("div"),a&&a.c(),r=v(),o=m("ul"),c&&c.c(),i=v(),l&&l.c(),this.h()},l(e){n=k(e,"NAV",{class:!0});var t=S(n);s=k(t,"DIV",{class:!0});var u=S(s);a&&a.l(u),r=A(u),o=k(u,"UL",{class:!0});var d=S(o);c&&c.l(d),i=A(d),l&&l.l(d),d.forEach(h),u.forEach(h),t.forEach(h),this.h()},h(){_(o,"class","svelte-a08hsz"),_(s,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(e,t){f(e,n,t),d(n,s),a&&a.m(s,null),d(s,r),d(s,o),c&&c.m(o,null),d(o,i),l&&l.m(o,null)},p(e,[t]){ge["status-website"]&&ge["status-website"].logoUrl&&a.p(e,t),ge["status-website"]&&ge["status-website"].navbar&&c.p(e,t),ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&h(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function we(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class _e extends fe{constructor(e){super(),de(this,e,we,$e,i,{segment:0})}}var Ee={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Se(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ke(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xe(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Ee[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Se(ke(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=xe(Se(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+ke(r[8])+'" alt="'+ke(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+ke(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+xe(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+ke(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ae(e,t,n){const s=e.slice();return s[3]=t[n],s}function Pe(e,t,n){const s=e.slice();return s[3]=t[n],s}function Te(e,t,n){const s=e.slice();return s[8]=t[n],s}function Ie(t){let n;return{c(){n=m("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${ge.path}/themes/${(ge["status-website"]||{}).theme||"light"}.css`)},m(e,t){f(e,n,t)},p:e,d(e){e&&h(n)}}}function Ne(t){let n;return{c(){n=m("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(ge["status-website"]||{}).themeUrl)},m(e,t){f(e,n,t)},p:e,d(e){e&&h(n)}}}function Le(t){let n,s;return{c(){n=m("script"),this.h()},l(e){n=k(e,"SCRIPT",{src:!0,async:!0,defer:!0}),S(n).forEach(h),this.h()},h(){n.src!==(s=t[8].src)&&_(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){f(e,n,t)},p:e,d(e){e&&h(n)}}}function He(t){let n;return{c(){n=m("link"),this.h()},l(e){n=k(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",t[3].rel),_(n,"href",t[3].href),_(n,"media",t[3].media)},m(e,t){f(e,n,t)},p:e,d(e){e&&h(n)}}}function Re(t){let n;return{c(){n=m("meta"),this.h()},l(e){n=k(e,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",t[3].name),_(n,"content",t[3].content)},m(e,t){f(e,n,t)},p:e,d(e){e&&h(n)}}}function Oe(t){let n,s,r,o,i,l,u,g,b,$,w,E,x,P,T,I,N,L,H=xe(ge.i18n.footer.replace(/\$REPO/,`https://github.com/${ge.owner}/${ge.repo}`))+"",U=(ge["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ge["status-website"]||{}).customHeadHtml+"";return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new O(s)},m(e,t){n.m(r,e,t),f(e,s,t)},p:e,d(e){e&&h(s),e&&n.d()}}}();let C=((ge["status-website"]||{}).themeUrl?Ne:Ie)(t),j=(ge["status-website"]||{}).scripts&&function(e){let t,n=(ge["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Le(Te(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);f(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Te(e,n,o);s[o]?s[o].p(i,r):(s[o]=Le(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){p(s,e),e&&h(t)}}}(t),D=(ge["status-website"]||{}).links&&function(e){let t,n=(ge["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=He(Pe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);f(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Pe(e,n,o);s[o]?s[o].p(i,r):(s[o]=He(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){p(s,e),e&&h(t)}}}(t),G=(ge["status-website"]||{}).metaTags&&function(e){let t,n=(ge["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Re(Ae(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);f(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ae(e,n,o);s[o]?s[o].p(i,r):(s[o]=Re(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){p(s,e),e&&h(t)}}}(t),M=ge["status-website"].css&&function(t){let n,s,r=`<style>${ge["status-website"].css}</style>`;return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new O(s)},m(e,t){n.m(r,e,t),f(e,s,t)},p:e,d(e){e&&h(s),e&&n.d()}}}(),B=ge["status-website"].js&&function(t){let n,s,r=`<script>${ge["status-website"].js}<\/script>`;return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new O(s)},m(e,t){n.m(r,e,t),f(e,s,t)},p:e,d(e){e&&h(s),e&&n.d()}}}(),q=(ge["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ge["status-website"]||{}).customBodyHtml+"";return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new O(s)},m(e,t){n.m(r,e,t),f(e,s,t)},p:e,d(e){e&&h(s),e&&n.d()}}}();E=new _e({props:{segment:t[0]}});const z=t[2].default,J=function(e,t,n,s){if(e){const r=a(e,t,n,s);return e[0](r)}}(z,t,t[1],null);return{c(){U&&U.c(),n=y(),C.c(),s=m("link"),r=m("link"),o=m("link"),j&&j.c(),i=y(),D&&D.c(),l=y(),G&&G.c(),u=y(),M&&M.c(),g=y(),B&&B.c(),b=y(),$=v(),q&&q.c(),w=v(),ie(E.$$.fragment),x=v(),P=m("main"),J&&J.c(),T=v(),I=m("footer"),N=m("p"),this.h()},l(e){const t=R('[data-svelte="svelte-ri9y7q"]',document.head);U&&U.l(t),n=y(),C.l(t),s=k(t,"LINK",{rel:!0,href:!0}),r=k(t,"LINK",{rel:!0,type:!0,href:!0}),o=k(t,"LINK",{rel:!0,type:!0,href:!0}),j&&j.l(t),i=y(),D&&D.l(t),l=y(),G&&G.l(t),u=y(),M&&M.l(t),g=y(),B&&B.l(t),b=y(),t.forEach(h),$=A(e),q&&q.l(e),w=A(e),ae(E.$$.fragment,e),x=A(e),P=k(e,"MAIN",{class:!0});var a=S(P);J&&J.l(a),a.forEach(h),T=A(e),I=k(e,"FOOTER",{class:!0});var c=S(I);N=k(c,"P",{}),S(N).forEach(h),c.forEach(h),this.h()},h(){_(s,"rel","stylesheet"),_(s,"href",`${ge.path}/global.css`),_(r,"rel","icon"),_(r,"type","image/svg"),_(r,"href",(ge["status-website"]||{}).faviconSvg||(ge["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(ge["status-website"]||{}).favicon||"/logo-192.png"),_(P,"class","container"),_(I,"class","svelte-jbr799")},m(e,t){U&&U.m(document.head,null),d(document.head,n),C.m(document.head,null),d(document.head,s),d(document.head,r),d(document.head,o),j&&j.m(document.head,null),d(document.head,i),D&&D.m(document.head,null),d(document.head,l),G&&G.m(document.head,null),d(document.head,u),M&&M.m(document.head,null),d(document.head,g),B&&B.m(document.head,null),d(document.head,b),f(e,$,t),q&&q.m(e,t),f(e,w,t),ce(E,e,t),f(e,x,t),f(e,P,t),J&&J.m(P,null),f(e,T,t),f(e,I,t),d(I,N),N.innerHTML=H,L=!0},p(e,[t]){(ge["status-website"]||{}).customHeadHtml&&U.p(e,t),C.p(e,t),(ge["status-website"]||{}).scripts&&j.p(e,t),(ge["status-website"]||{}).links&&D.p(e,t),(ge["status-website"]||{}).metaTags&&G.p(e,t),ge["status-website"].css&&M.p(e,t),ge["status-website"].js&&B.p(e,t),(ge["status-website"]||{}).customBodyHtml&&q.p(e,t);const n={};1&t&&(n.segment=e[0]),E.$set(n),J&&J.p&&2&t&&c(J,z,e,e[1],t,null,null)},i(e){L||(ne(E.$$.fragment,e),ne(J,e),L=!0)},o(e){se(E.$$.fragment,e),se(J,e),L=!1},d(e){U&&U.d(e),h(n),C.d(e),h(s),h(r),h(o),j&&j.d(e),h(i),D&&D.d(e),h(l),G&&G.d(e),h(u),M&&M.d(e),h(g),B&&B.d(e),h(b),e&&h($),q&&q.d(e),e&&h(w),le(E,e),e&&h(x),e&&h(P),J&&J.d(e),e&&h(T),e&&h(I)}}}function Ue(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Ce extends fe{constructor(e){super(),de(this,e,Ue,Oe,i,{segment:0})}}function je(e){let t,n,s=e[1].stack+"";return{c(){t=m("pre"),n=b(s)},l(e){t=k(e,"PRE",{});var r=S(t);n=x(r,s),r.forEach(h)},m(e,s){f(e,t,s),d(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&P(n,s)},d(e){e&&h(t)}}}function De(t){let n,s,r,o,i,a,c,l,u,p=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&je(t);return{c(){s=v(),r=m("h1"),o=b(t[0]),i=v(),a=m("p"),c=b(p),l=v(),g&&g.c(),u=y(),this.h()},l(e){R('[data-svelte="svelte-1moakz"]',document.head).forEach(h),s=A(e),r=k(e,"H1",{class:!0});var n=S(r);o=x(n,t[0]),n.forEach(h),i=A(e),a=k(e,"P",{class:!0});var d=S(a);c=x(d,p),d.forEach(h),l=A(e),g&&g.l(e),u=y(),this.h()},h(){_(r,"class","svelte-17w3omn"),_(a,"class","svelte-17w3omn")},m(e,t){f(e,s,t),f(e,r,t),d(r,o),f(e,i,t),f(e,a,t),d(a,c),f(e,l,t),g&&g.m(e,t),f(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&P(o,e[0]),2&t&&p!==(p=e[1].message+"")&&P(c,p),e[2]&&e[1].stack?g?g.p(e,t):(g=je(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&h(s),e&&h(r),e&&h(i),e&&h(a),e&&h(l),g&&g.d(e),e&&h(u)}}}function Ge(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Me extends fe{constructor(e){super(),de(this,e,Ge,De,i,{status:0,error:1})}}function Be(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ie(n.$$.fragment),s=y()},l(e){n&&ae(n.$$.fragment,e),s=y()},m(e,t){n&&ce(n,e,t),f(e,s,t),r=!0},p(e,t){const r=16&t?re(o,[oe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ee();const e=n;se(e.$$.fragment,1,0,(()=>{le(e,1)})),te()}i?(n=new i(a()),ie(n.$$.fragment),ne(n.$$.fragment,1),ce(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&ne(n.$$.fragment,e),r=!0)},o(e){n&&se(n.$$.fragment,e),r=!1},d(e){e&&h(s),n&&le(n,e)}}}function qe(e){let t,n;return t=new Me({props:{error:e[0],status:e[1]}}),{c(){ie(t.$$.fragment)},l(e){ae(t.$$.fragment,e)},m(e,s){ce(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function ze(e){let t,n,s,r;const o=[qe,Be],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=y()},l(e){n.l(e),s=y()},m(e,n){i[t].m(e,n),f(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(ee(),se(i[c],1,1,(()=>{i[c]=null})),te(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),ne(n,1),n.m(s.parentNode,s))},i(e){r||(ne(n),r=!0)},o(e){se(n),r=!1},d(e){i[t].d(e),e&&h(s)}}}function Je(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[ze]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Ce({props:o}),{c(){ie(n.$$.fragment)},l(e){ae(n.$$.fragment,e)},m(e,t){ce(n,e,t),s=!0},p(e,[t]){const s=12&t?re(r,[4&t&&{segment:e[2][0]},8&t&&oe(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(ne(n.$$.fragment,e),s=!0)},o(e){se(n.$$.fragment,e),s=!1},d(e){le(n,e)}}}function Ke(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return D(l),u=me,d=s,C().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class Ve extends fe{constructor(e){super(),de(this,e,Ke,Je,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Fe=[],We=[{js:()=>Promise.all([import("./index.fdc965b3.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.865e881b.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].b36c68ad.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].a5a6f265.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.6970e493.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Ye=(Qe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Qe(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Qe(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Qe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xe(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function Ze(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let et,tt=1;const nt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},st={};let rt,ot;function it(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function at(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(rt))return null;let t=e.pathname.slice(rt.length);if(""===t&&(t="/"),!Fe.some((e=>e.test(t))))for(let n=0;n<Ye.length;n+=1){const s=Ye[n],r=s.pattern.exec(t);if(r){const n=it(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function ct(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Ze(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=at(r);if(o){dt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),nt.pushState({id:et},"",r.href)}}function lt(){return{x:pageXOffset,y:pageYOffset}}function ut(e){if(st[et]=lt(),e.state){const t=at(new URL(location.href));t?dt(t,e.state.id):location.href=location.href}else!function(e){tt=e}(tt+1),function(e){et=e}(tt),nt.replaceState({id:et},"",location.href)}function dt(e,t,n,s){return Xe(this,void 0,void 0,(function*(){const r=!!t;if(r)et=t;else{const e=lt();st[et]=e,et=t=++tt,st[et]=n?e:{x:0,y:0}}if(yield ot(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=st[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),st[et]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ft(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let ht,pt=null;function mt(e){const t=Ze(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=at(new URL(e,ft(document)));if(t)pt&&e===pt.href||(pt={href:e,promise:Lt(t)}),pt.promise}(t.href)}function gt(e){clearTimeout(ht),ht=setTimeout((()=>{mt(e)}),20)}function bt(e,t={noscroll:!1,replaceState:!1}){const n=at(new URL(e,ft(document)));if(n){const s=dt(n,null,t.noscroll);return nt[t.replaceState?"replaceState":"pushState"]({id:et},"",e),s}return location.href=e,new Promise((()=>{}))}const vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let yt,$t,wt,_t=!1,Et=[],St="{}";const kt={page:function(e){const t=pe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:pe(null),session:pe(vt&&vt.session)};let xt,At,Pt;function Tt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function It(e){return Xe(this,void 0,void 0,(function*(){yt&&kt.preloading.set(!0);const t=function(e){return pt&&pt.href===e.href?pt.promise:Lt(e)}(e),n=$t={},s=yield t,{redirect:r}=s;if(n===$t)if(r)yield bt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Nt(n,t,Tt(t,e.page))}}))}function Nt(e,t,n){return Xe(this,void 0,void 0,(function*(){kt.page.set(n),kt.preloading.set(!1),yt?yt.$set(t):(t.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},t.level0={props:yield wt},t.notify=kt.page.notify,yt=new Ve({target:Pt,props:t,hydrate:!0})),Et=e,St=JSON.stringify(n.query),_t=!0,At=!1}))}function Lt(e){return Xe(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!wt){const e=()=>({});wt=vt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},xt)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Xe(this,void 0,void 0,(function*(){const d=s[a];if(function(e,t,n,s){if(s!==St)return!0;const r=Et[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:d};const f=c++;let h;if(At||u||!Et[a]||Et[a].part!==t.i){u=!1;const{default:s,preload:r}=yield We[t.i].js();let o;o=_t||!vt.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},xt):{}:vt.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:t.i}}else h=Et[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Ht,Rt,Ot;kt.session.subscribe((e=>Xe(void 0,void 0,void 0,(function*(){if(xt=e,!_t)return;At=!0;const t=at(new URL(location.href)),n=$t={},{redirect:s,props:r,branch:o}=yield Lt(t);n===$t&&(s?yield bt(s.location,{replaceState:!0}):yield Nt(o,r,Tt(r,t.page)))})))),Ht={target:document.querySelector("#sapper")},Rt=Ht.target,Pt=Rt,Ot=vt.baseUrl,rt=Ot,ot=It,"scrollRestoration"in nt&&(nt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{nt.scrollRestoration="auto"})),addEventListener("load",(()=>{nt.scrollRestoration="manual"})),addEventListener("click",ct),addEventListener("popstate",ut),addEventListener("touchstart",mt),addEventListener("mousemove",gt),vt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=vt;wt||(wt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:wt},level1:{props:{status:o,error:i},component:Me},segments:r},c=it(n);Nt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;nt.replaceState({id:tt},"",t);const n=at(new URL(location.href));if(n)return dt(n,tt,!0,e)}));export{le as A,$ as B,r as C,B as D,u as E,R as F,xe as G,O as H,g as I,bt as J,T as K,w as L,t as M,E as N,re as O,D as P,G as Q,l as R,fe as S,oe as T,V as U,H as V,S as a,x as b,k as c,h as d,m as e,_ as f,f as g,d as h,de as i,v as j,A as k,ee as l,se as m,e as n,te as o,ne as p,j as q,ge as r,i as s,b as t,P as u,y as v,p as w,ie as x,ae as y,ce as z};

import __inject_styles from './inject_styles.5607aec6.js';