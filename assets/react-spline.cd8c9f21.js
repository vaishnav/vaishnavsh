import{_ as Mc,r as ll,a as IS}from"./index.337eaa36.js";var RS=Object.create,rf=Object.defineProperty,NS=Object.getOwnPropertyDescriptor,zS=Object.getOwnPropertyNames,FS=Object.getPrototypeOf,US=Object.prototype.hasOwnProperty,sf=(A,e)=>()=>(e||A((e={exports:{}}).exports,e),e.exports),kS=(A,e)=>{for(var t in e)rf(A,t,{get:e[t],enumerable:!0})},GS=(A,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of zS(e))!US.call(A,r)&&r!==t&&rf(A,r,{get:()=>e[r],enumerable:!(i=NS(e,r))||i.enumerable});return A},Ec=(A,e,t)=>(t=A!=null?RS(FS(A)):{},GS(e||!A||!A.__esModule?rf(t,"default",{value:A,enumerable:!0}):t,A)),jS=sf((A,e)=>{(function(t,i){typeof A=="object"?e.exports=i():typeof define=="function"&&define.amd?define(i):t.Alea=i()})(A,function(){return t.importState=function(r){var s=new t;return s.importState(r),s},t;function t(){return function(r){var s=0,a=0,n=0,o=1;r.length==0&&(r=[+new Date]);var l=i();s=l(" "),a=l(" "),n=l(" ");for(var u=0;u<r.length;u++)s-=l(r[u]),s<0&&(s+=1),a-=l(r[u]),a<0&&(a+=1),n-=l(r[u]),n<0&&(n+=1);l=null;var h=function(){var c=2091639*s+o*23283064365386963e-26;return s=a,a=n,n=c-(o=c|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=r,h.exportState=function(){return[s,a,n,o]},h.importState=function(c){s=+c[0]||0,a=+c[1]||0,n=+c[2]||0,o=+c[3]||0},h}(Array.prototype.slice.call(arguments))}function i(){var r=4022871197,s=function(a){a=a.toString();for(var n=0;n<a.length;n++){r+=a.charCodeAt(n);var o=.02519603282416938*r;r=o>>>0,o-=r,o*=r,r=o>>>0,o-=r,r+=o*4294967296}return(r>>>0)*23283064365386963e-26};return s.version="Mash 0.9",s}})}),Lx=sf((A,e)=>{(function(t,i){typeof A=="object"&&typeof e<"u"?i(A):typeof define=="function"&&define.amd?define(["exports"],i):i((t=typeof globalThis<"u"?globalThis:t||self).SVDJS={})})(A,function(t){t.SVD=function(i,r,s,a,n){if(r=r===void 0||r,s=s===void 0||s,n=1e-64/(a=a||Math.pow(2,-52)),!i)throw new TypeError("Matrix a is not defined");var o,l,u,h,c,d,f,m,p,g,v,x,y=i[0].length,S=i.length;if(S<y)throw new TypeError("Invalid matrix: m < n");for(var w=[],M=[],b=[],E=r==="f"?S:y,C=g=f=0;C<S;C++)M[C]=new Array(E).fill(0);for(C=0;C<y;C++)b[C]=new Array(y).fill(0);var D,P=new Array(y).fill(0);for(C=0;C<S;C++)for(o=0;o<y;o++)M[C][o]=i[C][o];for(C=0;C<y;C++){for(w[C]=f,p=0,u=C+1,o=C;o<S;o++)p+=Math.pow(M[o][C],2);if(p<n)f=0;else for(m=(d=M[C][C])*(f=d<0?Math.sqrt(p):-Math.sqrt(p))-p,M[C][C]=d-f,o=u;o<y;o++){for(p=0,l=C;l<S;l++)p+=M[l][C]*M[l][o];for(d=p/m,l=C;l<S;l++)M[l][o]=M[l][o]+d*M[l][C]}for(P[C]=f,p=0,o=u;o<y;o++)p+=Math.pow(M[C][o],2);if(p<n)f=0;else{for(m=(d=M[C][C+1])*(f=d<0?Math.sqrt(p):-Math.sqrt(p))-p,M[C][C+1]=d-f,o=u;o<y;o++)w[o]=M[C][o]/m;for(o=u;o<S;o++){for(p=0,l=u;l<y;l++)p+=M[o][l]*M[C][l];for(l=u;l<y;l++)M[o][l]=M[o][l]+p*w[l]}}g<(v=Math.abs(P[C])+Math.abs(w[C]))&&(g=v)}if(s)for(C=y-1;0<=C;C--){if(f!==0){for(m=M[C][C+1]*f,o=u;o<y;o++)b[o][C]=M[C][o]/m;for(o=u;o<y;o++){for(p=0,l=u;l<y;l++)p+=M[C][l]*b[l][o];for(l=u;l<y;l++)b[l][o]=b[l][o]+p*b[l][C]}}for(o=u;o<y;o++)b[C][o]=0,b[o][C]=0;b[C][C]=1,f=w[C],u=C}if(r){if(r==="f")for(C=y;C<S;C++){for(o=y;o<S;o++)M[C][o]=0;M[C][C]=1}for(C=y-1;0<=C;C--){for(u=C+1,f=P[C],o=u;o<E;o++)M[C][o]=0;if(f!==0){for(m=M[C][C]*f,o=u;o<E;o++){for(p=0,l=u;l<S;l++)p+=M[l][C]*M[l][o];for(d=p/m,l=C;l<S;l++)M[l][o]=M[l][o]+d*M[l][C]}for(o=C;o<S;o++)M[o][C]=M[o][C]/f}else for(o=C;o<S;o++)M[o][C]=0;M[C][C]=M[C][C]+1}}for(a*=g,l=y-1;0<=l;l--)for(var z=0;z<50;z++){for(D=!1,u=l;0<=u;u--){if(Math.abs(w[u])<=a){D=!0;break}if(Math.abs(P[u-1])<=a)break}if(!D){for(c=0,h=u-(p=1),C=u;C<l+1&&(d=p*w[C],w[C]=c*w[C],!(Math.abs(d)<=a));C++)if(f=P[C],P[C]=Math.sqrt(d*d+f*f),c=f/(m=P[C]),p=-d/m,r)for(o=0;o<S;o++)v=M[o][h],x=M[o][C],M[o][h]=v*c+x*p,M[o][C]=-v*p+x*c}if(x=P[l],u===l){if(x<0&&(P[l]=-x,s))for(o=0;o<y;o++)b[o][l]=-b[o][l];break}for(g=P[u],d=(((v=P[l-1])-x)*(v+x)+((f=w[l-1])-(m=w[l]))*(f+m))/(2*m*v),f=Math.sqrt(d*d+1),d=((g-x)*(g+x)+m*(v/(d<0?d-f:d+f)-m))/g,C=u+(p=c=1);C<l+1;C++){if(f=w[C],v=P[C],m=p*f,f*=c,x=Math.sqrt(d*d+m*m),d=g*(c=d/(w[C-1]=x))+f*(p=m/x),f=-g*p+f*c,m=v*p,v*=c,s)for(o=0;o<y;o++)g=b[o][C-1],x=b[o][C],b[o][C-1]=g*c+x*p,b[o][C]=-g*p+x*c;if(x=Math.sqrt(d*d+m*m),d=(c=d/(P[C-1]=x))*f+(p=m/x)*v,g=-p*f+c*v,r)for(o=0;o<S;o++)v=M[o][C-1],x=M[o][C],M[o][C-1]=v*c+x*p,M[o][C]=-v*p+x*c}w[u]=0,w[l]=d,P[l]=g}for(C=0;C<y;C++)P[C]<a&&(P[C]=0);return{u:M,q:P,v:b}},t.VERSION="1.1.1",Object.defineProperty(t,"__esModule",{value:!0})})}),VS=sf(A=>{(function(){var e=function(){this.init()};e.prototype={init:function(){var h=this||t;return h._counter=1e3,h._html5AudioPool=[],h.html5PoolSize=10,h._codecs={},h._howls=[],h._muted=!1,h._volume=1,h._canPlayEvent="canplaythrough",h._navigator=typeof window<"u"&&window.navigator?window.navigator:null,h.masterGain=null,h.noAudio=!1,h.usingWebAudio=!0,h.autoSuspend=!0,h.ctx=null,h.autoUnlock=!0,h._setup(),h},volume:function(h){var c=this||t;if(h=parseFloat(h),c.ctx||u(),typeof h<"u"&&h>=0&&h<=1){if(c._volume=h,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(h,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var f=c._howls[d]._getSoundIds(),m=0;m<f.length;m++){var p=c._howls[d]._soundById(f[m]);p&&p._node&&(p._node.volume=p._volume*h)}return c}return c._volume},mute:function(h){var c=this||t;c.ctx||u(),c._muted=h,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(h?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var f=c._howls[d]._getSoundIds(),m=0;m<f.length;m++){var p=c._howls[d]._soundById(f[m]);p&&p._node&&(p._node.muted=h?!0:p._muted)}return c},stop:function(){for(var h=this||t,c=0;c<h._howls.length;c++)h._howls[c].stop();return h},unload:function(){for(var h=this||t,c=h._howls.length-1;c>=0;c--)h._howls[c].unload();return h.usingWebAudio&&h.ctx&&typeof h.ctx.close<"u"&&(h.ctx.close(),h.ctx=null,u()),h},codecs:function(h){return(this||t)._codecs[h.replace(/^x-/,"")]},_setup:function(){var h=this||t;if(h.state=h.ctx&&h.ctx.state||"suspended",h._autoSuspend(),!h.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(h._canPlayEvent="canplay")}catch{h.noAudio=!0}else h.noAudio=!0;try{var c=new Audio;c.muted&&(h.noAudio=!0)}catch{}return h.noAudio||h._setupCodecs(),h},_setupCodecs:function(){var h=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return h}if(!c||typeof c.canPlayType!="function")return h;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),f=h._navigator?h._navigator.userAgent:"",m=f.match(/OPR\/([0-6].)/g),p=m&&parseInt(m[0].split("/")[1],10)<33,g=f.indexOf("Safari")!==-1&&f.indexOf("Chrome")===-1,v=f.match(/Version\/(.*?) /),x=g&&v&&parseInt(v[1],10)<15;return h._codecs={mp3:!!(!p&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},h},_unlockAudio:function(){var h=this||t;if(!(h._audioUnlocked||!h.ctx)){h._audioUnlocked=!1,h.autoUnlock=!1,!h._mobileUnloaded&&h.ctx.sampleRate!==44100&&(h._mobileUnloaded=!0,h.unload()),h._scratchBuffer=h.ctx.createBuffer(1,1,22050);var c=function(d){for(;h._html5AudioPool.length<h.html5PoolSize;)try{var f=new Audio;f._unlocked=!0,h._releaseHtml5Audio(f)}catch{h.noAudio=!0;break}for(var m=0;m<h._howls.length;m++)if(!h._howls[m]._webAudio)for(var p=h._howls[m]._getSoundIds(),g=0;g<p.length;g++){var v=h._howls[m]._soundById(p[g]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}h._autoResume();var x=h.ctx.createBufferSource();x.buffer=h._scratchBuffer,x.connect(h.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof h.ctx.resume=="function"&&h.ctx.resume(),x.onended=function(){x.disconnect(0),h._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var y=0;y<h._howls.length;y++)h._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),h}},_obtainHtml5Audio:function(){var h=this||t;if(h._html5AudioPool.length)return h._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(h){var c=this||t;return h._unlocked&&c._html5AudioPool.push(h),c},_autoSuspend:function(){var h=this;if(!(!h.autoSuspend||!h.ctx||typeof h.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<h._howls.length;c++)if(h._howls[c]._webAudio){for(var d=0;d<h._howls[c]._sounds.length;d++)if(!h._howls[c]._sounds[d]._paused)return h}return h._suspendTimer&&clearTimeout(h._suspendTimer),h._suspendTimer=setTimeout(function(){if(h.autoSuspend){h._suspendTimer=null,h.state="suspending";var f=function(){h.state="suspended",h._resumeAfterSuspend&&(delete h._resumeAfterSuspend,h._autoResume())};h.ctx.suspend().then(f,f)}},3e4),h}},_autoResume:function(){var h=this;if(!(!h.ctx||typeof h.ctx.resume>"u"||!t.usingWebAudio))return h.state==="running"&&h.ctx.state!=="interrupted"&&h._suspendTimer?(clearTimeout(h._suspendTimer),h._suspendTimer=null):h.state==="suspended"||h.state==="running"&&h.ctx.state==="interrupted"?(h.ctx.resume().then(function(){h.state="running";for(var c=0;c<h._howls.length;c++)h._howls[c]._emit("resume")}),h._suspendTimer&&(clearTimeout(h._suspendTimer),h._suspendTimer=null)):h.state==="suspending"&&(h._resumeAfterSuspend=!0),h}};var t=new e,i=function(h){var c=this;if(!h.src||h.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(h)};i.prototype={init:function(h){var c=this;return t.ctx||u(),c._autoplay=h.autoplay||!1,c._format=typeof h.format!="string"?h.format:[h.format],c._html5=h.html5||!1,c._muted=h.mute||!1,c._loop=h.loop||!1,c._pool=h.pool||5,c._preload=typeof h.preload=="boolean"||h.preload==="metadata"?h.preload:!0,c._rate=h.rate||1,c._sprite=h.sprite||{},c._src=typeof h.src!="string"?h.src:[h.src],c._volume=h.volume!==void 0?h.volume:1,c._xhr={method:h.xhr&&h.xhr.method?h.xhr.method:"GET",headers:h.xhr&&h.xhr.headers?h.xhr.headers:null,withCredentials:h.xhr&&h.xhr.withCredentials?h.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=h.onend?[{fn:h.onend}]:[],c._onfade=h.onfade?[{fn:h.onfade}]:[],c._onload=h.onload?[{fn:h.onload}]:[],c._onloaderror=h.onloaderror?[{fn:h.onloaderror}]:[],c._onplayerror=h.onplayerror?[{fn:h.onplayerror}]:[],c._onpause=h.onpause?[{fn:h.onpause}]:[],c._onplay=h.onplay?[{fn:h.onplay}]:[],c._onstop=h.onstop?[{fn:h.onstop}]:[],c._onmute=h.onmute?[{fn:h.onmute}]:[],c._onvolume=h.onvolume?[{fn:h.onvolume}]:[],c._onrate=h.onrate?[{fn:h.onrate}]:[],c._onseek=h.onseek?[{fn:h.onseek}]:[],c._onunlock=h.onunlock?[{fn:h.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var h=this,c=null;if(t.noAudio){h._emit("loaderror",null,"No audio support.");return}typeof h._src=="string"&&(h._src=[h._src]);for(var d=0;d<h._src.length;d++){var f,m;if(h._format&&h._format[d])f=h._format[d];else{if(m=h._src[d],typeof m!="string"){h._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}f=/^data:audio\/([^;,]+);/i.exec(m),f||(f=/\.([^.]+)$/.exec(m.split("?",1)[0])),f&&(f=f[1].toLowerCase())}if(f||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),f&&t.codecs(f)){c=h._src[d];break}}if(!c){h._emit("loaderror",null,"No codec support for selected audio sources.");return}return h._src=c,h._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(h._html5=!0,h._webAudio=!1),new r(h),h._webAudio&&a(h),h},play:function(h,c){var d=this,f=null;if(typeof h=="number")f=h,h=null;else{if(typeof h=="string"&&d._state==="loaded"&&!d._sprite[h])return null;if(typeof h>"u"&&(h="__default",!d._playLock)){for(var m=0,p=0;p<d._sounds.length;p++)d._sounds[p]._paused&&!d._sounds[p]._ended&&(m++,f=d._sounds[p]._id);m===1?h=null:f=null}}var g=f?d._soundById(f):d._inactiveSound();if(!g)return null;if(f&&!h&&(h=g._sprite||"__default"),d._state!=="loaded"){g._sprite=h,g._ended=!1;var v=g._id;return d._queue.push({event:"play",action:function(){d.play(v)}}),v}if(f&&!g._paused)return c||d._loadQueue("play"),g._id;d._webAudio&&t._autoResume();var x=Math.max(0,g._seek>0?g._seek:d._sprite[h][0]/1e3),y=Math.max(0,(d._sprite[h][0]+d._sprite[h][1])/1e3-x),S=y*1e3/Math.abs(g._rate),w=d._sprite[h][0]/1e3,M=(d._sprite[h][0]+d._sprite[h][1])/1e3;g._sprite=h,g._ended=!1;var b=function(){g._paused=!1,g._seek=x,g._start=w,g._stop=M,g._loop=!!(g._loop||d._sprite[h][2])};if(x>=M){d._ended(g);return}var E=g._node;if(d._webAudio){var C=function(){d._playLock=!1,b(),d._refreshBuffer(g);var O=g._muted||d._muted?0:g._volume;E.gain.setValueAtTime(O,t.ctx.currentTime),g._playStart=t.ctx.currentTime,typeof E.bufferSource.start>"u"?g._loop?E.bufferSource.noteGrainOn(0,x,86400):E.bufferSource.noteGrainOn(0,x,y):g._loop?E.bufferSource.start(0,x,86400):E.bufferSource.start(0,x,y),S!==1/0&&(d._endTimers[g._id]=setTimeout(d._ended.bind(d,g),S)),c||setTimeout(function(){d._emit("play",g._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?C():(d._playLock=!0,d.once("resume",C),d._clearTimer(g._id))}else{var D=function(){E.currentTime=x,E.muted=g._muted||d._muted||t._muted||E.muted,E.volume=g._volume*t.volume(),E.playbackRate=g._rate;try{var O=E.play();if(O&&typeof Promise<"u"&&(O instanceof Promise||typeof O.then=="function")?(d._playLock=!0,b(),O.then(function(){d._playLock=!1,E._unlocked=!0,c?d._loadQueue():d._emit("play",g._id)}).catch(function(){d._playLock=!1,d._emit("playerror",g._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),g._ended=!0,g._paused=!0})):c||(d._playLock=!1,b(),d._emit("play",g._id)),E.playbackRate=g._rate,E.paused){d._emit("playerror",g._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}h!=="__default"||g._loop?d._endTimers[g._id]=setTimeout(d._ended.bind(d,g),S):(d._endTimers[g._id]=function(){d._ended(g),E.removeEventListener("ended",d._endTimers[g._id],!1)},E.addEventListener("ended",d._endTimers[g._id],!1))}catch(G){d._emit("playerror",g._id,G)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=d._src,E.load());var P=window&&window.ejecta||!E.readyState&&t._navigator.isCocoonJS;if(E.readyState>=3||P)D();else{d._playLock=!0,d._state="loading";var z=function(){d._state="loaded",D(),E.removeEventListener(t._canPlayEvent,z,!1)};E.addEventListener(t._canPlayEvent,z,!1),d._clearTimer(g._id)}}return g._id},pause:function(h){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(h)}}),c;for(var d=c._getSoundIds(h),f=0;f<d.length;f++){c._clearTimer(d[f]);var m=c._soundById(d[f]);if(m&&!m._paused&&(m._seek=c.seek(d[f]),m._rateSeek=0,m._paused=!0,c._stopFade(d[f]),m._node))if(c._webAudio){if(!m._node.bufferSource)continue;typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),c._cleanBuffer(m._node)}else(!isNaN(m._node.duration)||m._node.duration===1/0)&&m._node.pause();arguments[1]||c._emit("pause",m?m._id:null)}return c},stop:function(h,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(h)}}),d;for(var f=d._getSoundIds(h),m=0;m<f.length;m++){d._clearTimer(f[m]);var p=d._soundById(f[m]);p&&(p._seek=p._start||0,p._rateSeek=0,p._paused=!0,p._ended=!0,d._stopFade(f[m]),p._node&&(d._webAudio?p._node.bufferSource&&(typeof p._node.bufferSource.stop>"u"?p._node.bufferSource.noteOff(0):p._node.bufferSource.stop(0),d._cleanBuffer(p._node)):(!isNaN(p._node.duration)||p._node.duration===1/0)&&(p._node.currentTime=p._start||0,p._node.pause(),p._node.duration===1/0&&d._clearSound(p._node))),c||d._emit("stop",p._id))}return d},mute:function(h,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(h,c)}}),d;if(typeof c>"u")if(typeof h=="boolean")d._muted=h;else return d._muted;for(var f=d._getSoundIds(c),m=0;m<f.length;m++){var p=d._soundById(f[m]);p&&(p._muted=h,p._interval&&d._stopFade(p._id),d._webAudio&&p._node?p._node.gain.setValueAtTime(h?0:p._volume,t.ctx.currentTime):p._node&&(p._node.muted=t._muted?!0:h),d._emit("mute",p._id))}return d},volume:function(){var h=this,c=arguments,d,f;if(c.length===0)return h._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var m=h._getSoundIds(),p=m.indexOf(c[0]);p>=0?f=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),f=parseInt(c[1],10));var g;if(typeof d<"u"&&d>=0&&d<=1){if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"volume",action:function(){h.volume.apply(h,c)}}),h;typeof f>"u"&&(h._volume=d),f=h._getSoundIds(f);for(var v=0;v<f.length;v++)g=h._soundById(f[v]),g&&(g._volume=d,c[2]||h._stopFade(f[v]),h._webAudio&&g._node&&!g._muted?g._node.gain.setValueAtTime(d,t.ctx.currentTime):g._node&&!g._muted&&(g._node.volume=d*t.volume()),h._emit("volume",g._id))}else return g=f?h._soundById(f):h._sounds[0],g?g._volume:0;return h},fade:function(h,c,d,f){var m=this;if(m._state!=="loaded"||m._playLock)return m._queue.push({event:"fade",action:function(){m.fade(h,c,d,f)}}),m;h=Math.min(Math.max(0,parseFloat(h)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),m.volume(h,f);for(var p=m._getSoundIds(f),g=0;g<p.length;g++){var v=m._soundById(p[g]);if(v){if(f||m._stopFade(p[g]),m._webAudio&&!v._muted){var x=t.ctx.currentTime,y=x+d/1e3;v._volume=h,v._node.gain.setValueAtTime(h,x),v._node.gain.linearRampToValueAtTime(c,y)}m._startFadeInterval(v,h,c,d,p[g],typeof f>"u")}}return m},_startFadeInterval:function(h,c,d,f,m,p){var g=this,v=c,x=d-c,y=Math.abs(x/.01),S=Math.max(4,y>0?f/y:f),w=Date.now();h._fadeTo=d,h._interval=setInterval(function(){var M=(Date.now()-w)/f;w=Date.now(),v+=x*M,v=Math.round(v*100)/100,x<0?v=Math.max(d,v):v=Math.min(d,v),g._webAudio?h._volume=v:g.volume(v,h._id,!0),p&&(g._volume=v),(d<c&&v<=d||d>c&&v>=d)&&(clearInterval(h._interval),h._interval=null,h._fadeTo=null,g.volume(d,h._id),g._emit("fade",h._id))},S)},_stopFade:function(h){var c=this,d=c._soundById(h);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,h),d._fadeTo=null,c._emit("fade",h)),c},loop:function(){var h=this,c=arguments,d,f,m;if(c.length===0)return h._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],h._loop=d;else return m=h._soundById(parseInt(c[0],10)),m?m._loop:!1;else c.length===2&&(d=c[0],f=parseInt(c[1],10));for(var p=h._getSoundIds(f),g=0;g<p.length;g++)m=h._soundById(p[g]),m&&(m._loop=d,h._webAudio&&m._node&&m._node.bufferSource&&(m._node.bufferSource.loop=d,d&&(m._node.bufferSource.loopStart=m._start||0,m._node.bufferSource.loopEnd=m._stop,h.playing(p[g])&&(h.pause(p[g],!0),h.play(p[g],!0)))));return h},rate:function(){var h=this,c=arguments,d,f;if(c.length===0)f=h._sounds[0]._id;else if(c.length===1){var m=h._getSoundIds(),p=m.indexOf(c[0]);p>=0?f=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),f=parseInt(c[1],10));var g;if(typeof d=="number"){if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"rate",action:function(){h.rate.apply(h,c)}}),h;typeof f>"u"&&(h._rate=d),f=h._getSoundIds(f);for(var v=0;v<f.length;v++)if(g=h._soundById(f[v]),g){h.playing(f[v])&&(g._rateSeek=h.seek(f[v]),g._playStart=h._webAudio?t.ctx.currentTime:g._playStart),g._rate=d,h._webAudio&&g._node&&g._node.bufferSource?g._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):g._node&&(g._node.playbackRate=d);var x=h.seek(f[v]),y=(h._sprite[g._sprite][0]+h._sprite[g._sprite][1])/1e3-x,S=y*1e3/Math.abs(g._rate);(h._endTimers[f[v]]||!g._paused)&&(h._clearTimer(f[v]),h._endTimers[f[v]]=setTimeout(h._ended.bind(h,g),S)),h._emit("rate",g._id)}}else return g=h._soundById(f),g?g._rate:h._rate;return h},seek:function(){var h=this,c=arguments,d,f;if(c.length===0)h._sounds.length&&(f=h._sounds[0]._id);else if(c.length===1){var m=h._getSoundIds(),p=m.indexOf(c[0]);p>=0?f=parseInt(c[0],10):h._sounds.length&&(f=h._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),f=parseInt(c[1],10));if(typeof f>"u")return 0;if(typeof d=="number"&&(h._state!=="loaded"||h._playLock))return h._queue.push({event:"seek",action:function(){h.seek.apply(h,c)}}),h;var g=h._soundById(f);if(g)if(typeof d=="number"&&d>=0){var v=h.playing(f);v&&h.pause(f,!0),g._seek=d,g._ended=!1,h._clearTimer(f),!h._webAudio&&g._node&&!isNaN(g._node.duration)&&(g._node.currentTime=d);var x=function(){v&&h.play(f,!0),h._emit("seek",f)};if(v&&!h._webAudio){var y=function(){h._playLock?setTimeout(y,0):x()};setTimeout(y,0)}else x()}else if(h._webAudio){var S=h.playing(f)?t.ctx.currentTime-g._playStart:0,w=g._rateSeek?g._rateSeek-g._seek:0;return g._seek+(w+S*Math.abs(g._rate))}else return g._node.currentTime;return h},playing:function(h){var c=this;if(typeof h=="number"){var d=c._soundById(h);return d?!d._paused:!1}for(var f=0;f<c._sounds.length;f++)if(!c._sounds[f]._paused)return!0;return!1},duration:function(h){var c=this,d=c._duration,f=c._soundById(h);return f&&(d=c._sprite[f._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var h=this,c=h._sounds,d=0;d<c.length;d++)c[d]._paused||h.stop(c[d]._id),h._webAudio||(h._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,h._clearTimer(c[d]._id);var f=t._howls.indexOf(h);f>=0&&t._howls.splice(f,1);var m=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===h._src||h._src.indexOf(t._howls[d]._src)>=0){m=!1;break}return s&&m&&delete s[h._src],t.noAudio=!1,h._state="unloaded",h._sounds=[],h=null,null},on:function(h,c,d,f){var m=this,p=m["_on"+h];return typeof c=="function"&&p.push(f?{id:d,fn:c,once:f}:{id:d,fn:c}),m},off:function(h,c,d){var f=this,m=f["_on"+h],p=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(p=0;p<m.length;p++){var g=d===m[p].id;if(c===m[p].fn&&g||!c&&g){m.splice(p,1);break}}else if(h)f["_on"+h]=[];else{var v=Object.keys(f);for(p=0;p<v.length;p++)v[p].indexOf("_on")===0&&Array.isArray(f[v[p]])&&(f[v[p]]=[])}return f},once:function(h,c,d){var f=this;return f.on(h,c,d,1),f},_emit:function(h,c,d){for(var f=this,m=f["_on"+h],p=m.length-1;p>=0;p--)(!m[p].id||m[p].id===c||h==="load")&&(setTimeout(function(g){g.call(this,c,d)}.bind(f,m[p].fn),0),m[p].once&&f.off(h,m[p].fn,m[p].id));return f._loadQueue(h),f},_loadQueue:function(h){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===h&&(c._queue.shift(),c._loadQueue()),h||d.action()}return c},_ended:function(h){var c=this,d=h._sprite;if(!c._webAudio&&h._node&&!h._node.paused&&!h._node.ended&&h._node.currentTime<h._stop)return setTimeout(c._ended.bind(c,h),100),c;var f=!!(h._loop||c._sprite[d][2]);if(c._emit("end",h._id),!c._webAudio&&f&&c.stop(h._id,!0).play(h._id),c._webAudio&&f){c._emit("play",h._id),h._seek=h._start||0,h._rateSeek=0,h._playStart=t.ctx.currentTime;var m=(h._stop-h._start)*1e3/Math.abs(h._rate);c._endTimers[h._id]=setTimeout(c._ended.bind(c,h),m)}return c._webAudio&&!f&&(h._paused=!0,h._ended=!0,h._seek=h._start||0,h._rateSeek=0,c._clearTimer(h._id),c._cleanBuffer(h._node),t._autoSuspend()),!c._webAudio&&!f&&c.stop(h._id,!0),c},_clearTimer:function(h){var c=this;if(c._endTimers[h]){if(typeof c._endTimers[h]!="function")clearTimeout(c._endTimers[h]);else{var d=c._soundById(h);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[h],!1)}delete c._endTimers[h]}return c},_soundById:function(h){for(var c=this,d=0;d<c._sounds.length;d++)if(h===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var h=this;h._drain();for(var c=0;c<h._sounds.length;c++)if(h._sounds[c]._ended)return h._sounds[c].reset();return new r(h)},_drain:function(){var h=this,c=h._pool,d=0,f=0;if(!(h._sounds.length<c)){for(f=0;f<h._sounds.length;f++)h._sounds[f]._ended&&d++;for(f=h._sounds.length-1;f>=0;f--){if(d<=c)return;h._sounds[f]._ended&&(h._webAudio&&h._sounds[f]._node&&h._sounds[f]._node.disconnect(0),h._sounds.splice(f,1),d--)}}},_getSoundIds:function(h){var c=this;if(typeof h>"u"){for(var d=[],f=0;f<c._sounds.length;f++)d.push(c._sounds[f]._id);return d}else return[h]},_refreshBuffer:function(h){var c=this;return h._node.bufferSource=t.ctx.createBufferSource(),h._node.bufferSource.buffer=s[c._src],h._panner?h._node.bufferSource.connect(h._panner):h._node.bufferSource.connect(h._node),h._node.bufferSource.loop=h._loop,h._loop&&(h._node.bufferSource.loopStart=h._start||0,h._node.bufferSource.loopEnd=h._stop||0),h._node.bufferSource.playbackRate.setValueAtTime(h._rate,t.ctx.currentTime),c},_cleanBuffer:function(h){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(t._scratchBuffer&&h.bufferSource&&(h.bufferSource.onended=null,h.bufferSource.disconnect(0),d))try{h.bufferSource.buffer=t._scratchBuffer}catch{}return h.bufferSource=null,c},_clearSound:function(h){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(h.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(h){this._parent=h,this.init()};r.prototype={init:function(){var h=this,c=h._parent;return h._muted=c._muted,h._loop=c._loop,h._volume=c._volume,h._rate=c._rate,h._seek=0,h._paused=!0,h._ended=!0,h._sprite="__default",h._id=++t._counter,c._sounds.push(h),h.create(),h},create:function(){var h=this,c=h._parent,d=t._muted||h._muted||h._parent._muted?0:h._volume;return c._webAudio?(h._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),h._node.gain.setValueAtTime(d,t.ctx.currentTime),h._node.paused=!0,h._node.connect(t.masterGain)):t.noAudio||(h._node=t._obtainHtml5Audio(),h._errorFn=h._errorListener.bind(h),h._node.addEventListener("error",h._errorFn,!1),h._loadFn=h._loadListener.bind(h),h._node.addEventListener(t._canPlayEvent,h._loadFn,!1),h._endFn=h._endListener.bind(h),h._node.addEventListener("ended",h._endFn,!1),h._node.src=c._src,h._node.preload=c._preload===!0?"auto":c._preload,h._node.volume=d*t.volume(),h._node.load()),h},reset:function(){var h=this,c=h._parent;return h._muted=c._muted,h._loop=c._loop,h._volume=c._volume,h._rate=c._rate,h._seek=0,h._rateSeek=0,h._paused=!0,h._ended=!0,h._sprite="__default",h._id=++t._counter,h},_errorListener:function(){var h=this;h._parent._emit("loaderror",h._id,h._node.error?h._node.error.code:0),h._node.removeEventListener("error",h._errorFn,!1)},_loadListener:function(){var h=this,c=h._parent;c._duration=Math.ceil(h._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),h._node.removeEventListener(t._canPlayEvent,h._loadFn,!1)},_endListener:function(){var h=this,c=h._parent;c._duration===1/0&&(c._duration=Math.ceil(h._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(h)),h._node.removeEventListener("ended",h._endFn,!1)}};var s={},a=function(h){var c=h._src;if(s[c]){h._duration=s[c].duration,l(h);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),f=new Uint8Array(d.length),m=0;m<d.length;++m)f[m]=d.charCodeAt(m);o(f.buffer,h)}else{var p=new XMLHttpRequest;p.open(h._xhr.method,c,!0),p.withCredentials=h._xhr.withCredentials,p.responseType="arraybuffer",h._xhr.headers&&Object.keys(h._xhr.headers).forEach(function(g){p.setRequestHeader(g,h._xhr.headers[g])}),p.onload=function(){var g=(p.status+"")[0];if(g!=="0"&&g!=="2"&&g!=="3"){h._emit("loaderror",null,"Failed loading audio file with status: "+p.status+".");return}o(p.response,h)},p.onerror=function(){h._webAudio&&(h._html5=!0,h._webAudio=!1,h._sounds=[],delete s[c],h.load())},n(p)}},n=function(h){try{h.send()}catch{h.onerror()}},o=function(h,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},f=function(m){m&&c._sounds.length>0?(s[c._src]=m,l(c,m)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(h).then(f).catch(d):t.ctx.decodeAudioData(h,f,d)},l=function(h,c){c&&!h._duration&&(h._duration=c.duration),Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue())},u=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var h=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(h&&d&&d<9){var f=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!f&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};typeof define=="function"&&define.amd&&define([],function(){return{Howler:t,Howl:i}}),typeof A<"u"&&(A.Howler=t,A.Howl=i),typeof global<"u"?(global.HowlerGlobal=e,global.Howler=t,global.Howl=i,global.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=i,window.Sound=r)})(),function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var r=i._howls.length-1;r>=0;r--)i._howls[r].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(i=typeof i!="number"?s._pos[1]:i,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,i,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,i,r,s,a,n){var o=this;if(!o.ctx||!o.ctx.listener)return o;var l=o._orientation;if(i=typeof i!="number"?l[1]:i,r=typeof r!="number"?l[2]:r,s=typeof s!="number"?l[3]:s,a=typeof a!="number"?l[4]:a,n=typeof n!="number"?l[5]:n,typeof t=="number")o._orientation=[t,i,r,s,a,n],typeof o.ctx.listener.forwardX<"u"?(o.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),o.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),o.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),o.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),o.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),o.ctx.listener.upZ.setTargetAtTime(n,Howler.ctx.currentTime,.1)):o.ctx.listener.setOrientation(t,i,r,s,a,n);else return l;return o},Howl.prototype.init=function(t){return function(i){var r=this;return r._orientation=i.orientation||[1,0,0],r._stereo=i.stereo||null,r._pos=i.pos||null,r._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},r._onstereo=i.onstereo?[{fn:i.onstereo}]:[],r._onpos=i.onpos?[{fn:i.onpos}]:[],r._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,i)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var a=r._getSoundIds(i),n=0;n<a.length;n++){var o=r._soundById(a[n]);if(o)if(typeof t=="number")o._stereo=t,o._pos=[t,0,0],o._node&&(o._pannerAttr.panningModel="equalpower",(!o._panner||!o._panner.pan)&&e(o,s),s==="spatial"?typeof o._panner.positionX<"u"?(o._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),o._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),o._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):o._panner.setPosition(t,0,0):o._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",o._id);else return o._stereo}return r},Howl.prototype.pos=function(t,i,r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,i,r,s)}}),a;if(i=typeof i!="number"?0:i,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")a._pos=[t,i,r];else return a._pos;for(var n=a._getSoundIds(s),o=0;o<n.length;o++){var l=a._soundById(n[o]);if(l)if(typeof t=="number")l._pos=[t,i,r],l._node&&((!l._panner||l._panner.pan)&&e(l,"spatial"),typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):l._panner.setPosition(t,i,r)),a._emit("pos",l._id);else return l._pos}return a},Howl.prototype.orientation=function(t,i,r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,i,r,s)}}),a;if(i=typeof i!="number"?a._orientation[1]:i,r=typeof r!="number"?a._orientation[2]:r,typeof s>"u")if(typeof t=="number")a._orientation=[t,i,r];else return a._orientation;for(var n=a._getSoundIds(s),o=0;o<n.length;o++){var l=a._soundById(n[o]);if(l)if(typeof t=="number")l._orientation=[t,i,r],l._node&&(l._panner||(l._pos||(l._pos=a._pos||[0,0,-.5]),e(l,"spatial")),typeof l._panner.orientationX<"u"?(l._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),l._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):l._panner.setOrientation(t,i,r)),a._emit("orientation",l._id);else return l._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,r,s,a;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")r=i[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(i[0],10)),a?a._pannerAttr:t._pannerAttr;else i.length===2&&(r=i[0],s=parseInt(i[1],10));for(var n=t._getSoundIds(s),o=0;o<n.length;o++)if(a=t._soundById(n[o]),a){var l=a._pannerAttr;l={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:l.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:l.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:l.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:l.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:l.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:l.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:l.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:l.panningModel};var u=a._panner;u?(u.coneInnerAngle=l.coneInnerAngle,u.coneOuterAngle=l.coneOuterAngle,u.coneOuterGain=l.coneOuterGain,u.distanceModel=l.distanceModel,u.maxDistance=l.maxDistance,u.refDistance=l.refDistance,u.rolloffFactor=l.rolloffFactor,u.panningModel=l.panningModel):(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"))}return t},Sound.prototype.init=function(t){return function(){var i=this,r=i._parent;i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,t.call(this),i._stereo?r.stereo(i._stereo):i._pos&&r.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var i=this,r=i._parent;return i._orientation=r._orientation,i._stereo=r._stereo,i._pos=r._pos,i._pannerAttr=r._pannerAttr,i._stereo?r.stereo(i._stereo):i._pos?r.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,r._refreshBuffer(i)),t.call(this)}}(Sound.prototype.reset);var e=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}}()}),Jo="142",ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},HS=0,Cm=1,WS=2,af=1,_x=2,uo=3,ps=0,gt=1,Pi=2,YS=1,lt=0,$a=1,Dm=2,Pm=3,Lm=4,XS=5,Na=100,QS=101,qS=102,_m=103,Om=104,ZS=200,KS=201,JS=202,$S=203,Ox=204,Bx=205,AM=206,eM=207,tM=208,iM=209,rM=210,sM=0,aM=1,nM=2,Ud=3,oM=4,lM=5,hM=6,cM=7,Ix=0,uM=1,dM=2,Dr=0,pM=1,fM=2,mM=3,gM=4,vM=5,Rx=300,$s=301,Aa=302,kd=303,Gd=304,$o=306,Io=1e3,Wt=1001,jd=1002,Fe=1003,Bm=1004,Im=1005,ge=1006,yM=1007,Al=1008,yt=1009,xM=1010,wM=1011,Nx=1012,bM=1013,ts=1014,is=1015,Ro=1016,SM=1017,MM=1018,Ws=1020,EM=1021,TM=1022,Ar=1023,CM=1024,DM=1025,Ys=1026,ea=1027,PM=1028,LM=1029,_M=1030,OM=1031,BM=1033,tu=33776,iu=33777,ru=33778,su=33779,Rm=35840,Nm=35841,zm=35842,Fm=35843,IM=36196,Um=37492,km=37496,Gm=37808,jm=37809,Vm=37810,Hm=37811,Wm=37812,Ym=37813,Xm=37814,Qm=37815,qm=37816,Zm=37817,Km=37818,Jm=37819,$m=37820,Ag=37821,eg=36492,nr=3e3,re=3001,Rr=3200,zx=3201,Fx=0,RM=1,Tr="srgb",ks="srgb-linear",au=7680,NM=519,Vd=35044,tg="300 es",Hd=1035,Ft=class{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});let t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){if(this._listeners===void 0)return!1;let t=this._listeners;return t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){if(this._listeners===void 0)return;let t=this._listeners[A];if(t!==void 0){let i=t.indexOf(e);i!==-1&&t.splice(i,1)}}dispatchEvent(A){if(this._listeners===void 0)return;let e=this._listeners[A.type];if(e!==void 0){A.target=this;let t=e.slice(0);for(let i=0,r=t.length;i<r;i++)t[i].call(this,A);A.target=null}}},ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ig=1234567,bo=Math.PI/180,No=180/Math.PI;function sr(){let A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ut[A&255]+ut[A>>8&255]+ut[A>>16&255]+ut[A>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]).toLowerCase()}function $e(A,e,t){return Math.max(e,Math.min(t,A))}function nf(A,e){return(A%e+e)%e}function zM(A,e,t,i,r){return i+(A-e)*(r-i)/(t-e)}function FM(A,e,t){return A!==e?(t-A)/(e-A):0}function So(A,e,t){return(1-t)*A+t*e}function UM(A,e,t,i){return So(A,e,1-Math.exp(-t*i))}function kM(A,e=1){return e-Math.abs(nf(A,e*2)-e)}function GM(A,e,t){return A<=e?0:A>=t?1:(A=(A-e)/(t-e),A*A*(3-2*A))}function jM(A,e,t){return A<=e?0:A>=t?1:(A=(A-e)/(t-e),A*A*A*(A*(A*6-15)+10))}function VM(A,e){return A+Math.floor(Math.random()*(e-A+1))}function HM(A,e){return A+Math.random()*(e-A)}function WM(A){return A*(.5-Math.random())}function YM(A){A!==void 0&&(ig=A);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XM(A){return A*bo}function QM(A){return A*No}function Wd(A){return(A&A-1)===0&&A!==0}function qM(A){return Math.pow(2,Math.ceil(Math.log(A)/Math.LN2))}function Oh(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}function ZM(A,e,t,i,r){let s=Math.cos,a=Math.sin,n=s(t/2),o=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),c=a((e-i)/2),d=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":A.set(n*u,o*h,o*c,n*l);break;case"YZY":A.set(o*c,n*u,o*h,n*l);break;case"ZXZ":A.set(o*h,o*c,n*u,n*l);break;case"XZX":A.set(n*u,o*f,o*d,n*l);break;case"YXY":A.set(o*d,n*u,o*f,n*l);break;case"ZYZ":A.set(o*f,o*d,n*u,n*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function KM(A,e){switch(e.constructor){case Float32Array:return A;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw new Error("Invalid component type.")}}function JM(A,e){switch(e.constructor){case Float32Array:return A;case Uint16Array:return Math.round(A*65535);case Uint8Array:return Math.round(A*255);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw new Error("Invalid component type.")}}var ae=Object.freeze({__proto__:null,DEG2RAD:bo,RAD2DEG:No,generateUUID:sr,clamp:$e,euclideanModulo:nf,mapLinear:zM,inverseLerp:FM,lerp:So,damp:UM,pingpong:kM,smoothstep:GM,smootherstep:jM,randInt:VM,randFloat:HM,randFloatSpread:WM,seededRandom:YM,degToRad:XM,radToDeg:QM,isPowerOfTwo:Wd,ceilPowerOfTwo:qM,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:ZM,normalize:JM,denormalize:KM}),H=class{constructor(A=0,e=0){H.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,e)):(this.x+=A.x,this.y+=A.y,this)}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,e)):(this.x-=A.x,this.y-=A.y,this)}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){let e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e,t){return t!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){let t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(A,e,t,i,r,s,a,n,o){let l=this.elements;return l[0]=A,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=n,l[6]=t,l[7]=s,l[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){let e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){let e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){let t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],n=t[6],o=t[1],l=t[4],u=t[7],h=t[2],c=t[5],d=t[8],f=i[0],m=i[3],p=i[6],g=i[1],v=i[4],x=i[7],y=i[2],S=i[5],w=i[8];return r[0]=s*f+a*g+n*y,r[3]=s*m+a*v+n*S,r[6]=s*p+a*x+n*w,r[1]=o*f+l*g+u*y,r[4]=o*m+l*v+u*S,r[7]=o*p+l*x+u*w,r[2]=h*f+c*g+d*y,r[5]=h*m+c*v+d*S,r[8]=h*p+c*x+d*w,this}multiplyScalar(A){let e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){let A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],n=A[6],o=A[7],l=A[8];return e*s*l-e*a*o-t*r*l+t*a*n+i*r*o-i*s*n}invert(){let A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],n=A[6],o=A[7],l=A[8],u=l*s-a*o,h=a*n-l*r,c=o*r-s*n,d=e*u+t*h+i*c;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/d;return A[0]=u*f,A[1]=(i*o-l*t)*f,A[2]=(a*t-i*s)*f,A[3]=h*f,A[4]=(l*e-i*n)*f,A[5]=(i*r-a*e)*f,A[6]=c*f,A[7]=(t*n-o*e)*f,A[8]=(s*e-t*r)*f,this}transpose(){let A,e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){let e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){let n=Math.cos(r),o=Math.sin(r);return this.set(t*n,t*o,-t*(n*s+o*a)+s+A,-i*o,i*n,-i*(-o*s+n*a)+a+e,0,0,1),this}scale(A,e){let t=this.elements;return t[0]*=A,t[3]*=A,t[6]*=A,t[1]*=e,t[4]*=e,t[7]*=e,this}rotate(A){let e=Math.cos(A),t=Math.sin(A),i=this.elements,r=i[0],s=i[3],a=i[6],n=i[1],o=i[4],l=i[7];return i[0]=e*r+t*n,i[3]=e*s+t*o,i[6]=e*a+t*l,i[1]=-t*r+e*n,i[4]=-t*s+e*o,i[7]=-t*a+e*l,this}translate(A,e){let t=this.elements;return t[0]+=A*t[2],t[3]+=A*t[5],t[6]+=A*t[8],t[1]+=e*t[2],t[4]+=e*t[5],t[7]+=e*t[8],this}equals(A){let e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){let t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}};function Ux(A){for(let e=A.length-1;e>=0;--e)if(A[e]>65535)return!0;return!1}var $M={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function hl(A,e){return new $M[A](e)}function Bh(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}function Xs(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}function xh(A){return A<.0031308?A*12.92:1.055*Math.pow(A,.41666)-.055}var nu={[Tr]:{[ks]:Xs},[ks]:{[Tr]:xh}},xi={legacyMode:!0,get workingColorSpace(){return ks},set workingColorSpace(A){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(A,e,t){if(this.legacyMode||e===t||!e||!t)return A;if(nu[e]&&nu[e][t]!==void 0){let i=nu[e][t];return A.r=i(A.r),A.g=i(A.g),A.b=i(A.b),A}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(A,e){return this.convert(A,this.workingColorSpace,e)},toWorkingColorSpace:function(A,e){return this.convert(A,e,this.workingColorSpace)}},kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={r:0,g:0,b:0},wi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function ou(A,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?A+(e-A)*6*t:t<1/2?e:t<2/3?A+(e-A)*6*(2/3-t):A}function ul(A,e){return e.r=A.r,e.g=A.g,e.b=A.b,e}var GA=class{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&t===void 0?this.set(A):this.setRGB(A,e,t)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=Tr){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,xi.toWorkingColorSpace(this,e),this}setRGB(A,e,t,i=ks){return this.r=A,this.g=e,this.b=t,xi.toWorkingColorSpace(this,i),this}setHSL(A,e,t,i=ks){if(A=nf(A,1),e=$e(e,0,1),t=$e(t,0,1),e===0)this.r=this.g=this.b=t;else{let r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=ou(s,r,A+1/3),this.g=ou(s,r,A),this.b=ou(s,r,A-1/3)}return xi.toWorkingColorSpace(this,i),this}setStyle(A,e=Tr){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,xi.toWorkingColorSpace(this,e),t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,xi.toWorkingColorSpace(this,e),t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let n=parseFloat(r[1])/360,o=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(n,o,l,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,xi.toWorkingColorSpace(this,e),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,xi.toWorkingColorSpace(this,e),this}return A&&A.length>0?this.setColorName(A,e):this}setColorName(A,e=Tr){let t=kx[A.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Xs(A.r),this.g=Xs(A.g),this.b=Xs(A.b),this}copyLinearToSRGB(A){return this.r=xh(A.r),this.g=xh(A.g),this.b=xh(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Tr){return xi.fromWorkingColorSpace(ul(this,Ze),A),$e(Ze.r*255,0,255)<<16^$e(Ze.g*255,0,255)<<8^$e(Ze.b*255,0,255)<<0}getHexString(A=Tr){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=ks){xi.fromWorkingColorSpace(ul(this,Ze),e);let t=Ze.r,i=Ze.g,r=Ze.b,s=Math.max(t,i,r),a=Math.min(t,i,r),n,o,l=(a+s)/2;if(a===s)n=0,o=0;else{let u=s-a;switch(o=l<=.5?u/(s+a):u/(2-s-a),s){case t:n=(i-r)/u+(i<r?6:0);break;case i:n=(r-t)/u+2;break;case r:n=(t-i)/u+4;break}n/=6}return A.h=n,A.s=o,A.l=l,A}getRGB(A,e=ks){return xi.fromWorkingColorSpace(ul(this,Ze),e),A.r=Ze.r,A.g=Ze.g,A.b=Ze.b,A}getStyle(A=Tr){return xi.fromWorkingColorSpace(ul(this,Ze),A),A!==Tr?`color(${A} ${Ze.r} ${Ze.g} ${Ze.b})`:`rgb(${Ze.r*255|0},${Ze.g*255|0},${Ze.b*255|0})`}offsetHSL(A,e,t){return this.getHSL(wi),wi.h+=A,wi.s+=e,wi.l+=t,this.setHSL(wi.h,wi.s,wi.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(wi),A.getHSL(cl);let t=So(wi.h,cl.h,e),i=So(wi.s,cl.s,e),r=So(wi.l,cl.l,e);return this.setHSL(t,i,r),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),A.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};GA.NAMES=kx;var da,Gx=class{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{da===void 0&&(da=Bh("canvas")),da.width=A.width,da.height=A.height;let t=da.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),e=da}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let e=Bh("canvas");e.width=A.width,e.height=A.height;let t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);let i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Xs(r[s]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){let e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(Xs(e[t]/255)*255):e[t]=Xs(e[t]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}},jx=class{constructor(A=null){this.isSource=!0,this.uuid=sr(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){let e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];let t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(lu(i[s].image)):r.push(lu(i[s]))}else r=lu(i);t.url=r}return e||(A.images[this.uuid]=t),t}};function lu(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap?Gx.getDataURL(A):A.data?{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var AE=0,xt=class extends Ft{constructor(A=xt.DEFAULT_IMAGE,e=xt.DEFAULT_MAPPING,t=Wt,i=Wt,r=ge,s=Al,a=Ar,n=yt,o=1,l=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=sr(),this.name="",this.source=new jx(A),this.mipmaps=[],this.mapping=e,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=n,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){let e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];let t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Rx)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Io:A.x=A.x-Math.floor(A.x);break;case Wt:A.x=A.x<0?0:1;break;case jd:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Io:A.y=A.y-Math.floor(A.y);break;case Wt:A.y=A.y<0?0:1;break;case jd:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}};xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Rx;var ee=class{constructor(A=0,e=0,t=0,i=1){ee.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,e)):(this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this)}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,e)):(this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this)}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){let e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);let e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r,s=A.elements,a=s[0],n=s[4],o=s[8],l=s[1],u=s[5],h=s[9],c=s[2],d=s[6],f=s[10];if(Math.abs(n-l)<.01&&Math.abs(o-c)<.01&&Math.abs(h-d)<.01){if(Math.abs(n+l)<.1&&Math.abs(o+c)<.1&&Math.abs(h+d)<.1&&Math.abs(a+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(a+1)/2,g=(u+1)/2,v=(f+1)/2,x=(n+l)/4,y=(o+c)/4,S=(h+d)/4;return p>g&&p>v?p<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(p),i=x/t,r=y/t):g>v?g<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(g),t=x/i,r=S/i):v<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),t=y/r,i=S/r),this.set(t,i,r,e),this}let m=Math.sqrt((d-h)*(d-h)+(o-c)*(o-c)+(l-n)*(l-n));return Math.abs(m)<.001&&(m=1),this.x=(d-h)/m,this.y=(o-c)/m,this.z=(l-n)/m,this.w=Math.acos((a+u+f-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e,t){return t!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},We=class extends Ft{constructor(A,e,t={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new ee(0,0,A,e),this.scissorTest=!1,this.viewport=new ee(0,0,A,e);let i={width:A,height:e,depth:1};this.texture=new xt(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ge,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null,this.samples=t.samples!==void 0?t.samples:0}setSize(A,e,t=1){(this.width!==A||this.height!==e||this.depth!==t)&&(this.width=A,this.height=e,this.depth=t,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},A.texture.image);return this.texture.source=new jx(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vx=class extends xt{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},eE=class extends xt{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ue=class{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerp(A,e,t,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),t.slerpQuaternions(A,e,i)}static slerpFlat(A,e,t,i,r,s,a){let n=t[i+0],o=t[i+1],l=t[i+2],u=t[i+3],h=r[s+0],c=r[s+1],d=r[s+2],f=r[s+3];if(a===0){A[e+0]=n,A[e+1]=o,A[e+2]=l,A[e+3]=u;return}if(a===1){A[e+0]=h,A[e+1]=c,A[e+2]=d,A[e+3]=f;return}if(u!==f||n!==h||o!==c||l!==d){let m=1-a,p=n*h+o*c+l*d+u*f,g=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let y=Math.sqrt(v),S=Math.atan2(y,p*g);m=Math.sin(m*S)/y,a=Math.sin(a*S)/y}let x=a*g;if(n=n*m+h*x,o=o*m+c*x,l=l*m+d*x,u=u*m+f*x,m===1-a){let y=1/Math.sqrt(n*n+o*o+l*l+u*u);n*=y,o*=y,l*=y,u*=y}}A[e]=n,A[e+1]=o,A[e+2]=l,A[e+3]=u}static multiplyQuaternionsFlat(A,e,t,i,r,s){let a=t[i],n=t[i+1],o=t[i+2],l=t[i+3],u=r[s],h=r[s+1],c=r[s+2],d=r[s+3];return A[e]=a*d+l*u+n*c-o*h,A[e+1]=n*d+l*h+o*u-a*c,A[e+2]=o*d+l*c+a*h-n*u,A[e+3]=l*d-a*u-n*h-o*c,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){if(!(A&&A.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,n=Math.sin,o=a(t/2),l=a(i/2),u=a(r/2),h=n(t/2),c=n(i/2),d=n(r/2);switch(s){case"XYZ":this._x=h*l*u+o*c*d,this._y=o*c*u-h*l*d,this._z=o*l*d+h*c*u,this._w=o*l*u-h*c*d;break;case"YXZ":this._x=h*l*u+o*c*d,this._y=o*c*u-h*l*d,this._z=o*l*d-h*c*u,this._w=o*l*u+h*c*d;break;case"ZXY":this._x=h*l*u-o*c*d,this._y=o*c*u+h*l*d,this._z=o*l*d+h*c*u,this._w=o*l*u-h*c*d;break;case"ZYX":this._x=h*l*u-o*c*d,this._y=o*c*u+h*l*d,this._z=o*l*d-h*c*u,this._w=o*l*u+h*c*d;break;case"YZX":this._x=h*l*u+o*c*d,this._y=o*c*u+h*l*d,this._z=o*l*d-h*c*u,this._w=o*l*u-h*c*d;break;case"XZY":this._x=h*l*u-o*c*d,this._y=o*c*u-h*l*d,this._z=o*l*d+h*c*u,this._w=o*l*u+h*c*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,e){let t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){let e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],n=e[9],o=e[2],l=e[6],u=e[10],h=t+a+u;if(h>0){let c=.5/Math.sqrt(h+1);this._w=.25/c,this._x=(l-n)*c,this._y=(r-o)*c,this._z=(s-i)*c}else if(t>a&&t>u){let c=2*Math.sqrt(1+t-a-u);this._w=(l-n)/c,this._x=.25*c,this._y=(i+s)/c,this._z=(r+o)/c}else if(a>u){let c=2*Math.sqrt(1+a-t-u);this._w=(r-o)/c,this._x=(i+s)/c,this._y=.25*c,this._z=(n+l)/c}else{let c=2*Math.sqrt(1+u-t-a);this._w=(s-i)/c,this._x=(r+o)/c,this._y=(n+l)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs($e(this.dot(A),-1,1)))}rotateTowards(A,e){let t=this.angleTo(A);if(t===0)return this;let i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(A,e)):this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){let t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,n=e._y,o=e._z,l=e._w;return this._x=t*l+s*a+i*o-r*n,this._y=i*l+s*n+r*a-t*o,this._z=r*l+s*o+t*n-i*a,this._w=s*l-t*a-i*n-r*o,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);let t=this._x,i=this._y,r=this._z,s=this._w,a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;let n=1-a*a;if(n<=Number.EPSILON){let c=1-e;return this._w=c*s+e*this._w,this._x=c*t+e*this._x,this._y=c*i+e*this._y,this._z=c*r+e*this._z,this.normalize(),this._onChangeCallback(),this}let o=Math.sqrt(n),l=Math.atan2(o,a),u=Math.sin((1-e)*l)/o,h=Math.sin(e*l)/o;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){let A=Math.random(),e=Math.sqrt(1-A),t=Math.sqrt(A),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class{constructor(A=0,e=0,t=0){T.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,e)):(this.x+=A.x,this.y+=A.y,this.z+=A.z,this)}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,e)):(this.x-=A.x,this.y-=A.y,this.z-=A.z,this)}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(A,e)):(this.x*=A.x,this.y*=A.y,this.z*=A.z,this)}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return A&&A.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(rg.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(rg.setFromAxisAngle(A,e))}applyMatrix3(A){let e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){let e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){let e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,n=A.w,o=n*e+s*i-a*t,l=n*t+a*e-r*i,u=n*i+r*t-s*e,h=-r*e-s*t-a*i;return this.x=o*n+h*-r+l*-a-u*-s,this.y=l*n+h*-s+u*-r-o*-a,this.z=u*n+h*-a+o*-s-l*-r,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){let e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(A,e)):this.crossVectors(this,A)}crossVectors(A,e){let t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,n=e.z;return this.x=i*n-r*a,this.y=r*s-t*n,this.z=t*a-i*s,this}projectOnVector(A){let e=A.lengthSq();if(e===0)return this.set(0,0,0);let t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return hu.copy(this).projectOnVector(A),this.sub(hu)}reflect(A){return this.sub(hu.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){let e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;let t=this.dot(A)/e;return Math.acos($e(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){let i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){let e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){let e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e,t){return t!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new T,rg=new ue,qe=class{constructor(A=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let n=0,o=A.length;n<o;n+=3){let l=A[n],u=A[n+1],h=A[n+2];l<e&&(e=l),u<t&&(t=u),h<i&&(i=h),l>r&&(r=l),u>s&&(s=u),h>a&&(a=h)}return this.min.set(e,t,i),this.max.set(r,s,a),this}setFromBufferAttribute(A){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let n=0,o=A.count;n<o;n++){let l=A.getX(n),u=A.getY(n),h=A.getZ(n);l<e&&(e=l),u<t&&(t=u),h<i&&(i=h),l>r&&(r=l),u>s&&(s=u),h>a&&(a=h)}return this.min.set(e,t,i),this.max.set(r,s,a),this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){let t=Ss.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);let t=A.geometry;if(t!==void 0)if(e&&t.attributes!=null&&t.attributes.position!==void 0){let r=t.attributes.position;for(let s=0,a=r.count;s<a;s++)Ss.fromBufferAttribute(r,s).applyMatrix4(A.matrixWorld),this.expandByPoint(Ss)}else t.boundingBox===null&&t.computeBoundingBox(),cu.copy(t.boundingBox),cu.applyMatrix4(A.matrixWorld),this.union(cu);let i=A.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Ss),Ss.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Un),dl.subVectors(this.max,Un),pa.subVectors(A.a,Un),fa.subVectors(A.b,Un),ma.subVectors(A.c,Un),Fr.subVectors(fa,pa),Ur.subVectors(ma,fa),Ms.subVectors(pa,ma);let e=[0,-Fr.z,Fr.y,0,-Ur.z,Ur.y,0,-Ms.z,Ms.y,Fr.z,0,-Fr.x,Ur.z,0,-Ur.x,Ms.z,0,-Ms.x,-Fr.y,Fr.x,0,-Ur.y,Ur.x,0,-Ms.y,Ms.x,0];return!uu(e,pa,fa,ma,dl)||(e=[1,0,0,0,1,0,0,0,1],!uu(e,pa,fa,ma,dl))?!1:(pl.crossVectors(Fr,Ur),e=[pl.x,pl.y,pl.z],uu(e,pa,fa,ma,dl))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return Ss.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(Ss).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(mr),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}},mr=[new T,new T,new T,new T,new T,new T,new T,new T],Ss=new T,cu=new qe,pa=new T,fa=new T,ma=new T,Fr=new T,Ur=new T,Ms=new T,Un=new T,dl=new T,pl=new T,Es=new T;function uu(A,e,t,i,r){for(let s=0,a=A.length-3;s<=a;s+=3){Es.fromArray(A,s);let n=r.x*Math.abs(Es.x)+r.y*Math.abs(Es.y)+r.z*Math.abs(Es.z),o=e.dot(Es),l=t.dot(Es),u=i.dot(Es);if(Math.max(-Math.max(o,l,u),Math.min(o,l,u))>n)return!1}return!0}var tE=new qe,sg=new T,fl=new T,du=new T,gi=class{constructor(A=new T,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){let t=this.center;e!==void 0?t.copy(e):tE.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){let e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){let t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){du.subVectors(A,this.center);let e=du.lengthSq();if(e>this.radius*this.radius){let t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.add(du.multiplyScalar(i/t)),this.radius+=i}return this}union(A){return this.center.equals(A.center)===!0?fl.set(0,0,1).multiplyScalar(A.radius):fl.subVectors(A.center,this.center).normalize().multiplyScalar(A.radius),this.expandByPoint(sg.copy(A.center).add(fl)),this.expandByPoint(sg.copy(A.center).sub(fl)),this}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}},gr=new T,pu=new T,ml=new T,kr=new T,fu=new T,gl=new T,mu=new T,wn=class{constructor(A=new T,e=new T(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,gr)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);let t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(t).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){let e=gr.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(gr.copy(this.direction).multiplyScalar(e).add(this.origin),gr.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){pu.copy(A).add(e).multiplyScalar(.5),ml.copy(e).sub(A).normalize(),kr.copy(this.origin).sub(pu);let r=A.distanceTo(e)*.5,s=-this.direction.dot(ml),a=kr.dot(this.direction),n=-kr.dot(ml),o=kr.lengthSq(),l=Math.abs(1-s*s),u,h,c,d;if(l>0)if(u=s*n-a,h=s*a-n,d=r*l,u>=0)if(h>=-d)if(h<=d){let f=1/l;u*=f,h*=f,c=u*(u+s*h+2*a)+h*(s*u+h+2*n)+o}else h=r,u=Math.max(0,-(s*h+a)),c=-u*u+h*(h+2*n)+o;else h=-r,u=Math.max(0,-(s*h+a)),c=-u*u+h*(h+2*n)+o;else h<=-d?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-n),r),c=-u*u+h*(h+2*n)+o):h<=d?(u=0,h=Math.min(Math.max(-r,-n),r),c=h*(h+2*n)+o):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-n),r),c=-u*u+h*(h+2*n)+o);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),c=-u*u+h*(h+2*n)+o;return t&&t.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ml).multiplyScalar(h).add(pu),c}intersectSphere(A,e){gr.subVectors(A.center,this.origin);let t=gr.dot(this.direction),i=gr.dot(gr)-t*t,r=A.radius*A.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=t-s,n=t+s;return a<0&&n<0?null:a<0?this.at(n,e):this.at(a,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){let e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;let t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){let t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){let e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,n,o=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return o>=0?(t=(A.min.x-h.x)*o,i=(A.max.x-h.x)*o):(t=(A.max.x-h.x)*o,i=(A.min.x-h.x)*o),l>=0?(r=(A.min.y-h.y)*l,s=(A.max.y-h.y)*l):(r=(A.max.y-h.y)*l,s=(A.min.y-h.y)*l),t>s||r>i||((r>t||t!==t)&&(t=r),(s<i||i!==i)&&(i=s),u>=0?(a=(A.min.z-h.z)*u,n=(A.max.z-h.z)*u):(a=(A.max.z-h.z)*u,n=(A.min.z-h.z)*u),t>n||a>i)||((a>t||t!==t)&&(t=a),(n<i||i!==i)&&(i=n),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,gr)!==null}intersectTriangle(A,e,t,i,r){fu.subVectors(e,A),gl.subVectors(t,A),mu.crossVectors(fu,gl);let s=this.direction.dot(mu),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;kr.subVectors(this.origin,A);let n=a*this.direction.dot(gl.crossVectors(kr,gl));if(n<0)return null;let o=a*this.direction.dot(fu.cross(kr));if(o<0||n+o>s)return null;let l=-a*kr.dot(mu);return l<0?null:this.at(l/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},TA=class{constructor(){TA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(A,e,t,i,r,s,a,n,o,l,u,h,c,d,f,m){let p=this.elements;return p[0]=A,p[4]=e,p[8]=t,p[12]=i,p[1]=r,p[5]=s,p[9]=a,p[13]=n,p[2]=o,p[6]=l,p[10]=u,p[14]=h,p[3]=c,p[7]=d,p[11]=f,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new TA().fromArray(this.elements)}copy(A){let e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){let e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){let e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){let e=this.elements,t=A.elements,i=1/ga.setFromMatrixColumn(A,0).length(),r=1/ga.setFromMatrixColumn(A,1).length(),s=1/ga.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){A&&A.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),n=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(A.order==="XYZ"){let h=s*l,c=s*u,d=a*l,f=a*u;e[0]=n*l,e[4]=-n*u,e[8]=o,e[1]=c+d*o,e[5]=h-f*o,e[9]=-a*n,e[2]=f-h*o,e[6]=d+c*o,e[10]=s*n}else if(A.order==="YXZ"){let h=n*l,c=n*u,d=o*l,f=o*u;e[0]=h+f*a,e[4]=d*a-c,e[8]=s*o,e[1]=s*u,e[5]=s*l,e[9]=-a,e[2]=c*a-d,e[6]=f+h*a,e[10]=s*n}else if(A.order==="ZXY"){let h=n*l,c=n*u,d=o*l,f=o*u;e[0]=h-f*a,e[4]=-s*u,e[8]=d+c*a,e[1]=c+d*a,e[5]=s*l,e[9]=f-h*a,e[2]=-s*o,e[6]=a,e[10]=s*n}else if(A.order==="ZYX"){let h=s*l,c=s*u,d=a*l,f=a*u;e[0]=n*l,e[4]=d*o-c,e[8]=h*o+f,e[1]=n*u,e[5]=f*o+h,e[9]=c*o-d,e[2]=-o,e[6]=a*n,e[10]=s*n}else if(A.order==="YZX"){let h=s*n,c=s*o,d=a*n,f=a*o;e[0]=n*l,e[4]=f-h*u,e[8]=d*u+c,e[1]=u,e[5]=s*l,e[9]=-a*l,e[2]=-o*l,e[6]=c*u+d,e[10]=h-f*u}else if(A.order==="XZY"){let h=s*n,c=s*o,d=a*n,f=a*o;e[0]=n*l,e[4]=-u,e[8]=o*l,e[1]=h*u+f,e[5]=s*l,e[9]=c*u-d,e[2]=d*u-c,e[6]=a*l,e[10]=f*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(iE,A,rE)}lookAt(A,e,t){let i=this.elements;return kt.subVectors(A,e),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Gr.crossVectors(t,kt),Gr.lengthSq()===0&&(Math.abs(t.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Gr.crossVectors(t,kt)),Gr.normalize(),vl.crossVectors(kt,Gr),i[0]=Gr.x,i[4]=vl.x,i[8]=kt.x,i[1]=Gr.y,i[5]=vl.y,i[9]=kt.y,i[2]=Gr.z,i[6]=vl.z,i[10]=kt.z,this}multiply(A,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(A,e)):this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){let t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],n=t[8],o=t[12],l=t[1],u=t[5],h=t[9],c=t[13],d=t[2],f=t[6],m=t[10],p=t[14],g=t[3],v=t[7],x=t[11],y=t[15],S=i[0],w=i[4],M=i[8],b=i[12],E=i[1],C=i[5],D=i[9],P=i[13],z=i[2],O=i[6],G=i[10],X=i[14],U=i[3],_=i[7],V=i[11],F=i[15];return r[0]=s*S+a*E+n*z+o*U,r[4]=s*w+a*C+n*O+o*_,r[8]=s*M+a*D+n*G+o*V,r[12]=s*b+a*P+n*X+o*F,r[1]=l*S+u*E+h*z+c*U,r[5]=l*w+u*C+h*O+c*_,r[9]=l*M+u*D+h*G+c*V,r[13]=l*b+u*P+h*X+c*F,r[2]=d*S+f*E+m*z+p*U,r[6]=d*w+f*C+m*O+p*_,r[10]=d*M+f*D+m*G+p*V,r[14]=d*b+f*P+m*X+p*F,r[3]=g*S+v*E+x*z+y*U,r[7]=g*w+v*C+x*O+y*_,r[11]=g*M+v*D+x*G+y*V,r[15]=g*b+v*P+x*X+y*F,this}multiplyScalar(A){let e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){let A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],n=A[9],o=A[13],l=A[2],u=A[6],h=A[10],c=A[14],d=A[3],f=A[7],m=A[11],p=A[15];return d*(+r*n*u-i*o*u-r*a*h+t*o*h+i*a*c-t*n*c)+f*(+e*n*c-e*o*h+r*s*h-i*s*c+i*o*l-r*n*l)+m*(+e*o*u-e*a*c-r*s*u+t*s*c+r*a*l-t*o*l)+p*(-i*a*l-e*n*u+e*a*h+i*s*u-t*s*h+t*n*l)}transpose(){let A=this.elements,e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){let i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){let A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],n=A[6],o=A[7],l=A[8],u=A[9],h=A[10],c=A[11],d=A[12],f=A[13],m=A[14],p=A[15],g=u*m*o-f*h*o+f*n*c-a*m*c-u*n*p+a*h*p,v=d*h*o-l*m*o-d*n*c+s*m*c+l*n*p-s*h*p,x=l*f*o-d*u*o+d*a*c-s*f*c-l*a*p+s*u*p,y=d*u*n-l*f*n-d*a*h+s*f*h+l*a*m-s*u*m,S=e*g+t*v+i*x+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return A[0]=g*w,A[1]=(f*h*r-u*m*r-f*i*c+t*m*c+u*i*p-t*h*p)*w,A[2]=(a*m*r-f*n*r+f*i*o-t*m*o-a*i*p+t*n*p)*w,A[3]=(u*n*r-a*h*r-u*i*o+t*h*o+a*i*c-t*n*c)*w,A[4]=v*w,A[5]=(l*m*r-d*h*r+d*i*c-e*m*c-l*i*p+e*h*p)*w,A[6]=(d*n*r-s*m*r-d*i*o+e*m*o+s*i*p-e*n*p)*w,A[7]=(s*h*r-l*n*r+l*i*o-e*h*o-s*i*c+e*n*c)*w,A[8]=x*w,A[9]=(d*u*r-l*f*r-d*t*c+e*f*c+l*t*p-e*u*p)*w,A[10]=(s*f*r-d*a*r+d*t*o-e*f*o-s*t*p+e*a*p)*w,A[11]=(l*a*r-s*u*r-l*t*o+e*u*o+s*t*c-e*a*c)*w,A[12]=y*w,A[13]=(l*f*i-d*u*i+d*t*h-e*f*h-l*t*m+e*u*m)*w,A[14]=(d*a*i-s*f*i-d*t*n+e*f*n+s*t*m-e*a*m)*w,A[15]=(s*u*i-l*a*i+l*t*n-e*u*n-s*t*h+e*a*h)*w,this}scale(A){let e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(A,e,t){return this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){let e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){let e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){let e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){let t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,n=A.z,o=r*s,l=r*a;return this.set(o*s+t,o*a-i*n,o*n+i*a,0,o*a+i*n,l*a+t,l*n-i*s,0,o*n-i*a,l*n+i*s,r*n*n+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){let i=this.elements,r=e._x,s=e._y,a=e._z,n=e._w,o=r+r,l=s+s,u=a+a,h=r*o,c=r*l,d=r*u,f=s*l,m=s*u,p=a*u,g=n*o,v=n*l,x=n*u,y=t.x,S=t.y,w=t.z;return i[0]=(1-(f+p))*y,i[1]=(c+x)*y,i[2]=(d-v)*y,i[3]=0,i[4]=(c-x)*S,i[5]=(1-(h+p))*S,i[6]=(m+g)*S,i[7]=0,i[8]=(d+v)*w,i[9]=(m-g)*w,i[10]=(1-(h+f))*w,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){let i=this.elements,r=ga.set(i[0],i[1],i[2]).length(),s=ga.set(i[4],i[5],i[6]).length(),a=ga.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],bi.copy(this);let n=1/r,o=1/s,l=1/a;return bi.elements[0]*=n,bi.elements[1]*=n,bi.elements[2]*=n,bi.elements[4]*=o,bi.elements[5]*=o,bi.elements[6]*=o,bi.elements[8]*=l,bi.elements[9]*=l,bi.elements[10]*=l,e.setFromRotationMatrix(bi),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,n=2*r/(e-A),o=2*r/(t-i),l=(e+A)/(e-A),u=(t+i)/(t-i),h=-(s+r)/(s-r),c=-2*s*r/(s-r);return a[0]=n,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=o,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=c,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(A,e,t,i,r,s){let a=this.elements,n=1/(e-A),o=1/(t-i),l=1/(s-r),u=(e+A)*n,h=(t+i)*o,c=(s+r)*l;return a[0]=2*n,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*o,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*l,a[14]=-c,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(A){let e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){let t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}},ga=new T,bi=new TA,iE=new T(0,0,0),rE=new T(1,1,1),Gr=new T,vl=new T,kt=new T,ag=new TA,ng=new ue,mt=class{constructor(A=0,e=0,t=0,i=mt.DefaultOrder){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){let i=A.elements,r=i[0],s=i[4],a=i[8],n=i[1],o=i[5],l=i[9],u=i[2],h=i[6],c=i[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,c),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(n,o)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,c),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(n,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,c),this._z=Math.atan2(n,r)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin($e(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-l,o),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return ag.makeRotationFromQuaternion(A),this.setFromRotationMatrix(ag,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return ng.setFromEuler(this),this.setFromQuaternion(ng,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};mt.DefaultOrder="XYZ";mt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var of=class{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}},sE=0,og=new T,va=new ue,vr=new TA,yl=new T,kn=new T,aE=new T,nE=new ue,lg=new T(1,0,0),hg=new T(0,1,0),cg=new T(0,0,1),oE={type:"added"},ug={type:"removed"},Ce=class extends Ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DefaultUp.clone();let A=new T,e=new mt,t=new ue,i=new T(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new TA},normalMatrix:{value:new Dt}}),this.matrix=new TA,this.matrixWorld=new TA,this.matrixAutoUpdate=Ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return va.setFromAxisAngle(A,e),this.quaternion.multiply(va),this}rotateOnWorldAxis(A,e){return va.setFromAxisAngle(A,e),this.quaternion.premultiply(va),this}rotateX(A){return this.rotateOnAxis(lg,A)}rotateY(A){return this.rotateOnAxis(hg,A)}rotateZ(A){return this.rotateOnAxis(cg,A)}translateOnAxis(A,e){return og.copy(A).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(lg,A)}translateY(A){return this.translateOnAxis(hg,A)}translateZ(A){return this.translateOnAxis(cg,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?yl.copy(A):yl.set(A,e,t);let i=this.parent;this.updateWorldMatrix(!0,!1),kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(kn,yl,this.up):vr.lookAt(yl,kn,this.up),this.quaternion.setFromRotationMatrix(vr),i&&(vr.extractRotation(i.matrixWorld),va.setFromRotationMatrix(vr),this.quaternion.premultiply(va.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(oE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(ug)),this}removeFromParent(){let A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){let e=this.children[A];e.parent=null,e.dispatchEvent(ug)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),vr.multiply(A.parent.matrixWorld)),A.applyMatrix4(vr),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){let r=this.children[t].getObjectByProperty(A,e);if(r!==void 0)return r}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,A,aE),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,nE,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){let e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(A)}updateWorldMatrix(A,e){let t=this.parent;if(A===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(A){let e=A===void 0||typeof A=="string",t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,n){return a[n.uuid]===void 0&&(a[n.uuid]=n.toJSON(A)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let n=a.shapes;if(Array.isArray(n))for(let o=0,l=n.length;o<l;o++){let u=n[o];r(A.shapes,u)}else r(A.shapes,n)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let n=0,o=this.material.length;n<o;n++)a.push(r(A.materials,this.material[n]));i.material=a}else i.material=r(A.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let n=this.animations[a];i.animations.push(r(A.animations,n))}}if(e){let a=s(A.geometries),n=s(A.materials),o=s(A.textures),l=s(A.images),u=s(A.shapes),h=s(A.skeletons),c=s(A.animations),d=s(A.nodes);a.length>0&&(t.geometries=a),n.length>0&&(t.materials=n),o.length>0&&(t.textures=o),l.length>0&&(t.images=l),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),c.length>0&&(t.animations=c),d.length>0&&(t.nodes=d)}return t.object=i,t;function s(a){let n=[];for(let o in a){let l=a[o];delete l.metadata,n.push(l)}return n}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let t=0;t<A.children.length;t++){let i=A.children[t];this.add(i.clone())}return this}};Ce.DefaultUp=new T(0,1,0);Ce.DefaultMatrixAutoUpdate=!0;var Si=new T,yr=new T,gu=new T,xr=new T,ya=new T,xa=new T,dg=new T,vu=new T,yu=new T,xu=new T,Ot=class{constructor(A=new T,e=new T,t=new T){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),Si.subVectors(A,e),i.cross(Si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){Si.subVectors(i,e),yr.subVectors(t,e),gu.subVectors(A,e);let s=Si.dot(Si),a=Si.dot(yr),n=Si.dot(gu),o=yr.dot(yr),l=yr.dot(gu),u=s*o-a*a;if(u===0)return r.set(-2,-1,-1);let h=1/u,c=(o*n-a*l)*h,d=(s*l-a*n)*h;return r.set(1-c-d,d,c)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,xr),xr.x>=0&&xr.y>=0&&xr.x+xr.y<=1}static getUV(A,e,t,i,r,s,a,n){return this.getBarycoord(A,e,t,i,xr),n.set(0,0),n.addScaledVector(r,xr.x),n.addScaledVector(s,xr.y),n.addScaledVector(a,xr.z),n}static isFrontFacing(A,e,t,i){return Si.subVectors(t,e),yr.subVectors(A,e),Si.cross(yr).dot(i)<0}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Si.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Si.cross(yr).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Ot.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return Ot.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,t,i,r){return Ot.getUV(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return Ot.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Ot.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){let t=this.a,i=this.b,r=this.c,s,a;ya.subVectors(i,t),xa.subVectors(r,t),vu.subVectors(A,t);let n=ya.dot(vu),o=xa.dot(vu);if(n<=0&&o<=0)return e.copy(t);yu.subVectors(A,i);let l=ya.dot(yu),u=xa.dot(yu);if(l>=0&&u<=l)return e.copy(i);let h=n*u-l*o;if(h<=0&&n>=0&&l<=0)return s=n/(n-l),e.copy(t).addScaledVector(ya,s);xu.subVectors(A,r);let c=ya.dot(xu),d=xa.dot(xu);if(d>=0&&c<=d)return e.copy(r);let f=c*o-n*d;if(f<=0&&o>=0&&d<=0)return a=o/(o-d),e.copy(t).addScaledVector(xa,a);let m=l*d-c*u;if(m<=0&&u-l>=0&&c-d>=0)return dg.subVectors(r,i),a=(u-l)/(u-l+(c-d)),e.copy(i).addScaledVector(dg,a);let p=1/(m+f+h);return s=f*p,a=h*p,e.copy(t).addScaledVector(ya,s).addScaledVector(xa,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}},lE=0,bn=class extends Ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=$a,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ox,this.blendDst=Bx,this.blendEquation=Na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ud,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=NM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=au,this.stencilZFail=au,this.stencilZPass=au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(let e in A){let t=A[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===YS;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){let e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==$a&&(t.blending=this.blending),this.side!==ps&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){let s=[];for(let a in r){let n=r[a];delete n.metadata,s.push(n)}return s}if(e){let r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;let e=A.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}},Tc=class extends bn{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new GA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}},Xe=new T,xl=new H,JA=class{constructor(A,e,t){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t===!0,this.usage=Vd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}copyColorsArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new GA),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this}copyVector2sArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new H),e[t++]=s.x,e[t++]=s.y}return this}copyVector3sArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new T),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this}copyVector4sArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new ee),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)xl.fromBufferAttribute(this,e),xl.applyMatrix3(A),this.setXY(e,xl.x,xl.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(A),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(A),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(A),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(A),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(A,e=0){return this.array.set(A,e),this}getX(A){return this.array[A*this.itemSize]}setX(A,e){return this.array[A*this.itemSize]=e,this}getY(A){return this.array[A*this.itemSize+1]}setY(A,e){return this.array[A*this.itemSize+1]=e,this}getZ(A){return this.array[A*this.itemSize+2]}setZ(A,e){return this.array[A*this.itemSize+2]=e,this}getW(A){return this.array[A*this.itemSize+3]}setW(A,e){return this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Vd&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}},Hx=class extends JA{constructor(A,e,t){super(new Uint16Array(A),e,t)}},Mo=class extends JA{constructor(A,e,t){super(new Uint32Array(A),e,t)}},hE=class extends JA{constructor(A,e,t){super(new Uint16Array(A),e,t),this.isFloat16BufferAttribute=!0}},LA=class extends JA{constructor(A,e,t){super(new Float32Array(A),e,t)}},cE=0,ii=new TA,wu=new Ce,wa=new T,Gt=new qe,Gn=new qe,rt=new T,qA=class extends Ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ux(A)?Mo:Hx)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);let t=this.attributes.normal;if(t!==void 0){let r=new Dt().getNormalMatrix(A);t.applyNormalMatrix(r),t.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return ii.makeRotationFromQuaternion(A),this.applyMatrix4(ii),this}rotateX(A){return ii.makeRotationX(A),this.applyMatrix4(ii),this}rotateY(A){return ii.makeRotationY(A),this.applyMatrix4(ii),this}rotateZ(A){return ii.makeRotationZ(A),this.applyMatrix4(ii),this}translate(A,e,t){return ii.makeTranslation(A,e,t),this.applyMatrix4(ii),this}scale(A,e,t){return ii.makeScale(A,e,t),this.applyMatrix4(ii),this}lookAt(A){return wu.lookAt(A),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(A){let e=[];for(let t=0,i=A.length;t<i;t++){let r=A[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new LA(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){let r=e[t];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(A){let t=this.boundingSphere.center;if(Gt.setFromBufferAttribute(A),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(Gt.min,Gn.min),Gt.expandByPoint(rt),rt.addVectors(Gt.max,Gn.max),Gt.expandByPoint(rt)):(Gt.expandByPoint(Gn.min),Gt.expandByPoint(Gn.max))}Gt.getCenter(t);let i=0;for(let r=0,s=A.count;r<s;r++)rt.fromBufferAttribute(A,r),i=Math.max(i,t.distanceToSquared(rt));if(e)for(let r=0,s=e.length;r<s;r++){let a=e[r],n=this.morphTargetsRelative;for(let o=0,l=a.count;o<l;o++)rt.fromBufferAttribute(a,o),n&&(wa.fromBufferAttribute(A,o),rt.add(wa)),i=Math.max(i,t.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let t=A.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new JA(new Float32Array(4*a),4));let n=this.getAttribute("tangent").array,o=[],l=[];for(let E=0;E<a;E++)o[E]=new T,l[E]=new T;let u=new T,h=new T,c=new T,d=new H,f=new H,m=new H,p=new T,g=new T;function v(E,C,D){u.fromArray(i,E*3),h.fromArray(i,C*3),c.fromArray(i,D*3),d.fromArray(s,E*2),f.fromArray(s,C*2),m.fromArray(s,D*2),h.sub(u),c.sub(u),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);!isFinite(P)||(p.copy(h).multiplyScalar(m.y).addScaledVector(c,-f.y).multiplyScalar(P),g.copy(c).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[E].add(p),o[C].add(p),o[D].add(p),l[E].add(g),l[C].add(g),l[D].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.length}]);for(let E=0,C=x.length;E<C;++E){let D=x[E],P=D.start,z=D.count;for(let O=P,G=P+z;O<G;O+=3)v(t[O+0],t[O+1],t[O+2])}let y=new T,S=new T,w=new T,M=new T;function b(E){w.fromArray(r,E*3),M.copy(w);let C=o[E];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(M,C);let D=S.dot(l[E])<0?-1:1;n[E*4]=y.x,n[E*4+1]=y.y,n[E*4+2]=y.z,n[E*4+3]=D}for(let E=0,C=x.length;E<C;++E){let D=x[E],P=D.start,z=D.count;for(let O=P,G=P+z;O<G;O+=3)b(t[O+0]),b(t[O+1]),b(t[O+2])}}computeVertexNormals(){let A=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new JA(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,c=t.count;h<c;h++)t.setXYZ(h,0,0,0);let i=new T,r=new T,s=new T,a=new T,n=new T,o=new T,l=new T,u=new T;if(A)for(let h=0,c=A.count;h<c;h+=3){let d=A.getX(h+0),f=A.getX(h+1),m=A.getX(h+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,f),s.fromBufferAttribute(e,m),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),a.fromBufferAttribute(t,d),n.fromBufferAttribute(t,f),o.fromBufferAttribute(t,m),a.add(l),n.add(l),o.add(l),t.setXYZ(d,a.x,a.y,a.z),t.setXYZ(f,n.x,n.y,n.z),t.setXYZ(m,o.x,o.y,o.z)}else for(let h=0,c=e.count;h<c;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),t.setXYZ(h+0,l.x,l.y,l.z),t.setXYZ(h+1,l.x,l.y,l.z),t.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(A,e){if(!(A&&A.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",A);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let t=this.attributes;for(let i in t){if(A.attributes[i]===void 0)continue;let r=t[i].array,s=A.attributes[i],a=s.array,n=s.itemSize*e,o=Math.min(a.length,r.length-n);for(let l=0,u=n;l<o;l++,u++)r[u]=a[l]}return this}normalizeNormals(){let A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)rt.fromBufferAttribute(A,e),rt.normalize(),A.setXYZ(e,rt.x,rt.y,rt.z)}toNonIndexed(){function A(a,n){let o=a.array,l=a.itemSize,u=a.normalized,h=new o.constructor(n.length*l),c=0,d=0;for(let f=0,m=n.length;f<m;f++){a.isInterleavedBufferAttribute?c=n[f]*a.data.stride+a.offset:c=n[f]*l;for(let p=0;p<l;p++)h[d++]=o[c++]}return new JA(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new qA,t=this.index.array,i=this.attributes;for(let a in i){let n=i[a],o=A(n,t);e.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let n=[],o=r[a];for(let l=0,u=o.length;l<u;l++){let h=o[l],c=A(h,t);n.push(c)}e.morphAttributes[a]=n}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,n=s.length;a<n;a++){let o=s[a];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){let A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){let n=this.parameters;for(let o in n)n[o]!==void 0&&(A[o]=n[o]);return A}A.data={attributes:{}};let e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let t=this.attributes;for(let n in t){let o=t[n];A.data.attributes[n]=o.toJSON(A.data)}let i={},r=!1;for(let n in this.morphAttributes){let o=this.morphAttributes[n],l=[];for(let u=0,h=o.length;u<h;u++){let c=o[u];l.push(c.toJSON(A.data))}l.length>0&&(i[n]=l,r=!0)}r&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=A.name;let t=A.index;t!==null&&this.setIndex(t.clone(e));let i=A.attributes;for(let o in i){let l=i[o];this.setAttribute(o,l.clone(e))}let r=A.morphAttributes;for(let o in r){let l=[],u=r[o];for(let h=0,c=u.length;h<c;h++)l.push(u[h].clone(e));this.morphAttributes[o]=l}this.morphTargetsRelative=A.morphTargetsRelative;let s=A.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];this.addGroup(u.start,u.count,u.materialIndex)}let a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());let n=A.boundingSphere;return n!==null&&(this.boundingSphere=n.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},pg=new TA,ba=new wn,bu=new gi,jr=new T,Vr=new T,Hr=new T,Su=new T,Mu=new T,Eu=new T,wl=new T,bl=new T,Sl=new T,Ml=new H,El=new H,Tl=new H,Tu=new T,Cl=new T,Qt=class extends Ce{constructor(A=new qA,e=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){let A=this.geometry.morphAttributes,e=Object.keys(A);if(e.length>0){let t=A[e[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++){let s=t[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}raycast(A,e){let t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),bu.copy(t.boundingSphere),bu.applyMatrix4(r),A.ray.intersectsSphere(bu)===!1)||(pg.copy(r).invert(),ba.copy(A.ray).applyMatrix4(pg),t.boundingBox!==null&&ba.intersectsBox(t.boundingBox)===!1))return;let s,a=t.index,n=t.attributes.position,o=t.morphAttributes.position,l=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,c=t.groups,d=t.drawRange;if(a!==null)if(Array.isArray(i))for(let f=0,m=c.length;f<m;f++){let p=c[f],g=i[p.materialIndex],v=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,S=x;y<S;y+=3){let w=a.getX(y),M=a.getX(y+1),b=a.getX(y+2);s=Dl(this,g,A,ba,n,o,l,u,h,w,M,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let p=f,g=m;p<g;p+=3){let v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=Dl(this,i,A,ba,n,o,l,u,h,v,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(n!==void 0)if(Array.isArray(i))for(let f=0,m=c.length;f<m;f++){let p=c[f],g=i[p.materialIndex],v=Math.max(p.start,d.start),x=Math.min(n.count,Math.min(p.start+p.count,d.start+d.count));for(let y=v,S=x;y<S;y+=3){let w=y,M=y+1,b=y+2;s=Dl(this,g,A,ba,n,o,l,u,h,w,M,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let f=Math.max(0,d.start),m=Math.min(n.count,d.start+d.count);for(let p=f,g=m;p<g;p+=3){let v=p,x=p+1,y=p+2;s=Dl(this,i,A,ba,n,o,l,u,h,v,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function uE(A,e,t,i,r,s,a,n){let o;if(e.side===gt?o=i.intersectTriangle(a,s,r,!0,n):o=i.intersectTriangle(r,s,a,e.side!==Pi,n),o===null)return null;Cl.copy(n),Cl.applyMatrix4(A.matrixWorld);let l=t.ray.origin.distanceTo(Cl);return l<t.near||l>t.far?null:{distance:l,point:Cl.clone(),object:A}}function Dl(A,e,t,i,r,s,a,n,o,l,u,h){jr.fromBufferAttribute(r,l),Vr.fromBufferAttribute(r,u),Hr.fromBufferAttribute(r,h);let c=A.morphTargetInfluences;if(s&&c){wl.set(0,0,0),bl.set(0,0,0),Sl.set(0,0,0);for(let f=0,m=s.length;f<m;f++){let p=c[f],g=s[f];p!==0&&(Su.fromBufferAttribute(g,l),Mu.fromBufferAttribute(g,u),Eu.fromBufferAttribute(g,h),a?(wl.addScaledVector(Su,p),bl.addScaledVector(Mu,p),Sl.addScaledVector(Eu,p)):(wl.addScaledVector(Su.sub(jr),p),bl.addScaledVector(Mu.sub(Vr),p),Sl.addScaledVector(Eu.sub(Hr),p)))}jr.add(wl),Vr.add(bl),Hr.add(Sl)}A.isSkinnedMesh&&(A.boneTransform(l,jr),A.boneTransform(u,Vr),A.boneTransform(h,Hr));let d=uE(A,e,t,i,jr,Vr,Hr,Tu);if(d){n&&(Ml.fromBufferAttribute(n,l),El.fromBufferAttribute(n,u),Tl.fromBufferAttribute(n,h),d.uv=Ot.getUV(Tu,jr,Vr,Hr,Ml,El,Tl,new H)),o&&(Ml.fromBufferAttribute(o,l),El.fromBufferAttribute(o,u),Tl.fromBufferAttribute(o,h),d.uv2=Ot.getUV(Tu,jr,Vr,Hr,Ml,El,Tl,new H));let f={a:l,b:u,c:h,normal:new T,materialIndex:0};Ot.getNormal(jr,Vr,Hr,f.normal),d.face=f}return d}var or=class extends qA{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let n=[],o=[],l=[],u=[],h=0,c=0;d("z","y","x",-1,-1,t,e,A,s,r,0),d("z","y","x",1,-1,t,e,-A,s,r,1),d("x","z","y",1,1,A,t,e,i,s,2),d("x","z","y",1,-1,A,t,-e,i,s,3),d("x","y","z",1,-1,A,e,t,i,r,4),d("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(n),this.setAttribute("position",new LA(o,3)),this.setAttribute("normal",new LA(l,3)),this.setAttribute("uv",new LA(u,2));function d(f,m,p,g,v,x,y,S,w,M,b){let E=x/w,C=y/M,D=x/2,P=y/2,z=S/2,O=w+1,G=M+1,X=0,U=0,_=new T;for(let V=0;V<G;V++){let F=V*C-P;for(let R=0;R<O;R++){let B=R*E-D;_[f]=B*g,_[m]=F*v,_[p]=z,o.push(_.x,_.y,_.z),_[f]=0,_[m]=0,_[p]=S>0?1:-1,l.push(_.x,_.y,_.z),u.push(R/w),u.push(1-V/M),X+=1}}for(let V=0;V<M;V++)for(let F=0;F<w;F++){let R=h+F+O*V,B=h+F+O*(V+1),k=h+(F+1)+O*(V+1),W=h+(F+1)+O*V;n.push(R,B,W),n.push(B,k,W),U+=6}a.addGroup(c,U,b),c+=U,h+=X}}static fromJSON(A){return new or(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}};function un(A){let e={};for(let t in A){e[t]={};for(let i in A[t]){let r=A[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pt(A){let e={};for(let t=0;t<A.length;t++){let i=un(A[t]);for(let r in i)e[r]=i[r]}return e}var Sn={clone:un,merge:pt},dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends bn{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=dE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&(A.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(A))}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=un(A.uniforms),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){let e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(A).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let t={};for(let i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}},Mn=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new TA,this.projectionMatrix=new TA,this.projectionMatrixInverse=new TA}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return A.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ft=class extends Mn{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){let e=.5*this.getFilmHeight()/A;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let A=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return No*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let A=this.near,e=A*Math.tan(bo*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let n=s.fullWidth,o=s.fullHeight;r+=s.offsetX*i/n,e-=s.offsetY*t/o,i*=s.width/n,t*=s.height/o}let a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Sa=90,Ma=1,fE=class extends Ce{constructor(A,e,t){if(super(),this.type="CubeCamera",t.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=t;let i=new ft(Sa,Ma,A,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);let r=new ft(Sa,Ma,A,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new T(-1,0,0)),this.add(r);let s=new ft(Sa,Ma,A,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new T(0,1,0)),this.add(s);let a=new ft(Sa,Ma,A,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new T(0,-1,0)),this.add(a);let n=new ft(Sa,Ma,A,e);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new T(0,0,1)),this.add(n);let o=new ft(Sa,Ma,A,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new T(0,0,-1)),this.add(o)}update(A,e){this.parent===null&&this.updateMatrixWorld();let t=this.renderTarget,[i,r,s,a,n,o]=this.children,l=A.getRenderTarget(),u=A.toneMapping,h=A.xr.enabled;A.toneMapping=Dr,A.xr.enabled=!1;let c=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0),A.render(e,i),A.setRenderTarget(t,1),A.render(e,r),A.setRenderTarget(t,2),A.render(e,s),A.setRenderTarget(t,3),A.render(e,a),A.setRenderTarget(t,4),A.render(e,n),t.texture.generateMipmaps=c,A.setRenderTarget(t,5),A.render(e,o),A.setRenderTarget(l),A.toneMapping=u,A.xr.enabled=h,t.texture.needsPMREMUpdate=!0}},lf=class extends xt{constructor(A,e,t,i,r,s,a,n,o,l){A=A!==void 0?A:[],e=e!==void 0?e:$s,super(A,e,t,i,r,s,a,n,o,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}},mE=class extends We{constructor(A,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;let t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];this.texture=new lf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ge}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new or(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:un(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:gt,blending:lt});r.uniforms.tEquirect.value=e;let s=new Qt(i,r),a=e.minFilter;return e.minFilter===Al&&(e.minFilter=ge),new fE(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e,t,i){let r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}},Cu=new T,gE=new T,vE=new Dt,hi=class{constructor(A=new T(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){let i=Cu.subVectors(t,e).cross(gE.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){let A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,e){let t=A.delta(Cu),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;let r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t).multiplyScalar(r).add(A.start)}intersectsLine(A){let e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){let t=e||vE.getNormalMatrix(A),i=this.coplanarPoint(Cu).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ea=new gi,Pl=new T,hf=class{constructor(A=new hi,e=new hi,t=new hi,i=new hi,r=new hi,s=new hi){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){let a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){let e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A){let e=this.planes,t=A.elements,i=t[0],r=t[1],s=t[2],a=t[3],n=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],m=t[12],p=t[13],g=t[14],v=t[15];return e[0].setComponents(a-i,u-n,f-h,v-m).normalize(),e[1].setComponents(a+i,u+n,f+h,v+m).normalize(),e[2].setComponents(a+r,u+o,f+c,v+p).normalize(),e[3].setComponents(a-r,u-o,f-c,v-p).normalize(),e[4].setComponents(a-s,u-l,f-d,v-g).normalize(),e[5].setComponents(a+s,u+l,f+d,v+g).normalize(),this}intersectsObject(A){let e=A.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ea.copy(e.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(Ea)}intersectsSprite(A){return Ea.center.set(0,0,0),Ea.radius=.7071067811865476,Ea.applyMatrix4(A.matrixWorld),this.intersectsSphere(Ea)}intersectsSphere(A){let e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){let e=this.planes;for(let t=0;t<6;t++){let i=e[t];if(Pl.x=i.normal.x>0?A.max.x:A.min.x,Pl.y=i.normal.y>0?A.max.y:A.min.y,Pl.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(A){let e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wx(){let A=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=A.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=A.requestAnimationFrame(r),e=!0)},stop:function(){A.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){A=s}}}function yE(A,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let h=l.array,c=l.usage,d=A.createBuffer();A.bindBuffer(u,d),A.bufferData(u,h,c),l.onUploadCallback();let f;if(h instanceof Float32Array)f=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)f=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=5123;else if(h instanceof Int16Array)f=5122;else if(h instanceof Uint32Array)f=5125;else if(h instanceof Int32Array)f=5124;else if(h instanceof Int8Array)f=5120;else if(h instanceof Uint8Array)f=5121;else if(h instanceof Uint8ClampedArray)f=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let c=u.array,d=u.updateRange;A.bindBuffer(h,l),d.count===-1?A.bufferSubData(h,0,c):(t?A.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):A.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function n(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(A.deleteBuffer(u.buffer),i.delete(l))}function o(l,u){if(l.isGLBufferAttribute){let c=i.get(l);(!c||c.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:a,remove:n,update:o}}var Cc=class extends qA{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};let r=A/2,s=e/2,a=Math.floor(t),n=Math.floor(i),o=a+1,l=n+1,u=A/a,h=e/n,c=[],d=[],f=[],m=[];for(let p=0;p<l;p++){let g=p*h-s;for(let v=0;v<o;v++){let x=v*u-r;d.push(x,-g,0),f.push(0,0,1),m.push(v/a),m.push(1-p/n)}}for(let p=0;p<n;p++)for(let g=0;g<a;g++){let v=g+o*p,x=g+o*(p+1),y=g+1+o*(p+1),S=g+1+o*p;c.push(v,x,S),c.push(x,y,S)}this.setIndex(c),this.setAttribute("position",new LA(d,3)),this.setAttribute("normal",new LA(f,3)),this.setAttribute("uv",new LA(m,2))}static fromJSON(A){return new Cc(A.width,A.height,A.widthSegments,A.heightSegments)}},xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,wE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE="vec3 transformed = vec3( position );",CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DE=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,PE=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,LE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,UE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,r2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,s2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,n2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o2=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,c2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,d2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,p2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f2=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,v2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,L2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,B2=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,U2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,k2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,G2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,H2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z2=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,K2=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J2=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,$2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,fT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$A={alphamap_fragment:xE,alphamap_pars_fragment:wE,alphatest_fragment:bE,alphatest_pars_fragment:SE,aomap_fragment:ME,aomap_pars_fragment:EE,begin_vertex:TE,beginnormal_vertex:CE,bsdfs:DE,iridescence_fragment:PE,bumpmap_pars_fragment:LE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:IE,color_fragment:RE,color_pars_fragment:NE,color_pars_vertex:zE,color_vertex:FE,common:UE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:GE,displacementmap_pars_vertex:jE,displacementmap_vertex:VE,emissivemap_fragment:HE,emissivemap_pars_fragment:WE,encodings_fragment:YE,encodings_pars_fragment:XE,envmap_fragment:QE,envmap_common_pars_fragment:qE,envmap_pars_fragment:ZE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:o2,envmap_vertex:JE,fog_vertex:$E,fog_pars_vertex:A2,fog_fragment:e2,fog_pars_fragment:t2,gradientmap_pars_fragment:i2,lightmap_fragment:r2,lightmap_pars_fragment:s2,lights_lambert_vertex:a2,lights_pars_begin:n2,lights_toon_fragment:l2,lights_toon_pars_fragment:h2,lights_phong_fragment:c2,lights_phong_pars_fragment:u2,lights_physical_fragment:d2,lights_physical_pars_fragment:p2,lights_fragment_begin:f2,lights_fragment_maps:m2,lights_fragment_end:g2,logdepthbuf_fragment:v2,logdepthbuf_pars_fragment:y2,logdepthbuf_pars_vertex:x2,logdepthbuf_vertex:w2,map_fragment:b2,map_pars_fragment:S2,map_particle_fragment:M2,map_particle_pars_fragment:E2,metalnessmap_fragment:T2,metalnessmap_pars_fragment:C2,morphcolor_vertex:D2,morphnormal_vertex:P2,morphtarget_pars_vertex:L2,morphtarget_vertex:_2,normal_fragment_begin:O2,normal_fragment_maps:B2,normal_pars_fragment:I2,normal_pars_vertex:R2,normal_vertex:N2,normalmap_pars_fragment:z2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:U2,clearcoat_pars_fragment:k2,iridescence_pars_fragment:G2,output_fragment:j2,packing:V2,premultiplied_alpha_fragment:H2,project_vertex:W2,dithering_fragment:Y2,dithering_pars_fragment:X2,roughnessmap_fragment:Q2,roughnessmap_pars_fragment:q2,shadowmap_pars_fragment:Z2,shadowmap_pars_vertex:K2,shadowmap_vertex:J2,shadowmask_pars_fragment:$2,skinbase_vertex:AT,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:aT,tonemapping_pars_fragment:nT,transmission_fragment:oT,transmission_pars_fragment:lT,uv_pars_fragment:hT,uv_pars_vertex:cT,uv_vertex:uT,uv2_pars_fragment:dT,uv2_pars_vertex:pT,uv2_vertex:fT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,cube_vert:yT,cube_frag:xT,depth_vert:wT,depth_frag:bT,distanceRGBA_vert:ST,distanceRGBA_frag:MT,equirect_vert:ET,equirect_frag:TT,linedashed_vert:CT,linedashed_frag:DT,meshbasic_vert:PT,meshbasic_frag:LT,meshlambert_vert:_T,meshlambert_frag:OT,meshmatcap_vert:BT,meshmatcap_frag:IT,meshnormal_vert:RT,meshnormal_frag:NT,meshphong_vert:zT,meshphong_frag:FT,meshphysical_vert:UT,meshphysical_frag:kT,meshtoon_vert:GT,meshtoon_frag:jT,points_vert:VT,points_frag:HT,shadow_vert:WT,shadow_frag:YT,sprite_vert:XT,sprite_frag:QT},yA={common:{diffuse:{value:new GA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new GA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new GA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new GA(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},qi={basic:{uniforms:pt([yA.common,yA.specularmap,yA.envmap,yA.aomap,yA.lightmap,yA.fog]),vertexShader:$A.meshbasic_vert,fragmentShader:$A.meshbasic_frag},lambert:{uniforms:pt([yA.common,yA.specularmap,yA.envmap,yA.aomap,yA.lightmap,yA.emissivemap,yA.fog,yA.lights,{emissive:{value:new GA(0)}}]),vertexShader:$A.meshlambert_vert,fragmentShader:$A.meshlambert_frag},phong:{uniforms:pt([yA.common,yA.specularmap,yA.envmap,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.fog,yA.lights,{emissive:{value:new GA(0)},specular:{value:new GA(1118481)},shininess:{value:30}}]),vertexShader:$A.meshphong_vert,fragmentShader:$A.meshphong_frag},standard:{uniforms:pt([yA.common,yA.envmap,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.roughnessmap,yA.metalnessmap,yA.fog,yA.lights,{emissive:{value:new GA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$A.meshphysical_vert,fragmentShader:$A.meshphysical_frag},toon:{uniforms:pt([yA.common,yA.aomap,yA.lightmap,yA.emissivemap,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.gradientmap,yA.fog,yA.lights,{emissive:{value:new GA(0)}}]),vertexShader:$A.meshtoon_vert,fragmentShader:$A.meshtoon_frag},matcap:{uniforms:pt([yA.common,yA.bumpmap,yA.normalmap,yA.displacementmap,yA.fog,{matcap:{value:null}}]),vertexShader:$A.meshmatcap_vert,fragmentShader:$A.meshmatcap_frag},points:{uniforms:pt([yA.points,yA.fog]),vertexShader:$A.points_vert,fragmentShader:$A.points_frag},dashed:{uniforms:pt([yA.common,yA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$A.linedashed_vert,fragmentShader:$A.linedashed_frag},depth:{uniforms:pt([yA.common,yA.displacementmap]),vertexShader:$A.depth_vert,fragmentShader:$A.depth_frag},normal:{uniforms:pt([yA.common,yA.bumpmap,yA.normalmap,yA.displacementmap,{opacity:{value:1}}]),vertexShader:$A.meshnormal_vert,fragmentShader:$A.meshnormal_frag},sprite:{uniforms:pt([yA.sprite,yA.fog]),vertexShader:$A.sprite_vert,fragmentShader:$A.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null}},vertexShader:$A.background_vert,fragmentShader:$A.background_frag},cube:{uniforms:pt([yA.envmap,{opacity:{value:1}}]),vertexShader:$A.cube_vert,fragmentShader:$A.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$A.equirect_vert,fragmentShader:$A.equirect_frag},distanceRGBA:{uniforms:pt([yA.common,yA.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$A.distanceRGBA_vert,fragmentShader:$A.distanceRGBA_frag},shadow:{uniforms:pt([yA.lights,yA.fog,{color:{value:new GA(0)},opacity:{value:1}}]),vertexShader:$A.shadow_vert,fragmentShader:$A.shadow_frag}};qi.physical={uniforms:pt([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new H(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new GA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new GA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new GA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:$A.meshphysical_vert,fragmentShader:$A.meshphysical_frag};function qT(A,e,t,i,r,s){let a=new GA(0),n=r===!0?0:1,o,l,u=null,h=0,c=null;function d(m,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));let x=A.xr,y=x.getSession&&x.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?f(a,n):v&&v.isColor&&(f(v,1),g=!0),(A.autoClear||g)&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$o)?(l===void 0&&(l=new Qt(new or(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:un(qi.cube.uniforms),vertexShader:qi.cube.vertexShader,fragmentShader:qi.cube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||c!==A.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,c=A.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(o===void 0&&(o=new Qt(new Cc(2,2),new At({name:"BackgroundMaterial",uniforms:un(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),o.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||c!==A.toneMapping)&&(o.material.needsUpdate=!0,u=v,h=v.version,c=A.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))}function f(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),n=p,f(a,n)},getClearAlpha:function(){return n},setClearAlpha:function(m){n=m,f(a,n)},render:d}}function ZT(A,e,t,i){let r=A.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,n={},o=p(null),l=o,u=!1;function h(O,G,X,U,_){let V=!1;if(a){let F=m(U,X,G);l!==F&&(l=F,d(l.object)),V=g(O,U,X,_),V&&v(O,U,X,_)}else{let F=G.wireframe===!0;(l.geometry!==U.id||l.program!==X.id||l.wireframe!==F)&&(l.geometry=U.id,l.program=X.id,l.wireframe=F,V=!0)}_!==null&&t.update(_,34963),(V||u)&&(u=!1,b(O,G,X,U),_!==null&&A.bindBuffer(34963,t.get(_).buffer))}function c(){return i.isWebGL2?A.createVertexArray():s.createVertexArrayOES()}function d(O){return i.isWebGL2?A.bindVertexArray(O):s.bindVertexArrayOES(O)}function f(O){return i.isWebGL2?A.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,G,X){let U=X.wireframe===!0,_=n[O.id];_===void 0&&(_={},n[O.id]=_);let V=_[G.id];V===void 0&&(V={},_[G.id]=V);let F=V[U];return F===void 0&&(F=p(c()),V[U]=F),F}function p(O){let G=[],X=[],U=[];for(let _=0;_<r;_++)G[_]=0,X[_]=0,U[_]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:U,object:O,attributes:{},index:null}}function g(O,G,X,U){let _=l.attributes,V=G.attributes,F=0,R=X.getAttributes();for(let B in R)if(R[B].location>=0){let k=_[B],W=V[B];if(W===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),k===void 0||k.attribute!==W||W&&k.data!==W.data)return!0;F++}return l.attributesNum!==F||l.index!==U}function v(O,G,X,U){let _={},V=G.attributes,F=0,R=X.getAttributes();for(let B in R)if(R[B].location>=0){let k=V[B];k===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));let W={};W.attribute=k,k&&k.data&&(W.data=k.data),_[B]=W,F++}l.attributes=_,l.attributesNum=F,l.index=U}function x(){let O=l.newAttributes;for(let G=0,X=O.length;G<X;G++)O[G]=0}function y(O){S(O,0)}function S(O,G){let X=l.newAttributes,U=l.enabledAttributes,_=l.attributeDivisors;X[O]=1,U[O]===0&&(A.enableVertexAttribArray(O),U[O]=1),_[O]!==G&&((i.isWebGL2?A:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),_[O]=G)}function w(){let O=l.newAttributes,G=l.enabledAttributes;for(let X=0,U=G.length;X<U;X++)G[X]!==O[X]&&(A.disableVertexAttribArray(X),G[X]=0)}function M(O,G,X,U,_,V){i.isWebGL2===!0&&(X===5124||X===5125)?A.vertexAttribIPointer(O,G,X,_,V):A.vertexAttribPointer(O,G,X,U,_,V)}function b(O,G,X,U){if(i.isWebGL2===!1&&(O.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let _=U.attributes,V=X.getAttributes(),F=G.defaultAttributeValues;for(let R in V){let B=V[R];if(B.location>=0){let k=_[R];if(k===void 0&&(R==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),R==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),k!==void 0){let W=k.normalized,Q=k.itemSize,j=t.get(k);if(j===void 0)continue;let tA=j.buffer,K=j.type,Z=j.bytesPerElement;if(k.isInterleavedBufferAttribute){let J=k.data,lA=J.stride,hA=k.offset;if(J.isInstancedInterleavedBuffer){for(let nA=0;nA<B.locationSize;nA++)S(B.location+nA,J.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let nA=0;nA<B.locationSize;nA++)y(B.location+nA);A.bindBuffer(34962,tA);for(let nA=0;nA<B.locationSize;nA++)M(B.location+nA,Q/B.locationSize,K,W,lA*Z,(hA+Q/B.locationSize*nA)*Z)}else{if(k.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)S(B.location+J,k.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let J=0;J<B.locationSize;J++)y(B.location+J);A.bindBuffer(34962,tA);for(let J=0;J<B.locationSize;J++)M(B.location+J,Q/B.locationSize,K,W,Q*Z,Q/B.locationSize*J*Z)}}else if(F!==void 0){let W=F[R];if(W!==void 0)switch(W.length){case 2:A.vertexAttrib2fv(B.location,W);break;case 3:A.vertexAttrib3fv(B.location,W);break;case 4:A.vertexAttrib4fv(B.location,W);break;default:A.vertexAttrib1fv(B.location,W)}}}}w()}function E(){P();for(let O in n){let G=n[O];for(let X in G){let U=G[X];for(let _ in U)f(U[_].object),delete U[_];delete G[X]}delete n[O]}}function C(O){if(n[O.id]===void 0)return;let G=n[O.id];for(let X in G){let U=G[X];for(let _ in U)f(U[_].object),delete U[_];delete G[X]}delete n[O.id]}function D(O){for(let G in n){let X=n[G];if(X[O.id]===void 0)continue;let U=X[O.id];for(let _ in U)f(U[_].object),delete U[_];delete X[O.id]}}function P(){z(),u=!0,l!==o&&(l=o,d(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:P,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function KT(A,e,t,i){let r=i.isWebGL2,s;function a(l){s=l}function n(l,u){A.drawArrays(s,l,u),t.update(u,s,1)}function o(l,u,h){if(h===0)return;let c,d;if(r)c=A,d="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](s,l,u,h),t.update(u,s,h)}this.setMode=a,this.render=n,this.renderInstances=o}function JT(A,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=A.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(A.getShaderPrecisionFormat(35633,36338).precision>0&&A.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&A.getShaderPrecisionFormat(35633,36337).precision>0&&A.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&A instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&A instanceof WebGL2ComputeRenderingContext,n=t.precision!==void 0?t.precision:"highp",o=s(n);o!==n&&(console.warn("THREE.WebGLRenderer:",n,"not supported, using",o,"instead."),n=o);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=A.getParameter(34930),c=A.getParameter(35660),d=A.getParameter(3379),f=A.getParameter(34076),m=A.getParameter(34921),p=A.getParameter(36347),g=A.getParameter(36348),v=A.getParameter(36349),x=c>0,y=a||e.has("OES_texture_float"),S=x&&y,w=a?A.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:n,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:w}}function $T(A){let e=this,t=null,i=0,r=!1,s=!1,a=new hi,n=new Dt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,c,d){let f=h.length!==0||c||i!==0||r;return r=c,t=u(h,d,0),i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,c,d){let f=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,g=A.get(h);if(!r||f===null||f.length===0||s&&!p)s?u(null):l();else{let v=s?0:i,x=v*4,y=g.clippingState||null;o.value=y,y=u(f,c,x,d);for(let S=0;S!==x;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,c,d,f){let m=h!==null?h.length:0,p=null;if(m!==0){if(p=o.value,f!==!0||p===null){let g=d+m*4,v=c.matrixWorldInverse;n.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=d;x!==m;++x,y+=4)a.copy(h[x]).applyMatrix4(v,n),a.normal.toArray(p,y),p[y+3]=a.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function AC(A){let e=new WeakMap;function t(a,n){return n===kd?a.mapping=$s:n===Gd&&(a.mapping=Aa),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let n=a.mapping;if(n===kd||n===Gd)if(e.has(a)){let o=e.get(a).texture;return t(o,a.mapping)}else{let o=a.image;if(o&&o.height>0){let l=new mE(o.height/2);return l.fromEquirectangularTexture(A,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let n=a.target;n.removeEventListener("dispose",r);let o=e.get(n);o!==void 0&&(e.delete(n),o.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var cf=class extends Mn{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=t-A,s=t+A,a=i+e,n=i-e;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,s=r+o*this.view.width,a-=l*this.view.offsetY,n=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,n,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ja=4,fg=[.125,.215,.35,.446,.526,.582],Rs=20,Du=new cf,mg=new GA,Pu=null,_s=(1+Math.sqrt(5))/2,Ta=1/_s,gg=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,_s,Ta),new T(0,_s,-Ta),new T(Ta,0,_s),new T(-Ta,0,_s),new T(_s,Ta,0),new T(-_s,Ta,0)],vg=class{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100){Pu=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,t,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Pu),A.scissorTest=!1,Ll(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===$s||A.mapping===Aa?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Pu=this._renderer.getRenderTarget();let t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){let A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:Ro,format:Ar,encoding:nr,depthBuffer:!1},i=yg(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yg(A,e,t);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eC(r)),this._blurMaterial=tC(r,A,e)}return i}_compileMaterial(A){let e=new Qt(this._lodPlanes[0],A);this._renderer.compile(e,Du)}_sceneToCubeUV(A,e,t,i){let r=new ft(90,1,e,t),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],n=this._renderer,o=n.autoClear,l=n.toneMapping;n.getClearColor(mg),n.toneMapping=Dr,n.autoClear=!1;let u=new Tc({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),h=new Qt(new or,u),c=!1,d=A.background;d?d.isColor&&(u.color.copy(d),A.background=null,c=!0):(u.color.copy(mg),c=!0);for(let f=0;f<6;f++){let m=f%3;m===0?(r.up.set(0,s[f],0),r.lookAt(a[f],0,0)):m===1?(r.up.set(0,0,s[f]),r.lookAt(0,a[f],0)):(r.up.set(0,s[f],0),r.lookAt(0,0,a[f]));let p=this._cubeSize;Ll(i,m*p,f>2?p:0,p,p),n.setRenderTarget(i),c&&n.render(h,r),n.render(A,r)}h.geometry.dispose(),h.material.dispose(),n.toneMapping=l,n.autoClear=o,A.background=d}_textureToCubeUV(A,e){let t=this._renderer,i=A.mapping===$s||A.mapping===Aa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;let n=this._cubeSize;Ll(e,0,0,3*n,2*n),t.setRenderTarget(e),t.render(s,Du)}_applyPMREM(A){let e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=gg[(i-1)%gg.length];this._blur(A,i-1,i,r,s)}e.autoClear=t}_blur(A,e,t,i,r){let s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){let n=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new Qt(this._lodPlanes[i],o),h=o.uniforms,c=this._sizeLods[t]-1,d=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*Rs-1),f=r/d,m=isFinite(r)?1+Math.floor(l*f):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);let p=[],g=0;for(let w=0;w<Rs;++w){let M=w/f,b=Math.exp(-M*M/2);p.push(b),w===0?g+=b:w<m&&(g+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/g;h.envMap.value=A.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=d,h.mipInt.value=v-t;let x=this._sizeLods[i],y=3*x*(i>v-ja?i-v+ja:0),S=4*(this._cubeSize-x);Ll(e,y,S,3*x,2*x),n.setRenderTarget(e),n.render(u,Du)}};function eC(A){let e=[],t=[],i=[],r=A,s=A-ja+1+fg.length;for(let a=0;a<s;a++){let n=Math.pow(2,r);t.push(n);let o=1/n;a>A-ja?o=fg[a-A+ja-1]:a===0&&(o=0),i.push(o);let l=1/(n-2),u=-l,h=1+l,c=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,f=6,m=3,p=2,g=1,v=new Float32Array(m*f*d),x=new Float32Array(p*f*d),y=new Float32Array(g*f*d);for(let w=0;w<d;w++){let M=w%3*2/3-1,b=w>2?0:-1,E=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];v.set(E,m*f*w),x.set(c,p*f*w);let C=[w,w,w,w,w,w];y.set(C,g*f*w)}let S=new qA;S.setAttribute("position",new JA(v,m)),S.setAttribute("uv",new JA(x,p)),S.setAttribute("faceIndex",new JA(y,g)),e.push(S),r>ja&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yg(A,e,t){let i=new We(A,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ll(A,e,t,i,r){A.viewport.set(e,t,i,r),A.scissor.set(e,t,i,r)}function tC(A,e,t){let i=new Float32Array(Rs),r=new T(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lt,depthTest:!1,depthWrite:!1})}function xg(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lt,depthTest:!1,depthWrite:!1})}function wg(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lt,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iC(A){let e=new WeakMap,t=null;function i(n){if(n&&n.isTexture){let o=n.mapping,l=o===kd||o===Gd,u=o===$s||o===Aa;if(l||u)if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let h=e.get(n);return t===null&&(t=new vg(A)),h=l?t.fromEquirectangular(n,h):t.fromCubemap(n,h),e.set(n,h),h.texture}else{if(e.has(n))return e.get(n).texture;{let h=n.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new vg(A));let c=l?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,c),n.addEventListener("dispose",s),c.texture}else return null}}}return n}function r(n){let o=0,l=6;for(let u=0;u<l;u++)n[u]!==void 0&&o++;return o===l}function s(n){let o=n.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function rC(A){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=A.getExtension("WEBGL_depth_texture")||A.getExtension("MOZ_WEBGL_depth_texture")||A.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=A.getExtension("EXT_texture_filter_anisotropic")||A.getExtension("MOZ_EXT_texture_filter_anisotropic")||A.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=A.getExtension("WEBGL_compressed_texture_s3tc")||A.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=A.getExtension("WEBGL_compressed_texture_pvrtc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=A.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sC(A,e,t,i){let r={},s=new WeakMap;function a(h){let c=h.target;c.index!==null&&e.remove(c.index);for(let f in c.attributes)e.remove(c.attributes[f]);c.removeEventListener("dispose",a),delete r[c.id];let d=s.get(c);d&&(e.remove(d),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function n(h,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c}function o(h){let c=h.attributes;for(let f in c)e.update(c[f],34962);let d=h.morphAttributes;for(let f in d){let m=d[f];for(let p=0,g=m.length;p<g;p++)e.update(m[p],34962)}}function l(h){let c=[],d=h.index,f=h.attributes.position,m=0;if(d!==null){let v=d.array;m=d.version;for(let x=0,y=v.length;x<y;x+=3){let S=v[x+0],w=v[x+1],M=v[x+2];c.push(S,w,w,M,M,S)}}else{let v=f.array;m=f.version;for(let x=0,y=v.length/3-1;x<y;x+=3){let S=x+0,w=x+1,M=x+2;c.push(S,w,w,M,M,S)}}let p=new(Ux(c)?Mo:Hx)(c,1);p.version=m;let g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){let c=s.get(h);if(c){let d=h.index;d!==null&&c.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:n,update:o,getWireframeAttribute:u}}function aC(A,e,t,i){let r=i.isWebGL2,s;function a(c){s=c}let n,o;function l(c){n=c.type,o=c.bytesPerElement}function u(c,d){A.drawElements(s,d,n,c*o),t.update(d,s,1)}function h(c,d,f){if(f===0)return;let m,p;if(r)m=A,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,n,c*o,f),t.update(d,s,f)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function nC(A){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,n){switch(t.calls++,a){case 4:t.triangles+=n*(s/3);break;case 1:t.lines+=n*(s/2);break;case 3:t.lines+=n*(s-1);break;case 2:t.lines+=n*s;break;case 0:t.points+=n*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oC(A,e){return A[0]-e[0]}function lC(A,e){return Math.abs(e[1])-Math.abs(A[1])}function Lu(A,e){let t=1,i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),A.divideScalar(t)}function hC(A,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new ee,n=[];for(let l=0;l<8;l++)n[l]=[l,0];function o(l,u,h,c){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0,p=s.get(u);if(p===void 0||p.count!==m){let x=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",x)};p!==void 0&&p.texture.dispose();let y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],E=u.morphAttributes.color||[],C=0;y===!0&&(C=1),S===!0&&(C=2),w===!0&&(C=3);let D=u.attributes.position.count*C,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let z=new Float32Array(D*P*4*m),O=new Vx(z,D,P,m);O.type=is,O.needsUpdate=!0;let G=C*4;for(let X=0;X<m;X++){let U=M[X],_=b[X],V=E[X],F=D*P*4*X;for(let R=0;R<U.count;R++){let B=R*G;y===!0&&(a.fromBufferAttribute(U,R),U.normalized===!0&&Lu(a,U),z[F+B+0]=a.x,z[F+B+1]=a.y,z[F+B+2]=a.z,z[F+B+3]=0),S===!0&&(a.fromBufferAttribute(_,R),_.normalized===!0&&Lu(a,_),z[F+B+4]=a.x,z[F+B+5]=a.y,z[F+B+6]=a.z,z[F+B+7]=0),w===!0&&(a.fromBufferAttribute(V,R),V.normalized===!0&&Lu(a,V),z[F+B+8]=a.x,z[F+B+9]=a.y,z[F+B+10]=a.z,z[F+B+11]=V.itemSize===4?a.w:1)}}p={count:m,texture:O,size:new H(D,P)},s.set(u,p),u.addEventListener("dispose",x)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let v=u.morphTargetsRelative?1:1-g;c.getUniforms().setValue(A,"morphTargetBaseInfluence",v),c.getUniforms().setValue(A,"morphTargetInfluences",d),c.getUniforms().setValue(A,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(A,"morphTargetsTextureSize",p.size)}else{let f=d===void 0?0:d.length,m=i[u.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];i[u.id]=m}for(let y=0;y<f;y++){let S=m[y];S[0]=y,S[1]=d[y]}m.sort(lC);for(let y=0;y<8;y++)y<f&&m[y][1]?(n[y][0]=m[y][0],n[y][1]=m[y][1]):(n[y][0]=Number.MAX_SAFE_INTEGER,n[y][1]=0);n.sort(oC);let p=u.morphAttributes.position,g=u.morphAttributes.normal,v=0;for(let y=0;y<8;y++){let S=n[y],w=S[0],M=S[1];w!==Number.MAX_SAFE_INTEGER&&M?(p&&u.getAttribute("morphTarget"+y)!==p[w]&&u.setAttribute("morphTarget"+y,p[w]),g&&u.getAttribute("morphNormal"+y)!==g[w]&&u.setAttribute("morphNormal"+y,g[w]),r[y]=M,v+=M):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}let x=u.morphTargetsRelative?1:1-v;c.getUniforms().setValue(A,"morphTargetBaseInfluence",x),c.getUniforms().setValue(A,"morphTargetInfluences",r)}}return{update:o}}function cC(A,e,t,i){let r=new WeakMap;function s(o){let l=i.render.frame,u=o.geometry,h=e.get(o,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",n)===!1&&o.addEventListener("dispose",n),t.update(o.instanceMatrix,34962),o.instanceColor!==null&&t.update(o.instanceColor,34962)),h}function a(){r=new WeakMap}function n(o){let l=o.target;l.removeEventListener("dispose",n),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Yx=new xt,Xx=new Vx,Qx=new eE,qx=new lf,bg=[],Sg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),Tg=new Float32Array(4);function En(A,e,t){let i=A[0];if(i<=0||i>0)return A;let r=e*t,s=bg[r];if(s===void 0&&(s=new Float32Array(r),bg[r]=s),e!==0){i.toArray(s,0);for(let a=1,n=0;a!==e;++a)n+=t,A[a].toArray(s,n)}return s}function Pt(A,e){if(A.length!==e.length)return!1;for(let t=0,i=A.length;t<i;t++)if(A[t]!==e[t])return!1;return!0}function Lt(A,e){for(let t=0,i=e.length;t<i;t++)A[t]=e[t]}function Dc(A,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let i=0;i!==e;++i)t[i]=A.allocateTextureUnit();return t}function uC(A,e){let t=this.cache;t[0]!==e&&(A.uniform1f(this.addr,e),t[0]=e)}function dC(A,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;A.uniform2fv(this.addr,e),Lt(t,e)}}function pC(A,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(A.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;A.uniform3fv(this.addr,e),Lt(t,e)}}function fC(A,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;A.uniform4fv(this.addr,e),Lt(t,e)}}function mC(A,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;A.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Tg.set(i),A.uniformMatrix2fv(this.addr,!1,Tg),Lt(t,i)}}function gC(A,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;A.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Eg.set(i),A.uniformMatrix3fv(this.addr,!1,Eg),Lt(t,i)}}function vC(A,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;A.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Mg.set(i),A.uniformMatrix4fv(this.addr,!1,Mg),Lt(t,i)}}function yC(A,e){let t=this.cache;t[0]!==e&&(A.uniform1i(this.addr,e),t[0]=e)}function xC(A,e){let t=this.cache;Pt(t,e)||(A.uniform2iv(this.addr,e),Lt(t,e))}function wC(A,e){let t=this.cache;Pt(t,e)||(A.uniform3iv(this.addr,e),Lt(t,e))}function bC(A,e){let t=this.cache;Pt(t,e)||(A.uniform4iv(this.addr,e),Lt(t,e))}function SC(A,e){let t=this.cache;t[0]!==e&&(A.uniform1ui(this.addr,e),t[0]=e)}function MC(A,e){let t=this.cache;Pt(t,e)||(A.uniform2uiv(this.addr,e),Lt(t,e))}function EC(A,e){let t=this.cache;Pt(t,e)||(A.uniform3uiv(this.addr,e),Lt(t,e))}function TC(A,e){let t=this.cache;Pt(t,e)||(A.uniform4uiv(this.addr,e),Lt(t,e))}function CC(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Yx,r)}function DC(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qx,r)}function PC(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qx,r)}function LC(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xx,r)}function _C(A){switch(A){case 5126:return uC;case 35664:return dC;case 35665:return pC;case 35666:return fC;case 35674:return mC;case 35675:return gC;case 35676:return vC;case 5124:case 35670:return yC;case 35667:case 35671:return xC;case 35668:case 35672:return wC;case 35669:case 35673:return bC;case 5125:return SC;case 36294:return MC;case 36295:return EC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return CC;case 35679:case 36299:case 36307:return DC;case 35680:case 36300:case 36308:case 36293:return PC;case 36289:case 36303:case 36311:case 36292:return LC}}function OC(A,e){A.uniform1fv(this.addr,e)}function BC(A,e){let t=En(e,this.size,2);A.uniform2fv(this.addr,t)}function IC(A,e){let t=En(e,this.size,3);A.uniform3fv(this.addr,t)}function RC(A,e){let t=En(e,this.size,4);A.uniform4fv(this.addr,t)}function NC(A,e){let t=En(e,this.size,4);A.uniformMatrix2fv(this.addr,!1,t)}function zC(A,e){let t=En(e,this.size,9);A.uniformMatrix3fv(this.addr,!1,t)}function FC(A,e){let t=En(e,this.size,16);A.uniformMatrix4fv(this.addr,!1,t)}function UC(A,e){A.uniform1iv(this.addr,e)}function kC(A,e){A.uniform2iv(this.addr,e)}function GC(A,e){A.uniform3iv(this.addr,e)}function jC(A,e){A.uniform4iv(this.addr,e)}function VC(A,e){A.uniform1uiv(this.addr,e)}function HC(A,e){A.uniform2uiv(this.addr,e)}function WC(A,e){A.uniform3uiv(this.addr,e)}function YC(A,e){A.uniform4uiv(this.addr,e)}function XC(A,e,t){let i=e.length,r=Dc(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Yx,r[s])}function QC(A,e,t){let i=e.length,r=Dc(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Qx,r[s])}function qC(A,e,t){let i=e.length,r=Dc(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||qx,r[s])}function ZC(A,e,t){let i=e.length,r=Dc(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Xx,r[s])}function KC(A){switch(A){case 5126:return OC;case 35664:return BC;case 35665:return IC;case 35666:return RC;case 35674:return NC;case 35675:return zC;case 35676:return FC;case 5124:case 35670:return UC;case 35667:case 35671:return kC;case 35668:case 35672:return GC;case 35669:case 35673:return jC;case 5125:return VC;case 36294:return HC;case 36295:return WC;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return qC;case 36289:case 36303:case 36311:case 36292:return ZC}}var JC=class{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.setValue=_C(e.type)}},$C=class{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.size=e.size,this.setValue=KC(e.type)}},AD=class{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let a=i[r];a.setValue(A,e[a.id],t)}}},_u=/(\w+)(\])?(\[|\.)?/g;function Cg(A,e){A.seq.push(e),A.map[e.id]=e}function eD(A,e,t){let i=A.name,r=i.length;for(_u.lastIndex=0;;){let s=_u.exec(i),a=_u.lastIndex,n=s[1],o=s[2]==="]",l=s[3];if(o&&(n=n|0),l===void 0||l==="["&&a+2===r){Cg(t,l===void 0?new JC(n,A,e):new $C(n,A,e));break}else{let u=t.map[n];u===void 0&&(u=new AD(n),Cg(t,u)),t=u}}}var wh=class{constructor(A,e){this.seq=[],this.map={};let t=A.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);eD(r,s,this)}}setValue(A,e,t,i){let r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){let i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){let a=e[r],n=t[a.id];n.needsUpdate!==!1&&a.setValue(A,n.value,i)}}static seqWithValue(A,e){let t=[];for(let i=0,r=A.length;i!==r;++i){let s=A[i];s.id in e&&t.push(s)}return t}};function Dg(A,e,t){let i=A.createShader(e);return A.shaderSource(i,t),A.compileShader(i),i}var tD=0;function iD(A,e){let t=A.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let n=a+1;i.push(`${n===e?">":" "} ${n}: ${t[a]}`)}return i.join(`
`)}function rD(A){switch(A){case nr:return["Linear","( value )"];case re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",A),["Linear","( value )"]}}function Pg(A,e,t){let i=A.getShaderParameter(e,35713),r=A.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+iD(A.getShaderSource(e),a)}else return r}function sD(A,e){let t=rD(e);return"vec4 "+A+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function aD(A,e){let t;switch(e){case pM:t="Linear";break;case fM:t="Reinhard";break;case mM:t="OptimizedCineon";break;case gM:t="ACESFilmic";break;case vM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+A+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nD(A){return[A.extensionDerivatives||!!A.envMapCubeUVHeight||A.bumpMap||A.tangentSpaceNormalMap||A.clearcoatNormalMap||A.flatShading||A.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(A.extensionFragDepth||A.logarithmicDepthBuffer)&&A.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",A.extensionDrawBuffers&&A.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(A.extensionShaderTextureLOD||A.envMap||A.transmission)&&A.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(po).join(`
`)}function oD(A){let e=[];for(let t in A){let i=A[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lD(A,e){let t={},i=A.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=A.getActiveAttrib(e,r),a=s.name,n=1;s.type===35674&&(n=2),s.type===35675&&(n=3),s.type===35676&&(n=4),t[a]={type:s.type,location:A.getAttribLocation(e,a),locationSize:n}}return t}function po(A){return A!==""}function Lg(A,e){return A.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(A,e){return A.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(A){return A.replace(hD,cD)}function cD(A,e){let t=$A[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yd(t)}var uD=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,dD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(A){return A.replace(dD,Zx).replace(uD,pD)}function pD(A,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Zx(A,e,t,i)}function Zx(A,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bg(A){let e="precision "+A.precision+` float;
precision `+A.precision+" int;";return A.precision==="highp"?e+=`
#define HIGH_PRECISION`:A.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:A.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fD(A){let e="SHADOWMAP_TYPE_BASIC";return A.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":A.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":A.shadowMapType===uo&&(e="SHADOWMAP_TYPE_VSM"),e}function mD(A){let e="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case $s:case Aa:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gD(A){let e="ENVMAP_MODE_REFLECTION";if(A.envMap)switch(A.envMapMode){case Aa:e="ENVMAP_MODE_REFRACTION";break}return e}function vD(A){let e="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case Ix:e="ENVMAP_BLENDING_MULTIPLY";break;case uM:e="ENVMAP_BLENDING_MIX";break;case dM:e="ENVMAP_BLENDING_ADD";break}return e}function yD(A){let e=A.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xD(A,e,t,i){let r=A.getContext(),s=t.defines,a=t.vertexShader,n=t.fragmentShader,o=fD(t),l=mD(t),u=gD(t),h=vD(t),c=yD(t),d=t.isWebGL2?"":nD(t),f=oD(s),m=r.createProgram(),p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[f].filter(po).join(`
`),p.length>0&&(p+=`
`),g=[d,f].filter(po).join(`
`),g.length>0&&(g+=`
`)):(p=[Bg(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),g=[d,Bg(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?$A.tonemapping_pars_fragment:"",t.toneMapping!==Dr?aD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$A.encodings_pars_fragment,sD("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),a=Yd(a),a=Lg(a,t),a=_g(a,t),n=Yd(n),n=Lg(n,t),n=_g(n,t),a=Og(a),n=Og(n),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+p+a,y=v+g+n,S=Dg(r,35633,x),w=Dg(r,35632,y);if(r.attachShader(m,S),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),A.debug.checkShaderErrors){let E=r.getProgramInfoLog(m).trim(),C=r.getShaderInfoLog(S).trim(),D=r.getShaderInfoLog(w).trim(),P=!0,z=!0;if(r.getProgramParameter(m,35714)===!1){P=!1;let O=Pg(r,S,"vertex"),G=Pg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+O+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(C===""||D==="")&&(z=!1);z&&(this.diagnostics={runnable:P,programLog:E,vertexShader:{log:C,prefix:p},fragmentShader:{log:D,prefix:g}})}r.deleteShader(S),r.deleteShader(w);let M;this.getUniforms=function(){return M===void 0&&(M=new wh(r,m)),M};let b;return this.getAttributes=function(){return b===void 0&&(b=lD(r,m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=tD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=w,this}var wD=0,bD=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){let e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){let e=this.materialCache.get(A);for(let t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){let e=this.materialCache;return e.has(A)===!1&&e.set(A,new Set),e.get(A)}_getShaderStage(A){let e=this.shaderCache;if(e.has(A)===!1){let t=new SD(A);e.set(A,t)}return e.get(A)}},SD=class{constructor(A){this.id=wD++,this.code=A,this.usedTimes=0}};function MD(A,e,t,i,r,s,a){let n=new of,o=new bD,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,c=r.vertexTextures,d=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,E,C,D,P){let z=D.fog,O=P.geometry,G=b.isMeshStandardMaterial?D.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),U=!!X&&X.mapping===$o?X.image.height:null,_=f[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,F=V!==void 0?V.length:0,R=0;O.morphAttributes.position!==void 0&&(R=1),O.morphAttributes.normal!==void 0&&(R=2),O.morphAttributes.color!==void 0&&(R=3);let B,k,W,Q;if(_){let J=qi[_];B=J.vertexShader,k=J.fragmentShader}else B=b.vertexShader,k=b.fragmentShader,o.update(b),W=o.getVertexShaderID(b),Q=o.getFragmentShaderID(b);let j=A.getRenderTarget(),tA=b.alphaTest>0,K=b.clearcoat>0,Z=b.iridescence>0;return{isWebGL2:u,shaderID:_,shaderName:b.type,vertexShader:B,fragmentShader:k,defines:b.defines,customVertexShaderID:W,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:P.isInstancedMesh===!0,instancingColor:P.isInstancedMesh===!0&&P.instanceColor!==null,supportsVertexTextures:c,outputEncoding:j===null?A.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:nr,map:!!b.map,matcap:!!b.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:U,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===RM,tangentSpaceNormalMap:b.normalMapType===Fx,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===re,clearcoat:K,clearcoatMap:K&&!!b.clearcoatMap,clearcoatRoughnessMap:K&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:K&&!!b.clearcoatNormalMap,iridescence:Z,iridescenceMap:Z&&!!b.iridescenceMap,iridescenceThicknessMap:Z&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===$a,alphaMap:!!b.alphaMap,alphaTest:tA,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:R,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:A.shadowMap.enabled&&C.length>0,shadowMapType:A.shadowMap.type,toneMapping:b.toneMapped?A.toneMapping:Dr,physicallyCorrectLights:A.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pi,flipSided:b.side===gt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)E.push(C),E.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(g(E,b),v(E,b),E.push(A.outputEncoding)),E.push(b.customProgramCacheKey),E.join()}function g(b,E){b.push(E.precision),b.push(E.outputEncoding),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.combine),b.push(E.vertexUvs),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){n.disableAll(),E.isWebGL2&&n.enable(0),E.supportsVertexTextures&&n.enable(1),E.instancing&&n.enable(2),E.instancingColor&&n.enable(3),E.map&&n.enable(4),E.matcap&&n.enable(5),E.envMap&&n.enable(6),E.lightMap&&n.enable(7),E.aoMap&&n.enable(8),E.emissiveMap&&n.enable(9),E.bumpMap&&n.enable(10),E.normalMap&&n.enable(11),E.objectSpaceNormalMap&&n.enable(12),E.tangentSpaceNormalMap&&n.enable(13),E.clearcoat&&n.enable(14),E.clearcoatMap&&n.enable(15),E.clearcoatRoughnessMap&&n.enable(16),E.clearcoatNormalMap&&n.enable(17),E.iridescence&&n.enable(18),E.iridescenceMap&&n.enable(19),E.iridescenceThicknessMap&&n.enable(20),E.displacementMap&&n.enable(21),E.specularMap&&n.enable(22),E.roughnessMap&&n.enable(23),E.metalnessMap&&n.enable(24),E.gradientMap&&n.enable(25),E.alphaMap&&n.enable(26),E.alphaTest&&n.enable(27),E.vertexColors&&n.enable(28),E.vertexAlphas&&n.enable(29),E.vertexUvs&&n.enable(30),E.vertexTangents&&n.enable(31),E.uvsVertexOnly&&n.enable(32),E.fog&&n.enable(33),b.push(n.mask),n.disableAll(),E.useFog&&n.enable(0),E.flatShading&&n.enable(1),E.logarithmicDepthBuffer&&n.enable(2),E.skinning&&n.enable(3),E.morphTargets&&n.enable(4),E.morphNormals&&n.enable(5),E.morphColors&&n.enable(6),E.premultipliedAlpha&&n.enable(7),E.shadowMapEnabled&&n.enable(8),E.physicallyCorrectLights&&n.enable(9),E.doubleSided&&n.enable(10),E.flipSided&&n.enable(11),E.useDepthPacking&&n.enable(12),E.dithering&&n.enable(13),E.specularIntensityMap&&n.enable(14),E.specularColorMap&&n.enable(15),E.transmission&&n.enable(16),E.transmissionMap&&n.enable(17),E.thicknessMap&&n.enable(18),E.sheen&&n.enable(19),E.sheenColorMap&&n.enable(20),E.sheenRoughnessMap&&n.enable(21),E.decodeVideoTexture&&n.enable(22),E.opaque&&n.enable(23),b.push(n.mask)}function x(b){let E=f[b.type],C;if(E){let D=qi[E];C=Sn.clone(D.uniforms)}else C=b.uniforms;return C}function y(b,E){let C;for(let D=0,P=l.length;D<P;D++){let z=l[D];if(z.cacheKey===E){C=z,++C.usedTimes;break}}return C===void 0&&(C=new xD(A,E,b,s),l.push(C)),C}function S(b){if(--b.usedTimes===0){let E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function w(b){o.remove(b)}function M(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:M}}function ED(){let A=new WeakMap;function e(s){let a=A.get(s);return a===void 0&&(a={},A.set(s,a)),a}function t(s){A.delete(s)}function i(s,a,n){A.get(s)[a]=n}function r(){A=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function TD(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.material.id!==e.material.id?A.material.id-e.material.id:A.z!==e.z?A.z-e.z:A.id-e.id}function Ig(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.z!==e.z?e.z-A.z:A.id-e.id}function Rg(){let A=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,c,d,f,m,p){let g=A[e];return g===void 0?(g={id:h.id,object:h,geometry:c,material:d,groupOrder:f,renderOrder:h.renderOrder,z:m,group:p},A[e]=g):(g.id=h.id,g.object=h,g.geometry=c,g.material=d,g.groupOrder=f,g.renderOrder=h.renderOrder,g.z=m,g.group=p),e++,g}function n(h,c,d,f,m,p){let g=a(h,c,d,f,m,p);d.transmission>0?i.push(g):d.transparent===!0?r.push(g):t.push(g)}function o(h,c,d,f,m,p){let g=a(h,c,d,f,m,p);d.transmission>0?i.unshift(g):d.transparent===!0?r.unshift(g):t.unshift(g)}function l(h,c){t.length>1&&t.sort(h||TD),i.length>1&&i.sort(c||Ig),r.length>1&&r.sort(c||Ig)}function u(){for(let h=e,c=A.length;h<c;h++){let d=A[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:n,unshift:o,finish:u,sort:l}}function CD(){let A=new WeakMap;function e(i,r){let s;return A.has(i)===!1?(s=new Rg,A.set(i,[s])):r>=A.get(i).length?(s=new Rg,A.get(i).push(s)):s=A.get(i)[r],s}function t(){A=new WeakMap}return{get:e,dispose:t}}function DD(){let A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new GA};break;case"SpotLight":t={position:new T,direction:new T,color:new GA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new GA,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new GA,groundColor:new GA};break;case"RectAreaLight":t={color:new GA,position:new T,halfWidth:new T,halfHeight:new T};break}return A[e.id]=t,t}}}function PD(){let A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return A[e.id]=t,t}}}var LD=0;function _D(A,e){return(e.castShadow?1:0)-(A.castShadow?1:0)}function OD(A,e){let t=new DD,i=PD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new T);let s=new T,a=new TA,n=new TA;function o(u,h){let c=0,d=0,f=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let m=0,p=0,g=0,v=0,x=0,y=0,S=0,w=0;u.sort(_D);let M=h!==!0?Math.PI:1;for(let E=0,C=u.length;E<C;E++){let D=u[E],P=D.color,z=D.intensity,O=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=P.r*z*M,d+=P.g*z*M,f+=P.b*z*M;else if(D.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(D.sh.coefficients[X],z);else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){let U=D.shadow,_=i.get(D);_.shadowBias=U.bias,_.shadowNormalBias=U.normalBias,_.shadowRadius=U.radius,_.shadowMapSize=U.mapSize,r.directionalShadow[m]=_,r.directionalShadowMap[m]=G,r.directionalShadowMatrix[m]=D.shadow.matrix,y++}r.directional[m]=X,m++}else if(D.isSpotLight){let X=t.get(D);if(X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(P).multiplyScalar(z*M),X.distance=O,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,D.castShadow){let U=D.shadow,_=i.get(D);_.shadowBias=U.bias,_.shadowNormalBias=U.normalBias,_.shadowRadius=U.radius,_.shadowMapSize=U.mapSize,r.spotShadow[g]=_,r.spotShadowMap[g]=G,r.spotShadowMatrix[g]=D.shadow.matrix,w++}r.spot[g]=X,g++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(P).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=X,v++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*M),X.distance=D.distance,X.decay=D.decay,D.castShadow){let U=D.shadow,_=i.get(D);_.shadowBias=U.bias,_.shadowNormalBias=U.normalBias,_.shadowRadius=U.radius,_.shadowMapSize=U.mapSize,_.shadowCameraNear=U.camera.near,_.shadowCameraFar=U.camera.far,r.pointShadow[p]=_,r.pointShadowMap[p]=G,r.pointShadowMatrix[p]=D.shadow.matrix,S++}r.point[p]=X,p++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(z*M),X.groundColor.copy(D.groundColor).multiplyScalar(z*M),r.hemi[x]=X,x++}}v>0&&(e.isWebGL2||A.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=yA.LTC_FLOAT_1,r.rectAreaLTC2=yA.LTC_FLOAT_2):A.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=yA.LTC_HALF_1,r.rectAreaLTC2=yA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=f;let b=r.hash;(b.directionalLength!==m||b.pointLength!==p||b.spotLength!==g||b.rectAreaLength!==v||b.hemiLength!==x||b.numDirectionalShadows!==y||b.numPointShadows!==S||b.numSpotShadows!==w)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=w,b.directionalLength=m,b.pointLength=p,b.spotLength=g,b.rectAreaLength=v,b.hemiLength=x,b.numDirectionalShadows=y,b.numPointShadows=S,b.numSpotShadows=w,r.version=LD++)}function l(u,h){let c=0,d=0,f=0,m=0,p=0,g=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){let y=u[v];if(y.isDirectionalLight){let S=r.directional[c];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),c++}else if(y.isSpotLight){let S=r.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let S=r.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),n.identity(),a.copy(y.matrixWorld),a.premultiply(g),n.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(n),S.halfHeight.applyMatrix4(n),m++}else if(y.isPointLight){let S=r.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let S=r.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:r}}function Ng(A,e){let t=new OD(A,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function n(u){r.push(u)}function o(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:o,setupLightsView:l,pushLight:a,pushShadow:n}}function BD(A,e){let t=new WeakMap;function i(s,a=0){let n;return t.has(s)===!1?(n=new Ng(A,e),t.set(s,[n])):a>=t.get(s).length?(n=new Ng(A,e),t.get(s).push(n)):n=t.get(s)[a],n}function r(){t=new WeakMap}return{get:i,dispose:r}}var Kx=class extends bn{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}},ID=class extends bn{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}},RD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ND=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`?(i[i.length-1]+=r,r="",s===`
`&&i.push("")):e.getTextWidth(i[i.length-1]+r,A)>A.width&&(i[i.length-1].length&&i.push(""),e.getTextWidth(i[i.length-1]+r,A)>A.width&&(r.length===1?(i[i.length-1]+=r,r=""):(i[i.length-1]+=r.slice(0,-1),r=r[r.length-1],i.push(""))));return i[i.length-1]+=r,i}var qw,tm=new Promise(A=>{qw=A}),K0=!1;async function sU(){if(K0)return;let A="https://unpkg.com/@splinetool/modelling-wasm@0.9.178/build",[e,t]=await Promise.all([Mc(()=>import("./process.5e26a63c.js"),[]),fetch(`${A}/process.wasm`).then(s=>s.arrayBuffer())]),i=e.default,r=await i({wasmBinary:t});qw(r),K0=!0}function pc(A,e,t){let i={parameters:A,type:A.type};if(A.type==="VectorGeometry"){let s=ke.createFromState(A.shape,A.width,A.height);i.shape=s}else if(A.type==="NonParametricGeometry")A.data.groups&&A.data.groups.forEach(s=>{var a;return s.materialIndex=Math.max((a=s.materialIndex)!=null?a:0,0)}),i.geometry=new c1().parse(A);else{if(A.type==="SubdivGeometry")return new Ct(A,t);if(A.type==="TextGeometry")return new Qw(A,e)}let r;try{r=iy(i)}catch(s){console.error(s)}if(!r){let s=ke.createFromState($h.defaultData(),100,100);i.shape=s,r=iy(i)}return r}var aU=new TA;function Rp(A,e,t,i){let r=A.position.array,s=A.normal.array,a=aU.makeScale(e,t,i).invert().elements,n,o,l;for(var u=0,h=r.length;u<h;u+=3)r[u]*=e,r[u+1]*=t,r[u+2]*=i,n=s[u],o=s[u+1],l=s[u+2],s[u]=a[0]*n+a[4]*o+a[8]*l,s[u+1]=a[1]*n+a[5]*o+a[9]*l,s[u+2]=a[2]*n+a[6]*o+a[10]*l;A.position.needsUpdate=!0,A.normal.needsUpdate=!0}var ih=new qe,_a=new T,kA;tm.then(A=>{kA=A});var J0=new Float32Array([10,10,0,-10,10,0,-10,-10,0,10,-10,0]),$0=new Uint32Array([0,1,2,3]),Ay=new Uint8Array([4]),Ct=class extends qA{constructor(A,e){super(),this.data=A,this.flatShading=e,this.subdivPointer=0,this.rebuild(),this.freeSubdivPointer()}mutateDirectlyScaleBaked(A,e){this.freeSubdivPointer();let t=this.data.scaleBaked,i=Zs.div(e,t);this.subdividedGeometry&&Rp(this.subdividedGeometry.attributes,...i),this.originalGeometry&&Rp(this.originalGeometry.attributes,...i),this.data=A;let r=this.userData.parameters;this.userData.parameters={width:r.width*i[0],height:r.height*i[1],depth:r.depth*i[2]},this.originalGeometry.boundingSphere.center.multiply(_a.fromArray(i));let s=_a.set(r.width,r.height,r.depth).length();this.originalGeometry.boundingSphere.radius=s/2}ensureSubdivPointer(){return this.subdivPointer===0&&this.rebuild(),this.subdivPointer}rebuild(){var r;let A,e,t;try{({originalGeometry:A,subdividedGeometry:e,subdivPointer:t}=Ct.build(this.data,void 0,!this.flatShading,void 0))}catch{A=new or(100,100,100),t=0}this.subdivPointer=t,this.originalGeometry=A,this.subdividedGeometry=e!=null?e:void 0;let i=(r=this.subdividedGeometry)!=null?r:this.originalGeometry;Object.assign(this,i),this.calcBoundingBox()}freeSubdivPointer(){this.subdivPointer&&(Ct.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0)}dispose(){super.dispose(),this.freeSubdivPointer()}calcBoundingBox(){let A=this.originalGeometry;A.boundingSphere===null&&(A.boundingSphere=new gi,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=A.boundingSphere));let e=A.attributes.position,t=A.boundingSphere.center;ih.setFromBufferAttribute(e),ih.getCenter(t),A.boundingSphere.radius=t.distanceTo(ih.max),isNaN(A.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),ih.getSize(_a);let i={width:_a.x,height:_a.y,depth:_a.z};return this.userData.parameters=i,i}static build(A,e,t,i){var o;let r,s,a,n=(o=A==null?void 0:A.phongAngle)!=null?o:35;t===!1&&(n=-1),e&&(kA.free_bvh(e),kA.free_subdivision_surface(e));try{r=Ct.allocate(A,i)}catch(l){console.error(l,A),r=Ct.allocate({positionWASM:J0,indexWASM:$0,verticesPerFaceWASM:Ay},i)}if(kA.set_destination_refinement_level(r,0),s=Ct.buildLevel(r,!0,n),A.subdivisions>0)try{kA.set_destination_refinement_level(r,A.subdivisions),a=Ct.buildLevel(r,!1,n)}catch{try{kA.set_destination_refinement_level(r,A.subdivisions-1),a=Ct.buildLevel(r,!1,n)}catch{a=null}}else a=null;return{subdivPointer:r,originalGeometry:s,subdividedGeometry:a}}static primitiveToQuads(A,e,t){A.widthSegments>16&&(A.widthSegments=16),A.heightSegments>16&&(A.heightSegments=16),A.depthSegments>16&&(A.depthSegments=16),A.radialSegments>16&&(A.radialSegments=16),A.type==="DodecahedronGeometry"&&(A.detail=0);let i=A.shape!==void 0?e.geometry:pc(A,t,!1),r,s,a,n;({positions:r,triIndices:n}=im(i.getAttribute("position"),i.getIndex()));let o;if(A.type==="CylinderGeometry"&&A.cornerRadius===0&&A.hollow===0&&A.openEnded===!1){let l=A.radialSegments*A.heightSegments*3*2,u=l+A.radialSegments*3;o=[l,u]}return{indices:s,verticesPerFace:a}=Zw(r,n,i,o),{positions:r,indices:s,verticesPerFace:a}}static allocate(A,e){var x;let t,i,r,s=[],a=[];A.positionWASM&&A.positionWASM.length>0?(t=A.positionWASM,i=A.indexWASM,r=A.verticesPerFaceWASM):(t=J0,i=$0,r=Ay);let n=t.length,o=i.length,l=r.length,u=t.length+s.length+a.length,h=i.length+r.length,c=u*Float32Array.BYTES_PER_ELEMENT+h*Uint32Array.BYTES_PER_ELEMENT,d=u*Float32Array.BYTES_PER_ELEMENT,f=kA._malloc(c),m=new Float32Array(kA.HEAPF32.buffer,f,u),p=new Uint32Array(kA.HEAPU32.buffer,f+d,h);m.set(t,0),m.set(s,t.length),m.set(a,t.length+s.length),p.set(i,0),p.set(r,i.length);let g;(x=A==null?void 0:A.scaleBaked)!=null&&x.some(y=>y!==1)&&(g=new TA().makeScale(...A.scaleBaked)),e&&(g?g.premultiply(e):g=e);let v=g?kA.alloc_subdivision_surface2(f,n,f+d,o,f+d+i.length*Uint32Array.BYTES_PER_ELEMENT,l,g.elements):kA.alloc_subdivision_surface(f,n,f+d,o,f+d+i.length*Uint32Array.BYTES_PER_ELEMENT,l);return kA._free(f),v}static buildLevel(A,e,t,i,r){let s=r?kA.get_mesh_data2(A,e?kA.Level.CONTROL:kA.Level.REFINED,t,r.elements):kA.get_mesh_data(A,e?kA.Level.CONTROL:kA.Level.REFINED,t),a=8,n=kA.HEAPU32.subarray(s>>2,(s>>2)+a),o=n.subarray(4,4+4),l=0,u=kA.HEAPU32[n[l]>>2],h=kA.HEAPF32.subarray(u>>2,(u>>2)+o[l]);l++;let c=kA.HEAPU32[n[l]>>2],d=kA.HEAPF32.subarray(c>>2,(c>>2)+o[l]);l++;let f=kA.HEAPU32[n[l]>>2],m=kA.HEAPU32.subarray(f>>2,(f>>2)+o[l]);l++;let p=kA.HEAPU32[n[l]>>2],g=kA.HEAPU32.subarray(p>>2,(p>>2)+o[l]);if(l++,i===void 0){let v=new qA;if(v.setIndex(new Mo(g,1)),v.setAttribute("position",new LA(h,3)),v.setAttribute("normal",new LA(d,3)),e){v.setAttribute("faceMap",new Mo(m,1));let x=new Float32Array(d.length/3*4).fill(0);v.setAttribute("color",new JA(x,4))}return kA.free_mesh_data(s),v.userData.type="SubdivGeometry",v}i.getAttribute("position").copyArray(h),i.getAttribute("normal").copyArray(d),i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0,kA.free_mesh_data(s)}static freeSubdivPointer(A){kA.free_bvh(A),kA.free_subdivision_surface(A)}static buildControlCageWireframe(A,e,t){let i=kA.get_wireframe_data_for_base_level(A),r=4,s=kA.HEAPU32.subarray(i>>2,(i>>2)+r),a=s.subarray(2,2+2),n=0,o=kA.HEAPU32[s[n]>>2],l=kA.HEAPF32.subarray(o>>2,(o>>2)+a[n]);n++;let u=kA.HEAPU32[s[n]>>2],h=kA.HEAPU32.subarray(u>>2,(u>>2)+a[n]);if(e===void 0){let c=new qA;c.setAttribute("position",new LA(l,3));let d=new Float32Array(l.length);for(let f=0,m=l.length;f<m;)d[f++]=t.r,d[f++]=t.g,d[f++]=t.b;return c.setAttribute("color",new JA(d,3)),c.setIndex(new Mo(h,1)),kA.free_wireframe_data_for_base_level(i),c}e.getAttribute("position").copyArray(l),e.attributes.position.needsUpdate=!0,kA.free_wireframe_data_for_base_level(i)}static updateCollabMesh(A,e,t){let i=e===0;i||kA.set_destination_refinement_level(A,e);let r=t?kA.get_topological_data2(A,i?kA.Level.CONTROL:kA.Level.REFINED,t.elements):kA.get_topological_data(A,i?kA.Level.CONTROL:kA.Level.REFINED),s=6,a=kA.HEAPU32.subarray(r>>2,(r>>2)+s),n=a.subarray(3,3+3),o=0,l=kA.HEAPU32[a[o]>>2],u=new Float32Array(kA.HEAPF32.subarray(l>>2,(l>>2)+n[o]));o++;let h=kA.HEAPU32[a[o]>>2],c=new Uint32Array(kA.HEAPU32.subarray(h>>2,(h>>2)+n[o]));o++;let d=kA.HEAPU32[a[o]>>2],f=new Uint8Array(kA.HEAPU32.subarray(d>>2,(d>>2)+n[o]));return kA.free_topological_data(r),{positions:u,indices:c,verticesPerFace:f}}},ey=["getX","getY","getZ"];function im(A,e){let t={},i=e?e.count:A.count,r=0,s=[],a=[],n=1e4;for(let l=0;l<i;l++){let u=e?e.getX(l):l,h="";for(let c=0;c<3;c++)h+=`${~~(A[ey[c]](u)*n)},`;if(h in t)s.push(t[h]);else{for(let c=0;c<3;c++)a.push(A[ey[c]](u));t[h]=r,s.push(r),r++}}let o=[];for(let l=0;l<s.length;l+=3)s[l]===s[l+1]||s[l]===s[l+2]||s[l+1]===s[l+2]||o.push(s[l],s[l+1],s[l+2]);return{positions:a,triIndices:o}}var rh=new T,ld=new T,hd=new T,cd=new T;function Zw(A,e,t,i){var a;let r=[],s=[];if(t.userData.shape!==void 0&&t.userData.parameters.depth===0&&t.userData.shape.shapeHoles.length===0){let n=t.userData.shape.extractShapePointsToFlatArray([]),o=t.userData.parameters.spikes;if(t.userData.type==="EllipseGeometry"&&o<=24&&o%4===0&&t.userData.parameters.angle>=360){let h=n.length/2/o;n=n.filter((c,d)=>Math.floor(d/2)%h===0)}let l=0;for(let h=0;h<n.length;h+=2)l+=(n[h]-n[(h===0?n.length:h)-2])*(n[h+1]+n[(h===0?n.length:h)-1]);A.length=0;let u=0;if(l<0)for(let h=0;h<n.length;h+=2)A.push(n[h],n[h+1],0),r.push(u++);else for(let h=n.length-2;h>=0;h-=2)A.push(n[h],n[h+1],0),r.push(u++);return s.push(u),{indices:r,verticesPerFace:s}}for(let n=0,o=(a=t.capStartIndex)!=null?a:e.length;n<o;)if(e[n+1]===e[n+3]&&e[n+2]===e[n+5]||e[n+0]===e[n+3]&&e[n+2]===e[n+4]){rh.set(A[e[n]*3],A[e[n]*3+1],A[e[n]*3+2]),ld.set(A[e[n+1]*3],A[e[n+1]*3+1],A[e[n+1]*3+2]),hd.set(A[e[n+4]*3],A[e[n+4]*3+1],A[e[n+4]*3+2]),cd.set(A[e[n+5]*3],A[e[n+5]*3+1],A[e[n+5]*3+2]),ld.sub(rh).normalize(),hd.sub(rh).normalize(),cd.sub(rh).normalize();let l=ld.cross(hd).dot(cd);Math.abs(l)>.005||i&&i.some((u,h)=>h%2===1?!1:n>=i[h]&&n<i[h+1])?(r.push(e[n],e[n+1],e[n+2]),s.push(3),n+=3):(r.push(e[n],e[n+1],e[n+4],e[n+5]),s.push(4),n+=6)}else r.push(e[n],e[n+1],e[n+2]),s.push(3),n+=3;if(t.capStartIndex!==void 0){let n=[],o=[],l=0,u=new Float32Array([t.userData.parameters.depth])[0];for(let h=0,c=0;h<A.length;h+=3,c++)A[h+2]===0&&(n.push(c),l++),A[h+2]===u&&o.push(c);if(t.userData.parameters.extrudeBevelSize===0){let h=o[0];o[0]=o[1],o[1]=h}n.reverse(),r.push(...n,...o),s.push(l,l)}return{indices:r,verticesPerFace:s}}var $r={};kS($r,{calcBoolean:()=>cU,calcBooleanTopological:()=>hU,freeMeshSet:()=>pU,getMeshSet:()=>uU,transformMeshSet:()=>dU});var Kw,nU=new Promise(A=>{Kw=A}),ty=!1;async function oU(){if(ty)return;let A="https://unpkg.com/@splinetool/boolean-wasm@0.9.178/build",[e,t]=await Promise.all([Mc(()=>import("./boolean.1f3172d1.js"),[]),fetch(`${A}/boolean.wasm`).then(s=>s.arrayBuffer())]),i=e.default,r=await i({wasmBinary:t});Kw(r),ty=!0}var se,on;nU.then(A=>se=A);function lU(A,e,t){let i,{positions:r,triIndices:s}=im(A.getAttribute("position"),A.getIndex()),a;if(e&&t){let{indices:n,verticesPerFace:o}=Zw(r,s,A);a=o.length,i=[];for(let l=0,u=0;l<a;l++){i.push(o[l]);for(let h=0;h<o[l];h++)i.push(n[u++])}}else{let n=s.length;i=Array(n+n/3),a=0;for(let o=0,l=0;l<i.length;)i[l++]=3,a++,i[l++]=s[o++],i[l++]=s[o++],i[l++]=s[o++]}return{positions:r,faceIndices:i,nFaces:a}}function Jw(A){let e=A.length,t=e*Uint32Array.BYTES_PER_ELEMENT,i=e*Float32Array.BYTES_PER_ELEMENT,r=Number.isInteger(A[0])?t:i,s=se._malloc(r);return(Number.isInteger(A[0])?new Uint32Array(se.HEAPU32.buffer,s,e):new Float32Array(se.HEAPF32.buffer,s,e)).set(A,0),s}function $w(A){switch(A){case 0:return se.OP.UNION;case 1:return se.OP.INTERSECTION;case 2:return se.OP.A_MINUS_B;case 3:return se.OP.B_MINUS_A;case 4:return se.OP.SYMMETRIC_DIFFERENCE;case 5:return se.OP.ALL;default:throw new Error("Unknown boolean operation "+A)}}function hU(A,e){on===void 0&&(on=se.init_csg());let t=Jw(A),i=se.csg_calc_topological(on,t,A.length,$w(e));se._free(t);let r=6,s=se.HEAPU32.subarray(i>>2,(i>>2)+r),a=s.subarray(3,3+3),n=0,o=se.HEAPU32[s[n]>>2],l=new Float32Array(se.HEAPF32.subarray(o>>2,(o>>2)+a[n]));n++;let u=se.HEAPU32[s[n]>>2],h=new Uint32Array(se.HEAPU32.subarray(u>>2,(u>>2)+a[n]));n++;let c=se.HEAPU32[s[n]>>2],d=new Uint8Array(se.HEAPU32.subarray(c>>2,(c>>2)+a[n]));return se.free_mesh_data(i),{positions:l,indices:h,verticesPerFace:d}}function cU(A,e,t,i){on===void 0&&(on=se.init_csg());let r=Jw(A),s=se.csg_calc(on,r,A.length,i,$w(e));se._free(r);let a=5,n=se.HEAPU32.subarray(s>>2,(s>>2)+a),o=n.subarray(2,2+3),l=0,u=se.HEAPU32[n[l]>>2],h=se.HEAPF32.subarray(u>>2,(u>>2)+o[l]);l++;let c=se.HEAPU32[n[l]>>2],d=se.HEAPF32.subarray(c>>2,(c>>2)+o[l]);l++;let f=o[l];t.setAttribute("position",new LA(h,3)),t.setAttribute("normal",new LA(d,3));let m=se.HEAPF32.subarray((s>>2)+5,(s>>2)+5+6);return t.boundingSphere===null&&(t.boundingSphere=new gi),t.boundingSphere.center.set(m[0],m[1],m[2]),t.boundingSphere.radius=(m[3]**2+m[4]**2+m[5]**2)**.5,t.userData.parameters={width:m[3]*2,height:m[4]*2,depth:m[5]*2},se.free_mesh_data(s),f}function uU(A,e,t){if(se===void 0)return-1;let i,r,s;if(e&&A.userData.positions!==void 0){let m=A.userData;s=m.verticesPerFace.length,i=m.positions,r=Array(m.verticesPerFace.reduce((p,g)=>p+g,0)+s);for(let p=0,g=0,v=0;p<m.verticesPerFace.length;p++){r[v++]=m.verticesPerFace[p];for(let x=0;x<m.verticesPerFace[p];x++)r[v++]=m.indices[g++]}}else({positions:i,faceIndices:r,nFaces:s}=lU(A,e,t));let a=i.length,n=r.length,o=i.length,l=r.length,u=o*Float32Array.BYTES_PER_ELEMENT+l*Uint32Array.BYTES_PER_ELEMENT,h=o*Float32Array.BYTES_PER_ELEMENT,c=se._malloc(u),d=new Float32Array(se.HEAPF32.buffer,c,o),f=new Uint32Array(se.HEAPU32.buffer,c+h,l);return d.set(i,0),f.set(r,0),se.get_csg_mesh(c,a,c+h,n,s)}function dU(A,e){se.transform_csg_mesh(A,e.elements)}function pU(A){se.free_csg_mesh(A)}var fU={ConeGeometry:Z4,CubeGeometry:K4,CylinderGeometry:q4,DodecahedronGeometry:$4,EllipseGeometry:CF,HelixGeometry:_F,IcosahedronGeometry:OF,LatheGeometry:BF,NonParametricGeometry:UF,PolygonGeometry:kF,PyramidGeometry:GF,RectangleGeometry:HF,SphereGeometry:WF,PlaneGeometry:YF,BackdropGeometry:XF,StarGeometry:qF,TextFrameGeometry:ZF,TorusGeometry:KF,TorusKnotGeometry:$F,TriangleGeometry:AU,VectorGeometry:oa},iy=A=>fU[A.type].create(A);function eo(A){return A!==null&&"booleanOp"in A}var Ab=class extends Bw(Qt){constructor(){super(...arguments),this.booleanMeshSetAddress=-1,this.booleanWasTransformed=!1,this.booleanMatrixInvOld=new TA}updateVisible(){super.updateVisible(),this.visible=!eo(this.parent)&&this.visible,eo(this.parent)&&this.parent.invalidateDownstreamBooleanData()}freeBooleanPointer(){this.booleanMeshSetAddress!==-1&&($r.freeMeshSet(this.booleanMeshSetAddress),this.booleanMeshSetAddress=-1)}invalidateDownstreamBooleanData(A=!1){return A?this.booleanWasTransformed=!0:this.freeBooleanPointer(),eo(this.parent)?this.parent.invalidateDownstreamBooleanData():this}invalidateUpstreamBooleanData(){this.freeBooleanPointer();for(let A of this.children)A instanceof Ab&&(A.freeBooleanPointer(),eo(A)&&A.invalidateUpstreamBooleanData())}updateTransformState(A){let e=super.updateTransformState(A);return e&&eo(this.parent)&&this.invalidateDownstreamBooleanData(!0),e}},sh=new qe;function eb(A,e=0,t=A.count,i,r){let s=1/0,a=1/0,n=1/0,o=-1/0,l=-1/0,u=-1/0;for(let h=e;h<t;h++){let c=A.getX(h),d=A.getY(h),f=A.getZ(h);c<s&&(s=c),d<a&&(a=d),f<n&&(n=f),c>o&&(o=c),d>l&&(l=d),f>u&&(u=f)}sh.min.set(s,a,n),sh.max.set(o,l,u),sh.getCenter(i),sh.getSize(r).multiplyScalar(.5)}var mU=new qA,gU=new Tc,Ai=class extends Ab{constructor(A,e){super(mU,gU),this.super_Entity(A,e)}updateState(A,e){this.updateState_Entity(A,e)}updateEntityBoxSize(A,e){let t=this.geometry.getAttribute("position");t!==void 0?eb(t,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:t.count,A,e):super.updateEntityBoxSize(A,e)}},ry=class{constructor(A){A=A!=null?A:{},this.name=A.name,this.type=A.type,this.node=A.node,this.size=A.size,this.needsUpdate=A.needsUpdate}get value(){return this.node.value}set value(A){this.node.value=A}},xs=class{constructor(A){this.hashProperties=void 0,this.isNode=!0,this.shortcuts={},this.uuid=ae.generateUUID(),this.type=A,this.name=""}analyze(A,e){e=e!=null?e:{},A.analyzing=!0,this.build(A.addFlow(e.slot,e.cache,e.context),"v4"),A.clearVertexNodeCode(),A.clearFragmentNodeCode(),A.removeFlow(),A.analyzing=!1}analyzeAndFlow(A,e,t){return t=t!=null?t:{},this.analyze(A,t),this.flow(A,e,t)}flow(A,e,t){t=t!=null?t:{},A.addFlow(t.slot,t.cache,t.context);let i={result:this.build(A,e),code:A.clearNodeCode(),extra:A.context.extra};return A.removeFlow(),i}build(A,e,t){e=e!=null?e:this.getType(A,e);let i=A.getNodeData(t!=null?t:this);return A.analyzing&&this.appendDepsNode(A,i,e),A.nodes.indexOf(this)===-1&&A.nodes.push(this),this.updateFrame!==void 0&&A.updaters.indexOf(this)===-1&&A.updaters.push(this),this.generate(A,e,t)}updateFrame(A){}generateReadonly(A,e,t,i,r,s){return""}generate(A,e,t,i,r){return""}parse(A,e,t,i){}appendDepsNode(A,e,t){e.deps=(e.deps||0)+1;let i=A.getTypeLength(t);(i>(e.outputMax||0)||this.getType(A,t))&&(e.outputMax=i,e.output=t)}setName(A){this.name=A}getName(){return this.name}getType(A,e){return e==="sampler2D"||e==="samplerCube"?e:this.type}getHash(){let A="{",e,t;for(e in this)t=this[e],t instanceof xs&&(A+='"'+e+'":'+t.getHash()+",");if(this.hashProperties)for(let i=0;i<this.hashProperties.length;i++)e=this.hashProperties[i],t=this[e],A+='"'+e+'":"'+String(t)+'",';return A+='"id":"'+this.uuid+'"}',A}},vU=class{constructor(){this.nodes={},this.keywords={}}add(A){this.nodes[A.name]=A}addKeyword(A,e,t){t=t!==void 0?t:!0,this.keywords[A]={callback:e,cache:t}}remove(A){delete this.nodes[A.name]}removeKeyword(A){delete this.keywords[A]}get(A){return this.nodes[A]}getKeyword(A,e){return this.keywords[A].callback(e)}getKeywordData(A){return this.keywords[A]}contains(A){return this.nodes[A]!==void 0}containsKeyword(A){return this.keywords[A]!==void 0}},It=new vU,Se=class extends xs{constructor(A,e){super(A),this.scope="",e=e!=null?e:{},this.shared=e.shared!==void 0?e.shared:!0,this.unique=e.unique!==void 0?e.unique:!1}build(A,e,t,i){if(e=e!=null?e:this.getType(A),this.getShared(A,e)){let r=this.getUnique(A,e);r&&this.uuid===void 0&&(this.uuid=ae.generateUUID()),t=A.getUUID(t!=null?t:this.getUUID(),!r);let s=A.getNodeData(t),a=s.output||this.getType(A);if(A.analyzing)return(s.deps||0)>0||this.getLabel()?(this.appendDepsNode(A,s,e),this.generate(A,e,t)):super.build(A,e,t);if(r)return s.name=s.name||super.build(A,e,t),s.name;if(!this.getLabel()&&(!this.getShared(A,a)||A.context.ignoreCache||s.deps===1))return super.build(A,e,t);t=this.getUUID(!1);let n=this.getTemp(A,t);if(n)return A.format(n,a,e);{n=super.generate(A,e,t,s.output,i);let o=this.generate(A,a,t);return A.addNodeCode(n+" = "+o+";"),A.format(n,a,e)}}return super.build(A,e,t)}getShared(A,e){return e!=="sampler2D"&&e!=="samplerCube"&&this.shared}getUnique(A,e){return this.unique}setLabel(A){return this.label=A,this}getLabel(){return this.label}getUUID(A){let e=this.uuid;return typeof this.scope=="string"&&(e=this.scope+"-"+e),e}getTemp(A,e){e=e||this.uuid;let t=A.getVars()[e];return t?t.name:void 0}generate(A,e,t,i,r){return this.getShared(A,e)||console.error("TempNode is not shared"),t=t!=null?t:this.uuid,A.getTempVar(t,i!=null?i:this.getType(A),r,this.getLabel()).name}},ei=class extends Se{constructor(A,e){e=e!=null?e:{},e.shared=e.shared!==void 0?e.shared:!1,super(A,e),this.readonly=!1}setReadonly(A){return this.readonly=A,this.hashProperties=this.readonly?["value"]:void 0,this}getReadonly(){return this.readonly}generate(A,e,t,i,r,s){t=A.getUUID(t!=null?t:this.getUUID()),i=i!=null?i:this.getType(A);let a=A.getNodeData(t);return this.getReadonly()&&this.generateReadonly!==void 0?this.generateReadonly(A,e,t,i,r,s):A.isShader("vertex")?(a.vertex||(a.vertex=A.createVertexUniform(i,this,r,s,this.getLabel())),A.format(a.vertex.name,i,e)):(a.fragment||(a.fragment=A.createFragmentUniform(i,this,r,s,this.getLabel())),A.format(a.fragment.name,i,e))}},li=class extends ei{constructor(A=0,e){super("v2"),this.nodeType="Vector2",this.value=A instanceof H?A:new H(A,e)}get x(){return this.value.x}set x(A){this.value.x=A}get y(){return this.value.y}set y(A){this.value.y=A}generateReadonly(A,e,t,i,r,s){return A.format("vec2("+this.value.x+", "+this.value.y+")",i,e)}},ai=class extends ei{constructor(A=0,e,t){super("v3"),this.nodeType="Vector3",this.value=A instanceof T?A:new T(A,e,t)}get x(){return this.value.x}set x(A){this.value.x=A}get y(){return this.value.y}set y(A){this.value.y=A}get z(){return this.value.z}set z(A){this.value.z=A}generateReadonly(A,e,t,i,r,s){return A.format("vec3("+this.value.x+", "+this.value.y+", "+this.value.z+")",i,e)}},$t=class extends GA{constructor(A,e,t,i){super(A,e,t),this.isColorA=!0,this.a=i}setRGBA(A,e,t,i){super.setRGB(A,e,t),this.a=i}copy(A){return super.copy(A),this.a="a"in A?A.a:1,this}clone(){return new this.constructor(this.r,this.g,this.b,this.a)}get x(){return this.r}get y(){return this.g}get z(){return this.b}get w(){return this.a}set x(A){this.r=A}set y(A){this.g=A}set z(A){this.b=A}set w(A){this.a=A}},Fs=class extends ei{constructor(A){super("v4"),this.nodeType="Vector4",this.value=A instanceof $t?A:new $t(A.r,A.g,A.b,A.a)}generateReadonly(A,e,t,i,r,s){return A.format("vec4("+this.value.r+", "+this.value.g+", "+this.value.b+", "+this.value.a+")",i,e)}},yU=/^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,sy=/[a-z_0-9]+/gi,RA=class extends Se{constructor(A,e,t,i,r){super(r),this.src="",this.nodeType="Function",this.useKeywords=!0,this.includes=[],this.extensions={},this.keywords={},this.isMethod=r===void 0,this.isInterface=!1,this.parse(A,e,t,i)}getShared(A,e){return!this.isMethod}getType(A){return A.getTypeByFormat(this.type)}getInputByName(A){if(this.inputs){let e=this.inputs.length;for(;e--;)if(this.inputs[e].name===A)return this.inputs[e]}}getIncludeByName(A){if(this.includes){let e=this.includes.length;for(;e--;)if(this.includes[e].name===A)return this.includes[e]}}generate(A,e,t,i,r){let s,a=0,n=this.src;if(this.includes)for(let l=0;l<this.includes.length;l++)A.include(this.includes[l],this);for(let l in this.extensions)A.extensions[l]=!0;let o=[];for(;s=sy.exec(this.src);)o.push(s);for(let l=0;l<o.length;l++){let u=o[l],h=u[0],c=this.isMethod?!this.getInputByName(h):!0,d=h;if(this.keywords[h]||this.useKeywords&&c&&It.containsKeyword(h)){let f=this.keywords[h];if(!f){let m=It.getKeywordData(h);m.cache&&(f=A.keywords[h]),f=f||It.getKeyword(h,A),m.cache&&(A.keywords[h]=f)}d=f.build(A)}h!==d&&n[u.index+a-1]!=="."&&(n=n.substring(0,u.index+a)+d+n.substring(u.index+h.length+a),a+=d.length-h.length),this.getIncludeByName(d)===void 0&&It.contains(d)&&A.include(It.get(d))}return e==="source"?n:this.isMethod?(this.isInterface||A.include(this,void 0,n),this.name):A.format("( "+n+" )",this.getType(A),e)}parse(A,e,t,i){if(this.src=A||"",this.includes=e!=null?e:[],this.extensions=t!=null?t:{},this.keywords=i!=null?i:{},this.isMethod){let r=yU.exec(this.src);if(this.inputs=[],r&&r.length==4){this.type=r[1],this.name=r[2];let s=r[3].match(sy);if(s){let a=0;for(;a<s.length;){let n=s[a++],o;n==="in"||n==="out"||n==="inout"?o=s[a++]:(o=n,n="");let l=s[a++];this.inputs.push({name:l,type:o,qualifier:n})}}this.isInterface=this.src.indexOf("{")===-1}else this.type="",this.name=""}}},xU=/^([a-z_0-9]+)\s([a-z_0-9]+)\s?\=?\s?(.*?)(\;|$)/i,tb=class extends Se{constructor(A="",e){super(),this.src="",this.useDefine=!1,this.nodeType="Const",this.parse(A||tb.PI,void 0,void 0,void 0,e)}getType(A){return A.getTypeByFormat(this.type)}parse(A,e,t,i,r){this.src=A||"";let s,a,n="",o=xU.exec(A);this.useDefine=r!=null?r:this.src.charAt(0)==="#",o&&o.length>1?(a=o[1],s=o[2],n=o[3]):(s=this.src,a="f"),this.name=s,this.type=a,this.value=n}build(A,e){if(e==="source"){if(this.value)return this.useDefine?"#define "+this.name+" "+this.value:"const "+this.type+" "+this.name+" = "+this.value+";";if(this.useDefine)return this.src}return A.include(this),A.format(this.name,this.getType(A),e)}generate(A,e,t,i,r){return A.format(this.name,this.getType(A),e)}},ye=tb;ye.PI="PI",ye.PI2="PI2",ye.RECIPROCAL_PI="RECIPROCAL_PI",ye.RECIPROCAL_PI2="RECIPROCAL_PI2",ye.LOG2="LOG2",ye.EPSILON="EPSILON";var wU=new RegExp(`^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,"gim"),bU=new RegExp("s*(w*?)s*(w*?)(=|;)","gim"),ib=class extends Se{constructor(A=""){super(),this.inputs=[],this.src="",this.nodeType="Struct",this.parse(A)}getType(A){return A.getTypeByFormat(this.name)}getInputByName(A){let e=this.inputs.length;for(;e--;)if(this.inputs[e].name===A)return this.inputs[e]}generate(A,e,t,i,r){return e==="source"?this.src+";":A.format("( "+this.src+" )",this.getType(A),e)}parse(A=""){this.src=A,this.inputs=[];let e=wU.exec(A);if(e){let t=e[2],i;for(;i=bU.exec(t);)this.inputs.push({type:i[1],name:i[2]});this.name=e[1]}else this.name="";this.type=this.name}},rm=class extends Se{constructor(A){super("v2",{shared:!1}),this.nodeType="UV",this.index=A!=null?A:0}generate(A,e){A.requires.uv[this.index]=!0;let t=this.index>0?this.index+1:"",i=A.isShader("vertex")?"uv"+t:"vUv"+t;return A.format(i,this.getType(A),e)}};It.addKeyword("uv",function(){return new rm});It.addKeyword("uv2",function(){return new rm(1)});var Ua=class extends Se{constructor(A,e){super("v4"),this.nodeType="ColorSpace",this.input=A,this.method=e!=null?e:Ua.LINEAR_TO_LINEAR,this.hashProperties=["method"]}static getEncodingComponents(A){switch(A){case nr:return["Linear"];case re:return["sRGB"];default:return[]}}generate(A,e){var a;let t=this.input.build(A,"v4"),i=this.getType(A),r=Ua.Nodes[this.method],s=A.include(r);if(s===Ua.LINEAR_TO_LINEAR)return A.format(t,i,e);if(((a=r.inputs)==null?void 0:a.length)===2){let n=this.factor.build(A,"f");return A.format(s+"( "+t+", "+n+" )",i,e)}else return A.format(s+"( "+t+" )",i,e)}fromEncoding(A){let e=Ua.getEncodingComponents(A);this.method="LinearTo"+e[0],this.factor=e[1]}fromDecoding(A){let e=Ua.getEncodingComponents(A);this.method=e[0]+"ToLinear",this.factor=e[1]}},er=Ua;er.Nodes={LinearToLinear:new RA(["vec4 LinearToLinear( in vec4 value ) {","	return value;","}"].join(`
`)),sRGBToLinear:new RA(["vec4 sRGBToLinear( in vec4 value ) {","	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );","}"].join(`
`)),LinearTosRGB:new RA(["vec4 LinearTosRGB( in vec4 value ) {","	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );","}"].join(`
`))},er.LINEAR_TO_LINEAR="LinearToLinear",er.SRGB_TO_LINEAR="sRGBToLinear",er.LINEAR_TO_SRGB="LinearTosRGB";var Le=class extends RA{constructor(A="",e,t,i,r){super(A,r,i,t,e),this.nodeType="Expression"}},os=class extends ei{constructor(A=new xt,e,t,i){super("v4",{shared:!0}),this.nodeType="Texture",this.value=A,this.uv=e!=null?e:new rm,this.bias=t,this.project=i!==void 0?i:!1}getTexture(A,e){return super.generate(A,e,this.value.uuid,"t")}generate(A,e){var l;if(e==="sampler2D")return this.getTexture(A,e);let t=this.getTexture(A,e),i=this.uv.build(A,this.project?"v4":"v2"),r=this.bias?this.bias.build(A,"f"):void 0;r===void 0&&A.context.bias&&(r=A.context.bias.setTexture(this).build(A,"f"));let s,a;this.project?s="texture2DProj":s=r?"tex2DBias":"tex2D",r?a=s+"( "+t+", "+i+", "+r+" )":a=s+"( "+t+", "+i+" )";let n={include:A.isShader("vertex"),ignoreCache:!0},o=this.getType(A);return A.addContext(n),this.colorSpace=(l=this.colorSpace)!=null?l:new er(new Le("",o)),this.colorSpace.fromDecoding(A.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(a),a=this.colorSpace.build(A,o),A.removeContext(),A.format(a,o,e)}},OA=class extends ei{constructor(A){super("f"),this.nodeType="Float",this.value=A!=null?A:0}generateReadonly(A,e,t,i,r,s){return A.format(this.value+(this.value%1?"":".0"),i,e)}},ay=class extends Se{constructor(A,e){super(),this.inputs=[],this.nodeType="FunctionCall",this.value=A,this.inputs=e!=null?e:[]}getFunction(){return this.value}getType(A){return this.value.getType(A)}generate(A,e,t,i,r){i=this.getType(A);let s=this.value,a=s.build(A,e)+"( ",n=[];if(s.inputs){for(let o=0;o<s.inputs.length;o++){let l=s.inputs[o],u=this.inputs[o]||this.inputs[l.name];n.push(u.build(A,A.getTypeByFormat(l.type)))}a+=n.join(", ")+" )"}return A.format(a,i,e)}},rb=class extends Se{constructor(A,e,t=rb.ADD){super(),this.nodeType="Operator",this.type=A.type,this.a=A,this.b=e,this.op=t}getType(A){let e=this.a.getType(A),t=this.b.getType(A);return A.isTypeMatrix(e)?"v4":A.getTypeLength(t)>A.getTypeLength(e)?t:e}generate(A,e){let t=this.getType(A);this.type=t;let i=this.a.build(A,t),r=this.b.build(A,t);return A.format("( "+i+" "+this.op+" "+r+" )",t,e)}},tr=rb;tr.ADD="+",tr.SUB="-",tr.MUL="*",tr.DIV="/";var ve=class extends Se{constructor(A,e=ve.ABS,t,i){super(),this.nodeType="Math",this.a=A,typeof e!="string"?this.b=e:i=e,typeof t!="string"?this.c=t:i=t,this.method=i,this.hashProperties=["method"]}getNumInputs(A){switch(this.method){case ve.MIX:case ve.CLAMP:case ve.REFRACT:case ve.SMOOTHSTEP:case ve.FACEFORWARD:return 3;case ve.MIN:case ve.MAX:case ve.MOD:case ve.STEP:case ve.REFLECT:case ve.DISTANCE:case ve.DOT:case ve.CROSS:case ve.POW:return 2;default:return 1}}getInputType(A){let e=A.getTypeLength(this.a.getType(A)),t=this.b?A.getTypeLength(this.b.getType(A)):0,i=this.c?A.getTypeLength(this.c.getType(A)):0;return e>t&&e>i?this.a.getType(A):t>i?this.b.getType(A):this.c.getType(A)}getType(A){switch(this.method){case ve.LENGTH:case ve.DISTANCE:case ve.DOT:return"f";case ve.CROSS:return"v3"}return this.getInputType(A)}generate(A,e){let t,i,r,s=this.a?A.getTypeLength(this.a.getType(A)):0,a=this.b?A.getTypeLength(this.b.getType(A)):0,n=this.c?A.getTypeLength(this.c.getType(A)):0,o=this.getInputType(A),l=this.getType(A);switch(this.type=l,this.method){case ve.NEGATE:return A.format("( -"+this.a.build(A,o)+" )",o,e);case ve.INVERT:return A.format("( 1.0 - "+this.a.build(A,o)+" )",o,e);case ve.CROSS:t=this.a.build(A,"v3"),i=this.b.build(A,"v3");break;case ve.STEP:t=this.a.build(A,s===1?"f":o),i=this.b.build(A,o);break;case ve.MIN:case ve.MAX:case ve.MOD:t=this.a.build(A,o),i=this.b.build(A,a===1?"f":o);break;case ve.REFRACT:t=this.a.build(A,o),i=this.b.build(A,o),r=this.c.build(A,"f");break;case ve.MIX:t=this.a.build(A,o),i=this.b.build(A,o),r=this.c.build(A,n===1?"f":o);break;default:t=this.a.build(A,o),this.b&&(i=this.b.build(A,o)),this.c&&(r=this.c.build(A,o));break}let u=[];u.push(t),i&&u.push(i),r&&u.push(r);let h=this.getNumInputs(A);if(u.length!==h)throw Error(`Arguments not match used in "${this.method}". Require ${h}, currently ${u.length}.`);return A.format(this.method+"( "+u.join(", ")+" )",l,e)}},ZA=ve;ZA.RAD="radians",ZA.DEG="degrees",ZA.EXP="exp",ZA.EXP2="exp2",ZA.LOG="log",ZA.LOG2="log2",ZA.SQRT="sqrt",ZA.INV_SQRT="inversesqrt",ZA.FLOOR="floor",ZA.CEIL="ceil",ZA.NORMALIZE="normalize",ZA.FRACT="fract",ZA.SATURATE="saturate",ZA.SIN="sin",ZA.COS="cos",ZA.TAN="tan",ZA.ASIN="asin",ZA.ACOS="acos",ZA.ARCTAN="atan",ZA.ABS="abs",ZA.SIGN="sign",ZA.LENGTH="length",ZA.NEGATE="negate",ZA.INVERT="invert",ZA.MIN="min",ZA.MAX="max",ZA.MOD="mod",ZA.STEP="step",ZA.REFLECT="reflect",ZA.DISTANCE="distance",ZA.DOT="dot",ZA.CROSS="cross",ZA.POW="pow",ZA.MIX="mix",ZA.CLAMP="clamp",ZA.REFRACT="refract",ZA.SMOOTHSTEP="smoothstep",ZA.FACEFORWARD="faceforward";var yo=class extends Se{constructor(A,e,t){super("v4"),this.nodeType="TextureCubeUV",this.value=A,this.uv=e,this.bias=t}bilinearCubeUV(A,e,t,i){var n,o,l,u;let r=new ay(yo.Nodes.bilinearCubeUV,[e,t,i]);this.colorSpaceTL=(n=this.colorSpaceTL)!=null?n:new er(new Le("","v4")),this.colorSpaceTL.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTL.input.parse(r.build(A)+".tl"),this.colorSpaceTR=(o=this.colorSpaceTR)!=null?o:new er(new Le("","v4")),this.colorSpaceTR.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTR.input.parse(r.build(A)+".tr"),this.colorSpaceBL=(l=this.colorSpaceBL)!=null?l:new er(new Le("","v4")),this.colorSpaceBL.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBL.input.parse(r.build(A)+".bl"),this.colorSpaceBR=(u=this.colorSpaceBR)!=null?u:new er(new Le("","v4")),this.colorSpaceBR.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBR.input.parse(r.build(A)+".br");let s={include:A.isShader("vertex"),ignoreCache:!0};A.addContext(s),this.colorSpaceTLExp=new Le(this.colorSpaceTL.build(A,"v4"),"v4"),this.colorSpaceTRExp=new Le(this.colorSpaceTR.build(A,"v4"),"v4"),this.colorSpaceBLExp=new Le(this.colorSpaceBL.build(A,"v4"),"v4"),this.colorSpaceBRExp=new Le(this.colorSpaceBR.build(A,"v4"),"v4"),A.removeContext();let a=new Le("mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )","v4");return a.keywords.cubeUV_TL=this.colorSpaceTLExp,a.keywords.cubeUV_TR=this.colorSpaceTRExp,a.keywords.cubeUV_BL=this.colorSpaceBLExp,a.keywords.cubeUV_BR=this.colorSpaceBRExp,a.keywords.cubeUV=r,a}generate(A,e){if(A.isShader("fragment")){let t=this.uv,i=this.bias||A.context.roughness,r=new ay(yo.Nodes.roughnessToMip,[i]),s=new ZA(r,yo.Nodes.m0,yo.Nodes.cubeUV_maxMipLevel,ZA.CLAMP),a=new ZA(s,ZA.FLOOR),n=new ZA(s,ZA.FRACT),o=this.bilinearCubeUV(A,this.value,t,a),l=this.bilinearCubeUV(A,this.value,t,new tr(a,new OA(1).setReadonly(!0),tr.ADD)),u=new ZA(o,l,n,ZA.MIX);return A.format(u.build(A),"v4",e)}else return console.warn("TextureCubeUVNode is not compatible with "+A.shader+" shader."),A.format("vec4( 0.0 )",this.getType(A),e)}},Np=yo;Np.Nodes=function(){let A=new ib(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),e=new ye("float cubeUV_maxMipLevel 8.0",!0),t=new ye("float cubeUV_minMipLevel 4.0",!0),i=new ye("float cubeUV_maxTileSize 256.0",!0),r=new ye("float cubeUV_minTileSize 16.0",!0),s=new RA(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`);s.useKeywords=!1;let a=new RA(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); // pos x
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); // pos y
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); // pos z
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); // neg x
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); // neg y
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); // neg z
				}
				return 0.5 * (uv + 1.0);
		}`);a.useKeywords=!1;let n=new RA(`TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,[A,s,a,e,t,i,r]);n.useKeywords=!1;let o=new ye("float r0 1.0",!0),l=new ye("float v0 0.339",!0),u=new ye("float m0 -2.0",!0),h=new ye("float r1 0.8",!0),c=new ye("float v1 0.276",!0),d=new ye("float m1 -1.0",!0),f=new ye("float r4 0.4",!0),m=new ye("float v4 0.046",!0),p=new ye("float m4 2.0",!0),g=new ye("float r5 0.305",!0),v=new ye("float v5 0.016",!0),x=new ye("float m5 3.0",!0),y=new ye("float r6 0.21",!0),S=new ye("float v6 0.0038",!0),w=new ye("float m6 4.0",!0),M=[o,l,u,h,c,d,f,m,p,g,v,x,y,S,w],b=new RA(`float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,M);return{bilinearCubeUV:n,roughnessToMip:b,m0:u,cubeUV_maxMipLevel:e}}();var ka=class extends Se{constructor(A){super("v3"),this.nodeType="Normal",this.scope=A!=null?A:ka.VIEW}getShared(){return this.scope===ka.WORLD}build(A,e,t,i){let r=A.context[this.scope+"Normal"];return r?r.build(A,e,t,i):super.build(A,e,t)}generate(A,e,t,i,r){let s;switch(this.scope){case ka.VIEW:A.isShader("vertex")?s="transformedNormal":s="geometryNormal";break;case ka.LOCAL:A.isShader("vertex")?s="objectNormal":(A.requires.normal=!0,s="vObjectNormal");break;case ka.WORLD:A.isShader("vertex")?s="inverseTransformDirection( transformedNormal, viewMatrix ).xyz":(A.requires.worldNormal=!0,s="vWNormal");break}return A.format(s,this.getType(A),e)}},Rt=ka;Rt.LOCAL="local",Rt.WORLD="world",Rt.VIEW="view",Rt.NORMAL="normal";It.addKeyword("viewNormal",function(){return new Rt(Rt.VIEW)});It.addKeyword("localNormal",function(){return new Rt(Rt.NORMAL)});It.addKeyword("worldNormal",function(){return new Rt(Rt.WORLD)});var Er=class extends Se{constructor(A){super("v3"),this.nodeType="Position",this.scope=A!=null?A:Er.LOCAL}getType(){switch(this.scope){case Er.PROJECTION:return"v4"}return this.type}getShader(){switch(this.scope){case Er.LOCAL:case Er.WORLD:return!1}return!0}generate(A,e,t,i,r){let s;switch(this.scope){case Er.LOCAL:A.isShader("vertex")?s="transformed":(A.requires.position=!0,s="vPosition");break;case Er.WORLD:if(A.isShader("vertex"))return"( modelMatrix * vec4( transformed, 1.0 ) ).xyz";A.requires.worldPosition=!0,s="vWPosition";break;case Er.VIEW:s=A.isShader("vertex")?"-mvPosition.xyz":"vViewPosition";break;case Er.PROJECTION:s=A.isShader("vertex")?"( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )":"vec4( 0.0 )";break}return A.format(s,this.getType(),e)}},Oi=Er;Oi.LOCAL="local",Oi.WORLD="world",Oi.VIEW="view",Oi.PROJECTION="projection";It.addKeyword("position",function(){return new Oi});It.addKeyword("worldPosition",function(){return new Oi(Oi.WORLD)});It.addKeyword("viewPosition",function(){return new Oi(Oi.VIEW)});var Qi=class extends Se{constructor(A){super("v3"),this.nodeType="Reflect",this.scope=A!=null?A:Qi.CUBE}getUnique(A){return!A.context.viewNormal}getType(){switch(this.scope){case Qi.SPHERE:return"v2"}return this.type}generate(A,e){let t=this.getUnique(A);if(A.isShader("fragment")){let i;switch(this.scope){case Qi.VECTOR:{let r=new Rt(Rt.VIEW),s=A.context.roughness,a=r.build(A,"v3"),n=new Oi(Oi.VIEW).build(A,"v3"),o=s?s.build(A,"f"):void 0,l=`reflect( -normalize( ${n} ), ${a} )`;o&&(l=`normalize( mix( ${l}, ${a}, ${o} * ${o} ) )`);let u=`inverseTransformDirection( ${l}, viewMatrix )`;t?(A.addNodeCode(`vec3 reflectVec = ${u};`),i="reflectVec"):i=u;break}case Qi.CUBE:{let r=new Qi(Qi.VECTOR).build(A,"v3"),s="vec3( -"+r+".x, "+r+".yz )";t?(A.addNodeCode(`vec3 reflectCubeVec = ${s};`),i="reflectCubeVec"):i=s;break}case Qi.SPHERE:{let r="normalize( ( viewMatrix * vec4( "+new Qi(Qi.VECTOR).build(A,"v3")+", 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5";t?(A.addNodeCode(`vec2 reflectSphereVec = ${r};`),i="reflectSphereVec"):i=r;break}}return A.format(i,this.getType(),e)}else return console.warn("ReflectNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.type,e)}},ln=Qi;ln.CUBE="cube",ln.SPHERE="sphere",ln.VECTOR="vector";var SU=class extends Se{constructor(A=new os,e,t){super("v4"),this.nodeType="TextureCube",this.value=A,this.radianceNode=new Np(this.value,e!=null?e:new ln(ln.VECTOR),t),this.irradianceNode=new Np(this.value,new Rt(Rt.WORLD),new OA(1).setReadonly(!0))}generate(A,e){return A.isShader("fragment")?(A.require("irradiance"),A.context.bias&&A.context.bias.setTexture(this.value),(A.slot==="irradiance"?this.irradianceNode:this.radianceNode).build(A,e)):(console.warn("TextureCubeNode is not compatible with "+A.shader+" shader."),A.format("vec4( 0.0 )",this.getType(A),e))}},MU=class extends ei{constructor(A=new lf,e,t){super("v4",{shared:!0}),this.nodeType="CubeTexture",this.value=A,this.uv=e!=null?e:new ln,this.bias=t}getTexture(A,e){return super.generate(A,e,this.value.uuid,"tc")}generate(A,e){var o,l;if(e==="samplerCube")return this.getTexture(A,e);let t=this.getTexture(A,e),i=(o=this.uv)==null?void 0:o.build(A,"v3"),r=this.bias?this.bias.build(A,"f"):void 0;r===void 0&&A.context.bias&&(r=A.context.bias.setTexture(this).build(A,"f"));let s;r?s="texCubeBias( "+t+", "+i+", "+r+" )":s="texCube( "+t+", "+i+" )";let a={include:A.isShader("vertex"),ignoreCache:!0},n=this.getType(A);return A.addContext(a),this.colorSpace=(l=this.colorSpace)!=null?l:new er(new Le("",n)),this.colorSpace.fromDecoding(A.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(s),s=this.colorSpace.build(A,n),A.removeContext(),A.format(s,n,e)}},ny=["x","y","z","w"],EU=["float","vec2","vec3","vec4"],TU={float:"f",vec2:"v2",vec3:"v3",vec4:"v4",mat4:"v4",int:"i",bool:"b","float[]":"f[]","vec4[]":"v4[]"},CU={t:"sampler2D",tc:"samplerCube",b:"bool",i:"int",f:"float",c:"vec3",v2:"vec2",v3:"vec3",v4:"vec4",m3:"mat3",m4:"mat4","f[]":"float[]","v4[]":"vec4[]"},DU=class{constructor(){this.includes={consts:{},functions:{},structs:{}},this.cache="",this.slot="",this.shader="",this.context={},this.getIncludesCode=function(){function A(e,t){return e.deps.length-t.deps.length}return function(e,t){let i=this.getIncludes(e,t);if(!i)return"";let r="";i=i.sort(A);for(let s=0;s<i.length;s++)i[s].src&&(r+=i[s].src+`
`);return r}}(),this.slots=[],this.caches=[],this.contexts=[],this.keywords={},this.nodeData={},this.fragmentVariables={},this.fragmentParsVariables={},this.vertexParsVariables={},this.requires={uv:[],color:[],transparent:!1,irradiance:!1,position:!1,worldPosition:!1,normal:!1,worldNormal:!1,vWorldViewDir:!1,modelMatrix:!1,viewMatrix:!1,projectionMatrix:!1},this.includes={consts:[],functions:[],structs:[]},this.attributes={},this.prefixCode=["#ifdef TEXTURE_LOD_EXT","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)","#else","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCube(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2D(a, b, c)","#endif",`
			// NOTE: Include Spline's blending modes. This could be part of BlendNode
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,"#include <packing>","#include <common>"].join(`
`),this.parsCode={vertex:["float neighbor_offset = 0.0001;",""].join(`
`),fragment:["float accumAlpha = 0.0;",`void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,""].join(`
`)},this.code={vertex:"",fragment:""},this.nodeCode={vertex:"",fragment:""},this.resultCode={vertex:"",fragment:""},this.finalCode={vertex:"",fragment:""},this.inputs={uniforms:{list:[],vertex:[],fragment:[]},arrayUniforms:{list:[],vertex:[],fragment:[]},vars:{varying:[],vertex:[],fragment:[]}},this.defines={},this.uniforms={},this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.updaters=[],this.nodes=[],this.analyzing=!1}build(A,e){this.buildShader("vertex",A),this.buildShader("fragment",e);for(let t=0;t<this.requires.uv.length;t++)if(this.requires.uv[t]){let i=t>0?t+1:"";this.addVaryCode("varying vec2 vUv"+i+";"),t>0&&this.addVertexParsCode("attribute vec2 uv"+i+";"),this.addVertexFinalCode("vUv"+i+" = uv"+i+";")}return this.requires.color[0]&&(this.addVaryCode("varying vec4 vColor;"),this.addVertexParsCode("attribute vec4 color;"),this.addVertexFinalCode("vColor = color;")),this.requires.color[1]&&(this.addVaryCode("varying vec4 vColor2;"),this.addVertexParsCode("attribute vec4 color2;"),this.addVertexFinalCode("vColor2 = color2;")),this.requires.position&&(this.addVaryCode("varying vec3 vPosition;"),this.addVertexFinalCode("vPosition = transformed;")),this.requires.worldPosition,this.requires.normal&&(this.addVaryCode("varying vec3 vObjectNormal;"),this.addVertexFinalCode("vObjectNormal = normal;")),this.requires.modelMatrix&&this.addFragmentParsCode("uniform mat4 modelMatrix;"),this.requires.viewMatrix&&this.addFragmentParsCode("uniform mat4 viewMatrix;"),this.requires.projectionMatrix&&this.addFragmentParsCode("uniform mat4 projectionMatrix;"),this.requires.worldNormal&&(this.addVaryCode("varying vec3 vWNormal;"),this.addVertexFinalCode("vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;")),this.requires.vWorldViewDir&&(this.addVaryCode("varying vec3 vWorldViewDir;"),this.addVertexFinalCode("vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );")),this}buildShader(A,e){this.resultCode[A]=e.build(this.setShader(A),"v4")}setMaterial(A,e){return this.defines={},this}addFlow(A,e,t){return this.addSlot(A).addCache(e).addContext(t)}removeFlow(){return this.removeSlot().removeCache().removeContext()}addCache(A){return this.cache=A!=null?A:"",this.caches.push(this.cache),this}removeCache(){return this.caches.pop(),this.cache=this.caches[this.caches.length-1]||"",this}addContext(A){return this.context=Object.assign({},this.context,A),this.context.extra=this.context.extra||{},this.contexts.push(this.context),this}removeContext(){return this.contexts.pop(),this.context=this.contexts[this.contexts.length-1]||{},this}addSlot(A){return this.slot=A||"",this.slots.push(this.slot),this}removeSlot(){return this.slots.pop(),this.slot=this.slots[this.slots.length-1]||"",this}addFragmentVariable(A,e){this.fragmentVariables[A]===void 0&&(this.addFragmentCode(`${e} ${A};`),this.fragmentVariables[A]="")}addFragmentParsVariable(A,e){this.fragmentParsVariables[A]===void 0&&(this.addFragmentParsCode(`${e} ${A};`),this.fragmentParsVariables[A]="")}addVertexParsVariable(A,e){this.vertexParsVariables[A]===void 0&&(this.addVertexParsCode(`${e} ${A};`),this.vertexParsVariables[A]="")}addVertexCode(A){this.addCode(A,"vertex")}addFragmentCode(A){this.addCode(A,"fragment")}addCode(A,e){this.code[e!=null?e:this.shader]+=A+`
`}addVertexNodeCode(A){this.addNodeCode(A,"vertex")}addFragmentNodeCode(A){this.addNodeCode(A,"fragment")}addNodeCode(A,e){this.nodeCode[e!=null?e:this.shader]+=A+`
`}clearNodeCode(A){A=A!=null?A:this.shader;let e=this.nodeCode[A];return this.nodeCode[A]="",e}clearVertexNodeCode(){return this.clearNodeCode("vertex")}clearFragmentNodeCode(){return this.clearNodeCode("fragment")}addVertexFinalCode(A){this.addFinalCode(A,"vertex")}addFragmentFinalCode(A){this.addFinalCode(A,"fragment")}addFinalCode(A,e){this.finalCode[e!=null?e:this.shader]+=A+`
`}addVertexParsCode(A){this.addParsCode(A,"vertex")}addFragmentParsCode(A){this.addParsCode(A,"fragment")}addParsCode(A,e){this.parsCode[e!=null?e:this.shader]+=A+`
`}addVaryCode(A){this.addVertexParsCode(A),this.addFragmentParsCode(A)}isCache(A){return this.caches.indexOf(A)!==-1}isSlot(A){return this.slots.indexOf(A)!==-1}define(A,e){this.defines[A]=e===void 0?1:e}require(A){this.requires[A]=!0}isDefined(A){return this.defines[A]!==void 0}getVar(A,e,t,i="varying",r="V",s=""){let a=this.getVars(i),n=a[A];if(!n){let o=a.length;n={name:t||"node"+r+o+(s?"_"+s:""),type:e},a.push(n),a[A]=n}return n}getTempVar(A,e,t,i){return this.getVar(A,e,t,this.shader,"T",i)}getAttribute(A,e){if(!this.attributes[A]){let t=this.getVar(A,e);this.addVertexParsCode("attribute "+e+" "+A+";"),this.addVertexFinalCode(t.name+" = "+A+";"),this.attributes[A]={varying:t,name:A,type:e}}return this.attributes[A]}getCode(A){return[this.prefixCode,this.parsCode[A],this.getVarListCode(this.getVars("varying"),"varying"),this.getVarListCode(this.inputs.uniforms[A],"uniform"),this.getVarListCode(this.inputs.arrayUniforms[A],"uniform"),this.getIncludesCode("consts",A),this.getIncludesCode("structs",A),this.getIncludesCode("functions",A),"void main() {",this.getVarListCode(this.getVars(A)),this.code[A],this.resultCode[A],this.finalCode[A],"}"].join(`
`)}getVarListCode(A,e){e=e!=null?e:"";let t="";for(let i=0,r=A.length;i<r;++i){let s=A[i],a=s.type,n=s.name,o=s.size,l=this.getFormatByType(a);if(l===void 0)throw new Error("Node pars "+l+" not found.");l.includes("[]")?t+=e+" "+l.substring(0,l.length-2)+" "+n+`[${o}];
`:t+=e+" "+l+" "+n+`;
`}return t}getVars(A){return this.inputs.vars[A!=null?A:this.shader]}getNodeData(A){let e=A instanceof xs?A.uuid:A;return this.nodeData[e]=this.nodeData[e]||{}}createUniform(A,e,t,i,r,s){if(e.includes("[]")){let a=this.inputs.arrayUniforms,n=a.list.length,o=new ry({type:e,size:t.size,name:i||"nodeUA"+n+(s?"_"+s:""),node:t,needsUpdate:r});return a.list.push(o),a[A].push(o),a[A][o.name]=o,this.uniforms[o.name]=o,o}else{let a=this.inputs.uniforms,n=a.list.length,o=new ry({type:e,name:i||"nodeU"+n+(s?"_"+s:""),node:t,needsUpdate:r});return a.list.push(o),a[A].push(o),a[A][o.name]=o,this.uniforms[o.name]=o,o}}createVertexUniform(A,e,t,i,r){return this.createUniform("vertex",A,e,t,i,r)}createFragmentUniform(A,e,t,i,r){return this.createUniform("fragment",A,e,t,i,r)}include(A,e,t){var s;let i;if(A=typeof A=="string"?It.get(A):A,this.context.include===!1)return A.name;A instanceof RA?i=this.includes.functions:A instanceof ye?i=this.includes.consts:A instanceof ib&&(i=this.includes.structs);let r=i[this.shader]=i[this.shader]||[];if(A){let a=r[A.name];if(a||(a=r[A.name]={node:A,deps:[]},r.push(a),a.src=A.build(this,"source")),A instanceof RA&&e&&r[e.name]&&r[e.name].deps.indexOf(A)===-1&&(r[e.name].deps.push(A),(s=A.includes)==null?void 0:s.length)){let n=0;do this.include(A.includes[n++],e);while(n<A.includes.length)}return t&&(a.src=t),A.name}else throw new Error("Include not found.")}colorToVectorProperties(A){return A.replace("r","x").replace("g","y").replace("b","z").replace("a","w")}colorToVector(A){return A.replace(/c/g,"v3")}getIncludes(A,e){return this.includes[A][e||this.shader]}getConstructorFromLength(A){return EU[A-1]}isTypeMatrix(A){return/^m/.test(A)}getTypeLength(A){return A==="f"?1:parseInt(this.colorToVector(A).substr(1))}getTypeFromLength(A){return A===1?"f":"v"+A}findNode(...A){for(let e=0;e<arguments.length;e++){let t=A[e];if(t!=null&&t.isNode)return t}}resolve(...A){for(let e=0;e<arguments.length;e++){let t=A[e];if(t!==void 0){if(t.isNode)return t;if(t.isTexture)switch(t.mapping){case $s:case Aa:return new MU(t);case $o:return new SU(new os(t));default:return new os(t)}else{if(t.isVector2)return new li(t);if(t.isVector3)return new ai(t);if(t.isVector4)return new Fs(t)}}}}format(A,e,t){switch(this.colorToVector(t+" <- "+e)){case"f <- v2":return A+".x";case"f <- v3":return A+".x";case"f <- v4":return A+".x";case"f <- i":case"f <- b":return"float( "+A+" )";case"v2 <- f":return"vec2( "+A+" )";case"v2 <- v3":return A+".xy";case"v2 <- v4":return A+".xy";case"v2 <- i":case"v2 <- b":return"vec2( float( "+A+" ) )";case"v3 <- f":return"vec3( "+A+" )";case"v3 <- v2":return"vec3( "+A+", 0.0 )";case"v3 <- v4":return A+".xyz";case"v3 <- i":case"v3 <- b":return"vec2( float( "+A+" ) )";case"v4 <- f":return"vec4( "+A+" )";case"v4 <- v2":return"vec4( "+A+", 0.0, 1.0 )";case"v4 <- v3":return"vec4( "+A+", 1.0 )";case"v4 <- i":case"v4 <- b":return"vec4( float( "+A+" ) )";case"i <- f":case"i <- b":return"int( "+A+" )";case"i <- v2":return"int( "+A+".x )";case"i <- v3":return"int( "+A+".x )";case"i <- v4":return"int( "+A+".x )";case"b <- f":return"( "+A+" != 0.0 )";case"b <- v2":return"( "+A+" != vec2( 0.0 ) )";case"b <- v3":return"( "+A+" != vec3( 0.0 ) )";case"b <- v4":return"( "+A+" != vec4( 0.0 ) )";case"b <- i":return"( "+A+" != 0 )"}return A}getTypeByFormat(A){return TU[A]||A}getFormatByType(A){return CU[A]||A}getUUID(A,e){return e=e!==void 0?e:!0,e&&this.cache&&(A=this.cache+"-"+A),A}getElementByIndex(A){return ny[A]}getIndexByElement(A){return ny.indexOf(A)}isShader(A){return this.shader===A}setShader(A){return this.shader=A,this}mergeDefines(A){for(let e in A)this.defines[e]=A[e];return this.defines}mergeUniform(A){for(let e in A)this.uniforms[e]=A[e];return this.uniforms}getTextureEncodingFromMap(A){let e;return A?A.isTexture&&(e=A.encoding):e=nr,e===nr&&this.context.gamma&&(e=re),e}},Ge=class extends ei{constructor(A=0,e,t,i){super("c"),this.nodeType="Color",this.value=A instanceof $t?A:new $t(A||0,e,t,i)}setRGBA(A){this.value.setRGBA(A.r,A.g,A.b,A.a)}generate(A,e,t,i,r,s){t=A.getUUID(t!=null?t:this.getUUID()),i=i!=null?i:this.getType(A);let a=A.getNodeData(t),n=this.getReadonly()&&this.generateReadonly!==void 0;if(this.alpha){let o=this.alpha.build(A,"f");A.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${o};`)}return n?this.generateReadonly(A,e,t,i,r,s):A.isShader("vertex")?(a.vertex||(a.vertex=A.createVertexUniform(i,this,r,s,this.getLabel())),A.format(a.vertex.name,i,e)):(a.fragment||(a.fragment=A.createFragmentUniform(i,this,r,s,this.getLabel())),A.format(a.fragment.name,i,e))}generateReadonly(A,e,t,i,r,s){return A.format("vec3("+this.value.r+", "+this.value.g+", "+this.value.b+")",i,e)}},be=class extends ei{constructor(A){super("i"),this.nodeType="Int",this.value=Math.floor(A!=null?A:0)}generateReadonly(A,e,t,i,r,s){return A.format(this.value.toString(),i,e)}},sb=class extends xs{constructor(){super("basic"),this.nodeType="Basic",this.color=new Ge(5855577),this.shadingAlpha=new OA(1),this.shadingBlend=new be(0)}get category(){return"phong"}generate(A){let e;if(A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(Sn.merge([yA.fog])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","	vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{this.color===void 0&&(this.color=new Ge(5855577)),this.color.analyze(A,{slot:"color"}),this.alpha&&this.alpha.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"});let t=this.color.flow(A,"c",{slot:"color"}),i=this.alpha?this.alpha.flow(A,"f"):void 0,r=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0;A.requires.transparent=i!==void 0,A.addParsCode(["varying vec3 vWPosition;","#include <fog_pars_fragment>","#include <dithering_pars_fragment>","varying vec3 vViewPosition;","#include <normal_pars_fragment>"].join(`
`));let s=["#include <normal_fragment_begin>",t.code];i&&s.push(i.code,"#ifdef ALPHATEST"," if ( "+i.result+" <= ALPHATEST ) discard;","#endif"),r?s.push(r.code,`vec3 outgoingLight = ${t.result};`,`vec3 finalColor = spe_blend(outgoingLight, ${r.result}, 1.0, SPE_BLENDING_NORMAL);`):s.push(`vec3 finalColor = ${t.result};`),i?s.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${i.result} );`):s.push("gl_FragColor = vec4("+t.result+", 1.0 );"),s.push("#include <fog_fragment>","#include <dithering_fragment>"),e=s.join(`
`)}return e}},Bs=class extends ei{constructor(A=1,e){super("f[]"),this.nodeType="FloatArray",this.size=A,this.value=Array.isArray(e)?e:typeof e=="number"?new Array(A).fill(e):new Array(A).fill(0)}},Be={normalRenderTarget:new os,normalRenderTargetDepth:new os,transmissionRenderTarget:new os,transmissionSize:new li(2048,2048),transmissionRenderTargetDepth:new os,pixelRatioNode:new OA(1),resolution:new li,penumbraSize:new Bs(5,.5)};for(let A of Object.values(Be))A.isRenderGlobal=!0;var PU=class extends xs{constructor(){super("lambert"),this.nodeType="Lambert",this.color=new Ge(5855577),this.emissive=new Ge(0),this.emissiveIntensity=new OA(1),this.shadingAlpha=new OA(1),this.shadingBlend=new be(0)}get category(){return"lambert"}build(A){let e;if(A.define("LAMBERT"),A.requires.lights=!0,A.extensions.derivatives=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(Sn.merge([yA.fog,yA.lights])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <color_pars_vertex>","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>",`
					vec3 diffuse = vec3( 1.0 );
					GeometricContext geometry;
					geometry.position = mvPosition.xyz;
					geometry.normal = normalize( transformedNormal );
					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
					GeometricContext backGeometry;
					backGeometry.position = geometry.position;
					backGeometry.normal = -geometry.normal;
					backGeometry.viewDir = geometry.viewDir;
					vLightFront = vec3( 0.0 );
					vIndirectFront = vec3( 0.0 );
					#ifdef DOUBLE_SIDED
						vLightBack = vec3( 0.0 );
						vIndirectBack = vec3( 0.0 );
					#endif
					IncidentLight directLight;
					float dotNL;
					vec3 directLightColor_Diffuse;
					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
					vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
					#ifdef DOUBLE_SIDED
						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
						vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
					#endif
					#if NUM_POINT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
							getPointLightInfo( pointLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_SPOT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
							getSpotLightInfo( spotLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_DIR_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
							getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_HEMI_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
							#ifdef DOUBLE_SIDED
								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
							#endif
						}
						#pragma unroll_loop_end
					#endif
				`,"	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:Be.penumbraSize}),this.color===void 0&&(this.color=new Ge(5855577)),this.color.analyze(A,{slot:"color"}),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A);let t=this.color.flow(A,"c",{slot:"color"}),i=this.emissive.flow(A,"c",{slot:"emissive"}),r=this.emissiveIntensity.flow(A,"f",{slot:"emissive"}),s=this.shadingAlpha.flow(A,"f"),a=this.shadingBlend.flow(A,"i"),n=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,o=this.alpha?this.alpha.flow(A,"f"):void 0;A.requires.transparent=o!==void 0,A.addParsCode([`uniform float penumbraSize[${5}];`,"varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#include <normal_pars_fragment>","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <fog_pars_fragment>","#include <shadowmap_pars_fragment>","#include <shadowmask_pars_fragment>","#include <clipping_planes_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let l=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,"#include <clipping_planes_fragment>"];l.push(t.code,"vec3 diffuseColor = "+t.result+";","ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );"),o&&l.push(o.code,"#ifdef ALPHATEST","if ( "+o.result+" <= ALPHATEST ) discard;","#endif"),l.push("#ifdef DOUBLE_SIDED","	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;","#else","	reflectedLight.indirectDiffuse += vIndirectFront;","#endif","#include <lightmap_fragment>","reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );","#ifdef DOUBLE_SIDED","	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;","#else","	reflectedLight.directDiffuse = vLightFront;","#endif","reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();"),i&&l.push(i.code,"reflectedLight.directDiffuse += "+i.result+" * "+r.result+";"),l.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;"),l.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${s.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${s.result}, ${a.result} );
				}
				`),n&&l.push(n.code,`outgoingLight = spe_blend(outgoingLight, ${n.result}, 1.0, SPE_BLENDING_NORMAL);`),o?l.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${o.result} );`):l.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),l.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=l.join(`
`)}return e}},LU=class extends xs{constructor(){super("phong"),this.nodeType="Phong",this.color=new Ge(5855577),this.specular=new Ge(1118481),this.shininess=new OA(30),this.shadingAlpha=new OA(1),this.shadingBlend=new be(0)}get category(){return"phong"}build(A){let e;if(A.define("PHONG"),A.requires.lights=!0,A.extensions.derivatives=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(Sn.merge([yA.fog,yA.lights])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif


				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:Be.penumbraSize}),this.color===void 0&&(this.color=new Ge(5855577)),this.color.analyze(A,{slot:"color"}),this.specular.analyze(A),this.shininess.analyze(A),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A);let t=this.color.flow(A,"c",{slot:"color"}),i=this.specular.flow(A,"c"),r=this.shininess.flow(A,"f"),s=this.shadingAlpha.flow(A,"f"),a=this.shadingBlend.flow(A,"i"),n=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,o=this.alpha?this.alpha.flow(A,"f"):void 0;A.requires.transparent=o!==void 0,A.addParsCode(["varying vec3 vWPosition;","uniform vec3 emissive;",`uniform float penumbraSize[${5}];`,"#include <normal_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_phong_pars_fragment>","#include <shadowmap_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let l=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	BlinnPhongMaterial material;"];l.push(t.code,"	vec3 diffuseColor = "+t.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );","	vec3 totalEmissiveRadiance = emissive;",i.code,"	vec3 specular = "+i.result+";",r.code,"	float shininess = max( 0.0001, "+r.result+" );","	float specularStrength = 1.0;"),o&&l.push(o.code,"#ifdef ALPHATEST","if ( "+o.result+" <= ALPHATEST ) discard;","#endif"),l.push("material.diffuseColor = diffuseColor;"),l.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),l.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;"),l.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${s.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${s.result}, ${a.result} );
				}
				`),n&&l.push(n.code,`outgoingLight = spe_blend(outgoingLight, ${n.result}, 1.0, SPE_BLENDING_NORMAL);`),o?l.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${o.result} );`):l.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),l.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=l.join(`
`)}return e}},_U=class extends xs{constructor(){super("standard"),this.nodeType="Standard",this.color=new Ge(5855577),this.roughness=new OA(.3),this.metalness=new OA(0),this.reflectivity=new OA(.5),this.shadingAlpha=new OA(1),this.shadingBlend=new be(0)}get category(){return"physical"}build(A){let e;if(A.define("STANDARD"),A.requires.lights=!0,A.extensions.derivatives=!0,A.extensions.shaderTextureLOD=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(Sn.merge([yA.fog,yA.lights])),yA.LTC_1&&(A.uniforms.ltc_1={value:void 0},A.uniforms.ltc_2={value:void 0}),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>","#include <shadowmap_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:Be.penumbraSize});let t={gamma:!0};this.color===void 0&&(this.color=new Ge(5855577)),this.color.analyze(A,{slot:"color",context:t}),this.roughness.analyze(A),this.metalness.analyze(A),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A),this.reflectivity&&this.reflectivity.analyze(A);let i=this.color.flow(A,"c",{slot:"color",context:t}),r=this.roughness.flow(A,"f"),s=this.metalness.flow(A,"f"),a=this.shadingAlpha.flow(A,"f"),n=this.shadingBlend.flow(A,"i"),o=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,l=this.alpha?this.alpha.flow(A,"f"):void 0,u=this.reflectivity?this.reflectivity.flow(A,"f"):void 0;A.requires.transparent=l!==void 0,A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;",`uniform float penumbraSize[${5}];`,"#include <normal_pars_fragment>","#include <dithering_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_physical_pars_fragment>","#include <shadowmap_pars_fragment>"].join(`
`));let h=["#include <clipping_planes_fragment>","	#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	PhysicalMaterial material;","	material.diffuseColor = vec3( 1.0 );"];h.push(i.code,"	vec3 diffuseColor = "+i.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",r.code,"	float roughnessFactor = "+r.result+";",s.code,"	float metalnessFactor = "+s.result+";"),l&&h.push(l.code,"#ifdef ALPHATEST","	if ( "+l.result+" <= ALPHATEST ) discard;","#endif"),h.push("vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );"),h.push("material.diffuseColor = diffuseColor * ( 1.0 - metalnessFactor );","material.roughness = max( roughnessFactor, 0.0525 );","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.roughness = clamp( roughnessFactor, 0.04, 1.0 );"),u?h.push(u.code,"material.specularColor = mix( vec3( 0.16 * pow2( "+u.result+" ) ), diffuseColor, metalnessFactor );"):h.push("material.specularColor = mix( vec3( 0.04 ), diffuseColor, metalnessFactor );"),h.push("#include <lights_fragment_begin>"),h.push("#include <lights_fragment_end>"),h.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;"),h.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result}, ${n.result} );
				}
				`),o&&h.push(o.code,`outgoingLight = spe_blend(outgoingLight, ${o.result}, 1.0, SPE_BLENDING_NORMAL);`),l?h.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result} );`):h.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),h.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=h.join(`
`)}return e}},OU=class extends xs{constructor(){super("toon"),this.nodeType="Toon",this.color=new Ge(5855577),this.specular=new Ge(1118481),this.shininess=new OA(30),this.shadingAlpha=new OA(1),this.shadingBlend=new be(0)}get category(){return"toon"}build(A){let e;if(A.define("TOON"),A.requires.lights=!0,A.extensions.derivatives=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(Sn.merge([yA.fog,yA.lights])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <fog_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:Be.penumbraSize}),this.color===void 0&&(this.color=new Ge(5855577)),this.color.analyze(A,{slot:"color"}),this.specular.analyze(A),this.shininess.analyze(A),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A);let t=this.color.flow(A,"c",{slot:"color"}),i=this.specular.flow(A,"c"),r=this.shininess.flow(A,"f"),s=this.shadingAlpha.flow(A,"f"),a=this.shadingBlend.flow(A,"i"),n=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,o=this.alpha?this.alpha.flow(A,"f"):void 0;A.requires.transparent=o!==void 0,A.addParsCode([`uniform float penumbraSize[${5}];`,"varying vec3 vWPosition;","#include <normal_pars_fragment>","#include <gradientmap_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <dithering_pars_fragment>",`
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
			
						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,"#include <shadowmap_pars_fragment>","#include <bumpmap_pars_fragment>","#include <normalmap_pars_fragment>"].join(`
`));let l=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	ToonMaterial material;"];l.push(t.code,"	vec3 diffuseColor = "+t.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",i.code,"	vec3 specular = "+i.result+";",r.code,"	float shininess = max( 0.0001, "+r.result+" );","	float specularStrength = 1.0;"),o&&l.push(o.code,"#ifdef ALPHATEST","if ( "+o.result+" <= ALPHATEST ) discard;","#endif"),l.push("material.diffuseColor = diffuseColor;"),l.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),l.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular;"),l.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${s.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${s.result}, ${a.result} );
				}
				`),n&&l.push(n.code,`outgoingLight = spe_blend(outgoingLight, ${n.result}, 1.0, SPE_BLENDING_NORMAL);`),o?l.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${o.result} );`):l.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),l.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=l.join(`
`)}return e}},to=class extends ei{constructor(A){super("b"),this.nodeType="Bool",this.value=A!=null?A:!1}generateReadonly(A,e,t,i){return A.format(this.value?"true":"false",i,e)}},ab=class extends ei{constructor(A){super("m3"),this.nodeType="Matrix3",this.value=A!=null?A:new Dt}generateReadonly(A,e,t,i,r,s){return A.format("mat3("+this.value.elements.join(", ")+")",i,e)}get elements(){return this.value.elements}set elements(A){this.value.fromArray(A)}},Is=class extends ei{constructor(A=1,e){super("v4[]"),this.nodeType="Vector4Array",this.size=A,this.value=Array.isArray(e)?e:e instanceof ee?new Array(A).fill(e):new Array(A).fill(new ee(0))}},sm=(A=>(A.SIMPLEX="simplex3d",A.SIMPLEX_FRACTAL="simplex3dFractal",A.ASHIMA="simplexAshima",A.FBM="fbm",A.PERLIN="perlin",A))(sm||{}),di=function(){let A=new RA(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),e=new RA(`float simplex3d(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[A]);e.keywords.F3=new ye("float F3 0.3333333"),e.keywords.G3=new ye("float G3 0.1666667");let t=new RA(`float simplex3dFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplex3d(m * rot1)
				 + 0.2666667 * simplex3d(2.0 * m * rot2)
				 + 0.1333333 * simplex3d(4.0 * m * rot3)
				 + 0.0666667 * simplex3d(8.0 * m);
		}`,[e]),i=new RA("vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}"),r=new RA("vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}"),s=new RA(`float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; // N=7
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,[i,r]),a=new RA("vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}"),n=new RA("vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}",[a]),o=new RA(`float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,[n]),l=new RA(`float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,[o]);l.keywords.NUM_OCTAVES=new ye(`int NUM_OCTAVES ${5}`);let u=new RA("vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}"),h=new RA(`float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,[i,r,u]);return{simplex:e,simplexFractal:t,simplexAshima:s,fbm:l,perlin:h}}(),nb=class extends Se{constructor(A,e,t,i,r,s,a,n,o,l,u,h){super("v3"),this.nodeType="Noise",this.scale=A,this.size=e,this.move=t,this.fA=i,this.fB=r,this.distortion=s,this.colorA=a,this.colorB=n,this.colorC=o,this.colorD=l,this.alpha=u,this.noiseType=h,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e,t,i,r){A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let s=Object.values(sm)[this.noiseType.value],a=new RA(`vec3 ${s}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, float alpha, out float calpha) {
                vec3 st = position / size;
				st /= scale;
				vec3 q = vec3(${s}(st),
							  ${s}(st + vec3(1.0)),
							  ${s}(st + vec3(1.0)));
				vec3 r = vec3(${s}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),
							  ${s}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), 
							  ${s}(st * q));
				float f = ${s}(st + r);
				vec4 color;
				color = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));
				color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
				color = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));

                float lalpha = alpha * color.a;
                calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			    accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return clamp(color, 0.0, 1.0).rgb;
			}`,[di.simplex,di.simplexFractal,di.simplexAshima,di.fbm,di.perlin]),n=A.include(a),o=[];return o.push(this.scale.build(A,"f")),o.push(this.size.build(A,"v3")),o.push(this.move.build(A,"f")),o.push(this.fA.build(A,"v2")),o.push(this.fB.build(A,"v2")),o.push(this.distortion.build(A,"v2")),o.push(this.colorA.build(A,"v4")),o.push(this.colorB.build(A,"v4")),o.push(this.colorC.build(A,"v4")),o.push(this.colorD.build(A,"v4")),o.push(this.alpha.build(A,"f")),o.push(this.calpha),A.format(n+"("+o.join(",")+")",this.getType(A),e)}};nb.numOctaves=5;var ob=class extends Se{constructor(A,e,t,i,r,s,a){super("v3"),this.nodeType="Fresnel",this.color=A,this.bias=e,this.scale=t,this.intensity=i,this.factor=r,this.alpha=s,this.mode=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("vWorldViewDir"),A.require("worldNormal"),A.isShader("fragment")){A.addFragmentVariable(this.calpha,"float");let t=A.include(ob.Nodes.fresnel),i=[];return i.push(this.color.build(A,"c")),i.push(this.bias.build(A,"f")),i.push(this.scale.build(A,"f")),i.push(this.intensity.build(A,"f")),i.push(this.factor.build(A,"f")),i.push(this.alpha.build(A,"f")),i.push(this.mode.build(A,"i")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("FresnelNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},lb=ob;lb.Nodes=function(){return{fresnel:new RA(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, float alpha, int mode, out float calpha) {
				float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

				float lalpha = clamp( fresnel, 0.0, 1.0 ) * alpha;
				calpha = lalpha / clamp(lalpha + accumAlpha, 0.001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;
				return color;
			}`)}}();var hb=class extends Se{constructor(A,e,t,i,r,s,a){super("v3"),this.nodeType="Rainbow",this.filmThickness=A,this.movement=e,this.wavelengths=t,this.noiseStrength=i,this.noiseScale=r,this.offset=s,this.alpha=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("vWorldViewDir"),A.require("worldNormal"),A.isShader("fragment")){A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let t=A.include(hb.Nodes.rainbow),i=[];return i.push(this.filmThickness.build(A,"f")),i.push(this.movement.build(A,"f")),i.push(this.wavelengths.build(A,"v3")),i.push(this.noiseStrength.build(A,"f")),i.push(this.noiseScale.build(A,"f")),i.push(this.offset.build(A,"v3")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("RainbowNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},cb=hb;cb.Nodes=function(){let A=new RA(`vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
                 vec3 st = position / noiseScale;
				 vec3 q = vec3(simplex3d(st),
							  simplex3d(st + vec3(1.0)),
							  simplex3d(st + vec3(1.0)));

				 vec3 r = vec3(simplex3d(st + vec3(1.4, 1.3, 1.0) * q + vec3(1.7, 9.2, 1.0)),
							  simplex3d(st + vec3(2.0, 1.2, 1.0) * q + vec3(8.3, 2.8, 1.0)),
							  simplex3d(st * q));

                 float noise = simplex3d(st + r);

                 return .5 + .5 * cos((((filmThickness + (noise * noiseStrength)) / (vec3(wavelengths.r * 1.0, wavelengths.g * 0.8, wavelengths.b * 0.6) + 1.0)) * dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal))) + movement);
             }`,[di.simplex]);return{rainbow:new RA(`vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, float alpha, out float calpha) {
                 vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

                 float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);
                 float lalpha = alpha * rainbowContribution;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

                 return res;
             }`,[A])}}();var ub=class extends Se{constructor(A,e,t,i,r,s,a,n,o,l,u,h,c,d,f,m){super("v3"),this.nodeType="Outline",this.firstTime=!0,this.outlineColor=A,this.contourColor=e,this.outlineWidth=t,this.contourWidth=i,this.contourThreshold=r,this.outlineThreshold=s,this.contourFrequency=a,this.outlineSmoothing=n,this.contourDirection=o,this.positionalLines=l,this.compensation=u,this.resolution=h,this.normalMap=c,this.depthMap=d,this.pixelRatio=f,this.alpha=m,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("vWorldViewDir"),A.require("worldNormal"),A.extensions.derivatives=!0,this.firstTime){let t=this.outlineWidth.build(A,"f"),i=this.resolution.build(A,"v2"),r=this.compensation.build(A,"b"),s=this.pixelRatio.build(A,"f");A.addVertexParsVariable("randomColor","attribute vec3"),A.addVertexParsVariable("extrudeNormal","attribute vec3"),A.addVertexParsVariable(t,"uniform float"),A.addVertexParsVariable(i,"uniform vec2"),A.addVertexParsVariable(r,"uniform bool"),A.addVertexParsVariable(s,"uniform float"),A.addVertexParsVariable("vID","flat out float"),A.addFragmentParsVariable("vID","flat in float");let a=`g${this.uuid.toString().replace(/-/g,"")}`;A.addVertexFinalCode(`
                vID = randomColor.r;
                if (${r}) {
                    vec4 ${a}_clipPosition = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
                    // NOTE: For certain shapes, like spheres, we get incorrect extrusion when the
                    // normals face the camera directly. So we hackily fix this by offsetting the normal
                    // by a tiny amount.
                    vec3 ${a}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * extrudeNormal) + 0.0000001;
                    vec2 ${a}_offset = normalize(${a}_clipNormal.xy) / ${i} * (${t} / 2.0) * ${a}_clipPosition.w * 2.0 * ${s};
                    ${a}_clipPosition.xy += ${a}_offset;
                    // TODO(MAX): To handle multiple outline layers, we only want to extrude
                    // if this offset is the biggest of all the potential offsets
                    gl_Position = ${a}_clipPosition;
                }
            `)}if(A.isShader("fragment")){A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let t=A.include(ub.Nodes.outline),i=[];return i.push(this.outlineColor.build(A,"c")),i.push(this.contourColor.build(A,"c")),i.push(this.outlineWidth.build(A,"f")),i.push(this.contourWidth.build(A,"f")),i.push(this.contourThreshold.build(A,"f")),i.push(this.outlineThreshold.build(A,"f")),i.push(this.contourFrequency.build(A,"f")),i.push(this.outlineSmoothing.build(A,"f")),i.push(this.contourDirection.build(A,"v3")),i.push(this.positionalLines.build(A,"b")),i.push(this.resolution.build(A,"v2")),i.push(this.normalMap.getTexture(A,"t")),i.push(this.depthMap.getTexture(A,"t")),i.push(this.pixelRatio.build(A,"f")),i.push(this.compensation.build(A,"b")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),this.firstTime=!this.firstTime,A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("OutlineNode is not compatible with "+A.shader+" shader."),""}},db=ub;db.Nodes=function(){let A=new RA(`
float sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)
{
    vec2 texelSize = (vec2(1.0) / resolution) * outlineWidth * pixelRatio;

    vec2 uvSamples[9];
    vec4 normalSamples[9];

	uvSamples[0] = uv + vec2( -texelSize.x, -texelSize.y);
	uvSamples[1] = uv + vec2(0.0, -texelSize.y);
	uvSamples[2] = uv + vec2(  texelSize.x, -texelSize.y);
	uvSamples[3] = uv + vec2( -texelSize.x, 0.0);
	uvSamples[4] = uv;
	uvSamples[5] = uv + vec2(  texelSize.x, 0.0);
	uvSamples[6] = uv + vec2( -texelSize.x, texelSize.y);
	uvSamples[7] = uv + vec2(0.0, texelSize.y);
	uvSamples[8] = uv + vec2(  texelSize.x, texelSize.y);


    normalSamples[0] = texture2D(t, uvSamples[0]);
    normalSamples[1] = texture2D(t, uvSamples[1]);
    normalSamples[2] = texture2D(t, uvSamples[2]);
    normalSamples[3] = texture2D(t, uvSamples[3]);
    normalSamples[4] = texture2D(t, uvSamples[4]);
    normalSamples[5] = texture2D(t, uvSamples[5]);
    normalSamples[6] = texture2D(t, uvSamples[6]);
    normalSamples[7] = texture2D(t, uvSamples[7]);
    normalSamples[8] = texture2D(t, uvSamples[8]);

    float depthBias = 0.0001;
    // TODO(MAX): Can we somehow reduce the number of conditionals here with MATH?!
    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }


    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    vec4 sobel_edge_h = normalSamples[2] + (2.0*normalSamples[5]) + normalSamples[8] - (normalSamples[0] + (2.0*normalSamples[3]) + normalSamples[6]);
  	vec4 sobel_edge_v = normalSamples[0] + (2.0*normalSamples[1]) + normalSamples[2] - (normalSamples[6] + (2.0*normalSamples[7]) + normalSamples[8]);

    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));
    return edgeNormal;
}
`);return{outline:new RA(`vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float alpha, out float calpha) {
                vec3 result = outlineColor;
                float resultAlpha = 0.0;

                vec3 N = normalize(vWNormal);
                vec2 nuv = (gl_FragCoord.xy / resolution);
                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);
                resultAlpha = smoothstep(outlineThreshold - outlineSmoothing, outlineThreshold + outlineSmoothing, sobelSample);

                float t = 1.0 - contourThreshold;
                if(positionalLines) {
                    vec3 NDir = position * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float f  = fract(NT * contourFrequency * 0.01);
                    float df = fwidth(NT * contourFrequency);

                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);
                    if (g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0;
                    }
                 }
                 else {
                    vec3 NDir = N * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float df = fwidth(NT * contourThreshold);
                    float f = sin(NT * 1.0 * contourFrequency);
                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);

                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0 - g;
                    }
                 }

                 float lalpha = alpha * resultAlpha;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return result;
             }`,[A])}}();var pb=class extends Se{constructor(A,e,t,i,r,s,a,n){super("v3"),this.nodeType="Transmission",this.thickness=A,this.ior=e,this.roughness=t,this.transmissionSamplerSize=i,this.transmissionSamplerMap=r,this.transmissionDepthMap=s,this.aspectRatio=a,this.alpha=n,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.extensions.shaderTextureLOD=!0,A.extensions.derivatives=!0,A.isShader("fragment")){A.define("NUM_SAMPLES",30),A.require("worldPosition"),A.requires.worldNormal=!0,A.requires.modelMatrix=!0,A.requires.projectionMatrix=!0,A.addFragmentVariable(this.calpha,"float");let t=A.include(pb.Nodes.transmission),i=[];return i.push(this.thickness.build(A,"f")),i.push(this.ior.build(A,"f")),i.push(this.roughness.build(A,"f")),i.push(this.transmissionSamplerSize.build(A,"v2")),i.push(this.transmissionSamplerMap.getTexture(A,"t")),i.push(this.transmissionDepthMap.getTexture(A,"t")),i.push(this.aspectRatio.build(A,"v2")),i.push("normal"),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("TransmissionNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},fb=pb;fb.Nodes=function(){let A=new RA(`
            float gaussian(vec2 i) {
                const float sigma = float(NUM_SAMPLES) * .25;
                return exp( -.5* dot(i/=sigma,i) ) / ( 6.28 * sigma*sigma );
            }`),e=new RA(`
            vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                // Slightly modified version of this:
                // https://www.shadertoy.com/view/ltScRG

                const int LOD = 2;
                const int sLOD = 4; // tile size = 2^LOD

                vec3 O = vec3(0);
                float a = 0.0;
                const int s = NUM_SAMPLES/sLOD;
                for ( int i = 0; i < s*s; i++ ) {
                    int modulo = (i)-((i)/(s))*(s);
                    vec2 d = vec2(float(modulo), float(i/s))*float(sLOD) - float(NUM_SAMPLES)/2.;
                    vec2 uv = U + (scale * aspectRatio) * d;
                    // What is the depth of the opaque object we're trying to sample
                    float opaqueDepth = unpackRGBAToDepth(texture2D(dm, uv));
                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU + ((scale * min(lod / 2., 1.)) * aspectRatio) * d;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
                    float gaussian = gaussian(d);
		            #ifdef TEXTURE_LOD_EXT
                    O += gaussian * texture2DLodEXT( sp, uv, lod).rgb;
                    #else
                    O += gaussian * textureLod( sp, uv, lod).rgb;
                    #endif
                    a += gaussian;
                }
                return O / a;
            }`,[A]),t=new RA(`
            vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        // Direction of refracted light.
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        // Compute rotation-independant scaling of the model matrix.
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		        // The thickness is specified in local space.
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),i=new RA(`
float applyIorToRoughness( float roughness, float ior ) {
		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	} `),r=new RA(`
vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        float lod = applyIorToRoughness(roughness, ior);

        return blur(transmissionSamplerMap, fragCoord, vec2(lod / (transmissionSamplerSize.x / 2.)), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
	}`,[i,e]),s=new RA(`
vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;

        // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
        vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;

        vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
        vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
        unrefractedCoords += 1.0;
        unrefractedCoords /= 2.0;

        // Sample framebuffer to get pixel the refracted ray hits.
        return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
    }`,[r,t]);return{transmission:new RA(`
            vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                float lalpha = alpha;

                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return transmission;
            }`,[s])}}();var xo=class extends Se{constructor(A,e,t,i,r,s,a,n,o,l,u){super("v3"),this.nodeType="Depth",this.gradientType=A,this.smooth=e,this.near=t,this.far=i,this.isVector=r,this.isWorldSpace=s,this.origin=a,this.direction=n,this.colors=o,this.steps=l,this.alpha=u,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){let t=`g${this.uuid.toString().replace(/-/g,"")}`,i=new RA(`vec3 ${t}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${t}_MAX_COLORS], float steps[${t}_MAX_COLORS], float alpha, out float calpha) {
               vec4 color = colors[0];
               #ifdef ${t}_IS_VECTOR
                   #ifdef ${t}_LINEAR
                       #ifdef ${t}_WORLDSPACE
                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);
                       #else
                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);
                       #endif
                   #else
                       #ifdef ${t}_WORLDSPACE
                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);
                       #else
                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);
                       #endif
                   #endif
               #else
                   float dist = length(vWPosition - cameraPosition);
			       float depth = ( dist - near ) / ( far - near );
               #endif


              float p;
              #ifdef ${t}_SMOOTH
				for ( int i = 1; i < ${t}_MAX_COLORS; i++ ) {
						p = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}
              #else
                for ( int i = 1; i < ${t}_MAX_COLORS; i++ ) {
                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);
                   color = mix(color, colors[i], p);
                 }
              #endif

               float lalpha = alpha * color.a;
               calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			   accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
               return color.rgb;
			}`,[xo.Nodes.vectorLinearWorldSpaceDepth,xo.Nodes.vectorLinearObjectSpaceDepth,xo.Nodes.vectorSphericalObjectSpaceDepth,xo.Nodes.vectorSphericalWorldSpaceDepth]);if(A.isShader("fragment")){A.define(`${t}_MAX_COLORS`,this.colors.value.length),this.smooth.value&&A.define(`${t}_SMOOTH`),this.isVector.value>.5&&A.define(`${t}_IS_VECTOR`),this.gradientType.value===0&&A.define(`${t}_LINEAR`),this.isWorldSpace.value>.5&&A.define(`${t}_WORLDSPACE`),A.require("worldPosition"),A.addFragmentVariable(this.calpha,"float");let r=A.include(i),s=[];return s.push(this.near.build(A,"f")),s.push(this.far.build(A,"f")),s.push(this.origin.build(A,"v3")),s.push(this.direction.build(A,"v3")),s.push(this.colors.build(A,"v4[]")),s.push(this.steps.build(A,"f[]")),s.push(this.alpha.build(A,"f")),s.push(this.calpha),A.format(r+"("+s.join(",")+")",this.getType(A),e)}else return console.warn("DepthNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},mb=xo;mb.Nodes=function(){let A=new RA(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),e=new RA(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),t=new RA(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),i=new RA(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`);return{vectorLinearWorldSpaceDepth:A,vectorLinearObjectSpaceDepth:e,vectorSphericalWorldSpaceDepth:t,vectorSphericalObjectSpaceDepth:i}}();var oy=class extends Se{constructor(A,e,t,i){super("v3"),this.nodeType="Blend",this.a=A,this.b=e,this.alpha=t,this.mode=i}generate(A,e){if(A.isShader("fragment")){let t=[];return t.push(this.a.build(A,"c")),t.push(this.b.build(A,"c")),t.push(this.alpha.build(A,"f")),t.push(this.mode.build(A,"i")),A.format("spe_blend("+t.join(",")+")",this.getType(A),e)}else return console.warn("BlendNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},zp=(A=>(A.NOISE="noise",A.MAP="map",A))(zp||{}),gb=class extends Se{constructor(A,e,t,i,r){super("v3"),this.displacementTypeIndex=new be(0),this.nodeType="VertexDisplacement",this.intensity=A,this.movementOrTexture=e,Object.values(zp)[this.displacementTypeIndex.value]==="map"&&(this.mat=new ab(this.movementOrTexture.value.matrix)),this.cropOrOffset=t,this.scale=i,this.noiseFunctionIndex=r}generate(A,e){if(A.isShader("vertex")){A.define("USE_LAYER_DISPLACE");let t,i=[];switch(i.push("displaced_position"),i.push("displaced_normal"),Object.values(zp)[this.displacementTypeIndex.value]){case"map":{t=A.include(gb.Nodes.map),i.push(this.movementOrTexture.getTexture(A,"t")),i.push("uv"),i.push(this.cropOrOffset.build(A,"f")),this.mat&&i.push(this.mat.build(A,"mat3"));break}case"noise":{let r=Object.values(sm)[this.noiseFunctionIndex.value],s=new RA(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),a=new RA(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement) {
							return p + n * ${r}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;
						}`,[di.simplex,di.simplexFractal,di.simplexAshima,di.fbm,di.perlin]),n=new RA(`vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            // TODO(Max): The distance to the neighbors was originally scaled by 0.1.
                            // This caused some small oval/circular visual artifacts in the lighting.
                            // For now, simply using neighbors further away betters the problem,
                            // but we should figure out the underlying cause when we have some time.
                            // Maybe its related to how we calculate the tangent and bitangent?
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,[a,s]);t=A.include(n),i.push(this.scale.build(A,"f")),i.push(this.cropOrOffset.build(A,"v3")),i.push(this.movementOrTexture.build(A,"f"));break}}return i.push(this.intensity.build(A,"f")),i.push("displaced_normal"),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("VertexDisplacementNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},vb=gb;vb.Nodes=function(){let A=new RA(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),e=new RA(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`);return{map:new RA(`vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,[A,e])}}();var yb=class extends Se{constructor(A,e,t,i,r,s,a,n){super("v3"),this.nodeType="Gradient",this.gradientType=A,this.smooth=e,this.colors=t,this.steps=i,this.offset=r,this.morph=s,this.angle=a,this.alpha=n,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.isShader("fragment")){A.define("GRAD_MAX",10),A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let t=A.include(yb.Nodes.gradient),i=[];return i.push(this.gradientType.build(A,"i")),i.push(this.smooth.build(A,"b")),i.push(this.colors.build(A,"v4[]")),i.push(this.steps.build(A,"f[]")),i.push(this.offset.build(A,"v2")),i.push(this.morph.build(A,"v2")),i.push(this.angle.build(A,"f")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("GradientNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},xb=yb;xb.Nodes=function(){return{gradient:new RA(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return color.xyz;
			}`)}}();var Ph=class extends Se{constructor(A,e,t,i,r,s,a,n,o,l){super("v3"),this.nodeType="CustomTexture",this.firstTime=!0,this.texture=A,this.textureSize=e,this.crop=t,this.projection=i,this.axis=r,this.side=s,this.size=a,this.mat=n,this.alpha=o,this.mode=l,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){A.require("position"),A.require("normal"),A.require("uv"),A.requires.uv=[!0],A.extensions.shaderTextureLOD=!0,A.extensions.derivatives=!0;let t=`g${this.uuid.toString().replace(/-/g,"")}`,i;switch(this.projection.value){case 3:i=A.include(Ph.Nodes.cylindrical);break;case 2:i=A.include(Ph.Nodes.spherical);break;case 1:let s=["vec3(1.0, 0.0, 0.0)","vec3(0.0, 1.0, 0.0)","vec3(0.0, 0.0, 1.0)"][this.axis.value],a=new RA(`
		vec3 ${t}_planarTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( (${t}_vCustomUv * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				${this.side.value===2?"":`lalpha *= step(0.0, ${this.side.value===1?"-1.0 * ":""}dot(vObjectNormal, mat * ${s}));`}

				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);i=A.include(a);break;default:i=A.include(Ph.Nodes.uv);break}if(this.projection.value===1&&this.firstTime){A.addVertexParsCode(`varying vec2 ${t}_vCustomUv;`),A.addFragmentParsCode(`varying vec2 ${t}_vCustomUv;`);let s=["zy","xz","xy"][this.axis.value];A.addVertexFinalCode(`${t}_vCustomUv = (1. + (transformed.${s})) / 2.;`)}A.addFragmentVariable(this.calpha,"float");let r=[];return r.push(this.texture.generate(A,"t")),r.push(this.textureSize.build(A,"v2")),r.push(this.crop.build(A,"f")),r.push(this.mat.build(A,"mat3")),r.push(this.size.build(A,"v2")),r.push(this.alpha.build(A,"f")),r.push(this.mode.build(A,"i")),r.push(this.calpha),this.firstTime=!this.firstTime,A.format(i+"("+r.join(",")+")",this.getType(A),e)}},wb=Ph;wb.Nodes=function(){let A=new RA(`
vec3 cylindricalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;

				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),e=new RA(`
vec3 sphericalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),t=new RA(`vec3 uvTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);return{cylindrical:A,spherical:e,uv:t}}();var bb=class extends Se{constructor(A,e){super("v3"),this.nodeType="CustomNormal",this.cnormal=A,this.alpha=e}generate(A,e){if(A.isShader("fragment")){let t=A.include(bb.Nodes.customNormal),i=[];return i.push(this.cnormal.build(A,"v3")),i.push("normal"),i.push(this.alpha.build(A,"f")),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("CustomNormalNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},Sb=bb;Sb.Nodes=function(){return{customNormal:new RA(`vec3 customNormal(vec3 cnormal, vec3 norm, float alpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return normal;
			}`)}}();function Kt(A,e){return e.color(A)}function BU(A,e){switch(A.type){case"fresnel":return NU(A,e);case"gradient":return zU(A);case"depth":return FU(A);case"normal":return UU(A);case"noise":return kU(A,e);case"rainbow":return GU(A);case"toon":return jU(A,e);case"outline":return VU(A,e);case"transmission":return HU(A);case"color":return RU(A,e)}}function IU(A){return{type:A.type}}function pr(A){let{alpha:e,mode:t}=A;return{...IU(A),alpha:e,mode:t}}function RU(A,e){return{...pr(A),color:Kt(A.color,e)}}function NU(A,e){let{bias:t,scale:i,intensity:r,factor:s,color:a}=A;return{...pr(A),color:Kt(a,e),bias:t,scale:i,intensity:r,factor:s}}function zU(A){let{gradientType:e,smooth:t,colors:i,steps:r,angle:s,offset:a,morph:n}=A;return{...pr(A),gradientType:e,smooth:t,colors:i.map(o=>new ee(o[0],o[1],o[2],o[3])),num:i.length,steps:r,offset:new H(...a),morph:new H(...n),angle:s}}function FU(A){let{gradientType:e,near:t,far:i,isVector:r,isWorldSpace:s,origin:a,direction:n,colors:o,steps:l,smooth:u}=A;return{...pr(A),gradientType:e,near:t,far:i,isVector:r,isWorldSpace:s,origin:new T(...a),direction:n?new T(...n):new T(1,0,0),colors:o.map(h=>h!==void 0?new ee(h[0],h[1],h[2],h[3]):new ee(0,0,0,0)),steps:l.slice(0,o.length),smooth:u}}function UU(A){let{cnormal:e}=A;return{...pr(A),cnormal:new T(e[0],e[1],e[2])}}function kU(A,e){return{...pr(A),scale:A.scale,move:A.move,fA:new H(...A.fA),fB:new H(...A.fB),size:new T(...A.size),distortion:new H(...A.distortion),colorA:Kt(A.colorA,e),colorB:Kt(A.colorB,e),colorC:Kt(A.colorC,e),colorD:Kt(A.colorD,e),noiseType:A.noiseType}}function GU(A){return{...pr(A),filmThickness:A.filmThickness,movement:A.movement,wavelengths:new T(...A.wavelengths),noiseStrength:A.noiseStrength,noiseScale:A.noiseScale,offset:new T(...A.offset)}}function jU(A,e){return{...pr(A),positioning:A.positioning,colors:A.colors.map(t=>new ee(t[0],t[1],t[2],t[3])),num:A.colors.length,steps:A.steps,source:new T(...A.source),isWorldSpace:A.isWorldSpace,noiseStrength:A.noiseStrength,noiseScale:A.noiseScale,shadowColor:Kt(A.shadowColor,e),offset:new T(...A.offset)}}function VU(A,e){return{...pr(A),outlineColor:Kt(A.outlineColor,e),contourColor:Kt(A.contourColor,e),outlineWidth:A.outlineWidth,contourWidth:A.contourWidth,outlineThreshold:A.outlineThreshold,contourThreshold:A.contourThreshold,outlineSmoothing:A.outlineSmoothing,contourFrequency:A.contourFrequency,contourDirection:A.contourDirection,positionalLines:A.positionalLines,compensation:A.compensation}}function HU(A,e){return{...pr(A),thickness:A.thickness,ior:A.ior,roughness:A.roughness}}var fc=class extends $t{},WU=class{constructor(A=1e3*10){this.timeout=A,this.cache=new Map,this.head={data:null,time:0,src:null,next:null,prev:null},this.tail={data:null,time:1/0,src:null,next:null,prev:null},this.hasClean=!1,this.head.next=this.tail,this.tail.prev=this.head}log(...A){}remove(A){let e=this.cache.get(A);e&&(this.dispose(A,e.data),this.cache.delete(A),e.prev.next=e.next,e.next.prev=e.prev)}scheduleCleanup(){this.hasClean||(this.log("scheduled cleanup"),this.hasClean=!0,setTimeout(()=>{this.hasClean=!1,this.log("cleaning");let A=Date.now(),e=this.head.next;for(;e.time<A-this.timeout;)this.dispose(e.src,e.data),this.cache.delete(e.src),e=e.next,e.prev=this.head,this.head.next=e;this.head.next!==this.tail?this.scheduleCleanup():this.log("no more cleanup")},this.timeout+1e3))}has(A){var e;return(e=this.cache.get(A))==null?void 0:e.data}load(A){let e=Date.now(),t=this.cache.get(A);return t===void 0?(t={data:this.create(A),src:A,time:e,next:null,prev:null},this.cache.set(A,t)):(t.time=e,t.prev.next=t.next,t.next.prev=t.prev),t.prev=this.tail.prev,t.next=this.tail,this.tail.prev.next=t,this.tail.prev=t,this.scheduleCleanup(),t.data}},YU=class extends WU{create(A){return URL.createObjectURL(new Blob([A]))}dispose(A,e){URL.revokeObjectURL(e)}},ud;function XU(A){return typeof A=="string"?A:(ud||(ud=new YU),ud.load(A))}var QU=class{constructor(A,e){this.data=A,this.cache=e,this.refCount=0}deref(){this.refCount,this.refCount-=1,this.refCount===0&&(this.cache.remove(this),this.dispose())}dispose(){this.refCount}},qU=class{constructor(){this.cache=new Map}remove(A){this.cache.delete(A.data)}load(A){let e=this.cache.get(A);return e===void 0&&(e=this.create(A),this.cache.set(A,e)),e.refCount+=1,e}},Mb=class extends QU{constructor(A,e){super(A,e.imageHolderCache),this.data=A,this.shared=e,this.loaded=!1,this.isVideo=!1,this.isVideo=A.type=="video",this.updateSrc(A.data)}async updateSrc(A){if(typeof document>"u")return;this.disposeTextures(),this.loaded=!1;let e=()=>{this.loaded=!0;let i=[1e3,1001,1002];for(let r of i){let s=this[r];s&&(s.image=this.img,s.needsUpdate=!0)}this.shared.requestRender()};if(this.isVideo){if(this.img=document.createElement("video"),this.img.preload="auto",this.img.playsInline=!0,this.img.currentTime=.01,typeof A!="string"){var t=new FileReader;t.readAsDataURL(new Blob([A],{type:"video/mp4"}));let i;await new Promise(r=>{t.onloadend=s=>{var a;i=(a=s.target)==null?void 0:a.result,r(null)}}),this.img.src=i}else this.img.src=A;this.img.onloadeddata=()=>{e()}}else this.img=new Image,this.img.src=XU(A),this.img.onload=e}getTexture(A){let e=this[A];if(e)return e;{let t;return this.isVideo?t=new qD(this.img,void 0,A,A):t=new xt(this.img,void 0,A,A),this.loaded&&(t.needsUpdate=!0),this[A]=t,t}}disposeTextures(){var A,e,t;(A=this[1e3])==null||A.dispose(),this[1e3]=void 0,(e=this[1001])==null||e.dispose(),this[1001]=void 0,(t=this[1002])==null||t.dispose(),this[1002]=void 0}dispose(){super.dispose(),this.disposeTextures()}},Hs=class extends Mb{},am=class extends ei{},Eb={noise:["noiseType"],texture:["projection","axis","side"],video:["projection","axis","side"],displace:["noiseType"],depth:["smooth","isWorldSpace","gradientType","isVector"]},Tb={depth:["colors"]};function ZU(A,e,t){var s,a;let i=Eb[A.type],r=Tb[A.type];if(r!==void 0){let n=A.color;if(r.includes(e)){let o=(a=(s=n[e])==null?void 0:s.value)==null?void 0:a.length;if(o!==void 0&&o!==t.length)return!0}}return i!==void 0?i.includes(e):!1}function Cb(A,e,t){let i=t.uniforms[`f${t.id}_texture`];if(!i)return!1;let r=!1,s=A;if("image"in s){let a=s.image,n=e.image(a),o=i;o.image instanceof Hs||o.image.deref(),o.image=n}if("video"in s){let a=s.video,n=e.video(a),o=i;o.image instanceof Hs||o.image.deref(),o.image=n}if("wrapping"in s){let a=i;a.wrap=s.wrapping}if("repeat"in s||"offset"in s){let a="mat",n=t.uniforms[`f${t.id}_${a}`];"repeat"in s&&(n.repeat=s.repeat),"offset"in s&&(n.offset=s.offset),n.updateMatrix()}return r}function KU(A,e,t,i){let r=!1;for(let[s,a]of Object.entries(A)){if(!s||a===void 0)continue;if(Bb(s,t,i)){s==="visible"&&t.type==="light"&&(r=!0);continue}t.visible=i.visible;let n=t.uniforms[`f${t.id}_${s}`];if(!!n&&!(n instanceof am))switch(r=r||ZU(t,s,a),n.constructor){case Ge:if(typeof a=="string"){let o=e.getColor(a);o&&(n.value=o);break}else{let o=a;n.value instanceof fc?n.value=new $t(o.r,o.g,o.b,o.a):n.setRGBA(o);break}case Fs:if(typeof a=="string"){let o=e.getColor(a);o&&(n.value=o);break}else{let o=a;n.value instanceof fc?n.value=new $t(o.r,o.g,o.b,o.a):n.value.setRGBA(o.r,o.g,o.b,o.a);break}case li:{let o=a;n.value.setX(o[0]),n.value.setY(o[1]);break}case ai:{let o=a;n.value.setX(o[0]),n.value.setY(o[1]),n.value.setZ(o[2]);break}case os:{Cb(a,e,t);break}case Is:{n.value=a.map(o=>new ee(...o));break}default:{n.value=a;break}}}return r}var Db=class extends Se{constructor(A,e,t){super("v3"),this.nodeType="Matcap",this.texture=A,this.alpha=e,this.mode=t,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.isShader("fragment")){A.addFragmentVariable(this.calpha,"float");let t=A.include(Db.Nodes.matcap);A.require("normal"),A.requires.normal=!0;let i=[];return i.push(this.texture.generate(A,"t")),i.push("normal"),i.push(this.alpha.build(A,"f")),i.push(this.mode.build(A,"i")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("MatcapNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},Pb=Db;Pb.Nodes=function(){return{matcap:new RA(`vec3 matcap(sampler2D matcapTex, vec3 normal, float alpha, int mode, out float calpha) {
                vec3 viewDir = normalize( vViewPosition );
                vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
                vec3 y = cross( viewDir, x );
                vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
                vec4 matcapColor = texture2D( matcapTex, uv );

                calpha =  alpha / clamp( alpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;
                
                return matcapColor.rgb;
            }
            `)}}();var Fp=class extends am{constructor(A,e){super("t"),this.image=A,this.wrap=e}get value(){return this.image.getTexture(this.wrap)}},JU=class extends am{constructor(A){super("v3"),this.image=A,this._value=new T}get value(){var A,e;return this._value.x=this.image.isVideo?(A=this.image.img.videoWidth)!=null?A:0:this.image.img.width,this._value.y=this.image.isVideo?(e=this.image.img.videoHeight)!=null?e:0:this.image.img.height,this._value}},Lb=class extends Se{constructor(A,e,t,i,r,s,a,n,o,l){super("v3"),this.nodeType="Toon",this.positioning=A,this.colors=e,this.steps=t,this.source=i,this.isWorldSpace=r,this.noiseStrength=s,this.noiseScale=a,this.shadowColor=n,this.offset=o,this.alpha=l,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("worldNormal"),A.require("worldPosition"),A.isShader("fragment")){A.define("COLORS_MAX",10),A.addFragmentVariable(this.calpha,"float");let t=A.include(Lb.Nodes.toon),i=[];return i.push(this.positioning.build(A,"i")),i.push(this.colors.build(A,"v4[]")),i.push(this.steps.build(A,"f[]")),i.push(this.source.build(A,"v3")),i.push(this.isWorldSpace.build(A,"b")),i.push(this.noiseStrength.build(A,"f")),i.push(this.noiseScale.build(A,"f")),i.push(this.shadowColor.build(A,"v4")),i.push(this.offset.build(A,"v3")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}else return console.warn("ToonNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e)}},_b=Lb;_b.Nodes=function(){let A=new RA(`float rand(float n) {
				return fract(sin(n) * 43758.5453123);
			}`),e=new RA(`float hash1(float p) { 
				p = fract(p * 0.011); 
				p *= p + 7.5; 
				p *= p + p; 
				return fract(p); 
			}`),t=new RA(`float valueNoise(vec3 x) {
				const vec3 step = vec3(110, 241, 171);
			
				vec3 i = floor(x);
				vec3 f = fract(x);
			 
				// For performance, compute the base input to a 1D hash from the integer part of the argument and the 
				// incremental change to the 1D based on the 3D -> 1D wrapping
				float n = dot(i, step);
			
				vec3 u = f * f * (3.0 - 2.0 * f);
				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
			}`,[e]),i=new RA(`vec3 hash3(vec3 x) {
				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),
						 dot(x,vec3(269.5, 183.3, 246.1)),
						 dot(x,vec3(113.5, 271.9, 124.6)));
			
				return fract(sin(x)*43758.5453123);
			}`),r=new RA(`vec3 voronoiNoise(in vec3 x)
			{
				vec3 p = floor(x);
				vec3 f = fract(x);

				float id = 0.0;
				vec2 res = vec2(100.0);

				for(int k=-1; k<=1; k++)
				for(int j=-1; j<=1; j++)
				for(int i=-1; i<=1; i++)
				{
					vec3 b = vec3(float(i), float(j), float(k));

					// Comment out the "+ hash(p + b);" part below to get "square" cells
					vec3 r = vec3(b) - f + hash3(p + b);
					float d = dot(r, r);

					if (d < res.x)
					{
						id = dot(p + b, vec3(1.0, 57.0, 113.0));
						res = vec2(d, res.x);			
					}
					else if (d < res.y)
					{
						res.y = d;
					}
				}

				return vec3(sqrt(res), abs(id));
			}
			`,[i]);return{toon:new RA(`vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float alpha, out float calpha) {
				float t = 0.0;
				float shadow = 1.0;

				if (positioning == 0) {

					// Can't do this mode if lighting is "none"
					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))

						// Algorithm from Chapter 10 of Graphics Shaders
						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);
						vec3 lpos;
						vec3 l;
						float dproduct;

						#if (NUM_POINT_LIGHTS > 0)

							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)
								PointLightShadow pointLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
								// Light positions are in view-space for some reason?
								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								
								// TODO: we want to use "intensity" but it isn't available in the shader code
								//dproduct += dot(pointLights[UNROLLED_LOOP_INDEX].color, weights);

								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getPointShadow( 
											pointShadowMap[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowMapSize, 
											pointLightShadow.shadowBias, 
											pointLightShadow.shadowRadius,
											vPointShadowCoord[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowCameraNear, 
											pointLightShadow.shadowCameraFar);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_DIR_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)
								DirectionalLightShadow directionalLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
								// Use the direction vector for directional lights instead
								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;
		
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow( 
										UNROLLED_LOOP_INDEX,
										directionalShadowMap[UNROLLED_LOOP_INDEX], 
										directionalLightShadow.shadowMapSize, 
										directionalLightShadow.shadowBias, 
										directionalLightShadow.shadowRadius, 
										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_SPOT_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)
								SpotLightShadow spotLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow(
										UNROLLED_LOOP_INDEX,
										spotShadowMap[UNROLLED_LOOP_INDEX], 
										spotLightShadow.shadowMapSize, 
										spotLightShadow.shadowBias, 
										spotLightShadow.shadowRadius, 
										vSpotShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						t = clamp(t, 0.0, 1.0);
				
					#endif

				} else if (positioning == 1) {
					
					vec3 origin = mix(position, worldPosition, float(isWorldSpace));
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	

				} else {

					vec3 origin = worldPosition;
					vec3 source = cameraPosition - offset;
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	
					
				}

				if (noiseStrength > 0.0) {
					// Distort with noise
					vec3 st = position / noiseScale;
					
					// Voronoi "smooth" noise
					float noise = 1.0 - voronoiNoise(st).x;

					// Voronoi cellular noise
					//float noise = 1.0 - rand(voronoiNoise(st).z);

					// Position warp noise
					// vec3 offset = vec3(
					// 	simplex3d(st),
					// 	simplex3d(st + vec3(111.1, 143.89, 217.19)),
					// 	simplex3d(st + vec3(171.1, 247.89, 117.23))
					// );
					// st += offset;
					// float noise = valueNoise(st);

					t += noise * noiseStrength;
				}

				t = clamp(t, 0.0, 1.0);

				// Compute ramp color
				float p;
				vec4 color = colors[0];
				for (int i = 1; i < COLORS_MAX; i++) {
					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);
					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
				}

				// Incorporate custom shadow color
				if (positioning == 0) {

					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);
					color.rgb = mix(blendedShadow, color.rgb, shadow);
				
				}

				// Accumulate alpha as usual
				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color.xyz;

            }`,[di.simplex,A,t,r])}}();function ly(A,e,t){A.setUvTransform(t[0],t[1],e[0],e[1],0,0,0)}var $U=class extends ab{constructor(A,e){super(new Dt),this.repeat=A,this.offset=e,ly(this.value,A,e)}updateMatrix(){ly(this.value,this.repeat,this.offset)}},Js=class{constructor(A,e,t,i){this.id=A,this.uuid=e,this.data=t,this.uniforms={};for(let r in i)this.uniforms[`f${this.id}_${r}`]=i[r];for(let r in t)Bb(r,this,t)}get type(){return this.data.type}static create(A,e,t,i){var r,s,a,n,o,l,u,h,c,d,f;if(t.type==="light")return Qa.createLigherLayer(A,e,t,i);if(t.type==="texture"||t.type==="video"){let m=t.type==="texture"?i.image(t.texture.image):i.video(t.texture.video),p=new Fp(m,t.texture.wrapping),g=new JU(m),v=new $U(t.texture.repeat,t.texture.offset),x=new OA(t.crop?1:0),y=new be((r=t.projection)!=null?r:0),S=new be((s=["x","y","z"].indexOf(t.axis))!=null?s:0),w=new be((a=t.side)!=null?a:0),M=new li(t.size?new H(t.size[0],t.size[1]):new H(100,100)),b=new OA((n=t.alpha)!=null?n:1),E=new be((o=t.mode)!=null?o:0),C=new wb(p,g,x,y,S,w,M,v,b,E),D=new Le(C.calpha,"f");return new nt(A,e,t,{texture:p,textureSize:g,crop:x,projection:y,axis:S,side:w,size:M,mat:v,alpha:b,mode:E},C,E,D)}else if(t.type==="matcap"){let m=i.image(t.texture.image),p=new Fp(m,t.texture.wrapping),g=new OA((l=t.alpha)!=null?l:1),v=new be((u=t.mode)!=null?u:0),x=new Pb(p,g,v),y=new Le(x.calpha,"f");return new nt(A,e,t,{texture:p,alpha:g,mode:v},x,v,y)}else if(t.type==="displace")if(t.displacementType==="noise"){let m=new ai(new T(...t.offset)),p=new OA((h=t.scale)!=null?h:10),g=new OA((c=t.intensity)!=null?c:8),v=new OA((d=t.movement)!=null?d:1),x=new be((f=t.noiseType)!=null?f:0),y=new vb(g,v,m,p,x);return new Ob(A,e,t,{offset:m,scale:p,intensity:g,movement:v,noiseType:x},y)}else throw new Error;else return tk(A,e,t,i)}updateByOp(A,e,t){var r;let i=A;if(i.path[0]===void 0){if(i.type===0)return"type"in i.props||"category"in i.props?((r=t.scene)==null||r.markNeedsUpdateRendererDirty(),!0):KU(i.props,t.shared,this,e)}else if(i.path[0]==="texture")return"texture"in e||"video"in e?Cb(i.props,t.shared,this):!0;return!1}dispose(){if(Ak(this)){let A=this.uniforms[`f${this.id}_texture`];if(!A)return!1;let e=A;e.image instanceof Hs||e.image.deref()}}hasValueByKey(A){return this.uniforms[A]!==void 0}hasValue(A){return this.hasValueByKey(`f${this.id}_${A}`)}setValue(A,e){let t=`f${this.id}_${A}`;this.hasValueByKey(t)&&e!==void 0&&(this.uniforms[t].value=e)}getNode(A){let e=`f${this.id}_${A}`;if(this.hasValueByKey(e))return this.uniforms[e]}getValue(A){let e=`f${this.id}_${A}`;if(this.hasValueByKey(e))return this.uniforms[e].value}getName(A){let e=/f\d+_(.*)/.exec(A);if(e&&e.length>1)return e[1];console.log(`Layer.getName: error ${A}`)}getNames(){let A=[];for(let e in this.uniforms){let t=this.getName(e);t&&A.push(t)}return A}},nt=class extends Js{constructor(A,e,t,i,r,s,a){super(A,e,t,i),this.params=i,this.color=r,this.mode=s,this.alpha=a}},Ob=class extends Js{constructor(A,e,t,i,r){super(A,e,t,i),this.position=r}},Qa=class extends Js{constructor(A,e,t,i,r){super(A,e,t,r),this.node=i}static createLigherLayer(A,e,t,i){var o,l,u,h,c,d,f,m;let r,s=new OA(t.alpha),a=new be(t.mode),n;if(!t.visible)r=new sb,n={};else if(t.category==="lambert"){r=new PU;let p=new Ge((o=i.color(t.emissive))!=null?o:0);n={emissive:p},r.emissive=p}else if(t.category==="toon"){r=new OU;let p=new OA((l=t.shininess)!=null?l:30),g=new Ge((u=i.color(t.specular))!=null?u:1118481);n={shininess:p,specular:g},r.shininess=p,r.specular=g}else if(t.category==="physical"){r=new _U;let p=new OA((h=t.roughness)!=null?h:.3),g=new OA((c=t.metalness)!=null?c:0),v=new OA((d=t.reflectivity)!=null?d:.5);n={roughness:p,metalness:g,reflectivity:v},r.roughness=p,r.metalness=g,r.reflectivity=v}else{r=new LU;let p=new OA((f=t.shininess)!=null?f:30),g=new Ge((m=i.color(t.specular))!=null?m:1118481);n={shininess:p,specular:g},r.shininess=p,r.specular=g}return r.alpha=new OA(1),r.shadingAlpha=s,r.shadingBlend=a,n.alpha=r.shadingAlpha,n.mode=r.shadingBlend,new Qa(A,e,t,r,n)}get category(){return this.node.category}};function Ak(A){let e=A instanceof Js?A.type:A;return e==="texture"||e==="video"||e==="displace_map"||e==="matcap"}function ek(A,e,t,i){var r,s,a,n,o,l,u,h,c,d,f,m,p,g,v,x,y,S,w,M,b,E,C,D,P,z,O,G,X,U,_,V,F,R,B,k,W,Q,j,tA,K,Z,J,lA,hA,nA,pA,cA,mA,BA,MA,EA,De,UA,N,L,iA,uA,gA,bA,YA,rA,CA,SA,wA,Y,xA,vA,HA,PA,XA,dA,WA;switch(A.type){case"color":{let fA=new Ge((r=i.color)!=null?r:5855577),_A=new OA((s=i.alpha)!=null?s:1),NA=new Le("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");NA.keywords.alpha=_A;let QA=new be((a=i.mode)!=null?a:0);return fA.alpha=_A,new nt(e,t,A,{color:fA,alpha:_A,mode:QA},fA,QA,NA)}case"fresnel":{let fA=new Ge((n=i.color)!=null?n:16777215),_A=new OA((o=i.bias)!=null?o:.1),NA=new OA((l=i.scale)!=null?l:1),QA=new OA((u=i.intensity)!=null?u:2),xe=new OA((h=i.factor)!=null?h:1),Oe=new OA((c=i.alpha)!=null?c:1),pe=new be((d=i.mode)!=null?d:0),Me=new lb(fA,_A,NA,QA,xe,Oe,pe),we=new Le(Me.calpha,"f");return new nt(e,t,A,{color:fA,bias:_A,scale:NA,intensity:QA,factor:xe,alpha:Oe,mode:pe},Me,pe,we)}case"rainbow":{let fA=new OA((f=i.filmThickness)!=null?f:30),_A=new OA((m=i.movement)!=null?m:0),NA=new ai((p=i.wavelengths)!=null?p:new T(0,0,0)),QA=new OA((g=i.noiseStrength)!=null?g:0),xe=new OA((v=i.noiseScale)!=null?v:1),Oe=new ai((x=i.offset)!=null?x:new T(0,0,0)),pe=new OA((y=i.alpha)!=null?y:1),Me=new cb(fA,_A,NA,QA,xe,Oe,pe),we=new Le(Me.calpha,"f"),Ee=new be((S=i.mode)!=null?S:0);return new nt(e,t,A,{filmThickness:fA,movement:_A,wavelengths:NA,noiseStrength:QA,noiseScale:xe,offset:Oe,alpha:pe,mode:Ee},Me,Ee,we)}case"transmission":{let fA=new OA((w=i.thickness)!=null?w:10),_A=new OA((M=i.ior)!=null?M:1.5),NA=new OA((b=i.roughness)!=null?b:.5),QA=Be.transmissionSize,xe=Be.transmissionRenderTarget,Oe=Be.transmissionRenderTargetDepth,pe=window.innerWidth,Me=window.innerHeight,we=pe>=Me?new li(Me/pe,1):new li(1,pe/Me),Ee=new OA((E=i.alpha)!=null?E:1),tt=new fb(fA,_A,NA,QA,xe,Oe,we,Ee),Ut=new Le(tt.calpha,"f"),wt=new be((C=i.mode)!=null?C:0);return new nt(e,t,A,{thickness:fA,ior:_A,roughness:NA,aspectRatio:we,alpha:Ee,mode:wt},tt,wt,Ut)}case"toon":{let fA=new be((D=i.positioning)!=null?D:0),_A;i.colors?_A=new Is(i.colors.length,i.colors):(_A=new Is(10,new ee(0,0,0,1)),_A.value[1]=new ee(1,1,1,1));let NA;i.steps?NA=new Bs(i.steps.length,i.steps):(NA=new Bs(10,1),NA.value[0]=0);let QA=new ai((P=i.source)!=null?P:new T(0,0,0)),xe=new to((z=i.isWorldSpace)!=null?z:!0),Oe=new OA((O=i.noiseStrength)!=null?O:0),pe=new OA((G=i.noiseScale)!=null?G:1),Me=new Fs(i.shadowColor),we=new ai((X=i.offset)!=null?X:new T(0,0,0)),Ee=new OA((U=i.alpha)!=null?U:1),tt=new _b(fA,_A,NA,QA,xe,Oe,pe,Me,we,Ee),Ut=new Le(tt.calpha,"f"),wt=new be((_=i.mode)!=null?_:0);return new nt(e,t,A,{positioning:fA,colors:_A,steps:NA,source:QA,isWorldSpace:xe,noiseStrength:Oe,noiseScale:pe,shadowColor:Me,offset:we,alpha:Ee,mode:wt},tt,wt,Ut)}case"outline":{let fA=new Ge((V=i.outlineColor)!=null?V:16777215),_A=new Ge((F=i.contourColor)!=null?F:16777215),NA=new OA((R=i.outlineWidth)!=null?R:.1),QA=new OA((B=i.contourWidth)!=null?B:.1),xe=new OA((k=i.outlineThreshold)!=null?k:.1),Oe=new OA((W=i.contourThreshold)!=null?W:.1),pe=new OA((Q=i.outlineSmoothing)!=null?Q:.1),Me=new OA((j=i.contourFrequency)!=null?j:.1),we=new ai((tA=i.contourDirections)!=null?tA:new T(0,1,0)),Ee=new to((K=i.positionalLines)!=null?K:!1),tt=new to((Z=i.compensation)!=null?Z:!0),Ut=Be.normalRenderTarget,wt=Be.normalRenderTargetDepth,I=Be.pixelRatioNode,$=Be.resolution,sA=new OA((J=i.alpha)!=null?J:1),eA=new db(fA,_A,NA,QA,xe,Oe,pe,Me,we,Ee,tt,$,Ut,wt,I,sA),oA=new Le(eA.calpha,"f"),FA=new be((lA=i.mode)!=null?lA:0);return new nt(e,t,A,{outlineColor:fA,contourColor:_A,outlineWidth:NA,contourWidth:QA,outlineThreshold:xe,contourThreshold:Oe,outlineSmoothing:pe,contourFrequency:Me,contourDirection:we,positionalLines:Ee,compensation:tt,alpha:sA,mode:FA},eA,FA,oA)}case"depth":{let fA=new be((hA=i.gradientType)!=null?hA:0),_A=new to((nA=i.smooth)!=null?nA:!1),NA=new OA((pA=i.near)!=null?pA:50),QA=new OA((cA=i.far)!=null?cA:200),xe=new OA((mA=i.isVector)!=null?mA:1),Oe=new OA((BA=i.isWorldSpace)!=null?BA:0),pe=new ai((MA=i.origin)!=null?MA:new T),Me=new ai((EA=i.direction)!=null?EA:new T),we;i.colors?we=new Is(i.colors.length,i.colors):(we=new Is(2,new ee(0,0,0,1)),we.value[1]=new ee(1,1,1,1));let Ee;i.steps?Ee=new Bs(i.steps.length,i.steps):(Ee=new Bs(2,1),Ee.value[0]=0);let tt=new OA((De=i.alpha)!=null?De:1),Ut=new be((UA=i.mode)!=null?UA:0),wt=new mb(fA,_A,NA,QA,xe,Oe,pe,Me,we,Ee,tt),I=new Le(wt.calpha,"f");return new nt(e,t,A,{gradientType:fA,smooth:_A,near:NA,far:QA,isVector:xe,isWorldSpace:Oe,origin:pe,direction:Me,colors:we,steps:Ee,alpha:tt,mode:Ut},wt,Ut,I)}case"noise":{let fA=new OA((N=i.scale)!=null?N:1),_A=new ai((L=i.size)!=null?L:new T(100,100,100)),NA=new OA((iA=i.move)!=null?iA:1),QA=new li((uA=i.fA)!=null?uA:new H(1.7,9.2)),xe=new li((gA=i.fB)!=null?gA:new H(8.3,2.8)),Oe=new li((bA=i.distortion)!=null?bA:new H(1,1)),pe=new Fs(i.colorA),Me=new Fs(i.colorB),we=new Fs(i.colorC),Ee=new Fs(i.colorD),tt=new OA((YA=i.alpha)!=null?YA:1),Ut=new be((rA=i.mode)!=null?rA:0),wt=new be((CA=i.noiseType)!=null?CA:0),I=new nb(fA,_A,NA,QA,xe,Oe,pe,Me,we,Ee,tt,wt),$=new Le(I.calpha,"f");return new nt(e,t,A,{scale:fA,size:_A,move:NA,fA:QA,fB:xe,distortion:Oe,colorA:pe,colorB:Me,colorC:we,colorD:Ee,alpha:tt,mode:Ut,noiseType:wt},I,Ut,$)}case"normal":{let fA=new ai((SA=i.cnormal)!=null?SA:new T(1,1,1)),_A=new OA((wA=i.alpha)!=null?wA:1),NA=new be((Y=i.mode)!=null?Y:0),QA=new Sb(fA,_A),xe=new Le("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");return xe.keywords.alpha=_A,new nt(e,t,A,{cnormal:fA,alpha:_A,mode:NA},QA,NA,xe)}case"gradient":{let fA=new be((xA=i.gradientType)!=null?xA:0),_A=new to((vA=i.smooth)!=null?vA:!1),NA;i.colors?NA=new Is(i.colors.length,i.colors):(NA=new Is(10,new ee(0,0,0,1)),NA.value[1]=new ee(1,1,1,1));let QA;i.steps?QA=new Bs(i.steps.length,i.steps):(QA=new Bs(10,1),QA.value[0]=0);let xe=new li((HA=i.offset)!=null?HA:new H(0,0)),Oe=new li((PA=i.morph)!=null?PA:new H(0,0)),pe=new OA((XA=i.angle)!=null?XA:0),Me=new OA((dA=i.alpha)!=null?dA:1),we=new be((WA=i.mode)!=null?WA:0),Ee=new xb(fA,_A,NA,QA,xe,Oe,pe,Me),tt=new Le(Ee.calpha,"f");return new nt(e,t,A,{gradientType:fA,smooth:_A,colors:NA,steps:QA,offset:xe,morph:Oe,angle:pe,alpha:Me,mode:we},Ee,we,tt)}default:{let fA=new Ge(1,0,0,1),_A=new OA(1),NA=new Le("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");NA.keywords.alpha=_A;let QA=new be(0);return fA.alpha=_A,new nt(e,t,A,{color:fA,alpha:_A,mode:QA},fA,QA,NA)}}}function tk(A,e,t,i){let r=BU(t,i);return ek(t,A,e,r)}function Bb(A,e,t){if(t.type==="displace"&&(A==="intensity"||A==="visible")){let i=e.uniforms[`f${e.id}_intensity`];return i?(i.value=t.intensity*(t.visible?1:0),i):void 0}if(t.type!=="displace"&&(A==="alpha"||A==="visible")){let i=e.uniforms[`f${e.id}_alpha`];if(!i)return;if(i.value=t.alpha*(t.visible?1:0),t.type==="outline"&&A==="visible"){let r=e.uniforms[`f${e.id}_compensation`];r&&(r.value=t.compensation&&t.visible)}return i}}function hy(A,e){let t=0;for(let i of A.layers)if(i.data.type!=="displace"&&"alpha"in i.data&&i.data.type!=="light"&&i.data.type!=="fresnel"&&i.data.type!=="texture"&&i.data.type!=="matcap"&&i.data.type!=="rainbow"&&i.data.type!=="outline"){let r=i.data.visible?i.data.alpha:0;if(r==1&&i.data.type=="depth"||i.data.type=="gradient"){for(let s of i.data.colors)if(s[3]<1){r=s[3];break}}else if(r==1&&i.data.type=="noise"){let s=e.color(i.data.colorA).a,a=e.color(i.data.colorB).a,n=e.color(i.data.colorC).a,o=e.color(i.data.colorD).a,l=Math.min(s,Math.min(a,Math.min(n,o)));l<1&&(r=l)}t+=(1-t)*r}return t<1}var vs=class extends At{constructor(){super(void 0),this.flatShading=!1,this.cacheKey="",this.fog=!0,this.dithering=!0,this.vertexColors=!0,this.transparent=!0}customProgramCacheKey(){return this.cacheKey}},ik=class extends vs{constructor(A,e,t,i){super(),this.flatShading=A,this.side=e,this.wireframe=t,this.root=i}updateAfterBuild(){let A=this.root;this.lights=A.lights,this.vertexShader=A.vertexShader,this.fragmentShader=A.fragmentShader,this.defines=A.defines,this.uniforms=A.uniforms,this.extensions=A.extensions,this.transparent=A.transparent,this.cacheKey=A.customProgramCacheKey()+"flat"+this.flatShading+this.side}onBeforeCompile(A,e){this.root.onBeforeCompile(A)}get data(){return this.root.data}get category(){return this.root.category}getFlavor(A,e,t){return this.root.getFlavor(A,e,t)}get layers(){return this.root.layers}get fragment(){return this.root.fragment}getLayersOfType(A){return this.root.getLayersOfType(A)}getLayerByUuid(A){return this.root.getLayerByUuid(A)}updateByOp(A,e,t){this.root.updateByOp(A,e,t)}nodeMaterialDispose(){this.root.nodeMaterialDispose()}},Ib=class extends vs{constructor(A,e){super(),this.data=A,this.layerIdGen=0,this.flavors=[],this.type="NodeMaterial",this.updaters=[],this.reset0(A,e)}get nodeMaterial(){return this}getFlavor(A,e,t){let i=t?6:(A?3:0)+e;if(i===0)return this;this.flavors===void 0&&(this.flavors=[]),i-=1;let r=this.flavors[i];return r===void 0&&(r=new ik(A,e,t,this),this.flavors[i]=r,r.flatShading=A,r.side=e,r.updateAfterBuild()),r}get fragment(){return this.lightLayer.node}get category(){return this.lightLayer.category}reset(A,e){this.data!==A&&this.reset0(A,e)}reset0(A,e){var i,r;this.data=A;let t=(i=A.layers)!=null?i:Jt.defaultTwoLayerData("phong").layers;this.layers=t.map(s=>Js.create(this.layerIdGen++,s.id,s.data,e.shared)),this.layers.reverse(),this.name=(r=A.name)!=null?r:"Untitled Material",this.onUpdate(),this.transparent=hy(A,e.shared)}getLayersOfType(A){return this.layers.filter(e=>e.type===A)}getLayerByUuid(A){return this.layers.find(e=>e.uuid===A)}onUpdate(){this.cacheKey=this.computeCacheKey(),this.lightLayer=this.layers.find(A=>A instanceof Qa),this.lightLayer===void 0&&(this.lightLayer=new Qa(0,"",{...ci.defaultData("light","phong"),visible:!1},new sb,{})),this.dispose(),this.needsUpdate=!0,this.blendColors(),this.blendAfterColors(),this.blendPositions()}updateByOp(A,e,t){var i,r,s;if(this.data=e,this.transparent=hy(e,t.shared),A.path[0]==="layers"){this.data=e;let a=t.shared,n=A.path[1];if(n===void 0){if(this.layers.reverse(),A.type===4){let o=Js.create(this.layerIdGen++,A.id,A.data,t.shared);this.layers.splice(A.localIndex,0,o),(i=t.scene)==null||i.markNeedsUpdateRendererDirty()}else if(A.type===5)this.layers.splice(A.localIndex,1)[0].dispose(),(r=t.scene)==null||r.markNeedsUpdateRendererDirty();else if(A.type===6){let o=this.layers.findIndex(u=>u.uuid===A.id),l=this.layers[o];this.layers.splice(o,1),this.layers.splice(A.localIndex,0,l),(s=t.scene)==null||s.markNeedsUpdateRendererDirty()}this.layers.reverse(),this.onUpdate()}else{let o=this.layers.find(l=>l.uuid===n);if(o){let l=e.layers.data(n);if(o.updateByOp({...A,path:A.path.slice(2)},l,t)){let u=Js.create(this.layerIdGen++,n,l,a);this.layers.splice(this.layers.findIndex(h=>h.uuid===n),1,u),this.onUpdate()}}}}else this.reset(e,t)}blendColors(){let A=this.layers.findIndex(t=>t instanceof nt),e=this.layers.findIndex(t=>t instanceof Qa);if(A!==-1&&A<e){let t=this.layers[A].color;for(let i=A+1;i<e;++i){let r=this.layers[i];r instanceof nt&&(t=new oy(t,r.color,r.alpha,r.mode))}this.fragment.color=t}else this.fragment.color=void 0}blendAfterColors(){let A=new Le("outgoingLight","f"),e=this.layers.findIndex(t=>t instanceof Qa);if(this.layers.length>e+1){for(let t=e+1;t<this.layers.length;++t){let i=this.layers[t];i instanceof nt&&(A=new oy(A,i.color,i.alpha,i.mode))}this.fragment.afterColor=A}else this.fragment.afterColor=void 0}blendPositions(){let A=this.layers.filter(e=>e instanceof Ob);if(A.length>0){let e=A[0].position;for(let t=1;t<A.length;++t)A[t]&&(e=new tr(e,A[t].position,tr.ADD),e=new tr(e,new OA(.5).setReadonly(!0),tr.MUL));this.fragment.position=e}else this.fragment.position=void 0}getDefines(){return this.defines}getUniforms(){return this.uniforms}getVertexShader(){return this.vertexShader}getFragmentShader(){return this.fragmentShader}onBeforeCompile(A){this.build(),A.defines=this.defines,A.uniforms=this.uniforms,A.vertexShader=this.vertexShader,A.fragmentShader=this.fragmentShader,A.extensionDerivatives=this.extensions.derivatives===!0,A.extensionFragDepth=this.extensions.fragDepth===!0,A.extensionDrawBuffers=this.extensions.drawBuffers===!0,A.extensionShaderTextureLOD=this.extensions.shaderTextureLOD===!0}clampUniformsForPreview(A,e){let t=(i,r,s)=>Math.min(Math.max(i,r),s);for(let i of this.layers)if(i.type==="displace"){let r=t(i.uniforms[`f${i.id}_intensity`].value,A,e);i.uniforms[`f${i.id}_intensity`].value=r}}computeCacheKey(){var e,t;let A="[";for(let{data:i}of this.data.layers)if(i.type==="light")A+=`"${i.visible?i.category.toUpperCase():"Basic"}"`;else{let r=((e=Eb[i.type])!=null?e:[]).map(n=>i[n]),s=((t=Tb[i.type])!=null?t:[]).map(n=>{var o,l;return(l=(o=i[n])==null?void 0:o.length)!=null?l:0}),a=[...r,...s];a.length?A+=`["${i.type}", "${a.join('","')}"],`:A+=`"${i.type}",`}return A=A.slice(0,-1)+"]",A}updateFrame(A){for(let e=0;e<this.updaters.length;++e)A.updateNode(this.updaters[e])}build(){let A=new DU;this.lights=this.lightLayer.data.visible,A.build(this.fragment,this.fragment),this.vertexShader=A.getCode("vertex"),this.fragmentShader=A.getCode("fragment"),this.defines=A.defines,this.uniforms=A.uniforms,this.extensions=A.extensions,this.updaters=A.updaters;for(let e of this.flavors)e&&e.updateAfterBuild();return this}nodeMaterialDispose(){this.layers.forEach(A=>A.dispose()),super.dispose();for(let A of this.flavors)A&&A.dispose()}assetsLoaded(){for(let A of this.layers)if(A instanceof nt){let e=A.params.texture;if(e instanceof Fp&&!e.image.loaded)return!1}return!0}getHash(){let A="{";return A+='"fragment":'+this.fragment.getHash(),A+="}",A}};Object.defineProperties(vs.prototype,{properties:{get:function(){return this.fragment.properties}}});var Up=class extends Ib{},rk=Ec(VS()),cy=new Map;function sk(A){if(typeof A=="string")return A;let e=cy.get(A);return e||(e={url:URL.createObjectURL(new Blob([A]))},cy.set(A,e)),e.url}var wo=class{constructor({src:A,volume:e,delay:t,loop:i}){this._volume=1,this.delay=0,this._loop=1,this.loopsRemaining=0,this._status="stopped",this.onEnd=()=>{this.loopsRemaining===1/0?this.replay():this.loopsRemaining>1?(this.replay(),this.loopsRemaining--):(this._status="stopped",this.loopsRemaining=this._loop)};let r;typeof A=="string"?r={src:A}:r={src:sk(A),format:"wav"},this.sound=new rk.Howl(r),this.sound.on("end",this.onEnd),this.src=A,e!==void 0&&(this.volume=e),t!==void 0&&(this.delay=t),i!==void 0&&(this.loop=i)}get status(){return this._status}get volume(){return this._volume}set volume(A){this._volume=A,this.sound.volume(A)}get loop(){return this._loop}set loop(A){this._loop=A,this.loopsRemaining=A}replay(){this.clearDelay(),this.delayTimerId=window.setTimeout(()=>{this.sound.play(),this.clearDelay()},this.delay)}fade(A,e=1e3){A?(this.sound.volume(this._volume),this.clearFade(),this.fadeTimerId=window.setTimeout(()=>{this.sound.fade(this._volume,0,e),this.clearFade()},A)):this.sound.fade(this._volume,0,e)}on(A,e,t){this.sound.on(A,e,t)}off(A,e,t){this.sound.off(A,e,t)}play(){this._status==="playing"||this.sound.playing()||(this._status==="paused"?(this.sound.seek()===0?this.replay():this.sound.play(),this._status="playing"):this._status==="stopped"&&(this.replay(),this._status="playing"))}pause(){this._status==="playing"&&(this.sound.pause(),this.clearFade(),this.clearDelay(),this._status="paused")}stop(){this.sound.stop(),this.loopsRemaining=this._loop,this.clearFade(),this.clearDelay(),this._status="stopped"}clearFade(){this.fadeTimerId&&(clearTimeout(this.fadeTimerId),delete this.fadeTimerId)}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}dispose(A=!1){this.off(),this.stop(),this.clearFade(),this.clearDelay()}},ak=class{constructor(){this.type="ShapePath",this.color=new GA,this.subPaths=[],this.currentPath=null}moveTo(A,e){return this.currentPath=new Rh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(A,e),this}lineTo(A,e){var t;return(t=this.currentPath)==null||t.lineTo(A,e),this}quadraticCurveTo(A,e,t,i){var r;return(r=this.currentPath)==null||r.quadraticCurveTo(A,e,t,i),this}bezierCurveTo(A,e,t,i,r,s){var a;return(a=this.currentPath)==null||a.bezierCurveTo(A,e,t,i,r,s),this}splineThru(A){var e;return(e=this.currentPath)==null||e.splineThru(A),this}toShapes(){let A={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},e={loc:A.ORIGIN,t:0};function t(d,f,m,p){let g=d.x,v=f.x,x=m.x,y=p.x,S=d.y,w=f.y,M=m.y,b=p.y,E=(y-x)*(S-M)-(b-M)*(g-x),C=(v-g)*(S-M)-(w-S)*(g-x),D=(b-M)*(v-g)-(y-x)*(w-S),P=E/D,z=C/D;if(D===0&&E!==0||P<=0||P>=1||z<0||z>1)return null;if(E===0&&D===0){for(let O=0;O<2;O++)if(i(O===0?m:p,d,f),e.loc===A.ORIGIN){let G=O===0?m:p;return{x:G.x,y:G.y,t:e.t}}else if(e.loc===A.BETWEEN){let G=+(g+e.t*(v-g)).toPrecision(10),X=+(S+e.t*(w-S)).toPrecision(10);return{x:G,y:X,t:e.t}}return null}else{for(let X=0;X<2;X++)if(i(X===0?m:p,d,f),e.loc===A.ORIGIN){let U=X===0?m:p;return{x:U.x,y:U.y,t:e.t}}let O=+(g+P*(v-g)).toPrecision(10),G=+(S+P*(w-S)).toPrecision(10);return{x:O,y:G,t:P}}}function i(d,f,m){let p=m.x-f.x,g=m.y-f.y,v=d.x-f.x,x=d.y-f.y,y=p*x-v*g;if(d.x===f.x&&d.y===f.y){e.loc=A.ORIGIN,e.t=0;return}if(d.x===m.x&&d.y===m.y){e.loc=A.DESTINATION,e.t=1;return}if(y<-Number.EPSILON){e.loc=A.LEFT;return}if(y>Number.EPSILON){e.loc=A.RIGHT;return}if(p*v<0||g*x<0){e.loc=A.BEHIND;return}if(Math.sqrt(p*p+g*g)<Math.sqrt(v*v+x*x)){e.loc=A.BEYOND;return}let S;p!==0?S=v/p:S=x/g,e.loc=A.BETWEEN,e.t=S}function r(d,f){let m=[],p=[];for(let g=1;g<d.length;g++){let v=d[g-1],x=d[g];for(let y=1;y<f.length;y++){let S=f[y-1],w=f[y],M=t(v,x,S,w);M!==null&&m.find(b=>b.t<=M.t+Number.EPSILON&&b.t>=M.t-Number.EPSILON)===void 0&&(m.push(M),p.push(new H(M.x,M.y)))}}return p}function s(d,f,m){let p=new H;f.getCenter(p);let g=[];return m.forEach(v=>{v.boundingBox.containsPoint(p)&&r(d,v.points).forEach(x=>{g.push({identifier:v.identifier,isCW:v.isCW,point:x})})}),g.sort((v,x)=>v.point.x-x.point.x),g}function a(d,f,m,p,g){(g==null||g==="")&&(g="nonzero");let v=new H;d.boundingBox.getCenter(v);let x=[new H(m,v.y),new H(p,v.y)],y=s(x,d.boundingBox,f);y.sort((C,D)=>C.point.x-D.point.x);let S=[],w=[];y.forEach(C=>{C.identifier===d.identifier?S.push(C):w.push(C)});let M=S[0].point.x,b=[],E=0;for(;E<w.length&&w[E].point.x<M;)b.length>0&&b[b.length-1]===w[E].identifier?b.pop():b.push(w[E].identifier),E++;if(b.push(d.identifier),g==="evenodd"){let C=b.length%2===0,D=b[b.length-2];return{identifier:d.identifier,isHole:C,for:D}}else if(g==="nonzero"){let C=!0,D=null,P=null;for(let z=0;z<b.length;z++){let O=b[z];f[O]&&(C?(P=f[O].isCW,C=!1,D=O):P!==f[O].isCW&&(P=f[O].isCW,C=!0))}return{identifier:d.identifier,isHole:C,for:D}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let n=0,o=999999999,l=-999999999,u=[];this.subPaths.forEach(d=>{let f=d.getPoints(),m=-999999999,p=999999999,g=-999999999,v=999999999;for(let x=0;x<f.length;x++){let y=f[x];y.y>m&&(m=y.y),y.y<p&&(p=y.y),y.x>g&&(g=y.x),y.x<v&&(v=y.x)}l<=g&&(l=g+1),o>=v&&(o=v-1),f.length&&u.push({curves:d.curves,points:f,isCW:n1.isClockWise(f),identifier:n++,boundingBox:new FP(new H(v,p),new H(g,m))})});let h=u.map(d=>{var f;return a(d,u,o,l,(f=this.userData)==null?void 0:f.style.fillRule)}),c=[];return u.forEach(d=>{let f=h[d.identifier];if(f&&!f.isHole){let m=new Nh;m.curves=d.curves,h.filter(p=>(p==null?void 0:p.isHole)&&p.for===d.identifier).forEach(p=>{if(p){let g=u[p.identifier],v=new Rh;v.curves=g.curves,m.holes.push(v)}}),c.push(m)}}),c}},Rb,uy=new Promise(A=>{Rb=A}),dy=!1;async function nk(){if(dy)return;let A=await Mc(()=>import("./opentype.84f4b5e1.js"),[]);Rb(A),dy=!0}var ok=class{async load(A,e,t=()=>{}){let{load:i}=await uy;i(A,(r,s)=>{r||!s?t(r!=null?r:"Something went wrong"):e(s)})}async parse(A){let{parse:e,Bidi:t}=await uy;try{let i=e(A),r=new t,s=a=>i.charToGlyphIndex(a.char);return r.registerModifier("glyphIndex",null,s),r.applyFeatures(i,i.defaultRenderOptions.features),{font:i,bidi:r}}catch(i){console.error(i)}}};async function lk(A){return await(await fetch(A)).arrayBuffer()}var hk=new ok;async function py(A){let e,t,i=!1;if(A.url?(e=await lk(A.url),t=A.url,i=A.url.startsWith("/")):A.data&&(e=A.data.buffer),e){let r=await hk.parse(e);if(r)return{font:r.font,url:t,intercepted:i,arr:e,bidi:r.bidi}}}function ck(A,e){return e.state.glyphIndex===A||e.state.fina===A||e.state.medi===A||e.state.init===A}var uk=class{constructor(A){var e;this._arrayBuffer=new ArrayBuffer(1),this._isLoaded=!1,this._intercepted=!1,this._isUserFont=(e=A.isUserFont)!=null?e:!1,this._loadingPromise=py(A).then(t=>{t&&(this._arrayBuffer=t.arr,this._url=t.url,this.font=t.font,this._intercepted=t.intercepted,this._isLoaded=!0,this._bidi=t.bidi)})}update(A){var e;this._isLoaded=!1,this._isUserFont=(e=A.isUserFont)!=null?e:!1,this._loadingPromise=py(A).then(t=>{t&&(this._arrayBuffer=t.arr,this._url=t.url,this.font=t.font,this._intercepted=t.intercepted,this._isLoaded=!0,this._bidi=t.bidi)})}get url(){return this._url}get intercepted(){return this._intercepted}get isLoaded(){return this._isLoaded}get loadingPromise(){return this._loadingPromise}reverseLigaturesTable(A,e,t){if(!this._bidi)return[];let i=this._bidi;i.getTextGlyphs(e);let r=i.tokenizer.tokens,s=[],a=0,n=t.length===r.length;for(let o=0;o<t.length;o++){let l=t[o].index,u=String.fromCharCode(t[o].unicode),h=r[a];if(ck(l,h)||n)s.push({char:u,index:l,replacements:[h.state.glyphIndex],replacementChars:[h.char]}),a++;else{let c=h.char,d="",f=[h.state.glyphIndex],m=[],p=!1;for(;!p;)a++,d=e.charAt(a),c+=d,f.push(A.charToGlyphIndex(d)),m=A.stringToGlyphs(c),m.length===1&&m[0].index===l&&(p=!0),a>e.length&&(p=!0);s.push({char:u,index:l,replacements:f,replacementChars:Array.from(c)}),a++}}return s}generateShapes(A,e){if(!this._isLoaded)return;let t=this.font,i=e.fontSize/this.unitsPerEm,r=e.fontSize*e.lineHeight,s=A.map(g=>this.getTextWidth(g,e)),a=e.width,n=this.getCharWidth(`
`,e),o=e.horizontalAlign===1?n:0,l=this.computeSpaceWidthForLine(A,0,e),u=this.getLineInitialOffsetX(s[0],a,e.horizontalAlign,A[0],n),h=this.getLineInitialOffsetY(r,A.length,e.height,i,e.verticalAlign),c=[],d=A.map(g=>[]),f=A.map(g=>[]),m;for(let g=0;g<A.length;g++){let v=A[g],x={features:{liga:!0}},y=[];try{y=t.stringToGlyphs(v,x)}catch(w){console.warn(w)}u=this.getLineInitialOffsetX(s[g],a,e.horizontalAlign,v,n);let S=[];try{S=this.reverseLigaturesTable(t,v,y)}catch(w){console.warn(w)}l=this.computeSpaceWidthForLine(A,g,e);for(let w=0;w<y.length;w++){let M=y[w],b=M.index===0?`
`:M.unicode?String.fromCharCode(M.unicode):void 0,E=S[w],C=0,D=0;w===0&&e.horizontalAlign===2&&M.leftSideBearing!==void 0&&(D=-M.leftSideBearing*i),m&&(C=t.getKerningValue(M,m)*i),u+=D+C;let P=0;if(b===`
`)P=o;else if(b===" ")P=l;else{let z=this.createPath(M,i,u,h,e);z&&(P=z.offsetX-(C+D),c.push(z.path))}if(E.replacements.length===1)f[g].push([u,h]),d[g].push(P);else{let z=E.replacements.map(U=>{var _;return((_=t.glyphs.get(U).advanceWidth)!=null?_:0)*i}),O=z.reduce((U,_)=>U+=_,0),G=z.map(U=>U/O),X=u;for(let U=0;U<G.length;U++){let _=P*G[U];f[g].push([X,h]),d[g].push(_),X+=_}}u+=P,m=M}h-=r}let p=[];for(let g=0,v=c.length;g<v;g++)p.push(...c[g].toShapes());return{shapes:p,charWidths:d,lineWidths:s,charCoords:f}}get isUserFont(){return this._isUserFont}get arrayBuffer(){return this._arrayBuffer}get ascender(){var A,e;return(e=(A=this.font)==null?void 0:A.ascender)!=null?e:0}get descender(){var A,e;return(e=(A=this.font)==null?void 0:A.descender)!=null?e:0}get familyName(){var A,e;return(e=(A=this.font)==null?void 0:A.names.fontFamily)!=null?e:""}get subfamilyName(){var A,e;return(e=(A=this.font)==null?void 0:A.names.fontSubfamily)!=null?e:""}get unitsPerEm(){var A,e;return(e=(A=this.font)==null?void 0:A.unitsPerEm)!=null?e:1}getLineInitialOffsetX(A,e,t,i,r){return(t===3||t===2)&&i.indexOf(`
`)>=0&&(A-=r),t===3?e*.5-A*.5:t===2?e-A:0}getLineInitialOffsetY(A,e,t,i,r){let s=e*A,a=Math.abs(this.ascender-this.descender)*i,n=A-a,o=-this.ascender*i-n/2;return r===3?-(t-s-o):r===2?-(t*.5-s*.5-o):o}createPath(A,e,t,i,r){var o,l;let s=A.getPath(t,-i,r.fontSize,{kerning:!1,letterSpacing:r.letterSpacing});if(!s){console.error('THREE.Font: character "'+A+'" does not exists in font family '+this.familyName+".");return}let a=new ak,n=((o=A.advanceWidth)!=null?o:1)*e;if(A)for(let u of s.commands){let h=(l=a.currentPath)==null?void 0:l.currentPoint;if(!(h&&u.type!=="Z"&&h.x===u.x&&-h.y===u.y))switch(u.type){case"M":a.moveTo(u.x,-u.y);break;case"L":a.lineTo(u.x,-u.y);break;case"Q":a.quadraticCurveTo(u.x1,-u.y1,u.x,-u.y);break;case"C":a.bezierCurveTo(u.x1,-u.y1,u.x2,-u.y2,u.x,-u.y);break}}return a.subPaths.forEach(u=>{let h=dk(u.curves);h!==void 0&&u.currentPoint.distanceTo(h)>0&&u.lineTo(h.x,h.y)}),{offsetX:n+r.fontSize*r.letterSpacing,path:a}}getCharWidth(A,e){var t,i;return(i=(t=this.font)==null?void 0:t.getAdvanceWidth(A,e.fontSize,{kerning:!0,letterSpacing:e.letterSpacing}))!=null?i:0}getTextWidth(A,e){var t,i;return(i=(t=this.font)==null?void 0:t.getAdvanceWidth(A,e.fontSize,{kerning:!0,letterSpacing:e.letterSpacing}))!=null?i:0}computeSpaceWidthForLine(A,e,t){let i=this.getCharWidth(" ",t),r=A[e];if(r){let s=this.countSpaces(r.trimEnd());if(t.horizontalAlign===4&&e<A.length-1&&s){let a=t.width,n=this.getTextWidth(r,t);return(a-(n-s*i))/s}}return i}countSpaces(A){return(A.match(/ /g)||[]).length}};function dk(A){if(A.length){let e=A[0];if(e instanceof Bi)return e.v1;if(e instanceof Li||e instanceof fs)return e.v0}}var pk=class{constructor(){this.objects=new Map,this.unreachable=new Set}getCached(A){return this.objects.get(A)}get size(){return this.objects.size}get(A,e){let t=this.objects.get(A);return t===void 0?(t=this.createObject(A,e),this.objects.set(A,t)):t.isShared=!0,t}mutateIfUnique(A,e){let t=this.objects.get(A);if(t&&t.isShared!==!0)return this.objects.delete(A),this.objects.set(e,t),t}startGc(){this.unreachable=new Set(this.objects.keys())}markAsReachable(A,e){let t=this.objects.get(A);e===t&&this.unreachable.delete(A)}endGc(){this.unreachable.forEach(A=>{this.disposeObject(this.objects.get(A)),this.objects.delete(A)}),this.unreachable.clear()}dispose(){this.objects.forEach(A=>{this.disposeObject(A)}),this.objects.clear()}},fy=class extends pk{constructor(A){super(),this.flatShading=A}disposeObject(A){A.dispose()}createObject(A,e){let t=pc(A,e,this.flatShading);return t.computeBoundingSphere(),t}},fk={find(A){},markNeedsUpdateRendererDirty:function(){},markGeometryCacheDirty:function(){},addPendingExpandCloner:function(A){},addPendingUpdateCloner(A){}},mk=class extends qU{constructor(A){super(),this.shared=A}create(A){return new Mb(A,this.shared)}},Hc=class{constructor(A,e={}){if(this.geometryCache=new fy(!0),this.geometryCache2=new fy(!1),this.imageHolderCache=new mk(this),this.thisContext={scene:fk,shared:this},this.deletedMaterial=new Up(Jt.defaultTwoLayerData("phong"),this.thisContext),this.deletedImage=new Hs(Ep.emptyImage,this),this.deletedVideo=new Hs(Jh.defaultVideo,this),this.materials={},this.images={},this.videos={},this.colors={},this.audios={},this.fonts={},this.penumbraSize=[],this.requestRender=()=>{this._requestRender&&this._requestRender()},e.images)for(let[t,i]of Object.entries(e.images))this.addImage(t,i);if(e.videos)for(let[t,i]of Object.entries(e.videos))this.addVideo(t,i);if(e.audios)for(let[t,i]of Object.entries(e.audios))this.addAudio(t,i.data);this.reset(A)}setRequestRender(A){this._requestRender=A}reset(A){for(let[e,t]of Object.entries(A.images))this.addImage(e,t);for(let[e,t]of Object.entries(A.videos))this.addVideo(e,t);for(let[e,t]of Object.entries(A.colors))this.addColor(e,t);for(let[e,t]of Object.entries(A.materials))this.addMaterial(e,new Up(t,this.thisContext));for(let[e,t]of Object.entries(A.audios))this.addAudio(e,t.data);for(let[e,t]of Object.entries(A.fonts))this.addFont(e,t);this.penumbraSize=A.penumbraSize}addMaterial(A,e){e.uuid=A,this.materials[A]=e}deleteMaterial(A){this.materials[A]&&(this.materials[A].nodeMaterialDispose(),delete this.materials[A])}getMaterial(A){return this.materials[A]}getMaterialOrDeletedPlaceholder(A){var e;return(e=this.materials[A])!=null?e:this.deletedMaterial}material(A){return typeof A=="string"?this.getMaterialOrDeletedPlaceholder(A):new Ib(A,this.thisContext)}getMaterials(){return this.materials}addImage(A,e){return this.images[A]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(),this.images[A].updateSrc(e.data),!0):(this.images[A]=new Hs(e,this),!1)}deleteImage(A){let e=this.images[A];e&&(e.dispose(),delete this.images[A])}getDefaultImage(){return this.images.image_0}getImage(A){var e;return(e=this.images[A])!=null?e:this.deletedImage}image(A){return typeof A=="string"?this.getImage(A):this.imageHolderCache.load(A)}addVideo(A,e){return this.videos[A]?(this.videos[A].updateSrc(e.data),!0):(this.videos[A]=new Hs(e,this),!1)}deleteVideo(A){let e=this.videos[A];e&&(e.dispose(),delete this.videos[A])}getVideo(A){var e;return(e=this.videos[A])!=null?e:this.deletedVideo}video(A){return typeof A=="string"?this.getVideo(A):this.imageHolderCache.load(A)}addColor(A,e){return this.colors[A]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(),"a"in e?this.colors[A].setRGBA(e.r,e.g,e.b,e.a):this.colors[A].setRGBA(e.r,e.g,e.b,1),!0):("a"in e?this.colors[A]=new fc(e.r,e.g,e.b,e.a):this.colors[A]=new fc(e.r,e.g,e.b,1),!1)}updateColor(A,e){var t,i,r,s;if(this.colors[A]){this.onColorOrImageUpdate&&this.onColorOrImageUpdate();let a=this.colors[A];return this.colors[A].r=(t=e.r)!=null?t:a.r,this.colors[A].g=(i=e.g)!=null?i:a.g,this.colors[A].b=(r=e.b)!=null?r:a.b,this.colors[A].a=(s=e.a)!=null?s:a.a,!0}return!1}deleteColor(A){this.colors[A]&&delete this.colors[A]}getColor(A){return this.colors[A]}color(A){let e;if(typeof A=="string"){let t=this.getColor(A);t?e=t:(console.warn("Tried to create color layer params with a color key that does not exist in the assets manager"),e=new $t(0,0,0,0))}else return"a"in A?new $t(A.r,A.g,A.b,A.a):new $t(A.r,A.g,A.b,1);return e}addAudio(A,e){this.audios[A]=e}getAudio(A){let e=this.audios[A];if(e instanceof wo)return e;{let t=new wo({src:e});return this.audios[A]=t,t}}deleteAudio(A){let e=this.audios[A];e&&(e instanceof wo&&e.dispose(),delete this.audios[A])}addFont(A,e){this.fonts[A]=new uk(e),this.fonts[A].loadingPromise.then(()=>this.requestRender())}getFont(A){return this.fonts[A]}deleteFont(A){this.fonts[A]&&delete this.fonts[A]}dispose(){Object.keys(this.materials).forEach(A=>this.deleteMaterial(A)),this._requestRender=void 0,Object.values(this.audios).forEach(A=>{A instanceof wo&&A.dispose()}),this.audios={},this.geometryCache.dispose(),this.geometryCache2.dispose()}};new Hc(lc.emptyData());var Wc=class extends Ai{updateByPatchedOp(A,e,t){if(super.updateByPatchedOp(A,e,t),pz(A.path,["materials"])!==null&&A.type===0&&Array.isArray(this.material))for(let[i,r]of Object.entries(A.props)){let s=t.shared.material(r);this.material[Number(i)]=s}else if(Gs(A.path,["material"])&&this.material instanceof vs)"material"in e&&typeof e.material!="string"&&this.material.updateByOp(qt.drop(A,1),e.material,t);else if(Gs(A.path,["materials","*"])&&Array.isArray(this.material)){let i=A.path[1];if("materials"in e&&i<this.material.length){let r=e.materials[i];typeof r!="string"&&this.material[i].updateByOp(qt.drop(A,2),r,t)}}}updateState(A,e){var i,r,s,a,n;super.updateState(A,e),A.castShadow!==void 0&&(this.castShadow=A.castShadow),A.receiveShadow!==void 0&&(this.receiveShadow=A.receiveShadow);let t=this.dataPatched;if(((i=A.geometry)==null?void 0:i.type)!=="NonParametricGeometry"&&"material"in A&&A.material!==void 0&&(this.disposeMaterial(),this.material=e.shared.material(A.material).getFlavor(t.flatShading,t.side,t.wireframe),(r=e.scene)==null||r.markNeedsUpdateRendererDirty()),((s=A.geometry)==null?void 0:s.type)==="NonParametricGeometry"&&("materials"in A&&A.materials!==void 0?(this.disposeMaterial(),this.material=A.materials.map(o=>e.shared.material(o).getFlavor(t.flatShading,t.side,t.wireframe)),(a=e.scene)==null||a.markNeedsUpdateRendererDirty()):"material"in A&&A.material!==void 0&&(this.disposeMaterial(),this.material=[e.shared.material(A.material).getFlavor(t.flatShading,t.side,t.wireframe)],(n=e.scene)==null||n.markNeedsUpdateRendererDirty())),A.flatShading!==void 0||A.wireframe!==void 0||A.side!==void 0)if(Array.isArray(this.material))for(let o=0;o<this.material.length;o++)this.material[o]=this.material[o].getFlavor(t.flatShading,t.side,t.wireframe);else this.material=this.material.getFlavor(t.flatShading,t.side,t.wireframe)}disposeMaterial(){this.material&&Mw(this.material).forEach(A=>{A instanceof vs&&(A instanceof Up||A.nodeMaterialDispose())})}dispose(){this.disposeMaterial(),super.dispose()}},Ii=class extends Wc{constructor(A,e,t){super(A,e),this.data=e,this.localGeometry=void 0}chooseGeoemtryCache(A){return A.geometryCache}markGeometryAsReachable(A){this.geometryCreateDeleyed instanceof qA&&this.chooseGeoemtryCache(A).markAsReachable(this.dataPatched.geometry,this.geometryCreateDeleyed)}get geometry(){if(this.localGeometry!==void 0)return this.localGeometry;if(this.geometryCreateDeleyed instanceof Hc){let A=this.geometryCreateDeleyed,e=this.chooseGeoemtryCache(A);this.geometryCreateDeleyed=e.get(this.dataPatched.geometry,A)}return this.geometryCreateDeleyed}set geometry(A){this.localGeometry=A}get is2DAndNoDepth(){let A=this.dataPatched.geometry;return Ac.is2DParametricMesh(A.type)&&A.depth===0}get is2DType(){return Ac.is2DParametricMesh(this.geometry.userData.type)}updateByPatchedOp(A,e,t){super.updateByPatchedOp(A,e,t),Gs(A.path,["geometry"])&&this.updateByPatchedOpGeometry(qt.drop(A,1),e.geometry,t)}removeInteractionGeometry(){var A;(A=this.localGeometry)==null||A.dispose(),this.localGeometry=void 0}updateGeometryInteractions(A,e){var i;this.invalidateDownstreamBooleanData();let t=this.data.geometry.type;if(t==="NonParametricGeometry"||t==="SubdivGeometry"){let r=A;if(this.localGeometry===void 0){let l={...this.data.geometry,...r};this.localGeometry=pc(l,e,this.data.flatShading)}let s,a,n;r.scaleBaked?[s,a,n]=r.scaleBaked:{width:s,height:a,depth:n}=r;let o=this.localGeometry.userData;o.sxPrev!==void 0&&Rp(this.localGeometry.attributes,s/o.sxPrev,a/o.syPrev,n/o.szPrev),o.sxPrev=s,o.syPrev=a,o.szPrev=n}else{let r={...this.data.geometry,...A};(i=this.localGeometry)==null||i.dispose(),this.localGeometry=pc(r,e,this.data.flatShading)}}refreshAttachedCloners(A){for(let e of this.attachedSurfaceCloners)A.scene.addPendingUpdateCloner(e.object)}createGeometryDelayed(A){this.geometryCreateDeleyed=A.shared,this.refreshAttachedCloners(A)}updateByPatchedOpGeometry(A,e,t){var r;let i=!1;A.type===0&&A.path.length===0&&kf(["scaleBaked"],Object.keys(A.props))&&this.geometryCreateDeleyed instanceof Ct&&this.chooseGeoemtryCache(t.shared).mutateIfUnique(this.geometryCreateDeleyed.data,e)===this.geometryCreateDeleyed&&(i=!0,this.geometryCreateDeleyed.mutateDirectlyScaleBaked(e,A.props.scaleBaked),this.refreshAttachedCloners(t)),i||((r=t.scene)==null||r.markGeometryCacheDirty(),this.createGeometryDelayed(t)),this.resetBBoxNeedsUpdate(),this.invalidateDownstreamBooleanData()}updateGeometryOnStateUpdate(A,e){this.createGeometryDelayed(e)}updateState(A,e){A.geometry!==void 0&&this.updateGeometryOnStateUpdate(A.geometry,e),super.updateState(A,e)}updateGeometryGroupsIfNeeded(){var A,e;Array.isArray(this.material)&&this.geometry.groups.length===0&&this.geometry.addGroup(0,Math.max((e=(A=this.geometry.getIndex())==null?void 0:A.count)!=null?e:0,this.geometry.getAttribute("position").count),0)}updateEntityBoxSize(A,e){var i;let t=this.geometry.userData.parameters;this.is2DType?A.set(0,0,t.depth*.5):A.setScalar(0),e.set(t.width,t.height,(i=t.depth)!=null?i:0).multiplyScalar(.5)}};function gk(A){var s,a;if(A.geometry.attributes.extrudeNormal||!A.geometry.attributes.position||!A.geometry.attributes.normal)return;let e=new Map,t=A.geometry.attributes.position.array,i=A.geometry.attributes.normal.array,r=new Float32Array(t.length);for(let n=0;n<t.length;n+=3){let o=`${t[n]}_${t[n+1]}_${t[n+2]}`,l=new T(i[n],i[n+1],i[n+2]);e.has(o)?(s=e.get(o))==null||s.normals.push(l):e.set(o,{normals:[l],result:new T})}e.forEach((n,o)=>{for(let l of n.normals)n.result.add(l);n.result.divideScalar(n.normals.length)});for(let n=0;n<t.length;n+=3){let o=`${t[n]}_${t[n+1]}_${t[n+2]}`,l=(a=e.get(o))==null?void 0:a.result;l&&(r[n]=l.x,r[n+1]=l.y,r[n+2]=l.z)}A.geometry.setAttribute("extrudeNormal",new LA(r,3))}function vk(A){if(A.geometry.attributes.extrudeNormals||!A.geometry.attributes.position)return;let e=A.geometry.attributes.position.array,t=new Float32Array(e.length),i=new T;for(let r=0;r<e.length;r+=3)i.set(e[r],e[r+1],e[r+2]).normalize(),t[r]=i.x,t[r+1]=i.y,t[r+2]=i.z;A.geometry.setAttribute("extrudeNormal",new LA(t,3))}function nm(A){if(Array.isArray(A.material)){for(let e of A.material)if(e.getLayersOfType("outline").length===0)return}else if(!(A.material instanceof vs)||A.material.getLayersOfType("outline").length===0)return;A instanceof Ii&&A.is2DAndNoDepth?vk(A):gk(A)}function om(A){if(!A.geometry.attributes.position)return;let e=A.geometry.attributes.position.array,t=new Float32Array(e.length),i=parseInt(A.uuid.replace(/\D/g,"")),r=[ae.seededRandom(i),ae.seededRandom(i+1e4),ae.seededRandom(i+2e4)];for(let s=0;s<e.length;s++)t[s]=r[s%3];A.geometry.setAttribute("randomColor",new JA(t,3))}tm.then(A=>{});var Hi=new qe,io=new T;function yk(A){let e=!1;return A.scene.objects.traverse((t,i)=>{i.type==="Mesh"&&i.geometry.type==="SubdivGeometry"&&(e=!0)}),e}var Zo=class extends Ii{constructor(A,e,t){super(A,e,t),this.data=e,this.hiddenMatrixOld=new TA,this.smoothShading=!0,this.skipReactionUpdate=!1}chooseGeoemtryCache(A){return this.dataPatched.flatShading?A.geometryCache:A.geometryCache2}get subdivPointerNew(){return this.localGeometry!==void 0?this.subdivPointer:this.geometry.ensureSubdivPointer()}get originalGeometryNew(){return this.localGeometry!==void 0?this.originalGeometry:this.geometry.originalGeometry}get phongAngle(){var A;return(A=this.data.geometry.phongAngle)!=null?A:45}updateEntityBoxSize(A,e){var i;let t=this.geometry.userData.parameters;A.copy(this.originalGeometryNew.boundingSphere.center),e.set(t.width,t.height,(i=t.depth)!=null?i:0).multiplyScalar(.5)}createGeometryByControls(A){var s,a,n,o;if(this.skipReactionUpdate===!0)return;let e=(s=this.localGeometry)==null?void 0:s.uuid,{originalGeometry:t,subdividedGeometry:i,subdivPointer:r}=Ct.build(A,this.subdivPointer,this.smoothShading,this.hasNonUniformScale?this.shearScale:void 0);this.subdivPointer=r,t!==void 0&&((a=this.originalGeometry)==null||a.dispose(),this.originalGeometry=t),i!==void 0&&((n=this.subdividedGeometry)==null||n.dispose(),this.subdividedGeometry=i!=null?i:void 0),this.localGeometry=(o=this.subdividedGeometry)!=null?o:this.originalGeometry,nm(this),om(this),this.calcBoundingBox(),e&&(this.localGeometry.uuid=e)}updateState(A,e){if(super.updateState(A,e),A.flatShading!==void 0){let t=this.material;this.material=t.getFlavor(!1,t.side,t.wireframe),this.smoothShading=!A.flatShading,this.createGeometryDelayed(e)}}updateMesh(A=!1){Ct.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1,this.originalGeometry,A&&this.hasNonUniformScale?this.shearScaleInv:void 0),this.subdividedGeometry&&Ct.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1,this.subdividedGeometry,A&&this.hasNonUniformScale?this.shearScaleInv:void 0)}updateTopology(){var A;this.originalGeometry.dispose(),this.originalGeometry=Ct.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1),this.subdividedGeometry&&(this.subdividedGeometry.dispose(),this.subdividedGeometry=Ct.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1)),this.localGeometry=(A=this.subdividedGeometry)!=null?A:this.originalGeometry}raycast(A,e){let t=this.localGeometry;this.localGeometry=this.originalGeometryNew,Ai.prototype.raycast.call(this,A,e),this.localGeometry=t}activateSVDCompensation(){!this.hasNonUniformScale||(this.matrix.copy(this.matrixWorldRigid),this.hiddenMatrixOld.copy(this.hiddenMatrix),this.hiddenMatrix.copy(this.parent.matrixWorld).invert())}deactivateSVDCompensation(){!this.hasNonUniformScale||(this.updateMatrix(),this.hasNonUniformScale=void 0,this.hiddenMatrix.copy(this.hiddenMatrixOld))}calcBoundingBox(){let A=this.originalGeometry;A.boundingSphere===null&&(A.boundingSphere=new gi,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=A.boundingSphere));let e=A.attributes.position,t=A.boundingSphere.center;Hi.setFromBufferAttribute(e),Hi.getCenter(t),A.boundingSphere.radius=t.distanceTo(Hi.max),isNaN(A.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),Hi.getSize(io),this.hasNonUniformScale&&io.divide(this.scale);let i={width:io.x,height:io.y,depth:io.z};return this.geometry.userData.parameters=i,i}updateBoundingSphere(A){let e=this.originalGeometry;Hi.min.set(A[0],A[2],A[4]),Hi.max.set(A[1],A[3],A[5]),this.hasNonUniformScale&&(Hi.min.applyMatrix4(this.shearScaleInv),Hi.max.applyMatrix4(this.shearScaleInv)),e.boundingSphere===null&&(e.boundingSphere=new gi);let t=e.boundingSphere.center;Hi.getCenter(t),e.boundingSphere.radius=t.distanceTo(Hi.max)}freeSubdivPointer(){var A,e;this.subdivPointer&&(Ct.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0),this.localGeometry=void 0,(A=this.originalGeometry)==null||A.dispose(),(e=this.subdividedGeometry)==null||e.dispose()}dispose(){super.dispose(),this.freeSubdivPointer()}updateByPatchedOpGeometry(A,e,t){super.updateByPatchedOpGeometry(A,e,t),this.localGeometry&&this.createGeometryByControls(e)}},my=-1,xk=1,wk={x:[1,0,0],"-x":[-1,0,0],y:[0,1,0],"-y":[0,-1,0],z:[0,0,1],"-z":[0,0,-1]},bk={polygon_center:0,edge:1,vertex:2},ah=(A,e)=>(t,i)=>!e||t===0||A===0?0:A*i/100,KA=(A,e)=>{let t=Math.abs(e),i=t*-1;return(A-my)*(t-i)/(xk-my)+i};function Sk(A){let e=[],t={};for(var i=0,r=A.length;i<r;i++){var s=JSON.stringify(A[i].pos.map(a=>Math.round(a*1e4)/1e4));t[s]||(e.push(A[i]),t[s]=!0)}return e}var Mk=new T,nh=new T,Ek=new T,Tk=new T;function hn(A,e){let t=Ek.fromArray(A),i=Tk.fromArray(e);nh.copy(i).sub(t);let r=nh.length();return nh.normalize().multiplyScalar(r*.5),Mk.copy(t).add(nh).toArray()}var ui=new Ot,oh=new T,mc=new T,Us=new T;function Ck(A){let e=[];for(let t=0;t<=A.index.count;t++)if(oh.fromArray(A.index.array,t*3),ui.setFromAttributeAndIndices(A.attributes.position,oh.x,oh.y,oh.z),ui.getNormal(mc),ui.getMidpoint(Us),!(isNaN(Us.x)||isNaN(Us.y)||isNaN(Us.z))){let{a:i,b:r,c:s}=ui,a=i.toArray(),n=r.toArray(),o=s.toArray(),l=i.distanceTo(r),u=r.distanceTo(s),h=s.distanceTo(i),c=hn(a,n),d=hn(n,o),f=hn(o,a),m=[l,u,h],p=Math.max(...m),g=m.filter(y=>Math.round(y)===Math.round(p)).length>1,v=[],x=ui.getMidpoint(Us).toArray();p===l&&!g&&(v=[d,f,f],x=c),p===u&&!g&&(v=[c,f,f],x=d),p===h&&!g&&(v=[c,d,d],x=f),g&&(v=[c,d,f]),e.push({vertices:[a,n,o],faceCenters:v,midpoint:x,norm:ui.getNormal(mc).toArray()})}return e}function Dk(A){let e=[],{position:t}=A.attributes;for(let i=0;i<t.count;i++){ui.setFromAttributeAndIndices(t,i*3,i*3+1,i*3+2),ui.getNormal(mc),ui.getMidpoint(Us);let r=ui.a.toArray(),s=ui.b.toArray(),a=ui.c.toArray();e.push({vertices:[r,s,a],faceCenters:[hn(r,s),hn(s,a),hn(a,r)],midpoint:Us.toArray(),norm:mc.toArray()})}return e}var Pk=4,Lk=.5,dd=A=>.5*(1-Math.cos(A*Math.PI)),_k=class{constructor(){this.perlin=new Array(4095+1)}noise(A,e=0,t=0){if(this.perlin==null){this.perlin=new Array(4095+1);for(let p=0;p<4095+1;p++)this.perlin[p]=Math.random()}A<0&&(A=-A),e<0&&(e=-e),t<0&&(t=-t);let i=Math.floor(A),r=Math.floor(e),s=Math.floor(t),a=A-i,n=e-r,o=t-s,l,u,h=0,c=.5,d,f,m;for(let p=0;p<Pk;p++){let g=i+(r<<4)+(s<<8);l=dd(a),u=dd(n),d=this.perlin[g&4095],d+=l*(this.perlin[g+1&4095]-d),f=this.perlin[g+16&4095],f+=l*(this.perlin[g+16+1&4095]-f),d+=u*(f-d),g+=256,f=this.perlin[g&4095],f+=l*(this.perlin[g+1&4095]-f),m=this.perlin[g+16&4095],m+=l*(this.perlin[g+16+1&4095]-m),f+=u*(m-f),d+=dd(o)*(f-d),h+=d*c,c*=Lk,i<<=1,a*=2,r<<=1,n*=2,s<<=1,o*=2,a>=1&&(i++,a--),n>=1&&(r++,n--),o>=1&&(s++,o--)}return h}noiseSeed(A){let e=(()=>{let t,i;return{setSeed(r){i=t=(r!=null?r:Math.random()*4294967296)>>>0},getSeed(){return t},rand(){return i=(1664525*i+1013904223)%4294967296,i/4294967296}}})();e.setSeed(A),this.perlin=new Array(4095+1);for(let t=0;t<4095+1;t++)this.perlin[t]=e.rand()}},Ok=_k,gy=new T,vy=new TA,yy=new wn;function xy(A){let e=!1;return A.scene.objects.traverse((t,i)=>{i.type==="Mesh"&&i.geometry.type==="TextGeometry"&&(e=!0)}),e}var Nb=class extends Ii{constructor(A,e,t){super(A,e,t),this.data=e}get textGeometry(){return this.geometry}get charWidths(){return this.textGeometry.charWidths}get charCoords(){return this.textGeometry.charCoords}get wrappedText(){return this.textGeometry.wrappedText}get font(){return this.textGeometry.font}get initialOffsetY(){var e,t;let A=this.dataPatched;return(t=(e=this.font)==null?void 0:e.getLineInitialOffsetY(this.lineHeight,this.wrappedText.length,A.geometry.height,this.fontScale,A.geometry.verticalAlign))!=null?t:0}get fontScale(){let A=this.dataPatched;return this.font?A.geometry.fontSize/this.font.unitsPerEm:1}get AD(){return Math.abs(this.ascender-this.descender)}get ascender(){var A,e;return((e=(A=this.font)==null?void 0:A.ascender)!=null?e:1)*this.fontScale}get descender(){var A,e;return((e=(A=this.font)==null?void 0:A.descender)!=null?e:1)*this.fontScale}get lineHeight(){let A=this.dataPatched;return A.geometry.fontSize*A.geometry.lineHeight}raycast(A,e){let{matrixWorld:t}=this;if(vy.copy(t).invert(),yy.copy(A.ray).applyMatrix4(vy),yy.intersectBox(this.singleBBox,gy)){let i=gy.applyMatrix4(t),r=A.ray.origin.distanceTo(i);e.push({distance:r,point:i.clone(),object:this})}}},Mt=1e-4,Wi,zb,Fb,Ub,wy=new T,by=new T;tm.then(A=>{Wi=A,zb=[Wi.get_face_center,Wi.get_edge_midpoint,Wi.get_vertex_position],Fb=[Wi.get_face_normal,Wi.get_edge_normal,Wi.get_vertex_normal],Ub=[Wi.face_count,Wi.edge_count,Wi.vertex_count]});var Bk=new TA,Ik=new TA,Xr=new T,Ds=new T,ro=new T,pd=new T,Rk=new T,Nk=new T,br=new Ok,gc=class extends Jf(Ce){constructor(A,e){super(),this.parameters=e,this.objectForSample=void 0,this._pendingMediaLoad=!1,this.object=A}resetOnMove(){this.removeFromParent(),this.parent=null}expandClones(A){if(this.parent===null)this.updateState(this.parameters,A);else for(let e of this.children)e instanceof Vs&&e.expand()}invalidateTransform(A){this.matrixWorldNeedsUpdate=!0,this.traverse(e=>{e instanceof Vs&&e.object===A&&(e.matrixWorldNeedsUpdate=!0)})}onObjUpdateMatrix(){this.parameters.type!=="toObject"&&(this.matrixWorldNeedsUpdate=!0)}update(){switch(this._updateCount(),this.parameters.type){case"radial":this._updateRadial(this.parameters);break;case"linear":this._updateLinear(this.parameters);break;case"grid":this._updateGrid(this.parameters);break;case"toObject":this._updateToObject(this.parameters)}for(let A of this.children)A.updateMatrix(),A.hasNonUniformScale&&(A.updateMatrixWorld(),A.updateMatrixWorldSVD())}_updateCount(A){let e;if(A!==void 0?e=A:e=this.parameters.type==="grid"?this.parameters.grid.count[0]*this.parameters.grid.count[1]*this.parameters.grid.count[2]:this.parameters.count,this.parameters.type==="toObject"&&!this.parameters.toObject.object&&(e=0),this.parameters.type==="toObject"&&this.objectForSample){for(let i=0,r=this.children.length;i<r;++i)this.remove(this.children[0]);let t=this.children;if(t.length===e)return;if(t.length<e)for(let i=0,r=e-t.length;i<r;++i){let s=new Vs(this.object);s.expand(),this.add(s)}else for(let i=0,r=t.length-e;i<r;++i)this.remove(t[i])}else{if(this.children.length===e)return;if(this.children.length<e)for(let t=0,i=e-this.children.length;t<i;++t){let r=new Vs(this.object);r.expand(),this.add(r)}else for(let t=0,i=this.children.length-e;t<i;++t)this.remove(this.children[0])}}_updateRadial(A){var h;let e=A.radial,t=e.start*ae.DEG2RAD,i=e.end*ae.DEG2RAD,r=t-i,s=new mt(e.rotation[0],e.rotation[1],e.rotation[2]),a;switch(e.axis){case"z":a=new T(0,0,1);break;case"y":a=new T(0,1,0);break;default:case"x":a=new T(1,0,0);break}let n=(h=A.randomnessObject)!=null?h:as.defaultData([1,1,1]).randomnessObject,o=n.noiseType==="perlin";br.noiseSeed(n.seed);let l=$u((0,Zn.default)(n.seed)),u=ah(n.strength,this.parameters.randomness);for(let[c,d]of this.children.entries()){let f=c*(n.freqScale/10)+n.movement,m=o?br.noise(f):l(f,f);d.scale.x=e.scale[0]+u(c,KA(m,n.scale[0]))||Mt,d.scale.y=e.scale[1]+u(c,KA(m,n.scale[1]))||Mt,d.scale.z=e.scale[2]+u(c,KA(m,n.scale[2]))||Mt,d.position.setScalar(0);let p=r/A.count*c-t;switch(e.axis){case"x":d.rotation.set(0,p,0);break;case"y":d.rotation.set(0,0,p);break;case"z":d.rotation.set(p,0,0);break}d.translateOnAxis(a,e.radius),d.position.x+=e.position[0]+u(c,KA(m,n.position[0])),d.position.y+=e.position[1]+u(c,KA(m,n.position[1])),d.position.z+=e.position[2]+u(c,KA(m,n.position[2]));let g=u(c,KA(m,n.rotation[0])),v=u(c,KA(m,n.rotation[1])),x=u(c,KA(m,n.rotation[2]));e.alignment===!0?(d.rotation.x+=s.x+g,d.rotation.y+=s.y+v,d.rotation.z+=s.z+x):d.rotation.set(s.x+g,s.y+v,s.z+x)}}_updateLinear(A){var n;if(A.type!=="linear")throw new Error;let e=A.linear,t=new mt(e.rotation[0],e.rotation[1],e.rotation[2]),i=(n=A.randomnessObject)!=null?n:as.defaultData([1,1,1]).randomnessObject,r=i.noiseType==="perlin";br.noiseSeed(i.seed);let s=$u((0,Zn.default)(i.seed)),a=ah(i.strength,this.parameters.randomness);for(let[o,l]of this.children.entries()){let u=o*(i.freqScale/10)+i.movement,h=r?br.noise(u):s(u,u),c=a(o,KA(h,i.rotation[0])),d=a(o,KA(h,i.rotation[1])),f=a(o,KA(h,i.rotation[2]));l.scale.x=1+(e.scale[0]-1)*o+a(o,KA(h,i.scale[0]))||Mt,l.scale.y=1+(e.scale[1]-1)*o+a(o,KA(h,i.scale[1]))||Mt,l.scale.z=1+(e.scale[2]-1)*o+a(o,KA(h,i.scale[2]))||Mt,l.rotation.x=t.x*o+c,l.rotation.y=t.y*o+d,l.rotation.z=t.z*o+f,l.position.x=e.position[0]*o+a(o,KA(h,i.position[0])),l.position.y=e.position[1]*o+a(o,KA(h,i.position[1])),l.position.z=e.position[2]*o+a(o,KA(h,i.position[2]))}}_updateGrid(A){var n;let e=0,t=A.grid,i=(n=A.randomnessObject)!=null?n:as.defaultData([1,1,1]).randomnessObject,r=ah(i.strength,this.parameters.randomness),s=i.noiseType==="perlin";br.noiseSeed(i.seed);let a=U4((0,Zn.default)(i.seed));if(t.useCenter===!0){let o={x:t.count[0]%2===0?2:1,y:t.count[1]%2===0?2:1,z:t.count[2]%2===0?2:1},l=new T(t.size[0]*(t.count[0]-o.x)*.5,t.size[1]*(t.count[1]-o.y)*.5,t.size[2]*(t.count[2]-o.z)*.5);for(let u=0;u<t.count[0];u++)for(let h=0;h<t.count[1];h++)for(let c=0;c<t.count[2];c++){let d=[(u+1)*(i.freqScale/10)+i.movement,(h+1)*(i.freqScale/10)+i.movement,(c+1)*(i.freqScale/10)+i.movement],f=s?br.noise(...d):a(...d),m=this.children[e++];m.scale.x=1+r(e,KA(f,i.scale[0]))||Mt,m.scale.y=1+r(e,KA(f,i.scale[1]))||Mt,m.scale.z=1+r(e,KA(f,i.scale[2]))||Mt;let p=r(e,KA(f,i.rotation[0])),g=r(e,KA(f,i.rotation[1])),v=r(e,KA(f,i.rotation[2]));m.rotation.set(p,g,v),m.position.x=t.size[0]*u-l.x+r(e,KA(f,i.position[0])),m.position.y=t.size[1]*h-l.y+r(e,KA(f,i.position[1])),m.position.z=t.size[2]*c-l.z+r(e,KA(f,i.position[2]))}}else for(let o=0;o<t.count[0];o++)for(let l=0;l<t.count[1];l++)for(let u=0;u<t.count[2];u++){let h=[(o+1)*(i.freqScale/10)+i.movement,(l+1)*(i.freqScale/10)+i.movement,(u+1)*(i.freqScale/10)+i.movement],c=s?br.noise(...h):a(...h),d=this.children[e++];d.scale.x=1+r(e,KA(c,i.scale[0]))||Mt,d.scale.y=1+r(e,KA(c,i.scale[1]))||Mt,d.scale.z=1+r(e,KA(c,i.scale[2]))||Mt;let f=r(e,KA(c,i.rotation[0])),m=r(e,KA(c,i.rotation[1])),p=r(e,KA(c,i.rotation[2]));d.rotation.set(f,m,p),d.position.x=t.size[0]*o+r(e,KA(c,i.position[0])),d.position.y=-t.size[1]*l+r(e,KA(c,i.position[1])),d.position.z=-t.size[2]*u+r(e,KA(c,i.position[2]))}}_updateToObject(A){var m,p;if(A.type!=="toObject")throw new Error;let{toObject:e}=A,t=new mt(e.rotation[0],e.rotation[1],e.rotation[2]),i=(m=A.randomnessObject)!=null?m:as.defaultData([1,1,1]).randomnessObject,r=i.noiseType==="perlin";br.noiseSeed(i.seed);let s=$u((0,Zn.default)(i.seed)),a=ah(i.strength,this.parameters.randomness);if(!e.object){for(let[,g]of this.children.entries())g.position.set(0,0,0),g.scale.setScalar(1),g.rotation.set(0,0,0);this.objectForSample=void 0;return}if(!this.objectForSample)return;if(this.objectForSample instanceof Nb)if(!((p=this.objectForSample.font)!=null&&p.isLoaded)||this.objectForSample.geometry.attributes.position===void 0){this._pendingMediaLoad=!0;return}else this._pendingMediaLoad=!1;let n=this.getSubdivData(),o=[],l=g=>{let v=g.length,x=g.map(w=>w[0]).reduce((w,M)=>w+M,0),y=g.map(w=>w[1]).reduce((w,M)=>w+M,0),S=g.map(w=>w[2]).reduce((w,M)=>w+M,0);return[x/v,y/v,S/v]},u=g=>Math.round(g*1e6)/1e6;n.forEach(g=>{let v=n.filter(x=>u(g.pos[0])===u(x.pos[0])&&u(g.pos[1])===u(x.pos[1])&&u(g.pos[2])===u(x.pos[2]));v.length>1?o.push({pos:g.pos,norm:l(v.map(x=>x.norm))}):o.push(g)});let h=Sk(o);if(n.length>0){let g=Math.round(h.length*e.count/100);this._updateCount(g)}this.objectForSample.updateMatrixWorld();let c=new k4(this.objectForSample).build(),d=wk[e.axis],f=this.children;c.setRandomGenerator((0,Zn.default)(this.object.uuid+e.seed));for(let[g,v]of f.entries()){let x=g*(i.freqScale/10)+i.movement,y=r?br.noise(x):s(x,x),S=a(g,KA(y,i.rotation[0])),w=a(g,KA(y,i.rotation[1])),M=a(g,KA(y,i.rotation[2]));e.spreadType==="random"?c.sample(ro,pd):(h.length&&(ro.fromArray(h[g].pos),pd.fromArray(h[g].norm)),this.objectForSample instanceof Zo&&ro.applyMatrix4(Bk.copy(this.objectForSample.matrixWorld).invert())),ro.applyMatrix4(this.object.hiddenMatrix.clone().invert()),v.position.copy(ro),Xr.fromArray(d);let b=e.align==="normal"?pd:this.object.getWorldDirection(Nk),E=Ds.fromArray(e.position);Ds.x+=Ds.x+a(g,KA(y,i.position[0])),Ds.y+=Ds.y+a(g,KA(y,i.position[1])),Ds.z+=Ds.z+a(g,KA(y,i.position[2]));let C=Math.acos(b.dot(Xr)),D=Rk.crossVectors(Xr,b).normalize(),P=Ik.makeRotationAxis(D,C),z=b.clone().cross(this.object.up).normalize(),O=z.clone().cross(b).normalize(),G=new TA().makeBasis(z,b,O),X=new T(Xr.y,Xr.z,Xr.x).normalize(),U=X.clone().cross(Xr).normalize(),_=new TA().makeBasis(X,Xr,U).invert(),V=new TA().multiplyMatrices(G,_);v.rotation.setFromRotationMatrix(V),E.applyMatrix4(P),v.position.add(E),v.rotation.x=v.rotation.x+t.x+S,v.rotation.y=v.rotation.y+t.y+w,v.rotation.z=v.rotation.z+t.z+M,v.scale.setScalar(1),v.scale.x=v.scale.x+e.scale[0]+a(g,KA(y,i.scale[0]))||Mt,v.scale.y=v.scale.y+e.scale[1]+a(g,KA(y,i.scale[1]))||Mt,v.scale.z=v.scale.z+e.scale[2]+a(g,KA(y,i.scale[2]))||Mt,v.scale.multiply(this.object.scale),v.hiddenMatrix=this.object.hiddenMatrix}}getSubdivData(){if(!this.objectForSample)return[];let A=this.parameters.toObject.spreadType;if(A==="random")return[];if(this.objectForSample instanceof Zo){let e=this.objectForSample,t=bk[A],i=Ub[t],r=zb[t],s=Fb[t],a=[],n=i(e.subdivPointerNew);for(let o=0;o<=n-1;o++){let l=r(e.subdivPointerNew,o),u=s(e.subdivPointerNew,o);wy.fromArray(l).applyMatrix4(e.matrixWorld),by.fromArray(u),a.push({pos:wy.toArray(),norm:by.toArray()})}return a}else return(this.objectForSample.geometry.index?Ck(this.objectForSample.geometry):Dk(this.objectForSample.geometry)).map((e,t)=>A==="polygon_center"?{pos:e.midpoint,norm:e.norm}:A==="vertex"?[{pos:e.vertices[0],norm:e.norm},{pos:e.vertices[1],norm:e.norm},{pos:e.vertices[2],norm:e.norm}]:A==="edge"?[{pos:e.faceCenters[0],norm:e.norm},{pos:e.faceCenters[1],norm:e.norm},{pos:e.faceCenters[2],norm:e.norm}]:[]).flat()}updateState(A,e){var t;if(this.parameters=Uf(A),this.parameters.type!=="toObject")(this.parent===null||this.parent!==this.object)&&(this.removeFromParent(),(t=this.object.parent)==null||t.add(this),this.matrix=this.object.matrix,this.hiddenMatrix=this.object.hiddenMatrix,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1);else if(this.parent===null||this.parent.uuid!==this.parameters.toObject.object){this.removeFromParent();let i=e.find(this.parameters.toObject.object);i instanceof Ai?this.objectForSample=i:this.objectForSample=void 0,this.matrix=new TA,this.hiddenMatrix=new TA,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1,i&&i.add(this)}this.update()}get pendingMediaLoad(){return this._pendingMediaLoad}},sl=A=>{var e;return e=class extends A{},e.geometryHelper=new or(30,30,30),e},lh=new wn,fd=new gi,Sy=new TA,al=(A,e,t,i,r=!1)=>{let s=e,a=A.matrixWorld;if(s.boundingSphere===null&&s.computeBoundingSphere(),fd.copy(s.boundingSphere),fd.applyMatrix4(a),t.ray.intersectsSphere(fd)===!1||(Sy.copy(a).invert(),lh.copy(t.ray).applyMatrix4(Sy),s.boundingBox!==null&&lh.intersectsBox(s.boundingBox)===!1))return;let n,o,l,u,h=s.index,c=s.attributes.position,d=s.drawRange,f,m;if(r===!1){let g=Math.max(0,d.start),v=Math.min(h.count,d.start+d.count);for(f=g,m=v;f<m;f+=3)if(o=h.getX(f),l=h.getX(f+1),u=h.getX(f+2),n=p(A,t,lh,c,o,l,u),n){n.faceIndex=Math.floor(f/3),i.push(n);return}}else{let g=s.attributes.position,v=new T,x=new T,y=new T,S=new T,w=2,M=1/((A.scale.x+A.scale.y+A.scale.z)/3),b=M*M,E=Math.max(0,d.start),C=Math.min(g.count,d.start+d.count);for(let D=E,P=C-1;D<P;D+=w){if(v.fromBufferAttribute(g,D),x.fromBufferAttribute(g,D+1),lh.distanceSqToSegment(v,x,S,y)>b)continue;S.applyMatrix4(A.matrixWorld);let z=t.ray.origin.distanceTo(S);z<t.near||z>t.far||i.push({distance:z,point:y.clone().applyMatrix4(A.matrixWorld),object:A})}}function p(g,v,x,y,S,w,M){let b=new T,E=new T,C=new T,D=new T,P=new T;if(b.fromBufferAttribute(y,S),E.fromBufferAttribute(y,w),C.fromBufferAttribute(y,M),x.intersectTriangle(b,E,C,!1,D)===null)return null;P.copy(D),P.applyMatrix4(g.matrixWorld);let z=v.ray.origin.distanceTo(P);return z<v.near||z>v.far?null:{faceIndex:1,distance:z,point:P.clone(),object:g}}},hh=new T,ri=new Mn,zk=class extends el{constructor(A){let e=new qA,t=new ys({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},a=new GA(15711266),n=new GA(15711266),o=new GA(2857471);l("n1","n2",a),l("n2","n4",a),l("n4","n3",a),l("n3","n1",a),l("f1","f2",a),l("f2","f4",a),l("f4","f3",a),l("f3","f1",a),l("n1","f1",a),l("n2","f2",a),l("n3","f3",a),l("n4","f4",a),l("p","n1",n),l("p","n2",n),l("p","n3",n),l("p","n4",n),l("u1","u2",o),l("u2","u3",o),l("u3","u1",o);function l(h,c,d){u(h,d),u(c,d)}function u(h,c){i.push(0,0,0),r.push(c.r,c.g,c.b),s[h]===void 0&&(s[h]=[]),s[h].push(i.length/3-1)}e.setAttribute("position",new LA(i,3)),e.setAttribute("color",new LA(r,3)),super(e,t),this.type="CameraHelper",this.camera=A,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}update(){let A=this.geometry,e=this.pointMap;ri.projectionMatrixInverse.elements=[.5112609807824982,-0,-0,-0,-0,.41421356237309503,-0,-0,-0,-0,-0,-.099999,-0,-0,-1.0000000000000002,.100001];let t=1,i=1,r=.8;Ei("n1",e,A,ri,-t,-i,r),Ei("n2",e,A,ri,t,-i,r),Ei("n3",e,A,ri,-t,i,r),Ei("n4",e,A,ri,t,i,r);let s=r;Ei("f1",e,A,ri,-t,-i,s),Ei("f2",e,A,ri,t,-i,s),Ei("f3",e,A,ri,-t,i,s),Ei("f4",e,A,ri,t,i,s);let a=s,n=.5;Ei("u1",e,A,ri,t*.7*n,i*1.1,a),Ei("u2",e,A,ri,-t*.7*n,i*1.1,a),Ei("u3",e,A,ri,0,i*(1.1+.9*n),a),A.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ei(A,e,t,i,r,s,a){hh.set(r,s,a).unproject(i);let n=e[A];if(n!==void 0){let o=t.getAttribute("position");for(let l=0,u=n.length;l<u;l++)o.setXYZ(n[l],hh.x,hh.y,hh.z)}}var Fk=class extends sl(zk){constructor(A){super(A),this.object=A,this.object=A,this.name=`CombinedCameraHelper: ${A.uuid}`}updateMatrixWorld(A){super.updateMatrixWorld(A),this.updateTarget()}updateTarget(){let A=this.object.getTarget();this.updateWorldMatrix(!0,!1),this.worldToLocal(A)}raycast(A,e){al(this.object,this.geometry,A,e,!0)}},kp;(A=>A.is=e=>"objectHelper"in e)(kp||(kp={}));var Yc=(A,e)=>class extends Bw(A){constructor(){super(...arguments),this.objectHelper=new e(this),this.gizmos={}}get geometryHelper(){return e.geometryHelper}raycast(t,i){this.objectHelper.raycast(t,i)}showGizmos(){for(let t in this.gizmos){let i=this.gizmos[t];i instanceof Fh&&(i.visible=!0)}}updateEntityBoxSize(t,i){this.objectHelper.visible&&this.geometryHelper instanceof or?(t.setScalar(0),i.set(this.geometryHelper.parameters.width,this.geometryHelper.parameters.height,this.geometryHelper.parameters.height).multiplyScalar(.5)):super.updateEntityBoxSize(t,i)}hideGizmos(){for(let t in this.gizmos){let i=this.gizmos[t];i instanceof Fh&&(i.visible=!1)}}},Oa=new T,md=new T,Ir=class extends Yc(Mn,Fk){constructor(A="",e={...ec.defaultData,name:""}){super(),this._cameraType="OrthographicCamera",this.targetOffset=Wo.DefaultTargetOffset,this.isUpVectorFlipped=!1,this.angleOffsetFromUp=0,this.super_Entity(A,e),this.matrixAutoUpdate=!0,this.width=window.innerWidth,this.height=window.innerHeight;let t=this.width,i=this.height;this.orthoCamera=new cf(t*-.5,t*.5,i*.5,i*-.5,-5e4,1e4),this.perspCamera=new ft(45,t/i,50,1e4),this.left=this.orthoCamera.left,this.right=this.orthoCamera.right,this.top=this.orthoCamera.top,this.bottom=this.orthoCamera.bottom,this.far=this.orthoCamera.far,this.view=this.orthoCamera.view,this.aspect=this.perspCamera.aspect,this.focus=this.perspCamera.focus,this.filmGauge=this.perspCamera.filmGauge,this.filmOffset=this.perspCamera.filmOffset,this.objectHelper.update()}get isPerspectiveCamera(){return this.cameraType==="PerspectiveCamera"}get isOrthographicCamera(){return!this.isPerspectiveCamera}get cameraType(){return this._cameraType}set fov(A){this.perspCamera.fov=A}get fov(){return this.perspCamera.fov}setNear(A,e){A==="PerspectiveCamera"?this.perspCamera.near=e:this.orthoCamera.near=e}setZoom(A,e){e>=0&&(A==="PerspectiveCamera"?this.perspCamera.zoom=e:this.orthoCamera.zoom=e)}set cameraType(A){A==="PerspectiveCamera"?this.toPerspective():A==="OrthographicCamera"&&this.toOrthographic()}get near(){return this._cameraType==="PerspectiveCamera"?this.perspCamera.near:this.orthoCamera.near}set near(A){this._cameraType==="PerspectiveCamera"?this.perspCamera.near=A:this.orthoCamera.near=A}get zoom(){return this._cameraType==="PerspectiveCamera"?this.perspCamera.zoom:this.orthoCamera.zoom}set zoom(A){A>=0&&(this._cameraType==="PerspectiveCamera"?this.perspCamera.zoom=A:this.orthoCamera.zoom=A)}lookAt(A){super.lookAt(A),this.getWorldPosition(Oa),this.targetOffset=Oa.distanceTo(A)}getTarget(A=new T){return this.getWorldDirection(md),this.getWorldPosition(Oa),md.multiplyScalar(this.targetOffset),A.copy(Oa).add(md),A}getDistanceToTarget(){let A=this.getTarget();return this.getWorldPosition(Oa),Oa.distanceTo(A)}updateUp(){let A=this.getWorldQuaternion(new ue),e=new T(0,0,1).applyQuaternion(A),t=new T().copy(Ce.DefaultUp);this.isUpVectorFlipped&&t.negate(),t.applyQuaternion(A);let i=new T().copy(Ce.DefaultUp).projectOnPlane(e),r=new T().crossVectors(i,t).dot(e)>=0?1:-1;this.angleOffsetFromUp=i.angleTo(t)*r}updateTransformState(A){let e=super.updateTransformState(A);return A.isUpVectorFlipped!==void 0&&(this.isUpVectorFlipped=A.isUpVectorFlipped),this.updateUp(),e}getViewFrontToObject(A){let e=A.getWorldPosition(new T),t=A.getWorldDirection(new T).multiplyScalar(this.targetOffset);return{position:e.clone().add(t),target:e}}getViewToObject(A){let e=A.getWorldPosition(new T),t=this.getWorldDirection(new T).multiplyScalar(this.targetOffset);return{position:e.clone().sub(t),target:e}}setViewplaneSize(A,e){this.left=-A*.5,this.right=A*.5,this.top=e*.5,this.bottom=-e*.5,this.aspect=A/e,this.updateProjectionMatrix()}toOrthographic(){this.orthoCamera.left=this.left,this.orthoCamera.right=this.right,this.orthoCamera.top=this.top,this.orthoCamera.bottom=this.bottom,this.orthoCamera.view=this.view,this.orthoCamera.far=this.far,this.orthoCamera.updateProjectionMatrix(),this.projectionMatrix=this.orthoCamera.projectionMatrix,this.projectionMatrixInverse=this.orthoCamera.projectionMatrixInverse,this._cameraType="OrthographicCamera",this.objectHelper&&this.objectHelper.update()}toPerspective(){this.perspCamera.aspect=this.aspect,this.perspCamera.fov=this.fov,this.perspCamera.view=this.view,this.perspCamera.far=this.far,this.perspCamera.updateProjectionMatrix(),this.projectionMatrix=this.perspCamera.projectionMatrix,this.projectionMatrixInverse=this.perspCamera.projectionMatrixInverse,this._cameraType="PerspectiveCamera",this.objectHelper&&this.objectHelper.update()}setFocalLength(A){this.perspCamera.setFocalLength(A),this.toPerspective()}getFocalLength(){return this.perspCamera.getFocalLength()}getEffectiveFOV(){return this.perspCamera.getEffectiveFOV()}getFilmWidth(){return this.perspCamera.getFilmWidth()}getFilmHeight(){return this.perspCamera.getFilmHeight()}setViewOffset(A,e,t,i,r,s){this._cameraType==="PerspectiveCamera"?this.perspCamera.setViewOffset(A,e,t,i,r,s):this.orthoCamera.setViewOffset(A,e,t,i,r,s)}clearViewOffset(){this._cameraType==="PerspectiveCamera"?(this.perspCamera.clearViewOffset(),this.toPerspective()):(this.orthoCamera.clearViewOffset(),this.toOrthographic())}updateProjectionMatrix(){this._cameraType==="PerspectiveCamera"?this.toPerspective():this._cameraType==="OrthographicCamera"&&this.toOrthographic()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}copy(A,e){return super.copy(A,e),this.orthoCamera.copy(A.orthoCamera),this.perspCamera.copy(A.perspCamera),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.far=A.far,this.view=A.view===null?null:Object.assign({},A.view),this._cameraType=A._cameraType,this.aspect=A.aspect,this.fov=A.fov,this.focus=A.focus,this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this.targetOffset=A.targetOffset,this.updateProjectionMatrix(),this}toCameraState(A=[]){let e={type:this.cameraType,far:this.far,orthographic:{near:this.orthoCamera.near,zoom:this.orthoCamera.zoom},perspective:{near:this.perspCamera.near,fov:this.perspCamera.fov,zoom:this.perspCamera.zoom},up:this.up.toArray(),targetOffset:this.targetOffset,isUpVectorFlipped:this.isUpVectorFlipped};return sp(e,A)}updateCameraSubtype(A,e){let t=A==="perspective"?"PerspectiveCamera":"OrthographicCamera";e.zoom!==void 0&&this.setZoom(t,e.zoom),e.near!==void 0&&this.setNear(t,e.near),e.fov!==void 0&&t==="PerspectiveCamera"&&(this.fov=e.fov)}updateState(A){this.updateCameraState(A)}updateCameraState(A){this.updateState_Entity(A,{}),A.far!==void 0&&(this.far=A.far),A.orthographic!==void 0&&this.updateCameraSubtype("orthographic",A.orthographic),A.perspective!==void 0&&this.updateCameraSubtype("perspective",A.perspective),A.type!==void 0&&(this.cameraType=A.type),A.up!==void 0&&this.up.fromArray(A.up),A.targetOffset!==void 0&&(this.targetOffset=A.targetOffset),A.isUpVectorFlipped!==void 0&&(this.isUpVectorFlipped=A.isUpVectorFlipped),this.updateProjectionMatrix()}updateByPatchedOp(A,e,t){super.updateByPatchedOp(A,e,t),A.path.length===1&&A.type===0&&this.updateCameraSubtype(A.path[0],A.props)}toState(A){return{...super.toState(A),...this.toCameraState(A),type:this.cameraType}}},My=new TA;function Ey(A){let e=!1;return A.scene.objects.traverse((t,i)=>{var r;((r=i.geometry)==null?void 0:r.type)==="BooleanGeometry"&&(e=!0)}),e}var xn=class extends Wc{constructor(A,e,t){super(A,e),this.data=e,this.meshSetAddresses=[],this.needsTransformForDownstream=!1,this.geometry=new qA,this.geometry.userData.parameters={width:0,height:0,depth:0}}get booleanOp(){return this.data.geometry.operation}get phongAngle(){var A;return(A=this.data.geometry.phongAngle)!=null?A:45}get isLOD(){return this.recomputeBoolean(),!1}updateByPatchedOp(A,e,t){super.updateByPatchedOp(A,e,t),A.path.length===1&&A.path[0]==="geometry"&&A.type===0&&A.props.operation!==void 0&&(this.freeBooleanPointer(),this.resetBBoxNeedsUpdate())}freeBooleanPointer(){super.freeBooleanPointer(),this.geometry.dispose()}recomputeBoolean(A,e=!0){var i,r;if(this.booleanMeshSetAddress!==-1)return;for(let s=0;s<this.children.length;s++){let a=this.children[s];a instanceof xn&&a.recomputeBoolean(A===!0,e)}this.meshSetAddresses=[];for(let s=0;s<this.children.length;s++){let a=this.children[s];if(a instanceof Ai&&a.dataPatched.visible===!0&&((i=a.geometry.attributes.position)==null?void 0:i.count)>0&&a.geometry.drawRange.count>0){if(a.booleanMeshSetAddress===-1){if(((r=a.geometry.index)!=null?r:a.geometry.getAttribute("position")).count/3<15e5&&(a.booleanMeshSetAddress=$r.getMeshSet(a.geometry,A===!0,e)),a.booleanMeshSetAddress===-1)return;$r.transformMeshSet(a.booleanMeshSetAddress,a.matrix),a.booleanMatrixInvOld.copy(a.matrix).invert(),a.booleanWasTransformed=!1}else a instanceof xn&&a.needsTransformForDownstream===!0?($r.transformMeshSet(a.booleanMeshSetAddress,a.matrix),a.needsTransformForDownstream=!1):a.booleanWasTransformed===!0&&(My.multiplyMatrices(a.matrix,a.booleanMatrixInvOld),$r.transformMeshSet(a.booleanMeshSetAddress,My),a.booleanMatrixInvOld.copy(a.matrix).invert(),a.booleanWasTransformed=!1);this.meshSetAddresses.push(a.booleanMeshSetAddress)}}if(this.meshSetAddresses.length===0){this.geometry.setAttribute("position",new hE([],0)),this.geometry.setDrawRange(0,0);return}if(A===!0)return $r.calcBooleanTopological(this.meshSetAddresses,this.booleanOp);let t=this.geometry;t.dispose(),this.geometry=new qA,this.geometry.userData=t.userData,this.geometry.boundingSphere=t.boundingSphere;try{this.booleanMeshSetAddress=$r.calcBoolean(this.meshSetAddresses,this.booleanOp,this.geometry,this.phongAngle)}catch(s){this.booleanMeshSetAddress=0,console.error(s)}this.booleanMatrixInvOld.copy(this.matrix).invert(),this.needsTransformForDownstream=!0,nm(this),om(this)}dispose(){super.dispose(),this.geometry.dispose()}},Gp;(A=>{function e(t){return He.is(t)&&t instanceof tl}A.is=e})(Gp||(Gp={}));var lm=(A,e)=>class extends Yc(A,e){updateState_Light(t,i){this.updateState_Entity(t,i),t.color!==void 0&&(this.color=i.shared.color(t.color)),t.intensity!==void 0&&(this.intensity=t.intensity),t.depth!==void 0&&(this.shadow.camera.far=t.depth,this.shadow.needsUpdate=!0),t.shadows!==void 0&&(this.castShadow=t.shadows)}},Cr=A=>A instanceof Ai,ls=A=>A!==null&&A instanceof xn,Uk=A=>A instanceof Ir,kk=A=>Gp.is(A),Gk=A=>kp.is(A),hm=class extends sl(jP){constructor(A,e=15){super(e),this.object=A,this.object.updateMatrixWorld(),this.name=`EmptyObjectHelper: ${A.uuid}`,this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1}raycast(A,e){al(this.object,hm.geometryHelper,A,e)}update(){}},jp=class extends Yc(Va,hm){constructor(A,e){super(),this.super_Entity(A,e),this.objectHelper.update()}updateState(A,e){this.updateState_Entity(A,e)}},kb=class extends sl(GP){constructor(A,e=15,t=10066329){super(A,e,t),this.object=A,this.added=!1,this.name=`DirectionalLightHelper: ${A.uuid}`}raycast(A,e){al(this.object,kb.geometryHelper,A,e)}},Gb=class extends sl(kP){constructor(A,e=15,t=6710886){super(A,e,t),this.object=A,this.name=`PointLightHelper: ${A.uuid}`}raycast(A,e){al(this.object,Gb.geometryHelper,A,e)}},Vp=class extends sl(UP){constructor(A,e=6710886){super(A,e),this.object=A,this.name=`SpotLightHelper: ${A.uuid}`}raycast(A,e){al(this.object,Vp.geometryHelper,A,e)}update(){if(this.object!==void 0){let A=Vp._vector,e=this.object.distance?this.object.distance:1e3,t=e*Math.tan(this.object.angle);this.cone.scale.set(t,t,e),A.setFromMatrixPosition(this.object.target.matrixWorld),this.cone.lookAt(A);let i=this.color!==void 0?this.color:this.light.color;if(this.cone.material instanceof Array)for(let r=0,s=this.cone.material.length;r<s;r++)this.cone.material[r].color.set(i);else this.cone.material.color.set(i)}}},jb=Vp;jb._vector=new T;function jk(A,e){A.shadow.camera.right=e/2,A.shadow.camera.left=-e/2,A.shadow.camera.top=e/2,A.shadow.camera.bottom=-e/2,A.shadow.needsUpdate=!0}var Vk=class extends lm(IP,kb){constructor(A,e,t){super(),this.super_Entity(A,e),this.castShadow=!0,this.shadow.mapSize.width=2048,this.shadow.mapSize.height=2048,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.top=1250,i.bottom=-1250,i.right=1250,i.left=-1250,i.near=-1e4,i.far=2500;let r=new zh(this.shadow.camera);r.visible=!1,this.gizmos.shadowmap=r}update(){this.shadow.camera.updateProjectionMatrix();for(let A in this.gizmos){let e=this.gizmos[A];e instanceof zh&&e.update()}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.objectHelper&&this.objectHelper.update()}updateState(A,e){this.updateState_Light(A,e);let t=A.depth!==void 0&&A.depth!==this.shadow.camera.far||A.size!==void 0&&A.size/2!==this.shadow.camera.right;A.size!==void 0&&jk(this,A.size),A.shadowRadius!==void 0&&(this.shadow.radius=A.shadowRadius),A.shadowResolution!==void 0&&(this.shadow.mapSize.set(A.shadowResolution,A.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null)),t&&this.update()}},Hk=class extends lm(OP,Gb){constructor(A,e,t){super(),this.super_Entity(A,e),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=90,i.aspect=1,i.near=100,i.far=2500;let r=new T(-i.far+this.position.x,-i.far+this.position.y,-i.far+this.position.z),s=new T(i.far+this.position.x,i.far+this.position.y,i.far+this.position.z),a=new qe(r,s),n=new Fh(a,new GA(16755200));n.visible=!1,this.gizmos.shadowmap=n,this.update()}update(){if(this.shadow&&(this.shadow.camera.updateProjectionMatrix(),this.gizmos))for(let A in this.gizmos){let e=this.gizmos[A];if(e instanceof Fh){let t=this.shadow.camera,i=new T(-t.far+this.position.x,-t.far+this.position.y,-t.far+this.position.z),r=new T(t.far+this.position.x,t.far+this.position.y,t.far+this.position.z);e.box.set(i,r),e.updateMatrixWorld(!0)}}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.objectHelper&&this.objectHelper.update()}updateState(A,e){this.updateState_Light(A,e),A.distance!==void 0&&(this.distance=A.distance),A.decay!==void 0&&(this.decay=A.decay),A.shadowRadius!==void 0&&(this.shadow.radius=A.shadowRadius),A.shadowResolution!==void 0&&(this.shadow.mapSize.set(A.shadowResolution,A.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}},Ty=new T,Cy=new T,Dy=new ue,Wk=class extends lm(LP,jb){constructor(A,e,t){super(),this.super_Entity(A,e),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=ae.RAD2DEG*2*this.angle,i.aspect=1,i.near=100,i.far=2500;let r=new zh(this.shadow.camera);r.visible=!1,this.gizmos.shadowmap=r,this.update()}update(){this.shadow.camera.updateProjectionMatrix();for(let A in this.gizmos){let e=this.gizmos[A];e instanceof zh&&e.update()}}updateMatrixWorld(A){super.updateMatrixWorld(A),Cy.setFromMatrixPosition(this.matrixWorld),Dy.setFromRotationMatrix(this.matrixWorld),Ty.copy(this.up).applyQuaternion(Dy).negate().multiplyScalar(this.distance),this.target.position.copy(Cy).add(Ty),this.target.updateMatrixWorld(),this.objectHelper&&this.objectHelper.update()}updateState(A,e){this.updateState_Light(A,e),A.distance!==void 0&&(this.distance=A.distance),A.decay!==void 0&&(this.decay=A.decay),A.angle!==void 0&&(this.angle=A.angle),A.penumbra!==void 0&&(this.penumbra=A.penumbra),A.shadowRadius!==void 0&&(this.shadow.radius=A.shadowRadius),A.shadowResolution!==void 0&&(this.shadow.mapSize.set(A.shadowResolution,A.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}},Yk=class extends Ii{get forceComputeSize(){return!0}get shape(){return this.geometry.userData.shape}constructor(A,e,t){super(A,e,t)}updateEntityBoxSize(A,e){let t=this.geometry.getAttribute("position");t!==void 0?eb(t,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:t.count,A,e):super.updateEntityBoxSize(A,e)}},cn=class extends Yc(Va,hm){constructor(A,e,t){super(),e.type==="Instance"&&typeof A=="string"&&(e=this.transformAssignData(e,t)),this.super_Entity(A,e),this.objectHelper.update()}get isComponentRoot(){return this.data.type==="Component"&&typeof this.identity=="string"}get isInstanceRoot(){return this.data.type==="Instance"&&typeof this.identity=="string"}transformAssignData(A,e){let t=e.scene.data.objects.get(A.component);if(t){let i,r;for(let s of vn.rootOverrideProps)A[s]===void 0?(i===void 0&&(i={...A}),i[s]=t.data[s]):(r===void 0&&(r={}),r[s]=A[s]);return this.overrideData=r,i!=null?i:A}return A}updateByOp(A,e,t,i){let r;if(this.isInstanceRoot&&!i&&(e=this.transformAssignData(e,t),A.type===0&&A.path.length===0&&this.component))for(let s of vn.rootOverrideProps)s in A.props&&A.props[s]===void 0&&(r===void 0&&(r={...A,props:{...A.props}}),r.props[s]=this.component.data[s]);super.updateByOp(r!=null?r:A,e,t,i)}updateState(A,e){this.updateState_Entity(A,e)}expandInstanceChildren(A){var t;let e=this.data;if(this.component===void 0){this.component=(t=A.scene.find(e.component))!=null?t:null;let i=!1;if(this.component!==this.oldComponent){if(this.oldComponent){let r=0;for(let s of this.children)if(He.is(s))A.scene.disposeAndUnregisterEntityRecursivelyIfNotReregistered(s),cm(s),r+=1;else break;this.children.splice(0,r)}i=!0}this.component&&Vb(A,[this.uuid],e.overrides,this,this.component,this.component,0,i),this.oldComponent=this.component}}};function cm(A){if(A.component){let e=A.component.instances.indexOf(A);e>=0&&A.component.instances.splice(e,1);for(let t of A.children)He.is(t)&&cm(t)}}function Py(A,e,t,i){return A.component===e&&kf(A.identity,i)?A.overrideData===t?2:1:0}function Vb(A,e,t,i,r,s,a,n){var l;if(a>50)return!1;if(i.component!==r){if(i.component){let u=i.component.instances.indexOf(i);u>=0&&i.component.instances.splice(u,1)}r.instances.push(i),i.component=r}r instanceof cn&&r.isInstanceRoot&&r.expandInstanceChildren(A);let o=0;for(let u of r.children)if(He.is(u)){let h=[...e,...typeof u.identity=="string"?[u.identity]:u.identity],c=tc.resolve(t,h,1),d=null,f;if(!n){let m=i.children[o];if(d=He.is(m)?m:null,d!==null){let p=Py(d,u,c,h);f=p>=1?d.stateSelection:void 0,p!==2&&(d=null)}if(d===null&&(d=(l=A.scene.findInstance(h))!=null?l:null,d!==null)){let p=Py(d,u,c,h);if(f=p>=1?d.stateSelection:void 0,p!==2)d=null;else{let g=d.parent.children.indexOf(d);d.parent.children.splice(g,1),i.children.splice(o,0,d),d.parent===i?g<=o&&console.error("not possible"):(d.parent=i,d.matrixWorldNeedsUpdate=!0,d.resetBBoxNeedsUpdate(),d.updateVisible(),A.pendingDeletes.delete(d))}}}if(d===null){let m=c?qs.apply(u.data,c):u.data;ta.is(m.type)&&(m={...m,type:"Empty"}),d=ns.createEntity(h,m,A),d.overrideData=c,i.add(d),i.children.splice(i.children.length-1,1),i.children.splice(o,0,d),d.updateState(d.data,A),f&&d.changeSelectedState(f,A),A.scene.registerInstanceAndSetUuid(d)}o+=1,Vb(A,e,t,d,u,s,a+1,n)}if(!n){let u=o;for(;;){let h=i.children[o];if(He.is(h))A.pendingDeletes.add(h);else break;o+=1}i.children.splice(u,o-u)}return!0}function Xk(A,e,t){let i;return e.geometry.type==="TextGeometry"?new Nb(A,e,t):(e.geometry.type==="SubdivGeometry"?i=new Zo(A,e,t):e.geometry.type==="VectorGeometry"?i=new Yk(A,e,t):e.geometry.type==="BooleanGeometry"?i=new xn(A,e,t):i=new Ii(A,e,t),i)}function um(A,e,t){return e.type==="Mesh"?Xk(A,e,t):e.type==="Empty"?new jp(A,e):e.type==="PointLight"?new Hk(A,e,t):e.type==="SpotLight"?new Wk(A,e,t):e.type==="DirectionalLight"?new Vk(A,e,t):e.type==="Component"||e.type==="Instance"?new cn(A,e,t):ta.is(e.type)?new Ir(A,e):(console.error(e),new jp(A,e))}ns.createEntity=um;function Qk(A,e,t){let i=um(A.identity,e,t),r=A.children,s=A.parent,a=A.component,n=A.instances,o=A.overrideData,l=A.uuid,u=A.stateSelection;A.dispose();for(let h of Object.keys(A))delete A[h];Object.setPrototypeOf(A,Object.getPrototypeOf(i));for(let h of Object.keys(i))A[h]=i[h];A.children=[...A.children,...r],A.parent=s,A.component=a,A.instances=n,A.uuid=l,A.overrideData=o,A.updateState(A.data,t),u&&A.changeSelectedState(u,t),A.resetBBoxNeedsUpdate()}ns.changeEntityProptotype=Qk;ns.Cloner=gc;function qk(A,e,t,i){A.updateByOp(e,t,i,!1)}function Ly(A,e){let t=!1,i=e.getLayersOfType("transmission"),r=e.getLayersOfType("outline");return r.length>0&&(A.layers.set(8),i.length>0&&A.layers.enable(3),t=!0,om(A),nm(A)),i.length===0&&r.length===0&&A.layers.set(0),t}function _y(A,e){if(!e.layers)return!1;let t=!1,i=e.getLayersOfType("transmission"),r=e.getLayersOfType("outline");return i.length>0&&(A.layers.set(3),r.length>0&&A.layers.enable(8),t=!0),i.length===0&&r.length===0&&A.layers.set(0),t}function Zk(A){let e=!1;return A.traverseEntity(t=>{if(t instanceof Wc)if(Array.isArray(t.material))for(let i=0;i<t.material.length;i++)Ly(t,t.material[i])&&(e=!0);else Ly(t,t.material)&&(e=!0)}),e}function Kk(A){let e=!1;return A.traverseEntity(t=>{if(t instanceof Wc)if(Array.isArray(t.material))for(let i=0;i<t.material.length;i++)_y(t,t.material[i])&&(e=!0);else _y(t,t.material)&&(e=!0)}),e}var Jk=new d1,$k=new TA,A5=new wn;function e5(A,e,t){let i=A.cloner;if(i)for(let r of i.children){let s=$k.copy(r.matrixWorld).invert(),a=A5.copy(e.ray).applyMatrix4(s),n=A.matrixWorld;a.applyMatrix4(n);let o=Jk;o.set(a.origin,a.direction),o.near=e.near,o.far=e.far,o.intersectObject(A,!1).length>0&&t.push({object:A})}}var t5=A=>`

// PCSS implementation based on:
// https://www.gamedev.net/articles/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/
// NOTE: This number affects how big the shadow blur can
// possibly get. Bigger number == bigger blur, but less precise results

const float  gPenumbraFilterSize = 80.0;
const int   gPenumbraSamples = ${A};
const int gShadowSamples = ${A};
const float gShadowSamplesRpc = 1.0f / float(gShadowSamples);

vec2 vogelDiskSample(int sample_index, int sample_count, float angle)
{
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sample_index) + 0.5f) / sqrt(float(sample_count));
  float theta = float(sample_index) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}

// NOTE: For now we aren't using this screen-space noise. But we should enable
// it again once we do some sort of temporal AA. Then we could potentially lower
// the number of samples needed and still get a pretty smooth result.
// Derived from the interleaved gradient function from Jimenez 2014 http:goo.gl/eomGso
float getNoiseInterleavedGradient(vec2 screenPos)
{
    vec3 magic = vec3(0.06711056f, 0.00583715f, 52.9829189f);
    return fract(magic.z * fract(dot(screenPos, magic.xy)));
}

#ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0

        uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
        varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

        struct DirectionalLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

    #endif

    #if NUM_SPOT_LIGHT_SHADOWS > 0

        uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
        varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

        struct SpotLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

    #endif

    #if NUM_POINT_LIGHT_SHADOWS > 0

        uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
        varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

        struct PointLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
            float shadowCameraNear;
            float shadowCameraFar;
        };

        uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

    #endif

    /*
    #if NUM_RECT_AREA_LIGHTS > 0

        // TODO (abelnation): create uniforms for area light shadows

    #endif
    */

float computePenumbra(int index, sampler2D shadowMap, float temporalAngle, float texelSize, vec2 uv, float compare, float texelScalar, float shadowRadius)
{
    float penumbra = 1.0;
    float blockerDepthAvg = 0.0;
    float blockerCount = 0.0;

    #pragma unroll_loop_start
    for(int i = 0; i < gPenumbraSamples; i ++)
    {
        vec2 offset = (vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize) * texelScalar;
        float depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) );

        if(depth < compare + 0.0001)
        {
            blockerDepthAvg += depth;
            blockerCount++;
        }
    }
    #pragma unroll_loop_end

    if (blockerCount > 0.0)
    {
        blockerDepthAvg /= blockerCount;

        // Compute penumbra
        penumbra = (compare - blockerDepthAvg) / (blockerDepthAvg);
        penumbra *= penumbra;
        penumbra *= 200.0 * penumbraSize[min(index, ${5} - 1)]; // Magic number that affects how quickly the penumbra grows

        return clamp(penumbra, 0.00, 1.0);
    }
    return 0.0;
}

vec4 shadowmod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 shadowperm(vec4 x){return shadowmod289(((x * 34.0) + 1.0) * x);}
float shadowNoise(vec3 p){
            vec3 a = floor(p);
            vec3 d = p - a;
            d = d * d * (3.0 - 2.0 * d);
            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
            vec4 k1 = shadowperm(b.xyxy);
            vec4 k2 = shadowperm(k1.xyxy + b.zzww);
            vec4 c = k2 + a.zzzz;
            vec4 k3 = shadowperm(c);
            vec4 k4 = shadowperm(c + 1.0);
            vec4 o1 = fract(k3 * (1.0 / 41.0));
            vec4 o2 = fract(k4 * (1.0 / 41.0));
            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
            return o4.y * d.y + o4.x * (1.0 - d.y);
        }

float vogelShadow(int index, sampler2D shadowMap, vec2 uv, float texelSize, float compare, float shadowRadius)
{
    float shadow         = 0.0f;
    float temporalOffset = shadowNoise(floor(vWPosition * 10.));

    // NOTE: When using TAA, we should use screen space interleaved gradient noise
    //float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy);
    float temporalAngle  = temporalOffset * PI2;

    float texelScalar = (gPenumbraFilterSize) / (texelSize * 1024.);
    float penumbra = computePenumbra(index, shadowMap, temporalAngle, texelSize, uv, compare, texelScalar, shadowRadius);
    if (penumbra == -1.0) {
        return 1.0;
    }

    #pragma unroll_loop_start
    for (int i = 0; i < gShadowSamples; i++)
    {
        vec2 vogelSample =  vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;
        // Overall blurring offset
        vec2 offset = vogelSample * (shadowRadius * 2.);

        // Penumbra offset
        offset += vogelSample * (penumbra * texelScalar);

        shadow += step( compare, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    }
    #pragma unroll_loop_end

    return shadow * gShadowSamplesRpc;
}


    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

    }

    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

        return unpackRGBATo2Half( texture2D( shadow, uv ) );

    }

    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

        float occlusion = 1.0;

        vec2 distribution = texture2DDistribution( shadow, uv );

        float hard_shadow = step( compare , distribution.x ); // Hard Shadow

        if (hard_shadow != 1.0 ) {

            float distance = compare - distribution.x ;
            float variance = max( 0.00000, distribution.y * distribution.y );
            float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

        }
        return occlusion;

    }

    float getShadow( int i, sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

        float shadow = 1.0;

        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;

        // if ( something && something ) breaks ATI OpenGL shader compiler
        // if ( all( something, something ) ) using this instead

        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );

        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

        bool frustumTest = all( frustumTestVec );

        if ( frustumTest ) {

        #if defined( SHADOWMAP_TYPE_PCF )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            return vogelShadow(i, shadowMap, shadowCoord.xy, texelSize.x, shadowCoord.z, shadowRadius );

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            float dx = texelSize.x;
            float dy = texelSize.y;

            vec2 uv = shadowCoord.xy;
            vec2 f = fract( uv * shadowMapSize + 0.5 );
            uv -= f * texelSize;

            shadow = (
                texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                          f.x ),
                     mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                          f.x ),
                     f.y )
            ) * ( 1.0 / 9.0 );

        #elif defined( SHADOWMAP_TYPE_VSM )

            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

        #else // no percentage-closer filtering:

            shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

        #endif

        }

        return shadow;

    }

    // cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
    // vector suitable for 2D texture mapping. This code uses the following layout for the
    // 2D texture:
    //
    // xzXZ
    //  y Y
    //
    // Y - Positive y direction
    // y - Negative y direction
    // X - Positive x direction
    // x - Negative x direction
    // Z - Positive z direction
    // z - Negative z direction
    //
    // Source and test bed:
    // https://gist.github.com/tschw/da10c43c467ce8afd0c4

    vec2 cubeToUV( vec3 v, float texelSizeY ) {

        // Number of texels to avoid at the edge of each square

        vec3 absV = abs( v );

        // Intersect unit cube

        float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
        absV *= scaleToCube;

        // Apply scale to avoid seams

        // two texels less per square (one texel will do for NEAREST)
        v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

        // Unwrap

        // space: -1 ... 1 range for each square
        //
        // #X##         dim    := ( 4 , 2 )
        //  # #         center := ( 1 , 1 )

        vec2 planar = v.xy;

        float almostATexel = 1.5 * texelSizeY;
        float almostOne = 1.0 - almostATexel;

        if ( absV.z >= almostOne ) {

            if ( v.z > 0.0 )
                planar.x = 4.0 - v.x;

        } else if ( absV.x >= almostOne ) {

            float signX = sign( v.x );
            planar.x = v.z * signX + 2.0 * signX;

        } else if ( absV.y >= almostOne ) {

            float signY = sign( v.y );
            planar.x = v.x + 2.0 * signY + 2.0;
            planar.y = v.z * signY - 2.0;

        }

        // Transform to UV space

        // scale := 0.5 / dim
        // translate := ( center + 0.5 ) / dim
        return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

    }

    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

        float shadow = 1.0;
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

        // for point lights, the uniform @vShadowCoord is re-purposed to hold
        // the vector from the light to the world-space position of the fragment.
        vec3 lightToPosition = shadowCoord.xyz;

        // dp = normalized distance from light to fragment position
        float compare = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
        compare += shadowBias;

        // bd3D = base direction 3D
        vec3 bd3D = normalize( lightToPosition );

        float temporalOffset = shadowNoise(floor(vWPosition * 10.));
        float temporalAngle  = temporalOffset * PI2;


        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_VSM )
            for (int i = 0; i < gShadowSamples; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                // NOTE: Removed for now
                // Penumbra offset
                //offset += vec3(vogelSample.x, vogelSample.y, vogelSample.y)  * (penumbra * gPenumbraFilterSize);

                shadow += texture2DCompare( shadowMap, cubeToUV( bd3D + offset, texelSize.y ), compare );

            }
            return shadow * gShadowSamplesRpc;

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
            for (int i = 0; i < 16; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                shadow += texture2DCompare( shadowMap, cubeToUV( bd3D + offset, texelSize.y ), compare );

            }
            return shadow * (1.0 / 16.0);
        #else // no percentage-closer filtering

            return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), compare );

        #endif

    }

#endif
`,i5=$A.lights_fragment_begin,r5=$A.shadowmask_pars_fragment,Oy=!1,s5=A=>{switch(A){case"low":return 8;case"medium":return 16;case"high":return 32;default:return 16}},a5=(A="medium")=>{if(Oy)return;Oy=!0;let e=s5(A);$A.shadowmap_pars_fragment=t5(e);let t=i5.slice();t=t.replace("getShadow( spotShadowMap[ i ]",`getShadow( UNROLLED_LOOP_INDEX + ${3}, spotShadowMap[ i ]`),t=t.replace("getShadow( directionalShadowMap[ i ]","getShadow( UNROLLED_LOOP_INDEX, directionalShadowMap[ i ]"),$A.lights_fragment_begin=t;let i=r5.slice();i=i.replaceAll("getShadow(","getShadow( UNROLLED_LOOP_INDEX, "),$A.shadowmask_pars_fragment=i},n5=`
attribute vec3 randomColor;
varying vec3 vNormal;
flat out vec3 vColor;

void main()
{
vNormal = normal;
vColor = randomColor;
gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}
`,o5=`
uniform float depthContrast;
varying vec3 vNormal;
flat in vec3 vColor;
void main()
{
vec3 normal = (normalize(vNormal)).rgb;

float contrastDepth = (gl_FragCoord.z - 0.5) * depthContrast + 0.5;

vec3 resultColor = mix(mix(vColor, normal, 0.2), vec3(contrastDepth), 0.4);
gl_FragColor = vec4(resultColor, vColor.r);
}
`,gd=new At({vertexShader:n5,fragmentShader:o5,uniforms:{depthContrast:{value:1}}}),Hp=new TP;Hp.wireframe=!0;var By=new T,Hb=class extends Qs{constructor(A,e){super(),this.data=A,this.backupFog=new $x(16777215,.1,2e3),this.fogUseBGColor=!1,this.enableHelpers=!1,this.wireframeState=!1,this.needsTransmissionDirty=!0,this.needsNormalDirty=!0,this._needsTransmission=!1,this._needsNormal=!1,this.geometryCacheChanged=!1,this.bgColor=new $t(1,1,1,1),this.entityByUuid={},this.entityIdentityToEntity={},this.toExpandCloner=new Set,this.toUpdateCloner=new Set,this.needsRecomputeInstances=!1,this.ambientLight=new DP(13882323,8553090,.75),this.ambientLight.name="Default Ambient Light",this.ambientLight.layers.enable(3),this.personalCamera=this.createPersonalCamera(),this.activeCamera=this.personalCamera,this.postprocessing=A.postprocessing,this.init(A,e),this.matrixAutoUpdate=!1}markGeometryCacheDirty(){this.geometryCacheChanged=!0}markNeedsUpdateRendererDirty(){this.needsTransmissionDirty=!0,this.needsNormalDirty=!0}needsTransmission(){return this.needsTransmissionDirty&&(this._needsTransmission=Kk(this),this.needsTransmissionDirty=!1),this._needsTransmission}needsNormal(){return this.needsNormalDirty&&(this._needsNormal=Zk(this),this.needsNormalDirty=!1),this._needsNormal}registerInstanceAndSetUuid(A){let e=A.identity.join("-"),t=this.entityIdentityToEntity[e];t&&(A.uuid=t.uuid),this.entityIdentityToEntity[e]=A,this.entityByUuid[A.uuid]=A}findInstance(A){return this.entityIdentityToEntity[A.join("-")]}getWithSortKey(A){let e=this.find(A);if(e===void 0)return;let t=[],i=e;for(;i!==this;){let r=i;i=i.parent;let s=i.children.indexOf(r);t.splice(0,0,s)}return{entity:e,sortKey:t}}getAllSorted(A){let e=[];for(let t of A){let i=this.getWithSortKey(t.id);i!==void 0&&e.push(i)}return e.sort((t,i)=>zz(t.sortKey,i.sortKey)),e.map(t=>t.entity)}nonExistOrDescendantOf(A,e){let t=this.find(A);if(t===void 0)return!0;for(;t;){if(t.uuid===e)return!0;t=t.parent}return!1}find(A){if(A===""||A===void 0)return;let e=this.entityByUuid[A];return e===void 0?this.getObjectByProperty("uuid",A):e}debugEnsureEntity(A){let e=this.find(A);if(e){if(Array.isArray(e.identity)&&this.findInstance(e.identity)===void 0){console.error("not found instance");debugger}}else{console.error("not found");debugger}}addPendingExpandCloner(A){this.toExpandCloner.add(A)}addPendingUpdateCloner(A){this.toUpdateCloner.add(A)}markToExpandCloner(A){this.toExpandCloner.add(A),A.traverseEntityAncestors(e=>{this.toExpandCloner.add(e)})}doPendingExpandCloner(){this.toExpandCloner.forEach(A=>{A.expandCloner(this)}),this.toExpandCloner.clear()}doPendingUpdateCloner(){this.toUpdateCloner.forEach(A=>{var e;(e=A.cloner)==null||e.update()}),this.toUpdateCloner.clear()}doPendingUpdates(){this.doPendingExpandCloner(),this.doPendingUpdateCloner()}updateTreeByOp(A,e){var t;if(A.path.length===0&&A.type===7){let i=A.parent===null?this:this.find(A.parent);if(i===void 0)throw new Error("unexpected");let r=this.createObject(A.id,A.data,A.children,i,A.localIndex,e);r.updateVisible(),r.resetBBoxNeedsUpdate(),Cr(r)&&ls(r.parent)&&(r.invalidateUpstreamBooleanData(),r.parent.invalidateDownstreamBooleanData().recomputeBoolean()),this.markNeedsRecomputeInstancesForAncessors(i),this.markNeedsRecomputeInstancesForChildren(r),this.markToExpandCloner(r)}else if(A.path.length===0&&A.type===8){let i=this.find(A.id);if(i===void 0)throw new Error("unexpected");this.markToExpandCloner(i),i.resetBBoxNeedsUpdate(),this.unregisterObject(i);let r=i.parent;this.markNeedsRecomputeInstancesForAncessors(r),this.markNeedsRecomputeInstancesForChildren(i),i.parent.remove(i),ls(i.parent)&&(i.parent.invalidateUpstreamBooleanData(),i.parent.invalidateDownstreamBooleanData().recomputeBoolean()),Cr(i)&&(i.freeBooleanPointer(),r instanceof xn&&r.invalidateDownstreamBooleanData().recomputeBoolean()),this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(i)}else if(A.path.length===0&&A.type===9){let i=this.find(A.id);if(i===void 0)throw new Error("unexpected");this.markNeedsRecomputeInstancesForChildren(i);let r=i.parent;this.markNeedsRecomputeInstancesForAncessors(r),(t=i.cloner)==null||t.resetOnMove(),this.markToExpandCloner(i);let s=A.parent===null?this:this.find(A.parent);if(s===void 0)throw new Error("unexpected");s.add(i),this.markNeedsRecomputeInstancesForAncessors(s),this.markToExpandCloner(i),i.invalidateClonerTransform(i),i.updateVisible(),i.resetBBoxNeedsUpdate();let a=A.localIndex;s.children.splice(a,0,s.children.pop()),Cr(i)&&(i.invalidateUpstreamBooleanData(),ls(i.parent)?i.parent.invalidateDownstreamBooleanData().recomputeBoolean():r instanceof xn&&r.invalidateDownstreamBooleanData().recomputeBoolean())}this.markNeedsUpdateRendererDirty(),this.markGeometryCacheDirty()}updateEntityByOp(A,e,t,i){if(e.type===0&&(("overrides"in e.props||"component"in e.props)&&this.markNeedsRecomputeInstances(),e.path.includes("overrides")&&"states"in e.props)){let{states:s,rest:a}=e.props;e={...e,props:a},this.markNeedsRecomputeInstances()}let r=this.find(A);if(r)try{qk(r,e,t,{scene:this,shared:i}),r instanceof Ii&&r.updateGeometryGroupsIfNeeded()}catch(s){console.error(s)}}get enableFog(){return this.fog!==null}set enableFog(A){this.fog=A===!0?this.backupFog:null}init(A,e){if(this.createChildrenObjects(A.objects,this,e),this.personalCamera.removeFromParent(),this.add(this.personalCamera),this.ambientLight.removeFromParent(),this.add(this.ambientLight),this.setBackgroundColor(Kt(A.backgroundColor,e)),this.updateFog(A.fog,e),this.updateAmbientLight(A.environment.ambientLight,e),this.activeCamera=this.personalCamera,A.publish.playCamera!==null){let t=this.find(A.publish.playCamera);t instanceof Ir&&this.switchActiveCamera(t)}this.expandInstances(e,!0),this.traverseEntity(t=>{ls(t)&&t.recomputeBoolean()}),this.doPendingExpandCloner()}markNeedsRecomputeInstances(){this.needsRecomputeInstances=!0}markNeedsRecomputeInstancesForChildren(A){A.traverseEntity(e=>{(e.data.type==="Component"||e.data.type==="Instance")&&this.markNeedsRecomputeInstances()})}markNeedsRecomputeInstancesForAncessors(A){He.is(A)&&(A.data.type==="Component"&&this.markNeedsRecomputeInstances(),A.traverseAncestors(e=>{He.is(e)&&e.data.type==="Component"&&this.markNeedsRecomputeInstances()}))}relativeizeInner(A,e,t,i,r){if(A.data.type==="Transition"){let s=A.data.object;s&&s!==e.uuid&&e.find(s)&&t.forInstancesRec(a=>{a.isInstanceRoot||(a.data=Xh(a.data,n=>{let o=n.events.data(r.id),l=a.goUp(i);if(l){let u=[...Mw(l.identity),A.data.object].join("-"),h=this.entityIdentityToEntity[u];if(h){let c=h.uuid;o.actions.data(A.id).object=c}else console.warn("cannot find instance")}}).data)})}}rewriteEventsBeforeGoToPlayMode(){this.traverseEntity(A=>{if(A instanceof cn&&typeof A.identity=="string"&&A.data.type==="Component")return A.traverseEntity((e,t)=>{e.data.events.forEach(i=>{i.data.type==="GameControl"?e.forInstancesRec(r=>{r.isInstanceRoot||(r.data=Xh(r.data,s=>{s.events.delete(i.id)}).data)}):"actions"in i.data&&i.data.actions.forEach(r=>{this.relativeizeInner(r,A,e,t,i)})})}),!0})}expandInstances(A,e){let t=new Set;this.traverseEntity(i=>{if(i instanceof cn&&i.isInstanceRoot)return i.expandInstanceChildren({scene:this,shared:A,pendingDeletes:t}),e||i.resetBBoxNeedsUpdate(),!0});for(let i of t)this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(i),cm(i)}recomputeInstances(A){this.needsRecomputeInstances&&(this.needsRecomputeInstances=!1,this.traverseEntity(e=>{e instanceof cn&&e.isInstanceRoot&&(e.component=void 0)}),this.expandInstances(A,!1))}disposeAndUnregisterEntityRecursivelyIfNotReregistered(A){A.traverseEntity(e=>{let t=typeof e.identity=="string"?e.identity:e.identity.join("-");this.entityIdentityToEntity[t]===e&&(delete this.entityByUuid[e.uuid],delete this.entityIdentityToEntity[t]),e.dispose()})}clearScene(){for(let A of this.children)Xt(A)&&A.disposeRecursively();this.children.length=0}resetAfterClear(A,e){this.init(A,e)}createPersonalCamera(){let A=new Ir(Hb.PERSONAL_CAMERA_ID,{...ec.defaultData,name:"Personal Camera"});return A.objectHelper.visible=!1,this.registerObjectCreatedInLegacy(A),A}raycast(A){let e=[],t=i=>{for(let r of i.children)Xt(r)&&!r.raycastLock&&r.visible&&((Cr(r)||Gk(r)&&this.enableHelpers&&r.objectHelper.visible)&&(A.intersectObject(r,!1,e),e5(r,A,e)),t(r))};return t(this),e}forEachEntity(A){for(let e of this.children)Xt(e)&&A(e)}traverseEntity(A){for(let e of this.children)Xt(e)&&e.traverseEntity(A)}traverseObject(A){for(let e of this.children)uc.is(e)&&e.traverseObject(A)}traverseVisibleEntity(A){for(let e of this.children)Xt(e)&&e.visible&&e.traverseVisibleEntity(A)}updateFog(A,e){this.enableFog=A.enabled,this.fogUseBGColor=A.useBackgroundColor,A.useBackgroundColor?this.backupFog.color.set(this.bgColor):this.backupFog.color=Kt(A.color,e),this.backupFog.near=A.near,this.backupFog.far=A.far}dispose(){this.clearScene()}updateAmbientLight(A,e){A.color!==void 0&&(this.ambientLight.color=Kt(A.color,e)),A.intensity!==void 0&&(this.ambientLight.intensity=A.intensity),A.groundColor!==void 0&&(this.ambientLight.groundColor=Kt(A.groundColor,e)),A.enabled!==void 0&&(this.ambientLight.visible=A.enabled)}switchActiveCamera(A){this.activeCamera!==this.personalCamera&&(this.activeCamera.objectHelper.visible=!0),this.activeCamera=A,A.objectHelper.visible=!1}setBackgroundColor(A){this.bgColor=A,this.fogUseBGColor===!0&&(this.backupFog.color=A)}createChildrenObjects(A,e,t){let i=0;for(let r of A)this.createObject(r.id,r.data,r.children,e,i,t),i+=1}registerObjectCreatedInLegacy(A){this.entityByUuid[A.uuid]=A}unregisterObject(A){delete this.entityByUuid[A.uuid];for(let e of A.children)this.unregisterObject(e)}createObject(A,e,t,i,r,s){let a={scene:this,shared:s},n=um(A,e,a);return n&&(this.entityByUuid[A]=n,i.add(n),i.children.splice(r,0,i.children.pop()),t.length>0&&(n.isInstanceRoot?console.error("instance should not have children!"):this.createChildrenObjects(t,n,s)),n.updateState(e,a),n instanceof Ii&&n.updateGeometryGroupsIfNeeded(),n.updateVisible(),n.cloner&&this.toExpandCloner.add(n)),n}getCenter(A){let e=[];for(let i=0,r=A.length;i<r;++i){let{id:s,recursive:a}=A[i],n=this.find(s),o=a?n.recursiveBBox:n.singleBBox;e.push(...o.vertices)}let t=new qe;return t.setFromPoints(e),t.getCenter(By),By}copyMatrixWorld(A,e){if(A===null){e.identity();return}let t=this.find(A);t?e.copy(t.matrixWorld):e.identity()}copyParentMatrixWorld(A,e){var i;if(A===null){e.identity();return}let t=(i=this.find(A))==null?void 0:i.parent;t?e.copy(t.matrixWorld):e.identity()}traverseMaterial(A){this.traverseEntity(e=>{if(e instanceof Ai)if(Array.isArray(e.material))for(let t=0;t<e.material.length;t++)e.material[t]instanceof vs&&A(e.material[t]);else e.material instanceof vs&&A(e.material)})}updateCanvasSize(A,e){this.activeCamera.setViewplaneSize(A,e);let t,i;A>=e?(t=e/A,i=1):(t=1,i=A/e),this.traverseMaterial(r=>{r.getLayersOfType("transmission").forEach(s=>{s.uniforms[`f${s.id}_aspectRatio`].value.x=t,s.uniforms[`f${s.id}_aspectRatio`].value.y=i})})}},Xc=Hb;Xc.PERSONAL_CAMERA_ID="f23858d0-4a3b-4bd8-8173-66ed0af7f6fb-personalCamera";var Lh=(A,e)=>{let t=e.x-A.x,i=e.y-A.y;return Math.sqrt(t*t+i*i)},l5=(A,e)=>{let t=e.x-A.x,i=e.y-A.y;return c5(Math.atan2(i,t))},h5=(A,e,t)=>{let i={x:0,y:0};return t=Wp(t),i.x=A.x-e*Math.cos(t),i.y=A.y-e*Math.sin(t),i},Wp=A=>A*(Math.PI/180),c5=A=>A*(180/Math.PI),u5=A=>isNaN(A.buttons)?A.pressure!==0:A.buttons!==0,vd=new Map,Iy=A=>{vd.has(A)&&clearTimeout(vd.get(A)),vd.set(A,setTimeout(A,100))},vc=(A,e,t)=>{let i=e.split(/[ ,]+/g),r;for(let s=0;s<i.length;s+=1)r=i[s],A.addEventListener?A.addEventListener(r,t,!1):A.attachEvent&&A.attachEvent(r,t)},Ry=(A,e,t)=>{let i=e.split(/[ ,]+/g),r;for(let s=0;s<i.length;s+=1)r=i[s],A.removeEventListener?A.removeEventListener(r,t):A.detachEvent&&A.detachEvent(r,t)},Wb=A=>(A.preventDefault(),A.type.match(/^touch/)?A.changedTouches:A),Ny=()=>{if(typeof window>"u")return;let A=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:A,y:e}},Yp=(A,e)=>{e.top||e.right||e.bottom||e.left?(A.style.top=e.top,A.style.right=e.right,A.style.bottom=e.bottom,A.style.left=e.left):(A.style.left=e.x+"px",A.style.top=e.y+"px")},dm=(A,e,t)=>{let i=Yb(A);for(let r in i)if(i.hasOwnProperty(r))if(typeof e=="string")i[r]=e+" "+t;else{let s="";for(let a=0,n=e.length;a<n;a+=1)s+=e[a]+" "+t+", ";i[r]=s.slice(0,-2)}return i},d5=(A,e)=>{let t=Yb(A);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},Yb=A=>{let e={};return e[A]="",["webkit","Moz","o"].forEach(function(t){e[t+A.charAt(0).toUpperCase()+A.slice(1)]=""}),e},yd=(A,e)=>{for(let t in e)e.hasOwnProperty(t)&&(A[t]=e[t]);return A},p5=(A,e)=>{let t={};for(let i in A)A.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:A.hasOwnProperty(i)&&(t[i]=A[i]);return t},Xp=(A,e)=>{if(A.length)for(let t=0,i=A.length;t<i;t+=1)e(A[t]);else e(A)},f5=(A,e,t)=>({x:Math.min(Math.max(A.x,e.x-t),e.x+t),y:Math.min(Math.max(A.y,e.y-t),e.y+t)});typeof window<"u"&&(Xb="ontouchstart"in window,Qb=!!window.PointerEvent,qb=!!window.MSPointerEvent);var Xb,Qb,qb,so={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},qa,Ko={};Qb?qa=so.pointer:qb?qa=so.MSPointer:Xb?(qa=so.touch,Ko=so.mouse):qa=so.mouse;function la(){}la.prototype.on=function(A,e){var t=this,i=A.split(/[ ,]+/g),r;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)r=i[s],t._handlers_[r]=t._handlers_[r]||[],t._handlers_[r].push(e);return t};la.prototype.off=function(A,e){var t=this;return t._handlers_=t._handlers_||{},A===void 0?t._handlers_={}:e===void 0?t._handlers_[A]=null:t._handlers_[A]&&t._handlers_[A].indexOf(e)>=0&&t._handlers_[A].splice(t._handlers_[A].indexOf(e),1),t};la.prototype.trigger=function(A,e){var t=this,i=A.split(/[ ,]+/g),r;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)r=i[s],t._handlers_[r]&&t._handlers_[r].length&&t._handlers_[r].forEach(function(a){a.call(t,{type:r,target:t},e)})};la.prototype.config=function(A){var e=this;e.options=e.defaults||{},A&&(e.options=p5(e.options,A))};la.prototype.bindEvt=function(A,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},vc(A,qa[e],t._domHandlers_[e]),Ko[e]&&vc(A,Ko[e],t._domHandlers_[e]),t};la.prototype.unbindEvt=function(A,e){var t=this;return t._domHandlers_=t._domHandlers_||{},Ry(A,qa[e],t._domHandlers_[e]),Ko[e]&&Ry(A,Ko[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};var pm=la;function et(A,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=A,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:1,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=et.id,et.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}et.prototype=new pm;et.constructor=et;et.id=0;et.prototype.buildEl=function(A){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};et.prototype.stylize=function(){if(this.options.dataOnly)return this;var A=this.options.fadeTime+"ms",e=d5("borderRadius","50%"),t=dm("transition","opacity",A),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:"rgba(255, 255, 255, .4)",border:"solid 2px rgba(0, 0, 0, .1)"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:"rgba(255, 255, 255, .8)",border:"solid 2px rgba(0, 0, 0, .1)"},yd(i.el,t),this.options.shape==="circle"&&yd(i.back,e),yd(i.front,e),this.applyStyles(i),this};et.prototype.applyStyles=function(A){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in A[e])this.ui[e].style[t]=A[e][t];return this};et.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};et.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};et.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};et.prototype.show=function(A){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof A=="function"&&A.call(this)},e.options.fadeTime)),e};et.prototype.hide=function(A){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof A=="function"&&A.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){let t=e.options.restJoystick,i={};i.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,i.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(A,i)}return e};et.prototype.setPosition=function(A,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",r={};r.front=dm("transition",["top","left"],i);var s={front:{}};s.front={left:t.frontPosition.x+"px",top:t.frontPosition.y+"px"},t.applyStyles(r),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof A=="function"&&A.call(t),t.restCallback()},t.options.fadeTime)};et.prototype.restCallback=function(){var A=this,e={};e.front=dm("transition","none",""),A.applyStyles(e),A.trigger("rested",A.instance)};et.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};et.prototype.computeDirection=function(A){var e=A.angle.radian,t=Math.PI/4,i=Math.PI/2,r,s,a;if(e>t&&e<t*3&&!A.lockX?r="up":e>-t&&e<=t&&!A.lockY?r="left":e>-t*3&&e<=-t&&!A.lockX?r="down":A.lockY||(r="right"),A.lockY||(e>-i&&e<i?s="left":s="right"),A.lockX||(e>0?a="up":a="down"),A.force>this.options.threshold){var n={},o;for(o in this.direction)this.direction.hasOwnProperty(o)&&(n[o]=this.direction[o]);var l={};this.direction={x:s,y:a,angle:r},A.direction=this.direction;for(o in n)n[o]===this.direction[o]&&(l[o]=!0);if(l.x&&l.y&&l.angle)return A;(!l.x||!l.y)&&this.trigger("plain",A),l.x||this.trigger("plain:"+s,A),l.y||this.trigger("plain:"+a,A),l.angle||this.trigger("dir dir:"+r,A)}else this.resetDirection();return A};var m5=et;function Ye(A,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=A,t.id=Ye.id,Ye.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:1,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);let i=getComputedStyle(t.options.zone.parentElement);return i&&i.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}Ye.prototype=new pm;Ye.constructor=Ye;Ye.id=0;Ye.prototype.prepareNipples=function(){var A=this,e=A.nipples;e.on=A.on.bind(A),e.off=A.off.bind(A),e.options=A.options,e.destroy=A.destroy.bind(A),e.ids=A.ids,e.id=A.id,e.processOnMove=A.processOnMove.bind(A),e.processOnEnd=A.processOnEnd.bind(A),e.get=function(t){if(t===void 0)return e[0];for(var i=0,r=e.length;i<r;i+=1)if(e[i].identifier===t)return e[i];return!1}};Ye.prototype.bindings=function(){var A=this;A.bindEvt(A.options.zone,"start"),A.options.zone.style.touchAction="none",A.options.zone.style.msTouchAction="none"};Ye.prototype.begin=function(){var A=this,e=A.options;if(e.mode==="static"){var t=A.createNipple(e.position,A.manager.getIdentifier());t.add(),A.idles.push(t)}};Ye.prototype.createNipple=function(A,e){var t=this,i=t.manager.scroll,r={},s=t.options,a={x:t.parentIsFlex?i.x:i.x+t.box.left,y:t.parentIsFlex?i.y:i.y+t.box.top};if(A.x&&A.y)r={x:A.x-a.x,y:A.y-a.y};else if(A.top||A.right||A.bottom||A.left){var n=document.createElement("DIV");n.style.display="hidden",n.style.top=A.top,n.style.right=A.right,n.style.bottom=A.bottom,n.style.left=A.left,n.style.position="absolute",s.zone.appendChild(n);var o=n.getBoundingClientRect();s.zone.removeChild(n),r=A,A={x:o.left+i.x,y:o.top+i.y}}var l=new m5(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:A,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Yp(l.ui.el,r),Yp(l.ui.front,l.frontPosition)),t.nipples.push(l),t.trigger("added "+l.identifier+":added",l),t.manager.trigger("added "+l.identifier+":added",l),t.bindNipple(l),l};Ye.prototype.updateBox=function(){var A=this;A.box=A.options.zone.getBoundingClientRect()};Ye.prototype.bindNipple=function(A){var e=this,t,i=function(r,s){t=r.type+" "+s.id+":"+r.type,e.trigger(t,s)};A.on("destroyed",e.onDestroyed.bind(e)),A.on("shown hidden rested dir plain",i),A.on("dir:up dir:right dir:down dir:left",i),A.on("plain:up plain:right plain:down plain:left",i)};Ye.prototype.pressureFn=function(A,e,t){var i=this,r=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval(function(){var s=A.force||A.pressure||A.webkitForce||0;s!==r&&(e.trigger("pressure",s),i.trigger("pressure "+e.identifier+":pressure",s),r=s)}.bind(i),100)};Ye.prototype.onstart=function(A){var e=this,t=e.options,i=A;A=Wb(A),e.updateBox();var r=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(a){if(Object.values(i.touches).findIndex(function(o){return o.identifier===a})<0){var n=[A[0]];n.identifier=a,e.processOnEnd(n)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return Xp(A,r),e.manager.bindDocument(),!1};Ye.prototype.processOnStart=function(A){var e=this,t=e.options,i,r=e.manager.getIdentifier(A),s=A.force||A.pressure||A.webkitForce||0,a={x:A.pageX,y:A.pageY},n=e.getOrCreate(r,a);n.identifier!==r&&e.manager.removeIdentifier(n.identifier),n.identifier=r;var o=function(u){u.trigger("start",u),e.trigger("start "+u.id+":start",u),u.show(),s>0&&e.pressureFn(A,u,u.identifier),e.processOnMove(A)};if((i=e.idles.indexOf(n))>=0&&e.idles.splice(i,1),e.actives.push(n),e.ids.push(n.identifier),t.mode!=="semi")o(n);else{var l=Lh(a,n.position);if(l<=t.catchDistance)o(n);else{n.destroy(),e.processOnStart(A);return}}return n};Ye.prototype.getOrCreate=function(A,e){var t=this,i=t.options,r;return/(semi|static)/.test(i.mode)?(r=t.idles[0],r?(t.idles.splice(0,1),r):i.mode==="semi"?t.createNipple(e,A):(console.warn("Coudln't find the needed nipple."),!1)):(r=t.createNipple(e,A),r)};Ye.prototype.processOnMove=function(A){var e=this,t=e.options,i=e.manager.getIdentifier(A),r=e.nipples.get(i),s=e.manager.scroll;if(!u5(A)){this.processOnEnd(A);return}if(!r){console.error("Found zombie joystick with ID "+i),e.manager.removeIdentifier(i);return}if(t.dynamicPage){var a=r.el.getBoundingClientRect();r.position={x:s.x+a.left,y:s.y+a.top}}r.identifier=i;var n=r.options.size/2,o={x:A.pageX,y:A.pageY};t.lockX&&(o.y=r.position.y),t.lockY&&(o.x=r.position.x);var l=Lh(o,r.position),u=l5(o,r.position),h=Wp(u),c=l/n,d={distance:l,position:o},f,m;if(r.options.shape==="circle"?(f=Math.min(l,n),m=h5(r.position,f,u)):(m=f5(o,r.position,n),f=Lh(m,r.position)),t.follow){if(l>n){let x=o.x-m.x,y=o.y-m.y;r.position.x+=x,r.position.y+=y,r.el.style.top=r.position.y-(e.box.top+s.y)+"px",r.el.style.left=r.position.x-(e.box.left+s.x)+"px",l=Lh(o,r.position)}}else o=m,l=f;var p=o.x-r.position.x,g=o.y-r.position.y;r.frontPosition={x:p,y:g},t.dataOnly||Yp(r.ui.front,r.frontPosition);var v={identifier:r.identifier,position:o,force:c,pressure:A.force||A.pressure||A.webkitForce||0,distance:l,angle:{radian:h,degree:u},vector:{x:p/n,y:-g/n},raw:d,instance:r,lockX:t.lockX,lockY:t.lockY};v=r.computeDirection(v),v.angle={radian:Wp(180-u),degree:180-u},r.trigger("move",v),e.trigger("move "+r.id+":move",v)};Ye.prototype.processOnEnd=function(A){var e=this,t=e.options,i=e.manager.getIdentifier(A),r=e.nipples.get(i),s=e.manager.removeIdentifier(r.identifier);!r||(t.dataOnly||r.hide(function(){t.mode==="dynamic"&&(r.trigger("removed",r),e.trigger("removed "+r.id+":removed",r),e.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(e.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),e.trigger("end "+r.id+":end",r),e.ids.indexOf(r.identifier)>=0&&e.ids.splice(e.ids.indexOf(r.identifier),1),e.actives.indexOf(r)>=0&&e.actives.splice(e.actives.indexOf(r),1),/(semi|static)/.test(t.mode)?e.idles.push(r):e.nipples.indexOf(r)>=0&&e.nipples.splice(e.nipples.indexOf(r),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};Ye.prototype.onDestroyed=function(A,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};Ye.prototype.destroy=function(){var A=this;A.unbindEvt(A.options.zone,"start"),A.nipples.forEach(function(t){t.destroy()});for(var e in A.pressureIntervals)A.pressureIntervals.hasOwnProperty(e)&&clearInterval(A.pressureIntervals[e]);A.trigger("destroyed",A.nipples),A.manager.unbindDocument(),A.off()};var g5=Ye;function at(A){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Ny(),e.config(A),e.prepareCollections();var t=function(){var r;e.collections.forEach(function(s){s.forEach(function(a){r=a.el.getBoundingClientRect(),a.position={x:e.scroll.x+r.left,y:e.scroll.y+r.top}})})};if(typeof window>"u")return e.collections;vc(window,"resize",function(){Iy(t)});var i=function(){e.scroll=Ny()};return vc(window,"scroll",function(){Iy(i)}),e.collections}at.prototype=new pm;at.constructor=at;at.prototype.prepareCollections=function(){var A=this;A.collections.create=A.create.bind(A),A.collections.on=A.on.bind(A),A.collections.off=A.off.bind(A),A.collections.destroy=A.destroy.bind(A),A.collections.get=function(e){var t;return A.collections.every(function(i){return t=i.get(e),!t}),t}};at.prototype.create=function(A){return this.createCollection(A)};at.prototype.createCollection=function(A){var e=this,t=new g5(e,A);return e.bindCollection(t),e.collections.push(t),t};at.prototype.bindCollection=function(A){var e=this,t,i=function(r,s){t=r.type+" "+s.id+":"+r.type,e.trigger(t,s)};A.on("destroyed",e.onDestroyed.bind(e)),A.on("shown hidden rested dir plain",i),A.on("dir:up dir:right dir:down dir:left",i),A.on("plain:up plain:right plain:down plain:left",i)};at.prototype.bindDocument=function(){var A=this;A.binded||(A.bindEvt(document,"move").bindEvt(document,"end"),A.binded=!0)};at.prototype.unbindDocument=function(A){var e=this;(!Object.keys(e.ids).length||A===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};at.prototype.getIdentifier=function(A){var e;return A?(e=A.identifier===void 0?A.pointerId:A.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};at.prototype.removeIdentifier=function(A){var e={};for(var t in this.ids)if(this.ids[t]===A){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};at.prototype.onmove=function(A){var e=this;return e.onAny("move",A),!1};at.prototype.onend=function(A){var e=this;return e.onAny("end",A),!1};at.prototype.oncancel=function(A){var e=this;return e.onAny("end",A),!1};at.prototype.onAny=function(A,e){var t=this,i,r="processOn"+A.charAt(0).toUpperCase()+A.slice(1);e=Wb(e);var s=function(n,o,l){l.ids.indexOf(o)>=0&&(l[r](n),n._found_=!0)},a=function(n){i=t.getIdentifier(n),Xp(t.collections,s.bind(null,n,i)),n._found_||t.removeIdentifier(i)};return Xp(e,a),!1};at.prototype.destroy=function(){var A=this;A.unbindDocument(!0),A.ids={},A.index=0,A.collections.forEach(function(e){e.destroy()}),A.off()};at.prototype.onDestroyed=function(A,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};var v5=at,zy=new v5,y5={create:function(A){return zy.create(A)},factory:zy},x5=Ec(Lx());function Ba(A,e){let t=new qA;if(!A.getAttribute("position"))return t.setAttribute("position",new LA([],3)),t.setIndex([]),t;let{positions:i,triIndices:r}=im(A.getAttribute("position"),A.getIndex());return t.setAttribute("position",new LA(i,3)),t.setIndex(r),e&&t.applyMatrix4(e),t}var w5=new TA,b5=new TA,Yi=[[0,0,0],[0,0,0],[0,0,0]];function Zb(A){let e=A.elements;Yi[0][0]=e[0],Yi[0][1]=e[4],Yi[0][2]=e[8],Yi[1][0]=e[1],Yi[1][1]=e[5],Yi[1][2]=e[9],Yi[2][0]=e[2],Yi[2][1]=e[6],Yi[2][2]=e[10];let{u:t,v:i}=(0,x5.SVD)(Yi),r=w5.set(t[0][0],t[0][1],t[0][2],0,t[1][0],t[1][1],t[1][2],0,t[2][0],t[2][1],t[2][2],0,0,0,0,1),s=b5.set(i[0][0],i[0][1],i[0][2],0,i[1][0],i[1][1],i[1][2],0,i[2][0],i[2][1],i[2][2],0,0,0,0,1);return r.multiply(s.transpose())}var S5=class extends d1{constructor(){super(),this.layers.enable(3),this.layers.enable(8)}setFromCamera(A,e){e.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,-1).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):e.isPerspectiveCamera?(this.ray.origin.set(A.x,A.y,-1).unproject(e),this.ray.direction.set(A.x,A.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):console.error("Raycaster: Unsupported camera type.")}intersectVisibleObjects(A,e=!0,t=[]){return A.forEach(i=>{i.visible&&this.intersectObject(i,e,t)}),t}createRaycastLineHelper(){let A=new ys({color:65280,linewidth:10}),e=new T(this.ray.origin.x,this.ray.origin.y,this.ray.origin.z),t=new T(this.ray.direction.x,this.ray.direction.y,this.ray.direction.z),i=this.camera.far-this.camera.near,r=new T().addVectors(e,t.multiplyScalar(i)),s=new qA;return s.setFromPoints([e,r]),new Ih(s,A)}},Kb=A=>A instanceof jp||A instanceof cn;function M5(A,e){return A.distance-e.distance}function Jb(A,e,t){if(!(!Xt(e)||!e.visible||e.raycastLock)){Cr(e)&&e.raycast(A,t);for(let i of e.children)Jb(A,i,t)}}function Qp(A,e,t){if(!t.some(r=>yc(A,r)!==void 0))return[];let i=[];return e.children.forEach(r=>Jb(A,r,i)),i.sort(M5),i}function qp(A){let e=[];if(A.length){let t=A[0].object;Xt(t)&&e.push(t);let i=t.parent;for(;i;)Kb(i)&&e.push(i),i=i.parent}return e}function yc(A,e){if(Cr(e)){if(!e.raycastLock&&e.visible){let t=[];return e.raycast(A,t),t.length?t[0]:void 0}}else if(Kb(e))return $b(A,e)}function $b(A,e){if(!(!Xt(e)||!e.visible||e.raycastLock)){if(Cr(e)){let t=[];if(e.raycast(A,t),t.length)return t[0]}for(let t of e.children){let i=$b(A,t);if(i)return i}}}function E5(A){if(A.style.transform!==""){let e=getComputedStyle(A).getPropertyValue("transform");if(e!=="none"){let t=e.replace("matrix(","").split(",");return{x:parseFloat(t[0]),y:parseFloat(t[3])}}}return{x:1,y:1}}function Fy(A){let e=A.getViewport(new ee),t=E5(A.domElement);return{left:e.x*t.x,top:e.y*t.y,width:e.z*t.x,height:e.w*t.y}}function T5(A,e,t,i){let r=t.height-i.height,s=(A-i.left-t.left)*(t.width/i.width),a=(e-r+i.top-t.top)*(t.height/i.height);return{x:s/t.width*2-1,y:-(a/t.height)*2+1}}var C5=class{constructor(A,e,t,i,r,s){this.isExport=s,this.raycaster=new S5,this.raycasterNeedsUpdate=!0,this.stopRaycast=!1,this.sharedAssets=new Hc(lc.emptyData()),this.scene=new Xc({...Mp.defaultData},this.sharedAssets),this.camera=new Ir,this.renderer=A,this.domElement=A.domElement,this._domRect=this.domElement.getBoundingClientRect(),this._viewRect=Fy(this.renderer),this.stopRaycast=r,this.sharedAssets=i,this.scene=e,this.camera=t}get domRect(){return this._domRect}get viewRect(){return this._viewRect}updaterRect(){this._domRect=this.domElement.getBoundingClientRect(),this._viewRect=Fy(this.renderer)}updateRaycaster(A){if(!this.raycasterNeedsUpdate)return;this.raycasterNeedsUpdate=!1;let{pageX:e,pageY:t}=A.touches!==void 0&&A.touches.length>0?A.touches[0]:A;this.raycaster.setFromCamera(T5(e,t,this._domRect,this._viewRect),this.camera)}},AS=(A=>(A[A.keydown=0]="keydown",A[A.keyup=1]="keyup",A[A.pointerdown=2]="pointerdown",A[A.pointerup=3]="pointerup",A[A.pointermove=4]="pointermove",A[A.wheel=5]="wheel",A))(AS||{}),ws=class{constructor(A){this.eventContext=A,this.domEventsNeeded=new Set,this.hasVideoAction=!1}connect(){}disconnect(){}},eS=new Map,Po=new Map,Za=class{constructor(A,e,t,i){this.data=e;let{audio:r,volume:s,delay:a,loop:n}=e;if(!r)throw new Error("Missing property");let o=typeof r=="string"?i.getAudio(r).src:r.data;this.audioPlayer=new wo({src:o,volume:s,delay:a,loop:n}),Po.has(t.uuid)?Po.get(t.uuid).push(this):Po.set(t.uuid,[this]),eS.set(A,this)}playByToggle(){this.data.toggle==="stop"?this.audioPlayer.status==="playing"?this.audioPlayer.stop():(this.audioPlayer.stop(),this.audioPlayer.play()):this.data.toggle==="pause"?this.audioPlayer.status==="playing"?this.audioPlayer.pause():this.audioPlayer.play():(this.audioPlayer.stop(),this.audioPlayer.play())}dispose(){this.audioPlayer.stop()}},Zp=class{constructor(A){this.data=A}dispatch(){this.data.playAudio?this.pauseAudio(this.data.playAudio):this.data.object?this.pauseAllAudiosFromObject(this.data.object):this.pauseAllAudios()}pauseAudio(A){let e=eS.get(A);!e||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.audioPlayer[this.data.interaction](),this.disposeDelay()},this.data.delay)):e.audioPlayer[this.data.interaction]())}pauseAllAudiosFromObject(A){let e=Po.get(A);!(e!=null&&e.length)||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.forEach(t=>t.audioPlayer[this.data.interaction]()),this.disposeDelay()},this.data.delay)):e.forEach(t=>t.audioPlayer[this.data.interaction]()))}pauseAllAudios(){let A=[...Po.values()];!A.length||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{A.forEach(e=>{e.forEach(t=>{t.audioPlayer[this.data.interaction]()})}),this.disposeDelay()},this.data.delay)):A.forEach(e=>{e.forEach(t=>{t.audioPlayer[this.data.interaction]()})}))}disposeDelay(){clearTimeout(this.timeoutId),delete this.timeoutId}dispose(){clearTimeout(this.timeoutId),delete this.timeoutId}},Ka=class{constructor(A,e,t,i){if(this.data=e,e.interaction==="play")this.interaction=new Za(A,e,t,i);else if(e.interaction==="pause"||e.interaction==="stop")this.interaction=new Zp(e);else throw new Error("Missing property")}dispatchBasic(){this.interaction instanceof Za?this.interaction.playByToggle():this.interaction.dispatch()}dispatchConditional(){this.interaction instanceof Za?this.interaction.audioPlayer.play():this.interaction.dispatch()}dispatchGameControl(A){this.interaction instanceof Za&&(A==="start"?this.interaction.audioPlayer.play():this.interaction.audioPlayer.stop())}dispose(){this.interaction.dispose()}};function D5(A,e){let t=A.material.layers.find(i=>i.uuid===e);return t.color.texture.image.img instanceof HTMLVideoElement?t.color.texture.image.img:void 0}var tS=new Map,Lo=new Map,_o=class{constructor(A,e,t){this.data=e,this.delay=0,this.status="stopped";let{layerId:i,loop:r,volume:s,delay:a}=e;if(this.object=t,i===void 0)throw new Error("Missing property");let n=D5(t,i);if(n)this.videoElement=n,this.videoElement.loop=r===1/0,this.videoElement.autoplay=!0,s!==void 0&&(this.videoElement.volume=s);else throw new Error("Missing property");a!==void 0&&(this.delay=a),Lo.has(t.uuid)?Lo.get(t.uuid).push(this):Lo.set(t.uuid,[this]),tS.set(A,this),this.pause()}mute(){this.videoElement.muted=!0}unMute(){this.videoElement.muted=!1}play(A){let e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);A?this.mute():e?(this.mute(),window.setTimeout(()=>{this.unMute()},100)):this.unMute(),this.delayTimerId=window.setTimeout(()=>{this.videoElement.play(),this.clearDelay()},this.delay),this.status="playing"}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}pause(){this.videoElement.pause(),this.status="paused"}stop(){this.videoElement.pause(),this.videoElement.currentTime=0,this.status="stopped",this.clearDelay()}playByToggle(){this.data.toggle==="stop"?this.status==="playing"?this.stop():(this.stop(),this.play()):this.data.toggle==="pause"?this.status==="playing"?this.pause():this.play():(this.stop(),this.play())}dispose(){this.stop(),this.videoElement.muted=!0}},Kp=class{constructor(A){this.data=A}dispatch(){this.data.playVideo?this.pauseVideo(this.data.playVideo):this.data.object?this.pauseAllVideosFromObject(this.data.object):this.pauseAllVideos()}pauseVideo(A){let e=tS.get(A);!e||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e[this.data.interaction](),this.disposeDelay()},this.data.delay)):e[this.data.interaction]())}pauseAllVideosFromObject(A){let e=Lo.get(A);!(e!=null&&e.length)||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.forEach(t=>t[this.data.interaction]()),this.disposeDelay()},this.data.delay)):e.forEach(t=>t[this.data.interaction]()))}pauseAllVideos(){let A=[...Lo.values()];!A.length||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{A.forEach(e=>{e.forEach(t=>{t[this.data.interaction]()})}),this.disposeDelay()},this.data.delay)):A.forEach(e=>{e.forEach(t=>{t[this.data.interaction]()})}))}disposeDelay(){clearTimeout(this.timeoutId),delete this.timeoutId}dispose(){clearTimeout(this.timeoutId),delete this.timeoutId}},xc=class{constructor(A,e,t){if(this.data=e,e.interaction==="play")this.interaction=new _o(A,e,t);else if(e.interaction==="pause"||e.interaction==="stop")this.interaction=new Kp(e);else throw new Error("Missing property")}dispatchBasic(){this.interaction instanceof _o?this.interaction.playByToggle():this.interaction.dispatch()}dispatchConditional(){this.interaction instanceof _o?this.interaction.play():this.interaction.dispatch()}dispose(){this.interaction.dispose()}},P5="text/plain",L5="us-ascii",Uy=(A,e)=>e.some(t=>t instanceof RegExp?t.test(A):t===A),_5=(A,{stripHash:e})=>{let t=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(A);if(!t)throw new Error(`Invalid URL: ${A}`);let{type:i,data:r,hash:s}=t.groups,a=i.split(";");s=e?"":s;let n=!1;a[a.length-1]==="base64"&&(a.pop(),n=!0);let o=(a.shift()||"").toLowerCase(),l=[...a.map(u=>{let[h,c=""]=u.split("=").map(d=>d.trim());return h==="charset"&&(c=c.toLowerCase(),c===L5)?"":`${h}${c?`=${c}`:""}`}).filter(Boolean)];return n&&l.push("base64"),(l.length>0||o&&o!==P5)&&l.unshift(o),`data:${l.join(";")},${n?r.trim():r}${s?`#${s}`:""}`};function O5(A,e){if(e={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,sortQueryParameters:!0,...e},A=A.trim(),/^data:/i.test(A))return _5(A,e);if(/^view-source:/i.test(A))throw new Error("`view-source:` is not supported as it is a non-standard protocol");let t=A.startsWith("//");!t&&/^\.*\//.test(A)||(A=A.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,e.defaultProtocol));let i=new URL(A);if(e.forceHttp&&e.forceHttps)throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");if(e.forceHttp&&i.protocol==="https:"&&(i.protocol="http:"),e.forceHttps&&i.protocol==="http:"&&(i.protocol="https:"),e.stripAuthentication&&(i.username="",i.password=""),e.stripHash?i.hash="":e.stripTextFragment&&(i.hash=i.hash.replace(/#?:~:text.*?$/i,"")),i.pathname){let s=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g,a=0,n="";for(;;){let l=s.exec(i.pathname);if(!l)break;let u=l[0],h=l.index,c=i.pathname.slice(a,h);n+=c.replace(/\/{2,}/g,"/"),n+=u,a=h+u.length}let o=i.pathname.slice(a,i.pathname.length);n+=o.replace(/\/{2,}/g,"/"),i.pathname=n}if(i.pathname)try{i.pathname=decodeURI(i.pathname)}catch{}if(e.removeDirectoryIndex===!0&&(e.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(e.removeDirectoryIndex)&&e.removeDirectoryIndex.length>0){let s=i.pathname.split("/"),a=s[s.length-1];Uy(a,e.removeDirectoryIndex)&&(s=s.slice(0,-1),i.pathname=s.slice(1).join("/")+"/")}if(i.hostname&&(i.hostname=i.hostname.replace(/\.$/,""),e.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(i.hostname)&&(i.hostname=i.hostname.replace(/^www\./,""))),Array.isArray(e.removeQueryParameters))for(let s of[...i.searchParams.keys()])Uy(s,e.removeQueryParameters)&&i.searchParams.delete(s);if(e.removeQueryParameters===!0&&(i.search=""),e.sortQueryParameters){i.searchParams.sort();try{i.search=decodeURIComponent(i.search)}catch{}}e.removeTrailingSlash&&(i.pathname=i.pathname.replace(/\/$/,""));let r=A;return A=i.toString(),!e.removeSingleSlash&&i.pathname==="/"&&!r.endsWith("/")&&i.hash===""&&(A=A.replace(/\/$/,"")),(e.removeTrailingSlash||i.pathname==="/")&&i.hash===""&&e.removeSingleSlash&&(A=A.replace(/\/$/,"")),t&&!e.normalizeProtocol&&(A=A.replace(/^http:\/\//,"//")),e.stripProtocol&&(A=A.replace(/^(?:https?:)?\/\//,"")),A}var B5=class{constructor({url:A,context:e}){if(!A)throw new Error("Missing property");this.url=A.startsWith("mailto:")?A:O5(A),this.context=e!=null?e:"tab"}dispatch(){Sp?window.location.assign(this.url):this.context==="tab"?window.open(this.url,"_blank"):this.context==="window"?window.open(this.url,"_blank",`width=${window.innerWidth}, height=${window.innerHeight}`):window.location.assign(this.url)}},I5=class{constructor(A,e,t,i){this.scene=e,this.sharedAssets=t,this.sceneData=A,this.managers=i}dispatch(){var A,e,t;xS(this.sceneData,this.scene,this.sharedAssets,!0),(A=this.managers.eventManager)==null||A.reset(),(e=this.managers.controlsManager.orbitControls)==null||e.reset(),(t=this.managers.controlsManager)==null||t.gameControls.forEach(i=>i.reset(!0))}},iS={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0,rewind:!0},fm={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},R5=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],wc={CSS:{},springs:{}};function ir(A,e,t){return Math.min(Math.max(A,e),t)}function Oo(A,e){return A.indexOf(e)>-1}function xd(A,e){return A.apply(null,e)}var VA={arr:function(A){return Array.isArray(A)},obj:function(A){return Oo(Object.prototype.toString.call(A),"Object")},pth:function(A){return VA.obj(A)&&A.hasOwnProperty("totalLength")},svg:function(A){return A instanceof SVGElement},inp:function(A){return A instanceof HTMLInputElement},dom:function(A){return!("isNode"in A)&&(A.nodeType||VA.svg(A))},str:function(A){return typeof A=="string"},fnc:function(A){return typeof A=="function"},und:function(A){return typeof A>"u"},hex:function(A){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(A)},rgb:function(A){return/^rgb/.test(A)},hsl:function(A){return/^hsl/.test(A)},col:function(A){return VA.hex(A)||VA.rgb(A)||VA.hsl(A)},key:function(A){return!iS.hasOwnProperty(A)&&!fm.hasOwnProperty(A)&&A!=="targets"&&A!=="keyframes"}};function rS(A){var e=/\(([^)]+)\)/.exec(A);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function sS(A,e){var t=rS(A),i=ir(VA.und(t[0])?1:t[0],.1,100),r=ir(VA.und(t[1])?100:t[1],.1,100),s=ir(VA.und(t[2])?10:t[2],.1,100),a=ir(VA.und(t[3])?0:t[3],.1,100),n=Math.sqrt(r/i),o=s/(2*Math.sqrt(r*i)),l=o<1?n*Math.sqrt(1-o*o):0,u=1,h=o<1?(o*n+-a)/l:-a+n;function c(f){var m=e?e*f/1e3:f;return o<1?m=Math.exp(-m*o*n)*(u*Math.cos(l*m)+h*Math.sin(l*m)):m=(u+h*m)*Math.exp(-m*n),f===0||f===1?f:1-m}function d(){var f=wc.springs[A];if(f)return f;for(var m=1/6,p=0,g=0;;)if(p+=m,c(p)===1){if(g++,g>=16)break}else g=0;var v=p*m*1e3;return wc.springs[A]=v,v}return e?c:d}function N5(A){return A===void 0&&(A=10),function(e){return Math.ceil(ir(e,1e-6,1)*A)*(1/A)}}var z5=function(){var A=11,e=1/(A-1);function t(u,h){return 1-3*h+3*u}function i(u,h){return 3*h-6*u}function r(u){return 3*u}function s(u,h,c){return((t(h,c)*u+i(h,c))*u+r(h))*u}function a(u,h,c){return 3*t(h,c)*u*u+2*i(h,c)*u+r(h)}function n(u,h,c,d,f){var m,p,g=0;do p=h+(c-h)/2,m=s(p,d,f)-u,m>0?c=p:h=p;while(Math.abs(m)>1e-7&&++g<10);return p}function o(u,h,c,d){for(var f=0;f<4;++f){var m=a(h,c,d);if(m===0)return h;var p=s(h,c,d)-u;h-=p/m}return h}function l(u,h,c,d){if(!(0<=u&&u<=1&&0<=c&&c<=1))return;var f=new Float32Array(A);if(u!==h||c!==d)for(var m=0;m<A;++m)f[m]=s(m*e,u,c);function p(g){for(var v=0,x=1,y=A-1;x!==y&&f[x]<=g;++x)v+=e;--x;var S=(g-f[x])/(f[x+1]-f[x]),w=v+S*e,M=a(w,u,c);return M>=.001?o(g,w,u,c):M===0?w:n(g,v,v+e,u,c)}return function(g){return u===h&&c===d||g===0||g===1?g:s(p(g),h,d)}}return l}(),aS=function(){var A={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,s=4;i<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var s=ir(i,1,10),a=ir(r,.1,2);return function(n){return n===0||n===1?n:-s*Math.pow(2,10*(n-1))*Math.sin((n-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,r){e[i]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(i){var r=e[i];A["easeIn"+i]=r,A["easeOut"+i]=function(s,a){return function(n){return 1-r(s,a)(1-n)}},A["easeInOut"+i]=function(s,a){return function(n){return n<.5?r(s,a)(n*2)/2:1-r(s,a)(n*-2+2)/2}}}),A}();function mm(A,e){if(VA.fnc(A))return A;var t=A.split("(")[0],i=aS[t],r=rS(A);switch(t){case"spring":return sS(A,e);case"cubicBezier":return xd(z5,r);case"steps":return xd(N5,r);default:return xd(i,r)}}function nS(A){try{var e=document.querySelectorAll(A);return e}catch{return}}function Qc(A,e){for(var t=A.length,i=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<t;s++)if(s in A){var a=A[s];e.call(i,a,s,A)&&r.push(a)}return r}function qc(A){return A.reduce(function(e,t){return e.concat(VA.arr(t)?qc(t):t)},[])}function ky(A){return VA.arr(A)?A:(VA.str(A)&&(A=nS(A)||A),A instanceof NodeList||A instanceof HTMLCollection?[].slice.call(A):[A])}function gm(A,e){return A.some(function(t){return t===e})}function vm(A){var e={};for(var t in A)e[t]=A[t];return e}function Jp(A,e){var t=vm(A);for(var i in A)t[i]=e.hasOwnProperty(i)?e[i]:A[i];return t}function Zc(A,e){var t=vm(A);for(var i in e)t[i]=VA.und(A[i])?e[i]:A[i];return t}function F5(A){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(A);return e?"rgba("+e[1]+",1)":A}function U5(A){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=A.replace(e,function(n,o,l,u){return o+o+l+l+u+u}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(i[1],16),s=parseInt(i[2],16),a=parseInt(i[3],16);return"rgba("+r+","+s+","+a+",1)"}function k5(A){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(A)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(A),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function a(c,d,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?c+(d-c)*6*f:f<1/2?d:f<2/3?c+(d-c)*(2/3-f)*6:c}var n,o,l;if(i==0)n=o=l=r;else{var u=r<.5?r*(1+i):r+i-r*i,h=2*r-u;n=a(h,u,t+1/3),o=a(h,u,t),l=a(h,u,t-1/3)}return"rgba("+n*255+","+o*255+","+l*255+","+s+")"}function G5(A){if(VA.rgb(A))return F5(A);if(VA.hex(A))return U5(A);if(VA.hsl(A))return k5(A)}function _r(A){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(A);if(e)return e[1]}function j5(A){if(Oo(A,"translate")||A==="perspective")return"px";if(Oo(A,"rotate")||Oo(A,"skew"))return"deg"}function $p(A,e){return VA.fnc(A)?A(e.target,e.id,e.total):A}function rr(A,e){return A.getAttribute(e)}function ym(A,e,t){var i=_r(e);if(gm([t,"deg","rad","turn"],i))return e;var r=wc.CSS[e+t];if(!VA.und(r))return r;var s=100,a=document.createElement(A.tagName),n=A.parentNode&&A.parentNode!==document?A.parentNode:document.body;n.appendChild(a),a.style.position="absolute",a.style.width=s+t;var o=s/a.offsetWidth;n.removeChild(a);var l=o*parseFloat(e);return wc.CSS[e+t]=l,l}function oS(A,e,t){if(e in A.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=A.style[e]||getComputedStyle(A).getPropertyValue(i)||"0";return t?ym(A,r,t):r}}function xm(A,e){if(VA.dom(A)&&!VA.inp(A)&&(rr(A,e)||VA.svg(A)&&A[e]))return"attribute";if(VA.dom(A)&&gm(R5,e))return"transform";if(VA.dom(A)&&e!=="transform"&&oS(A,e))return"css";if(A[e]!=null)return"object"}function lS(A){if(VA.dom(A)){for(var e=A.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=t.exec(e);)i.set(r[1],r[2]);return i}}function V5(A,e,t,i){var r=Oo(e,"scale")?1:0+j5(e),s=lS(A).get(e)||r;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),i?ym(A,s,i):s}function wm(A,e,t,i){switch(xm(A,e)){case"transform":return V5(A,e,i,t);case"css":return oS(A,e,t);case"attribute":return rr(A,e);default:return A[e]||0}}function bm(A,e){var t=/^(\*=|\+=|-=)/.exec(A);if(!t)return A;var i=_r(A)||0,r=parseFloat(e),s=parseFloat(A.replace(t[0],""));switch(t[0][0]){case"+":return r+s+i;case"-":return r-s+i;case"*":return r*s+i}}function hS(A,e){if(VA.col(A))return G5(A);if(/\s/g.test(A))return A;var t=_r(A),i=t?A.substr(0,A.length-t.length):A;return e?i+e:i}function Sm(A,e){return Math.sqrt(Math.pow(e.x-A.x,2)+Math.pow(e.y-A.y,2))}function H5(A){return Math.PI*2*rr(A,"r")}function W5(A){return rr(A,"width")*2+rr(A,"height")*2}function Y5(A){return Sm({x:rr(A,"x1"),y:rr(A,"y1")},{x:rr(A,"x2"),y:rr(A,"y2")})}function cS(A){for(var e=A.points,t=0,i,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(t+=Sm(i,s)),i=s}return t}function X5(A){var e=A.points;return cS(A)+Sm(e.getItem(e.numberOfItems-1),e.getItem(0))}function uS(A){if(A.getTotalLength)return A.getTotalLength();switch(A.tagName.toLowerCase()){case"circle":return H5(A);case"rect":return W5(A);case"line":return Y5(A);case"polyline":return cS(A);case"polygon":return X5(A)}}function Q5(A){var e=uS(A);return A.setAttribute("stroke-dasharray",e),e}function q5(A){for(var e=A.parentNode;VA.svg(e)&&VA.svg(e.parentNode);)e=e.parentNode;return e}function dS(A,e){var t=e||{},i=t.el||q5(A),r=i.getBoundingClientRect(),s=rr(i,"viewBox"),a=r.width,n=r.height,o=t.viewBox||(s?s.split(" "):[0,0,a,n]);return{el:i,viewBox:o,x:o[0]/1,y:o[1]/1,w:a/o[2],h:n/o[3]}}function Z5(A,e){var t=VA.str(A)?nS(A)[0]:A,i=e||100;return function(r){return{property:r,el:t,svg:dS(t),totalLength:uS(t)*(i/100)}}}function K5(A,e){function t(n){n===void 0&&(n=0);var o=e+n>=1?e+n:0;return A.el.getPointAtLength(o)}var i=dS(A.el,A.svg),r=t(),s=t(-1),a=t(1);switch(A.property){case"x":return(r.x-i.x)*i.w;case"y":return(r.y-i.y)*i.h;case"angle":return Math.atan2(a.y-s.y,a.x-s.x)*180/Math.PI}}function Gy(A,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=hS(VA.pth(A)?A.totalLength:A,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:VA.str(A)||e?i.split(t):[]}}function pS(A){var e=A?qc(VA.arr(A)?A.map(ky):ky(A)):[];return Qc(e,function(t,i,r){return r.indexOf(t)===i})}function fS(A){var e=pS(A);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:lS(t)}}})}function J5(A,e){var t=vm(e);if(/^spring/.test(t.easing)&&(t.duration=sS(t.easing)),VA.arr(A)){var i=A.length,r=i===2&&!VA.obj(A[0]);r?A={value:A}:VA.fnc(e.duration)||(t.duration=e.duration/i)}var s=VA.arr(A)?A:[A];return s.map(function(a,n){var o=VA.obj(a)&&!VA.pth(a)?a:{value:a};return VA.und(o.delay)&&(o.delay=n?0:e.delay),VA.und(o.endDelay)&&(o.endDelay=n===s.length-1?e.endDelay:0),o}).map(function(a){return Zc(a,t)})}function $5(A){for(var e=Qc(qc(A.map(function(s){return Object.keys(s)})),function(s){return VA.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},i=function(s){var a=e[s];t[a]=A.map(function(n){var o={};for(var l in n)VA.key(l)?l==a&&(o.value=n[l]):o[l]=n[l];return o})},r=0;r<e.length;r++)i(r);return t}function AG(A,e){var t=[],i=e.keyframes;i&&(e=Zc($5(i),e));for(var r in e)VA.key(r)&&t.push({name:r,tweens:J5(e[r],A)});return t}function eG(A,e){var t={};for(var i in A){var r=$p(A[i],e);VA.arr(r)&&(r=r.map(function(s){return $p(s,e)}),r.length===1&&(r=r[0])),t[i]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function tG(A,e){var t;return A.tweens.map(function(i){var r=eG(i,e),s=r.value,a=VA.arr(s)?s[1]:s,n=_r(a),o=wm(e.target,A.name,n,e),l=t?t.to.original:o,u=VA.arr(s)?s[0]:l,h=_r(u)||_r(o),c=n||h;return VA.und(a)&&(a=l),r.from=Gy(u,c),r.to=Gy(bm(a,u),c),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=mm(r.easing,r.duration),r.isPath=VA.pth(s),r.isColor=VA.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var mS={css:function(A,e,t){return A.style[e]=t},attribute:function(A,e,t){return A.setAttribute(e,t)},object:function(A,e,t){return A[e]=t},transform:function(A,e,t,i,r){if(i.list.set(e,t),e===i.last||r){var s="";i.list.forEach(function(a,n){s+=n+"("+a+") "}),A.style.transform=s}}};function gS(A,e){var t=fS(A);t.forEach(function(i){for(var r in e){var s=$p(e[r],i),a=i.target,n=_r(s),o=wm(a,r,n,i),l=n||_r(o),u=bm(hS(s,l),o),h=xm(a,r);mS[h](a,r,u,i.transforms,!0)}})}function iG(A,e){var t=xm(A.target,e.name);if(t){var i=tG(e,A),r=i[i.length-1];return{type:t,property:e.name,animatable:A,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function rG(A,e){return Qc(qc(A.map(function(t){return e.map(function(i){return iG(t,i)})})),function(t){return!VA.und(t)})}function vS(A,e){var t=A.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,A.map(function(s){return i(s)+s.duration})):e.duration,r.delay=t?Math.min.apply(Math,A.map(function(s){return i(s)+s.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,A.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,r}var jy=0;function sG(A){var e=Jp(iS,A),t=Jp(fm,A),i=AG(t,A),r=fS(A.targets),s=rG(r,i),a=vS(s,t),n=jy;return jy++,Zc(e,{id:n,children:[],animatables:r,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var mi=[],Vy=[],_h,aG=function(){function A(){_h=requestAnimationFrame(e)}function e(t){var i=mi.length;if(i){for(var r=0;r<i;){var s=mi[r];s.paused?(mi.splice(r,1),i-=1):(s.tick(t),r++)}A()}else _h=cancelAnimationFrame(_h)}return A}();function nG(){document.hidden?(mi.forEach(function(A){return A.pause()}),Vy=mi.slice(0),Qe.running=mi=[]):Vy.forEach(function(A){return A.play()})}typeof document<"u"&&document.addEventListener("visibilitychange",nG);function Qe(A){A===void 0&&(A={});var e=0,t=0,i=0,r,s=0,a=null;function n(v){var x=window.Promise&&new Promise(function(y){return a=y});return v.finished=x,x}var o=sG(A);n(o);function l(){var v=o.direction;v!=="alternate"&&(o.direction=v!=="normal"?"normal":"reverse"),o.reversed=!o.reversed,r.forEach(function(x){return x.reversed=o.reversed})}function u(v){return o.reversed?o.duration-v:v}function h(){e=0,t=u(o.currentTime)*(1/Qe.speed)}function c(v,x){x&&x.seek(v-x.timelineOffset)}function d(v){if(o.reversePlayback)for(var x=s;x--;)c(v,r[x]);else for(var y=0;y<s;y++)c(v,r[y])}function f(v){var x=0,y=o.animations,S=y.length;for(o.reversePlayback===!0&&o.rewind===!1&&(v=o.duration+o.delay-o.endDelay-v);x<S;){var w=y[x],M=w.animatable,b=w.tweens,E=b.length-1,C=b[E];E&&(C=Qc(b,function(j){return v<j.end})[0]||C);for(var D=ir(v-C.start-C.delay,0,C.duration)/C.duration,P=isNaN(D)?1:C.easing(D),z=C.to.strings,O=C.round,G=[],X=C.to.numbers.length,U=void 0,_=0;_<X;_++){var V=void 0;if(o.reversePlayback===!0&&o.rewind===!1)var R=C.to.numbers[_],F=C.from.numbers[_]||0;else var F=C.to.numbers[_],R=C.from.numbers[_]||0;C.isPath?V=K5(C.value,P*F):V=R+P*(F-R),O&&(C.isColor&&_>2||(V=Math.round(V*O)/O)),G.push(V)}var B=z.length;if(!B)U=G[0];else{U=z[0];for(var k=0;k<B;k++){z[k];var W=z[k+1],Q=G[k];isNaN(Q)||(W?U+=Q+W:U+=Q+" ")}}mS[w.type](M.target,w.property,U,M.transforms),w.currentValue=U,x++}}function m(v){o[v]&&!o.passThrough&&o[v](o)}function p(){o.remaining&&o.remaining!==!0&&o.remaining--}function g(v){var x=o.duration,y=o.delay,S=x-o.endDelay,w=u(v);o.progress=ir(w/x*100,0,100),o.reversePlayback=w<o.currentTime,r&&d(w),!o.began&&o.currentTime>=0&&(o.began=!0,m("begin")),!o.loopBegan&&o.currentTime>0&&(o.loopBegan=!0,m("loopBegin")),w<=y&&o.currentTime!==0&&(f(0),m("change")),(w>=S&&o.currentTime!==x||!x)&&(f(x),m("change")),w>y&&w<S?(o.changeBegan||(o.changeBegan=!0,o.changeCompleted=!1,m("changeBegin")),m("change"),f(w)):o.changeBegan?(o.changeCompleted=!0,o.changeBegan=!1,m("change"),m("changeComplete")):o.began&&w>S&&(m("change"),m("changeComplete")),o.currentTime=ir(w,0,x),o.began&&m("update"),v>=x&&(t=0,p(),o.remaining?(e=i,m("loopComplete"),o.loopBegan=!1,o.direction==="alternate"&&l()):(o.paused=!0,o.completed||(o.completed=!0,m("loopComplete"),m("complete"),!o.passThrough&&"Promise"in window&&(a(),n(o)))))}return o.reset=function(){var v=o.direction;o.passThrough=!1,o.currentTime=0,o.progress=0,o.paused=!0,o.began=!1,o.loopBegan=!1,o.changeBegan=!1,o.completed=!1,o.changeCompleted=!1,o.reversePlayback=!1,o.reversed=v==="reverse",o.remaining=o.loop,r=o.children,s=r.length;for(var x=s;x--;)o.children[x].reset();(o.reversed&&o.loop!==!0||v==="alternate"&&o.loop===1)&&o.remaining++,f(o.reversed?o.duration:0)},o.set=function(v,x){return gS(v,x),o},o.tick=function(v){i=v,e||(e=i),g((i+(t-e))*Qe.speed)},o.seek=function(v){g(u(v))},o.pause=function(){o.paused=!0,h()},o.play=function(){!o.paused||(o.completed&&o.reset(),o.paused=!1,mi.push(o),h(),_h||aG())},o.reverse=function(){l(),o.completed=!o.reversed,h()},o.restart=function(){o.reset(),o.play()},o.reset(),o.autoplay&&o.play(),o}function Hy(A,e){for(var t=e.length;t--;)gm(A,e[t].animatable.target)&&e.splice(t,1)}function oG(A){for(var e=pS(A),t=mi.length;t--;){var i=mi[t],r=i.animations,s=i.children;Hy(e,r);for(var a=s.length;a--;){var n=s[a],o=n.animations;Hy(e,o),!o.length&&!n.children.length&&s.splice(a,1)}!r.length&&!s.length&&i.pause()}}function lG(A,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?mm(e.easing):null,r=e.grid,s=e.axis,a=e.from||0,n=a==="first",o=a==="center",l=a==="last",u=VA.arr(A),h=parseFloat(u?A[0]:A),c=u?parseFloat(A[1]):0,d=_r(u?A[1]:A)||0,f=e.start||0+(u?h:0),m=[],p=0;return function(g,v,x){if(n&&(a=0),o&&(a=(x-1)/2),l&&(a=x-1),!m.length){for(var y=0;y<x;y++){if(!r)m.push(Math.abs(a-y));else{var S=o?(r[0]-1)/2:a%r[0],w=o?(r[1]-1)/2:Math.floor(a/r[0]),M=y%r[0],b=Math.floor(y/r[0]),E=S-M,C=w-b,D=Math.sqrt(E*E+C*C);s==="x"&&(D=-E),s==="y"&&(D=-C),m.push(D)}p=Math.max.apply(Math,m)}i&&(m=m.map(function(z){return i(z/p)*p})),t==="reverse"&&(m=m.map(function(z){return s?z<0?z*-1:-z:Math.abs(p-z)}))}var P=u?(c-h)/p:h;return f+P*(Math.round(m[v]*100)/100)+d}}function hG(A){A===void 0&&(A={});var e=Qe(A);return e.duration=0,e.add=function(t,i){var r=mi.indexOf(e),s=e.children;r>-1&&mi.splice(r,1);function a(c){c.passThrough=!0}for(var n=0;n<s.length;n++)a(s[n]);var o=Zc(t,Jp(fm,A));o.targets=o.targets||A.targets;var l=e.duration;o.autoplay=!1,o.direction=e.direction,o.timelineOffset=VA.und(i)?l:bm(i,l),a(e),o.rewind=e.rewind,e.seek(o.timelineOffset);var u=Qe(o);a(u),s.push(u);var h=vS(s,A);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Qe.version="3.2.0";Qe.speed=1;Qe.running=mi;Qe.remove=oG;Qe.get=wm;Qe.set=gS;Qe.convertPx=ym;Qe.path=Z5;Qe.setDashoffset=Q5;Qe.stagger=lG;Qe.timeline=hG;Qe.easing=mm;Qe.penner=aS;Qe.random=function(A,e){return Math.floor(Math.random()*(e-A+1))+A};var Wy=Qe,Yy=new T,Xy=new T,Qy=new ue;function cG(A,e,t,i){if(i===0)return t.copy(A);if(i===1)return t.copy(e);let r=A.w*e.w+A.x*e.x+A.y*e.y+A.z*e.z;if(r>=1)return t.copy(A);let s=1-r*r;if(s<=Number.EPSILON){let u=1-i;return t.w=u*A.w+i*e.w,t.x=u*A.x+i*e.x,t.y=u*A.y+i*e.y,t.z=u*A.z+i*e.z,t.normalize(),t}let a=Math.sqrt(s),n=Math.atan2(a,r),o=Math.sin((1-i)*n)/a,l=Math.sin(i*n)/a;return t.w=A.w*o+e.w*l,t.x=A.x*o+e.x*l,t.y=A.y*o+e.y*l,t.z=A.z*o+e.z*l,t}function nl(A,e,t,i,r){let s=t[A]?t[A]:void 0,a=i[A];if(a==null)return;let n=s!=null?s:e[A],o=a;if(n!==o)return{update:l=>{let u=ae.lerp(n,o,l);r?e[A]=Math.trunc(u):e[A]=u},start:()=>{e[A]=n},end:()=>{e[A]=o}}}function yS(A,e,t,i,r){let s=t[A]?t[A]:void 0,a=i[A];if(!a)return;let n=e[A],o=[...s!=null?s:n],l=[...a];if(!(o.length!==l.length||kf(o,l)))return{update:u=>{o.forEach((h,c)=>{let d=ae.lerp(h,l[c],u);e[A][c]=r?Math.trunc(d):d})},start:()=>{Object.assign(e[A],o)},end:()=>{Object.assign(e[A],l)}}}function qy(A,e,t,i){let r=t[A]?t[A]:void 0,s=i[A];if(!s)return;let a=e[A],n=r?new T().fromArray(r):a.clone(),o=new T().fromArray(s);if(!n.equals(o))return{update:l=>{a.lerpVectors(n,o,l)},start:()=>{a.copy(n)},end:()=>{a.copy(o)}}}function uG(A,e,t,i){let r=t[A]?t[A]:void 0,s=i[A];if(!s)return;let a=e[A],n=r?new TA().fromArray(r):a.clone(),o=new T,l=new ue,u=new T;n.decompose(o,l,u);let h=new TA().fromArray(s),c=new T,d=new ue,f=new T;if(h.decompose(c,d,f),!n.equals(h))return{update:m=>{Qy.slerpQuaternions(l,d,m),Yy.lerpVectors(o,c,m),Xy.lerpVectors(u,f,m),a.compose(Yy,Qy,Xy)},start:()=>{a.compose(o,l,u)},end:()=>{a.compose(c,d,f)}}}function dG(A,e,t,i,r){let s=t[A]?t[A]:void 0,a=i[A];if(!a)return;let n=e[A],o=s?typeof s=="string"?r.getColor(s).clone():new GA().setRGB(s.r,s.g,s.b):n.clone(),l=typeof a=="string"?r.getColor(a).clone():new GA().setRGB(a.r,a.g,a.b);if(o.equals(l))return;let u=n.clone();return e[A]=u,{update:h=>{u.lerpColors(o,l,h)},start:()=>{u.copy(o)},end:()=>{u.copy(l)}}}function pG(A,e,t){var a,n,o,l;let i=[],r=A.cameraType==="OrthographicCamera"?(a=e.orthographic)==null?void 0:a.zoom:(n=e.perspective)==null?void 0:n.zoom,s=A.cameraType==="OrthographicCamera"?(o=t.orthographic)==null?void 0:o.zoom:(l=t.perspective)==null?void 0:l.zoom;if(s!==void 0){let u=r!=null?r:A.zoom,h=s;u!==h&&i.push({update:c=>{A.zoom=ae.lerp(u,h,c),A.updateProjectionMatrix()},start:()=>{A.zoom=u,A.updateProjectionMatrix()},end:()=>{A.zoom=h,A.updateProjectionMatrix()}})}if(t.targetOffset!==void 0){let u=nl("targetOffset",A,e,t);u&&i.push(u)}return i}function fG(A,e,t,i){var d,f;let r=[];if(!("geometry"in t))return r;let s="geometry"in e?e.geometry:{},a=t.geometry;if(A instanceof Zo){let m=(d=s.scaleBaked)!=null?d:A.data.geometry.scaleBaked,p=(f=a.scaleBaked)!=null?f:A.data.geometry.scaleBaked;return Zs.isEqual(m,p)||r.push({update:g=>{A.updateGeometryInteractions({scaleBaked:[ae.lerp(m[0],p[0],g),ae.lerp(m[1],p[1],g),ae.lerp(m[2],p[2],g)]},i),A.invalidateDownstreamBooleanData()},start:()=>{A.updateGeometryInteractions({scaleBaked:m},i),A.invalidateDownstreamBooleanData()},end:()=>{A.updateGeometryInteractions({scaleBaked:p},i),A.invalidateDownstreamBooleanData()}}),r}let{width:n,height:o,depth:l}=s,{width:u,height:h,depth:c}=a;if(u!==void 0||h!==void 0||c!==void 0){let{width:m,height:p,depth:g}=A.geometry.userData.parameters,v=n!=null?n:m,x=o!=null?o:p,y=l!=null?l:g,S=u!=null?u:m,w=h!=null?h:p,M=c!=null?c:g;(v!==S||x!==w||y!==M)&&r.push({update:b=>{A.updateGeometryInteractions({width:ae.lerp(v,S,b),height:ae.lerp(x,w,b),depth:ae.lerp(y,M,b)},i),A.updateGeometryGroupsIfNeeded(),A.invalidateDownstreamBooleanData()},start:()=>{A.updateGeometryInteractions({width:v,height:x,depth:y},i),A.invalidateDownstreamBooleanData()},end:()=>{A.updateGeometryInteractions({width:S,height:w,depth:M},i),A.invalidateDownstreamBooleanData()}})}return r}function mG(A,e,t,i){let r=[];if(t.intensity!==void 0){let s=nl("intensity",A,e,t);s&&r.push(s)}if(t.color!==void 0){let s=dG("color",A,e,t,i);s&&r.push(s)}return r}function gG(A,e,t,i){let r=[];if(Array.isArray(A.material)){if(!("materials"in t&&t.materials))return r;let s="materials"in e&&e.materials?e.materials:[],a=t.materials;A.material.forEach((n,o)=>{var h;if(!a[o])return;let l=(h=s[o])!=null?h:{},u=a[o];typeof l=="string"||typeof u=="string"||r.push(...Zy(n,l,u,i))})}else{if(!("material"in t&&t.material))return r;let s="material"in e&&e.material?e.material:{},a=t.material;if(typeof s=="string"||typeof a=="string")return r;r.push(...Zy(A.material,s,a,i))}return r}function Zy(A,e,t,i){var s,a,n;let r=[];for(let o of A.layers){let l=(s=e.layers)==null?void 0:s.data(o.uuid),u=t.layers.data(o.uuid);if(!u||!((a=o.visible)==null||a)||!((n=u.visible)==null||n))continue;let h=o.getNames().filter(c=>!Sw.some(d=>c.includes(d)));for(let c of h)try{let d=o.getValue(c),f;if(c==="colors")f=MG(o,l,u,c);else if(Array.isArray(d))c==="steps"&&(f=SG(o,l,u,c));else if(typeof d=="number")f=vG(o,l,u,c);else{if(typeof d=="boolean")continue;d instanceof H?f=yG(o,l,u,c):d instanceof T?f=xG(o,l,u,c):d instanceof $t?f=bG(o,l,u,c,i):d instanceof GA?f=wG(o,l,u,c,i):"isTexture"in d&&(f=EG(o,l,u,c))}f&&(Array.isArray(f)?r.push(...f):r.push(f))}catch(d){console.error(`lerpMaterial: unexpected material layer for ${c}`,d)}}return r}function vG(A,e,t,i){if(!A.hasValue(i)||!(i in t))return;let r=e?e[i]:A.getValue(i),s=t[i];if(r!==s)return{update:a=>{A.setValue(i,ae.lerp(r,s,a))},start:()=>{A.setValue(i,r)},end:()=>{A.setValue(i,s)}}}function yG(A,e,t,i){if(!A.hasValue(i)||!(i in t))return;let r=A.getValue(i),s=e?new H().fromArray(e[i]):r.clone(),a=new H().fromArray(t[i]);if(!s.equals(a))return{update:n=>{r.lerpVectors(s,a,n)},start:()=>{r.copy(s)},end:()=>{r.copy(a)}}}function xG(A,e,t,i){if(!A.hasValue(i)||!(i in t))return;let r=A.getValue(i),s=e?new T().fromArray(e[i]):r.clone(),a=new T().fromArray(t[i]);if(!s.equals(a))return{update:n=>{r.lerpVectors(s,a,n)},start:()=>{r.copy(s)},end:()=>{r.copy(a)}}}function wG(A,e,t,i,r){if(!A.hasValue(i)||!(i in t))return;let s=e?e[i]:void 0,a=t[i],n=A.getValue(i),o=s?typeof s=="string"?r.getColor(s).clone():new GA().setRGB(s.r,s.g,s.b):n.clone(),l=typeof a=="string"?r.getColor(a).clone():new GA().setRGB(a.r,a.g,a.b);if(o.equals(l))return;let u=n.clone();return A.setValue(i,u),{update:h=>{u.lerpColors(o,l,h)},start:()=>{u.copy(o)},end:()=>{u.copy(l)}}}function bG(A,e,t,i,r){if(!A.hasValue(i)||!(i in t))return;let s=e?e[i]:void 0,a=t[i],n=A.getValue(i),o=s?typeof s=="string"?r.getColor(s).clone():new GA().setRGB(s.r,s.g,s.b):n.clone(),l=typeof a=="string"?r.getColor(a).clone():new $t(a.r,a.g,a.b,a.a);if(o.equals(l))return;let u=n.clone();return A.setValue(i,u),{update:h=>{u.lerpColors(o,l,h)},start:()=>{u.copy(o)},end:()=>{u.copy(l)}}}function SG(A,e,t,i="steps"){if(!A.hasValue(i)||!(i in t))return;let r=[],s=A.getValue(i),a=e?e[i]:s,n=t[i];for(let o=0;o<s.length;++o){let l=a[o],u=n[o];l!==u&&r.push({update:h=>{s[o]=ae.lerp(l,u,h)},start:()=>{s[o]=l},end:()=>{s[o]=u}})}return r.length?r:void 0}function MG(A,e,t,i="colors"){if(!A.hasValue(i)||!(i in t))return;let r=[],s=A.getValue(i),a=e?e[i]:s.map(o=>o.toArray()),n=t[i];for(let o=0;o<s.length;++o){let l=[...a[o]],u=[...n[o]];Kh.isEqual(l,u)||r.push({update:h=>{s[o].fromArray(Kh.lerp(l,u,h))},start:()=>{s[o].fromArray(l)},end:()=>{s[o].fromArray(u)}})}return r.length?r:void 0}function EG(A,e,t,i="texture"){if(!A.hasValue(i)||!(i in t))return;let r=A.getNode("mat");if(!r)return;let s=e?e[i]:r,a=t[i],n=[...s.repeat],o=[...s.offset],l=[...a.repeat],u=[...a.offset];if(!Wa.isEqual(n,l)||!Wa.isEqual(o,u))return{update:h=>{r.repeat=Wa.lerp(n,l,h),r.offset=Wa.lerp(o,u,h),r.updateMatrix()},start:()=>{r.repeat=[...n],r.offset=[...o],r.updateMatrix()},end:()=>{r.repeat=[...l],r.offset=[...u],r.updateMatrix()}}}var wd=new T,Ky=new mt;function TG(A,e,t,i){let r=[],s=qy("position",A,e,t);s&&r.push(s);let a=qy("scale",A,e,t);a&&r.push(a);let n=CG(A,e,t,i);n&&r.push(n);let o=uG("hiddenMatrix",A,e,t);if(o&&r.push(o),s||a||n||o){let l=()=>{var u;A.updateMatrix(),A.hasNonUniformScale&&(A.updateMatrixWorld(),A.updateMatrixWorldSVD()),(u=A.parent)!=null&&u.matrixWorldFusedFalse&&(A.matrixWorld.multiplyMatrices(A.parent.matrixWorldFusedFalse,A.matrix),A.matrixWorldNeedsUpdate=!1),Cr(A)&&ls(A.parent)&&A.invalidateDownstreamBooleanData(!0)};r.push({update:l,start:l,end:l})}return r}function CG(A,e,t,i){let r=e!=null&&e.rotation?e.rotation:void 0,s=t.rotation;if(!s)return;let a=r?new T().fromArray(r):new T().setFromEuler(A.rotation),n=new T().fromArray(s);if(a.equals(n))return;let o=wd.subVectors(n,a);if(i&&o.toArray().every(l=>Math.abs(l)<2*Math.PI)){let l=new ue().setFromEuler(Ky.setFromVector3(a)),u=new ue().setFromEuler(Ky.setFromVector3(n));return{update:h=>{cG(l,u,A.quaternion,h)},start:()=>{A.rotation.setFromVector3(a)},end:()=>{A.rotation.setFromVector3(n)}}}else return{update:l=>{wd.lerpVectors(a,n,l),A.rotation.setFromVector3(wd)},start:()=>{A.rotation.setFromVector3(a)},end:()=>{A.rotation.setFromVector3(n)}}}function Rn(A,e,t,i){if(typeof e[A]=="number")return nl(A,e,t!=null?t:{},i);if(Array.isArray(e[A]))return yS(A,e,t!=null?t:{},i)}function DG(A,e,t){let i=[];if(!("cloner"in t)||!A.cloner)return i;let r=A.cloner,s="cloner"in e?e.cloner:{},a=t.cloner;gw.forEach(c=>{let d;c==="count"?d=nl("count",r.parameters,s,a,!0):d=Rn(c,r.parameters,s!=null?s:{},a),d&&i.push(d)});let n=PG(r,s,a);n!=null&&n.length&&i.push(...n);let o=LG(r,s,a);o!=null&&o.length&&i.push(...o);let l=_G(r,s,a);l!=null&&l.length&&i.push(...l);let u=OG(r,s,a);u!=null&&u.length&&i.push(...u);let h=BG(r,s,a);return h!=null&&h.length&&i.push(...h),i.length&&i.push({update:()=>{r.update()}}),i}function PG(A,e,t){if(A.parameters.type!=="radial")return;let i=e.radial,r=t.radial;if(!r)return;let s=A.parameters.radial,a=[];return vw.forEach(n=>{let o=Rn(n,s,i!=null?i:{},r);o&&a.push(o)}),a}function LG(A,e,t){if(A.parameters.type!=="linear")return;let i=e.linear,r=t.linear;if(!r)return;let s=[],a=A.parameters.linear;return yw.forEach(n=>{let o=Rn(n,a,i!=null?i:{},r);o&&s.push(o)}),s}function _G(A,e,t){if(A.parameters.type!=="grid")return;let i=e.grid,r=t.grid;if(!r)return;let s=[],a=A.parameters.grid;return xw.forEach(n=>{let o;n==="count"?o=yS(n,a,i!=null?i:{},r,!0):o=Rn(n,a,i!=null?i:{},r),o&&s.push(o)}),s}function OG(A,e,t){if(A.parameters.type!=="toObject")return;let i=e.toObject,r=t.toObject;if(!r)return;let s=[],a=A.parameters.toObject;return ww.forEach(n=>{let o;n==="count"?o=nl(n,a,i!=null?i:{},r,!0):o=Rn(n,a,i!=null?i:{},r),o&&s.push(o)}),s}function BG(A,e,t){if(!A.parameters.randomness)return;let i=e.randomnessObject,r=t.randomnessObject;if(!r)return;let s=[],a=A.parameters.randomnessObject;return bw.forEach(n=>{let o=Rn(n,a,i!=null?i:{},r);o&&s.push(o)}),s}function bd(A,e,t,i,r){let s=[];return A.data.visible&&s.push(...TG(A,e,t,r)),A.data.visible&&s.push(...DG(A,e,t)),Cr(A)?(A instanceof Ii&&A.data.visible&&s.push(...fG(A,e,t,i)),A.data.visible&&s.push(...gG(A,e,t,i))):kk(A)?A.data.visible&&s.push(...mG(A,e,t,i)):Uk(A)&&s.push(...pG(A,e,t)),s.length?{update:a=>{s.forEach(n=>n.update(a))},start:a=>{s.forEach(n=>{var o;return(o=n.start)==null?void 0:o.call(n,a)})},end:a=>{s.forEach(n=>{var o;return(o=n.end)==null?void 0:o.call(n,a)})}}:void 0}var Jy=new T;function xS(A,e,t,i=!1){let r=[];e.traverseObject(s=>{var l,u,h,c,d;if(i&&((l=s.rigidBody)==null||l.setTranslation(s.position0,!0),(u=s.rigidBody)==null||u.setRotation(s.rotation0,!0),(h=s.rigidBody)==null||h.setLinvel(Jy,!0),(c=s.rigidBody)==null||c.setAngvel(Jy,!0)),!He.is(s))return;let a=s.uuid,n=s.data;if(delete s.states,!n.states)return;let o=!1;r.some(f=>A.objects.isDescendantOf(a,f))?o=!0:((d=n.physics)==null?void 0:d.fusedBody)===!0&&n.physics.rigidBody==="dynamic"&&r.push(a),s.data=n,s.currentState=null,s.currentTransitionAction=null;for(let f of n.states)A.environment.usePhysics===!0&&n.physics&&(n.physics.rigidBody==="dynamic"||o)&&(f.data.position!==void 0||f.data.rotation!==void 0||f.data.hiddenMatrix!==void 0)||(s.states||(s.states={}),s.states[f.id]=js.patch(n,f.data));IG(e,s,null,t,n.events.find(f=>f.data.type==="Follow"||f.data.type==="LookAt")!==void 0)})}function IG(A,e,t,i,r=!1){e instanceof Ii&&e.removeInteractionGeometry(),e.changeSelectedState(t,{scene:A,shared:i},r),e instanceof Ii&&e.updateGeometryGroupsIfNeeded()}function RG(A){let e={duration:A.duration,easing:"linear"};switch(A.easing){case 0:e.easing="cubicBezier( 0, 0, 1, 1 )";break;case 1:e.easing="cubicBezier( .25, .1, .25, 1 )";break;case 2:e.easing="cubicBezier( .42, 0, 1, 1 )";break;case 3:e.easing="cubicBezier( 0, 0, .58, 1 )";break;case 4:e.easing="cubicBezier( .42, 0, .58, 1 )";break;case 5:let{control1:t,control2:i}=A;e.easing=`cubicBezier(
				${t[0]}, ${t[1]}, ${i[0]}, ${i[1]}
			)`;break;case 6:let{mass:r,stiffness:s,damping:a,velocity:n}=A;e.easing=`spring( ${r}, ${s}, ${a}, ${n} )`}return e}function NG(A){let e={startOnceDelay:0,delay:0,repeatDelay:0,loop:A.repeat===-1?!0:A.repeat+1};if(A.repeat===0)e.direction="normal",e.rewind=A.direction==="pingpong-rewind";else switch(A.direction){case"pingpong":e.direction="alternate",e.rewind=!1;break;case"pingpong-rewind":e.direction="alternate",e.rewind=!0;break;default:e.direction="normal",e.rewind=!1;break}switch(A.delayDirection){case"start-once":break;case"start":e.delay=A.delay;break;case"end":e.endDelay=A.delay;break;case"start-end":case void 0:e.delay=A.delay,e.endDelay=A.delay;break}return e}var zG=class{constructor(A,e,t,i,r,s,a){this.object=A,this.data=i,this.sharedAssets=r,this.allowSlerp=s,this.id=a,this.targets={t:0},this.firstLoop=!0,this.reverse=!1,this._changeBegan=!1,this._changeCompleted=!0,this.onChange=()=>{this.callback&&(this.callback.update(this.targets.t),this.object.dispatchEvent({type:"requestRender"})),this.targets.t===0?this._changeCompleted||(this._changeCompleted=!0,this._changeBegan=!1,this.onChangeComplete()):this.targets.t===1?this._changeCompleted||(this._changeCompleted=!0,this._changeBegan=!1,this.onChangeComplete()):(this._changeCompleted&&(this._changeCompleted=!1),this._changeBegan||(this._changeBegan=!0,this.onChangeBegin()))},this.onChangeBegin=()=>{let l,u;this.reverse?(l=this.to,u=this.from):(l=this.from,u=this.to),this.object.currentState=u.id,this.object.dispatchEvent({type:"beginState",state:this.targets.t>.5?l.id:u.id})},this.onChangeComplete=()=>{let l,u;this.reverse?(l=this.to,u=this.from):(l=this.from,u=this.to),this.firstLoop&&(this.onFirstLoop(),this.firstLoop=!1),this.object.currentState=u.id,this.object.dispatchEvent({type:"completeState",state:this.targets.t<.5?l.id:u.id})},this.onFirstLoop=()=>{if(this.useCurrentState){let l,u;this.reverse?(l=this.to,u=this.from):(l=this.from,u=this.to),this.callback=bd(this.object,l.data,u.data,this.sharedAssets,this.allowSlerp)}};let n=this.getState(e);if(!n)throw new Error("Missing property");this.from=n;let o=this.getState(t);if(!o)throw new Error("Missing property");this.to=o,this.useCurrentState=e===void 0||t===void 0,this.callback=bd(this.object,e===void 0?{}:this.from.data,t===void 0?{}:this.to.data,this.sharedAssets,this.allowSlerp),this.core={targets:this.targets,t:1,autoplay:!1,...NG(i),...RG(i),change:this.onChange},this.startOnceDelay=i.delayDirection==="start-once"?i.delay:0}get changeBegan(){return this._changeBegan}get changeCompleted(){return this._changeCompleted}getState(A){var i,r;let e,t;if(typeof A=="string"?(e=A,t=(i=this.object.states)==null?void 0:i[e]):A===null?(e=null,t=this.object.data):A===void 0&&(e=this.object.currentState,t=e?(r=this.object.states)==null?void 0:r[e]:this.object.data),!(e===void 0||t===void 0))return{id:e,data:t}}toggle(A){this._changeBegan=!1,this._changeCompleted=!0,this.targets.t=0;let e;A!==void 0?A?(this.reverse=!1,e=this.to):(this.reverse=!0,e=this.from):this.object.currentState===this.from.id?(this.reverse=!1,e=this.to):(this.reverse=!0,e=this.from),this.callback=bd(this.object,{},e.data,this.sharedAssets,this.allowSlerp)}},Sd=class{constructor(A,e,t,i){var r;if(this.object=e,this.id=i,this.tweens=[],this._finished=!1,A.tweens.length<1)throw new Error("Missing property");try{let s=new zG(e,A.tweens[0].data.state,A.tweens[1].data.state,A.tweens[1].data,t,(r=A.allowSlerp)!=null?r:!1,"0");this.tween=s,this.core=Wy({...s.core}),this.core.finished.then(()=>this._finished=!0),this.startOnceDelay=s.startOnceDelay}catch{throw new Error("Missing property")}}get finished(){return this._finished}get paused(){return this.core.paused}play(){this._finished||(clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>this.core.play(),this.startOnceDelay))}pause(){this.core.pause(),clearTimeout(this.timeoutId),delete this.timeoutId}stop(){this.pause(),this.seek(0),this.core.reset(),this._finished=!1}seek(A){let e=A*this.core.duration;this.core.seek(e)}toggle(A){this.core.pause(),clearTimeout(this.timeoutId),this.tween.toggle(A),this.core=Wy({...this.tween.core}),this.core.finished.then(()=>this._finished=!0),this.tween.changeCompleted?this.timeoutId=window.setTimeout(()=>this.core.play(),this.startOnceDelay):this.core.play()}dispose(){this.pause()}},Ja=class extends Ft{constructor(A,e,t,i){if(super(),this.id=A,this.data=e,this.sharedAssets=i,!e.object)throw new Error("Missing property");let r=t.find(e.object);if(!r)throw new Error("Missing property");if(!r.states)throw new Error("Missing property");this.object=r;try{this.timeline=new Sd(this.data,this.object,this.sharedAssets,"0")}catch{throw new Error("Missing property")}}play(){var A;this.object.currentTransitionAction!==this&&((A=this.object.currentTransitionAction)==null||A.dispose(),this.object.currentTransitionAction=this,this.timeline=new Sd(this.data,this.object,this.sharedAssets,"0"),this.dispatchEvent({type:"reset"})),this.timeline.play()}stop(){this.timeline.stop()}seek(A){this.timeline.seek(A)}toggle(A){var e;this.object.currentTransitionAction!==this&&((e=this.object.currentTransitionAction)==null||e.dispose(),this.object.currentTransitionAction=this,this.timeline=new Sd(this.data,this.object,this.sharedAssets,"0"),this.dispatchEvent({type:"reset"})),this.timeline.toggle(A)}dispose(){this.timeline.dispose()}};function ia(A,e,t,i,r,s){let a={Audio:[],Video:[],Link:[],Reset:[],Transition:[]};return e.forEach(({id:n,data:o})=>{try{o.type==="Audio"?Yn[A.type].includes("Audio")&&a.Audio.push(new Ka(n,o,t,r)):o.type==="Video"?Yn[A.type].includes("Video")&&a.Video.push(new xc(n,o,t)):o.type==="Link"?Yn[A.type].includes("Link")&&a.Link.push(new B5(o)):o.type==="Reset"?Yn[A.type].includes("Reset")&&a.Reset.push(new I5(i.data,i,r,s)):o.type==="Transition"&&Yn[A.type].includes("Transition")&&a.Transition.push(new Ja(n,o,i,r))}catch{}}),a}function ra(A){Object.values(A).forEach(e=>{e.forEach(t=>{(t instanceof Ka||t instanceof xc||t instanceof Ja)&&t.dispose()})})}var Mm=[["start","Start"],["keyDown","KeyDown"],["keyUp","KeyUp"],["mouseDown","MouseDown"],["mouseUp","MouseUp"],["mouseHover","MouseHover"],["collision","Collision"],["lookAt","LookAt"],["follow","Follow"],["scroll","Scroll"]],wS=A=>{var e;return(e=Mm.find(([t,i])=>i===A))==null?void 0:e[0]},Kc=A=>{var e;return(e=Mm.find(([t])=>t===A))==null?void 0:e[1]},FG=(A,e)=>{let t=wS(A);if(t){let i=new CustomEvent(t,{bubbles:!0});return Object.defineProperty(i,"target",{writable:!1,value:e}),i}},UG=class extends ws{constructor(A){super(A),this.objectsPerEvents=new Map,this.splineEvents={},this.onBeginEvent=t=>{var s;if(!t.eventName||!t.target)return;let i=(s=this.splineEvents[wS(t.eventName)])==null?void 0:s[t.target.uuid];if(!i)return;t.eventName==="Scroll"&&t.deltaY!==void 0&&Object.assign(i,{deltaY:t.deltaY});let{domElement:r}=this.eventContext;r.dispatchEvent(i)};let{scene:e}=this.eventContext;e.traverseEntity(t=>{var i,r;if((i=t.data)!=null&&i.events.length){for(let[s,a]of Mm)if(t.data.events.some(n=>n.data.type===a&&!n.data.disabled)){this.objectsPerEvents.has(s)?(r=this.objectsPerEvents.get(s))==null||r.push(t):this.objectsPerEvents.set(s,[t]);let n={id:t.uuid,name:t.name},o=FG(a,n),l=this.splineEvents[s];l?l[t.uuid]=o:this.splineEvents[s]={[t.uuid]:o}}}})}connect(){this.objectsPerEvents.forEach(A=>{A.forEach(e=>{e.addEventListener("beginEvent",this.onBeginEvent)})})}disconnect(){this.objectsPerEvents.forEach(A=>{A.forEach(e=>{e.removeEventListener("beginEvent",this.onBeginEvent)})})}},kG=class{constructor(A,e,t,i,r){if(this.data=A,this.object=e,this.entered=!1,this.useToggle=A.toggle,(A.type==="KeyDown"||A.type==="KeyUp"||A.type==="KeyPress")&&!A.key)throw new Error("Missing property");this.actions=ia(A,A.actions,e,t,i,r)}disconnect(){ra(this.actions)}dispatch(){this.useToggle?this.actions.Transition.forEach(A=>{A.toggle()}):this.data.type==="MousePress"||this.data.type==="KeyPress"?this.entered||(this.entered=!0,this.actions.Transition.forEach(A=>A.toggle(!0))):this.actions.Transition.forEach(A=>{A.play()}),this.actions.Link.forEach(A=>{A.dispatch()}),this.actions.Reset.forEach(A=>{A.dispatch()}),this.actions.Audio.forEach(A=>{A.dispatchBasic()}),this.actions.Video.forEach(A=>{A.dispatchBasic()})}dispatchRelease(){this.entered&&(this.entered=!1,this.actions.Transition.forEach(A=>A.toggle(!1)))}dispatchUserEvent(A){this.actions.Transition.forEach(e=>{e.toggle(!A)}),this.actions.Link.forEach(e=>{e.dispatch()}),this.actions.Reset.forEach(e=>{e.dispatch()}),this.actions.Audio.forEach(e=>{e.dispatchBasic()}),this.actions.Video.forEach(e=>{e.dispatchBasic()})}},GG=class extends ws{constructor(A,e,t){super(A),this.objectsPerTypes={MouseDown:[],MouseUp:[],MousePress:[],KeyDown:[],KeyUp:[],KeyPress:[]},this.eventsPerObjects={MouseDown:{},MouseUp:{},MousePress:{},KeyDown:{},KeyUp:{},KeyPress:{}},this.heldKeys={},this._prevObjects=[],this.onMouseDown=s=>{Ae.length>1||(this.eventContext.updateRaycaster(s),this.handleMouseEvent("MouseDown"))},this.onMouseUp=s=>{Ae.length>1||(this.eventContext.updateRaycaster(s),this.handleMouseEvent("MouseUp"))},this.onMousePressDown=s=>{Ae.length>1||(this.eventContext.updateRaycaster(s),this.handleMousePressEvent())},this.onMousePressRelease=s=>{Ae.length>1||(this.eventContext.updateRaycaster(s),this.handleMousePressEvent(!0))},this.onKeyDown=s=>{this.heldKeys[s.key]||this.handleKeyEvent(s,"KeyDown"),this.heldKeys[s.key]=!0},this.onKeyUp=s=>{this.handleKeyEvent(s,"KeyUp")},this.onKeyPressDown=s=>{this.heldKeys[s.key]||this.handleKeyEvent(s,"KeyPress"),this.heldKeys[s.key]=!0},this.onKeyPressUp=s=>{this.handleKeyEvent(s,"KeyPress",!0)},this.releaseHeldKey=s=>{delete this.heldKeys[s.key]},this._onUserEvent=({eventName:s,target:a,reverse:n})=>{var l,u,h,c;if(!s||!a)return;let o=Kc(s);o&&(o==="MouseDown"||o==="MouseUp"||o==="MousePress"?(a.dispatchEvent({type:"beginEvent",eventName:o}),(u=(l=this.eventsPerObjects[o])==null?void 0:l[a.uuid])==null||u.forEach(d=>{d.dispatchUserEvent(n)})):(o==="KeyDown"||o==="KeyUp"||o==="KeyPress")&&(a.dispatchEvent({type:"beginEvent",eventName:o}),(c=(h=this.eventsPerObjects[o])==null?void 0:h[a.uuid])==null||c.forEach(d=>{d.dispatchUserEvent()})))};let{scene:i,sharedAssets:r}=this.eventContext;i.traverseEntity(s=>{var n,o;if(!((n=s.data)!=null&&n.events.length))return;let a=s.visible?["MouseDown","MouseUp","MousePress","KeyDown","KeyUp","KeyPress"]:["KeyDown","KeyUp","KeyPress"];for(let l of a){let u=this.eventsPerObjects[l];s.data.events.filter(({data:h})=>h.type===l&&h.disabled!==!0).forEach(({data:h})=>{try{let c=new kG(h,s,i,r,{controlsManager:e,eventManager:t});c.actions.Video.length&&(this.hasVideoAction=!0),u[s.uuid]?u[s.uuid].push(c):u[s.uuid]=[c]}catch{}}),(o=u[s.uuid])!=null&&o.length&&this.objectsPerTypes[l].push(s)}})}connect(){var e,t,i,r,s,a;let{domElement:A}=this.eventContext;this.heldKeys={},this.domEventsNeeded.clear(),(e=this.objectsPerTypes.MouseDown)!=null&&e.length&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseDown)),(t=this.objectsPerTypes.MouseUp)!=null&&t.length&&(this.domEventsNeeded.add("pointerup"),A.addEventListener("pointerup",this.onMouseUp)),(i=this.objectsPerTypes.MousePress)!=null&&i.length&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMousePressDown),this.domEventsNeeded.add("pointerup"),A.addEventListener("pointerup",this.onMousePressRelease)),(r=this.objectsPerTypes.KeyDown)!=null&&r.length&&(this.domEventsNeeded.add("keydown"),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.releaseHeldKey)),(s=this.objectsPerTypes.KeyUp)!=null&&s.length&&(this.domEventsNeeded.add("keyup"),document.addEventListener("keyup",this.onKeyUp)),(a=this.objectsPerTypes.KeyPress)!=null&&a.length&&(this.domEventsNeeded.add("keydown"),document.addEventListener("keydown",this.onKeyPressDown),document.addEventListener("keyup",this.releaseHeldKey),this.domEventsNeeded.add("keyup"),document.addEventListener("keyup",this.onKeyPressUp)),Object.entries(this.objectsPerTypes).forEach(([n,o])=>{o.forEach(l=>{l.addEventListener("userEvent",this._onUserEvent)})})}disconnect(){let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),this.heldKeys={},A.removeEventListener("pointerdown",this.onMouseDown),A.removeEventListener("pointerdown",this.onMousePressDown),A.removeEventListener("pointerup",this.onMouseUp),A.removeEventListener("pointerup",this.onMousePressRelease),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("keydown",this.onKeyPressDown),document.removeEventListener("keyup",this.onKeyPressUp),document.removeEventListener("keyup",this.releaseHeldKey),Object.values(this.eventsPerObjects).forEach(e=>{Object.values(e).forEach(t=>{t.forEach(i=>{i.disconnect()})})}),Object.entries(this.objectsPerTypes).forEach(([e,t])=>{t.forEach(i=>{i.removeEventListener("userEvent",this._onUserEvent)})})}handleMouseEvent(A){let{stopRaycast:e,raycaster:t,scene:i}=this.eventContext,r=this.objectsPerTypes[A];if(r.length)if(e){let s=Qp(t,i,r);qp(s).forEach(a=>{this.eventsPerObjects[A][a.uuid]&&this.handleObjectMouseEventDispatch(a,A)})}else r.forEach(s=>{yc(t,s)&&this.handleObjectMouseEventDispatch(s,A)})}handleMousePressEvent(A=!1){let e="MousePress",t=this.objectsPerTypes[e],i=[];if(t.length){if(!A){let{stopRaycast:r,raycaster:s,scene:a}=this.eventContext;if(r){let n=Qp(s,a,t);i=qp(n)}else t.forEach(n=>{yc(s,n)&&i.push(n)})}this._prevObjects.length&&this._prevObjects.forEach(r=>{i.includes(r)||this.handleObjectMouseEventDispatchRelease(r,e)}),i.length&&i.forEach(r=>{this.handleObjectMouseEventDispatch(r,e)}),this._prevObjects=i}}handleObjectMouseEventDispatch(A,e){var t,i;A.dispatchEvent({type:"beginEvent",eventName:e}),(i=(t=this.eventsPerObjects[e])==null?void 0:t[A.uuid])==null||i.forEach(r=>{r.dispatch()})}handleObjectMouseEventDispatchRelease(A,e){var t,i;A.dispatchEvent({type:"beginEvent",eventName:e}),(i=(t=this.eventsPerObjects[e])==null?void 0:t[A.uuid])==null||i.forEach(r=>{r.dispatchRelease()})}handleKeyEvent(A,e,t=!1){this.objectsPerTypes[e].forEach(i=>{let r=this.eventsPerObjects[e][i.uuid];r.some(({data:s})=>"key"in s&&s.key===A.key)&&i.dispatchEvent({type:"beginEvent",eventName:e}),r.forEach(s=>{"key"in s.data&&s.data.key===A.key&&(t?s.dispatchRelease():s.dispatch())})})}},jG=new T,VG=new T,bS=class{constructor(A,e,t,i){this.actionsIn=ia(A,A.inActions,e,t,i),this.actionsOut=ia(A,A.outActions,e,t,i)}disconnect(){ra(this.actionsIn),ra(this.actionsOut)}},HG=class extends bS{constructor(A,e,t,i){super(A,e,t,i),this.data=A,this.object=e,this.stage="out",this.objects=[],this.onUpdateMatrix=()=>{let n=jG.setFromMatrixPosition(this.objects[0].matrixWorld),o=VG.setFromMatrixPosition(this.objects[1].matrixWorld),l=n.distanceTo(o)<=this.distance?"in":"out";if(this.stage!==l){this.stage=l;let u=this.stage==="in"?this.actionsIn:this.actionsOut;u.Audio.forEach(h=>h.dispatchConditional()),u.Video.forEach(h=>h.dispatchConditional()),u.Transition.forEach(h=>h.play())}};let{distance:r,fromObject:s,toObject:a}=A.condition;this.distance=r;for(let n of[s,a]){if(!n)throw new Error("Missing property");let o=t.find(n);if(!o)throw new Error("Missing property");this.objects.push(o)}}connect(){this.objects.forEach(A=>{A.addEventListener("updateMatrix",this.onUpdateMatrix)}),this.onUpdateMatrix()}disconnect(){super.disconnect(),this.stage="out",this.objects.forEach(A=>{A.removeEventListener("updateMatrix",this.onUpdateMatrix)})}},WG=class extends bS{constructor(A,e,t,i){var a;super(A,e,t,i),this.data=A,this.object=e,this.onBegin=({target:n,state:o})=>{this.toState!==o&&(this.actionsOut.Audio.forEach(l=>l.dispatchConditional()),this.actionsOut.Video.forEach(l=>l.dispatchConditional()),this.actionsOut.Transition.forEach(l=>l.play()))},this.onComplete=({target:n,state:o})=>{this.toState===o&&(this.actionsIn.Audio.forEach(l=>l.dispatchConditional()),this.actionsIn.Video.forEach(l=>l.dispatchConditional()),this.actionsIn.Transition.forEach(l=>l.play()))};let{condition:r}=A;if(!r.object)throw new Error("Missing property");let s=t.find(r.object);if(!s)throw new Error("Missing property");if(this.toObject=s,r.state&&!((a=this.toObject.states)!=null&&a[r.state]))throw new Error("Missing property");this.toState=r.state}connect(){(this.actionsOut.Audio.length||this.actionsOut.Video.length||this.actionsOut.Transition.length)&&this.toObject.addEventListener("beginState",this.onBegin),(this.actionsIn.Audio.length||this.actionsIn.Video.length||this.actionsIn.Transition.length)&&this.toObject.addEventListener("completeState",this.onComplete)}disconnect(){super.disconnect(),(this.actionsOut.Audio.length||this.actionsOut.Video.length||this.actionsOut.Transition.length)&&this.toObject.removeEventListener("beginState",this.onBegin),(this.actionsIn.Audio.length||this.actionsIn.Video.length||this.actionsIn.Transition.length)&&this.toObject.removeEventListener("completeState",this.onComplete)}},YG=class extends ws{constructor(A){super(A),this.eventsPerConditions={Comparison:[],Distance:[],State:[]},this.hasVideoAction=!1;let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(i=>{var r;if((r=i.data)!=null&&r.events.length){for(let{data:s}of i.data.events)if(!s.disabled&&s.type==="Conditional")try{let a;s.condition.type==="Comparison"||(s.condition.type==="Distance"?a=new HG(s,i,e,t):s.condition.type==="State"&&(a=new WG(s,i,e,t))),a&&(this.eventsPerConditions[s.condition.type].push(a),(a.actionsIn.Video.length||a.actionsOut.Video.length)&&(this.hasVideoAction=!0))}catch{}}})}connect(){super.connect(),Object.values(this.eventsPerConditions).forEach(A=>A.forEach(e=>e.connect()))}disconnect(){super.disconnect(),Object.values(this.eventsPerConditions).forEach(A=>A.forEach(e=>e.disconnect()))}},Ia=new T,Md=new T,Ed=new T,ch=new T,$y=new hi,Ax=.01,XG={type:"requestRender"},QG=function(){let A=new T,e=new T;return(t,i,r)=>r>0?(A.subVectors(t,i),A.length()<=r?t:e.copy(i).add(A.normalize().multiplyScalar(r))):i}(),ex=function(){let A=new TA;return(e,t)=>{e.position.copy(t),e.parent!==null&&(A.copy(e.parent.matrixWorld).invert(),e.position.applyMatrix4(A)),A.copy(e.hiddenMatrix).invert(),e.position.applyMatrix4(A),e.updateMatrix(),e instanceof Ai&&ls(e.parent)&&e.invalidateDownstreamBooleanData(!0)}}(),qG=class{constructor(A,e,t){var i,r;this.data=A,this.object=e,this.tempPosition=new T,this.started=!1,this.paused=!0,this.snapComplete=!1,this.isReset=!1,this.worldPosition0=new T,this.target=A.target?t.find(A.target):void 0,this.maxDelta=(i=A.maxDelta)!=null?i:0,this.dampingFactor=A.dampingFactor?Math.max(A.dampingFactor,1):1,this.plane=(r=A.plane)!=null?r:"custom",this.snapDampingFactor=8,this.currentDampingFactor=this.snapDampingFactor,this.object.getWorldPosition(this.worldPosition0)}},ZG=class extends ws{constructor(A){super(A),this.events=[],this.onTargetChangeCallbacks=[],this.onMouseMove=t=>{if(!(Ae.length>1)){this.eventContext.updateRaycaster(t);for(let i of this.events)i.target===void 0&&this.updateSingleEvent(i)}},this.onMouseEnter=t=>{for(let i of this.events)i.target===void 0&&(i.tempPosition.copy(i.object.position),i.snapComplete=!1,i.isReset=!1,i.currentDampingFactor=i.snapDampingFactor)},this.onMouseLeave=t=>{var i;for(let r of this.events)r.target===void 0&&(r.tempPosition.copy(r.object.position),r.snapComplete=!1,(i=r.data.resetOnPointerLeave)!=null&&i&&(r.isReset=!0,r.currentDampingFactor=r.snapDampingFactor),this.updateSingleEvent(r))},this.onTargetChange=t=>()=>{this.updateSingleEvent(t)};let{scene:e}=this.eventContext;e.traverseEntity(t=>{var r;let i=(r=t.data)==null?void 0:r.events.find(s=>s.data.type==="Follow"&&!s.data.disabled);i&&this.events.push(new qG(i.data,t,e))})}connect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),Zt&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseMove)),this.domEventsNeeded.add("pointermove"),A.addEventListener("pointermove",this.onMouseMove),A.addEventListener("pointerenter",this.onMouseEnter),A.addEventListener("pointerleave",this.onMouseLeave);for(let e of this.events)if(e.target!==void 0){let t=this.onTargetChange(e);this.onTargetChangeCallbacks.push(t),e.target.addEventListener("requestRender",t)}}disconnect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),Zt&&A.removeEventListener("pointerdown",this.onMouseMove),A.removeEventListener("pointermove",this.onMouseMove),A.removeEventListener("pointerenter",this.onMouseEnter),A.removeEventListener("pointerleave",this.onMouseLeave);let e=0;for(let t of this.events)t.started=!1,t.paused=!0,t.target!==void 0&&t.target.removeEventListener("requestRender",this.onTargetChangeCallbacks[e++])}onAnimationFrameDamping(){for(let A of this.events)A.paused||this.updateSingleEvent(A)}updateSingleEvent(A){var a;let{tempPosition:e,object:t,maxDelta:i,plane:r}=A;if(t.getWorldPosition(Ed),A.isReset)ch.copy(A.worldPosition0);else if(A.target)A.target.getWorldPosition(ch);else{let{camera:n,raycaster:o}=this.eventContext;if(r==="custom"?(n.getWorldDirection(Md),Md.negate(),Ia.copy(Md)):r==="xy"?Ia.set(0,0,1):r==="xz"?Ia.set(0,1,0):r==="yz"&&Ia.set(1,0,0),$y.setFromNormalAndCoplanarPoint(Ia,Ed),!o.ray.intersectPlane($y,ch))return}let s=QG(Ed,ch,i);if(A.currentDampingFactor>1||A.snapComplete===!1){A.started||(A.started=!0,e.copy(s));let n=Ia.subVectors(s,e).divideScalar(A.currentDampingFactor);e.add(n),ex(t,e),A.paused=n.length()<Ax,A.snapComplete=n.length()<Ax*100,A.snapComplete&&(A.currentDampingFactor=A.dampingFactor)}else ex(t,s),A.paused=!0;(a=A.object)==null||a.dispatchEvent({type:"beginEvent",eventName:"Follow"}),t.dispatchEvent(XG)}},ao=new T,uh=new T,Ps=new TA,no=new ue,Ra=new ue,dh=new T,Td=new T,oo=new T,ph=new hi,tx=1e-5,KG={type:"requestRender"},JG={type:"changeRotation"},$G=function(){let A=new TA,e=new T,t=new T,i=new T;return(r,s)=>(s==="x"?(e.set(0,0,1),t.set(0,1,0),i.set(-1,0,0)):s==="y"?(e.set(1,0,0),t.set(0,0,1),i.set(0,-1,0)):(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1)),e.applyMatrix4(r),t.applyMatrix4(r),i.applyMatrix4(r),A.makeBasis(e,t,i))}(),ix=function(){let A=new TA;return function(e,t){e.parent!==null?A.multiplyMatrices(e.parent.matrixWorld,e.hiddenMatrix):A.copy(e.hiddenMatrix),t.premultiply(Zb(A).invert()),e.rotation.setFromRotationMatrix(t),e.updateMatrix(),e instanceof Ai&&ls(e.parent)&&e.invalidateDownstreamBooleanData(!0)}}(),Aj=class{constructor(A,e,t){var i,r,s,a;this.data=A,this.object=e,this.paused=!0,this.snapComplete=!1,this.isReset=!1,this.worldQuaternion0=new ue,this.target=A.target?t.find(A.target):void 0,this.dampingFactor=A.dampingFactor?Math.max(A.dampingFactor,1):1,this.distance=(i=A.distance)!=null?i:0,this.tilt=(r=A.tilt)!=null?r:"up",this.axis=(s=A.axis)!=null?s:"z",this.plane=(a=A.plane)!=null?a:"custom",this.snapDampingFactor=8,this.currentDampingFactor=this.dampingFactor,this.object.getWorldQuaternion(this.worldQuaternion0)}},ej=class extends ws{constructor(A){super(A),this.events=[],this.onTargetChangeCallbacks=[],this.onMouseMove=t=>{if(!(Ae.length>1)){this.eventContext.updateRaycaster(t);for(let i of this.events)i.target===void 0&&this.updateSingleEvent(i)}},this.onMouseEnter=t=>{for(let i of this.events)i.target===void 0&&(i.snapComplete=!1,i.isReset=!1,i.currentDampingFactor=i.snapDampingFactor)},this.onMouseLeave=t=>{var i;for(let r of this.events)r.target===void 0&&(r.snapComplete=!1,(i=r.data.resetOnPointerLeave)!=null&&i&&(r.isReset=!0,r.currentDampingFactor=r.snapDampingFactor),this.updateSingleEvent(r))},this.onTargetChange=t=>()=>{this.updateSingleEvent(t)};let{scene:e}=this.eventContext;e.traverseEntity(t=>{var r;let i=(r=t.data)==null?void 0:r.events.find(s=>s.data.type==="LookAt"&&!s.data.disabled);i&&this.events.push(new Aj(i.data,t,e))})}connect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),Zt&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseMove)),this.domEventsNeeded.add("pointermove"),A.addEventListener("pointermove",this.onMouseMove),A.addEventListener("pointerenter",this.onMouseEnter),A.addEventListener("pointerleave",this.onMouseLeave);for(let e of this.events)if(e.target!==void 0){let t=this.onTargetChange(e);this.onTargetChangeCallbacks.push(t),e.target.addEventListener("requestRender",t)}}disconnect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),Zt&&A.removeEventListener("pointerdown",this.onMouseMove),A.removeEventListener("pointermove",this.onMouseMove),A.removeEventListener("pointerenter",this.onMouseEnter),A.removeEventListener("pointerleave",this.onMouseLeave);let e=0;for(let t of this.events)t.paused=!0,t.target!==void 0&&t.target.removeEventListener("requestRender",this.onTargetChangeCallbacks[e++])}onAnimationFrameDamping(){for(let A of this.events)A.paused||this.updateSingleEvent(A)}updateSingleEvent(A){var l;let{target:e,tilt:t,axis:i,distance:r,plane:s,object:a}=A,{camera:n,raycaster:o}=this.eventContext;if(!A.isReset){if(A.target)A.target.getWorldPosition(Td);else if(a.getWorldPosition(dh),s==="custom"?(n.getWorldDirection(uh),uh.negate(),r>0?ph.set(uh,-r):ph.setFromNormalAndCoplanarPoint(uh,dh)):(s==="xy"?ao.set(0,0,1):s==="xz"?ao.set(0,1,0):s==="yz"&&ao.set(1,0,0),ph.setFromNormalAndCoplanarPoint(ao,dh)),!o.ray.intersectPlane(ph,Td))return}A.isReset||(e?t==="up"?oo.set(0,1,0):t==="target"&&oo.copy(e.up).applyMatrix4(Ps.extractRotation(e.matrixWorld)).normalize():s==="custom"?oo.set(0,1,0):oo.copy(ao)),A.isReset?Ra.copy(A.worldQuaternion0):(Ps.lookAt(Td,dh,oo),Ps.copy($G(Ps,i)),Ra.setFromRotationMatrix(Ps)),A.currentDampingFactor>1||A.snapComplete===!1?(a.updateWorldMatrix(!0,!1),no.setFromRotationMatrix(Zb(a.matrixWorld)),no.slerp(Ra,1/A.currentDampingFactor),ix(a,Ps.makeRotationFromQuaternion(no)),A.paused=8*(1-no.dot(Ra))<tx,A.snapComplete=8*(1-no.dot(Ra))<tx*100,A.snapComplete&&(A.currentDampingFactor=A.dampingFactor)):(ix(a,Ps.makeRotationFromQuaternion(Ra)),A.paused=!0),(l=A.object)==null||l.dispatchEvent({type:"beginEvent",eventName:"LookAt"}),a.dispatchEvent(KG),a.dispatchEvent(JG)}},tj=class{constructor(A,e,t,i){this.data=A,this.object=e,this.entered=!1,this.actions=ia(A,A.actions,e,t,i)}disconnect(){ra(this.actions)}dispatchEnter(){this.entered||(this.entered=!0,this.actions.Transition.forEach(A=>A.toggle(!0)))}dispatchLeave(){this.entered&&(this.entered=!1,this.actions.Transition.forEach(A=>A.toggle(!1)))}dispatchUserEvent(A){this.actions.Transition.forEach(e=>e.toggle(!A))}},ij=class extends ws{constructor(A){super(A),this.eventsPerObjects={},this.objects=[],this._prevObjects=[],this.onMouseDown=i=>{Ae.length>1||(this.eventContext.updateRaycaster(i),this.handleMouseHoverEvent())},this.onMouseUp=i=>{Ae.length>1||this.handleMouseHoverEvent(!0)},this.onMouseMove=i=>{Ae.length>1||(this.eventContext.updateRaycaster(i),this.handleMouseHoverEvent())},this.onUserEvent=({eventName:i,target:r,reverse:s})=>{var n;if(!i||!r)return;let a=Kc(i);a&&a==="MouseHover"&&(r.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),(n=this.eventsPerObjects[r.uuid])==null||n.forEach(o=>o.dispatchUserEvent(s)))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(i=>{var r,s;if(!(!i.visible||!((r=i.data)!=null&&r.events.length))){for(let{data:a}of i.data.events)if(!a.disabled&&a.type==="MouseHover")try{let n=new tj(a,i,e,t);this.eventsPerObjects[i.uuid]?this.eventsPerObjects[i.uuid].push(n):this.eventsPerObjects[i.uuid]=[n]}catch{}(s=this.eventsPerObjects[i.uuid])!=null&&s.length&&this.objects.push(i)}})}connect(){if(!this.objects.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),Zt&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseDown),this.domEventsNeeded.add("pointerup"),A.addEventListener("pointerup",this.onMouseUp)),this.domEventsNeeded.add("pointermove"),A.addEventListener("pointermove",this.onMouseMove),this.objects.forEach(e=>{e.addEventListener("userEvent",this.onUserEvent)})}disconnect(){if(!this.objects.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),Zt&&(A.removeEventListener("pointerdown",this.onMouseDown),A.removeEventListener("pointerup",this.onMouseUp)),A.removeEventListener("pointermove",this.onMouseMove),Object.values(this.eventsPerObjects).forEach(e=>{e.forEach(t=>{t.disconnect()})}),this.objects.forEach(e=>{e.removeEventListener("userEvent",this.onUserEvent)})}handleMouseHoverEvent(A=!1){let e=[];if(!A){let{stopRaycast:t,raycaster:i,scene:r}=this.eventContext;if(t){let s=Qp(i,r,this.objects);e=qp(s)}else this.objects.forEach(s=>{yc(i,s)&&e.push(s)})}this._prevObjects.length&&this._prevObjects.forEach(t=>{var i;e.includes(t)||(t.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),(i=this.eventsPerObjects[t.uuid])==null||i.forEach(r=>r.dispatchLeave()))}),e.length&&e.forEach(t=>{var i;t.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),(i=this.eventsPerObjects[t.uuid])==null||i.forEach(r=>r.dispatchEnter())}),this._prevObjects=e}},rj=class{constructor(A,e,t,i){this.data=A,this.object=e,this.scrollCounter=0,this.actions=ia(A,A.actions,e,t,i)}connect(){this.scrollCounter=0}disconnect(){ra(this.actions)}dispatch(A){let e=A>0?1:-1;this.scrollCounter+=e,this.scrollCounter=Math.min(Math.max(this.scrollCounter,0),this.data.steps);let t=this.scrollCounter/this.data.steps;this.actions.Transition.forEach(i=>i.seek(t))}dispatchUserEvent(A){this.actions.Transition.forEach(e=>{e.toggle(!A)})}},sj=class extends ws{constructor(A){super(A),this.eventsPerObject=new Map,this.onWheel=i=>{[...this.eventsPerObject.entries()].forEach(([r,s])=>{r.dispatchEvent({type:"beginEvent",eventName:"Scroll",deltaY:i.deltaY}),s.forEach(a=>a.dispatch(i.deltaY))})},this.onUserEvent=({eventName:i,target:r,reverse:s})=>{var n;if(!i||!r)return;let a=Kc(i);a&&a==="Scroll"&&(r.dispatchEvent({type:"beginEvent",eventName:"Scroll"}),(n=this.eventsPerObject.get(r))==null||n.forEach(o=>{o.dispatchUserEvent(s)}))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(i=>{var r,s;if((r=i.data)!=null&&r.events.length)for(let{data:a}of i.data.events){if(a.disabled||a.type!=="Scroll")continue;let n=new rj(a,i,e,t);this.eventsPerObject.has(i)?(s=this.eventsPerObject.get(i))==null||s.push(n):this.eventsPerObject.set(i,[n])}})}connect(){[...this.eventsPerObject.entries()].forEach(([A,e])=>{e.forEach(t=>t.connect()),A.addEventListener("userEvent",this.onUserEvent)}),[...this.eventsPerObject.values()].some(A=>A.length)&&(this.domEventsNeeded.add("wheel"),window.addEventListener("wheel",this.onWheel))}disconnect(){window.removeEventListener("wheel",this.onWheel),this.domEventsNeeded.clear(),[...this.eventsPerObject.entries()].forEach(([A,e])=>{e.forEach(t=>t.disconnect()),A.removeEventListener("userEvent",this.onUserEvent)})}},aj=class{constructor(A,e,t,i){this.data=A,this.object=e,this.actions=ia(A,A.actions,e,t,i)}disconnect(){ra(this.actions)}dispatch(){this.actions.Transition.forEach(A=>{A.play()})}dispatchAfter(A){this.actions.Audio.forEach(e=>{var t;((t=e.interaction.data.triggerAfter)!=null?t:"any")===A&&(e.interaction instanceof Za?e.interaction.audioPlayer.play():e.interaction instanceof Zp&&e.interaction.dispatch())}),this.actions.Video.forEach(e=>{var i;let t=(i=e.interaction.data.triggerAfter)!=null?i:"autoplay";t===A&&(e.interaction instanceof _o?e.interaction.play(t==="autoplay"):e.interaction instanceof Kp&&e.interaction.dispatch())})}dispatchUserEvent(A){this.actions.Transition.forEach(e=>{e.toggle(!A)}),this.actions.Audio.forEach(e=>{e.interaction instanceof Za?e.interaction.audioPlayer.play():e.interaction instanceof Zp&&e.interaction.dispatch()}),this.actions.Video.forEach(e=>{e.interaction instanceof _o?e.interaction.play():e.interaction instanceof Kp&&e.interaction.dispatch()})}},nj=class extends ws{constructor(A){super(A),this.eventsPerObject=new Map,this.eventsAfterPerObject=new Map,this.onMouseDown=()=>{[...this.eventsAfterPerObject.entries()].forEach(([i,r])=>{i.dispatchEvent({type:"beginEvent",eventName:"Start"}),r.forEach(s=>{s.dispatchAfter("mouseDown")})})},this.onKeyDown=()=>{[...this.eventsAfterPerObject.entries()].forEach(([i,r])=>{i.dispatchEvent({type:"beginEvent",eventName:"Start"}),r.forEach(s=>{s.dispatchAfter("keyDown")})})},this.onAny=()=>{let{domElement:i,isExport:r}=this.eventContext;(r?document:i).removeEventListener("pointerdown",this.onAny),document.removeEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([s,a])=>{s.dispatchEvent({type:"beginEvent",eventName:"Start"}),a.forEach(n=>{n.dispatchAfter("any")})})},this.onPlay=()=>{[...this.eventsAfterPerObject.entries()].forEach(([i,r])=>{i.dispatchEvent({type:"beginEvent",eventName:"Start"}),r.forEach(s=>{s.dispatchAfter("autoplay")})})},this.onUserEvent=({eventName:i,target:r,reverse:s})=>{var n,o;if(!i||!r)return;let a=Kc(i);a&&a==="Start"&&(r.dispatchEvent({type:"beginEvent",eventName:"Start"}),(n=this.eventsPerObject.get(r))==null||n.forEach(l=>{l.dispatchUserEvent(s)}),(o=this.eventsAfterPerObject.get(r))==null||o.forEach(l=>{l.dispatchUserEvent(s)}))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(i=>{var r,s,a,n;if((r=i.data)!=null&&r.events.length)for(let{data:o}of i.data.events){if(o.disabled||o.type!=="Start")continue;let l=new aj(o,i,e,t);l.actions.Transition.length&&(this.eventsPerObject.has(i)?(s=this.eventsPerObject.get(i))==null||s.push(l):this.eventsPerObject.set(i,[l])),l.actions.Audio.length&&(this.eventsAfterPerObject.has(i)?(a=this.eventsAfterPerObject.get(i))==null||a.push(l):this.eventsAfterPerObject.set(i,[l])),l.actions.Video.length&&(this.hasVideoAction=!0,this.eventsAfterPerObject.has(i)?(n=this.eventsAfterPerObject.get(i))==null||n.push(l):this.eventsAfterPerObject.set(i,[l]))}})}connect(){if([...this.eventsAfterPerObject.values()].some(A=>A.length)){let{domElement:A,isExport:e}=this.eventContext,t=e?document:A;t.addEventListener("pointerdown",this.onMouseDown,{once:!0}),document.addEventListener("keydown",this.onKeyDown,{once:!0}),t.addEventListener("pointerdown",this.onAny),document.addEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([i,r])=>{i.addEventListener("userEvent",this.onUserEvent)}),this.onPlay()}[...this.eventsPerObject.entries()].forEach(([A,e])=>{A.dispatchEvent({type:"beginEvent",eventName:"Start"}),e.forEach(t=>t.dispatch()),A.addEventListener("userEvent",this.onUserEvent)})}disconnect(){if([...this.eventsAfterPerObject.values()].some(A=>A.length)){let{domElement:A,isExport:e}=this.eventContext,t=e?document:A;t.removeEventListener("pointerdown",this.onMouseDown),document.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("pointerdown",this.onAny),document.removeEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([i,r])=>{i.removeEventListener("userEvent",this.onUserEvent),r.forEach(s=>s.disconnect())})}[...this.eventsPerObject.entries()].forEach(([A,e])=>{A.removeEventListener("userEvent",this.onUserEvent),e.forEach(t=>t.disconnect())})}},oj=class{constructor(A,e,t,i){this.data=A,this.object=e,this.disabled=!0,this.actions=ia(A,A.actions,e,t,i),this.target=A.target,this.useToggle=A.toggle}disconnect(){ra(this.actions)}dispatch(){this.disabled||(this.object.dispatchEvent({type:"beginEvent",eventName:"Collision"}),this.useToggle?this.actions.Transition.forEach(A=>{A.toggle()}):this.actions.Transition.forEach(A=>{A.play()}),this.actions.Link.forEach(A=>{A.dispatch()}),this.actions.Audio.forEach(A=>{A.dispatchBasic()}),this.actions.Video.forEach(A=>{A.dispatchBasic()}))}},ze;ez.then(A=>ze=A);new TA;new T(1,1,1);var Et=new T,Qr=new ue,Ls=new T,Cd=new mt(0,0,0,"YXZ"),lj={type:"updateMatrix"},SS={type:"beginEvent",eventName:"Collision"};function hj(A){if(A.scene.environment.usePhysics)return!0;let e=!1;return A.scene.objects.traverse((t,i)=>{for(let r of i.events)if(r.data.disabled!==!0&&r.data.type==="GameControl"&&r.data.collisionEnabled){e=!0;break}}),e}var rx=A=>A.states.some(e=>e.data.position!==void 0||e.data.rotation!==void 0||e.data.hiddenMatrix!==void 0||e.data.cloner!==void 0),sx=A=>A.events.find(e=>e.data.disabled!==!0&&e.data.type==="Follow"),cj=class{constructor(A,e,t,i,r,s=!1){var p,g,v,x;this.scene=e,this.sharedAssets=r,this.isExport=s,this.orbitControlsNeedsUpdate=!0,this.gameControls=[],this.gameControlStates=[],this.joysticks=[],this.joystickToGameControls=[],this.sharedGameControlGlobals={entitiesWithTransformAnim:[],eventsPerObjects:{},colliderToEntity:{},gamePads:[]},this.needsCollisionDetection=!1,this.initializationCounter=-1,this.rigidBodyToMesh=new Map,this.nActiveRigidBodies=0,this.collisionEvents=[],this.processRigidBody=y=>{if(y.bodyType()!==ze.RigidBodyType.Dynamic)return;y.isSleeping()||this.nActiveRigidBodies++;let[S,w,M]=this.rigidBodyToMesh.get(y.handle);if(Et.copy(y.translation()).multiplyScalar(this.pixelsPerMeter),Qr.copy(y.rotation()),S.matrixWorld.compose(Et,Qr,w),S.hasNonUniformScale&&S.matrixWorld.multiply(S.shearScale),S.dispatchEvent(lj),M){let b=S.cloner;if(b&&b.objectForSample===void 0){b.matrixWorld.copy(S.matrixWorld);for(let E of b.children)E.updateMatrixWorld(!0)}for(let E of S.children)E.updateMatrixWorld(!0)}},this.handleCollisionEvents=(y,S,w)=>{if(w!==!1)if(this.gameControls.some(M=>M.object===this.sharedGameControlGlobals.colliderToEntity[y])){let M=this.sharedGameControlGlobals.colliderToEntity[S],b=this.sharedGameControlGlobals.eventsPerObjects[M.uuid];if(b===void 0)return;for(let E of b)E.data.target==="character"&&this.dispatchCollisionEvent(E,M)}else if(this.gameControls.some(M=>M.object===this.sharedGameControlGlobals.colliderToEntity[S])){let M=this.sharedGameControlGlobals.colliderToEntity[y],b=this.sharedGameControlGlobals.eventsPerObjects[M.uuid];if(b===void 0)return;for(let E of b)E.data.target==="character"&&this.dispatchCollisionEvent(E,M)}else{let M=this.sharedGameControlGlobals.colliderToEntity[y],b=this.sharedGameControlGlobals.eventsPerObjects[M.uuid];if(b!==void 0)for(let D of b)D.data.target==="scene"&&this.dispatchCollisionEvent(D,M);let E=this.sharedGameControlGlobals.colliderToEntity[S],C=this.sharedGameControlGlobals.eventsPerObjects[E==null?void 0:E.uuid];if(C!==void 0)for(let D of C)D.data.target==="scene"&&this.dispatchCollisionEvent(D,E)}},this.onBeginState=()=>{this.orbitControls&&(this.orbitControls.enabled=!1,this.orbitControlsNeedsUpdate=!1)},this.onCompleteState=({target:y})=>{this.orbitControls&&(this.orbitControls.enabled=!0,this.orbitControls.resetTo(y.getTarget(Et),y.position,y.zoom,y.isUpVectorFlipped),y.currentState=null,y.currentTransitionAction=null,this.orbitControlsNeedsUpdate=!0)},this.domElement=t.domElement;let a;A.scene.publish.playCamera===null?a=Xc.PERSONAL_CAMERA_ID:a=A.scene.publish.playCamera;let n=this.scene.find(a),o=!1,l,u=5,h=8,c=9,d="drag";if(this.usePhysics=(p=A.scene.environment.usePhysics)!=null?p:Ht.defaultData.usePhysics,this.pixelsPerMeter=(g=A.scene.environment.pixelsPerMeter)!=null?g:Ht.defaultData.pixelsPerMeter,(v=A.scene.objects.data(A.scene.publish.gameControlObject))==null||v.events.forEach(y=>{y.data.disabled!==!0&&y.data.type==="GameControl"&&(l=y.data.keyAssignments,u=y.data.joystickPosLoc,h=y.data.joystickRotLoc,c=y.data.jumpTouchButtonLoc,d=y.data.rotByTouch)}),this.scene.traverseEntity(y=>{y.dataPatched.events.forEach(S=>{var M,b;if(S.data.disabled||S.data.type!=="GameControl")return;let w=y;for(;((M=w=w.parent)==null?void 0:M.parent)!==null;)if((b=w.dataPatched.physics)!=null&&b.fusedBody)return;S.data.collisionEnabled&&(this.needsCollisionDetection=!0),this.gameControlStates.push([y,S.data])})}),this.usePhysics&&(this.gameControlStates.length===0||this.needsCollisionDetection)&&this.initPhysics((x=A.scene.environment.gravity)!=null?x:Ht.defaultData.gravity),this.gameControlStates.forEach(([y,S])=>{o=o||S.camera===n.uuid||y.uuid===n.uuid;let w=new MS(y,t.domElement,{...S,keyAssignments:l},A.scene.environment,this.sharedGameControlGlobals,y.uuid!==n.uuid&&S.camera===n.uuid,n,this.scene,r);w.addEventListener("change",i),w.addEventListener("end",i),w.addEventListener("start",i),this.gameControls.push(w),Zt&&S.touchControl&&(this.joystickToGameControls[u]!==void 0?this.joystickToGameControls[u].push([w,"pos"]):this.joystickToGameControls[u]=[[w,"pos"]],S.moveMode==="walk"&&(this.joystickToGameControls[c]!==void 0?this.joystickToGameControls[c].push([w,"jmp"]):this.joystickToGameControls[c]=[[w,"jmp"]]),d==="joystick"&&(this.joystickToGameControls[h]!==void 0?this.joystickToGameControls[h].push([w,"rot"]):this.joystickToGameControls[h]=[[w,"rot"]]))}),o===!1){let{enableRotate:y,enablePan:S,enableZoom:w,autoRotate:M,hoverRotatePanMode:b}=A.scene.publish.orbitControls;if(y||S||w||M||b!==0){this.orbitControls=new ES(n,t.domElement,this.isExport),this.orbitControls.addEventListener("change",i),this.orbitControls.addEventListener("end",i),this.orbitControls.addEventListener("start",i),this.orbitControls.fromJSON(A.scene.publish.orbitControls),this.orbitControls.useKeyEvents=!1,this.orbitControls.connect(),this.orbitControls.update();let E=this.orbitControls.object;E.addEventListener("beginState",this.onBeginState),E.addEventListener("completeState",this.onCompleteState)}}let f=t.domElement.width/t.getPixelRatio(),m=t.domElement.height/t.getPixelRatio();this.joystickToGameControls.forEach((y,S)=>{var X;let w=document.body.appendChild(document.createElement("div")),[M,b,E]=((X=A.scene.publish.joystickSizeAndXYOffset)!=null?X:yn.defaultData.joystickSizeAndXYOffset)[S],C=(f-5*M)/4+M,D={},P=y.some(U=>U[1]==="jmp"),z=P?0:M;S<10?(S<5?D.top=z/2:D.bottom=z/2,D.left=z/2+S%5*C):S===10?(D.left=z/2,D.top=m/2):(D.right=z/2,D.top=m/2),D.top?D.top-=b[1]:D.bottom+=b[1],D.left?D.left+=b[0]:D.right-=b[0];for(let U in D)D[U]+="px";if(P){let U=w.appendChild(document.createElement("div"));Object.assign(U.style,D,{position:"absolute",width:M+"px",height:M+"px",backgroundColor:`rgba(255,255,255,${E==="show"?.4:0})`,zIndex:"9999",borderRadius:M+"px",border:E==="show"?"solid 2px rgba(0, 0, 0, .1)":"none",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none"});let _=M/16*16*.4;E==="show"&&(U.innerHTML=`
						<svg width="${_}" height="${M*.4}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10L8 4L14 10" stroke="black" stroke-opacity="40%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					`),U.addEventListener("pointerdown",()=>{y.forEach(V=>{V[0].movementState.jump=1}),i()}),U.addEventListener("touchend",V=>V.preventDefault()),this.joysticks[S]=[void 0,w];return}let O={zone:w,mode:"static",position:D,size:M};E==="hide"&&(O.restOpacity=0);let G=y5.create(O);G.on("move",(U,_)=>{y.forEach(V=>{let F=V[0];V[1]==="pos"?_.force<.2?F.moveForce=0:(F.movementState.movePosZ=Math.sin(-_.angle.radian),F.movementState.movePosX=Math.cos(-_.angle.radian),_.force<.3?F.moveForce=(_.force-.2)/.1:F.moveForce=1):_.force<.2?F.rotForce=0:(F.movementState.rotPosX=_.vector.y,F.movementState.rotPosY=-_.vector.x,_.force<.3?F.rotForce=(_.force-.2)/.1:F.rotForce=1)}),i()}),G.on("end",(U,_)=>{y.forEach(V=>{let F=V[0];V[1]==="pos"?(F.movementState.movePosZ=0,F.movementState.movePosX=0,F.moveForce=1):(F.movementState.rotPosX=0,F.movementState.rotPosY=0,F.rotForce=1)})}),this.joysticks[S]=[G,w]}),this.usePhysics===!1&&this.needsCollisionDetection&&this.initBVH(),this.initializationCounter++,window.setTimeout(()=>this.collisionEvents.forEach(y=>y.disabled=!1),80)}attachVRControllers(A){A.forEach(e=>{e.addEventListener("connected",t=>{"gamepad"in t.data&&"axes"in t.data.gamepad&&this.sharedGameControlGlobals.gamePads.push(t.data.gamepad)})})}initBVH(){let A=[];if(this.scene.traverseObject(e=>{let t;if(e instanceof gc)return;e instanceof Vs?t=e.object:t=e;let i=t.dataPatched;if(!i.visible)return!0;let r=e.geometry;if(rx(i)||sx(i)){e.updateMatrixWorldSVD();let s=[];if((r==null?void 0:r.getAttribute("position"))!==void 0&&s.push(Ba(r,e.shearScale)),e.traverseObject(this.gatherChildrenGeom(e,s)),e.children.forEach(a=>a.updateMatrixWorld(!0)),s.length>0){let a=Ya(s,!1);e.boundsTree=new ct(a),this.sharedGameControlGlobals.entitiesWithTransformAnim.push(e)}return!0}else r&&A.push(Ba(r,e.matrixWorld))}),A.length>0){let e=Ya(A,!1);this.sharedGameControlGlobals.staticMeshBVH=new ct(e)}}addCollider(A,e,t,i,r,s=!0){var o,l;if((i==null?void 0:i.getAttribute("position").count)===0||((o=i==null?void 0:i.getIndex())==null?void 0:o.count)===0)return;let a;r!==void 0?r.collider.type==="sphere"?a=ze.ColliderDesc.ball(r.collider.radius/this.pixelsPerMeter):r.collider.type==="capsule"?a=ze.ColliderDesc.capsule((r.collider.height/2-r.collider.radius)/this.pixelsPerMeter,r.collider.radius/this.pixelsPerMeter):a=ze.ColliderDesc.cuboid(r.collider.width/this.pixelsPerMeter/2,r.collider.height/this.pixelsPerMeter/2,r.collider.depth/this.pixelsPerMeter/2):i&&(t.colliderType==="trimesh"?a=ze.ColliderDesc.trimesh(i.getAttribute("position").array,i.getIndex().array):a=ze.ColliderDesc.convexMesh(i.getAttribute("position").array,s?i.getIndex().array:void 0)),a.setFrictionCombineRule(ze.CoefficientCombineRule.Average).setRestitutionCombineRule(ze.CoefficientCombineRule.Average).setDensity(t.density).setFriction(t.friction).setRestitution(t.restitution);let n=this.sharedGameControlGlobals.rapierWorld.createCollider(a,e);if(this.sharedGameControlGlobals.colliderToEntity[n.handle]=A,r!==void 0){Et.fromArray(r.collider.position).multiply(Ls.setFromMatrixScale(A.matrixWorld)).divideScalar(this.pixelsPerMeter),n.setTranslationWrtParent(Et);let u=new ue().setFromEuler(new mt().setFromVector3(new T().fromArray(r.collider.rotation)));n.setRotationWrtParent(u),n.setActiveEvents(ze.ActiveEvents.COLLISION_EVENTS)}else(l=this.sharedGameControlGlobals.eventsPerObjects[A.uuid])!=null&&l.some(u=>u.target==="scene")&&n.setActiveEvents(ze.ActiveEvents.COLLISION_EVENTS)}gatherChildrenGeom(A,e){return(t,i)=>{if(i===0)return;i===1?A.hasNonUniformScale?t.matrixWorld.multiplyMatrices(A.shearScale,t.hiddenMatrix):t.matrixWorld.copy(A.hiddenMatrix):t.matrixWorld.multiplyMatrices(t.parent.matrixWorld,t.hiddenMatrix),t.matrixWorld.multiply(t.matrix);let r=t.geometry;(r==null?void 0:r.getAttribute("position"))!==void 0&&e.push(Ba(r,t.matrixWorld))}}initPhysics(A){this.sharedGameControlGlobals.rapierWorld=new ze.World(new ze.Vector3(0,A!=null?A:-10,0)),this.events=new ze.EventQueue(!0);let e=[];if(this.scene.traverseObject(a=>{var f;let n;if(a instanceof gc)if(a.objectForSample){if(a.objectForSample.dataPatched.physics.fusedBody)return;n=a.object}else return a.object.dataPatched.physics.fusedBody===!0&&a.object.dataPatched.physics.rigidBody==="dynamic"?!0:void 0;else a instanceof Vs?n=a.object:n=a;let o=n.dataPatched;if(!o.physics||!o.visible)return!0;a.updateMatrixWorldSVD();let l=rx(o),u=sx(o),h,c=!1;for(let m of o.events)if(m.data.disabled!==!0){if(m.data.type==="GameControl")h=m.data;else if(m.data.type==="Collision"){c=!0;let p=new oj(m.data,n,this.scene,this.sharedAssets);this.collisionEvents.push(p),this.sharedGameControlGlobals.eventsPerObjects[n.uuid]?this.sharedGameControlGlobals.eventsPerObjects[n.uuid].push(p):this.sharedGameControlGlobals.eventsPerObjects[n.uuid]=[p]}}o.physics.rigidBody==="dynamic"&&o.physics.fusedBody===!1&&(a.matrixWorldFusedFalse=a.matrixWorld.clone());let d=a.geometry;if(o.physics.rigidBody==="dynamic"||l||u||c||h!==void 0){let m=[];if((d==null?void 0:d.getAttribute("position"))!==void 0&&m.push(Ba(d,a.shearScale)),o.physics.fusedBody){let p=this.gatherChildrenGeom(a,m);a.traverseObject(p),a.children.forEach(v=>v.updateMatrixWorld(!0));let g=a.cloner;g&&g.objectForSample===void 0&&o.physics.rigidBody==="dynamic"&&(g.traverseObject(p),g.children.forEach(v=>v.updateMatrixWorld(!0)))}if(m.length>0||h!==void 0){let p;h!==void 0?p=ze.RigidBodyDesc.kinematicPositionBased():o.physics.rigidBody==="dynamic"?(p=ze.RigidBodyDesc.dynamic(),p.setLinearDamping(o.physics.damping).setAdditionalMass(1e-9).setGravityScale(o.physics.gravityScale).enabledRotations(...o.physics.enabledRotation).enabledTranslations(...o.physics.enabledTranslation)):l||u?(p=ze.RigidBodyDesc.kinematicPositionBased(),this.sharedGameControlGlobals.entitiesWithTransformAnim.push(a)):p=ze.RigidBodyDesc.fixed();let g;g=m.length>0?Ya(m):void 0,(a.hasNonUniformScale?a.matrixWorldRigid:a.matrixWorld).decompose(Et,Qr,Ls),a.position0=Et.clone().divideScalar(this.pixelsPerMeter),a.rotation0=Qr.clone(),Et.divideScalar(this.pixelsPerMeter),p.setTranslation(Et.x,Et.y,Et.z).setRotation(Qr),g==null||g.scale(Ls.x/this.pixelsPerMeter,Ls.y/this.pixelsPerMeter,Ls.z/this.pixelsPerMeter);let v=this.sharedGameControlGlobals.rapierWorld.createRigidBody(p);h===void 0&&o.physics.rigidBody==="dynamic"&&this.rigidBodyToMesh.set(v.handle,[a,Ls.clone(),o.physics.fusedBody]),a.rigidBody=v;let x=!(o.geometry===void 0||o.geometry.type==="SubdivGeometry"||o.geometry.type==="NonParametricGeometry"||o.geometry.type==="BooleanGeometry"||o.geometry.type==="VectorGeometry"||o.geometry.type==="StarGeometry"||o.geometry.type==="RectangleGeometry"||o.geometry.type==="EllipseGeometry"||o.geometry.type==="TriangleGeometry"||o.geometry.type==="TorusGeometry"||o.geometry.type==="HelixGeometry");try{this.addCollider(n,v,o.physics,g,h,x)}catch{this.addCollider(n,v,o.physics,g,h,!1)}}}else d&&e.push(Ba(d,a.matrixWorld)),o.physics.fusedBody&&a.traverse(m=>{!d||m===a||e.push(Ba(d,m.matrixWorld))});if(((f=o.physics)==null?void 0:f.fusedBody)===!0||h)return!0}),e.length===0)return;let t=Ya(e);t.scale(1/this.pixelsPerMeter,1/this.pixelsPerMeter,1/this.pixelsPerMeter);let i=ze.RigidBodyDesc.fixed(),r=this.sharedGameControlGlobals.rapierWorld.createRigidBody(i),s=ze.ColliderDesc.trimesh(t.getAttribute("position").array,t.getIndex().array).setFrictionCombineRule(ze.CoefficientCombineRule.Multiply).setRestitutionCombineRule(ze.CoefficientCombineRule.Multiply).setFriction(1).setRestitution(1);this.sharedGameControlGlobals.rapierWorld.createCollider(s,r)}updatePositions(){return this.nActiveRigidBodies=0,this.sharedGameControlGlobals.rapierWorld.forEachRigidBody(this.processRigidBody),this.nActiveRigidBodies>0}dispose(){var A;if(this.scene.traverse(e=>{let t=e;t.matrixWorldFusedFalse&&(t.matrixWorldFusedFalse=void 0),t.rigidBody&&(t.rigidBody=void 0),t.position0&&(t.position0=void 0),t.rotation0&&(t.rotation0=void 0)}),(A=this.sharedGameControlGlobals.rapierWorld)==null||A.free(),this.sharedGameControlGlobals.staticMeshBVH=void 0,this.sharedGameControlGlobals.entitiesWithTransformAnim=[],this.gameControls.forEach(e=>{e.reset(),e.dispose()}),this.gameControls=[],this.joysticks.forEach(([e,t])=>{e==null||e.destroy(),t.remove()}),this.joystickToGameControls=[],this.joysticks=[],this.orbitControls){let e=this.orbitControls.object;e.removeEventListener("beginState",this.onBeginState),e.removeEventListener("completeState",this.onCompleteState),this.orbitControls.dispose(),this.orbitControls=void 0}for(let e of Object.values(this.sharedGameControlGlobals.eventsPerObjects))e.forEach(t=>t.disconnect());this.sharedGameControlGlobals.eventsPerObjects={},this.scene.updateMatrixWorld(!0)}update(A,e,t){var r;let i=!0;if(this.orbitControls!==void 0&&this.orbitControlsNeedsUpdate&&(i=!this.orbitControls.update()),this.initializationCounter>=0&&this.initializationCounter<2)this.initializationCounter++,i=!1;else if(this.initializationCounter===2)for(let s of this.gameControls)i=!s.update(A,e,t)&&i;if(this.usePhysics&&(this.gameControls.length===0||this.needsCollisionDetection)){for(let s of this.sharedGameControlGlobals.entitiesWithTransformAnim){(s.hasNonUniformScale?s.matrixWorldRigid:s.matrixWorld).decompose(Et,Qr,Ls),Cd.setFromQuaternion(Qr);let a=s;a.prevR===void 0?(a.prevR=Cd.clone(),a.prevT=Et.clone()):(a.prevR.copy(Cd),a.prevT.copy(Et)),s.rigidBody.setNextKinematicTranslation(Et.divideScalar(this.pixelsPerMeter)),s.rigidBody.setNextKinematicRotation(Qr)}this.sharedGameControlGlobals.rapierWorld.step(this.events),(r=this.events)==null||r.drainCollisionEvents(this.handleCollisionEvents),i=!this.updatePositions()&&i}return i}dispatchCollisionEvent(A,e){e.dispatchEvent(SS),A.dispatch()}},Dd={type:"change"},uj={type:"lock"},dj={type:"unlock"};new T;var ax=new T,nx=new T,pj=new T,Tt=new T,jt=new T,qr=new T,Pd=new TA,ox=new TA,fj=new TA;new TA;var Ti=new ue,Sr=new ue,Xi=new mt(0,0,0,"YXZ"),mj=new T(1,0,0),Ci=new T(0,1,0),gj=new T(0,0,1),lx=new T(1,1,1),vj=1,yj=.025,xj=16e-6,wj=12,bj=20,dt=new pi,si=new qe,Sj={type:"requestRender"},hx=Math.PI/6,Af=class extends Ft{constructor(A,e,t,i,r,s,a,n,o){var f,m,p,g,v,x,y,S,w,M,b,E,C,D,P,z,O,G,X,U,_,V,F;super(),this.object=A,this.domElement=e,this.sharedGameControlGlobals=r,this.cameraFollow=s,this.camera=a,this.scene=n,this.sharedAssets=o,this.enableDamping=!0,this.position0=new T,this.rotation0=new mt(0,0,0,"XYZ"),this.scale0=new T,this.hiddenMatrix0=new TA,this.target0=new T,this.zoom0=1,this.rotForce=1,this.moveForce=1,this.euler0=new mt(0,0,0,"YXZ"),this.position0Cam=new T,this.quat0Cam=new ue,this.scale0Cam=new T,this.hiddenMatrix0Cam=new TA,this.threshEndTranslate=.01,this.threshEndRotate=1e-8,this.threshEndRotVel=.005,this.collider={type:"capsule",radius:40,segment:new pi(new T(0,-40,0),new T(0,40,0)),matrix:new TA,position:new T,rotation:new ue},this.euler=new mt(0,0,0,"YXZ"),this.eulerDelta=new T,this.lastPosition=new T,this.lastCameraQuaternion=new ue,this.lastCameraPosition=new T,this.PI_2=Math.PI/2,this.prevMouse=new H,this.velocityTarget=new T,this.velocity=new T,this.directionXZ=new T,this.rotVelocityStick=new T,this.rotVelocityTarget=new T,this.rotVelocity=new T,this.rotDirection=new T,this.nonColliderRotOffset=new TA,this.nonColliderPosOffset=new TA,this.firstPointerId=-1,this.rot=new T,this.movementState={moveNegZ:0,movePosZ:0,moveNegX:0,movePosX:0,moveNegY:0,movePosY:0,rotPosX:0,rotNegX:0,rotPosY:0,rotNegY:0,jump:0},this.vrEulerYOffset=0,this.onObject=!1,this.actionState={},this.keyAssignments=[["moveNegZ","W"],["moveNegX","A"],["movePosZ","S"],["movePosX","D"],["rotPosX","ArrowUp"],["rotPosY","ArrowLeft"],["rotNegX","ArrowDown"],["rotNegY","ArrowRight"],["jump"," "]],this.collisionEnabled=!0,this.offsetMatrix=new TA,this.objectToTarget=new T,this.objectToTarget0=new T,this.objectToCamXZ=new T,this.objectToCamXZ0=new T,this.targetToCamera=new T,this.targetToCamera0=new T,this.cameraPolarAxis0=new T,this.targetPos=new T,this.targetQuat=new ue,this.lerpFactorPos=new T().setScalar(.3),this.lerpFactorPosStart=.3,this.lerpFactorPosEnd=.3,this.lerpFactorRotStart=.3,this.lerpFactorRotEnd=.3,this.lerpFactorPosCamera=.3,this.lerpFactorRotCamera=.3,this.objXZQuat=new ue,this.objXZQuatInv=new ue,this.objXZRotMat=new TA,this.isFirstPerson=!1,this.actions={},this.didHit=!1,this.groundVelocity=new T,this.pushedVelocity=new T,this.groundYRotation=0,this.objectRealQuat=new ue,this.colliderWorldQuat=new ue,this.groundNormal=new T,this.groundTilt=new ue,this.groundTiltInv=new ue,this.lastHitObj=null,this.isFirstFrame=!0,this.rotationAccumWhenOrientWithCamera=0,this.onPointerDown=R=>{R.target!==this.domElement||this.firstPointerId!==-1||(this.firstPointerId=R.pointerId,this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp),this.rotBy!=="keys"&&!Zt&&(!sc||ac>=15.5)&&this.domElement.requestPointerLock(),this.prevMouse.set(R.clientX,R.clientY))},this.onPointerUp=R=>{this.firstPointerId=-1,this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp),R.pointerType==="mouse"&&this.domElement.ownerDocument.exitPointerLock()},this.onPointerMove=R=>{if(R.pointerId!==this.firstPointerId)return;let B=R.clientX-this.prevMouse.x,k=R.clientY-this.prevMouse.y;this.prevMouse.set(R.clientX,R.clientY),R.pointerType==="mouse"&&this.rotBy!=="keys"&&(sc&&ac<15.5&&!Zt?(this.eulerDelta.y=-B*this.mouseOrbitSensitivity,this.eulerDelta.x=-k*this.mouseOrbitSensitivity):(this.eulerDelta.y=-R.movementX*this.mouseOrbitSensitivity,this.eulerDelta.x=-R.movementY*this.mouseOrbitSensitivity)),R.pointerType!=="mouse"&&this.rotByTouch==="drag"&&(this.eulerDelta.y=-B*this.mouseOrbitSensitivity*5,this.eulerDelta.x=-k*this.mouseOrbitSensitivity*5),this.dispatchEvent(Dd)},this.onPointerlockChange=R=>{this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(uj),Af.isLocked=!0):(this.dispatchEvent(dj),Af.isLocked=!1)},this.onPointerlockError=()=>{console.error("SPE.GameControls: Unable to use Pointer Lock API")},this.onKeyDown=R=>{!(R.target instanceof HTMLInputElement)&&(R.code==="ArrowLeft"||R.code==="ArrowUp"||R.code==="ArrowRight"||R.code==="ArrowDown"||R.code==="Space")&&R.preventDefault();for(let B of this.keyAssignments)if(R.key.toUpperCase()===B[1]||R.key===B[1]){this.movementState[B[0]]=1;break}this.dispatchEvent(Dd)},this.onKeyUp=R=>{for(let B of this.keyAssignments)if(R.key.toUpperCase()===B[1]||R.key===B[1]||R.code.slice(3,R.code.length).toUpperCase()===B[1]){this.movementState[B[0]]=0;break}},this.copyVRGamePadValues=(R,B)=>{for(let k=2;k<4;k++){let W=R.axes[k];B===0?k===2?this.movementState.movePosX=W:this.movementState.movePosZ=W:(R.buttons[3].pressed?this.movementState.jump=1:this.movementState.jump=0,k===2?(Math.abs(this.movementState.rotPosY)<.3&&Math.abs(W)>=.3&&(this.vrEulerYOffset+=W<0?1:-1),this.movementState.rotPosY=W):this.moveMode==="fly"&&(this.movementState.moveNegY=W))}},A===a&&(this.isFirstPerson=!0),this.position0.copy(this.object.position),this.rotation0.copy(this.object.rotation),this.scale0.copy(this.object.scale),this.hiddenMatrix0.copy(this.object.hiddenMatrix),this.object.parent?this.object.hiddenMatrix.copy(this.object.parent.matrixWorld).invert():this.object.hiddenMatrix.identity(),this.object.matrix.copy(this.object.matrixWorld),this.object.matrix.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.rotation.reorder("YXZ"),this.euler0.copy(this.object.rotation);let l=this.object.rotation.y;if(this.objectRealQuat.copy(this.object.quaternion),this.object.rotation.y=0,this.objXZQuat.copy(this.object.quaternion),this.objXZQuatInv.copy(this.objXZQuat).invert(),this.objXZRotMat.makeRotationFromQuaternion(this.object.quaternion),this.object.rotation.set(0,l,0),this.rot.setFromEuler(this.object.rotation),this.object.matrixAutoUpdate=!1,(this.isFirstPerson||this.cameraFollow===!0)&&(this.target0.copy(this.camera.getTarget()),this.zoom0=this.camera.zoom),this.cameraFollow===!0){if(this.position0Cam.copy(this.camera.position),this.quat0Cam.copy(this.camera.quaternion),this.scale0Cam.copy(this.camera.scale),this.hiddenMatrix0Cam.copy(this.camera.hiddenMatrix),(m=(f=this.camera)==null?void 0:f.parent)==null?void 0:m.parent){let Q=this.camera.matrix.clone().invert().premultiply(this.camera.matrixWorld),j=Q.clone().invert();this.camera.hiddenMatrix.multiply(j),this.camera.matrix.premultiply(Q),this.camera.matrixWorld.decompose(this.camera.position,this.camera.quaternion,this.camera.scale)}this.camera.matrixAutoUpdate=!1,this.offsetMatrix.copy(this.object.matrix).invert().multiply(this.camera.matrix);let R=new T(0,0,-1).applyQuaternion(this.camera.quaternion),B=new T().subVectors(this.object.position,this.camera.position);this.objectToCamXZ.copy(B),this.objectToCamXZ.y=0,this.objectToCamXZ0.copy(this.objectToCamXZ);let k;if(Math.abs(R.y)<1e-6){B.y=0,R.y=0;let Q=B.projectOnVector(R);this.targetToCamera0.copy(Q).negate(),k=this.camera.position.clone().add(Q)}else{let Q=R.multiplyScalar(B.y/R.y);this.targetToCamera0.copy(Q).negate(),k=Q.clone().add(this.camera.position)}this.objectToTarget0.subVectors(k,this.object.position);let W=new mt().setFromQuaternion(this.camera.quaternion,"YXZ");this.cameraPolarOffset=-W.x,W.x=0,W.z=0,W.y-=Math.PI/2,this.cameraPolarAxis0.set(0,0,-1).applyEuler(W)}if(this.object instanceof Ir&&(this.object.matrixAutoUpdate=!1),this.euler.setFromQuaternion(this.object.quaternion,"YXZ"),this.connect(),this.rotByTouch=(p=t.rotByTouch)!=null?p:"joystick",this.rotBy=(g=t.rotBy)!=null?g:"keys",this.rotationMode=(v=t.rotationMode)!=null?v:"normal",this.moveMode=(x=t.moveMode)!=null?x:"walk",this.collisionEnabled=t.collisionEnabled,this.speedTranslate=((y=t.speedTranslate)!=null?y:250)*vj,this.speedOrbit=((S=t.speedRotate)!=null?S:100)*yj,this.mouseOrbitSensitivity=((w=t.speedRotate)!=null?w:100)*xj,this.keyAssignments=t.keyAssignments.map(R=>{let B=[R[0],R[1]];return B[1]==="\u25B2"?B[1]="ArrowUp":B[1]==="\u25C0"?B[1]="ArrowLeft":B[1]==="\u25BC"?B[1]="ArrowDown":B[1]==="\u25B6"?B[1]="ArrowRight":B[1]==="\u21E7"?B[1]="Shift":B[1]==="\u21B5"?B[1]="Enter":B[1]==="Space"?B[1]=" ":B[1]==="\u2318"?B[1]="Meta":B[1]==="Ctrl"?B[1]="Control":B[1]==="Esc"&&(B[1]="Escape"),B}),t.rotBy==="mouse"){let R;R=this.keyAssignments.findIndex(B=>B[0]==="rotNegX"),R!==-1&&(this.keyAssignments[R][1]=""),R=this.keyAssignments.findIndex(B=>B[0]==="rotPosX"),R!==-1&&(this.keyAssignments[R][1]=""),R=this.keyAssignments.findIndex(B=>B[0]==="rotPosY"),R!==-1&&(this.keyAssignments[R][1]=""),R=this.keyAssignments.findIndex(B=>B[0]==="rotNegY"),R!==-1&&(this.keyAssignments[R][1]="")}this.lerpFactorPosStart=1-.02**(1/(((M=t.delayPos[0])!=null?M:.3)*60)),this.lerpFactorPosEnd=1-.02**(1/(((b=t.delayPos[1])!=null?b:.3)*60)),this.lerpFactorPos.setScalar(this.lerpFactorPosStart),this.lerpFactorRotStart=1-.02**(1/(((E=t.delayRot[0])!=null?E:.3)*60)),this.lerpFactorRotEnd=1-.02**(1/(((C=t.delayRot[1])!=null?C:.3)*60)),this.lerpFactorPosCamera=1-.02**(1/(((D=t.delayPosCamera)!=null?D:.3)*60)),this.lerpFactorRotCamera=1-.02**(1/(((P=t.delayRotCamera)!=null?P:.3)*60)),this.gravity=((z=i.gravity)!=null?z:Ht.defaultData.gravity)*wj,this.pixelsPerMeter=(O=i.pixelsPerMeter)!=null?O:Ht.defaultData.pixelsPerMeter,this.usePhysics=(G=i.usePhysics)!=null?G:Ht.defaultData.usePhysics,this.jumpPower=t.jumpPower*bj,this.resetYPosition=t.resetYPosition,this.alignToGround=(X=t.alignToGround)!=null?X:!1,this.orientMode=t.autoOrientMove?t.orientMode:"none",this.orientWith=(U=t.orientWith)!=null?U:Tp.defaultDataThirdPerson.orientWith;let u=(_=i.skinWidthRelative)!=null?_:Ht.defaultData.skinWidthRelative,h=(V=i.stepThreshRelative)!=null?V:Ht.defaultData.stepThreshRelative;this.slopeThresh=((F=i.slopeThresh)!=null?F:Ht.defaultData.slopeThresh)*Math.PI/180,t.collider.type==="capsule"?(this.collider.radius=t.collider.radius,this.collider.segment.start.y=t.collider.height/2-t.collider.radius,this.collider.segment.end.y=-this.collider.segment.start.y,this.offset=t.collider.height*u/this.pixelsPerMeter,this.stepThresh=t.collider.height*h/this.pixelsPerMeter):t.collider.type==="sphere"?(this.collider.radius=t.collider.radius,this.collider.segment.start.y=0,this.collider.segment.end.y=0,this.offset=2*t.collider.radius*u/this.pixelsPerMeter,this.stepThresh=2*t.collider.radius*h/this.pixelsPerMeter):(this.offset=t.collider.height*u/this.pixelsPerMeter,this.stepThresh=t.collider.height*h/this.pixelsPerMeter),this.collider.type=t.collider.type;let c=new T().fromArray(t.collider.position),d=new ue().setFromEuler(new mt().fromArray([...t.collider.rotation,"XYZ"]));this.collider.position.copy(c).multiply(this.object.scale),this.collider.rotation.copy(d),this.collider.matrix.compose(c,d,lx),t.cameraXAxis!==void 0&&(this.cameraXAxis=t.cameraXAxis,this.cameraYAxis=t.cameraYAxis,this.minPolarAngle=t.cameraRotXLimits[0],this.maxPolarAngle=t.cameraRotXLimits[1],this.minAzimuthAngleRel=t.cameraRotYLimits[0],this.maxAzimuthAngleRel=t.cameraRotYLimits[1]),t.gameActions!==void 0&&Object.entries(t.gameActions).forEach(([R,B],k)=>{B.forEach(({id:W,data:Q})=>{try{this.actions[R]===void 0&&(this.actions[R]=[]),Q.type==="Transition"?this.actions[R].push(new Ja(W,Q,n,o)):Q.type==="Audio"?this.actions[R].push(new Ka(W,Q,A,o)):Q.type==="Video"&&this.actions[R].push(new xc(W,Q,A))}catch{}})}),this.dispatchStopEvent("move"),this.dispatchStopEvent("jump"),this.dispatchStartEvent("idle")}reset(A=!1){if(this.object.rotation.copy(this.rotation0),this.object.position.copy(this.position0),this.object.scale.copy(this.scale0),this.object.hiddenMatrix.copy(this.hiddenMatrix0),A===!0){this.object.updateMatrix(),this.object.updateMatrixWorld(),this.object.matrix.copy(this.object.matrixWorld),this.object.matrix.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.parent?this.object.hiddenMatrix.copy(this.object.parent.matrixWorld).invert():this.object.hiddenMatrix.identity(),this.object.rotation.reorder("YXZ");let e=this.object.rotation.y;this.object.rotation.y=0,this.objXZQuat.copy(this.object.quaternion),this.objXZQuatInv.copy(this.objXZQuat).invert(),this.objXZRotMat.makeRotationFromQuaternion(this.object.quaternion),this.object.rotation.set(0,e,0),this.rot.setFromEuler(this.object.rotation),this.euler.setFromQuaternion(this.object.quaternion,"YXZ"),this.velocityTarget.set(0,0,0),this.velocity.set(0,0,0)}A===!1&&(this.object instanceof Ir?this.object.matrixAutoUpdate=!0:this.object.updateMatrix()),this.cameraFollow===!0&&(this.camera.quaternion.copy(this.quat0Cam),this.camera.position.copy(this.position0Cam),this.camera.scale.copy(this.scale0Cam),this.camera.hiddenMatrix.copy(this.hiddenMatrix0Cam),this.camera.matrixAutoUpdate=!0),this.dispatchEvent(Dd)}connect(){this.domElement.ownerDocument.addEventListener("pointerdown",this.onPointerDown),this.domElement.ownerDocument.addEventListener("keydown",this.onKeyDown),this.domElement.ownerDocument.addEventListener("keyup",this.onKeyUp),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("pointerdown",this.onPointerDown),this.domElement.ownerDocument.removeEventListener("keydown",this.onKeyDown),this.domElement.ownerDocument.removeEventListener("keyup",this.onKeyUp),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this.onPointerlockError)}dispose(){this.disconnect(),Object.values(this.actions).forEach(A=>{A.forEach(e=>{(e instanceof Ja||e instanceof Ka||e instanceof xc)&&e.dispose()})})}resetTo(A,e,t){}dispatchStartEvent(A){this.actions[A]!==void 0&&(this.actionState[A]||(this.actionState[A]=!0,this.actions[A].forEach(e=>{e instanceof Ja?e.play():e instanceof Ka&&e.dispatchGameControl("start")})))}dispatchStopEvent(A){this.actions[A]!==void 0&&(!this.actionState[A]||(this.actionState[A]=!1,this.actions[A].forEach(e=>{e instanceof Ja?e.stop():e instanceof Ka&&e.dispatchGameControl("stop")}),this.object.traverseEntity(e=>{e.currentState!==null&&e.changeSelectedState(null,{scene:this.scene,shared:this.sharedAssets})})))}update(A,e,t){var n,o,l,u,h;if(this.gravity<0?this.object.position.y<this.resetYPosition:this.object.position.y>this.resetYPosition)return this.reset(!0),!0;this.sharedGameControlGlobals.gamePads.forEach(this.copyVRGamePadValues);let i=(this.isFirstFrame?16.6:A)/1e3;this.isFirstFrame&&(this.isFirstFrame=!1);let r=i*60,s=!1;if(this.usePhysics){let c=jt.set(0,(this.velocity.y===0?-this.pixelsPerMeter:this.velocity.y)*i,0).divideScalar(this.pixelsPerMeter),d=this.sharedGameControlGlobals.rapierWorld.castShape(Tt.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter),this.colliderWorldQuat,c,(n=this.object.rigidBody)==null?void 0:n.collider(0).shape,1,8,void 0,void 0,this.object.rigidBody);if(d){this.onObject=!0,this.groundNormal.set(d.normal2.x,d.normal2.y,d.normal2.z).applyQuaternion(this.colliderWorldQuat).negate(),this.alignToGround&&this.groundTiltAdjustment(this.groundNormal),Math.acos(this.groundNormal.y)<this.slopeThresh&&(s=!0);let f=d.collider._parent;this.groundYRotation=0,this.groundVelocity.set(0,0,0);for(let m of this.sharedGameControlGlobals.entitiesWithTransformAnim)if(m.rigidBody===f){(m.hasNonUniformScale?m.matrixWorldRigid:m.matrixWorld).decompose(Tt,Sr,jt),this.groundVelocity.subVectors(Tt,m.prevT),this.object.getWorldPosition(jt).add(this.collider.position).sub(m.position),this.groundYRotation=Xi.setFromQuaternion(Sr).y-m.prevR.y,qr.copy(jt).applyAxisAngle(Ci,this.groundYRotation),this.groundVelocity.add(qr.sub(jt)).divideScalar(i);break}}else this.onObject=!1}this.moveMode==="walk"&&this.collisionEnabled&&(this.movementState.jump===1&&this.onObject&&(this.velocityTarget.y=this.jumpPower,this.movementState.jump=0,this.dispatchStopEvent("idle"),this.dispatchStopEvent("move"),this.dispatchStopEvent("jump"),this.dispatchStartEvent("jump"),this.onObject=!1),this.velocityTarget.y+=this.onObject?0:this.gravity*r),this.moveMode==="fly"&&(this.velocityTarget.y=(this.movementState.movePosY-this.movementState.moveNegY)*this.speedTranslate),this.directionXZ.z=this.movementState.movePosZ-this.movementState.moveNegZ,this.directionXZ.x=this.movementState.movePosX-this.movementState.moveNegX,this.directionXZ.normalize(),this.movementState.moveNegZ||this.movementState.movePosZ?this.velocityTarget.z=this.directionXZ.z*this.speedTranslate*this.moveForce:this.velocityTarget.z=0,this.movementState.moveNegX||this.movementState.movePosX?this.velocityTarget.x=this.directionXZ.x*this.speedTranslate*this.moveForce:this.velocityTarget.x=0,(this.moveMode==="walk"?this.velocityTarget.x+this.velocityTarget.z===0:this.velocityTarget.manhattanLength()===0)?this.lerpFactorPos.setScalar(this.lerpFactorPosEnd):this.lerpFactorPos.setScalar(this.lerpFactorPosStart),this.moveMode==="walk"&&(this.lerpFactorPos.y=1),this.didHit===!1&&this.pushedVelocity.manhattanLength()===0||this.usePhysics===!1?(this.velocity.x+=(this.velocityTarget.x-this.velocity.x)*(1-(1-this.lerpFactorPos.x)**r),this.velocity.y+=(this.velocityTarget.y-this.velocity.y)*(1-(1-this.lerpFactorPos.y)**r),this.velocity.z+=(this.velocityTarget.z-this.velocity.z)*(1-(1-this.lerpFactorPos.z)**r)):this.velocity.copy(this.velocityTarget),(this.moveMode==="walk"?this.velocity.x**2+this.velocity.z**2<this.speedTranslate:this.velocity.lengthSq()<this.speedTranslate)?(this.dispatchStopEvent("move"),this.onObject&&(this.dispatchStopEvent("jump"),this.dispatchStartEvent("idle"))):(this.dispatchStopEvent("idle"),this.onObject&&(this.dispatchStopEvent("jump"),this.dispatchStartEvent("move")));let a=pj.copy(this.velocity);if(this.orientMode!=="none"&&this.isFirstPerson===!1){let c=jt.copy(a);c.y=0,a.set(0,a.y,c.length()*-1)}if(Xi.setFromVector3(this.rot),this.moveMode==="walk"&&(Xi.x=0),a.applyEuler(Xi),s&&(Sr.setFromUnitVectors(Ci,this.groundNormal),a.applyQuaternion(Sr)),t){let c=Xi.set(0,this.vrEulerYOffset*hx,0);t.applyEuler(c),a.x+=t.x,a.z+=t.z,this.nonColliderPosOffset.elements[13]+=t.y*i}if(this.usePhysics===!0){let c=jt;this.pushedVelocity.set(0,0,0);for(let d of this.sharedGameControlGlobals.entitiesWithTransformAnim){let f=qr.setFromMatrixPosition(d.matrixWorld).sub(d.prevT).divideScalar(i).divideScalar(this.pixelsPerMeter),m=d.rigidBody.collider(0).castCollider(f,this.object.rigidBody.collider(0),Tt.copy(a).divideScalar(this.pixelsPerMeter),i);if(f.multiplyScalar(this.pixelsPerMeter),m!==null){this.pushedVelocity.copy(f),c.copy(m.normal1).applyQuaternion(d.quaternion);break}}if(this.pushedVelocity.manhattanLength()!==0){let d=c.dot(a);d<0&&a.addScaledVector(c,-d),a.add(this.pushedVelocity)}else a.add(this.groundVelocity)}if(this.rotDirection.y=Number(this.movementState.rotPosY)-Number(this.movementState.rotNegY),this.rotDirection.x=Number(this.movementState.rotPosX)-Number(this.movementState.rotNegX),this.rotDirection.normalize(),this.rotationMode==="normal"&&(this.movementState.rotPosX||this.movementState.rotNegX)||this.rotationMode==="steer"&&(this.movementState.rotPosX||this.movementState.rotNegX)&&(this.movementState.movePosZ||this.movementState.moveNegZ||this.moveMode==="walk")?this.rotVelocityStick.x=-this.rotDirection.x*this.speedOrbit*this.rotForce:this.rotVelocityStick.x=0,this.rotationMode==="normal"&&(this.movementState.rotPosY||this.movementState.rotNegY)||this.rotationMode==="steer"&&(this.movementState.rotPosY||this.movementState.rotNegY)&&(this.movementState.movePosZ||this.movementState.moveNegZ)?this.rotVelocityStick.y=-this.rotDirection.y*this.speedOrbit*this.rotForce:this.rotVelocityStick.y=0,this.rotVelocityTarget.subVectors(this.eulerDelta.divideScalar(i),this.rotVelocityStick),this.rotVelocityTarget.manhattanLength()===0?this.rotVelocity.lerp(this.rotVelocityTarget,1-(1-this.lerpFactorRotEnd)**r):this.rotVelocity.lerp(this.rotVelocityTarget,1-(1-this.lerpFactorRotStart)**r),this.euler.x+=this.rotVelocity.x*i,this.euler.y+=this.rotVelocity.y*i+this.groundYRotation,this.rotVelocityTarget.y===0&&this.directionXZ.manhattanLength()===0?this.rotationAccumWhenOrientWithCamera=0:(this.cameraFollow===!1||this.cameraYAxis==="Locked")&&(this.rotationAccumWhenOrientWithCamera+=this.rotVelocity.y*i),this.isFirstPerson===!1&&this.orientMode!=="none"&&this.directionXZ.manhattanLength()>0){let c=Tt,d=jt.copy(this.directionXZ);d.x*=-1,this.camera.getWorldDirection(c);let f=qr.copy(Ci).multiplyScalar(c.dot(Ci));if(c.sub(f),this.orientWith==="camera"?this.rot.y=c.angleTo(d)*(c.cross(d).y>0?-1:1)+this.rotationAccumWhenOrientWithCamera:this.rot.y=this.euler.y+Math.atan2(-this.directionXZ.z,this.directionXZ.x)-Math.PI/2,this.orientMode==="radial"){this.objectToCamXZ.copy(this.objectToCamXZ0).applyAxisAngle(Ci,this.euler.y-this.euler0.y);let m=jt.copy(this.objectToCamXZ).normalize(),p=qr.copy(a).multiplyScalar(i);p.y=0;let g=p.sub(Tt.copy(m).multiplyScalar(p.dot(m))).cross(m).y;this.euler.y-=Math.atan2(g,this.objectToCamXZ.length())}}else this.rot.y+=this.rotVelocity.y*i+this.groundYRotation,this.rotVelocityTarget.y!==0&&(this.cameraFollow===!1||this.cameraYAxis==="Locked")&&(this.euler.y=this.rot.y);if(this.cameraFollow===!0&&(this.moveMode==="walk"?this.cameraXAxis==="Limit"?this.euler.x=ae.clamp(this.euler.x,-this.maxPolarAngle+this.cameraPolarOffset+1e-6,-this.minPolarAngle+this.cameraPolarOffset-1e-6):this.euler.x=ae.clamp(this.euler.x,-this.PI_2+this.cameraPolarOffset,this.PI_2+this.cameraPolarOffset):this.cameraXAxis==="Limit"&&(this.euler.x=ae.clamp(this.euler.x,-this.PI_2,this.PI_2))),this.moveMode==="fly"?this.rot.x=this.euler.x:this.isFirstPerson&&(e?(Xi.copy(e),Xi.y=0):(Xi.copy(this.euler),Xi.y=0),this.nonColliderRotOffset.makeRotationFromEuler(Xi)),e&&(this.moveMode==="walk"?(this.rot.y=e.y,this.rot.x=0,this.rot.z=0):this.rot.setFromEuler(e),this.rot.y+=this.vrEulerYOffset*hx),Ti.setFromAxisAngle(mj,this.rot.x),Sr.setFromAxisAngle(Ci,this.rot.y),Sr.multiply(Ti),Ti.setFromAxisAngle(gj,this.rot.z),Sr.multiply(Ti),this.object.quaternion.copy(Sr),this.objectRealQuat.multiplyQuaternions(this.object.quaternion,this.objXZQuat),this.objectRealQuat.multiply(this.objXZQuat),this.colliderWorldQuat.copy(this.objectRealQuat).multiply(this.collider.rotation),this.collisionEnabled)if(this.usePhysics){let c=jt.copy(a).multiplyScalar(i/this.pixelsPerMeter),d;this.didHit=!1;let f=new T;for(let m=0;m<5;m++){let p=c.length(),g=qr.copy(c).normalize();if(d=this.sharedGameControlGlobals.rapierWorld.castShape(Tt.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter).add(f),this.colliderWorldQuat,g,(o=this.object.rigidBody)==null?void 0:o.collider(0).shape,p,8,void 0,void 0,this.object.rigidBody),d!==null){this.didHit=!0;let v=this.sharedGameControlGlobals.colliderToEntity[d.collider.handle];if(v!==this.lastHitObj&&m===0){this.lastHitObj=v;let w=this.sharedGameControlGlobals.eventsPerObjects[v==null?void 0:v.uuid];if(w)for(let M of w)M.data.target==="character"&&(v.dispatchEvent(SS),M.dispatch())}let x=ax.set(d.normal2.x,d.normal2.y,d.normal2.z).applyQuaternion(this.colliderWorldQuat),y=nx.copy(g).multiplyScalar(d.toi).dot(x),S=d.toi;if(S===0&&(this.object.position.y+=this.offset*this.pixelsPerMeter),y>this.offset&&(S=d.toi*(y-this.offset)/y,f.addScaledVector(g,S)),c.copy(g).multiplyScalar(p-S),Math.acos(-x.y)>this.slopeThresh){let w=Tt.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter).add(f),M=qr.copy(d.witness2).applyQuaternion(this.colliderWorldQuat);M.y=0;let b=w.add(M);b.y+=this.stepThresh;let E=this.sharedGameControlGlobals.rapierWorld.castShape(b,this.colliderWorldQuat,c,(l=this.object.rigidBody)==null?void 0:l.collider(0).shape,1,8,void 0,void 0,this.object.rigidBody);E!==null&&E.toi===0&&(x.y=0,x.normalize())}c.addScaledVector(x,-c.dot(x))}else{m===0&&this.directionXZ.manhattanLength()!==0&&(this.lastHitObj=null),f.add(c);break}}this.object.position.addScaledVector(f,this.pixelsPerMeter),(u=this.object.rigidBody)==null||u.setTranslation(Tt.copy(this.object.position).divideScalar(this.pixelsPerMeter),!0),(h=this.object.rigidBody)==null||h.setRotation(Ti.copy(this.object.quaternion).premultiply(this.groundTilt).multiply(this.objXZQuat),!0)}else{let c=this.onObject?1:5,d=a.multiplyScalar(i/c);for(let f=0;f<c;f++)this.object.position.add(d),this.collisionAdjustment(i/c)}else this.object.position.addScaledVector(a,i);if(this.moveMode==="walk"&&this.onObject&&(this.velocityTarget.y=0,this.velocity.y=0),this.object.quaternion.premultiply(this.groundTilt).multiply(this.objXZQuat),this.object.updateMatrix(),this.object.matrix.multiply(this.nonColliderPosOffset).multiply(this.nonColliderRotOffset),this.object.quaternion.premultiply(this.groundTiltInv).multiply(this.objXZQuatInv),this.cameraFollow===!0){this.updateFollowArms();let c=this.objectToTarget.add(this.object.position),d=this.targetToCamera.add(c);Pd.lookAt(d,c,Ci).setPosition(d),Pd.decompose(this.targetPos,this.targetQuat,Tt),this.camera.quaternion.slerp(this.targetQuat,1-(1-this.lerpFactorRotCamera)**r),this.camera.position.lerp(this.targetPos,1-(1-this.lerpFactorPosCamera)**r),this.camera.updateMatrix(),this.camera.matrixWorldNeedsUpdate=!0,this.cameraYAxis==="Limit"&&this.orientMode==="cartesian"&&(this.euler.y=ae.clamp(this.euler.y,this.minAzimuthAngleRel,this.maxAzimuthAngleRel)),this.euler.x=ae.clamp(this.euler.x,-this.PI_2+(this.cameraPolarOffset<0?this.cameraPolarOffset:0),this.PI_2+(this.cameraPolarOffset>0?this.cameraPolarOffset:0))}return this.eulerDelta.set(0,0,0),this.lastPosition.distanceToSquared(this.object.position)<this.threshEndTranslate&&Math.abs(this.rotVelocity.x)<this.threshEndRotVel&&Math.abs(this.rotVelocity.y)<this.threshEndRotVel&&(this.camera===void 0||this.isFirstPerson||this.lastCameraPosition.distanceToSquared(this.camera.position)<this.threshEndTranslate&&8*(1-this.lastCameraQuaternion.dot(this.camera.quaternion))<this.threshEndRotate)&&(this.moveMode==="fly"||this.onObject===!0||this.collisionEnabled===!1)?!1:(this.camera&&(this.lastCameraPosition.copy(this.camera.position),this.lastCameraQuaternion.copy(this.camera.quaternion)),this.lastPosition.copy(this.object.position),this.object.dispatchEvent(Sj),!0)}updateFollowArms(){this.objectToTarget.copy(this.objectToTarget0),this.targetToCamera.copy(this.targetToCamera0);let A=Ti.setFromAxisAngle(Ci,this.cameraYAxis==="Limit"&&this.orientMode!=="radial"?ae.clamp(this.euler.y-this.euler0.y,this.minAzimuthAngleRel,this.maxAzimuthAngleRel):this.euler.y-this.euler0.y);(this.cameraYAxis!=="Locked"||this.orientMode==="radial")&&this.objectToTarget.applyQuaternion(A);let e;this.cameraXAxis==="Limit"?e=ae.clamp(this.euler.x,-this.maxPolarAngle+this.cameraPolarOffset+1e-6,-this.minPolarAngle+this.cameraPolarOffset-1e-6):e=ae.clamp(this.euler.x,-this.PI_2+this.cameraPolarOffset+1e-6,this.PI_2+this.cameraPolarOffset-1e-6);let t=Tt.copy(this.cameraPolarAxis0);(this.cameraYAxis!=="Locked"||this.orientMode==="radial")&&t.applyQuaternion(A);let i=Sr.setFromAxisAngle(t,e);this.cameraYAxis!=="Locked"&&this.targetToCamera.applyQuaternion(A),this.cameraXAxis!=="Locked"&&this.targetToCamera.applyQuaternion(i)}groundTiltAdjustment(A){Ci.angleTo(A)*180/Math.PI<15||Ci.angleTo(A)*180/Math.PI>85?Ti.identity():Ti.setFromUnitVectors(Ci,A),this.groundTilt.slerp(Ti,.06),this.groundTiltInv.copy(this.groundTilt).invert()}collisionAdjustment(A){var r;let e=nx.set(0,0,0);this.object.updateMatrix();let t=Pd.multiplyMatrices(this.object.matrix,this.objXZRotMat).multiply(this.collider.matrix).decompose(Tt,Ti,jt).compose(Tt,Ti,lx);this.sharedGameControlGlobals.entitiesWithTransformAnim.forEach(s=>{if(s===this.object||s.isDescendantOf(this.object))return;si.makeEmpty(),s.updateMatrixWorldSVD();let a=s.matrixWorldRigid,n=ox.copy(a).invert(),o=fj.copy(ox).multiply(t);dt.copy(this.collider.segment),dt.start.applyMatrix4(o),dt.end.applyMatrix4(o);let l=ax.copy(this.object.position).applyMatrix4(n);si.expandByPoint(dt.start),si.expandByPoint(dt.end),si.min.addScalar(-this.collider.radius),si.max.addScalar(this.collider.radius),s.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(si),intersectsTriangle:u=>{let h=Tt,c=jt,d=u.closestPointToSegment(dt,h,c);if(d<this.collider.radius){let f=this.collider.radius-d,m=c.sub(h).normalize(),p=qr.copy(l);p.addScaledVector(m,f);let g=p.applyMatrix4(a).sub(this.object.position);e.add(g),dt.start.addScaledVector(m,f),dt.end.addScaledVector(m,f)}}})}),si.makeEmpty(),dt.copy(this.collider.segment),dt.start.applyMatrix4(t),dt.end.applyMatrix4(t),si.expandByPoint(dt.start),si.expandByPoint(dt.end),si.min.addScalar(-this.collider.radius),si.max.addScalar(this.collider.radius),(r=this.sharedGameControlGlobals.staticMeshBVH)==null||r.shapecast({intersectsBounds:s=>s.intersectsBox(si),intersectsTriangle:s=>{let a=Tt,n=jt,o=s.closestPointToSegment(dt,a,n);if(o<this.collider.radius){let l=this.collider.radius-o,u=n.sub(a).normalize();this.alignToGround&&this.groundTiltAdjustment(u),e.addScaledVector(u,l),dt.start.addScaledVector(u,l),dt.end.addScaledVector(u,l)}}}),this.onObject=e.y>Math.abs(A*this.velocity.y*.25),this.onObject&&this.dispatchStopEvent("jump");let i=Math.max(0,e.length()-1e-5);e.normalize().multiplyScalar(i),this.object.position.add(e)}},MS=Af;MS.isLocked=!1;var Ld={type:"change"},cx={type:"changeZoom"},Mj={type:"changePan"},lo={type:"start"},ho={type:"end",changed:!0},Ej={type:"end",changed:!1},_d=new ue,ux=new H,Tj=2*Math.PI,Cj=1e-8,Dj=.01,dx=2,Od=.125,px=2,fh=1,mh=1,co=.1,fx=new T,gh=new H,ES=class extends Ft{constructor(A,e,t=!1){super(),this.object=A,this.domElement=e,this.isExport=t,this.enabled=!0,this.useKeyEvents=!0,this.enableDamping=!1,this.enableZoom=!0,this.enableRotate=!0,this.enablePan=!0,this.autoRotate=!1,this.rotationLimitsMode=0,this.panLimitsMode=0,this.rotationSoftLimit=2,this.panSoftLimit=2,this.hoverRotatePanMode=0,this.zoomLimitsEnabled=!1,this.mouseButtons=[0,5],this.mouseButtonsPlay=[3,4,5],this.touches=[null,ti.DOLLY_ROTATE,ti.PAN],this.offset=new T,this.eye=new T,this.lastPosition=new T,this.lastQuaternion=new ue,this.current=new H,this.overShoot=new H,this.overRatio=new H,this.spherical=new $g,this.sphericalDelta=new $g,this.panOffset=new T,this.panLeftV=new T,this.panUpV=new T,this.panV=new T,this.rotateStart=new H,this.rotateEnd=new H,this.rotateDelta=new H,this.panStart=new H,this.panEnd=new H,this.panDelta=new H,this.dollyStart=new H,this.dollyEnd=new H,this.dollyDelta=new H,this.rotationRangeFactor=new H,this.panRangeFactor=new H,this.state=-1,this.zoomChanged=!1,this.isPointerDown=!1,this.isThetaFlipped=!1,this.prevScale=0,this.scale=1,this.gesture=!1,this.timer=-1,this.timerHover=-1,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPhi=0,this.maxPhi=Math.PI,this.minTheta=-1/0,this.maxTheta=1/0,this.minH=0,this.maxH=Math.PI,this.minV=-1/0,this.maxV=1/0,this.autoRotateClockwise=!0,this.isPanOverShoot=!1,this.isRotateOverShoot=!1,this.resetHoverEffectOnPointerLeave=!1,this.hasChange=!1,this.update=()=>{let i=this.object.position;this.offset.copy(i).sub(this.target),this.spherical.setFromVector3(this.offset),this.object.isUpVectorFlipped&&(this.spherical.phi*=-1,this.spherical.theta-=Math.PI),this.autoRotate&&this.state===-1&&this.rotateLeft((this.autoRotateClockwise===!0?1:-1)*this.getAutoRotationAngle()),this.rotationLimitsMode!==0&&this.applyLimits(this.sphericalDelta,this.rotationLimitsMode,this.rotationSoftLimit,this.maxTheta,this.minTheta,this.maxPhi,this.minPhi,this.rotationRangeFactor),this.rotationLimitsMode!==2&&(this.spherical.phi+=this.sphericalDelta.phi),(this.rotationLimitsMode!==1||this.autoRotate===!0)&&(this.spherical.theta+=this.sphericalDelta.theta),this.spherical.radius*=this.scale,this.zoomLimitsEnabled&&(this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius))),this.panLimitsMode!==0&&(this.target.applyQuaternion(_d.copy(this.object.quaternion).invert()),this.panOffset.applyQuaternion(_d),this.applyLimits(this.panOffset,this.panLimitsMode,this.panSoftLimit,this.maxH,this.minH,this.maxV,this.minV,this.panRangeFactor),this.target.applyQuaternion(this.object.quaternion),this.panOffset.applyQuaternion(this.object.quaternion)),this.panLimitsMode===2&&(this.panOffset.y=0),this.panLimitsMode===1&&(this.panOffset.x=0),this.state===-1&&!this.gesture?(this.panOffset.multiplyScalar(1-Od),this.target.add(this.panOffset)):(this.target.add(this.panOffset),this.panOffset.set(0,0,0)),this.offset.setFromSpherical(this.spherical),i.copy(this.target).add(this.offset);let r=this.spherical.phi%Tj;return this.eye.copy(this.offset).normalize(),this.object.up.copy(Ce.DefaultUp).applyAxisAngle(this.eye,this.object.angleOffsetFromUp),r>0&&r>Math.PI||r<0&&r>-Math.PI?(this.object.up.negate(),this.object.lookAt(this.target),this.object.isUpVectorFlipped=!0):(this.object.lookAt(this.target),this.object.isUpVectorFlipped=!1),this.state===-1||this.enableDamping===!0?(this.sphericalDelta.theta*=1-Od,this.sphericalDelta.phi*=1-Od):this.sphericalDelta.set(0,0,0),this.scale=1,this.zoomChanged||this.lastPosition.distanceToSquared(this.object.position)>Dj||8*(1-this.lastQuaternion.dot(this.object.quaternion))>Cj?(this.dispatchEvent(Ld),this.lastPosition.copy(this.object.position),this.lastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):(this.isPanOverShoot=!1,this.isRotateOverShoot=!1,this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0),!1)},this.onPointerDown=i=>{this.enabled!==!1&&(i.pointerType==="touch"||i.pointerType==="pen"&&Zt?this.onPointerDownTouch(i):this.onPointerDownMouse(i),this.state!==-1&&(this.isPointerDown=!0,this.dispatchEvent(lo),this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp)))},this.onPointerLeave=i=>{this.resetHoverEffectOnPointerLeave?(this.hoverRotatePanMode===1?(this.sphericalDelta.theta=-this.spherical.theta,this.sphericalDelta.phi=-this.spherical.phi,fx.subVectors(this.position0,this.target0),this.spherical.setFromVector3(fx),this.sphericalDelta.theta+=this.spherical.theta,this.sphericalDelta.phi+=this.spherical.phi,this.sphericalDelta.theta/=8,this.sphericalDelta.phi/=8):this.hoverRotatePanMode===2&&this.panOffset.subVectors(this.target0,this.target).divideScalar(8),this.update()):this.pointerLeaveEvent=i},this.onPointerEnter=i=>{this.resetHoverEffectOnPointerLeave||this.pointerLeaveEvent===void 0?gh.set(i.clientX-this.domElement.clientWidth/2,i.clientY-this.domElement.clientHeight/2):gh.set(i.clientX-this.pointerLeaveEvent.clientX,i.clientY-this.pointerLeaveEvent.clientY),this.hoverRotatePanMode===1?(this.rotateDelta.copy(gh).multiplyScalar(fh*co).rotateAround(ux,-this.object.angleOffsetFromUp),this.rotateLeft(2*Math.PI*this.rotateDelta.x/this.domElement.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/this.domElement.clientHeight),this.rotateStart.set(i.clientX,i.clientY)):this.hoverRotatePanMode===2&&(this.panDelta.copy(gh).multiplyScalar(mh*co),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.set(i.clientX,i.clientY)),this.update()},this.onPointerMove=i=>{this.enabled!==!1&&(i.pointerType==="touch"||i.pointerType==="pen"&&Zt?this.onPointerMoveTouch(i):this.onPointerMoveMouse(i))},this.onPointerUp=i=>{this.isPointerDown=!1,Ae.length===0&&(this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp)),this.hasChange?this.dispatchEvent(ho):this.dispatchEvent(Ej),this.state=-1},this.onPointerDownMouse=i=>{let r;switch(this.useKeyEvents?r=this.mouseButtons[i.button]:r=this.mouseButtonsPlay[i.button],r){case 0:if(i.altKey===!0&&!i.shiftKey&&!Vl(i)){if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}else if(this.key===" "){if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}break;case 4:if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2;break;case 3:if(Vl(i)||i.shiftKey){if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}else{if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}break;case 5:if(Vl(i)||i.shiftKey){if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}else{if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}break;default:this.state=-1}},this.onPointerMoveMouse=i=>{switch(this.state){case 0:if(this.enableRotate===!1)return;this.handleMouseMoveRotate(i);break;case 1:if(this.enableZoom===!1)return;this.handleMouseMoveDolly(i);break;case 2:if(this.enablePan===!1)return;this.handleMouseMovePan(i);break}},this.onPointerDownTouch=i=>{switch(this.touches[Ae.length-1]){case ti.ROTATE:if(this.enableRotate===!1){this.state=-1;return}this.handleTouchStartRotate(),this.state=3;break;case ti.PAN:if(this.enablePan===!1){this.state=-1;return}this.handleTouchStartPan(),this.state=4;break;case ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchStartDollyPan(),this.state=5;break;case ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchStartDollyRotate(),this.state=6;break;default:this.state=-1}},this.onPointerMoveTouch=i=>{switch(this.state){case 3:if(this.enableRotate===!1)return;this.handleTouchMoveRotate(i),this.update();break;case 4:if(this.enablePan===!1)return;this.handleTouchMovePan(i),this.update();break;case 5:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchMoveDollyPan(i),this.update();break;case 6:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchMoveDollyRotate(i),this.update();break;default:this.state=-1}},this.dispatchEndDebounced=q1(()=>this.dispatchEvent(ho),33),this.onMouseWheel=i=>{this.enabled===!1||this.enableZoom===!1&&this.enablePan===!1||(this.isExport===!1&&this.domElement.clientHeight===document.body.clientHeight&&this.domElement.clientWidth===document.body.clientWidth&&i.preventDefault(),this.dispatchEvent(lo),this.handleMouseWheel(i),this.dispatchEndDebounced())},this.onGesture=i=>{if(this.enabled!==!1)if(i.preventDefault(),i.type==="gesturechange"){if(this.enableZoom===!1)return;this.dispatchEvent(lo),i.scale>this.prevScale?this.dollyIn(this.getZoomScale()):i.scale<this.prevScale&&this.dollyOut(this.getZoomScale()),this.prevScale=i.scale,this.update()}else this.dispatchEvent(ho)},this.onContextMenu=i=>{this.enabled!==!1&&i.preventDefault()},this.onTouchEnd=i=>{i.preventDefault()},this.onKeyDown=i=>{this.enabled!==!1&&(this.key=i.key)},this.onKeyUp=()=>{this.enabled!==!1&&(this.key=void 0,this.state!==-1&&this.onPointerUp(Ae[0]))},this.onPointerHover=i=>{i.pointerType!=="mouse"||this.enabled===!1||this.state!==-1||this.hoverRotatePanMode===2&&this.isPanOverShoot||this.hoverRotatePanMode===1&&this.isRotateOverShoot||(this.isPointerDown=!0,this.hoverRotatePanMode===2?this.handleMouseMovePan(i,co):this.hoverRotatePanMode===1&&this.handleMouseMoveRotate(i,co))},this.target=this.object.getTarget(),this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.isUpVectorFlipped0=this.object.isUpVectorFlipped,this.offset.copy(this.object.position).sub(this.target),this.spherical.setFromVector3(this.offset)}dispatchEvent(A){A.type==="start"?this.hasChange=!1:this.hasChange=!0,super.dispatchEvent(A)}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.isUpVectorFlipped=this.isUpVectorFlipped0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ld),this.update(),this.state=-1,this.pointerLeaveEvent=void 0}resetTo(A,e,t,i=!1){this.target.copy(A),this.object.position.copy(e),this.object.zoom=t,this.object.isUpVectorFlipped=i,this.object.updateProjectionMatrix(),this.dispatchEvent(Ld),this.update(),this.state=-1}fromJSON(A){var t;this.setEnableDampingSpeed(A.enableDamping),this.enablePan=A.enablePan,this.enableZoom=A.enableZoom,this.enableRotate=A.enableRotate,this.rotationLimitsMode=A.rotationLimitsMode,this.panLimitsMode=A.panLimitsMode,this.panSoftLimit=A.panSoftLimit,this.rotationSoftLimit=A.rotationSoftLimit,this.hoverRotatePanMode=A.hoverRotatePanMode,this.hoverRotatePanMode!==0&&this.domElement.addEventListener("pointermove",this.onPointerHover),co=(A.hoverRotatePanStrength/100)**2,this.zoomLimitsEnabled=A.zoomLimitsEnabled,this.minZoom=A.zoomLimits.min,this.maxZoom=Math.max(A.zoomLimits.min,A.zoomLimits.max),this.minDistance=1e3/A.zoomLimits.max,this.maxDistance=Math.max(this.minDistance,1e3/A.zoomLimits.min),this.autoRotate=A.autoRotate,dx=A.autoRotateSpeed,this.autoRotateClockwise=A.autoRotateClockwise;let e=this.object.getTarget().applyQuaternion(_d.copy(this.object.quaternion).invert());this.minV=-A.panVerticalOffset.min+e.y,this.maxV=A.panVerticalOffset.max+e.y,this.minH=-A.panHorizontalOffset.min+e.x,this.maxH=A.panHorizontalOffset.max+e.x,this.panRangeFactor.set(this.maxH-this.minH,this.maxV-this.minV).divideScalar(2),this.rotationRangeFactor.setScalar(Math.PI).divideScalar(4),this.minPhi=Zr(this.spherical.phi-A.rotationVerticalOffset.min),this.maxPhi=Zr(this.spherical.phi+A.rotationVerticalOffset.max),this.minTheta=Zr(this.spherical.theta-A.rotationHorizontalOffset.min),this.maxTheta=Zr(this.spherical.theta+A.rotationHorizontalOffset.max),this.isThetaFlipped=this.minTheta>this.maxTheta,A.orbitTouches===1&&(this.touches[0]=ti.ROTATE),A.panTouches===1&&(this.touches[0]=ti.PAN),A.orbitTouches===2&&(this.touches[1]=ti.DOLLY_ROTATE),A.panTouches===2&&(this.touches[1]=ti.DOLLY_PAN),A.orbitTouches===3&&(this.touches[2]=ti.ROTATE),A.panTouches===3&&(this.touches[2]=ti.PAN),this.resetHoverEffectOnPointerLeave=(t=A.resetHoverEffectOnPointerLeave)!=null?t:!1}connect(){this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("wheel",this.onMouseWheel),window.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("keyup",this.onKeyUp,!1),Sp||(this.domElement.addEventListener("gesturestart",this.onGesture),this.domElement.addEventListener("gesturechange",this.onGesture),this.domElement.addEventListener("gestureend",this.onGesture)),this.domElement.addEventListener("touchend",this.onTouchEnd),this.hoverRotatePanMode!==0&&(this.domElement.addEventListener("pointerleave",this.onPointerLeave),this.domElement.addEventListener("pointerenter",this.onPointerEnter)),this.pointerLeaveEvent=void 0}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("wheel",this.onMouseWheel),window.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("keyup",this.onKeyUp,!1),this.domElement.removeEventListener("pointermove",this.onPointerHover),Sp||(this.domElement.removeEventListener("gesturestart",this.onGesture),this.domElement.removeEventListener("gesturechange",this.onGesture),this.domElement.removeEventListener("gestureend",this.onGesture)),this.domElement.removeEventListener("touchend",this.onTouchEnd),this.domElement.removeEventListener("pointerleave",this.onPointerLeave),this.domElement.removeEventListener("pointerenter",this.onPointerEnter),this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp)}applyLimits(A,e,t,i,r,s,a,n){this.overShoot.set(0,0);let o,l,u;A instanceof T?(o=A.x,l=A.y,this.current.set(this.target.x,this.target.y),u=!0):(o=A.theta,l=A.phi,this.current.set(Zr(this.spherical.theta),Zr(this.spherical.phi)),u=!1),t===0&&(this.current.x+=o,this.current.y+=l),(e===3||e===2)&&(!u&&this.isThetaFlipped?this.current.x>i&&this.current.x<0?this.overShoot.x=i-this.current.x:this.current.x<r&&this.current.x>0&&(this.overShoot.x=r-this.current.x):this.current.x>i?this.overShoot.x=i-this.current.x:this.current.x<r&&(this.overShoot.x=r-this.current.x),i===r&&(o=0)),(e===3||e===1)&&(this.current.y>s?this.overShoot.y=s-this.current.y:this.current.y<a&&(this.overShoot.y=a-this.current.y),s===a&&(l=0)),u||(this.overShoot.x=Zr(this.overShoot.x),this.overShoot.y=Zr(this.overShoot.y)),t!==0?(this.overRatio.copy(this.overShoot).divide(n),this.overRatio.x=Math.min(Math.abs(this.overRatio.x),1),this.overRatio.y=Math.min(Math.abs(this.overRatio.y),1),t===1&&(this.overRatio.x=mx(Math.abs(this.overRatio.x)),this.overRatio.y=mx(Math.abs(this.overRatio.y))),this.isPointerDown||t===1?t===2&&(this.overRatio.x>.9||this.overRatio.y>.9)?this.isPointerDown=!1:(o*this.overShoot.x<0&&(o*=1-this.overRatio.x),l*this.overShoot.y<0&&(l*=1-this.overRatio.y)):t===2&&(!u&&(this.overRatio.x>.002||this.overRatio.y>.002)||u&&(Math.abs(this.overShoot.x)>2||Math.abs(this.overShoot.y)>2)?(o=this.overShoot.x*.05,l=this.overShoot.y*.05,u?this.isPanOverShoot=!0:this.isRotateOverShoot=!0):u?this.isPanOverShoot=!1:this.isRotateOverShoot=!1)):(o+=this.overShoot.x,l+=this.overShoot.y),A instanceof T?(A.x=o,A.y=l):(A.theta=o,A.phi=l)}setEnableDampingSpeed(A){this.enableDamping=A,fh=A===!0?.2:1}stopDamping(){this.sphericalDelta.theta=0,this.sphericalDelta.phi=0}getAutoRotationAngle(){return 2*Math.PI/60/60*dx}getZoomScale(){return Math.pow(.95,px)}rotateLeft(A){this.sphericalDelta.theta-=A}rotateUp(A){this.sphericalDelta.phi-=A}panLeft(A,e){this.panLeftV.setFromMatrixColumn(e,0),this.panLeftV.multiplyScalar(-A),this.panOffset.add(this.panLeftV)}panUp(A,e){this.panUpV.setFromMatrixColumn(e,1),this.panUpV.multiplyScalar(A),this.panOffset.add(this.panUpV)}pan(A,e){let t=this.domElement;if(t&&this.object.isPerspectiveCamera){let i=this.object.position;this.panV.copy(i).sub(this.target);let r=this.panV.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*A*r/t.clientHeight,this.object.matrix),this.panUp(2*e*r/t.clientHeight,this.object.matrix)}else t&&this.object.isOrthographicCamera&&(this.panLeft(A*(this.object.right-this.object.left)/this.object.zoom/t.clientWidth,this.object.matrix),this.panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/t.clientHeight,this.object.matrix));this.dispatchEvent(Mj)}dollyOut(A){this.object.isPerspectiveCamera?this.scale/=A:this.object.isOrthographicCamera&&(this.object.zoom*=A,this.zoomLimitsEnabled&&(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom))),this.object.updateProjectionMatrix(),this.zoomChanged=!0),this.dispatchEvent(cx)}dollyIn(A){this.object.isPerspectiveCamera?this.scale*=A:this.object.isOrthographicCamera&&(this.object.zoom/=A,this.zoomLimitsEnabled&&(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom))),this.object.updateProjectionMatrix(),this.zoomChanged=!0),this.dispatchEvent(cx)}zoomOut(A=this.getZoomScale()){this.dispatchEvent(lo),this.dollyOut(A),this.dispatchEvent(ho)}zoomIn(A=this.getZoomScale()){this.dispatchEvent(lo),this.dollyIn(A),this.dispatchEvent(ho)}handleMouseDownRotate(A){this.rotateStart.set(A.clientX,A.clientY)}handleMouseDownDolly(A){this.dollyStart.set(A.clientX,A.clientY)}handleMouseDownPan(A){this.panStart.set(A.clientX,A.clientY)}handleMouseMoveRotate(A,e=1){sc&&ac<15.5&&!Zt?(this.rotateEnd.set(A.clientX,A.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart),this.rotateStart.copy(this.rotateEnd)):this.rotateDelta.set(A.movementX,A.movementY),this.rotateDelta.multiplyScalar(fh*e).rotateAround(ux,-this.object.angleOffsetFromUp);let t=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.update()}handleMouseMoveDolly(A){this.dollyEnd.set(A.clientX,A.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyOut(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyIn(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}handleMouseMovePan(A,e=1){sc&&ac<15.5&&!Zt?(this.panEnd.set(A.clientX,A.clientY),this.panDelta.subVectors(this.panEnd,this.panStart),this.panStart.copy(this.panEnd)):this.panDelta.set(A.movementX,A.movementY),this.panDelta.multiplyScalar(mh*e),this.pan(this.panDelta.x,this.panDelta.y),this.update()}handleMouseWheel(A){if(Nz===!1&&Vl(A)===!1&&Pj(A)===!0){if(this.enablePan===!1)return;this.gesture?(this.panDelta.set(-A.deltaX,-A.deltaY).multiplyScalar(mh),this.panDelta.x=Math.min(Math.abs(this.panDelta.x),100)*(this.panDelta.x<0?-1:1),this.panDelta.y=Math.min(Math.abs(this.panDelta.y),100)*(this.panDelta.y<0?-1:1),A.altKey?this.pan(0,this.panDelta.y):A.shiftKey?this.pan(this.panDelta.x,0):this.pan(this.panDelta.x,this.panDelta.y),this.update()):(this.gesture=!0,this.isPointerDown=!0),window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.gesture=!1,this.isPointerDown=!1},30)}else{if(this.enableZoom===!1)return;A.deltaY===0?A.deltaX<0?this.dollyIn(this.getZoomScale()):A.deltaX>0&&this.dollyOut(this.getZoomScale()):A.deltaY<0?this.dollyIn(this.getZoomScale()):A.deltaY>0&&this.dollyOut(this.getZoomScale()),this.update(),this.gesture=!1,this.isPointerDown=!1}}handleTouchStartRotate(){if(Ae.length===2){let A=.5*(Ae[0].pageX+Ae[1].pageX),e=.5*(Ae[0].pageY+Ae[1].pageY);this.rotateStart.set(A,e)}else this.rotateStart.set(Ae[0].pageX,Ae[0].pageY)}handleTouchStartPan(){if(Ae.length===2){let A=.5*(Ae[0].pageX+Ae[1].pageX),e=.5*(Ae[0].pageY+Ae[1].pageY);this.panStart.set(A,e)}else this.panStart.set(Ae[0].pageX,Ae[0].pageY)}handleTouchStartDolly(){let A=Ae[0].pageX-Ae[1].pageX,e=Ae[0].pageY-Ae[1].pageY,t=Math.sqrt(A*A+e*e);this.dollyStart.set(0,t)}handleTouchStartDollyPan(){this.enableZoom&&this.handleTouchStartDolly(),this.enablePan&&this.handleTouchStartPan()}handleTouchStartDollyRotate(){this.enableZoom&&this.handleTouchStartDolly(),this.enableRotate&&this.handleTouchStartRotate()}handleTouchMoveRotate(A){if(Ae.length===2){let t=Yu(A),i=.5*(A.pageX+t.x),r=.5*(A.pageY+t.y);this.rotateEnd.set(i,r)}else{if(A.pointerId!==Ae[0].pointerId)return;this.rotateEnd.set(A.pageX,A.pageY)}this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(fh);let e=this.domElement;e&&(this.rotateLeft(2*Math.PI*this.rotateDelta.x/e.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/e.clientHeight)),this.rotateStart.copy(this.rotateEnd)}handleTouchMovePan(A){if(Ae.length===2){let e=Yu(A),t=.5*(A.pageX+e.x),i=.5*(A.pageY+e.y);this.panEnd.set(t,i)}else{if(A.pointerId!==Ae[0].pointerId)return;this.panEnd.set(A.pageX,A.pageY)}this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(mh),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd)}handleTouchMoveDolly(A){let e=Yu(A),t=A.pageX-e.x,i=A.pageY-e.y,r=Math.sqrt(t*t+i*i);this.dollyEnd.set(0,r),this.dollyDelta.set(0,Math.pow(this.dollyEnd.y/this.dollyStart.y,px)),this.dollyOut(this.dollyDelta.y),this.dollyStart.copy(this.dollyEnd)}handleTouchMoveDollyPan(A){this.enableZoom&&this.handleTouchMoveDolly(A),this.enablePan&&this.handleTouchMovePan(A)}handleTouchMoveDollyRotate(A){this.enableZoom&&this.handleTouchMoveDolly(A),this.enableRotate&&this.handleTouchMoveRotate(A)}};function Zr(A){let e=Math.PI*2;for(;A<=-Math.PI;)A+=e;for(;A>Math.PI;)A-=e;return A}function mx(A){return 1-Math.pow(1-A,4)}function Pj(A){return A.wheelDeltaY===0||A.deltaY===0?jc&&A.shiftKey&&Math.abs(A.wheelDeltaX)>=120?!1:A.wheelDeltaX?A.wheelDeltaX===-3*A.deltaX:A.deltaMode===0:A.wheelDeltaY?A.wheelDeltaY===-3*A.deltaY:A.deltaMode===0}var Bd=new WeakMap,Lj=class extends yf{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,e,t,i){let r=new Zd(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(A,s=>{let a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(e).catch(i)},t,i)}decodeDracoFile(A,e,t,i){let r={attributeIDs:t||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!t};this.decodeGeometry(A,r).then(e)}decodeGeometry(A,e){for(let n in e.attributeTypes){let o=e.attributeTypes[n];o.BYTES_PER_ELEMENT!==void 0&&(e.attributeTypes[n]=o.name)}let t=JSON.stringify(e);if(Bd.has(A)){let n=Bd.get(A);if(n.key===t)return n.promise;if(A.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,s=A.byteLength,a=this._getWorker(r,s).then(n=>(i=n,new Promise((o,l)=>{i._callbacks[r]={resolve:o,reject:l},i.postMessage({type:"decode",id:r,taskConfig:e,buffer:A},[A])}))).then(n=>this._createGeometry(n.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Bd.set(A,{key:t,promise:a}),a}_createGeometry(A){let e=new qA;A.index&&e.setIndex(new JA(A.index.array,1));for(let t=0;t<A.attributes.length;t++){let i=A.attributes[t],r=i.name,s=i.array,a=i.itemSize;e.setAttribute(r,new JA(s,a))}return e}_loadLibrary(A,e){let t=new Zd(this.manager);return t.setPath(this.decoderPath),t.setResponseType(e),t.setWithCredentials(this.withCredentials),new Promise((i,r)=>{t.load(A,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let A=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return A?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(t=>{let i=t[0];A||(this.decoderConfig.wasmBinary=t[1]);let r=_j.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(A,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let t=this.workerPool[this.workerPool.length-1];return t._taskCosts[A]=e,t._taskLoad+=e,t})}_releaseTask(A,e){A._taskLoad-=A._taskCosts[e],delete A._callbacks[e],delete A._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this}};function _j(){let A,e;onmessage=function(a){let n=a.data;switch(n.type){case"init":A=n.decoderConfig,e=new Promise(function(u){A.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(A)});break;case"decode":let o=n.buffer,l=n.taskConfig;e.then(u=>{let h=u.draco,c=new h.Decoder,d=new h.DecoderBuffer;d.Init(new Int8Array(o),o.byteLength);try{let f=t(h,c,d,l),m=f.attributes.map(p=>p.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:n.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:n.id,error:f.message})}finally{h.destroy(d),h.destroy(c)}});break}};function t(a,n,o,l){let u=l.attributeIDs,h=l.attributeTypes,c,d,f=n.GetEncodedGeometryType(o);if(f===a.TRIANGULAR_MESH)c=new a.Mesh,d=n.DecodeBufferToMesh(o,c);else if(f===a.POINT_CLOUD)c=new a.PointCloud,d=n.DecodeBufferToPointCloud(o,c);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||c.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let m={index:null,attributes:[]};for(let p in u){let g=self[h[p]],v,x;if(l.useUniqueIDs)x=u[p],v=n.GetAttributeByUniqueId(c,x);else{if(x=n.GetAttributeId(c,a[u[p]]),x===-1)continue;v=n.GetAttribute(c,x)}m.attributes.push(r(a,n,c,p,g,v))}return f===a.TRIANGULAR_MESH&&(m.index=i(a,n,c)),a.destroy(c),m}function i(a,n,o){let l=o.num_faces()*3,u=l*4,h=a._malloc(u);n.GetTrianglesUInt32Array(o,u,h);let c=new Uint32Array(a.HEAPF32.buffer,h,l).slice();return a._free(h),{array:c,itemSize:1}}function r(a,n,o,l,u,h){let c=h.num_components(),d=o.num_points()*c,f=d*u.BYTES_PER_ELEMENT,m=s(a,u),p=a._malloc(f);n.GetAttributeDataArrayForAllPoints(o,h,m,f,p);let g=new u(a.HEAPF32.buffer,p,d).slice();return a._free(p),{name:l,array:g,itemSize:c}}function s(a,n){switch(n){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var hs;function Oj(){return hs||(hs=new Lj,hs.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.2/").preload()),hs.decoderPending}async function Bj(A){if(hs){let e={attributeIDs:hs.defaultAttributeIDs,attributeTypes:hs.defaultAttributeTypes,useUniqueIDs:!1},t;try{t=await hs.decodeGeometry(new Int8Array(A).buffer,e)}catch(i){console.error(i)}if(t)return{index:t.index?{array:t.index.array}:void 0,attributes:Object.entries(t.attributes).map(([i,r])=>({name:i,itemSize:r.itemSize,array:r.array}))}}return null}async function Ij(A,e){let[t,i]=rw(cp.deserialize(new Uint8Array(A)));c4(t);let r=[];t.scene.objects.traverse((s,a)=>{a.type==="Mesh"&&a.geometry.type==="NonParametricGeometry"&&a.geometry.data.draco!==void 0&&r.push(a)}),r.length&&await Oj();for(let s of r){let a=await Bj(vt(s.geometry.data.draco));if(a){a.index&&(s.geometry.data.index={array:a.index.array,itemSize:1,normalized:!1,type:"Uint32Array"});let n={};a.attributes.forEach(({name:o,array:l,itemSize:u})=>{n[o]={array:l,itemSize:u,type:"Float32Array",normalized:!1}}),s.geometry.data.attributes=n,s.geometry.data.draco=void 0}}return e&&e(t),i.result().data}var gx=Object.keys(AS).filter(A=>isNaN(Number(A))),Rj=class{constructor(A,e,t,i,r,s,a,n,o,l){this.preventScroll=r,this.hideCursor=s,this.requestRender=n,this.isEnable=!1,this.onResetRaycaster=()=>{this.eventContext.raycasterNeedsUpdate=!0},this.onTouchMovePreventScroll=u=>{(u.touches.length>1||this.preventScroll)&&u.preventDefault()},this.onMouseWheelPreventScroll=u=>{this.preventScroll&&u.preventDefault()},this.eventContext=new C5(A,e,t,a,i,l!=null?l:!1),this.handlers={Spline:new UG(this.eventContext),Conditional:new YG(this.eventContext),Start:new nj(this.eventContext),Basic:new GG(this.eventContext,o,this),MouseHover:new ij(this.eventContext),Scroll:new sj(this.eventContext),Follow:new ZG(this.eventContext),LookAt:new ej(this.eventContext)}}activate(){let{scene:A,domElement:e}=this.eventContext;this.hideCursor&&(e.style.cursor="none"),this.isEnable=!0,A.traverseEntity(t=>{t.addEventListener("requestRender",this.requestRender)}),Object.values(this.handlers).forEach(t=>t.connect()),this.resize(),gx.forEach(t=>{Object.values(this.handlers).some(i=>i.domEventsNeeded.has(t))&&e.addEventListener(t,this.onResetRaycaster)}),e.addEventListener("wheel",this.onMouseWheelPreventScroll),e.addEventListener("touchmove",this.onTouchMovePreventScroll)}deactivate(){let{scene:A,domElement:e}=this.eventContext;this.isEnable=!1,e.style.cursor="",Object.values(this.handlers).forEach(t=>t.disconnect()),A.traverseEntity(t=>{t.removeEventListener("requestRender",this.requestRender)}),gx.forEach(t=>{e.removeEventListener(t,this.onResetRaycaster)}),e.removeEventListener("touchmove",this.onTouchMovePreventScroll),e.removeEventListener("wheel",this.onMouseWheelPreventScroll)}reset(){this.deactivate(),this.activate()}resize(){this.eventContext.updaterRect()}},Nj=class{constructor(A,e,t,i,r){this._aspect=1,this._renderer=A,this._camera=e,this._frameSize=new H().copy(t),this._editorSize=new H().copy(i),this._aspect=e.aspect,this._fov=r!=null?r:e.fov}set frameSize(A){this._frameSize.copy(A)}updateRenderer(){!this._renderer||this._renderer.setSize(this._frameSize.x,this._frameSize.y)}updateViewportForImageExport(){if(!this._renderer||!this._camera||this._camera.cameraType!=="PerspectiveCamera")return;let A=this._frameSize.x,e=this._frameSize.y,t=this._editorSize.x,i=this._editorSize.y;this._aspect=A/e,this._camera.zoom*=Math.min(t/A,i/e),this._renderer.setViewport(0,0,A,e)}updateViewport(){if(!this._renderer||!this._camera||this._camera.cameraType!=="PerspectiveCamera")return;let A=this._frameSize.x,e=this._frameSize.y,t=this._editorSize.x,i=this._editorSize.y,r=0,s=0,a=A,n=e;A<t&&(r=(t-A)*.5,r=-r,a=t),e<i&&(s=(i-e)*.5,s=-s,n=i),this._aspect=a/n,this._renderer.setViewport(r,s,a,n)}updateCamera(){if(this._camera)if(this._camera.cameraType==="PerspectiveCamera"){let A=this._frameSize.y,e=this._editorSize.y,t=this._fov;if(A>e){let i=zj(A,1080,2160,1,15)/100;t*=A/e,t*=1-i}this._camera.aspect=this._aspect,this._camera.fov=t,this._camera.updateProjectionMatrix()}else this._camera.setViewplaneSize(this._frameSize.x,this._frameSize.y)}setCamera(A){this._camera=A,this._aspect=A.aspect,this._fov=A.fov}revert(){let A=window.innerWidth,e=window.innerHeight;this._renderer&&(this._renderer.setViewport(0,0,A,e),this._renderer.setSize(A,e)),this._camera&&(this._camera.aspect=A/e,this._camera.fov=this._fov,this._camera.setViewplaneSize(A,e),this._camera.updateProjectionMatrix())}};function zj(A,e,t,i,r){return(A-e)/(t-e)*(r-i)+i}var TS={RED:0,GREEN:1,BLUE:2,ALPHA:3},ol="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Fj=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 CoCNearFar=texture2D(cocBuffer,vUv).rg;float CoC=CoCNearFar.r*scale;
#else
float CoC=texture2D(cocBuffer,vUv).g*scale;
#endif
if(CoC==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(CoC,CoCNearFar.g*scale);
#else
vec2 step=texelSize*CoC;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,vh=class extends At{constructor(A=!1,e=!1){super({name:"BokehMaterial",defines:{PASS:A?"2":"1"},uniforms:{kernel64:new IA(null),kernel16:new IA(null),inputBuffer:new IA(null),cocBuffer:new IA(null),texelSize:new IA(new H),scale:new IA(1)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Fj,vertexShader:ol}),this.toneMapped=!1,e&&(this.defines.FOREGROUND="1"),this.generateKernel()}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}set cocBuffer(A){this.uniforms.cocBuffer.value=A}setCoCBuffer(A){this.uniforms.cocBuffer.value=A}get scale(){return this.uniforms.scale.value}set scale(A){this.uniforms.scale.value=A}getScale(A){return this.uniforms.scale.value=A}setScale(A){this.uniforms.scale.value=A}generateKernel(){let A=2.39996323,e=new Float32Array(128),t=new Float32Array(32),i=0,r=0;for(let n=0;n<80;++n){let o=n*A,l=Math.sqrt(n)/Math.sqrt(80),u=l*Math.cos(o),h=l*Math.sin(o);n%5===0?(t[r++]=u,t[r++]=h):(e[i++]=u,e[i++]=h)}let s=[],a=[];for(let n=0;n<128;)s.push(new ee(e[n++],e[n++],e[n++],e[n++]));for(let n=0;n<32;)a.push(new ee(t[n++],t[n++],t[n++],t[n++]));this.uniforms.kernel64.value=s,this.uniforms.kernel16.value=a}setTexelSize(A,e){this.uniforms.texelSize.value.set(A,e)}setSize(A,e){this.uniforms.texelSize.value.set(1/A,1/e)}};function vx(A,e,t){return A*(e-t)-e}function ef(A,e,t){return Math.min(Math.max((A+e)/(e-t),0),1)}var Uj=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,kj=class extends At{constructor(A){super({name:"CircleOfConfusionMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new IA(null),focusDistance:new IA(0),focusRange:new IA(0),cameraNear:new IA(.3),cameraFar:new IA(1e3)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Uj,vertexShader:ol}),this.toneMapped=!1,this.uniforms.focalLength=this.uniforms.focusRange,this.adoptCameraSettings(A)}get near(){return this.uniforms.cameraNear.value}get far(){return this.uniforms.cameraFar.value}set depthBuffer(A){this.uniforms.depthBuffer.value=A}set depthPacking(A){this.defines.DEPTH_PACKING=A.toFixed(0),this.needsUpdate=!0}setDepthBuffer(A,e=Rr){this.depthBuffer=A,this.depthPacking=e}get focusDistance(){return this.uniforms.focusDistance.value}set focusDistance(A){this.uniforms.focusDistance.value=A}get worldFocusDistance(){return-vx(this.focusDistance,this.near,this.far)}set worldFocusDistance(A){this.focusDistance=ef(-A,this.near,this.far)}getFocusDistance(A){this.uniforms.focusDistance.value=A}setFocusDistance(A){this.uniforms.focusDistance.value=A}get focalLength(){return this.focusRange}set focalLength(A){this.focusRange=A}get focusRange(){return this.uniforms.focusRange.value}set focusRange(A){this.uniforms.focusRange.value=A}get worldFocusRange(){return-vx(this.focusRange,this.near,this.far)}set worldFocusRange(A){this.focusRange=ef(-A,this.near,this.far)}getFocalLength(A){return this.focusRange}setFocalLength(A){this.focusRange=A}adoptCameraSettings(A){A&&(this.uniforms.cameraNear.value=A.near,this.uniforms.cameraFar.value=A.far,A instanceof ft?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},Gj=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
#include <dithering_fragment>
}`,jj="uniform vec2 texelSize;uniform vec2 halfTexelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize*vec2(kernel)+halfTexelSize)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",yx=class extends At{constructor(A=new H){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new IA(null),texelSize:new IA(new H),halfTexelSize:new IA(new H),kernel:new IA(0),scale:new IA(1)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Gj,vertexShader:jj}),this.toneMapped=!1,this.setTexelSize(A.x,A.y)}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.inputBuffer=A}get scale(){return this.uniforms.scale.value}set scale(A){this.uniforms.scale.value=A}getScale(){return this.uniforms.scale.value}setScale(A){this.uniforms.scale.value=A}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(A){this.uniforms.kernel.value=A}setKernel(A){this.kernel=A}setTexelSize(A,e){this.uniforms.texelSize.value.set(A,e),this.uniforms.halfTexelSize.value.set(A,e).multiplyScalar(.5)}setSize(A,e){let t=this.uniforms;t.texelSize.value.set(1/A,1/e),t.halfTexelSize.value.copy(t.texelSize.value).multiplyScalar(.5)}},Vj=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
}`,Hj=class extends At{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new IA(null),opacity:new IA(1)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Vj,vertexShader:ol}),this.toneMapped=!1}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}getOpacity(A){return this.uniforms.opacity.value}setOpacity(A){this.uniforms.opacity.value=A}},Wj=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=linearToRelativeLuminance(texture2D(inputBuffer,vUv).rgb);float lLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv0).rgb);float lTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=linearToRelativeLuminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=linearToRelativeLuminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,Yj=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Em={DEPTH:0,LUMA:1,COLOR:2},CS={DISABLED:0,DEPTH:1,CUSTOM:2},Xj=class extends At{constructor(A=new H,e=Em.COLOR){super({name:"EdgeDetectionMaterial",defines:{LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new IA(null),depthBuffer:new IA(null),predicationBuffer:new IA(null),texelSize:new IA(A)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Wj,vertexShader:Yj}),this.toneMapped=!1,this.edgeDetectionMode=e}set depthBuffer(A){this.uniforms.depthBuffer.value=A}set depthPacking(A){this.defines.DEPTH_PACKING=A.toFixed(0),this.needsUpdate=!0}setDepthBuffer(A,e=Rr){this.depthBuffer=A,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(A){this.defines.EDGE_DETECTION_MODE=A.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(A){this.edgeDetectionMode=A}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(A){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=A.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(A){this.localContrastAdaptationFactor=A}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(A){this.defines.EDGE_THRESHOLD=A.toFixed("6"),this.defines.DEPTH_THRESHOLD=(A*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(A){this.edgeDetectionThreshold=A}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(A){this.defines.PREDICATION_MODE=A.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(A){this.predicationMode=A}set predicationBuffer(A){this.uniforms.predicationBuffer.value=A}setPredicationBuffer(A){this.uniforms.predicationBuffer.value=A}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(A){this.defines.PREDICATION_THRESHOLD=A.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(A){this.predicationThreshold=A}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(A){this.defines.PREDICATION_SCALE=A.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(A){this.predicationScale=A}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(A){this.defines.PREDICATION_STRENGTH=A.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(A){this.predicationStrength=A}setSize(A,e){this.uniforms.texelSize.value.set(1/A,1/e)}},Qj=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <encodings_fragment>
#endif
#include <dithering_fragment>
}`,qj="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}",Di={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},tf=class extends At{constructor(A,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Jo.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new IA(null),depthBuffer:new IA(null),resolution:new IA(new H),texelSize:new IA(new H),cameraNear:new IA(.3),cameraFar:new IA(1e3),aspect:new IA(1),time:new IA(0)},blending:lt,depthWrite:!1,depthTest:!1,dithering:r}),this.toneMapped=!1,A&&this.setShaderParts(A),e&&this.setDefines(e),t&&this.setUniforms(t),this.adoptCameraSettings(i)}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(A){this.uniforms.depthBuffer.value=A}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(A){this.defines.DEPTH_PACKING=A.toFixed(0),this.needsUpdate=!0}setDepthBuffer(A,e=Rr){this.depthBuffer=A,this.depthPacking=e}setShaderParts(A){return this.fragmentShader=Qj.replace(Di.FRAGMENT_HEAD,A.get(Di.FRAGMENT_HEAD)).replace(Di.FRAGMENT_MAIN_UV,A.get(Di.FRAGMENT_MAIN_UV)).replace(Di.FRAGMENT_MAIN_IMAGE,A.get(Di.FRAGMENT_MAIN_IMAGE)),this.vertexShader=qj.replace(Di.VERTEX_HEAD,A.get(Di.VERTEX_HEAD)).replace(Di.VERTEX_MAIN_SUPPORT,A.get(Di.VERTEX_MAIN_SUPPORT)),this.needsUpdate=!0,this}setDefines(A){for(let e of A.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(A){for(let e of A.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(A){this.extensions={};for(let e of A)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(A){this.encodeOutput!==A&&(A?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(A){return this.encodeOutput}setOutputEncodingEnabled(A){this.encodeOutput=A}get time(){return this.uniforms.time.value}set time(A){this.uniforms.time.value=A}setDeltaTime(A){this.uniforms.time.value+=A}adoptCameraSettings(A){A&&(this.uniforms.cameraNear.value=A.near,this.uniforms.cameraFar.value=A.far,A instanceof ft?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(A,e){let t=this.uniforms;t.resolution.value.set(A,e),t.texelSize.value.set(1/A,1/e),t.aspect.value=A/e}static get Section(){return Di}},Zj=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=linearToRelativeLuminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,Kj=class extends At{constructor(A=!1,e=null){super({name:"LuminanceMaterial",uniforms:{inputBuffer:new IA(null),threshold:new IA(0),smoothing:new IA(1),range:new IA(null)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Zj,vertexShader:ol}),this.toneMapped=!1,this.colorOutput=A,this.luminanceRange=e}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}get threshold(){return this.uniforms.threshold.value}set threshold(A){this.smoothing>0||A>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=A}getThreshold(){return this.threshold}setThreshold(A){this.threshold=A}get smoothing(){return this.uniforms.smoothing.value}set smoothing(A){this.threshold>0||A>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=A}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(A){this.smoothing=A}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(A){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(A){A?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(A){return this.colorOutput}setColorOutputEnabled(A){this.colorOutput=A}get useRange(){return this.luminanceRange!==null}set useRange(A){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(A){A!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=A,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(A){this.luminanceRange=A}},Jj=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,DS={DISCARD:0,MULTIPLY:1,MULTIPLY_RGB_SET_ALPHA:2},$j=class extends At{constructor(A=null){super({name:"MaskMaterial",uniforms:{maskTexture:new IA(A),inputBuffer:new IA(null),strength:new IA(1)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:Jj,vertexShader:ol}),this.toneMapped=!1,this.setColorChannel(TS.RED),this.setMaskFunction(DS.DISCARD)}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}set maskTexture(A){this.uniforms.maskTexture.value=A,delete this.defines.MASK_PRECISION_HIGH,A.type!==yt&&(this.defines.MASK_PRECISION_HIGH="1"),this.needsUpdate=!0}setMaskTexture(A){this.maskTexture=A}set colorChannel(A){this.defines.COLOR_CHANNEL=A.toFixed(0),this.needsUpdate=!0}setColorChannel(A){this.colorChannel=A}set maskFunction(A){this.defines.MASK_FUNCTION=A.toFixed(0),this.needsUpdate=!0}setMaskFunction(A){this.maskFunction=A}get inverted(){return this.defines.INVERTED!==void 0}set inverted(A){this.inverted&&!A?delete this.defines.INVERTED:A&&(this.defines.INVERTED="1"),this.needsUpdate=!0}isInverted(){return this.inverted}setInverted(A){this.inverted=A}get strength(){return this.uniforms.strength.value}set strength(A){this.uniforms.strength.value=A}getStrength(){return this.strength}setStrength(A){this.strength=A}},AV=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,eV="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",tV=class extends At{constructor(A=new H,e=new H){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new IA(null),searchTexture:new IA(null),areaTexture:new IA(null),resolution:new IA(e),texelSize:new IA(A)},blending:lt,depthWrite:!1,depthTest:!1,fragmentShader:AV,vertexShader:eV}),this.toneMapped=!1}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(A){this.uniforms.searchTexture.value=A}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(A){this.uniforms.areaTexture.value=A}setLookupTextures(A,e){this.searchTexture=A,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(A){let e=Math.min(Math.max(A,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(A){this.orthogonalSearchSteps=A}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(A){let e=Math.min(Math.max(A,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(A){this.diagonalSearchSteps=A}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(A){A?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(A){this.diagonalDetection=A}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(A){let e=Math.min(Math.max(A,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(A){this.cornerRounding=A}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(A){A?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(A){this.cornerDetection=A}setSize(A,e){let t=this.uniforms;t.texelSize.value.set(1/A,1/e),t.resolution.value.set(A,e)}},iV=new Mn,Kr=null;function rV(){if(Kr===null){let A=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Kr=new qA,Kr.setAttribute!==void 0?(Kr.setAttribute("position",new JA(A,3)),Kr.setAttribute("uv",new JA(e,2))):(Kr.addAttribute("position",new JA(A,3)),Kr.addAttribute("uv",new JA(e,2)))}return Kr}var yi=class{constructor(A="Pass",e=new Qs,t=iV){this.name=A,this.renderer=null,this.scene=e,this.camera=t,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(A){if(this.rtt===A){let e=this.getFullscreenMaterial();e!==null&&(e.needsUpdate=!0),this.rtt=!A}}setRenderer(A){this.renderer=A}isEnabled(){return this.enabled}setEnabled(A){this.enabled=A}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(A){let e=this.screen;e!==null?e.material=A:(e=new Qt(rV(),A),e.frustumCulled=!1,this.scene===null&&(this.scene=new Qs),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(A){this.fullscreenMaterial=A}getDepthTexture(){return null}setDepthTexture(A,e=Rr){}render(A,e,t,i,r){throw new Error("Render method not implemented!")}setSize(A,e){}initialize(A,e,t){}dispose(){for(let A of Object.keys(this)){let e=this[A];if(e!==null&&typeof e.dispose=="function"){if(e instanceof Qs||e===this.renderer)continue;this[A].dispose()}}}},bc=class extends yi{constructor(A,e=!0){super("CopyPass"),this.fullscreenMaterial=new Hj,this.needsSwap=!1,this.renderTarget=A,A===void 0&&(this.renderTarget=new We(1,1,{minFilter:ge,magFilter:ge,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(A){this.autoResize=A}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(A){this.autoResize=A}render(A,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,A.setRenderTarget(this.renderToScreen?null:this.renderTarget),A.render(this.scene,this.camera)}setSize(A,e){this.autoResize&&this.renderTarget.setSize(A,e)}initialize(A,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==yt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":A.outputEncoding===re&&(this.renderTarget.texture.encoding=re))}},sV=class extends yi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(A,e,t,i,r){let s=A.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},Id=new GA,Jc=class extends yi{constructor(A=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=A,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(A,e,t){this.color=A,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(A){this.overrideClearColor=A}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(A){this.overrideClearAlpha=A}render(A,e,t,i,r){let s=this.overrideClearColor,a=this.overrideClearAlpha,n=A.getClearAlpha(),o=s!==null,l=a>=0;o?(Id.copy(A.getClearColor(Id)),A.setClearColor(s,l?a:n)):l&&A.setClearAlpha(a),A.setRenderTarget(this.renderToScreen?null:e),A.clear(this.color,this.depth,this.stencil),o?A.setClearColor(Id,n):l&&A.setClearAlpha(n)}},Jr=-1,Nt=class extends Ft{constructor(A,e=Jr,t=Jr,i=1){super(),this.resizable=A,this.base=new H(1,1),this.preferred=new H(e,t),this.target=this.preferred,this.s=i}get width(){let{base:A,preferred:e,scale:t}=this,i;return e.width!==Jr?i=e.width:e.height!==Jr?i=Math.round(e.height*(A.width/Math.max(A.height,1))):i=Math.round(A.width*t),i}set width(A){this.preferredWidth=A}get height(){let{base:A,preferred:e,scale:t}=this,i;return e.height!==Jr?i=e.height:e.width!==Jr?i=Math.round(e.width/Math.max(A.width/Math.max(A.height,1),1)):i=Math.round(A.height*t),i}set height(A){this.preferredHeight=A}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(A){this.s!==A&&(this.s=A,this.preferred.setScalar(Jr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getScale(){return this.scale}setScale(A){this.scale=A}get baseWidth(){return this.base.width}set baseWidth(A){this.base.width!==A&&(this.base.width=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getBaseWidth(){return this.base.width}setBaseWidth(A){this.base.width!==A&&(this.base.width=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}get baseHeight(){return this.base.height}set baseHeight(A){this.base.height!==A&&(this.base.height=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(A){this.baseHeight=A}setBaseSize(A,e){(this.base.width!==A||this.base.height!==e)&&(this.base.set(A,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}get preferredWidth(){return this.preferred.width}set preferredWidth(A){this.preferred.width!==A&&(this.preferred.width=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(A){this.preferredWidth=A}get preferredHeight(){return this.preferred.height}set preferredHeight(A){this.preferred.height!==A&&(this.preferred.height=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(A){this.preferredHeight=A}setPreferredSize(A,e){(this.preferred.width!==A||this.preferred.height!==e)&&(this.preferred.set(A,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}copy(A){this.base.set(A.getBaseWidth(),A.getBaseHeight()),this.preferred.set(A.getPreferredWidth(),A.getPreferredHeight()),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height)}static get AUTO_SIZE(){return Jr}},Rd=!1,xx=class{constructor(A=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(A),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Pi:t=this.materialsFlatShadedDoubleSide;break;case gt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Pi:t=this.materialsDoubleSide;break;case gt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}setMaterial(A){if(this.disposeMaterials(),this.material=A,A!==null){let e=this.materials=[A.clone(),A.clone(),A.clone()];for(let t of e)t.uniforms=Object.assign({},A.uniforms),t.side=ps;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let i=t.clone();return i.uniforms=Object.assign({},A.uniforms),i.side=gt,i}),this.materialsDoubleSide=e.map(t=>{let i=t.clone();return i.uniforms=Object.assign({},A.uniforms),i.side=Pi,i}),this.materialsFlatShaded=e.map(t=>{let i=t.clone();return i.uniforms=Object.assign({},A.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{let i=t.clone();return i.uniforms=Object.assign({},A.uniforms),i.flatShading=!0,i.side=gt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{let i=t.clone();return i.uniforms=Object.assign({},A.uniforms),i.flatShading=!0,i.side=Pi,i})}}render(A,e,t){let i=A.shadowMap.enabled;if(A.shadowMap.enabled=!1,Rd){let r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),A.render(e,t);for(let s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{let r=e.overrideMaterial;e.overrideMaterial=this.material,A.render(e,t),e.overrideMaterial=r}A.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let A=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of A)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Rd}static set workaroundEnabled(A){Rd=A}},aV=class extends yi{constructor(A,e,t=null){super("RenderPass",A,e),this.needsSwap=!1,this.clearPass=new Jc,this.overrideMaterialManager=t===null?null:new xx(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}get renderToScreen(){return super.renderToScreen}set renderToScreen(A){super.renderToScreen=A,this.clearPass.renderToScreen=A}get overrideMaterial(){let A=this.overrideMaterialManager;return A!==null?A.material:null}set overrideMaterial(A){let e=this.overrideMaterialManager;A!==null?e!==null?e.setMaterial(A):this.overrideMaterialManager=new xx(A):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(A){this.overrideMaterial=A}get clear(){return this.clearPass.enabled}set clear(A){this.clearPass.enabled=A}getSelection(){return this.selection}setSelection(A){this.selection=A}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(A){this.ignoreBackground=A}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(A){this.skipShadowMapUpdate=A}getClearPass(){return this.clearPass}render(A,e,t,i,r){let s=this.scene,a=this.camera,n=this.selection,o=a.layers.mask,l=s.background,u=A.shadowMap.autoUpdate,h=this.renderToScreen?null:e;n!==null&&a.layers.set(n.getLayer()),this.skipShadowMapUpdate&&(A.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(A,e),A.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(A,s,a):A.render(s,a),a.layers.mask=o,s.background=l,A.shadowMap.autoUpdate=u}},wx=class extends yi{constructor(A,e,{resolutionScale:t=1,width:i=Nt.AUTO_SIZE,height:r=Nt.AUTO_SIZE,renderTarget:s}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new aV(A,e,new Kx({depthPacking:zx}));let a=this.renderPass;a.skipShadowMapUpdate=!0,a.ignoreBackground=!0;let n=a.getClearPass();n.overrideClearColor=new GA(16777215),n.overrideClearAlpha=1,this.renderTarget=s,this.renderTarget===void 0&&(this.renderTarget=new We(1,1,{minFilter:Fe,magFilter:Fe,stencilBuffer:!1}),this.renderTarget.texture.name="DepthPass.Target");let o=this.resolution=new Nt(this,i,r,t);o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(A){this.resolution.scale=A}render(A,e,t,i,r){let s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(A,s)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e),this.renderTarget.setSize(t.width,t.height)}},ce={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},nV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}",oV="vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}",lV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}",hV="float blend(const in float x,const in float y){return(y==0.0)? y : max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",cV="float blend(const in float x,const in float y){return(y==1.0)? y : min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",uV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}",dV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}",pV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}",fV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}",mV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}",gV="float blend(const in float x,const in float y){return(y>0.0)? min(x/y,1.0): 1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",vV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}",yV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}",xV="float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",wV="float blend(const in float x,const in float y){return(y==1.0)? y : min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",bV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}",SV="float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",MV="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}",EV=new Map([[ce.SKIP,null],[ce.ADD,nV],[ce.ALPHA,oV],[ce.AVERAGE,lV],[ce.COLOR_BURN,hV],[ce.COLOR_DODGE,cV],[ce.DARKEN,uV],[ce.DIFFERENCE,dV],[ce.EXCLUSION,pV],[ce.LIGHTEN,fV],[ce.MULTIPLY,mV],[ce.DIVIDE,gV],[ce.NEGATION,vV],[ce.NORMAL,yV],[ce.OVERLAY,xV],[ce.REFLECT,wV],[ce.SCREEN,bV],[ce.SOFT_LIGHT,SV],[ce.SUBTRACT,MV]]),TV=class extends Ft{constructor(A,e=1){super(),this.f=A,this.opacity=new IA(e)}getOpacity(){return this.opacity.value}setOpacity(A){this.opacity.value=A}get blendFunction(){return this.f}set blendFunction(A){this.f=A,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(A){this.blendFunction=A}getShaderCode(){return EV.get(this.blendFunction)}},ar={NONE:0,DEPTH:1,CONVOLUTION:2},fr=class extends Ft{constructor(A,e,{attributes:t=ar.NONE,blendFunction:i=ce.SCREEN,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:n=null}={}){super(),this.name=A,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=n,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new TV(i),this.blendMode.addEventListener("change",o=>this.setChanged())}getName(){return this.name}setRenderer(A){this.renderer=A}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(A){this.attributes=A,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(A){this.fragmentShader=A,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(A){this.vertexShader=A,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(A,e=Rr){}update(A,e,t){}setSize(A,e){}initialize(A,e,t){}dispose(){for(let A of Object.keys(this)){let e=this[A];if(e!==null&&typeof e.dispose=="function"){if(e instanceof Qs||e===this.renderer)continue;this[A].dispose()}}}};function bx(A,e,t){for(let i of e){let r="$1"+A+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function CV(A,e,t,i,r,s,a){let n=new Map([["fragment",e.getFragmentShader()],["vertex",e.getVertexShader()]]),o=n.get("fragment")!==void 0&&/mainImage/.test(n.get("fragment")),l=n.get("fragment")!==void 0&&/mainUv/.test(n.get("fragment")),u=[],h=[],c=!1,d=!1;if(n.get("fragment")===void 0)console.error("Missing fragment shader",e);else if(l&&(a&ar.CONVOLUTION)!==0)console.error("Effects that transform UV coordinates are incompatible with convolution effects",e);else if(!o&&!l)console.error("The fragment shader contains neither a mainImage nor a mainUv function",e);else{let f=/(?:\w+\s+(\w+)\([\w\s,]*\)\s*{[^}]+})/g,m=tf.Section;if(l){let g=`	${A}MainUv(UV);
`;t.set(m.FRAGMENT_MAIN_UV,t.get(m.FRAGMENT_MAIN_UV)+g),c=!0}if(n.get("vertex")!==null&&/mainSupport/.test(n.get("vertex"))){let g=`	${A}MainSupport(`;g+=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n.get("vertex"))?`vUv);
`:`);
`,t.set(m.VERTEX_MAIN_SUPPORT,t.get(m.VERTEX_MAIN_SUPPORT)+g),u=u.concat([...n.get("vertex").matchAll(/(?:varying\s+\w+\s+(\w*))/g)].map(v=>v[1])),h=h.concat(u).concat([...n.get("vertex").matchAll(f)].map(v=>v[1]))}h=h.concat([...n.get("fragment").matchAll(f)].map(g=>g[1])),h=h.concat([...e.defines.keys()].map(g=>g.replace(/\([\w\s,]*\)/g,""))),h=h.concat([...e.uniforms.keys()]),e.uniforms.forEach((g,v)=>s.set(A+v.charAt(0).toUpperCase()+v.slice(1),g)),e.defines.forEach((g,v)=>r.set(A+v.charAt(0).toUpperCase()+v.slice(1),g)),bx(A,h,r),bx(A,h,n);let p=e.blendMode;if(i.set(p.blendFunction,p),o){let g=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/,v=`${A}MainImage(color0, UV, `;(a&ar.DEPTH)!==0&&g.test(n.get("fragment"))&&(v+="depth, ",d=!0),v+=`color1);
	`;let x=A+"BlendOpacity";s.set(x,p.opacity),v+=`color0 = blend${p.blendFunction}(color0, color1, ${x});

	`,t.set(m.FRAGMENT_MAIN_IMAGE,t.get(m.FRAGMENT_MAIN_IMAGE)+v),v=`uniform float ${x};

`,t.set(m.FRAGMENT_HEAD,t.get(m.FRAGMENT_HEAD)+v)}t.set(m.FRAGMENT_HEAD,t.get(m.FRAGMENT_HEAD)+n.get("fragment")+`
`),n.get("vertex")!==null&&t.set(m.VERTEX_HEAD,t.get(m.VERTEX_HEAD)+n.get("vertex")+`
`)}return{varyings:u,transformedUv:c,readDepth:d}}var Nd=class extends yi{constructor(A,...e){super("EffectPass"),this.fullscreenMaterial=new tf(null,null,null,A),this.effects=e.sort((t,i)=>i.attributes-t.attributes),this.skipRendering=!1,this.uniformCount=0,this.varyingCount=0,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(A){this.fullscreenMaterial.encodeOutput=A}get dithering(){return this.fullscreenMaterial.dithering}set dithering(A){let e=this.fullscreenMaterial;e.dithering=A,e.needsUpdate=!0}verifyResources(){let A=this.renderer.capabilities,e=Math.min(A.maxFragmentUniforms,A.maxVertexUniforms);this.uniformCount>e&&console.warn("The current rendering context doesn't support more than "+e+" uniforms, but "+this.uniformCount+" were defined"),e=A.maxVaryings,this.varyingCount>e&&console.warn("The current rendering context doesn't support more than "+e+" varyings, but "+this.varyingCount+" were defined")}updateMaterial(){let A=tf.Section,e=new Map([[A.FRAGMENT_HEAD,""],[A.FRAGMENT_MAIN_UV,""],[A.FRAGMENT_MAIN_IMAGE,""],[A.VERTEX_HEAD,""],[A.VERTEX_MAIN_SUPPORT,""]]),t=new Map,i=new Map,r=new Map,s=new Set,a=0,n=0,o=0,l=!1,u=!1;for(let c of this.effects)if(c.blendMode.blendFunction===ce.SKIP)o|=c.getAttributes()&ar.DEPTH;else if((o&c.getAttributes()&ar.CONVOLUTION)!==0)console.error("Convolution effects cannot be merged",c);else{o|=c.getAttributes();let d="e"+a++,f=CV(d,c,e,t,i,r,o);if(n+=f.varyings.length,l=l||f.transformedUv,u=u||f.readDepth,c.extensions!==null)for(let m of c.extensions)s.add(m)}let h=/\bblend\b/g;for(let c of t.values()){let d=c.getShaderCode().replace(h,`blend${c.blendFunction}`);e.set(A.FRAGMENT_HEAD,e.get(A.FRAGMENT_HEAD)+d+`
`)}if((o&ar.DEPTH)!==0){if(u){let c=`float depth = readDepth(UV);

	`;e.set(A.FRAGMENT_MAIN_IMAGE,c+e.get(A.FRAGMENT_MAIN_IMAGE))}this.needsDepthTexture=this.getDepthTexture()===null}else this.needsDepthTexture=!1;if(l){let c=`vec2 transformedUv = vUv;
`;e.set(A.FRAGMENT_MAIN_UV,c+e.get(A.FRAGMENT_MAIN_UV)),i.set("UV","transformedUv")}else i.set("UV","vUv");e.forEach((c,d,f)=>f.set(d,c.trim().replace(/^#/,`
#`))),this.uniformCount=r.size,this.varyingCount=n,this.skipRendering=a===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderParts(e).setExtensions(s).setUniforms(r).setDefines(i)}recompile(){this.updateMaterial(),this.verifyResources()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(A,e=Rr){this.fullscreenMaterial.depthBuffer=A,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(A,e)}render(A,e,t,i,r){for(let s of this.effects)s.update(A,e,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i,A.setRenderTarget(this.renderToScreen?null:t),A.render(this.scene,this.camera)}}setSize(A,e){this.fullscreenMaterial.setSize(A,e);for(let t of this.effects)t.setSize(A,e)}initialize(A,e,t){this.renderer=A;for(let i of this.effects)i.initialize(A,e,t),i.addEventListener("change",r=>this.handleEvent(r));this.updateMaterial(),this.verifyResources(),t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let A of this.effects)A.dispose()}handleEvent(A){switch(A.type){case"change":this.recompile();break}}},DV=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],PS=class extends yi{constructor({resolutionScale:A=.5,width:e=Nt.AUTO_SIZE,height:t=Nt.AUTO_SIZE,kernelSize:i=Tm.LARGE}={}){super("KawaseBlurPass"),this.renderTargetA=new We(1,1,{minFilter:ge,magFilter:ge,stencilBuffer:!1,depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let r=this.resolution=new Nt(this,e,t,A);r.addEventListener("change",s=>this.setSize(r.baseWidth,r.baseHeight)),this.blurMaterial=new yx,this.ditheredBlurMaterial=new yx,this.ditheredBlurMaterial.uniforms.scale=this.blurMaterial.uniforms.scale,this.ditheredBlurMaterial.dithering=!0,this.dithering=!1,this.kernelSize=i}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(A){this.resolution.preferredWidth=A}get height(){return this.resolution.height}set height(A){this.resolution.preferredHeight=A}get scale(){return this.blurMaterial.scale}set scale(A){this.blurMaterial.scale=A}getScale(){return this.blurMaterial.scale}setScale(A){this.blurMaterial.scale=A}getKernelSize(){return this.kernelSize}setKernelSize(A){this.kernelSize=A}getResolutionScale(){return this.resolution.scale}setResolutionScale(A){this.resolution.scale=A}render(A,e,t,i,r){let s=this.scene,a=this.camera,n=this.renderTargetA,o=this.renderTargetB,l=DV[this.kernelSize],u=this.blurMaterial,h=e,c,d;for(this.fullscreenMaterial=u,c=0,d=l.length-1;c<d;++c){let f=(c&1)===0?n:o;u.kernel=l[c],u.inputBuffer=h.texture,A.setRenderTarget(f),A.render(s,a),h=f}this.dithering&&(u=this.ditheredBlurMaterial,this.fullscreenMaterial=u),u.kernel=l[c],u.inputBuffer=h.texture,A.setRenderTarget(this.renderToScreen?null:t),A.render(s,a)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e);let i=t.width,r=t.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(i,r),this.ditheredBlurMaterial.setSize(i,r)}initialize(A,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==yt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.ditheredBlurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):A.outputEncoding===re&&(this.renderTargetA.texture.encoding=re,this.renderTargetB.texture.encoding=re))}static get AUTO_SIZE(){return Nt.AUTO_SIZE}},PV=class extends yi{constructor({width:A=Nt.AUTO_SIZE,height:e=Nt.AUTO_SIZE,renderTarget:t,luminanceRange:i,colorOutput:r}={}){super("LuminancePass"),this.fullscreenMaterial=new Kj(r,i),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new We(1,1,{minFilter:ge,magFilter:ge,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target",this.renderTarget.texture.generateMipmaps=!1);let s=this.resolution=new Nt(this,A,e);s.addEventListener("change",a=>this.setSize(s.baseWidth,s.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(A,e,t,i,r){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,A.setRenderTarget(this.renderToScreen?null:this.renderTarget),A.render(this.scene,this.camera)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e),this.renderTarget.setSize(t.width,t.height)}initialize(A,e,t){t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},LV=class extends yi{constructor(A,e){super("MaskPass",A,e),this.needsSwap=!1,this.clearPass=new Jc(!1,!1,!0),this.inverse=!1}get inverted(){return this.inverse}set inverted(A){this.inverse=A}get clear(){return this.clearPass.enabled}set clear(A){this.clearPass.enabled=A}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(A){this.inverted=A}render(A,e,t,i,r){let s=A.getContext(),a=A.state.buffers,n=this.scene,o=this.camera,l=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(A,null):(l.render(A,e),l.render(A,t))),this.renderToScreen?(A.setRenderTarget(null),A.render(n,o)):(A.setRenderTarget(e),A.render(n,o),A.setRenderTarget(t),A.render(n,o)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},As=class extends yi{constructor(A,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=A,this.inputBufferUniform=null,this.setInput(e)}setInput(A){if(this.inputBufferUniform=null,this.fullscreenMaterial!==null){let e=this.fullscreenMaterial.uniforms;e!==void 0&&e[A]!==void 0&&(this.inputBufferUniform=e[A])}}render(A,e,t,i,r){this.inputBufferUniform!==null&&e!==null&&(this.inputBufferUniform.value=e.texture),A.setRenderTarget(this.renderToScreen?null:t),A.render(this.scene,this.camera)}initialize(A,e,t){t!==void 0&&t!==yt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},zd=1/1e3,_V=1e3,OV=class{constructor(){this.previousTime=0,this.currentTime=0,this.delta=0,this.fixedDelta=1e3/60,this.elapsed=0,this.timescale=1,this.fixedDeltaEnabled=!1,this.autoReset=!1}setFixedDeltaEnabled(A){return this.fixedDeltaEnabled=A,this}isAutoResetEnabled(A){return this.autoReset}setAutoResetEnabled(A){return typeof document<"u"&&document.hidden!==void 0&&(A?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this.autoReset=A),this}getDelta(){return this.delta*zd}getFixedDelta(){return this.fixedDelta*zd}setFixedDelta(A){return this.fixedDelta=A*_V,this}getElapsed(){return this.elapsed*zd}getTimescale(){return this.timescale}setTimescale(A){return this.timescale=A,this}update(A){return this.fixedDeltaEnabled?this.delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=A!==void 0?A:performance.now(),this.delta=this.currentTime-this.previousTime),this.delta*=this.timescale,this.elapsed+=this.delta,this}reset(){return this.delta=0,this.elapsed=0,this.currentTime=performance.now(),this}handleEvent(A){document.hidden||(this.currentTime=performance.now())}dispose(){this.setAutoResetEnabled(!1)}},BV=class{constructor(A=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new bc,this.depthTexture=null,this.passes=[],this.timer=new OV,this.autoRenderToScreen=!0,this.setRenderer(A)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(A){let e=this.inputBuffer,t=this.multisampling;t>0&&A>0?(this.inputBuffer.samples=A,this.outputBuffer.samples=A,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==A&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,A),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(A){if(this.renderer=A,A!==null){let e=A.getSize(new H),t=A.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===yt&&A.outputEncoding===re&&(this.inputBuffer.texture.encoding=re,this.outputBuffer.texture.encoding=re,this.inputBuffer.dispose(),this.outputBuffer.dispose()),A.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(A,t,i)}}replaceRenderer(A,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(A),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(A.domElement)),t}createDepthTexture(){let A=this.depthTexture=new df;return this.inputBuffer.depthTexture=A,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(A.format=ea,A.type=Ws):A.type=ts,A}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let A of this.passes)A.setDepthTexture(null)}}createBuffer(A,e,t,i){let r=this.renderer,s=r===null?new H:r.getDrawingBufferSize(new H),a={minFilter:ge,magFilter:ge,stencilBuffer:e,depthBuffer:A,type:t},n;return i>0?(n=Number(Jo.replace(/\D+/g,""))<138?new HP(s.width,s.height,a):new We(s.width,s.height,a),n.ignoreDepthForMultisampleCopy=!1,n.samples=i):n=new We(s.width,s.height,a),t===yt&&r!==null&&r.outputEncoding===re&&(n.texture.encoding=re),n.texture.name="EffectComposer.Buffer",n.texture.generateMipmaps=!1,n}addPass(A,e){let t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new H),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(A.setRenderer(i),A.setSize(r.width,r.height),A.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),A.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,A):t.push(A),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),A.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let n=this.createDepthTexture();for(A of t)A.setDepthTexture(n)}else A.setDepthTexture(this.depthTexture)}removePass(A){let e=this.passes,t=e.indexOf(A);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){let i=(r,s)=>r||s.needsDepthTexture;e.reduce(i,!1)||(A.getDepthTexture()===this.depthTexture&&A.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(A.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let A=this.passes;this.deleteDepthTexture(),A.length>0&&(this.autoRenderToScreen&&(A[A.length-1].renderToScreen=!1),this.passes=[])}render(A){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,r=this.outputBuffer,s=!1,a,n,o;A===void 0&&(A=this.timer.update().getDelta());for(let l of this.passes)l.enabled&&(l.render(e,i,r,A,s),l.needsSwap&&(s&&(t.renderToScreen=l.renderToScreen,a=e.getContext(),n=e.state.buffers.stencil,n.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,r,A,s),n.setFunc(a.EQUAL,1,4294967295)),o=i,i=r,r=o),l instanceof LV?s=!0:l instanceof sV&&(s=!1))}setSize(A,e,t){let i=this.renderer;if(A===void 0||e===void 0){let s=i.getSize(new H);A=s.width,e=s.height}i.setSize(A,e,t);let r=i.getDrawingBufferSize(new H);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(let s of this.passes)s.setSize(r.width,r.height)}reset(){let A=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(A)}dispose(){for(let A of this.passes)A.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},Tm={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},IV=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=clamp(texture2D(map,uv)*intensity,0.0,1.0);}`,RV=class extends fr{constructor({blendFunction:A=ce.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,resolutionScale:i=.5,intensity:r=1,width:s=Nt.AUTO_SIZE,height:a=Nt.AUTO_SIZE,kernelSize:n=Tm.LARGE}={}){super("BloomEffect",IV,{blendFunction:A,uniforms:new Map([["map",new IA(null)],["intensity",new IA(r)]])}),this.renderTarget=new We(1,1,{minFilter:ge,magFilter:ge,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.renderTarget.texture.generateMipmaps=!1,this.uniforms.get("map").value=this.renderTarget.texture,this.luminancePass=new PV({renderTarget:this.renderTarget,colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothingFactor=t,this.blurPass=new PS({resolutionScale:i,width:s,height:a,kernelSize:n});let o=this.blurPass.getResolution();o.addEventListener("change",l=>this.setSize(o.baseWidth,o.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}get resolution(){return this.blurPass.resolution}getResolution(){return this.blurPass.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(A){this.resolution.preferredWidth=A}get height(){return this.resolution.height}set height(A){this.resolution.preferredHeight=A}get dithering(){return this.blurPass.dithering}set dithering(A){this.blurPass.dithering=A}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(A){this.blurPass.kernelSize=A}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(A){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(A){this.uniforms.get("intensity").value=A}getIntensity(){return this.intensity}setIntensity(A){this.intensity=A}getResolutionScale(){return this.resolution.scale}setResolutionScale(A){this.resolution.scale=A}update(A,e,t){let i=this.renderTarget;this.luminancePass.enabled?(this.luminancePass.render(A,e,i),this.blurPass.render(A,i,i)):this.blurPass.render(A,e,i)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e),this.renderTarget.setSize(t.width,t.height),this.luminancePass.resolution.copy(t)}initialize(A,e,t){this.blurPass.initialize(A,e,t),t!==void 0&&(this.renderTarget.texture.type=t,A.outputEncoding===re&&(this.renderTarget.texture.encoding=re))}},NV="uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(min(color+vec3(0.5),1.0),inputColor.a);}",zV=class extends fr{constructor({blendFunction:A=ce.NORMAL,brightness:e=0,contrast:t=0}={}){super("BrightnessContrastEffect",NV,{blendFunction:A,uniforms:new Map([["brightness",new IA(e)],["contrast",new IA(t)]])})}get brightness(){return this.uniforms.get("brightness").value}set brightness(A){this.uniforms.get("brightness").value=A}getBrightness(A){return this.brightness}setBrightness(A){this.brightness=A}get contrast(){return this.uniforms.get("contrast").value}set contrast(A){this.uniforms.get("contrast").value=A}getContrast(A){return this.contrast}setContrast(A){this.contrast=A}},FV="void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(vec3(average(inputColor.rgb)),inputColor.a);}",UV=class extends fr{constructor(A=ce.NORMAL){super("ColorAverageEffect",FV,{blendFunction:A})}},kV="varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=texture2D(inputBuffer,vUvR).ra;vec2 ba=texture2D(inputBuffer,vUvB).ba;outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}",GV="uniform vec2 offset;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vUvR=uv+shift;vUvB=uv-shift;}",jV=class extends fr{constructor({blendFunction:A=ce.NORMAL,offset:e=new H(.001,5e-4)}={}){super("ChromaticAberrationEffect",kV,{vertexShader:GV,blendFunction:A,attributes:ar.CONVOLUTION,uniforms:new Map([["offset",new IA(e)]])})}get offset(){return this.uniforms.get("offset").value}set offset(A){this.uniforms.get("offset").value=A}getOffset(){return this.offset}setOffset(A){this.offset=A}},VV=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);float CoCNear=texture2D(nearCoCBuffer,uv).r;CoCNear=min(CoCNear*scale,1.0);vec4 result=inputColor*(1.0-colorFar.a)+colorFar;result=mix(result,colorNear,CoCNear);outputColor=result;}`,HV=class extends fr{constructor(A,{blendFunction:e=ce.NORMAL,worldFocusDistance:t,worldFocusRange:i,focusDistance:r=0,focalLength:s=.1,focusRange:a=s,bokehScale:n=1,width:o=Nt.AUTO_SIZE,height:l=Nt.AUTO_SIZE}={}){super("DepthOfFieldEffect",VV,{blendFunction:e,attributes:ar.DEPTH,uniforms:new Map([["nearColorBuffer",new IA(null)],["farColorBuffer",new IA(null)],["nearCoCBuffer",new IA(null)],["scale",new IA(1)]])}),this.camera=A,this.renderTarget=new We(1,1,{minFilter:ge,magFilter:ge,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="DoF.Intermediate",this.renderTarget.texture.generateMipmaps=!1,this.renderTargetMasked=this.renderTarget.clone(),this.renderTargetMasked.texture.name="DoF.Masked.Far",this.renderTargetNear=this.renderTarget.clone(),this.renderTargetNear.texture.name="DoF.Bokeh.Near",this.uniforms.get("nearColorBuffer").value=this.renderTargetNear.texture,this.renderTargetFar=this.renderTarget.clone(),this.renderTargetFar.texture.name="DoF.Bokeh.Far",this.uniforms.get("farColorBuffer").value=this.renderTargetFar.texture,this.renderTargetCoC=this.renderTarget.clone(),this.renderTargetCoC.texture.name="DoF.CoC",this.renderTargetCoCBlurred=this.renderTargetCoC.clone(),this.renderTargetCoCBlurred.texture.name="DoF.CoC.Blurred",this.uniforms.get("nearCoCBuffer").value=this.renderTargetCoCBlurred.texture,this.cocPass=new As(new kj(A));let u=this.cocMaterial;u.focusDistance=r,u.focusRange=a,t!==void 0&&(u.worldFocusDistance=t),i!==void 0&&(u.worldFocusRange=i),this.blurPass=new PS({kernelSize:Tm.MEDIUM,width:o,height:l});let h=this.blurPass.getResolution();h.addEventListener("change",d=>this.setSize(h.getBaseWidth(),h.getBaseHeight())),this.maskPass=new As(new $j(this.renderTargetCoC.texture));let c=this.maskPass.fullscreenMaterial;c.maskFunction=DS.MULTIPLY,c.colorChannel=TS.GREEN,this.bokehNearBasePass=new As(new vh(!1,!0)),this.bokehNearBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehNearFillPass=new As(new vh(!0,!0)),this.bokehNearFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehFarBasePass=new As(new vh(!1,!1)),this.bokehFarBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.bokehFarFillPass=new As(new vh(!0,!1)),this.bokehFarFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.target=null,this.bokehScale=n}get cocTexture(){return this.renderTargetCoC.texture}get cocMaterial(){return this.cocPass.fullscreenMaterial}get circleOfConfusionMaterial(){return this.cocMaterial}getCircleOfConfusionMaterial(){return this.circleOfConfusionMaterial}getBlurPass(){return this.blurPass}get resolution(){return this.blurPass.getResolution()}getResolution(){return this.blurPass.getResolution()}get bokehScale(){return this.uniforms.get("scale").value}set bokehScale(A){let e=[this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass];for(let t of e)t.fullscreenMaterial.setScale(A);this.maskPass.fullscreenMaterial.setStrength(A),this.uniforms.get("scale").value=A}getBokehScale(){return this.bokehScale}setBokehScale(A){this.bokehScale=A}getTarget(){return this.target}setTarget(A){this.target=A}calculateFocusDistance(A){let e=this.camera,t=e.position.distanceTo(A);return ef(-t,e.near,e.far)}setDepthTexture(A,e=Rr){this.circleOfConfusionMaterial.depthBuffer=A,this.circleOfConfusionMaterial.depthPacking=e}update(A,e,t){let i=this.renderTarget,r=this.renderTargetCoC,s=this.renderTargetCoCBlurred,a=this.renderTargetMasked;if(this.target!==null){let n=this.calculateFocusDistance(this.target);this.circleOfConfusionMaterial.focusDistance=n}this.cocPass.render(A,null,r),this.blurPass.render(A,r,s),this.maskPass.render(A,e,a),this.bokehFarBasePass.render(A,a,i),this.bokehFarFillPass.render(A,i,this.renderTargetFar),this.bokehNearBasePass.render(A,e,i),this.bokehNearFillPass.render(A,i,this.renderTargetNear)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e);let i=t.width,r=t.height,s=[this.cocPass,this.blurPass,this.maskPass,this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass];s.push(this.renderTargetCoC,this.renderTargetMasked),s.forEach(a=>a.setSize(A,e)),s=[this.renderTarget,this.renderTargetNear,this.renderTargetFar,this.renderTargetCoCBlurred],s.forEach(a=>a.setSize(i,r)),[this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass].forEach(a=>a.fullscreenMaterial.setSize(i,r))}initialize(A,e,t){[this.cocPass,this.maskPass,this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass].forEach(i=>i.initialize(A,e,t)),this.blurPass.initialize(A,e,yt),t!==void 0&&(this.renderTarget.texture.type=t,this.renderTargetNear.texture.type=t,this.renderTargetFar.texture.type=t,this.renderTargetMasked.texture.type=t,A.outputEncoding===re&&(this.renderTarget.texture.encoding=re,this.renderTargetNear.texture.encoding=re,this.renderTargetFar.texture.encoding=re,this.renderTargetMasked.texture.encoding=re))}};new T;new TA;var WV="uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}",YV=class extends fr{constructor({blendFunction:A=ce.NORMAL,hue:e=0,saturation:t=0}={}){super("HueSaturationEffect",WV,{blendFunction:A,uniforms:new Map([["hue",new IA(new T)],["saturation",new IA(t)]])}),this.hue=e}get saturation(){return this.uniforms.get("saturation").value}set saturation(A){this.uniforms.get("saturation").value=A}getSaturation(){return this.saturation}setSaturation(A){this.saturation=A}get hue(){let A=this.uniforms.get("hue").value;return Math.acos((A.x*3-1)/2)}set hue(A){let e=Math.sin(A),t=Math.cos(A);this.uniforms.get("hue").value.set((2*t+1)/3,(-Math.sqrt(3)*e-t+1)/3,(Math.sqrt(3)*e-t+1)/3)}getHue(){return this.hue}setHue(A){this.hue=A}};new GA;var XV=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*time));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,QV=class extends fr{constructor({blendFunction:A=ce.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",XV,{blendFunction:A}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(A){this.premultiply!==A&&(A?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(A){this.premultiply=A}},qV="uniform bool active;uniform vec2 d;void mainUv(inout vec2 uv){if(active){uv=vec2(d.x*(floor(uv.x/d.x)+0.5),d.y*(floor(uv.y/d.y)+0.5));}}",ZV=class extends fr{constructor(A=30){super("PixelationEffect",qV,{uniforms:new Map([["active",new IA(!1)],["d",new IA(new H)]])}),this.resolution=new H,this.d=0,this.granularity=A}get granularity(){return this.d}set granularity(A){let e=Math.floor(A);e%2>0&&(e+=1),this.d=e,this.uniforms.get("active").value=e>0,this.setSize(this.resolution.width,this.resolution.height)}getGranularity(){return this.granularity}setGranularity(A){this.granularity=A}setSize(A,e){this.resolution.set(A,e),this.uniforms.get("d").value.setScalar(this.d).divide(this.resolution)}};new T;new T;var Sx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",Mx="data:image/png;base64,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",KV="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",JV="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Ga={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},$V=class extends fr{constructor({preset:A=Ga.MEDIUM,edgeDetectionMode:e=Em.COLOR,predicationMode:t=CS.DISABLED}={}){super("SMAAEffect",KV,{vertexShader:JV,blendFunction:ce.NORMAL,attributes:ar.CONVOLUTION|ar.DEPTH,uniforms:new Map([["weightMap",new IA(null)]])});let i,r;arguments.length>1&&(i=arguments[0],r=arguments[1],arguments.length>2&&(A=arguments[2]),arguments.length>3&&(e=arguments[3])),this.renderTargetEdges=new We(1,1,{minFilter:ge,stencilBuffer:!1,depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Jc(!0,!1,!1),this.clearPass.overrideClearColor=new GA(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new As(new Xj),this.edgeDetectionMaterial.edgeDetectionMode=e,this.edgeDetectionMaterial.predicationMode=t,this.weightsPass=new As(new tV);let s=new h1;s.onLoad=()=>{let a=new xt(i);a.name="SMAA.Search",a.magFilter=Fe,a.minFilter=Fe,a.generateMipmaps=!1,a.needsUpdate=!0,a.flipY=!0,this.weightsMaterial.searchTexture=a;let n=new xt(r);n.name="SMAA.Area",n.magFilter=ge,n.minFilter=ge,n.generateMipmaps=!1,n.needsUpdate=!0,n.flipY=!1,this.weightsMaterial.areaTexture=n,this.dispatchEvent({type:"load"})},s.itemStart("search"),s.itemStart("area"),i!==void 0&&r!==void 0?(s.itemEnd("search"),s.itemEnd("area")):typeof Image<"u"&&(i=new Image,r=new Image,i.addEventListener("load",()=>s.itemEnd("search")),r.addEventListener("load",()=>s.itemEnd("area")),i.src=Sx,r.src=Mx),this.applyPreset(A)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(A){this.edgeDetectionMaterial.edgeDetectionThreshold=A}setOrthogonalSearchSteps(A){this.weightsMaterial.orthogonalSearchSteps=A}applyPreset(A){let e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(A){case Ga.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ga.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ga.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Ga.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(A,e=Rr){this.edgeDetectionMaterial.depthBuffer=A,this.edgeDetectionMaterial.depthPacking=e}update(A,e,t){this.clearPass.render(A,this.renderTargetEdges),this.edgeDetectionPass.render(A,e,this.renderTargetEdges),this.weightsPass.render(A,this.renderTargetEdges,this.renderTargetWeights)}setSize(A,e){this.edgeDetectionMaterial.setSize(A,e),this.weightsMaterial.setSize(A,e),this.renderTargetEdges.setSize(A,e),this.renderTargetWeights.setSize(A,e)}dispose(){let{searchTexture:A,areaTexture:e}=this.weightsMaterial;A!==null&&e!==null&&(A.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return Sx}static get areaImageDataURL(){return Mx}},AH=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,yh={DEFAULT:0,ESKIL:1},eH=class extends fr{constructor({blendFunction:A=ce.NORMAL,technique:e=yh.DEFAULT,eskil:t=!1,offset:i=.5,darkness:r=.5}={}){super("VignetteEffect",AH,{blendFunction:A,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new IA(i)],["darkness",new IA(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(A){this.technique!==A&&(this.defines.set("VIGNETTE_TECHNIQUE",A.toFixed(0)),this.setChanged())}get eskil(){return this.technique===yh.ESKIL}set eskil(A){this.technique=A?yh.ESKIL:yh.DEFAULT}getTechnique(){return this.technique}setTechnique(A){this.technique=A}get offset(){return this.uniforms.get("offset").value}set offset(A){this.uniforms.get("offset").value=A}getOffset(){return this.offset}setOffset(A){this.offset=A}get darkness(){return this.uniforms.get("darkness").value}set darkness(A){this.uniforms.get("darkness").value=A}getDarkness(){return this.darkness}setDarkness(A){this.darkness=A}},Nr=class{constructor(A,e){this.enabled=!1,this.effect=new A(e),Object.defineProperty(this,"opacity",{enumerable:!0,set(t){this.effect.blendMode.opacity.value=t},get(){return this.effect.blendMode.opacity.value}}),Object.defineProperty(this,"blendFunction",{enumerable:!0,set(t){this.effect.blendMode.setBlendFunction(Number(t))},get(){return this.effect.blendMode.blendFunction}}),this.blendFunction=ce.NORMAL}},tH=class extends Nr{constructor(){super(RV),this.blendFunction=ce.SCREEN}set intensity(A){this.effect.intensity=A}get intensity(){return this.effect.intensity}set luminanceThreshold(A){this.effect.luminanceMaterial.threshold=A}get luminanceThreshold(){return this.effect.luminanceMaterial.threshold}set luminanceSmoothing(A){this.effect.luminanceMaterial.smoothing=A}get luminanceSmoothing(){return this.effect.luminanceMaterial.smoothing}set blurScale(A){this.effect.blurPass.scale=A}get blurScale(){return this.effect.blurPass.scale}set kernelSize(A){this.effect.blurPass.kernelSize=A}get kernelSize(){return this.effect.blurPass.kernelSize}},iH=class extends Nr{constructor(){super(zV)}set contrast(A){this.effect.uniforms.get("contrast").value=A}get contrast(){return this.effect.uniforms.get("contrast").value}set brightness(A){this.effect.uniforms.get("brightness").value=A}get brightness(){return this.effect.uniforms.get("brightness").value}},rH=class extends Nr{constructor(){super(jV),this.effect.offset=new H(.01,.01)}set offset(A){this.effect.offset.set(A[0]/1e3,A[1]/1e3)}get offset(){return[this.effect.offset.x*1e3,this.effect.offset.y*1e3]}},sH=class extends Nr{constructor(){super(UV)}},aH=class extends Nr{constructor(){super(YV),this._hue=0}set hue(A){this._hue=A,this.effect.setHue(A)}get hue(){return this._hue}set saturation(A){this.effect.uniforms.get("saturation").value=A}get saturation(){return this.effect.uniforms.get("saturation").value}},nH=class extends Nr{constructor(){super(QV),this.blendFunction=ce.OVERLAY}},oH=class extends Nr{constructor(){super(eH)}get eskil(){return this.effect.eskil}set eskil(A){this.effect.eskil=A}get darkness(){return this.effect.uniforms.get("darkness").value}set darkness(A){this.effect.uniforms.get("darkness").value=A}get offset(){return this.effect.uniforms.get("offset").value}set offset(A){this.effect.uniforms.get("offset").value=A}},lH=class extends Nr{constructor(A){super(HV,A)}set focalLength(A){this.effect.circleOfConfusionMaterial.uniforms.focalLength.value=A}get focalLength(){return this.effect.circleOfConfusionMaterial.uniforms.focalLength.value}set focusDistance(A){this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value=A}get focusDistance(){return this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value}get bokehScale(){return this.effect.bokehScale}set bokehScale(A){this.effect.bokehScale=A}},hH=class extends Nr{constructor(){super(ZV)}get granularity(){return this.effect.getGranularity()}set granularity(A){this.effect.setGranularity(A)}},cH=class extends yi{constructor(A,e,t){super("TransmissionPass",A,e),this.copyPass=new bc(t.transmissionRenderTarget),this.depthPass=new wx(A,e,{renderTarget:t.transmissionDepthTarget}),this.needsSwap=!1}updatePasses(A){this.copyPass=new bc(A.transmissionRenderTarget),this.depthPass=new wx(this.scene,this.camera,{renderTarget:A.transmissionDepthTarget})}setCamera(A){this.camera=A}setScene(A){this.scene=A}render(A,e,t){let i=this.camera.layers.mask;this.copyPass.render(A,e,t),this.camera.layers.disable(3),this.depthPass.render(A,e,t),A.shadowMap.needsUpdate=!1,A.shadowMap.autoUpdate=!1;let r=this.renderToScreen?null:e;this.camera.layers.set(3),A.setRenderTarget(r),A.render(this.scene,this.camera),this.camera.layers.mask=i}},Ex=new Qs,uH=new At({transparent:!0,vertexShader:`
        void main() {
            gl_Position = vec4(0.0);
        }
    `,fragmentShader:`
        void main() {
            gl_FragColor = vec4(0.0);
        }
    `}),Fd=class extends yi{constructor(A,e){super("OpaquePass",A!=null?A:Ex,e),this.hasTransmissionPass=!1,this.clear=!0,this.needsSwap=!1,this.originalMaterials=new Map}setCamera(A){this.camera=A}setScene(A){this.scene=A!=null?A:Ex}getScene(){return this.scene}render(A,e){this.originalMaterials.clear(),this.camera.layers.enable(3),this.hasTransmissionPass&&this.scene.traverse(i=>{i.layers.isEnabled(3)&&i instanceof Ai&&(this.originalMaterials.set(i.id,i.material),i.material=uH)}),this.camera.layers.enable(8),A.shadowMap.needsUpdate=!0,A.shadowMap.autoUpdate=!0;let t=this.renderToScreen?null:e;A.setRenderTarget(t),this.clear&&A.clear(),A.render(this.scene,this.camera),this.hasTransmissionPass&&this.originalMaterials.forEach((i,r)=>{let s=this.scene.getObjectById(r);s&&(s.material=i)})}};function Tx(A,e){return e&&e.enabled&&A.push(e.effect),A}var dH=class extends Ft{constructor(A){super(),this.postprocessingState=Yo.defaultData,this._scene=new Qs,this._camera=new Ir,this.effects=new Map,this._renderToScreen=!0,this.clock=new NP,this.renderer=A,this.debug=!1,this.effects.set("bloom",new tH),this.effects.set("chromaticAberration",new rH),this.effects.set("vignette",new oH),this.effects.set("noise",new nH),this.effects.set("colorAverage",new sH),this.effects.set("hueSaturation",new aH),this.effects.set("brightnessContrast",new iH),this.effects.set("depthOfField",new lH),this.effects.set("pixelation",new hH),this.effectComposer=new BV(this.renderer),this.opaquePass=new Fd(this.scene,this.camera),this.transmissionPass=new cH(this.scene,this.camera,this.renderer),this.helperPass=new Fd(void 0,this.camera),this.helperPass.hasTransmissionPass=!1,this.helperPass.clear=!1,this.helperClearPass=new Jc(!1,!0,!1),this.helperPassOnTop=new Fd(void 0,this.camera),this.helperPassOnTop.hasTransmissionPass=!1,this.helperPassOnTop.clear=!1,this._initCopyPass(),this._initSmaa(),this._initPasses()}get scene(){return this._scene}set scene(A){this._scene=A,this.opaquePass.setScene(A),this.transmissionPass.setScene(A)}set sceneHelpers(A){this.helperPass.setScene(A)}get sceneHelpers(){return this.helperPass.getScene()}set sceneHelpersOnTop(A){this.helperPassOnTop.setScene(A)}get sceneHelpersOnTop(){return this.helperPassOnTop.getScene()}get camera(){return this._camera}set camera(A){this._camera=A,this.opaquePass.setCamera(A),this.transmissionPass.setCamera(A),this.helperPass.setCamera(A),this.helperPassOnTop.setCamera(A)}setTransmissionPassEnabled(A){this.transmissionPass.enabled=A,this.opaquePass.hasTransmissionPass=A}disableHelpers(){this.helperPass.enabled=!1,this.helperClearPass.enabled=!1,this.helperPassOnTop.enabled=!1}enableHelpers(){this.helperPass.enabled=!0,this.helperClearPass.enabled=!0,this.helperPassOnTop.enabled=!0}_initSmaa(){let A=new $V({preset:Ga.ULTRA,edgeDetectionMode:Em.COLOR}),e=()=>{A.removeEventListener("load",e),this.dispatchEvent({type:"smaaloaded"})};A.addEventListener("load",e),A.edgeDetectionMaterial.predicationMode=CS.DEPTH,A.edgeDetectionMaterial.edgeDetectionThreshold=.05,A.edgeDetectionMaterial.predicationThreshold=.002,A.edgeDetectionMaterial.predicationScale=1,this.smaaPass=new Nd(this.camera,A)}_initPasses(){var A,e;if((A=this.uvEffectPass)==null||A.dispose(),(e=this.effectPass)==null||e.dispose(),this.effectComposer.removeAllPasses(),this.transmissionPass.updatePasses(this.renderer),this.effectComposer.addPass(this.opaquePass),this.effectComposer.addPass(this.transmissionPass),this.postprocessingState.enabled){let t=[this.effects.get("pixelation")].reduce(Tx,[]);t.length>0&&(this.uvEffectPass=new Nd(this.camera,...t),this.effectComposer.addPass(this.uvEffectPass));let i=[this.effects.get("chromaticAberration"),this.effects.get("bloom"),this.effects.get("colorAverage"),this.effects.get("hueSaturation"),this.effects.get("brightnessContrast"),this.effects.get("vignette"),this.effects.get("noise")].reduce(Tx,[]);i.length>0&&(this.effectPass=new Nd(this.camera,...i),this.effectComposer.addPass(this.effectPass))}this.effectComposer.addPass(this.helperPass),this.effectComposer.addPass(this.helperClearPass),this.effectComposer.addPass(this.helperPassOnTop),this.effectComposer.addPass(this.smaaPass)}_initCopyPass(){if(this._savePass)return;let A=new H;this.renderer.getDrawingBufferSize(A),this._rt=new We(A.x,A.y,{depthBuffer:!1,stencilBuffer:!1,wrapS:Io,wrapT:Io}),this._rt.samples=0,this._savePass=new bc(this._rt,!1),this._savePass.renderToScreen=!1}get renderToScreen(){return this._renderToScreen}set renderToScreen(A){if(this._renderToScreen===A)return;let e=this.effectComposer;!e||(A===!0?(e.removePass(this._savePass),e.passes[e.passes.length-1].renderToScreen=!0,e.autoRenderToScreen=!0):(e.autoRenderToScreen=!1,e.passes[e.passes.length-1].renderToScreen=!1,this._savePass.renderToScreen=!1,this.postprocessingState.enabled||(this._savePass.needsDepthTexture=!0),e.addPass(this._savePass)),this._renderToScreen=A)}get texture(){return this._rt&&this._rt.texture}get renderTarget(){return this._rt}updatePostprocessing(A){let{enabled:e,...t}=A,i=!1;e!==this.postprocessingState.enabled&&(i=!0);for(let r of Object.entries(t)){let s=r[1],a=this.effects.get(r[0]);if(a){a.enabled!==s.enabled&&(i=!0),a.enabled=s.enabled;for(let[n,o]of Object.entries(s))a[n]=o}}this.postprocessingState=A,i&&this._initPasses()}render(){this.effectComposer.render(this.clock.getDelta())}setScissor(A,e,t,i){A instanceof ee?(this.effectComposer.inputBuffer.scissor.set(A.x,A.y,A.z,A.w),this.effectComposer.outputBuffer.scissor.set(A.x,A.y,A.z,A.w)):(this.effectComposer.inputBuffer.scissor.set(A,e,t,i),this.effectComposer.outputBuffer.scissor.set(A,e,t,i));let r=this.renderer.getPixelRatio();this.effectComposer.inputBuffer.scissor.multiplyScalar(r),this.effectComposer.outputBuffer.scissor.multiplyScalar(r),this.renderer.setScissor(A,e,t,i)}setScissorTest(A){this.effectComposer.inputBuffer.scissorTest=A,this.effectComposer.outputBuffer.scissorTest=A,this.renderer.setScissorTest(A)}setViewport(A,e,t,i){A instanceof ee?(this.effectComposer.inputBuffer.viewport.copy(A),this.effectComposer.outputBuffer.viewport.copy(A)):(this.effectComposer.inputBuffer.viewport.set(A,e,t,i),this.effectComposer.outputBuffer.viewport.set(A,e,t,i))}resize(A,e,t){if(this.effectComposer.setSize(A,e,t),this._rt){let i=this.renderer.getPixelRatio();this._rt.setSize(A*i,e*i)}}dispose(){var A,e;(A=this.uvEffectPass)==null||A.dispose(),(e=this.effectPass)==null||e.dispose(),this.effectComposer.dispose()}},Cx=new xt,pH=class extends Jx{constructor(A){super(A),this._pixelRatio=this.getPixelRatio(),this.viewportWidth=1,this.viewportHeight=1,this.resolution=new H,this.pipeline=new dH(this),this.overrideTransmission=A==null?void 0:A.overrideTransmission,this.autoClear=!1;let e=this.setPixelRatio.bind(this),t=this.setSize.bind(this);this.setPixelRatio=i=>{this._pixelRatio=i,e(i)},this.setSize=(i,r,s=!0)=>{var a,n,o;(this.viewportWidth!==i||this.viewportHeight!==r)&&(this.viewportWidth=i,this.viewportHeight=r,t(i,r,s),(a=this.normalRenderTarget)==null||a.setSize(i*this._pixelRatio,r*this._pixelRatio),(n=this.transmissionRenderTarget)==null||n.setSize(i*this._pixelRatio/2,r*this._pixelRatio/2),(o=this.transmissionDepthTarget)==null||o.setSize(i*this._pixelRatio/2,r*this._pixelRatio/2),this.pipeline.resize(i,r,s))},this._superDispose=this.dispose,this.dispose=this._currentDispose}createTransmissionRenderTarget(){this.transmissionRenderTarget===void 0&&(this.transmissionRenderTarget=new We(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{generateMipmaps:!0,minFilter:Al,magFilter:ge,wrapS:Wt,wrapT:Wt,depthBuffer:!1}),this.transmissionDepthTarget=new We(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{minFilter:Fe,magFilter:Fe,depthBuffer:!1}))}createNormalRenderTarget(){this.normalRenderTarget===void 0&&(this.normalRenderTarget=new We(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{generateMipmaps:!1,minFilter:Fe,magFilter:Fe,type:is,depthTexture:new df(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio)}))}renderNormal(A,e){this.normalRenderTarget&&(this.setClearColor(0),e.layers.enable(8),e.layers.disable(0),e.layers.disable(3),this.setRenderTarget(this.normalRenderTarget),this.clear(),e instanceof Ir?gd.uniforms.depthContrast.value=(e.far-e.near)/1e4:gd.uniforms.depthContrast.value=1,A.overrideMaterial=gd,this.render(A,e),this.setClearColor(A.bgColor,A.bgColor.a),this.setRenderTarget(null),A.overrideMaterial=A.wireframeState?Hp:null,e.layers.enable(0),e.layers.enable(3))}renderSplineScene(A,e,t,i,r){this.setClearColor(A.bgColor,A.bgColor.a),t.penumbraSize.forEach((a,n)=>{Be.penumbraSize.value[n]=a}),Be.pixelRatioNode.value=this.getPixelRatio(),this.resolution.x!==0&&this.resolution.y!==0?Be.resolution.value.set(this.resolution.x,this.resolution.y):Be.resolution.value.set(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio),this.overrideNormal!==void 0?(Be.normalRenderTarget.value=this.overrideNormal,Be.normalRenderTargetDepth.value=Cx):A.needsNormal()&&(this.createNormalRenderTarget(),Be.normalRenderTarget.value=this.normalRenderTarget.texture,Be.normalRenderTargetDepth.value=this.normalRenderTarget.depthTexture,this.renderNormal(A,e));let s=!1;if(this.overrideTransmission!==void 0)Be.transmissionRenderTarget.value=this.overrideTransmission,Be.transmissionRenderTargetDepth.value=Cx,this.pipeline.setTransmissionPassEnabled(!1);else{let a=A.needsTransmission();a&&(this.transmissionRenderTarget===void 0&&(s=!0),this.createTransmissionRenderTarget(),Be.transmissionRenderTarget.value=this.transmissionRenderTarget.texture,Be.transmissionRenderTargetDepth.value=this.transmissionDepthTarget.texture),this.pipeline.setTransmissionPassEnabled(a)}e.layers.enable(3),e.layers.enable(8),this.pipeline.sceneHelpers=i,this.pipeline.sceneHelpersOnTop=r,this.pipeline.scene=A,this.pipeline.camera=e,s&&this.pipeline.transmissionPass.updatePasses(this),this.pipeline.postprocessingState!==A.postprocessing&&this.pipeline.updatePostprocessing(A.postprocessing),this.clearAlphaOverride!==void 0&&this.setClearAlpha(this.clearAlphaOverride),A.overrideMaterial=A.wireframeState?Hp:null,this.pipeline.render()}_currentDispose(){var A,e,t,i,r;this._superDispose(),this.pipeline.dispose(),(A=this.transmissionRenderTarget)==null||A.dispose(),(e=this.transmissionDepthTarget)==null||e.dispose(),(t=this.normalRenderTarget)==null||t.dispose(),(r=(i=this.normalRenderTarget)==null?void 0:i.depthTexture)==null||r.dispose()}},fH=class{get sharedAssets(){return this.shared}constructor(A,e={}){this.shared=new Hc(A.shared,e),this.scene=new Xc(A.scene,this.sharedAssets),this.scene.switchActiveCamera(this.scene.activeCamera)}reset(A,e){this.scene.clearScene(),this.sharedAssets.reset(A.shared),this.scene.resetAfterClear(A.scene,this.sharedAssets)}dispose(){this.scene.dispose(),this.shared.dispose()}gc(){this.shared.geometryCache.startGc(),this.shared.geometryCache2.startGc(),this.scene.traverseEntity(A=>{A instanceof Ii&&A.markGeometryAsReachable(this.shared)}),this.shared.geometryCache.endGc(),this.shared.geometryCache2.endGc()}},mH=class{constructor({x:A=10,y:e=10}){this._startTime=0;let t=document.getElementById("spe-perfs");t?this.element=t:(this.element=document.createElement("div"),document.body.appendChild(this.element),this.element.style.position="absolute",this.element.style.zIndex="10000",this.element.style.fontFamily="monospace",this.element.style.background="black",this.element.style.color="white",this.element.style.padding="10px",this.element.style.opacity="0.5",this.element.style.fontSize="11px",this.element.setAttribute("id","spe-perfs")),this.element.style.left=`${A}px`,this.element.style.top=`${e}px`}dispose(){var A;(A=this.element.parentElement)==null||A.removeChild(this.element)}start(){this._startTime=performance.now()}end(){let A=performance.now()-this._startTime;this.element.innerHTML=A.toFixed(3)+" ms"}};function gH(A){let e;if(A.index)for(let t=0;t<A.index.array.length;t+=3)e=A.index.array[t],A.index.array[t]=A.index.array[t+2],A.index.array[t+2]=e}function Bo(A){return A instanceof Zo?"SubdivObject":A.geometry.type==="NonParametricGeometry"?"NonParametric":"Mesh"}function vH(A,e){let t={};return A.traverseEntity(i=>{var o;if(!i.visible||!(i instanceof Ai)||i.type!=="Mesh"||Array.isArray(i.material)||i.states&&Object.keys(i.states).length)return;let r=i.parent;for(;r;){if(r instanceof Ai&&i.states&&Object.keys(i.states).length)return;r=r.parent}let s=i.material.uuid,a=e.shared.materials[s];if(a){if(!Jt.isMergable(a))return}else{let l=(o=e.scene.objects.get(i.uuid))==null?void 0:o.data;if(l&&"material"in l&&typeof l.material!="string"){if(!Jt.isMergable(l.material))return;s=Jt.getHash(l.material)}}t[s]||(t[s]={});let n=t[s][Bo(i)];if(n){if(n.push(i),i.cloner)for(let l of i.cloner.children)n.push(l)}else if(t[s][Bo(i)]=[i],i.cloner)for(let l of i.cloner.children)t[s][Bo(i)].push(l)}),t}function yH(A){let e=0;return Object.values(A).forEach(t=>{Object.values(t).forEach(i=>{let r=i.length;r>e&&(e=r)})}),e}function xH(A,e){let t=vH(e,A),i=yH(t),r=new Array(i),s=0,a=new Array(i),n=0,o=new Array(i),l=0,u=new Array(i),h=0;for(let[c,d]of Object.entries(t))for(let f of Object.values(d)){if(n=0,l=0,f.forEach(p=>{p instanceof Ai&&(a[n++]=p.geometry.clone(),o[l++]=p)}),l<2)continue;for(let p=0;p<l;p++)o[p].updateWorldMatrix(!0,!1),a[p].applyMatrix4(o[p].matrixWorld),o[p].matrixWorld.determinant()<0&&gH(a[p]);let m=Ya(a.slice(0,n),!1);if(m){let p;switch(c){case"SubdivObject":{console.warn("Turning subdiv object into mesh"),p=new Qt(m,o[0].material);break}default:{p=new Qt(m,o[0].material);break}}p.castShadow=o[0].castShadow,p.receiveShadow=o[0].receiveShadow,e.add(p);let g=v=>{h=0;for(let x of v)x.children&&g(x.children),x instanceof Ai&&(Array.isArray(x.material)||t[x.material.uuid]&&t[x.material.uuid][Bo(x)]&&t[x.material.uuid][Bo(x)].length>1||(u[h++]=x));for(let x=0;x<h;x++)e.attach(u[x])};for(let v=0;v<l;v++){let x=o[v];g(x.children),r[s++]=x}}}for(let c=0;c<s;c++)r[c].removeFromParent()}var wH=new H;function bH(A){let e="The Spline Runtime only accepts .splinecode files that are generated from Spline export panel.";A.endsWith(".spline")?console.warn(e+" The .spline files are only meant to be used by the Editor."):A.endsWith(".splinecode")||console.warn(e)}var SH=class{constructor(A,{renderOnDemand:e=!0}={}){this._viewportMode=1,this._viewportWidth=window.innerWidth,this._viewportHeight=window.innerHeight,this._proxyObjectCache=new Map,this._lastTime=performance.now(),this.time=performance.now(),this.dt=0,this._skipRender=!1,this.renderOnDemand=!0,this.disposed=!1,this.requestRender=()=>{this._skipRender=!1},this.render=t=>{var i,r,s,a;!this._renderer||(this._rafId=requestAnimationFrame(this.render),this.time=t,this.dt=this.time-this._lastTime,this._lastTime=this.time,(i=this._perfs)==null||i.start(),!(this.renderOnDemand&&this._skipRender)&&(this._skipRender=(s=(r=this._controls)==null?void 0:r.update(this.dt))!=null?s:!0,this._eventManager&&(this._eventManager.isEnable||this._eventManager.activate(),this._eventManager.handlers.Follow.onAnimationFrameDamping(),this._eventManager.handlers.LookAt.onAnimationFrameDamping(),(this._eventManager.handlers.Start.hasVideoAction||this._eventManager.handlers.Basic.hasVideoAction||this._eventManager.handlers.Conditional.hasVideoAction)&&(this._skipRender=!1)),this._scene&&this._camera&&this._renderer.renderSplineScene(this._scene,this._camera,this._sharedAssetsManager),(a=this._perfs)==null||a.end()))},this._resize=q1(()=>{var t,i,r;!this._renderer||(this._viewportMode===1&&this._frameView&&(this._frameView.frameSize=wH.set(this._viewportWidth,this._viewportHeight)),this._renderer.setSize(this._viewportWidth,this._viewportHeight,!1),this._viewportMode!==1&&((t=this._frameView)==null||t.updateViewport()),this._camera&&((i=this._frameView)==null||i.updateCamera(),this._camera.cameraType==="PerspectiveCamera"&&this._viewportMode===1&&(this._camera.aspect=this._viewportWidth/this._viewportHeight),this._camera.updateProjectionMatrix()),(r=this._eventManager)==null||r.resize(),this.requestRender())},10),this.canvas=A,this.renderOnDemand=e,window.location.search.includes("perfs")&&(this._perfs=new mH({x:10,y:10})),Fz(A)}async load(A,e){bH(A);let t=await(await fetch(A,e)).arrayBuffer();await this.start(t)}async start(A,{interactive:e=!0}={}){var r;if(this.disposed)return;let t=await Ij(A);await Promise.all([Ey(t)&&oU(),yk(t)&&sU(),t.scene.environment.usePhysics&&tz(),xy(t)&&nk()].filter(Boolean)),this._eventManager&&this._eventManager.deactivate(),this._controls&&this._controls.dispose(),(r=this._scene)==null||r.dispose();let i=new fH(t);if(this._scene=i.scene,this._sharedAssetsManager=i.sharedAssets,this._camera=this._scene.activeCamera,window.location.search.includes("merge-geometries")){let s=performance.now();xH(t,i.scene);let a=performance.now();console.log("Merged geometries in ",a-s," ms")}if(Ey(t)&&this._scene.traverse(s=>{ls(s)&&s.recomputeBoolean()}),this._sharedAssetsManager.setRequestRender(()=>{var s;this.requestRender(),(s=this._scene)==null||s.traverse(a=>{a instanceof gc&&a.pendingMediaLoad&&a.update()})}),xy(t)&&hj(t)){let s=Object.keys(t.shared.fonts).map(a=>this._sharedAssetsManager.getFont(a)).map(a=>a.loadingPromise);await Promise.all(s)}if(this._scene.rewriteEventsBeforeGoToPlayMode(),xS(t.scene,this._scene,this._sharedAssetsManager),this._renderer||(this._renderer=new pH({canvas:this.canvas,antialias:!1,alpha:!0,stencil:!1,depth:!1,powerPreference:"high-performance"}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.pipeline.addEventListener("smaaloaded",this.requestRender),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=t.scene.environment.ambientLight.softShadows?af:_x,a5(t.scene.environment.ambientLight.softShadowQuality)),this._frameView)this._frameView.setCamera(this._camera);else{let s=Object.values(t.frames)[0];if(s.preset==="fullscreen"){this._viewportMode=1;let{width:a,height:n}=window.getComputedStyle(this.canvas);this.canvas.parentElement&&(a==="300px"||a==="auto")?(this._viewportWidth=this.canvas.parentElement.clientWidth||300,this.canvas.style.width="100%"):this._viewportWidth=this.canvas.clientWidth,this.canvas.parentElement&&(n==="150px"||n==="auto")?(this._viewportHeight=this.canvas.parentElement.clientHeight||150,this.canvas.style.height="100%"):this._viewportHeight=this.canvas.clientHeight}else this._viewportMode=2,this._viewportWidth=s.size[0],this._viewportHeight=s.size[1],this.canvas.style.width=`${this._viewportWidth}px`,this.canvas.style.height=`${this._viewportHeight}px`;this._renderer.setSize(this._viewportWidth,this._viewportHeight,!1),this._frameView=new Nj(this._renderer,this._camera,new H(this._viewportWidth,this._viewportHeight),new H(window.innerWidth,window.innerHeight))}if(e&&(this._scene.updateMatrixWorld(!0),this._controls=new cj(t,this._scene,this._renderer,this.requestRender,this._sharedAssetsManager,!0),this._eventManager=new Rj(this._renderer,this._scene,this._camera,t.scene.publish.stopRaycast,t.scene.publish.preventScroll,t.scene.publish.hideCursor,this._sharedAssetsManager,this.requestRender,this._controls,!0)),this._resize(),!this._resizeObserver&&this.canvas.parentElement){let s=!0;this._resizeObserver=new ResizeObserver(()=>{if(s){s=!1;return}this._viewportWidth=this.canvas.clientWidth,this._viewportHeight=this.canvas.clientHeight,this._resize()}),this._resizeObserver.observe(this.canvas.parentElement)}this._rafId===void 0?this.render(performance.now()):this.requestRender()}findObjectById(A){var t;let e=(t=this._scene)==null?void 0:t.getObjectByProperty("uuid",A);return this._createProxyObject(e)}findObjectByName(A){var t;let e=(t=this._scene)==null?void 0:t.getObjectByName(A);return this._createProxyObject(e)}getSplineEvents(){var A;return((A=this._eventManager)==null?void 0:A.handlers.Spline).splineEvents}emitEvent(A,e){var t;(t=this.findObjectById(e)||this.findObjectByName(e))==null||t.emitEvent(A)}emitEventReverse(A,e){var t;(t=this.findObjectById(e)||this.findObjectByName(e))==null||t.emitEventReverse(A)}addEventListener(A,e){this.canvas.addEventListener(A,e)}removeEventListener(A,e){this.canvas.removeEventListener(A,e)}setZoom(A){var e,t;((e=this._controls)==null?void 0:e.orbitControls)instanceof ES&&((t=this._controls)==null||t.orbitControls.zoomOut(A))}setSize(A,e){this._viewportWidth=A,this._viewportHeight=e,this._viewportMode=2,this._resize()}dispose(){var A,e,t,i,r,s;this.disposed=!0,(A=this._eventManager)==null||A.deactivate(),(e=this._scene)==null||e.dispose(),(t=this._sharedAssetsManager)==null||t.dispose(),this._rafId&&cancelAnimationFrame(this._rafId),this._proxyObjectCache.forEach(a=>{lv.unsubscribe(a)}),(i=this._renderer)==null||i.dispose(),(r=this._sharedAssetsManager)==null||r.dispose(),this._resizeObserver&&this._resizeObserver.disconnect(),this.canvas.style.width="",this.canvas.style.height="",(s=this._controls)==null||s.dispose(),Uz(this.canvas)}_createProxyObject(A){if(A==null)return;if(this._proxyObjectCache.has(A.uuid))return this._proxyObjectCache.get(A.uuid);let e={name:A.name,uuid:A.uuid,visible:A.visible,intensity:A.intensity,position:A.position,rotation:A.rotation,scale:A.scale,emitEvent(i){A.dispatchEvent({type:"userEvent",eventName:i})},emitEventReverse(i){A.dispatchEvent({type:"userEvent",eventName:i,reverse:!0})}},t=lv(e,(i,r)=>{var s;typeof A[i]!="object"&&((s=Object.getOwnPropertyDescriptor(A,i))==null?void 0:s.writable)&&(A[i]=r),this.requestRender(),A.updateMatrix()});return this._proxyObjectCache.set(A.uuid,t),t}},MH=Object.defineProperty,Sc=Object.getOwnPropertySymbols,LS=Object.prototype.hasOwnProperty,_S=Object.prototype.propertyIsEnumerable,Dx=(A,e,t)=>e in A?MH(A,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):A[e]=t,Px=(A,e)=>{for(var t in e||(e={}))LS.call(e,t)&&Dx(A,t,e[t]);if(Sc)for(var t of Sc(e))_S.call(e,t)&&Dx(A,t,e[t]);return A},EH=(A,e)=>{var t={};for(var i in A)LS.call(A,i)&&e.indexOf(i)<0&&(t[i]=A[i]);if(A!=null&&Sc)for(var i of Sc(A))e.indexOf(i)<0&&_S.call(A,i)&&(t[i]=A[i]);return t};function TH(A){return function(e){A.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var OS={exports:{}},$c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CH=IS,DH=Symbol.for("react.element"),PH=Symbol.for("react.fragment"),LH=Object.prototype.hasOwnProperty,_H=CH.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OH={key:!0,ref:!0,__self:!0,__source:!0};function BS(A,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)LH.call(e,i)&&!OH.hasOwnProperty(i)&&(r[i]=e[i]);if(A&&A.defaultProps)for(i in e=A.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:DH,type:A,key:s,ref:a,props:r,_owner:_H.current}}$c.Fragment=PH;$c.jsx=BS;$c.jsxs=BS;OS.exports=$c;const BH=OS.exports.jsx,RH=ll.exports.forwardRef((A,e)=>{var t=A,{scene:i,style:r,onMouseDown:s,onMouseUp:a,onMouseHover:n,onKeyDown:o,onKeyUp:l,onStart:u,onLookAt:h,onFollow:c,onWheel:d,onLoad:f,renderOnDemand:m=!0}=t,p=EH(t,["scene","style","onMouseDown","onMouseUp","onMouseHover","onKeyDown","onKeyUp","onStart","onLookAt","onFollow","onWheel","onLoad","renderOnDemand"]);const g=ll.exports.useRef(null),[v,x]=ll.exports.useState(!0);return ll.exports.useEffect(()=>{x(!0);let y;const S=[{name:"mouseDown",cb:s},{name:"mouseUp",cb:a},{name:"mouseHover",cb:n},{name:"keyDown",cb:o},{name:"keyUp",cb:l},{name:"start",cb:u},{name:"lookAt",cb:h},{name:"follow",cb:c},{name:"scroll",cb:d}];if(g.current){y=new SH(g.current,{renderOnDemand:m});async function w(){await y.load(i);for(let M of S)M.cb&&y.addEventListener(M.name,M.cb);x(!1),f==null||f(y)}w()}return()=>{for(let w of S)w.cb&&y.removeEventListener(w.name,w.cb);y.dispose()}},[i]),BH("canvas",Px({ref:TH([e,g]),style:Px({display:v?"none":"block"},r)},p))});export{RH as default};