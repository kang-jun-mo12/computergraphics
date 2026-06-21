(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="184",Ni={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,$o=1,_h=2,tr=1,xc=2,os=3,gn=0,Ze=1,Ge=2,Ln=0,Fi=1,lr=2,Jo=3,Qo=4,xh=5,ai=100,vh=101,Mh=102,Sh=103,yh=104,bh=200,Eh=201,wh=202,Th=203,ba=204,Ea=205,Ah=206,Rh=207,Ch=208,Ph=209,Dh=210,Lh=211,Ih=212,Uh=213,Nh=214,wa=0,Ta=1,Aa=2,zi=3,Ra=4,Ca=5,Pa=6,Da=7,go=0,Fh=1,Oh=2,pn=0,vc=1,Mc=2,Sc=3,yc=4,bc=5,Ec=6,wc=7,Tc=300,hi=301,ki=302,Fr=303,Or=304,yr=306,cr=1e3,yn=1001,hr=1002,Fe=1003,Bh=1004,Ss=1005,Ve=1006,Br=1007,li=1008,tn=1009,Ac=1010,Rc=1011,ds=1012,_o=1013,wn=1014,dn=1015,Nn=1016,xo=1017,vo=1018,fs=1020,Cc=35902,Pc=35899,Dc=1021,Lc=1022,fn=1023,Fn=1026,ci=1027,Mo=1028,So=1029,ui=1030,yo=1031,bo=1033,er=33776,nr=33777,ir=33778,sr=33779,La=35840,Ia=35841,Ua=35842,Na=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,ur=37490,Ga=37491,Va=37808,Ha=37809,Wa=37810,Xa=37811,Ya=37812,qa=37813,Za=37814,ja=37815,Ka=37816,$a=37817,Ja=37818,Qa=37819,to=37820,eo=37821,no=36492,io=36494,so=36495,ro=36283,ao=36284,dr=36285,oo=36286,zh=3200,fr=0,kh=1,Zn="",Ce="srgb",pr="srgb-linear",mr="linear",Jt="srgb",mi=7680,tl=519,Gh=512,Vh=513,Hh=514,Eo=515,Wh=516,Xh=517,wo=518,Yh=519,lo=35044,el="300 es",bn=2e3,ps=2001;function qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){const i=gr("canvas");return i.style.display="block",i}const nl={};function _r(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ic(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function At(...i){i=Ic(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=Ic(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function co(...i){const t=i.join(" ");t in nl||(nl[t]=!0,At(...i))}function jh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Kh={[wa]:Ta,[Aa]:Pa,[Ra]:Da,[zi]:Ca,[Ta]:wa,[Pa]:Aa,[Da]:Ra,[Ca]:zi};class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const Oi=Math.PI/180,ms=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function $h(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function us(i,t,e){return(1-e)*i+e*t}function Qh(i,t,e,n){return us(i,t,1-Math.exp(-e*n))}function tu(i,t=1){return t-Math.abs(To(i,t*2)-t)}function eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function iu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function su(i,t){return i+Math.random()*(t-i)}function ru(i){return i*(.5-Math.random())}function au(i){i!==void 0&&(il=i);let t=il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ou(i){return i*Oi}function lu(i){return i*ms}function cu(i){return(i&i-1)===0&&i!==0}function hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function du(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:At("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:Oi,RAD2DEG:ms,generateUUID:In,clamp:Vt,euclideanModulo:To,mapLinear:$h,inverseLerp:Jh,lerp:us,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:Qt,denormalize:un},Bo=class Bo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bo.prototype.isVector2=!0;let Tt=Bo;class $n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),E=Math.sin(v);f=Math.sin(f*v)/E,o=Math.sin(o*v)/E,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+y*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+y*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*p-c*h,t[e+1]=l*g+u*h+c*d-o*p,t[e+2]=c*g+u*p+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zo=class zo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zo.prototype.isVector3=!0;let M=zo;const zr=new M,sl=new $n,ko=class ko{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],v=s[1],E=s[4],b=s[7],C=s[2],T=s[5],R=s[8];return r[0]=a*y+o*v+l*C,r[3]=a*m+o*E+l*T,r[6]=a*f+o*b+l*R,r[1]=c*y+u*v+d*C,r[4]=c*m+u*E+d*T,r[7]=c*f+u*b+d*R,r[2]=h*y+p*v+g*C,r[5]=h*m+p*E+g*T,r[8]=h*f+p*b+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=e*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ko.prototype.isMatrix3=!0;let Dt=ko;const kr=new Dt,rl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return co("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return co("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:t,whitePoint:n,transfer:mr,toXYZ:rl,fromXYZ:al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:rl,fromXYZ:al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}const qt=fu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class pu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=gr("canvas")),gi.width=t.width,gi.height=t.height;const s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mu=0;class Ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gr(s[a].image)):r.push(Gr(s[a]))}else r=Gr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}let gu=0;const Vr=new M;class He extends Qn{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=yn,s=yn,r=Ve,a=li,o=fn,l=tn,c=He.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=In(),this.name="",this.source=new Ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vr).x}get height(){return this.source.getSize(Vr).y}get depth(){return this.source.getSize(Vr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){At(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){At(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cr:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cr:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Tc;He.DEFAULT_ANISOTROPY=1;const Go=class Go{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,b=(p+1)/2,C=(f+1)/2,T=(u+h)/4,R=(d+y)/4,_=(g+m)/4;return E>b&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=R/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=_/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=_/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Go.prototype.isVector4=!0;let xe=Go;class _u extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new He(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ao(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends _u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sr=class Sr{constructor(t,e,n,s,r,a,o,l,c,u,d,h,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,p,g,y,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,p,g,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,g=c*u,y=c*d;e[0]=h+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,g=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=g*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+g,e[10]=h-y*d}else if(t.order==="XZY"){const h=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vu,t,Mu)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Gn.crossVectors(n,$e),Gn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Gn.crossVectors(n,$e)),Gn.normalize(),ys.crossVectors($e,Gn),s[0]=Gn.x,s[4]=ys.x,s[8]=$e.x,s[1]=Gn.y,s[5]=ys.y,s[9]=$e.y,s[2]=Gn.z,s[6]=ys.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],v=n[3],E=n[7],b=n[11],C=n[15],T=s[0],R=s[4],_=s[8],A=s[12],D=s[1],P=s[5],I=s[9],H=s[13],X=s[2],N=s[6],G=s[10],k=s[14],J=s[3],tt=s[7],ut=s[11],Mt=s[15];return r[0]=a*T+o*D+l*X+c*J,r[4]=a*R+o*P+l*N+c*tt,r[8]=a*_+o*I+l*G+c*ut,r[12]=a*A+o*H+l*k+c*Mt,r[1]=u*T+d*D+h*X+p*J,r[5]=u*R+d*P+h*N+p*tt,r[9]=u*_+d*I+h*G+p*ut,r[13]=u*A+d*H+h*k+p*Mt,r[2]=g*T+y*D+m*X+f*J,r[6]=g*R+y*P+m*N+f*tt,r[10]=g*_+y*I+m*G+f*ut,r[14]=g*A+y*H+m*k+f*Mt,r[3]=v*T+E*D+b*X+C*J,r[7]=v*R+E*P+b*N+C*tt,r[11]=v*_+E*I+b*G+C*ut,r[15]=v*A+E*H+b*k+C*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15],v=l*p-c*h,E=o*p-c*d,b=o*h-l*d,C=a*p-c*u,T=a*h-l*u,R=a*d-o*u;return e*(y*v-m*E+f*b)-n*(g*v-m*C+f*T)+s*(g*E-y*C+f*R)-r*(g*b-y*T+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],v=e*o-n*a,E=e*l-s*a,b=e*c-r*a,C=n*l-s*o,T=n*c-r*o,R=s*c-r*l,_=u*y-d*g,A=u*m-h*g,D=u*f-p*g,P=d*m-h*y,I=d*f-p*y,H=h*f-p*m,X=v*H-E*I+b*P+C*D-T*A+R*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/X;return t[0]=(o*H-l*I+c*P)*N,t[1]=(s*I-n*H-r*P)*N,t[2]=(y*R-m*T+f*C)*N,t[3]=(h*T-d*R-p*C)*N,t[4]=(l*D-a*H-c*A)*N,t[5]=(e*H-s*D+r*A)*N,t[6]=(m*b-g*R-f*E)*N,t[7]=(u*R-h*b+p*E)*N,t[8]=(a*I-o*D+c*_)*N,t[9]=(n*D-e*I-r*_)*N,t[10]=(g*T-y*b+f*v)*N,t[11]=(d*b-u*T-p*v)*N,t[12]=(o*A-a*P-l*_)*N,t[13]=(e*P-n*A+s*_)*N,t[14]=(y*E-g*C-m*v)*N,t[15]=(u*C-d*E+h*v)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,g=r*d,y=a*u,m=a*d,f=o*d,v=l*c,E=l*u,b=l*d,C=n.x,T=n.y,R=n.z;return s[0]=(1-(y+f))*C,s[1]=(p+b)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(h+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+E)*R,s[9]=(m-v)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=_i.set(s[0],s[1],s[2]).length();const o=_i.set(s[4],s[5],s[6]).length(),l=_i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ln.copy(this);const c=1/a,u=1/o,d=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ps)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===bn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ps)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sr.prototype.isMatrix4=!0;let re=Sr;const _i=new M,ln=new re,vu=new M(0,0,0),Mu=new M(1,1,1),Gn=new M,ys=new M,$e=new M,ol=new re,ll=new $n;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Su=0;const cl=new M,xi=new $n,An=new re,bs=new M,Zi=new M,yu=new M,bu=new $n,hl=new M(1,0,0),ul=new M(0,1,0),dl=new M(0,0,1),fl={type:"added"},Eu={type:"removed"},vi={type:"childadded",child:null},Hr={type:"childremoved",child:null};class ye extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new M,e=new On,n=new $n,s=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Dt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Zi,bs,this.up):An.lookAt(bs,Zi,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(An),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),vi.child=t,this.dispatchEvent(vi),vi.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eu),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new M(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class me extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wu={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Xr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=To(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xr(a,r,t+1/3),this.g=Xr(a,r,t),this.b=Xr(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:At("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return qt.workingToColorSpace(ze.copy(this),t),Math.round(Vt(ze.r*255,0,255))*65536+Math.round(Vt(ze.g*255,0,255))*256+Math.round(Vt(ze.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ce){qt.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Es);const n=us(Vn.h,Es.h,e),s=us(Vn.s,Es.s,e),r=us(Vn.l,Es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new lt;lt.NAMES=Nc;class Gi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new lt(t),this.near=e,this.far=n}clone(){return new Gi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tu extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cn=new M,Rn=new M,Yr=new M,Cn=new M,Mi=new M,Si=new M,pl=new M,qr=new M,Zr=new M,jr=new M,Kr=new xe,$r=new xe,Jr=new xe;class en{constructor(t=new M,e=new M,n=new M){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Rn.subVectors(n,e),Yr.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Rn),l=cn.dot(Yr),c=Rn.dot(Rn),u=Rn.dot(Yr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Kr.setScalar(0),$r.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector($r,r.y),a.addScaledVector(Jr,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Rn.subVectors(t,e),cn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),Si.subVectors(r,n),qr.subVectors(t,n);const l=Mi.dot(qr),c=Si.dot(qr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);const u=Mi.dot(Zr),d=Si.dot(Zr);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Mi,a);jr.subVectors(t,r);const p=Mi.dot(jr),g=Si.dot(jr);if(g>=0&&p<=g)return e.copy(r);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Si,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return pl.subVectors(r,s),o=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(pl,o);const f=1/(m+y+h);return a=y*f,o=h*f,e.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ts.subVectors(this.max,ji),yi.subVectors(t.a,ji),bi.subVectors(t.b,ji),Ei.subVectors(t.c,ji),Hn.subVectors(bi,yi),Wn.subVectors(Ei,bi),ni.subVectors(yi,Ei);let e=[0,-Hn.z,Hn.y,0,-Wn.z,Wn.y,0,-ni.z,ni.y,Hn.z,0,-Hn.x,Wn.z,0,-Wn.x,ni.z,0,-ni.x,-Hn.y,Hn.x,0,-Wn.y,Wn.x,0,-ni.y,ni.x,0];return!Qr(e,yi,bi,Ei,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,yi,bi,Ei,Ts))?!1:(As.crossVectors(Hn,Wn),e=[As.x,As.y,As.z],Qr(e,yi,bi,Ei,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new M,new M,new M,new M,new M,new M,new M,new M],hn=new M,ws=new di,yi=new M,bi=new M,Ei=new M,Hn=new M,Wn=new M,ni=new M,ji=new M,Ts=new M,As=new M,ii=new M;function Qr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);const o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const be=new M,Rs=new Tt;let Au=0;class on extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fc extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oc extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ru=new di,Ki=new M,ta=new M;class Wi{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(ta)),this.expandByPoint(Ki.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cu=0;const an=new re,ea=new ye,wi=new M,Je=new di,$i=new di,Ue=new M;class we extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Oc:Fc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(Je.min,$i.min),Je.expandByPoint(Ue),Ue.addVectors(Je.max,$i.max),Je.expandByPoint(Ue)):(Je.expandByPoint($i.min),Je.expandByPoint($i.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ue.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),Ue.add(wi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new M,l[_]=new M;const c=new M,u=new M,d=new M,h=new Tt,p=new Tt,g=new Tt,y=new M,m=new M;function f(_,A,D){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,D),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[_].add(y),o[A].add(y),o[D].add(y),l[_].add(m),l[A].add(m),l[D].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,A=v.length;_<A;++_){const D=v[_],P=D.start,I=D.count;for(let H=P,X=P+I;H<X;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new M,b=new M,C=new M,T=new M;function R(_){C.fromBufferAttribute(s,_),T.copy(C);const A=o[_];E.copy(A),E.sub(C.multiplyScalar(C.dot(A))).normalize(),b.crossVectors(T,A);const P=b.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,P)}for(let _=0,A=v.length;_<A;++_){const D=v[_],P=D.start,I=D.count;for(let H=P,X=P+I;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new M,r=new M,a=new M,o=new M,l=new M,c=new M,u=new M,d=new M;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new on(h,u,d)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new M;class xr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){_r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Du=0;class ti extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Fi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ea,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){At(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){At(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class br extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ti;const Ji=new M,Ai=new M,Ri=new M,Ci=new Tt,Qi=new Tt,Bc=new re,Cs=new M,ts=new M,Ps=new M,ml=new Tt,na=new Tt,gl=new Tt;class Co extends ye{constructor(t=new br){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pu(e,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new xr(n,3,0,!1)),Ti.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=Ti,this.material=t,this.center=new Tt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ri.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ds(Cs.set(-.5,-.5,0),Ri,a,Ai,s,r),Ds(ts.set(.5,-.5,0),Ri,a,Ai,s,r),Ds(Ps.set(.5,.5,0),Ri,a,Ai,s,r),ml.set(0,0),na.set(1,0),gl.set(1,1);let o=t.ray.intersectTriangle(Cs,ts,Ps,!1,Ji);if(o===null&&(Ds(ts.set(-.5,.5,0),Ri,a,Ai,s,r),na.set(0,1),o=t.ray.intersectTriangle(Cs,Ps,ts,!1,Ji),o===null))return;const l=t.ray.origin.distanceTo(Ji);l<t.near||l>t.far||e.push({distance:l,point:Ji.clone(),uv:en.getInterpolation(Ji,Cs,ts,Ps,ml,na,gl,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ds(i,t,e,n,s,r){Ci.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qi.x=r*Ci.x-s*Ci.y,Qi.y=s*Ci.x+r*Ci.y):Qi.copy(Ci),i.copy(t),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(Bc)}const Dn=new M,ia=new M,Ls=new M,Xn=new M,sa=new M,Is=new M,ra=new M;class Er{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(ia);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=Xn.dot(this.direction),l=-Xn.dot(Ls),c=Xn.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const y=1/u;d*=y,h*=y,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ia).addScaledVector(Ls,h),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),Is.subVectors(n,t),ra.crossVectors(sa,Is);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(Xn,Is));if(l<0)return null;const c=o*this.direction.dot(sa.cross(Xn));if(c<0||l+c>a)return null;const u=-o*Xn.dot(ra);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _l=new re,si=new Er,Us=new Wi,xl=new M,Ns=new M,Fs=new M,Os=new M,aa=new M,Bs=new M,vl=new M,zs=new M;class Q extends ye{constructor(t=new we,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(aa.fromBufferAttribute(d,t),a?Bs.addScaledVector(aa,u):Bs.addScaledVector(aa.sub(e),u))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Us.containsPoint(si.origin)===!1&&(si.intersectSphere(Us,xl)===null||si.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(_l.copy(r).invert(),si.copy(t.ray).applyMatrix4(_l),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,C=E;b<C;b+=3){const T=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);s=ks(this,f,t,n,c,u,d,T,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=ks(this,a,t,n,c,u,d,v,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,C=E;b<C;b+=3){const T=b,R=b+1,_=b+2;s=ks(this,f,t,n,c,u,d,T,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=m,E=m+1,b=m+2;s=ks(this,a,t,n,c,u,d,v,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Lu(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===gn,o),l===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zs);return c<e.near||c>e.far?null:{distance:c,point:zs.clone(),object:i}}function ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ns),i.getVertexPosition(l,Fs),i.getVertexPosition(c,Os);const u=Lu(i,t,e,n,Ns,Fs,Os,vl);if(u){const d=new M;en.getBarycoord(vl,Ns,Fs,Os,d),s&&(u.uv=en.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(u.uv1=en.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,d,new M),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new M,materialIndex:0};en.getNormal(Ns,Fs,Os,h.normal),u.face=h,u.barycoord=d}return u}class zc extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fe,u=Fe,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new re,Sl=new re,Gs=[],yl=new di,Iu=new re,es=new Q,ns=new Wi;class Uu extends Q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),yl.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(yl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),ns.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),Sl.multiplyMatrices(n,Pi),es.matrixWorld=Sl,es.raycast(t,Gs);for(let a=0,o=Gs.length;a<o;a++){const l=Gs[a];l.instanceId=r,l.object=this,e.push(l)}Gs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(s*this.count),s,this.count,Mo,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oa=new M,Nu=new M,Fu=new Dt;class qn{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oa.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(oa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fu.getNormalMatrix(t),s=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Wi,Ou=new Tt(.5,.5),Vs=new M;class Po{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],v=r[12],E=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,f-g,C-v).normalize(),s[1].setComponents(c+a,p+u,f+g,C+v).normalize(),s[2].setComponents(c+o,p+d,f+y,C+E).normalize(),s[3].setComponents(c-o,p-d,f-y,C-E).normalize(),n)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,p-h,f-m,C-b).normalize();else if(s[4].setComponents(c-l,p-h,f-m,C-b).normalize(),e===bn)s[5].setComponents(c+l,p+h,f+m,C+b).normalize();else if(e===ps)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);const e=Ou.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wr extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vr=new M,Mr=new M,bl=new re,is=new Er,Hs=new Wi,la=new M,El=new M;class kc extends ye{constructor(t=new we,e=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vr.fromBufferAttribute(e,s-1),Mr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vr.distanceTo(Mr);t.setAttribute("lineDistance",new $t(n,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Hs.radius+=r,t.ray.intersectsSphere(Hs)===!1)return;bl.copy(s).invert(),is.copy(t.ray).applyMatrix4(bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const f=u.getX(y),v=u.getX(y+1),E=Ws(this,t,is,l,f,v,y);E&&e.push(E)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(p),f=Ws(this,t,is,l,y,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const f=Ws(this,t,is,l,y,y+1,y);f&&e.push(f)}if(this.isLineLoop){const y=Ws(this,t,is,l,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ws(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(vr.fromBufferAttribute(o,s),Mr.fromBufferAttribute(o,r),e.distanceSqToSegment(vr,Mr,la,El)>n)return;la.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(la);if(!(c<t.near||c>t.far))return{distance:c,point:El.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const wl=new M,Tl=new M;class ho extends kc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wl.fromBufferAttribute(e,s),Tl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wl.distanceTo(Tl);t.setAttribute("lineDistance",new $t(n,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gc extends He{constructor(t=[],e=hi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xi extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vi extends He{constructor(t,e,n=wn,s,r,a,o=Fe,l=Fe,c,u=Fn,d=1){if(u!==Fn&&u!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bu extends Vi{constructor(t,e=wn,n=hi,s,r,a=Fe,o=Fe,l,c=Fn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vc extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ut extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function g(y,m,f,v,E,b,C,T,R,_,A){const D=b/R,P=C/_,I=b/2,H=C/2,X=T/2,N=R+1,G=_+1;let k=0,J=0;const tt=new M;for(let ut=0;ut<G;ut++){const Mt=ut*P-H;for(let Et=0;Et<N;Et++){const Zt=Et*D-I;tt[y]=Zt*v,tt[m]=Mt*E,tt[f]=X,c.push(tt.x,tt.y,tt.z),tt[y]=0,tt[m]=0,tt[f]=T>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(Et/R),d.push(1-ut/_),k+=1}}for(let ut=0;ut<_;ut++)for(let Mt=0;Mt<R;Mt++){const Et=h+Mt+N*ut,Zt=h+Mt+N*(ut+1),te=h+(Mt+1)+N*(ut+1),Ot=h+(Mt+1)+N*ut;l.push(Et,Zt,Ot),l.push(Zt,te,Ot),J+=6}o.addGroup(p,J,A),p+=J,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gs extends we{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,p=2*d+h,g=n*2+r,y=s+1,m=new M,f=new M;for(let v=0;v<=g;v++){let E=0,b=0,C=0,T=0;if(v<=n){const A=v/n,D=A*Math.PI/2;b=-u-t*Math.cos(D),C=t*Math.sin(D),T=-t*Math.cos(D),E=A*d}else if(v<=n+r){const A=(v-n)/r;b=-u+A*e,C=t,T=0,E=d+A*h}else{const A=(v-n-r)/n,D=A*Math.PI/2;b=u+t*Math.sin(D),C=t*Math.cos(D),T=t*Math.sin(D),E=d+h+A*d}const R=Math.max(0,Math.min(1,E/p));let _=0;v===0?_=.5/s:v===g&&(_=-.5/s);for(let A=0;A<=s;A++){const D=A/s,P=D*Math.PI*2,I=Math.sin(P),H=Math.cos(P);f.x=-C*H,f.y=b,f.z=C*I,o.push(f.x,f.y,f.z),m.set(-C*H,T,C*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+_,R)}if(v>0){const A=(v-1)*y;for(let D=0;D<s;D++){const P=A+D,I=A+D+1,H=v*y+D,X=v*y+D+1;a.push(P,I,H),a.push(I,X,H)}}}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class nn extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const y=[],m=n/2;let f=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(p,2));function v(){const b=new M,C=new M;let T=0;const R=(e-t)/n;for(let _=0;_<=r;_++){const A=[],D=_/r,P=D*(e-t)+t;for(let I=0;I<=s;I++){const H=I/s,X=H*l+o,N=Math.sin(X),G=Math.cos(X);C.x=P*N,C.y=-D*n+m,C.z=P*G,d.push(C.x,C.y,C.z),b.set(N,R,G).normalize(),h.push(b.x,b.y,b.z),p.push(H,1-D),A.push(g++)}y.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){const D=y[A][_],P=y[A+1][_],I=y[A+1][_+1],H=y[A][_+1];(t>0||A!==0)&&(u.push(D,P,H),T+=3),(e>0||A!==r-1)&&(u.push(P,I,H),T+=3)}c.addGroup(f,T,0),f+=T}function E(b){const C=g,T=new Tt,R=new M;let _=0;const A=b===!0?t:e,D=b===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*D,0),h.push(0,D,0),p.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const X=I/s*l+o,N=Math.cos(X),G=Math.sin(X);R.x=A*G,R.y=m*D,R.z=A*N,d.push(R.x,R.y,R.z),h.push(0,D,0),T.x=N*.5+.5,T.y=G*.5*D+.5,p.push(T.x,T.y),g++}for(let I=0;I<s;I++){const H=C+I,X=P+I;b===!0?u.push(X,X+1,H):u.push(X+1,X,H),_+=3}c.addGroup(f,_,b===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _s extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new M,b=new M,C=new M;for(let T=0;T<e.length;T+=3)p(e[T+0],E),p(e[T+1],b),p(e[T+2],C),l(E,b,C,v)}function l(v,E,b,C){const T=C+1,R=[];for(let _=0;_<=T;_++){R[_]=[];const A=v.clone().lerp(b,_/T),D=E.clone().lerp(b,_/T),P=T-_;for(let I=0;I<=P;I++)I===0&&_===T?R[_][I]=A:R[_][I]=A.clone().lerp(D,I/P)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){const D=Math.floor(A/2);A%2===0?(h(R[_][D+1]),h(R[_+1][D]),h(R[_][D])):(h(R[_][D+1]),h(R[_+1][D+1]),h(R[_+1][D]))}}function c(v){const E=new M;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(v),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){const v=new M;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const b=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;a.push(b,1-C)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const E=a[v+0],b=a[v+2],C=a[v+4],T=Math.max(E,b,C),R=Math.min(E,b,C);T>.9&&R<.1&&(E<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function p(v,E){const b=v*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function g(){const v=new M,E=new M,b=new M,C=new M,T=new Tt,R=new Tt,_=new Tt;for(let A=0,D=0;A<r.length;A+=9,D+=6){v.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),T.set(a[D+0],a[D+1]),R.set(a[D+2],a[D+3]),_.set(a[D+4],a[D+5]),C.copy(v).add(E).add(b).divideScalar(3);const P=m(C);y(T,D+0,v,P),y(R,D+2,E,P),y(_,D+4,b,P)}}function y(v,E,b,C){C<0&&v.x===1&&(a[E]=v.x-1),b.x===0&&b.z===0&&(a[E]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.vertices,t.indices,t.radius,t.detail)}}const Xs=new M,Ys=new M,ca=new M,qs=new en;class Al extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Oi*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:y,b:m,c:f}=qs;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),qs.getNormal(ca),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const E=(v+1)%3,b=d[v],C=d[E],T=qs[u[v]],R=qs[u[E]],_=`${b}_${C}`,A=`${C}_${b}`;A in h&&h[A]?(ca.dot(h[A].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),h[A]=null):_ in h||(h[_]={index0:c[v],index1:c[E],normal:ca.clone()})}}for(const g in h)if(h[g]){const{index0:y,index1:m}=h[g];Xs.fromBufferAttribute(o,y),Ys.fromBufferAttribute(o,m),p.push(Xs.x,Xs.y,Xs.z),p.push(Ys.x,Ys.y,Ys.z)}this.setAttribute("position",new $t(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Lo extends Do{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lo(t.radius,t.detail)}}class mn extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*h-a;for(let E=0;E<c;E++){const b=E*d-r;g.push(b,-v,0),y.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const E=v+c*f,b=v+c*(f+1),C=v+1+c*(f+1),T=v+1+c*f;p.push(E,b,T),p.push(b,C,T)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ee extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new M,h=new M,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){const v=[],E=f/n;let b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(T+b,1-E),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const E=u[f][v+1],b=u[f][v],C=u[f+1][v],T=u[f+1][v+1];(f!==0||a>0)&&p.push(E,b,T),(f!==n-1||l<Math.PI)&&p.push(b,C,T)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Io extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new M,p=new M,g=new M;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let f=0;f<=s;f++){const v=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){const f=(s+1)*y+m-1,v=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,b=(s+1)*y+m;l.push(f,v,b),l.push(v,E,b)}this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Tr extends we{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],u=[],d=new M,h=new M,p=new M,g=new M,y=new M,m=new M,f=new M;for(let E=0;E<=n;++E){const b=E/n*r*Math.PI*2;v(b,r,a,t,p),v(b+.01,r,a,t,g),m.subVectors(g,p),f.addVectors(g,p),y.crossVectors(m,f),f.crossVectors(y,m),y.normalize(),f.normalize();for(let C=0;C<=s;++C){const T=C/s*Math.PI*2,R=-e*Math.cos(T),_=e*Math.sin(T);d.x=p.x+(R*f.x+_*y.x),d.y=p.y+(R*f.y+_*y.y),d.z=p.z+(R*f.z+_*y.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),u.push(E/n),u.push(C/s)}}for(let E=1;E<=n;E++)for(let b=1;b<=s;b++){const C=(s+1)*(E-1)+(b-1),T=(s+1)*E+(b-1),R=(s+1)*E+b,_=(s+1)*(E-1)+b;o.push(C,T,_),o.push(T,R,_)}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(u,2));function v(E,b,C,T,R){const _=Math.cos(E),A=Math.sin(E),D=C/b*E,P=Math.cos(D);R.x=T*(2+P)*.5*_,R.y=T*(2+P)*A*.5,R.z=T*Math.sin(D)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Rl(s))s.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function Rl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const ku={clone:Hi,merge:Xe};var Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hu extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wu extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xu extends ti{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=go,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yu extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qu extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ar extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Rr extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ha=new re,Cl=new M,Pl=new M;class Wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ps||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zs=new M,js=new $n,vn=new M;class Xc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zs,js,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,js,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Zs,js,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,js,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new M,Dl=new Tt,Ll=new Tt;class Qe extends Xc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Ll),e.subVectors(Ll,Dl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Zu extends Wc{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class xs extends Ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Uo extends Xc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ju extends Wc{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cr extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new ju}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ku extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Di=-90,Li=1;class $u extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Di,Li,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Di,Li,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Di,Li,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Di,Li,t,e);o.layers=this.layers,this.add(o);const l=new Qe(Di,Li,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Di,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ju extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Il=new re;class No{constructor(t,e,n=0,s=1/0){this.ray=new Er(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(t,e=!0,n=[]){return uo(t,this,n,e),n.sort(Ul),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uo(t[s],this,n,e);return n.sort(Ul),n}}function Ul(i,t){return i.distance-t.distance}function uo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)uo(r[a],t,e,!0)}}class Qu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,At("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Nl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vo=class Vo{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Vo.prototype.isMatrix2=!0;let Fl=Vo;const Ol=new M;let Ks,ua;class td extends ye{constructor(t=new M(0,0,1),e=new M(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ks===void 0&&(Ks=new we,Ks.setAttribute("position",new $t([0,0,0,0,1,0],3)),ua=new _s(.5,1,5,1),ua.translate(0,-.5,0)),this.position.copy(e),this.line=new kc(Ks,new wr({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Q(ua,new De({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ol.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ol,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ed extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){At("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bl(i,t,e,n){const s=nd(n);switch(e){case Dc:return i*t;case Mo:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case bo:return i*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Na:return Math.max(i,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case ur:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dr:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nd(i){switch(i){case tn:case Ac:return{byteLength:1,components:1};case ds:case Rc:case Nn:return{byteLength:2,components:1};case xo:case vo:return{byteLength:2,components:4};case wn:case _o:case dn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function id(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_d=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ep=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:hd,aomap_pars_fragment:ud,batching_pars_vertex:dd,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:xd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:yd,color_fragment:bd,color_pars_fragment:Ed,color_pars_vertex:wd,color_vertex:Td,common:Ad,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Dd,emissivemap_fragment:Ld,emissivemap_pars_fragment:Id,colorspace_fragment:Ud,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Kd,envmap_vertex:kd,fog_vertex:Gd,fog_pars_vertex:Vd,fog_fragment:Hd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:Yd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Zd,lights_pars_begin:jd,lights_toon_fragment:$d,lights_toon_pars_fragment:Jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:tf,lights_physical_fragment:ef,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:af,lightprobes_pars_fragment:of,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:uf,map_fragment:df,map_pars_fragment:ff,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:_f,morphinstance_vertex:xf,morphcolor_vertex:vf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:yf,normal_fragment_begin:bf,normal_fragment_maps:Ef,normal_pars_fragment:wf,normal_pars_vertex:Tf,normal_vertex:Af,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Df,iridescence_pars_fragment:Lf,opaque_fragment:If,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:Yf,skinning_vertex:qf,skinnormal_vertex:Zf,specularmap_fragment:jf,specularmap_pars_fragment:Kf,tonemapping_fragment:$f,tonemapping_pars_fragment:Jf,transmission_fragment:Qf,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:dp,distance_vert:fp,distance_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:_p,linedashed_frag:xp,meshbasic_vert:vp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:yp,meshmatcap_vert:bp,meshmatcap_frag:Ep,meshnormal_vert:wp,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Dp,meshtoon_frag:Lp,points_vert:Ip,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:Op,sprite_frag:Bp},ht={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new M},probesMax:{value:new M},probesResolution:{value:new M}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Sn={basic:{uniforms:Xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Xe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Xe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Xe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Xe([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Xe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Xe([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Xe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Xe([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Xe([ht.common,ht.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Xe([ht.lights,ht.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Sn.physical={uniforms:Xe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const $s={r:0,b:0,g:0},zp=new re,qc=new Dt;qc.set(-1,0,0,0,1,0,0,0,1);function kp(i,t,e,n,s,r){const a=new lt(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const b=v.backgroundBlurriness>0;E=t.get(E,b)}return E}function g(v){let E=!1;const b=p(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,E){const b=p(E);b&&(b.isCubeTexture||b.mapping===yr)?(c===void 0&&(c=new Q(new Ut(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Hi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qc),c.material.toneMapped=qt.getTransfer(b.colorSpace)!==Jt,(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Q(new mn(2,2),new sn({name:"BackgroundMaterial",uniforms:Hi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qt.getTransfer(b.colorSpace)!==Jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB($s,Hc(i)),e.buffers.color.setClear($s.r,$s.g,$s.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:y,dispose:f}}function Gp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(P,I,H,X,N){let G=!1;const k=d(P,X,H,I);r!==k&&(r=k,c(r.object)),G=p(P,X,H,N),G&&g(P,X,H,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(P,I,H,X),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,I,H,X){const N=X.wireframe===!0;let G=n[I.id];G===void 0&&(G={},n[I.id]=G);const k=P.isInstancedMesh===!0?P.id:0;let J=G[k];J===void 0&&(J={},G[k]=J);let tt=J[H.id];tt===void 0&&(tt={},J[H.id]=tt);let ut=tt[N];return ut===void 0&&(ut=h(l()),tt[N]=ut),ut}function h(P){const I=[],H=[],X=[];for(let N=0;N<e;N++)I[N]=0,H[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,I,H,X){const N=r.attributes,G=I.attributes;let k=0;const J=H.getAttributes();for(const tt in J)if(J[tt].location>=0){const Mt=N[tt];let Et=G[tt];if(Et===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(Et=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(Et=P.instanceColor)),Mt===void 0||Mt.attribute!==Et||Et&&Mt.data!==Et.data)return!0;k++}return r.attributesNum!==k||r.index!==X}function g(P,I,H,X){const N={},G=I.attributes;let k=0;const J=H.getAttributes();for(const tt in J)if(J[tt].location>=0){let Mt=G[tt];Mt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(Mt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(Mt=P.instanceColor));const Et={};Et.attribute=Mt,Mt&&Mt.data&&(Et.data=Mt.data),N[tt]=Et,k++}r.attributes=N,r.attributesNum=k,r.index=X}function y(){const P=r.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function m(P){f(P,0)}function f(P,I){const H=r.newAttributes,X=r.enabledAttributes,N=r.attributeDivisors;H[P]=1,X[P]===0&&(i.enableVertexAttribArray(P),X[P]=1),N[P]!==I&&(i.vertexAttribDivisor(P,I),N[P]=I)}function v(){const P=r.newAttributes,I=r.enabledAttributes;for(let H=0,X=I.length;H<X;H++)I[H]!==P[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function E(P,I,H,X,N,G,k){k===!0?i.vertexAttribIPointer(P,I,H,N,G):i.vertexAttribPointer(P,I,H,X,N,G)}function b(P,I,H,X){y();const N=X.attributes,G=H.getAttributes(),k=I.defaultAttributeValues;for(const J in G){const tt=G[J];if(tt.location>=0){let ut=N[J];if(ut===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),ut!==void 0){const Mt=ut.normalized,Et=ut.itemSize,Zt=t.get(ut);if(Zt===void 0)continue;const te=Zt.buffer,Ot=Zt.type,j=Zt.bytesPerElement,pt=Ot===i.INT||Ot===i.UNSIGNED_INT||ut.gpuType===_o;if(ut.isInterleavedBufferAttribute){const st=ut.data,Rt=st.stride,It=ut.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<tt.locationSize;Ct++)f(tt.location+Ct,st.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<tt.locationSize;Ct++)m(tt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ct=0;Ct<tt.locationSize;Ct++)E(tt.location+Ct,Et/tt.locationSize,Ot,Mt,Rt*j,(It+Et/tt.locationSize*Ct)*j,pt)}else{if(ut.isInstancedBufferAttribute){for(let st=0;st<tt.locationSize;st++)f(tt.location+st,ut.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let st=0;st<tt.locationSize;st++)m(tt.location+st);i.bindBuffer(i.ARRAY_BUFFER,te);for(let st=0;st<tt.locationSize;st++)E(tt.location+st,Et/tt.locationSize,Ot,Mt,Et*j,Et/tt.locationSize*st*j,pt)}}else if(k!==void 0){const Mt=k[J];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(tt.location,Mt);break;case 3:i.vertexAttrib3fv(tt.location,Mt);break;case 4:i.vertexAttrib4fv(tt.location,Mt);break;default:i.vertexAttrib1fv(tt.location,Mt)}}}}v()}function C(){A();for(const P in n){const I=n[P];for(const H in I){const X=I[H];for(const N in X){const G=X[N];for(const k in G)u(G[k].object),delete G[k];delete X[N]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const H in I){const X=I[H];for(const N in X){const G=X[N];for(const k in G)u(G[k].object),delete G[k];delete X[N]}}delete n[P.id]}function R(P){for(const I in n){const H=n[I];for(const X in H){const N=H[X];if(N[P.id]===void 0)continue;const G=N[P.id];for(const k in G)u(G[k].object),delete G[k];delete N[P.id]}}}function _(P){for(const I in n){const H=n[I],X=P.isInstancedMesh===!0?P.id:0,N=H[X];if(N!==void 0){for(const G in N){const k=N[G];for(const J in k)u(k[J].object),delete k[J];delete N[G]}delete H[X],Object.keys(H).length===0&&delete n[I]}}}function A(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Vp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==dn&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(At("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:C,samples:T}}function Wp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,E=v*4;let b=f.clippingState||null;l.value=b,b=u(g,h,E,p);for(let C=0;C!==E;++C)b[C]=e[C];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=p;E!==y;++E,b+=4)a.copy(d[E]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const jn=4,zl=[.125,.215,.35,.446,.526,.582],oi=20,Xp=256,ss=new Uo,kl=new lt;let da=null,fa=0,pa=0,ma=!1;const Yp=new M;class Gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Yp}=r;da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,t.scissorTest=!1,Ii(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Nn,format:fn,colorSpace:pr,depthBuffer:!1},s=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qp(r)),this._blurMaterial=jp(r,t,e),this._ggxMaterial=Zp(r,t,e)}return s}_compileMaterial(t){const e=new Q(new we,t);this._renderer.compile(e,ss)}_sceneToCubeUV(t,e,n,s,r){const l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(kl),d.toneMapping=pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new Ut,new De({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,f=!0):(m.color.copy(kl),f=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const C=this._cubeSize;Ii(s,b*C,E>2?C:0,C,C),d.setRenderTarget(s),f&&d.render(y,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ii(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-jn?n-g+jn:0),f=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Ii(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(o,ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ii(t,m,f,3*y,2*y),s.setRenderTarget(t),s.render(o,ss)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):oi;m>oi&&At(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const f=[];let v=0;for(let R=0;R<oi;++R){const _=R/y,A=Math.exp(-_*_/2);f.push(A),R===0?v+=A:R<m&&(v+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const b=this._sizeLods[s],C=3*b*(s>E-jn?s-E+jn:0),T=4*(this._cubeSize-b);Ii(e,C,T,3*b,2*b),l.setRenderTarget(e),l.render(d,ss)}}function qp(i){const t=[],e=[],n=[];let s=i;const r=i-jn+1+zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-jn?l=zl[a-i+jn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,f=1,v=new Float32Array(y*g*p),E=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,_=T>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];v.set(A,y*g*T),E.set(h,m*g*T);const D=[T,T,T,T,T,T];b.set(D,f*g*T)}const C=new we;C.setAttribute("position",new on(v,y)),C.setAttribute("uv",new on(E,m)),C.setAttribute("faceIndex",new on(b,f)),n.push(new Q(C,null)),s>jn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vl(i,t,e){const n=new En(i,t,e);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zp(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function jp(i,t,e){const n=new Float32Array(oi),s=new M(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Hl(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Wl(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Pr(){return`

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
	`}class Zc extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Ln});r.uniforms.tEquirect.value=e;const a=new Q(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=Ve),new $u(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Kp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Fr||p===Or)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new Zc(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===Fr||p===Or,y=p===hi||p===ki;if(g||y){let m=e.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Gl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||y&&v&&l(v)?(n===null&&(n=new Gl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Fr?h.mapping=hi:p===Or&&(h.mapping=ki),h}function l(h){let p=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function $p(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&co("WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const v=p.array;y=p.version;for(let E=0,b=v.length;E<b;E+=3){const C=v[E+0],T=v[E+1],R=v[E+2];h.push(C,T,T,R,R,C)}}else{const v=g.array;y=g.version;for(let E=0,b=v.length/3-1;E<b;E+=3){const C=E+0,T=E+1,R=E+2;h.push(C,T,T,R,R,C)}}const m=new(g.count>=65535?Oc:Fc)(h,1);m.version=y;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Qp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function em(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var p=D;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*T*4*d),_=new Uc(R,C,T,d);_.type=dn,_.needsUpdate=!0;const A=b*4;for(let P=0;P<d;P++){const I=f[P],H=v[P],X=E[P],N=C*T*4*P;for(let G=0;G<I.count;G++){const k=G*A;g===!0&&(s.fromBufferAttribute(I,G),R[N+k+0]=s.x,R[N+k+1]=s.y,R[N+k+2]=s.z,R[N+k+3]=0),y===!0&&(s.fromBufferAttribute(H,G),R[N+k+4]=s.x,R[N+k+5]=s.y,R[N+k+6]=s.z,R[N+k+7]=0),m===!0&&(s.fromBufferAttribute(X,G),R[N+k+8]=s.x,R[N+k+9]=s.y,R[N+k+10]=s.z,R[N+k+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Tt(C,T)},n.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function nm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const im={[vc]:"LINEAR_TONE_MAPPING",[Mc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function sm(i,t,e,n,s){const r=new En(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Vi(t,e):void 0}),a=new En(t,e,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),o=new we;o.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $t([0,2,0,0,2,0],2));const l=new Hu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Q(o,l),u=new Uo(-1,1,1,-1,0,1);let d=null,h=null,p=!1,g,y=null,m=[],f=!1;this.setSize=function(v,E){r.setSize(v,E),a.setSize(v,E);for(let b=0;b<m.length;b++){const C=m[b];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){m=v,f=m.length>0&&m[0].isRenderPass===!0;const E=r.width,b=r.height;for(let C=0;C<m.length;C++){const T=m[C];T.setSize&&T.setSize(E,b)}},this.begin=function(v,E){if(p||v.toneMapping===pn&&m.length===0)return!1;if(y=E,E!==null){const b=E.width,C=E.height;(r.width!==b||r.height!==C)&&this.setSize(b,C)}return f===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=pn,!0},this.hasRenderPass=function(){return f},this.end=function(v,E){v.toneMapping=g,p=!0;let b=r,C=a;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(v,C,b,E),R.needsSwap!==!1)){const _=b;b=C,C=_}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},qt.getTransfer(d)===Jt&&(l.defines.SRGB_TRANSFER="");const T=im[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(y),v.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const jc=new He,fo=new Vi(1,1),Kc=new Uc,$c=new xu,Jc=new Gc,Xl=[],Yl=[],ql=new Float32Array(16),Zl=new Float32Array(9),jl=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Ie(e,n)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),Ie(e,n)}}function um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),Ie(e,n)}}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fo.compareFunction=e.isReversedDepthBuffer()?wo:Eo,r=fo):r=jc,e.setTexture2D(t||r,s)}function Sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$c,s)}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jc,s)}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function Em(i){switch(i){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return bm}}function wm(i,t){i.uniform1fv(this.addr,t)}function Tm(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Am(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Rm(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Cm(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pm(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dm(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Um(i,t){i.uniform3iv(this.addr,t)}function Nm(i,t){i.uniform4iv(this.addr,t)}function Fm(i,t){i.uniform1uiv(this.addr,t)}function Om(i,t){i.uniform2uiv(this.addr,t)}function Bm(i,t){i.uniform3uiv(this.addr,t)}function zm(i,t){i.uniform4uiv(this.addr,t)}function km(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fo:a=jc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Gm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$c,r[a])}function Vm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jc,r[a])}function Hm(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kc,r[a])}function Wm(i){switch(i){case 5126:return wm;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Lm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}}class Ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Kl(i,t){i.seq.push(t),i.map[t.id]=t}function Zm(i,t,e){const n=i.name,s=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),a=ga.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kl(e,c===void 0?new Xm(o,i,t):new Ym(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new qm(o),Kl(e,d)),e=d}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $l(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jm=37297;let Km=0;function $m(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Jl=new Dt;function Jm(i){qt._getMatrix(Jl,qt.workingColorSpace,i);const t=`mat3( ${Jl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$m(i.getShaderSource(t),o)}else return r}function Qm(i,t){const e=Jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const t0={[vc]:"Linear",[Mc]:"Reinhard",[Sc]:"Cineon",[yc]:"ACESFilmic",[Ec]:"AgX",[wc]:"Neutral",[bc]:"Custom"};function e0(i,t){const e=t0[t];return e===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new M;function n0(){qt.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function s0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(i){return i.replace(a0,l0)}const o0=new Map;function l0(i,t){let e=zt[t];if(e===void 0){const n=o0.get(t);if(n!==void 0)e=zt[n],At('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(c0,h0)}function h0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const u0={[tr]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function d0(i){return u0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f0={[hi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function p0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":f0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const m0={[ki]:"ENVMAP_MODE_REFRACTION"};function g0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _0={[go]:"ENVMAP_BLENDING_MULTIPLY",[Fh]:"ENVMAP_BLENDING_MIX",[Oh]:"ENVMAP_BLENDING_ADD"};function x0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_0[i.combine]||"ENVMAP_BLENDING_NONE"}function v0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function M0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=d0(e),c=p0(e),u=g0(e),d=x0(e),h=v0(e),p=i0(e),g=s0(r),y=s.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?zt.tonemapping_pars_fragment:"",e.toneMapping!==pn?e0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),n0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=po(a),a=tc(a,e),a=ec(a,e),o=po(o),o=tc(o,e),o=ec(o,e),a=nc(a),o=nc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=v+m+a,b=v+f+o,C=$l(s,s.VERTEX_SHADER,E),T=$l(s,s.FRAGMENT_SHADER,b);s.attachShader(y,C),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(T)||"",N=I.trim(),G=H.trim(),k=X.trim();let J=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,T);else{const ut=Ql(s,C,"vertex"),Mt=Ql(s,T,"fragment");Yt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ut+`
`+Mt)}else N!==""?At("WebGLProgram: Program Info Log:",N):(G===""||k==="")&&(tt=!1);tt&&(P.diagnostics={runnable:J,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(C),s.deleteShader(T),_=new rr(s,y),A=r0(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,jm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}let S0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b0(t),e.set(t,n)),n}}class b0{constructor(t){this.id=S0++,this.code=t,this.usedTimes=0}}function E0(i){return i===ui||i===ur||i===dr}function w0(i,t,e,n,s,r){const a=new Ro,o=new y0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,A,D,P,I,H){const X=P.fog,N=I.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=t.get(_.envMap||G,k),tt=J&&J.mapping===yr?J.image.height:null,ut=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&At("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const Mt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Et=Mt!==void 0?Mt.length:0;let Zt=0;N.morphAttributes.position!==void 0&&(Zt=1),N.morphAttributes.normal!==void 0&&(Zt=2),N.morphAttributes.color!==void 0&&(Zt=3);let te,Ot,j,pt;if(ut){const Nt=Sn[ut];te=Nt.vertexShader,Ot=Nt.fragmentShader}else te=_.vertexShader,Ot=_.fragmentShader,o.update(_),j=o.getVertexShaderID(_),pt=o.getFragmentShaderID(_);const st=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),It=I.isInstancedMesh===!0,Ct=I.isBatchedMesh===!0,fe=!!_.map,Wt=!!_.matcap,ee=!!J,de=!!_.aoMap,Ht=!!_.lightMap,Te=!!_.bumpMap,pe=!!_.normalMap,je=!!_.displacementMap,U=!!_.emissiveMap,Ae=!!_.metalnessMap,Xt=!!_.roughnessMap,le=_.anisotropy>0,ct=_.clearcoat>0,ge=_.dispersion>0,w=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,q=le&&!!_.anisotropyMap,$=ct&&!!_.clearcoatMap,et=ct&&!!_.clearcoatNormalMap,ot=ct&&!!_.clearcoatRoughnessMap,W=w&&!!_.iridescenceMap,Z=w&&!!_.iridescenceThicknessMap,mt=x&&!!_.sheenColorMap,xt=x&&!!_.sheenRoughnessMap,rt=!!_.specularMap,nt=!!_.specularColorMap,Lt=!!_.specularIntensityMap,Bt=O&&!!_.transmissionMap,Kt=O&&!!_.thicknessMap,L=!!_.gradientMap,it=!!_.alphaMap,Y=_.alphaTest>0,gt=!!_.alphaHash,at=!!_.extensions;let K=pn;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(K=i.toneMapping);const yt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:te,fragmentShader:Ot,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&I._colorsTexture!==null,instancing:It,instancingColor:It&&I.instanceColor!==null,instancingMorph:It&&I.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:fe,matcap:Wt,envMap:ee,envMapMode:ee&&J.mapping,envMapCubeUVHeight:tt,aoMap:de,lightMap:Ht,bumpMap:Te,normalMap:pe,displacementMap:je,emissiveMap:U,normalMapObjectSpace:pe&&_.normalMapType===kh,normalMapTangentSpace:pe&&_.normalMapType===fr,packedNormalMap:pe&&_.normalMapType===fr&&E0(_.normalMap.format),metalnessMap:Ae,roughnessMap:Xt,anisotropy:le,anisotropyMap:q,clearcoat:ct,clearcoatMap:$,clearcoatNormalMap:et,clearcoatRoughnessMap:ot,dispersion:ge,iridescence:w,iridescenceMap:W,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:mt,sheenRoughnessMap:xt,specularMap:rt,specularColorMap:nt,specularIntensityMap:Lt,transmission:O,transmissionMap:Bt,thicknessMap:Kt,gradientMap:L,opaque:_.transparent===!1&&_.blending===Fi&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:Y,alphaHash:gt,combine:_.combine,mapUv:fe&&g(_.map.channel),aoMapUv:de&&g(_.aoMap.channel),lightMapUv:Ht&&g(_.lightMap.channel),bumpMapUv:Te&&g(_.bumpMap.channel),normalMapUv:pe&&g(_.normalMap.channel),displacementMapUv:je&&g(_.displacementMap.channel),emissiveMapUv:U&&g(_.emissiveMap.channel),metalnessMapUv:Ae&&g(_.metalnessMap.channel),roughnessMapUv:Xt&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:$&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(_.sheenRoughnessMap.channel),specularMapUv:rt&&g(_.specularMap.channel),specularColorMapUv:nt&&g(_.specularColorMap.channel),specularIntensityMapUv:Lt&&g(_.specularIntensityMap.channel),transmissionMapUv:Bt&&g(_.transmissionMap.channel),thicknessMapUv:Kt&&g(_.thicknessMap.channel),alphaMapUv:it&&g(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||le),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(fe||it),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Zt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:K,decodeVideoTexture:fe&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:U&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ge,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)A.push(D),A.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(A,_),v(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function E(_){const A=p[_.type];let D;if(A){const P=Sn[A];D=ku.clone(P.uniforms)}else D=_.uniforms;return D}function b(_,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new M0(i,A,_,s),c.push(D),u.set(A,D)),D}function C(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:R}}function T0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function A0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,y,m,f){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},i[t]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=y,v.renderOrder=h.renderOrder,v.z=m,v.group=f),t++,v}function l(h,p,g,y,m,f){const v=o(h,p,g,y,m,f);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):e.push(v)}function c(h,p,g,y,m,f){const v=o(h,p,g,y,m,f);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,p){e.length>1&&e.sort(h||A0),n.length>1&&n.sort(p||sc),s.length>1&&s.sort(p||sc)}function d(){for(let h=t,p=i.length;h<p;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function R0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rc,i.set(n,[a])):s>=r.length?(a=new rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new lt};break;case"SpotLight":e={position:new M,direction:new M,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new M,halfWidth:new M,halfHeight:new M};break}return i[t.id]=e,e}}}function P0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I0(i){const t=new C0,e=P0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);const s=new M,r=new re,a=new re;function o(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,v=0,E=0,b=0,C=0,T=0,R=0;c.sort(L0);for(let A=0,D=c.length;A<D;A++){const P=c[A],I=P.color,H=P.intensity,X=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ui?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*H,d+=I.g*H,h+=I.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],H);R++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,J=e.get(P);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(H),G.distance=X,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[y]=G;const k=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,k.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=k.matrix,P.castShadow){const J=e.get(P);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=N,b++}y++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(I).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const k=P.shadow,J=e.get(P);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==v||_.numPointShadows!==E||_.numSpotShadows!==b||_.numSpotMaps!==C||_.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,_.directionalLength=p,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=v,_.numPointShadows=E,_.numSpotShadows=b,_.numSpotMaps=C,_.numLightProbes=R,n.version=D0++)}function l(c,u){let d=0,h=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const E=c[f];if(E.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(E.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function ac(i){const t=new I0(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function U0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ac(i),t.set(s,[o])):r>=a.length?(o=new ac(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,O0=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],B0=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],oc=new re,rs=new M,_a=new M;function z0(i,t,e){let n=new Po;const s=new Tt,r=new Tt,a=new xe,o=new Yu,l=new qu,c={},u=e.maxTextureSize,d={[gn]:Ze,[Ze]:gn,[Ge]:Ge},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Q(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let f=this.type;this.render=function(T,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===xc&&(At("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);const A=i.getRenderTarget(),D=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ln),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const H=f!==this.type;H&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=T.length;X<N;X++){const G=T[X],k=G.shadow;if(k===void 0){At("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();s.multiply(J),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,k.mapSize.y=r.y));const tt=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=tt,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===os){if(G.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new En(s.x,s.y,{format:ui,type:Nn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new Vi(s.x,s.y,dn),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=Fn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fe,k.map.depthTexture.magFilter=Fe}else G.isPointLight?(k.map=new Zc(s.x),k.map.depthTexture=new Bu(s.x,wn)):(k.map=new En(s.x,s.y),k.map.depthTexture=new Vi(s.x,s.y,wn)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=Fn,this.type===tr?(k.map.depthTexture.compareFunction=tt?wo:Eo,k.map.depthTexture.minFilter=Ve,k.map.depthTexture.magFilter=Ve):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fe,k.map.depthTexture.magFilter=Fe);k.camera.updateProjectionMatrix()}const ut=k.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<ut;Mt++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(k.map),i.clear());const Et=k.getViewport(Mt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),I.viewport(a)}if(G.isPointLight){const Et=k.camera,Zt=k.matrix,te=G.distance||Et.far;te!==Et.far&&(Et.far=te,Et.updateProjectionMatrix()),rs.setFromMatrixPosition(G.matrixWorld),Et.position.copy(rs),_a.copy(Et.position),_a.add(O0[Mt]),Et.up.copy(B0[Mt]),Et.lookAt(_a),Et.updateMatrixWorld(),Zt.makeTranslation(-rs.x,-rs.y,-rs.z),oc.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),k._frustum.setFromProjectionMatrix(oc,Et.coordinateSystem,Et.reversedDepth)}else k.updateMatrices(G);n=k.getFrustum(),b(R,_,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===os&&v(k,_),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,D,P)};function v(T,R){const _=t.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new En(s.x,s.y,{format:ui,type:Nn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,_,p,y,null)}function E(T,R,_,A){let D=null;const P=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)D=P;else if(D=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=D.uuid,H=R.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let N=X[H];N===void 0&&(N=D.clone(),X[H]=N,R.addEventListener("dispose",C)),D=N}if(D.visible=R.visible,D.wireframe=R.wireframe,A===os?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=i.properties.get(D);I.light=_}return D}function b(T,R,_,A,D){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===os)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const H=t.update(T),X=T.material;if(Array.isArray(X)){const N=H.groups;for(let G=0,k=N.length;G<k;G++){const J=N[G],tt=X[J.materialIndex];if(tt&&tt.visible){const ut=E(T,tt,A,D);T.onBeforeShadow(i,T,R,_,H,ut,J),i.renderBufferDirect(_,null,H,ut,T,J),T.onAfterShadow(i,T,R,_,H,ut,J)}}}else if(X.visible){const N=E(T,X,A,D);T.onBeforeShadow(i,T,R,_,H,N,null),i.renderBufferDirect(_,null,H,N,T,null),T.onAfterShadow(i,T,R,_,H,N,null)}}const I=T.children;for(let H=0,X=I.length;H<X;H++)b(I[H],R,_,A,D)}function C(T){T.target.removeEventListener("dispose",C);for(const _ in c){const A=c[_],D=T.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function k0(i,t){function e(){let L=!1;const it=new xe;let Y=null;const gt=new xe(0,0,0,0);return{setMask:function(at){Y!==at&&!L&&(i.colorMask(at,at,at,at),Y=at)},setLocked:function(at){L=at},setClear:function(at,K,yt,Nt,ve){ve===!0&&(at*=Nt,K*=Nt,yt*=Nt),it.set(at,K,yt,Nt),gt.equals(it)===!1&&(i.clearColor(at,K,yt,Nt),gt.copy(it))},reset:function(){L=!1,Y=null,gt.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,Y=null,gt=null,at=null;return{setReversed:function(K){if(it!==K){const yt=t.get("EXT_clip_control");K?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=K;const Nt=at;at=null,this.setClear(Nt)}},getReversed:function(){return it},setTest:function(K){K?st(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(K){Y!==K&&!L&&(i.depthMask(K),Y=K)},setFunc:function(K){if(it&&(K=Kh[K]),gt!==K){switch(K){case wa:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=K}},setLocked:function(K){L=K},setClear:function(K){at!==K&&(at=K,it&&(K=1-K),i.clearDepth(K))},reset:function(){L=!1,Y=null,gt=null,at=null,it=!1}}}function s(){let L=!1,it=null,Y=null,gt=null,at=null,K=null,yt=null,Nt=null,ve=null;return{setTest:function(ne){L||(ne?st(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ne){it!==ne&&!L&&(i.stencilMask(ne),it=ne)},setFunc:function(ne,Tn,_n){(Y!==ne||gt!==Tn||at!==_n)&&(i.stencilFunc(ne,Tn,_n),Y=ne,gt=Tn,at=_n)},setOp:function(ne,Tn,_n){(K!==ne||yt!==Tn||Nt!==_n)&&(i.stencilOp(ne,Tn,_n),K=ne,yt=Tn,Nt=_n)},setLocked:function(ne){L=ne},setClear:function(ne){ve!==ne&&(i.clearStencil(ne),ve=ne)},reset:function(){L=!1,it=null,Y=null,gt=null,at=null,K=null,yt=null,Nt=null,ve=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,g=[],y=null,m=!1,f=null,v=null,E=null,b=null,C=null,T=null,R=null,_=new lt(0,0,0),A=0,D=!1,P=null,I=null,H=null,X=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(tt)[1]),k=J>=1):tt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),k=J>=2);let ut=null,Mt={};const Et=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),te=new xe().fromArray(Et),Ot=new xe().fromArray(Zt);function j(L,it,Y,gt){const at=new Uint8Array(4),K=i.createTexture();i.bindTexture(L,K),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<Y;yt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return K}const pt={};pt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(zi),Te(!1),pe($o),st(i.CULL_FACE),de(Ln);function st(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Rt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function It(L,it){return h[L]!==it?(i.bindFramebuffer(L,it),h[L]=it,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(L,it){let Y=g,gt=!1;if(L){Y=p.get(it),Y===void 0&&(Y=[],p.set(it,Y));const at=L.textures;if(Y.length!==at.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let K=0,yt=at.length;K<yt;K++)Y[K]=i.COLOR_ATTACHMENT0+K;Y.length=at.length,gt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Y)}function fe(L){return y!==L?(i.useProgram(L),y=L,!0):!1}const Wt={[ai]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[Mh]:i.FUNC_REVERSE_SUBTRACT};Wt[Sh]=i.MIN,Wt[yh]=i.MAX;const ee={[bh]:i.ZERO,[Eh]:i.ONE,[wh]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[Dh]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Ih]:i.ONE_MINUS_CONSTANT_COLOR,[Uh]:i.CONSTANT_ALPHA,[Nh]:i.ONE_MINUS_CONSTANT_ALPHA};function de(L,it,Y,gt,at,K,yt,Nt,ve,ne){if(L===Ln){m===!0&&(Rt(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),L!==xh){if(L!==f||ne!==D){if((v!==ai||C!==ai)&&(i.blendEquation(i.FUNC_ADD),v=ai,C=ai),ne)switch(L){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jo:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",L);break}E=null,b=null,T=null,R=null,_.set(0,0,0),A=0,f=L,D=ne}return}at=at||it,K=K||Y,yt=yt||gt,(it!==v||at!==C)&&(i.blendEquationSeparate(Wt[it],Wt[at]),v=it,C=at),(Y!==E||gt!==b||K!==T||yt!==R)&&(i.blendFuncSeparate(ee[Y],ee[gt],ee[K],ee[yt]),E=Y,b=gt,T=K,R=yt),(Nt.equals(_)===!1||ve!==A)&&(i.blendColor(Nt.r,Nt.g,Nt.b,ve),_.copy(Nt),A=ve),f=L,D=!1}function Ht(L,it){L.side===Ge?Rt(i.CULL_FACE):st(i.CULL_FACE);let Y=L.side===Ze;it&&(Y=!Y),Te(Y),L.blending===Fi&&L.transparent===!1?de(Ln):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const gt=L.stencilWrite;o.setTest(gt),gt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function pe(L){L!==gh?(st(i.CULL_FACE),L!==I&&(L===$o?i.cullFace(i.BACK):L===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),I=L}function je(L){L!==H&&(k&&i.lineWidth(L),H=L)}function U(L,it,Y){L?(st(i.POLYGON_OFFSET_FILL),(X!==it||N!==Y)&&(X=it,N=Y,a.getReversed()&&(it=-it),i.polygonOffset(it,Y))):Rt(i.POLYGON_OFFSET_FILL)}function Ae(L){L?st(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function Xt(L){L===void 0&&(L=i.TEXTURE0+G-1),ut!==L&&(i.activeTexture(L),ut=L)}function le(L,it,Y){Y===void 0&&(ut===null?Y=i.TEXTURE0+G-1:Y=ut);let gt=Mt[Y];gt===void 0&&(gt={type:void 0,texture:void 0},Mt[Y]=gt),(gt.type!==L||gt.texture!==it)&&(ut!==Y&&(i.activeTexture(Y),ut=Y),i.bindTexture(L,it||pt[L]),gt.type=L,gt.texture=it)}function ct(){const L=Mt[ut];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function O(){try{i.texSubImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function et(){try{i.texStorage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function ot(){try{i.texStorage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function W(){try{i.texImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function Z(){try{i.texImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function mt(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function xt(L,it){d[L]!==it&&(i.pixelStorei(L,it),d[L]=it)}function rt(L){te.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function nt(L){Ot.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ot.copy(L))}function Lt(L,it){let Y=c.get(it);Y===void 0&&(Y=new WeakMap,c.set(it,Y));let gt=Y.get(L);gt===void 0&&(gt=i.getUniformBlockIndex(it,L.name),Y.set(L,gt))}function Bt(L,it){const gt=c.get(it).get(L);l.get(it)!==gt&&(i.uniformBlockBinding(it,gt,L.__bindingPointIndex),l.set(it,gt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ut=null,Mt={},h={},p=new WeakMap,g=[],y=null,m=!1,f=null,v=null,E=null,b=null,C=null,T=null,R=null,_=new lt(0,0,0),A=0,D=!1,P=null,I=null,H=null,X=null,N=null,te.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Rt,bindFramebuffer:It,drawBuffers:Ct,useProgram:fe,setBlending:de,setMaterial:Ht,setFlipSided:Te,setCullFace:pe,setLineWidth:je,setPolygonOffset:U,setScissorTest:Ae,activeTexture:Xt,bindTexture:le,unbindTexture:ct,compressedTexImage2D:ge,compressedTexImage3D:w,texImage2D:W,texImage3D:Z,pixelStorei:xt,getParameter:mt,updateUBOMapping:Lt,uniformBlockBinding:Bt,texStorage2D:et,texStorage3D:ot,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:rt,viewport:nt,reset:Kt}}function G0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,x){return g?new OffscreenCanvas(w,x):gr("canvas")}function m(w,x,O){let q=1;const $=ge(w);if(($.width>O||$.height>O)&&(q=O/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const et=Math.floor(q*$.width),ot=Math.floor(q*$.height);h===void 0&&(h=y(et,ot));const W=x?y(et,ot):h;return W.width=et,W.height=ot,W.getContext("2d").drawImage(w,0,0,et,ot),At("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+et+"x"+ot+")."),W}else return"data"in w&&At("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function f(w){return w.generateMipmaps}function v(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,x,O,q,$,et=!1){if(w!==null){if(i[w]!==void 0)return i[w];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;q&&(ot=t.get("EXT_texture_norm16"),ot||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=x;if(x===i.RED&&(O===i.FLOAT&&(W=i.R32F),O===i.HALF_FLOAT&&(W=i.R16F),O===i.UNSIGNED_BYTE&&(W=i.R8),O===i.UNSIGNED_SHORT&&ot&&(W=ot.R16_EXT),O===i.SHORT&&ot&&(W=ot.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.R8UI),O===i.UNSIGNED_SHORT&&(W=i.R16UI),O===i.UNSIGNED_INT&&(W=i.R32UI),O===i.BYTE&&(W=i.R8I),O===i.SHORT&&(W=i.R16I),O===i.INT&&(W=i.R32I)),x===i.RG&&(O===i.FLOAT&&(W=i.RG32F),O===i.HALF_FLOAT&&(W=i.RG16F),O===i.UNSIGNED_BYTE&&(W=i.RG8),O===i.UNSIGNED_SHORT&&ot&&(W=ot.RG16_EXT),O===i.SHORT&&ot&&(W=ot.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RG8UI),O===i.UNSIGNED_SHORT&&(W=i.RG16UI),O===i.UNSIGNED_INT&&(W=i.RG32UI),O===i.BYTE&&(W=i.RG8I),O===i.SHORT&&(W=i.RG16I),O===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGB8UI),O===i.UNSIGNED_SHORT&&(W=i.RGB16UI),O===i.UNSIGNED_INT&&(W=i.RGB32UI),O===i.BYTE&&(W=i.RGB8I),O===i.SHORT&&(W=i.RGB16I),O===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),O===i.UNSIGNED_INT&&(W=i.RGBA32UI),O===i.BYTE&&(W=i.RGBA8I),O===i.SHORT&&(W=i.RGBA16I),O===i.INT&&(W=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&ot&&(W=ot.RGB16_EXT),O===i.SHORT&&ot&&(W=ot.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),x===i.RGBA){const Z=et?mr:qt.getTransfer($);O===i.FLOAT&&(W=i.RGBA32F),O===i.HALF_FLOAT&&(W=i.RGBA16F),O===i.UNSIGNED_BYTE&&(W=Z===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ot&&(W=ot.RGBA16_EXT),O===i.SHORT&&ot&&(W=ot.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function C(w,x){let O;return w?x===null||x===wn||x===fs?O=i.DEPTH24_STENCIL8:x===dn?O=i.DEPTH32F_STENCIL8:x===ds&&(O=i.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wn||x===fs?O=i.DEPTH_COMPONENT24:x===dn?O=i.DEPTH_COMPONENT32F:x===ds&&(O=i.DEPTH_COMPONENT16),O}function T(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==Ve?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(w){const x=w.target;x.removeEventListener("dispose",_),P(x)}function A(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,q=p.get(O);if(q){const $=q[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&D(w),Object.keys(q).length===0&&p.delete(O)}n.remove(w)}function D(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const O=w.source,q=p.get(O);delete q[x.__cacheKey],a.memory.textures--}function P(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let $=0;$<x.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[q][$]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let q=0,$=O.length;q<$;q++){const et=n.get(O[q]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(w)}let I=0;function H(){I=0}function X(){return I}function N(w){I=w}function G(){const w=I;return w>=s.maxTextures&&At("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function k(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function J(w,x){const O=n.get(w);if(w.isVideoTexture&&le(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const q=w.image;if(q===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function tt(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Rt(O,w,x);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function ut(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Rt(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function Mt(w,x){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){It(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const Et={[cr]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[hr]:i.MIRRORED_REPEAT},Zt={[Fe]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},te={[Gh]:i.NEVER,[Yh]:i.ALWAYS,[Vh]:i.LESS,[Eo]:i.LEQUAL,[Hh]:i.EQUAL,[wo]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function Ot(w,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ve||x.magFilter===Br||x.magFilter===Ss||x.magFilter===li||x.minFilter===Ve||x.minFilter===Br||x.minFilter===Ss||x.minFilter===li)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Et[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Et[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Et[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Zt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Zt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fe||x.minFilter!==Ss&&x.minFilter!==li||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function j(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let $=p.get(q);$===void 0&&($={},p.set(q,$));const et=k(x);if(et!==w.__cacheKey){$[et]===void 0&&($[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[et].usedTimes++;const ot=$[w.__cacheKey];ot!==void 0&&($[w.__cacheKey].usedTimes--,ot.usedTimes===0&&D(x)),w.__cacheKey=et,w.__webglTexture=$[et].texture}return O}function pt(w,x,O){return Math.floor(Math.floor(w/O)/x)}function st(w,x,O,q){const et=w.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{et.sort((xt,rt)=>xt.start-rt.start);let ot=0;for(let xt=1;xt<et.length;xt++){const rt=et[ot],nt=et[xt],Lt=rt.start+rt.count,Bt=pt(nt.start,x.width,4),Kt=pt(rt.start,x.width,4);nt.start<=Lt+1&&Bt===Kt&&pt(nt.start+nt.count-1,x.width,4)===Bt?rt.count=Math.max(rt.count,nt.start+nt.count-rt.start):(++ot,et[ot]=nt)}et.length=ot+1;const W=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let xt=0,rt=et.length;xt<rt;xt++){const nt=et[xt],Lt=Math.floor(nt.start/4),Bt=Math.ceil(nt.count/4),Kt=Lt%x.width,L=Math.floor(Lt/x.width),it=Bt,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Kt,L,it,Y,O,q,x.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,W),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function Rt(w,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const $=j(w,x),et=x.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+O);const ot=n.get(et);if(et.version!==ot.__version||$===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Y=qt.getPrimaries(qt.workingColorSpace),gt=x.colorSpace===Zn?null:qt.getPrimaries(x.colorSpace),at=x.colorSpace===Zn||Y===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=m(x.image,!1,s.maxTextureSize);Z=ct(x,Z);const mt=r.convert(x.format,x.colorSpace),xt=r.convert(x.type);let rt=b(x.internalFormat,mt,xt,x.normalized,x.colorSpace,x.isVideoTexture);Ot(q,x);let nt;const Lt=x.mipmaps,Bt=x.isVideoTexture!==!0,Kt=ot.__version===void 0||$===!0,L=et.dataReady,it=T(x,Z);if(x.isDepthTexture)rt=C(x.format===ci,x.type),Kt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,rt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,rt,Z.width,Z.height,0,mt,xt,null));else if(x.isDataTexture)if(Lt.length>0){Bt&&Kt&&e.texStorage2D(i.TEXTURE_2D,it,rt,Lt[0].width,Lt[0].height);for(let Y=0,gt=Lt.length;Y<gt;Y++)nt=Lt[Y],Bt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,nt.width,nt.height,mt,xt,nt.data):e.texImage2D(i.TEXTURE_2D,Y,rt,nt.width,nt.height,0,mt,xt,nt.data);x.generateMipmaps=!1}else Bt?(Kt&&e.texStorage2D(i.TEXTURE_2D,it,rt,Z.width,Z.height),L&&st(x,Z,mt,xt)):e.texImage2D(i.TEXTURE_2D,0,rt,Z.width,Z.height,0,mt,xt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,rt,Lt[0].width,Lt[0].height,Z.depth);for(let Y=0,gt=Lt.length;Y<gt;Y++)if(nt=Lt[Y],x.format!==fn)if(mt!==null)if(Bt){if(L)if(x.layerUpdates.size>0){const at=Bl(nt.width,nt.height,x.format,x.type);for(const K of x.layerUpdates){const yt=nt.data.subarray(K*at/nt.data.BYTES_PER_ELEMENT,(K+1)*at/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,K,nt.width,nt.height,1,mt,yt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,nt.width,nt.height,Z.depth,mt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,rt,nt.width,nt.height,Z.depth,0,nt.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,nt.width,nt.height,Z.depth,mt,xt,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,rt,nt.width,nt.height,Z.depth,0,mt,xt,nt.data)}else{Bt&&Kt&&e.texStorage2D(i.TEXTURE_2D,it,rt,Lt[0].width,Lt[0].height);for(let Y=0,gt=Lt.length;Y<gt;Y++)nt=Lt[Y],x.format!==fn?mt!==null?Bt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,nt.width,nt.height,mt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,rt,nt.width,nt.height,0,nt.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,nt.width,nt.height,mt,xt,nt.data):e.texImage2D(i.TEXTURE_2D,Y,rt,nt.width,nt.height,0,mt,xt,nt.data)}else if(x.isDataArrayTexture)if(Bt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,rt,Z.width,Z.height,Z.depth),L)if(x.layerUpdates.size>0){const Y=Bl(Z.width,Z.height,x.format,x.type);for(const gt of x.layerUpdates){const at=Z.data.subarray(gt*Y/Z.data.BYTES_PER_ELEMENT,(gt+1)*Y/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,Z.width,Z.height,1,mt,xt,at)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,mt,xt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,Z.width,Z.height,Z.depth,0,mt,xt,Z.data);else if(x.isData3DTexture)Bt?(Kt&&e.texStorage3D(i.TEXTURE_3D,it,rt,Z.width,Z.height,Z.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,mt,xt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,rt,Z.width,Z.height,Z.depth,0,mt,xt,Z.data);else if(x.isFramebufferTexture){if(Kt)if(Bt)e.texStorage2D(i.TEXTURE_2D,it,rt,Z.width,Z.height);else{let Y=Z.width,gt=Z.height;for(let at=0;at<it;at++)e.texImage2D(i.TEXTURE_2D,at,rt,Y,gt,0,mt,xt,null),Y>>=1,gt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),d.add(x),Y.onpaint=Nt=>{const ve=Nt.changedElements;for(const ne of d)ve.includes(ne.image)&&(ne.needsUpdate=!0)},Y.requestPaint();return}const gt=0,at=i.RGBA,K=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,gt,at,K,yt,Z),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Bt&&Kt){const Y=ge(Lt[0]);e.texStorage2D(i.TEXTURE_2D,it,rt,Y.width,Y.height)}for(let Y=0,gt=Lt.length;Y<gt;Y++)nt=Lt[Y],Bt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt,xt,nt):e.texImage2D(i.TEXTURE_2D,Y,rt,mt,xt,nt);x.generateMipmaps=!1}else if(Bt){if(Kt){const Y=ge(Z);e.texStorage2D(i.TEXTURE_2D,it,rt,Y.width,Y.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,xt,Z)}else e.texImage2D(i.TEXTURE_2D,0,rt,mt,xt,Z);f(x)&&v(q),ot.__version=et.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function It(w,x,O){if(x.image.length!==6)return;const q=j(w,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const et=n.get($);if($.version!==et.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const ot=qt.getPrimaries(qt.workingColorSpace),W=x.colorSpace===Zn?null:qt.getPrimaries(x.colorSpace),Z=x.colorSpace===Zn||ot===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const mt=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,rt=[];for(let K=0;K<6;K++)!mt&&!xt?rt[K]=m(x.image[K],!0,s.maxCubemapSize):rt[K]=xt?x.image[K].image:x.image[K],rt[K]=ct(x,rt[K]);const nt=rt[0],Lt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),Kt=b(x.internalFormat,Lt,Bt,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,it=et.__version===void 0||q===!0,Y=$.dataReady;let gt=T(x,nt);Ot(i.TEXTURE_CUBE_MAP,x);let at;if(mt){L&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,nt.width,nt.height);for(let K=0;K<6;K++){at=rt[K].mipmaps;for(let yt=0;yt<at.length;yt++){const Nt=at[yt];x.format!==fn?Lt!==null?L?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,0,0,Nt.width,Nt.height,Lt,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,Kt,Nt.width,Nt.height,0,Nt.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,0,0,Nt.width,Nt.height,Lt,Bt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,Kt,Nt.width,Nt.height,0,Lt,Bt,Nt.data)}}}else{if(at=x.mipmaps,L&&it){at.length>0&&gt++;const K=ge(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(xt){L?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,rt[K].width,rt[K].height,Lt,Bt,rt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,rt[K].width,rt[K].height,0,Lt,Bt,rt[K].data);for(let yt=0;yt<at.length;yt++){const ve=at[yt].image[K].image;L?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,0,0,ve.width,ve.height,Lt,Bt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,Kt,ve.width,ve.height,0,Lt,Bt,ve.data)}}else{L?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,Bt,rt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Lt,Bt,rt[K]);for(let yt=0;yt<at.length;yt++){const Nt=at[yt];L?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,0,0,Lt,Bt,Nt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,Kt,Lt,Bt,Nt.image[K])}}}f(x)&&v(i.TEXTURE_CUBE_MAP),et.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ct(w,x,O,q,$,et){const ot=r.convert(O.format,O.colorSpace),W=r.convert(O.type),Z=b(O.internalFormat,ot,W,O.normalized,O.colorSpace),mt=n.get(x),xt=n.get(O);if(xt.__renderTarget=x,!mt.__hasExternalTextures){const rt=Math.max(1,x.width>>et),nt=Math.max(1,x.height>>et);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,et,Z,rt,nt,x.depth,0,ot,W,null):e.texImage2D($,et,Z,rt,nt,0,ot,W,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,xt.__webglTexture,0,Ae(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,xt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,$=q&&q.isDepthTexture?q.type:null,et=C(x.stencilBuffer,$),ot=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(x),et,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,w)}else{const q=x.textures;for(let $=0;$<q.length;$++){const et=q[$],ot=r.convert(et.format,et.colorSpace),W=r.convert(et.type),Z=b(et.internalFormat,ot,W,et.normalized,et.colorSpace);Xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(x),Z,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(w,x,O){const q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x.depthTexture);const mt=r.convert(x.depthTexture.format),xt=r.convert(x.depthTexture.type);let rt;x.depthTexture.format===Fn?rt=i.DEPTH_COMPONENT24:x.depthTexture.format===ci&&(rt=i.DEPTH24_STENCIL8);for(let nt=0;nt<6;nt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,rt,x.width,x.height,0,mt,xt,null)}}else J(x.depthTexture,0);const et=$.__webglTexture,ot=Ae(x),W=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Z=x.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fn)Xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,et,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,et,0);else if(x.depthTexture.format===ci)Xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,W,et,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Z,W,et,0);else throw new Error("Unknown depthTexture format")}function ee(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)Wt(x.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?Wt(x.__webglFramebuffer[0],w,0):Wt(x.__webglFramebuffer,w,0)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),fe(x.__webglDepthbuffer[q],w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),fe(x.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(w,x,O){const q=n.get(w);x!==void 0&&Ct(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ee(w)}function Ht(w){const x=w.texture,O=n.get(w),q=n.get(x);w.addEventListener("dispose",_);const $=w.textures,et=w.isWebGLCubeRenderTarget===!0,ot=$.length>1;if(ot||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),et){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[W][Z]=i.createFramebuffer()}else O.__webglFramebuffer[W]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)O.__webglFramebuffer[W]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ot)for(let W=0,Z=$.length;W<Z;W++){const mt=n.get($[W]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Xt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<$.length;W++){const Z=$[W];O.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const mt=r.convert(Z.format,Z.colorSpace),xt=r.convert(Z.type),rt=b(Z.internalFormat,mt,xt,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),nt=Ae(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,O.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Ct(O.__webglFramebuffer[W][Z],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z);else Ct(O.__webglFramebuffer[W],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(x)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let W=0,Z=$.length;W<Z;W++){const mt=$[W],xt=n.get(mt);let rt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,xt.__webglTexture),Ot(rt,mt),Ct(O.__webglFramebuffer,w,mt,i.COLOR_ATTACHMENT0+W,rt,0),f(mt)&&v(rt)}e.unbindTexture()}else{let W=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(W=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,q.__webglTexture),Ot(W,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Ct(O.__webglFramebuffer[Z],w,x,i.COLOR_ATTACHMENT0,W,Z);else Ct(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,W,0);f(x)&&v(W),e.unbindTexture()}w.depthBuffer&&ee(w)}function Te(w){const x=w.textures;for(let O=0,q=x.length;O<q;O++){const $=x[O];if(f($)){const et=E(w),ot=n.get($).__webglTexture;e.bindTexture(et,ot),v(et),e.unbindTexture()}}}const pe=[],je=[];function U(w){if(w.samples>0){if(Xt(w)===!1){const x=w.textures,O=w.width,q=w.height;let $=i.COLOR_BUFFER_BIT;const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(w),W=x.length>1;if(W)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const Z=w.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[mt]);const xt=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,$,i.NEAREST),l===!0&&(pe.length=0,je.length=0,pe.push(i.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(pe.push(et),je.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[mt]);const xt=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ae(w){return Math.min(s.maxSamples,w.samples)}function Xt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function ct(w,x){const O=w.colorSpace,q=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==pr&&O!==Zn&&(qt.getTransfer(O)===Jt?(q!==fn||$!==tn)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",O)),x}function ge(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=X,this.setTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=tt,this.setTexture3D=ut,this.setTextureCube=Mt,this.rebindTextures=de,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function V0(i,t){function e(n,s=Zn){let r;const a=qt.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===fn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===Mo)return i.RED;if(n===So)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===ur||n===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===Ha||n===Wa||n===Xa||n===Ya||n===qa||n===Za||n===ja||n===Ka||n===$a||n===Ja||n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ro||n===ao||n===dr||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Vc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:H0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends Qn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",m=new X0,f={},v=e.getContextAttributes();let E=null,b=null;const C=[],T=[],R=new Tt;let _=null;const A=new Qe;A.viewport=new xe;const D=new Qe;D.viewport=new xe;const P=[A,D],I=new Ju;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pt=C[j];return pt===void 0&&(pt=new Wr,C[j]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(j){let pt=C[j];return pt===void 0&&(pt=new Wr,C[j]=pt),pt.getGripSpace()},this.getHand=function(j){let pt=C[j];return pt===void 0&&(pt=new Wr,C[j]=pt),pt.getHandSpace()};function N(j){const pt=T.indexOf(j.inputSource);if(pt===-1)return;const st=C[pt];st!==void 0&&(st.update(j.inputSource,j.frame,c||a),st.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",k);for(let j=0;j<C.length;j++){const pt=T[j];pt!==null&&(T[j]=null,C[j].disconnect(pt))}H=null,X=null,m.reset();for(const j in f)delete f[j];t.setRenderTarget(E),p=null,h=null,d=null,s=null,b=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Rt=null,It=null;v.depth&&(It=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=v.stencil?ci:Fn,Rt=v.stencil?fs:wn);const Ct={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new En(h.textureWidth,h.textureHeight,{format:fn,type:tn,depthTexture:new Vi(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const st={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new En(p.framebufferWidth,p.framebufferHeight,{format:fn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let pt=0;pt<j.removed.length;pt++){const st=j.removed[pt],Rt=T.indexOf(st);Rt>=0&&(T[Rt]=null,C[Rt].disconnect(st))}for(let pt=0;pt<j.added.length;pt++){const st=j.added[pt];let Rt=T.indexOf(st);if(Rt===-1){for(let Ct=0;Ct<C.length;Ct++)if(Ct>=T.length){T.push(st),Rt=Ct;break}else if(T[Ct]===null){T[Ct]=st,Rt=Ct;break}if(Rt===-1)break}const It=C[Rt];It&&It.connect(st)}}const J=new M,tt=new M;function ut(j,pt,st){J.setFromMatrixPosition(pt.matrixWorld),tt.setFromMatrixPosition(st.matrixWorld);const Rt=J.distanceTo(tt),It=pt.projectionMatrix.elements,Ct=st.projectionMatrix.elements,fe=It[14]/(It[10]-1),Wt=It[14]/(It[10]+1),ee=(It[9]+1)/It[5],de=(It[9]-1)/It[5],Ht=(It[8]-1)/It[0],Te=(Ct[8]+1)/Ct[0],pe=fe*Ht,je=fe*Te,U=Rt/(-Ht+Te),Ae=U*-Ht;if(pt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ae),j.translateZ(U),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),It[10]===-1)j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=fe+U,le=Wt+U,ct=pe-Ae,ge=je+(Rt-Ae),w=ee*Wt/le*Xt,x=de*Wt/le*Xt;j.projectionMatrix.makePerspective(ct,ge,w,x,Xt,le),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Mt(j,pt){pt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let pt=j.near,st=j.far;m.texture!==null&&(m.depthNear>0&&(pt=m.depthNear),m.depthFar>0&&(st=m.depthFar)),I.near=D.near=A.near=pt,I.far=D.far=A.far=st,(H!==I.near||X!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,X=I.far),I.layers.mask=j.layers.mask|6,A.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const Rt=j.parent,It=I.cameras;Mt(I,Rt);for(let Ct=0;Ct<It.length;Ct++)Mt(It[Ct],Rt);It.length===2?ut(I,A,D):I.projectionMatrix.copy(A.projectionMatrix),Et(j,I,Rt)};function Et(j,pt,st){st===null?j.matrix.copy(pt.matrixWorld):(j.matrix.copy(st.matrixWorld),j.matrix.invert(),j.matrix.multiply(pt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ms*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return f[j]};let Zt=null;function te(j,pt){if(u=pt.getViewerPose(c||a),g=pt,u!==null){const st=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Rt=!1;st.length!==I.cameras.length&&(I.cameras.length=0,Rt=!0);for(let Wt=0;Wt<st.length;Wt++){const ee=st[Wt];let de=null;if(p!==null)de=p.getViewport(ee);else{const Te=d.getViewSubImage(h,ee);de=Te.viewport,Wt===0&&(t.setRenderTargetTextures(b,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(b))}let Ht=P[Wt];Ht===void 0&&(Ht=new Qe,Ht.layers.enable(Wt),Ht.viewport=new xe,P[Wt]=Ht),Ht.matrix.fromArray(ee.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ee.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(de.x,de.y,de.width,de.height),Wt===0&&(I.matrix.copy(Ht.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Rt===!0&&I.cameras.push(Ht)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const Wt=d.getDepthInformation(st[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(It&&It.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<st.length;Wt++){const ee=st[Wt].camera;if(ee){let de=f[ee];de||(de=new Vc,f[ee]=de);const Ht=d.getCameraImage(ee);de.sourceTexture=Ht}}}}for(let st=0;st<C.length;st++){const Rt=T[st],It=C[st];Rt!==null&&It!==void 0&&It.update(Rt,pt,c||a)}Zt&&Zt(j,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}const Ot=new Yc;Ot.setAnimationLoop(te),this.setAnimationLoop=function(j){Zt=j},this.dispose=function(){}}}const q0=new re,Qc=new Dt;Qc.set(-1,0,0,0,1,0,0,0,1);function Z0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Hc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,E,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qc),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const b=E.program;n.uniformBlockBinding(v,b)}function c(v,E){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(v,C);const T=t.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const E=d();v.__bindingPointIndex=E;const b=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=s[v.id],b=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,R=b.length;T<R;T++){const _=Array.isArray(b[T])?b[T]:[b[T]];for(let A=0,D=_.length;A<D;A++){const P=_[A];if(p(P,T,A,C)===!0){const I=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let N=0;N<H.length;N++){const G=H[N],k=y(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+X,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):ArrayBuffer.isView(G)?P.__data.set(new G.constructor(G.buffer,G.byteOffset,P.__data.length)):(G.toArray(P.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,E,b,C){const T=v.value,R=E+"_"+b;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:ArrayBuffer.isView(T)?C[R]=T.slice():C[R]=T.clone(),!0;{const _=C[R];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return C[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(v){const E=v.uniforms;let b=0;const C=16;for(let R=0,_=E.length;R<_;R++){const A=Array.isArray(E[R])?E[R]:[E[R]];for(let D=0,P=A.length;D<P;D++){const I=A[D],H=Array.isArray(I.value)?I.value:[I.value];for(let X=0,N=H.length;X<N;X++){const G=H[X],k=y(G),J=b%C,tt=J%k.boundary,ut=J+tt;b+=tt,ut!==0&&C-ut<k.storage&&(b+=C-ut),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=k.storage}}}const T=b%C;return T>0&&(b+=C-T),v.__size=b,v.__cache={},this}function y(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):At("WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const K0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function $0(){return Mn===null&&(Mn=new zc(K0,16,16,ui,Nn),Mn.name="DFG_LUT",Mn.minFilter=Ve,Mn.magFilter=Ve,Mn.wrapS=yn,Mn.wrapT=yn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class J0{constructor(t={}){const{canvas:e=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=p,m=new Set([bo,yo,So]),f=new Set([tn,wn,ds,fs,xo,vo]),v=new Uint32Array(4),E=new Int32Array(4),b=new M;let C=null,T=null;const R=[],_=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,I=null;this._outputColorSpace=Ce;let H=0,X=0,N=null,G=-1,k=null;const J=new xe,tt=new xe;let ut=null;const Mt=new lt(0);let Et=0,Zt=e.width,te=e.height,Ot=1,j=null,pt=null;const st=new xe(0,0,Zt,te),Rt=new xe(0,0,Zt,te);let It=!1;const Ct=new Po;let fe=!1,Wt=!1;const ee=new re,de=new M,Ht=new xe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function je(){return N===null?Ot:1}let U=n;function Ae(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),U===null){const F="webgl2";if(U=Ae(F,S),U===null)throw Ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Yt("WebGLRenderer: "+S.message),S}let Xt,le,ct,ge,w,x,O,q,$,et,ot,W,Z,mt,xt,rt,nt,Lt,Bt,Kt,L,it,Y;function gt(){Xt=new $p(U),Xt.init(),L=new V0(U,Xt),le=new Hp(U,Xt,t,L),ct=new k0(U,Xt),le.reversedDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),ge=new tm(U),w=new T0,x=new G0(U,Xt,ct,w,le,L,ge),O=new Kp(D),q=new id(U),it=new Gp(U,q),$=new Jp(U,q,ge,it),et=new nm(U,$,q,it,ge),Lt=new em(U,le,x),xt=new Wp(w),ot=new w0(D,O,Xt,le,it,xt),W=new Z0(D,w),Z=new R0,mt=new U0(Xt),nt=new kp(D,O,ct,et,g,l),rt=new z0(D,et,le),Y=new j0(U,ge,le,ct),Bt=new Vp(U,Xt,ge),Kt=new Qp(U,Xt,ge),ge.programs=ot.programs,D.capabilities=le,D.extensions=Xt,D.properties=w,D.renderLists=Z,D.shadowMap=rt,D.state=ct,D.info=ge}gt(),y!==tn&&(A=new sm(y,e.width,e.height,s,r));const at=new Y0(D,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(S){S!==void 0&&(Ot=S,this.setSize(Zt,te,!1))},this.getSize=function(S){return S.set(Zt,te)},this.setSize=function(S,F,V=!0){if(at.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=S,te=F,e.width=Math.floor(S*Ot),e.height=Math.floor(F*Ot),V===!0&&(e.style.width=S+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Zt*Ot,te*Ot).floor()},this.setDrawingBufferSize=function(S,F,V){Zt=S,te=F,Ot=V,e.width=Math.floor(S*V),e.height=Math.floor(F*V),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(y===tn){Yt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){At("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(st)},this.setViewport=function(S,F,V,B){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,F,V,B),ct.viewport(J.copy(st).multiplyScalar(Ot).round())},this.getScissor=function(S){return S.copy(Rt)},this.setScissor=function(S,F,V,B){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,F,V,B),ct.scissor(tt.copy(Rt).multiplyScalar(Ot).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(S){ct.setScissorTest(It=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){pt=S},this.getClearColor=function(S){return S.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,V=!0){let B=0;if(S){let z=!1;if(N!==null){const ft=N.texture.format;z=m.has(ft)}if(z){const ft=N.texture.type,vt=f.has(ft),dt=nt.getClearColor(),St=nt.getClearAlpha(),bt=dt.r,Ft=dt.g,Gt=dt.b;vt?(v[0]=bt,v[1]=Ft,v[2]=Gt,v[3]=St,U.clearBufferuiv(U.COLOR,0,v)):(E[0]=bt,E[1]=Ft,E[2]=Gt,E[3]=St,U.clearBufferiv(U.COLOR,0,E))}else B|=U.COLOR_BUFFER_BIT}F&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),nt.dispose(),Z.dispose(),mt.dispose(),w.dispose(),O.dispose(),et.dispose(),it.dispose(),Y.dispose(),ot.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ho),at.removeEventListener("sessionend",Wo),ei.stop()};function K(S){S.preventDefault(),_r("WebGLRenderer: Context Lost."),P=!0}function yt(){_r("WebGLRenderer: Context Restored."),P=!1;const S=ge.autoReset,F=rt.enabled,V=rt.autoUpdate,B=rt.needsUpdate,z=rt.type;gt(),ge.autoReset=S,rt.enabled=F,rt.autoUpdate=V,rt.needsUpdate=B,rt.type=z}function Nt(S){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ve(S){const F=S.target;F.removeEventListener("dispose",ve),ne(F)}function ne(S){Tn(S),w.remove(S)}function Tn(S){const F=w.get(S).programs;F!==void 0&&(F.forEach(function(V){ot.releaseProgram(V)}),S.isShaderMaterial&&ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,V,B,z,ft){F===null&&(F=Te);const vt=z.isMesh&&z.matrixWorld.determinant()<0,dt=hh(S,F,V,B,z);ct.setMaterial(B,vt);let St=V.index,bt=1;if(B.wireframe===!0){if(St=$.getWireframeAttribute(V),St===void 0)return;bt=2}const Ft=V.drawRange,Gt=V.attributes.position;let wt=Ft.start*bt,ie=(Ft.start+Ft.count)*bt;ft!==null&&(wt=Math.max(wt,ft.start*bt),ie=Math.min(ie,(ft.start+ft.count)*bt)),St!==null?(wt=Math.max(wt,0),ie=Math.min(ie,St.count)):Gt!=null&&(wt=Math.max(wt,0),ie=Math.min(ie,Gt.count));const Me=ie-wt;if(Me<0||Me===1/0)return;it.setup(z,B,dt,V,St);let _e,ae=Bt;if(St!==null&&(_e=q.get(St),ae=Kt,ae.setIndex(_e)),z.isMesh)B.wireframe===!0?(ct.setLineWidth(B.wireframeLinewidth*je()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(z.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),ct.setLineWidth(Oe*je()),z.isLineSegments?ae.setMode(U.LINES):z.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else z.isPoints?ae.setMode(U.POINTS):z.isSprite&&ae.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Oe=z._multiDrawStarts,_t=z._multiDrawCounts,Ke=z._multiDrawCount,jt=St?q.get(St).bytesPerElement:1,rn=w.get(B).currentProgram.getUniforms();for(let xn=0;xn<Ke;xn++)rn.setValue(U,"_gl_DrawID",xn),ae.render(Oe[xn]/jt,_t[xn])}else if(z.isInstancedMesh)ae.renderInstances(wt,Me,z.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_t=Math.min(V.instanceCount,Oe);ae.renderInstances(wt,Me,_t)}else ae.render(wt,Me)};function _n(S,F,V){S.transparent===!0&&S.side===Ge&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,Ms(S,F,V),S.side=gn,S.needsUpdate=!0,Ms(S,F,V),S.side=Ge):Ms(S,F,V)}this.compile=function(S,F,V=null){V===null&&(V=S),T=mt.get(V),T.init(F),_.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){const dt=ft[vt];_n(dt,V,z),B.add(dt)}else _n(ft,V,z),B.add(ft)}),T=_.pop(),B},this.compileAsync=function(S,F,V=null){const B=this.compile(S,F,V);return new Promise(z=>{function ft(){if(B.forEach(function(vt){w.get(vt).currentProgram.isReady()&&B.delete(vt)}),B.size===0){z(S);return}setTimeout(ft,10)}Xt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ur=null;function lh(S){Ur&&Ur(S)}function Ho(){ei.stop()}function Wo(){ei.start()}const ei=new Yc;ei.setAnimationLoop(lh),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(S){Ur=S,at.setAnimationLoop(S),S===null?ei.stop():ei.start()},at.addEventListener("sessionstart",Ho),at.addEventListener("sessionend",Wo),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(S,F);const V=at.enabled===!0&&at.isPresenting===!0,B=A!==null&&(N===null||V)&&A.begin(D,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),S.isScene===!0&&S.onBeforeRender(D,S,F,N),T=mt.get(S,_.length),T.init(F),T.state.textureUnits=x.getTextureUnits(),_.push(T),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ct.setFromProjectionMatrix(ee,bn,F.reversedDepth),Wt=this.localClippingEnabled,fe=xt.init(this.clippingPlanes,Wt),C=Z.get(S,R.length),C.init(),R.push(C),at.enabled===!0&&at.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&Nr(vt,F,-1/0,D.sortObjects)}Nr(S,F,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(j,pt),pe=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,pe&&nt.addToRenderList(C,S),this.info.render.frame++,fe===!0&&xt.beginShadows();const z=T.state.shadowsArray;if(rt.render(z,S,F),fe===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&A.hasRenderPass())===!1){const vt=C.opaque,dt=C.transmissive;if(T.setupLights(),F.isArrayCamera){const St=F.cameras;if(dt.length>0)for(let bt=0,Ft=St.length;bt<Ft;bt++){const Gt=St[bt];Yo(vt,dt,S,Gt)}pe&&nt.render(S);for(let bt=0,Ft=St.length;bt<Ft;bt++){const Gt=St[bt];Xo(C,S,Gt,Gt.viewport)}}else dt.length>0&&Yo(vt,dt,S,F),pe&&nt.render(S),Xo(C,S,F)}N!==null&&X===0&&(x.updateMultisampleRenderTarget(N),x.updateRenderTargetMipmap(N)),B&&A.end(D),S.isScene===!0&&S.onAfterRender(D,S,F),it.resetDefaultState(),G=-1,k=null,_.pop(),_.length>0?(T=_[_.length-1],x.setTextureUnits(T.state.textureUnits),fe===!0&&xt.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,I!==null&&I.renderEnd()};function Nr(S,F,V,B){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ct.intersectsSprite(S)){B&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const vt=et.update(S),dt=S.material;dt.visible&&C.push(S,vt,dt,V,Ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ct.intersectsObject(S))){const vt=et.update(S),dt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ht.copy(vt.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(ee)),Array.isArray(dt)){const St=vt.groups;for(let bt=0,Ft=St.length;bt<Ft;bt++){const Gt=St[bt],wt=dt[Gt.materialIndex];wt&&wt.visible&&C.push(S,vt,wt,V,Ht.z,Gt)}}else dt.visible&&C.push(S,vt,dt,V,Ht.z,null)}}const ft=S.children;for(let vt=0,dt=ft.length;vt<dt;vt++)Nr(ft[vt],F,V,B)}function Xo(S,F,V,B){const{opaque:z,transmissive:ft,transparent:vt}=S;T.setupLightsView(V),fe===!0&&xt.setGlobalState(D.clippingPlanes,V),B&&ct.viewport(J.copy(B)),z.length>0&&vs(z,F,V),ft.length>0&&vs(ft,F,V),vt.length>0&&vs(vt,F,V),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Yo(S,F,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const wt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new En(1,1,{generateMipmaps:!0,type:wt?Nn:tn,minFilter:li,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ft=T.state.transmissionRenderTarget[B.id],vt=B.viewport||J;ft.setSize(vt.z*D.transmissionResolutionScale,vt.w*D.transmissionResolutionScale);const dt=D.getRenderTarget(),St=D.getActiveCubeFace(),bt=D.getActiveMipmapLevel();D.setRenderTarget(ft),D.getClearColor(Mt),Et=D.getClearAlpha(),Et<1&&D.setClearColor(16777215,.5),D.clear(),pe&&nt.render(V);const Ft=D.toneMapping;D.toneMapping=pn;const Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),fe===!0&&xt.setGlobalState(D.clippingPlanes,B),vs(S,V,B),x.updateMultisampleRenderTarget(ft),x.updateRenderTargetMipmap(ft),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ie=0,Me=F.length;ie<Me;ie++){const _e=F[ie],{object:ae,geometry:Oe,material:_t,group:Ke}=_e;if(_t.side===Ge&&ae.layers.test(B.layers)){const jt=_t.side;_t.side=Ze,_t.needsUpdate=!0,qo(ae,V,B,Oe,_t,Ke),_t.side=jt,_t.needsUpdate=!0,wt=!0}}wt===!0&&(x.updateMultisampleRenderTarget(ft),x.updateRenderTargetMipmap(ft))}D.setRenderTarget(dt,St,bt),D.setClearColor(Mt,Et),Gt!==void 0&&(B.viewport=Gt),D.toneMapping=Ft}function vs(S,F,V){const B=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ft=S.length;z<ft;z++){const vt=S[z],{object:dt,geometry:St,group:bt}=vt;let Ft=vt.material;Ft.allowOverride===!0&&B!==null&&(Ft=B),dt.layers.test(V.layers)&&qo(dt,F,V,St,Ft,bt)}}function qo(S,F,V,B,z,ft){S.onBeforeRender(D,F,V,B,z,ft),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(D,F,V,B,S,ft),z.transparent===!0&&z.side===Ge&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,D.renderBufferDirect(V,F,B,z,S,ft),z.side=gn,z.needsUpdate=!0,D.renderBufferDirect(V,F,B,z,S,ft),z.side=Ge):D.renderBufferDirect(V,F,B,z,S,ft),S.onAfterRender(D,F,V,B,z,ft)}function Ms(S,F,V){F.isScene!==!0&&(F=Te);const B=w.get(S),z=T.state.lights,ft=T.state.shadowsArray,vt=z.state.version,dt=ot.getParameters(S,z.state,ft,F,V,T.state.lightProbeGridArray),St=ot.getProgramCacheKey(dt);let bt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;const Ft=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=O.get(S.envMap||B.environment,Ft),B.envMapRotation=B.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,bt===void 0&&(S.addEventListener("dispose",ve),bt=new Map,B.programs=bt);let Gt=bt.get(St);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===vt)return jo(S,dt),Gt}else dt.uniforms=ot.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,V,dt),S.onBeforeCompile(dt,D),Gt=ot.acquireProgram(dt,St),bt.set(St,Gt),B.uniforms=dt.uniforms;const wt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=xt.uniform),jo(S,dt),B.needsLights=dh(S),B.lightsStateVersion=vt,B.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function Zo(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=rr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function jo(S,F){const V=w.get(S);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function ch(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let V=0,B=S.length;V<B;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(b))return z}return null}function hh(S,F,V,B,z){F.isScene!==!0&&(F=Te),x.resetTextureUnits();const ft=F.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,dt=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:qt.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,bt=O.get(B.envMap||vt,St),Ft=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,Me=!!V.morphAttributes.color;let _e=pn;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_e=D.toneMapping);const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Oe=ae!==void 0?ae.length:0,_t=w.get(B),Ke=T.state.lights;if(fe===!0&&(Wt===!0||S!==k)){const ce=S===k&&B.id===G;xt.setState(B,S,ce)}let jt=!1;B.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ke.state.version||_t.outputColorSpace!==dt||z.isBatchedMesh&&_t.batching===!1||!z.isBatchedMesh&&_t.batching===!0||z.isBatchedMesh&&_t.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_t.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_t.instancing===!1||!z.isInstancedMesh&&_t.instancing===!0||z.isSkinnedMesh&&_t.skinning===!1||!z.isSkinnedMesh&&_t.skinning===!0||z.isInstancedMesh&&_t.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_t.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_t.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_t.instancingMorph===!1&&z.morphTexture!==null||_t.envMap!==bt||B.fog===!0&&_t.fog!==ft||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==xt.numPlanes||_t.numIntersection!==xt.numIntersection)||_t.vertexAlphas!==Ft||_t.vertexTangents!==Gt||_t.morphTargets!==wt||_t.morphNormals!==ie||_t.morphColors!==Me||_t.toneMapping!==_e||_t.morphTargetsCount!==Oe||!!_t.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(jt=!0):(jt=!0,_t.__version=B.version);let rn=_t.currentProgram;jt===!0&&(rn=Ms(B,F,z),I&&B.isNodeMaterial&&I.onUpdateProgram(B,rn,_t));let xn=!1,Bn=!1,fi=!1;const oe=rn.getUniforms(),Se=_t.uniforms;if(ct.useProgram(rn.program)&&(xn=!0,Bn=!0,fi=!0),B.id!==G&&(G=B.id,Bn=!0),_t.needsLights){const ce=ch(T.state.lightProbeGridArray,z);_t.lightProbeGrid!==ce&&(_t.lightProbeGrid=ce,Bn=!0)}if(xn||k!==S){ct.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),oe.setValue(U,"projectionMatrix",S.projectionMatrix),oe.setValue(U,"viewMatrix",S.matrixWorldInverse);const kn=oe.map.cameraPosition;kn!==void 0&&kn.setValue(U,de.setFromMatrixPosition(S.matrixWorld)),le.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,Bn=!0,fi=!0)}if(_t.needsLights&&(Ke.state.directionalShadowMap.length>0&&oe.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,x),Ke.state.spotShadowMap.length>0&&oe.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,x),Ke.state.pointShadowMap.length>0&&oe.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,x)),z.isSkinnedMesh){oe.setOptional(U,z,"bindMatrix"),oe.setOptional(U,z,"bindMatrixInverse");const ce=z.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),oe.setValue(U,"boneTexture",ce.boneTexture,x))}z.isBatchedMesh&&(oe.setOptional(U,z,"batchingTexture"),oe.setValue(U,"batchingTexture",z._matricesTexture,x),oe.setOptional(U,z,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",z._indirectTexture,x),oe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",z._colorsTexture,x));const zn=V.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Lt.update(z,V,rn),(Bn||_t.receiveShadow!==z.receiveShadow)&&(_t.receiveShadow=z.receiveShadow,oe.setValue(U,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(Se.envMapIntensity.value=F.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=$0()),Bn){if(oe.setValue(U,"toneMappingExposure",D.toneMappingExposure),_t.needsLights&&uh(Se,fi),ft&&B.fog===!0&&W.refreshFogUniforms(Se,ft),W.refreshMaterialUniforms(Se,B,Ot,te,T.state.transmissionRenderTarget[S.id]),_t.needsLights&&_t.lightProbeGrid){const ce=_t.lightProbeGrid;Se.probesSH.value=ce.texture,Se.probesMin.value.copy(ce.boundingBox.min),Se.probesMax.value.copy(ce.boundingBox.max),Se.probesResolution.value.copy(ce.resolution)}rr.upload(U,Zo(_t),Se,x)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rr.upload(U,Zo(_t),Se,x),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(U,"center",z.center),oe.setValue(U,"modelViewMatrix",z.modelViewMatrix),oe.setValue(U,"normalMatrix",z.normalMatrix),oe.setValue(U,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ce=B.uniformsGroups;for(let kn=0,pi=ce.length;kn<pi;kn++){const Ko=ce[kn];Y.update(Ko,rn),Y.bind(Ko,rn)}}return rn}function uh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function dh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,F,V){const B=w.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),w.get(S.texture).__webglTexture=F,w.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const V=w.get(S);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const fh=U.createFramebuffer();this.setRenderTarget=function(S,F=0,V=0){N=S,H=F,X=V;let B=null,z=!1,ft=!1;if(S){const dt=w.get(S);if(dt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(U.FRAMEBUFFER,dt.__webglFramebuffer),J.copy(S.viewport),tt.copy(S.scissor),ut=S.scissorTest,ct.viewport(J),ct.scissor(tt),ct.setScissorTest(ut),G=-1;return}else if(dt.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(dt.__hasExternalTextures)x.rebindTextures(S,w.get(S.texture).__webglTexture,w.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ft=S.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&w.has(Ft)&&(S.width!==Ft.image.width||S.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const St=S.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ft=!0);const bt=w.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[F])?B=bt[F][V]:B=bt[F],z=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?B=w.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?B=bt[V]:B=bt,J.copy(S.viewport),tt.copy(S.scissor),ut=S.scissorTest}else J.copy(st).multiplyScalar(Ot).floor(),tt.copy(Rt).multiplyScalar(Ot).floor(),ut=It;if(V!==0&&(B=fh),ct.bindFramebuffer(U.FRAMEBUFFER,B)&&ct.drawBuffers(S,B),ct.viewport(J),ct.scissor(tt),ct.setScissorTest(ut),z){const dt=w.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,dt.__webglTexture,V)}else if(ft){const dt=F;for(let St=0;St<S.textures.length;St++){const bt=w.get(S.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,bt.__webglTexture,V,dt)}}else if(S!==null&&V!==0){const dt=w.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,V)}G=-1},this.readRenderTargetPixels=function(S,F,V,B,z,ft,vt,dt=0){if(!(S&&S.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){ct.bindFramebuffer(U.FRAMEBUFFER,St);try{const bt=S.textures[dt],Ft=bt.format,Gt=bt.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt),!le.textureFormatReadable(Ft)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Gt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-B&&V>=0&&V<=S.height-z&&U.readPixels(F,V,B,z,L.convert(Ft),L.convert(Gt),ft)}finally{const bt=N!==null?w.get(N).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,F,V,B,z,ft,vt,dt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(F>=0&&F<=S.width-B&&V>=0&&V<=S.height-z){ct.bindFramebuffer(U.FRAMEBUFFER,St);const bt=S.textures[dt],Ft=bt.format,Gt=bt.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt),!le.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),U.readPixels(F,V,B,z,L.convert(Ft),L.convert(Gt),0);const ie=N!==null?w.get(N).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,ie);const Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jh(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft),U.deleteBuffer(wt),U.deleteSync(Me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,V=0){const B=Math.pow(2,-V),z=Math.floor(S.image.width*B),ft=Math.floor(S.image.height*B),vt=F!==null?F.x:0,dt=F!==null?F.y:0;x.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,vt,dt,z,ft),ct.unbindTexture()};const ph=U.createFramebuffer(),mh=U.createFramebuffer();this.copyTextureToTexture=function(S,F,V=null,B=null,z=0,ft=0){let vt,dt,St,bt,Ft,Gt,wt,ie,Me;const _e=S.isCompressedTexture?S.mipmaps[ft]:S.image;if(V!==null)vt=V.max.x-V.min.x,dt=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,bt=V.min.x,Ft=V.min.y,Gt=V.isBox3?V.min.z:0;else{const Se=Math.pow(2,-z);vt=Math.floor(_e.width*Se),dt=Math.floor(_e.height*Se),S.isDataArrayTexture?St=_e.depth:S.isData3DTexture?St=Math.floor(_e.depth*Se):St=1,bt=0,Ft=0,Gt=0}B!==null?(wt=B.x,ie=B.y,Me=B.z):(wt=0,ie=0,Me=0);const ae=L.convert(F.format),Oe=L.convert(F.type);let _t;F.isData3DTexture?(x.setTexture3D(F,0),_t=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),_t=U.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),_t=U.TEXTURE_2D),ct.activeTexture(U.TEXTURE0),ct.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),ct.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ct.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=ct.getParameter(U.UNPACK_ROW_LENGTH),jt=ct.getParameter(U.UNPACK_IMAGE_HEIGHT),rn=ct.getParameter(U.UNPACK_SKIP_PIXELS),xn=ct.getParameter(U.UNPACK_SKIP_ROWS),Bn=ct.getParameter(U.UNPACK_SKIP_IMAGES);ct.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),ct.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),ct.pixelStorei(U.UNPACK_SKIP_PIXELS,bt),ct.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),ct.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt);const fi=S.isDataArrayTexture||S.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Se=w.get(S),zn=w.get(F),ce=w.get(Se.__renderTarget),kn=w.get(zn.__renderTarget);ct.bindFramebuffer(U.READ_FRAMEBUFFER,ce.__webglFramebuffer),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let pi=0;pi<St;pi++)fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,w.get(S).__webglTexture,z,Gt+pi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,w.get(F).__webglTexture,ft,Me+pi)),U.blitFramebuffer(bt,Ft,vt,dt,wt,ie,vt,dt,U.DEPTH_BUFFER_BIT,U.NEAREST);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||w.has(S)){const Se=w.get(S),zn=w.get(F);ct.bindFramebuffer(U.READ_FRAMEBUFFER,ph),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,mh);for(let ce=0;ce<St;ce++)fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,z,Gt+ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,z),oe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zn.__webglTexture,ft,Me+ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zn.__webglTexture,ft),z!==0?U.blitFramebuffer(bt,Ft,vt,dt,wt,ie,vt,dt,U.COLOR_BUFFER_BIT,U.NEAREST):oe?U.copyTexSubImage3D(_t,ft,wt,ie,Me+ce,bt,Ft,vt,dt):U.copyTexSubImage2D(_t,ft,wt,ie,bt,Ft,vt,dt);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(_t,ft,wt,ie,Me,vt,dt,St,ae,Oe,_e.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,ft,wt,ie,Me,vt,dt,St,ae,_e.data):U.texSubImage3D(_t,ft,wt,ie,Me,vt,dt,St,ae,Oe,_e):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ft,wt,ie,vt,dt,ae,Oe,_e.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ft,wt,ie,_e.width,_e.height,ae,_e.data):U.texSubImage2D(U.TEXTURE_2D,ft,wt,ie,vt,dt,ae,Oe,_e);ct.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),ct.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),ct.pixelStorei(U.UNPACK_SKIP_PIXELS,rn),ct.pixelStorei(U.UNPACK_SKIP_ROWS,xn),ct.pixelStorei(U.UNPACK_SKIP_IMAGES,Bn),ft===0&&F.generateMipmaps&&U.generateMipmap(_t),ct.unbindTexture()},this.initRenderTarget=function(S){w.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){H=0,X=0,N=null,ct.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const lc={type:"change"},Fo={type:"start"},th={type:"end"},Qs=new Er,cc=new qn,Q0=Math.cos(70*he.DEG2RAD),Re=new M,Ye=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=1e-6;class tg extends ed{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new $n,this._lastTargetPosition=new M,this._quat=new $n().setFromUnitVectors(t.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nl,this._sphericalDelta=new Nl,this._scale=1,this._panOffset=new M,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new M,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ng.bind(this),this._onPointerDown=eg.bind(this),this._onPointerUp=ig.bind(this),this._onContextMenu=hg.bind(this),this._onMouseWheel=ag.bind(this),this._onKeyDown=og.bind(this),this._onTouchStart=lg.bind(this),this._onTouchMove=cg.bind(this),this._onMouseDown=sg.bind(this),this._onMouseMove=rg.bind(this),this._interceptControlDown=ug.bind(this),this._interceptControlUp=dg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lc),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Re.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new M(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qs.origin.copy(this.object.position),Qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qs.direction))<Q0?this.object.lookAt(this.target):(cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qs.intersectPlane(cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa?(this.dispatchEvent(lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ng(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ig(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(th),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Fo)}function rg(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ag(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Fo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(th))}function og(i){this.enabled!==!1&&this._handleKeyDown(i)}function lg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Fo)}function cg(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function hg(i){this.enabled!==!1&&i.preventDefault()}function ug(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ue=i=>Math.max(0,Math.min(1,i)),Kn=(i,t,e)=>i+(t-i)*e,cs=i=>he.degToRad(i),Ne=(i,t=2)=>Number(i).toFixed(t),qe={minX:-4.15,maxX:4.15,minY:.18,maxY:3.25,minZ:-3.45,maxZ:3.35},fg={minX:-17.25,maxX:17.25,minY:.18,maxY:5.55,minZ:-15.65,maxZ:15.35};function kt(i){return document.getElementById(i)}function hc(i){return i&&["INPUT","TEXTAREA","SELECT"].includes(i.tagName)}function eh(i,t=qe,e=!1){i.x=he.clamp(i.x,t.minX,t.maxX),i.z=he.clamp(i.z,t.minZ,t.maxZ),i.y=he.clamp(i.y,e?t.minY:0,e?t.maxY:0)}function uc(i){return i==="RepeatWrapping"?cr:i==="MirroredRepeatWrapping"?hr:yn}function Pt(i,t={}){return new Wu({color:i,roughness:t.roughness??.58,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??gn,flatShading:t.flatShading??!1,envMapIntensity:t.envMapIntensity??.48})}const va=new Map;function Ma(i,t=1){const e=new lt(i);return`rgba(${Math.round(e.r*255)}, ${Math.round(e.g*255)}, ${Math.round(e.b*255)}, ${t})`}function pg(i=16765286,t=256){const e=`${i}-${t}`;if(va.has(e))return va.get(e);const n=document.createElement("canvas");n.width=t,n.height=t;const s=n.getContext("2d"),r=t/2,a=t/2,o=s.createRadialGradient(r,a,0,r,a,t/2);o.addColorStop(0,"rgba(255, 255, 235, 0.96)"),o.addColorStop(.18,Ma(i,.58)),o.addColorStop(.48,Ma(i,.2)),o.addColorStop(1,Ma(i,0)),s.fillStyle=o,s.fillRect(0,0,t,t);const l=new Xi(n);return l.colorSpace=Ce,va.set(e,l),l}function mg(i=0){return new sn({uniforms:{uLightPos:{value:new M(0,2,0)},uCameraPos:{value:new M(0,1.6,4)},uAlbedo:{value:new lt(8254932)},uLightColor:{value:new lt(16773573)},uShininess:{value:42},uLightPower:{value:5.2},uMode:{value:i}},vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      uniform vec3 uLightPos;
      uniform vec3 uCameraPos;
      uniform vec3 uAlbedo;
      uniform vec3 uLightColor;
      uniform float uShininess;
      uniform float uLightPower;
      uniform int uMode;

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(uCameraPos - vWorldPos);
        if (dot(N, V) < 0.0) N = -N;
        vec3 toLight = uLightPos - vWorldPos;
        float distSq = max(dot(toLight, toLight), 0.18);
        vec3 L = normalize(toLight);
        vec3 R = reflect(-L, N);

        float nDotLRaw = dot(N, L);
        float nDotL = max(nDotLRaw, 0.0);
        float nDotV = max(dot(N, V), 0.0);
        float rDotV = max(dot(R, V), 0.0);
        float lightRadiance = uLightPower / distSq;

        float diffuseTerm = nDotL;
        float specTerm = nDotL > 0.0 ? pow(rDotV, uShininess) : 0.0;

        vec3 diffuse = uAlbedo * uLightColor * lightRadiance * diffuseTerm * 0.62;
        vec3 specular = vec3(1.0, 0.96, 0.86) * uLightColor * lightRadiance * specTerm * 1.9;
        float shadowMask = 1.0 - smoothstep(0.015, 0.22, nDotLRaw);
        vec3 shadowTint = uAlbedo * 0.16 + vec3(0.035, 0.045, 0.085);
        vec3 ambient = uAlbedo * 0.18 + vec3(0.06, 0.07, 0.105);
        float rim = pow(1.0 - nDotV, 2.0) * 0.16;
        vec3 combined = ambient + diffuse * 1.65 + specular * 2.8 + uAlbedo * rim;
        combined = mix(combined, shadowTint, shadowMask * 0.56);

        vec3 color = combined;
        if (uMode == 1) {
          color = uAlbedo * 0.1 + diffuse * 2.6;
        } else if (uMode == 2) {
          color = vec3(0.01, 0.012, 0.018) + specular * 5.0;
        } else if (uMode == 3) {
          color = mix(vec3(0.85, 0.72, 0.36), vec3(0.01, 0.02, 0.07), shadowMask);
        }
        color = color / (color + vec3(0.72));
        color = pow(color, vec3(0.82));
        gl_FragColor = vec4(color, 1.0);
      }
    `})}function Oo(i){i.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e){for(const s of Object.values(n))s&&s.isTexture&&s.dispose();n.dispose()}}})}function Pe(i,t={}){const e=t.fontSize??42,n=t.pad??18,s=String(i).split(`
`),r=document.createElement("canvas").getContext("2d");r.font=`700 ${e}px system-ui, sans-serif`;const a=Math.ceil(Math.max(...s.map(h=>r.measureText(h).width))+n*2),o=Math.ceil(s.length*e*1.28+n*2);r.canvas.width=a,r.canvas.height=o,r.font=`700 ${e}px system-ui, sans-serif`,r.fillStyle=t.background??"rgba(5, 9, 18, 0.78)",r.strokeStyle=t.border??"rgba(255,255,255,0.24)",r.lineWidth=4,Lr(r,0,0,a,o,24),r.fillStyle=t.color??"#f4f7ff",r.textAlign="center",r.textBaseline="middle",s.forEach((h,p)=>{const g=n+e*.68+p*e*1.28;r.fillText(h,a/2,g)});const l=new Xi(r.canvas);l.colorSpace=Ce;const c=new br({map:l,transparent:!0,depthTest:!1}),u=new Co(c),d=t.scale??1;return u.scale.set(a/o*d,d,1),u.renderOrder=1e3,u}function ar(i,t={}){const e=t.fontSize??42,n=t.pad??18,s=String(i).split(`
`),r=document.createElement("canvas").getContext("2d");r.font=`700 ${e}px system-ui, sans-serif`;const a=Math.ceil(Math.max(...s.map(h=>r.measureText(h).width))+n*2),o=Math.ceil(s.length*e*1.28+n*2);r.canvas.width=a,r.canvas.height=o,r.font=`700 ${e}px system-ui, sans-serif`,r.fillStyle=t.background??"rgba(5, 9, 18, 0.78)",r.strokeStyle=t.border??"rgba(255,255,255,0.24)",r.lineWidth=4,Lr(r,0,0,a,o,24),r.fillStyle=t.color??"#f4f7ff",r.textAlign="center",r.textBaseline="middle",s.forEach((h,p)=>{const g=n+e*.68+p*e*1.28;r.fillText(h,a/2,g)});const l=new Xi(r.canvas);l.colorSpace=Ce;const c=new De({map:l,transparent:!0,depthTest:!0,depthWrite:!1,side:gn}),u=t.scale??1,d=new Q(new mn(a/o*u,u),c);return d.renderOrder=t.renderOrder??0,d}function gg(i,t={}){const e=t.fontSize??32,n=t.pad??14,s=t.scale??1,r=document.createElement("canvas").getContext("2d"),a=new Xi(r.canvas);a.colorSpace=Ce;const o=new br({map:a,transparent:!0,depthTest:!1}),l=new Co(o);return l.renderOrder=1001,l.userData.setText=c=>{const u=String(c).split(`
`);r.font=`700 ${e}px system-ui, sans-serif`;const d=Math.ceil(Math.max(...u.map(p=>r.measureText(p).width))+n*2),h=Math.ceil(u.length*e*1.28+n*2);r.canvas.width=d,r.canvas.height=h,r.font=`700 ${e}px system-ui, sans-serif`,r.fillStyle=t.background??"rgba(5, 9, 18, 0.82)",r.strokeStyle=t.border??"rgba(255,255,255,0.22)",r.lineWidth=4,Lr(r,0,0,d,h,18),r.fillStyle=t.color??"#f4f7ff",r.textAlign="center",r.textBaseline="middle",u.forEach((p,g)=>{const y=n+e*.68+g*e*1.28;r.fillText(p,d/2,y)}),a.needsUpdate=!0,l.scale.set(d/h*s,s,1)},l.userData.setText(i),l}function _g(i,t={}){const e=t.width??640,n=t.height??150,s=t.fontSize??48,r=t.valueWidth??e*.5,a=document.createElement("canvas").getContext("2d");a.canvas.width=e,a.canvas.height=n;const o=new Xi(a.canvas);o.colorSpace=Ce;const l=new De({map:o,transparent:!0,depthTest:!0,depthWrite:!1,side:gn}),c=new Q(new mn(t.worldWidth??1.62,t.worldHeight??.38),l);return c.renderOrder=0,c.userData.setText=(u,d="")=>{a.clearRect(0,0,e,n),a.fillStyle=t.background??"rgba(0, 0, 0, 0.88)",a.strokeStyle=d==="wrong"?"rgba(255, 92, 92, 0.78)":t.border??"rgba(190, 205, 235, 0.48)",a.lineWidth=8,Lr(a,4,4,e-8,n-8,32),a.shadowColor="rgba(120, 165, 255, 0.65)",a.shadowBlur=8,a.textBaseline="middle",a.font=`900 ${s}px system-ui, sans-serif`,a.textAlign="center",a.fillStyle=t.labelColor??"#94b8ff",a.fillText("입력:",e*.28,n*.52);const h=String(u);let p=Math.round(s*.88);do{if(a.font=`900 ${p}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,a.measureText(h).width<=r||p<=18)break;p-=2}while(!0);a.fillStyle=t.valueColor??"#eaf1ff",a.fillText(h,e*.69,n*.52),d==="wrong"&&(a.font=`900 ${Math.round(s*.34)}px system-ui, sans-serif`,a.fillStyle="#ff7070",a.fillText("오답",e*.86,n*.79)),a.shadowBlur=0,o.needsUpdate=!0},c.userData.setText(i),c}function Lr(i,t,e,n,s,r,a,o){const l=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+l,e),i.arcTo(t+n,e,t+n,e+s,l),i.arcTo(t+n,e+s,t,e+s,l),i.arcTo(t,e+s,t,e,l),i.arcTo(t,e,t+n,e,l),i.closePath(),i.fill(),i.stroke()}function nh(i=512){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");e.fillStyle="#f1f7ff",e.fillRect(0,0,i,i);const n=8,s=i/n;for(let a=0;a<n;a++)for(let o=0;o<n;o++)e.fillStyle=(o+a)%2===0?"#1e315c":"#ef476f",e.fillRect(o*s,a*s,s,s);e.strokeStyle="rgba(255,255,255,0.9)",e.lineWidth=8,e.strokeRect(24,24,i-48,i-48),e.fillStyle="#46f0c8",e.beginPath(),e.arc(i*.73,i*.28,i*.115,0,Math.PI*2),e.fill(),e.fillStyle="#ffd166",e.font=`900 ${i*.16}px system-ui`,e.textAlign="center",e.textBaseline="middle",e.fillText("UV",i*.28,i*.72);const r=new Xi(t);return r.colorSpace=Ce,r.needsUpdate=!0,r}function ih(i,t=new M(0,1.12,-4.04),e=4649160){const n=new me;n.position.copy(t);const s=Pt(1514536,{roughness:.45}),r=Pt(e,{emissive:e,emissiveIntensity:.22,roughness:.38}),a=Pt(2239033,{roughness:.65}),o=new Q(new Ut(1.45,2.18,.14),a);o.position.set(0,0,0),o.castShadow=!0,o.receiveShadow=!0,n.add(o);const l=new Q(new Ut(1.86,.16,.2),s);l.position.set(0,1.18,.02),n.add(l);const c=new Q(new Ut(.16,2.46,.2),s);c.position.set(-.9,.04,.02),n.add(c);const u=c.clone();u.position.x=.9,n.add(u);const d=new Q(new Ut(1.08,.08,.05),r);d.position.set(0,.93,.1),n.add(d);const h=Pe("잠김",{scale:.42,fontSize:38,background:"rgba(0,0,0,0.58)"});return h.position.set(0,.25,.22),n.add(h),n.userData={panel:o,status:d,label:h,openAmount:0},i.add(n),n}function sh(i,t){const e=ue(t);i.userData.openAmount=e,i.userData.panel.position.x=-1.1*e,i.userData.panel.rotation.y=-.35*e,i.userData.status.scale.x=1+e*.4,i.userData.status.material.emissiveIntensity=.22+e*.5,e>.6&&i.userData.label.userData.text!=="열림"&&(i.remove(i.userData.label),i.userData.label=Pe("열림",{scale:.42,fontSize:38,background:"rgba(0,0,0,0.58)",color:"#46f0c8"}),i.userData.label.userData.text="열림",i.userData.label.position.set(0,.25,.22),i.add(i.userData.label))}function qi(i,t=4649160,e={}){const n=e.width??9.5,s=e.depth??8.2,r=e.height??3.4,a=Pt(e.floorColor??1712432,{roughness:.82,envMapIntensity:0}),o=Pt(e.wallColor??1054500,{roughness:.78,envMapIntensity:0}),l=Pt(t,{emissive:t,emissiveIntensity:.08,roughness:.55,envMapIntensity:0}),c=n/2,d=-(s/2),h=new Q(new Ut(n,.08,s),a);h.position.set(0,-.04,0),h.receiveShadow=!0,i.add(h);const p=new Q(new Ut(n,r,.12),o);p.position.set(0,r/2,d),p.receiveShadow=!0,i.add(p);const g=new Q(new Ut(.12,r,s),o);g.position.set(-c,r/2,0),i.add(g);const y=g.clone();y.position.x=c,i.add(y);const m=new Q(new Ut(n-.7,.06,.08),l);m.position.set(0,r-.48,d+.1),i.add(m);const f=ih(i,new M(0,1.12,d+.1),t);return{floor:h,back:p,left:g,right:y,door:f}}function xg(i,t=9417983,e={}){const n=Pt(e.floorColor??1185314,{roughness:.82,envMapIntensity:0}),s=Pt(e.wallColor??988451,{roughness:.78,envMapIntensity:0}),r=Pt(t,{emissive:t,emissiveIntensity:.08,roughness:.55,envMapIntensity:0}),a=new Q(new Ut(9.5,.08,8.2),n);a.position.set(0,-.04,0),a.receiveShadow=!0,i.add(a);const o=new Q(new Ut(9.5,3.4,.12),s);o.position.set(0,1.7,-4.1),o.receiveShadow=!0,i.add(o);const l=new Q(new Ut(.12,3.4,8.2),s);l.position.set(-4.75,1.7,0),i.add(l);const c=l.clone();c.position.x=4.75,i.add(c);const u=new Q(new Ut(8.8,.06,.08),r);u.position.set(0,2.92,-4),i.add(u);const d=ih(i,new M(0,1.12,-4),t);return{floor:a,back:o,left:l,right:c,door:d}}function vg(i,t=9417983){const e=new Rr(11455231,1315867,.58);i.add(e);const n=new Cr(16777215,1.18);n.position.set(4.2,6.5,3.6),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6,i.add(n);const s=new xs(t,.58,9);s.position.set(-2.8,2.2,1.8),i.add(s)}function Ir(i,t=8956671){const e=new Rr(11455231,1315867,.72);i.add(e);const n=new Cr(16777215,1.65);n.position.set(4.2,6.5,3.6),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-6,n.shadow.camera.right=6,n.shadow.camera.top=6,n.shadow.camera.bottom=-6,i.add(n);const s=new xs(t,1,9);s.position.set(-2.8,2.2,1.8),i.add(s)}function Mg(i=4649160){const t=new me,e=Pt(i,{roughness:.5,emissive:i,emissiveIntensity:.08}),n=Pt(1317412,{roughness:.7}),s=new Q(new gs(.18,.54,6,12),e);s.position.y=.58,s.castShadow=!0,t.add(s);const r=new Q(new Ee(.17,18,10),Pt(15978662,{roughness:.5}));r.position.y=1.05,r.castShadow=!0,t.add(r);const a=new Q(new Ut(.24,.055,.035),n);a.position.set(0,1.08,-.15),t.add(a);const o=new Q(new _s(.13,.28,18),Pt(16777215,{emissive:16777215,emissiveIntensity:.15}));return o.position.set(0,.25,-.28),o.rotation.x=-Math.PI/2,t.add(o),t}function dc(i,t){const e=new me,n=Pt(t,{roughness:.34,metalness:.04,emissive:t,emissiveIntensity:.22}),s=Pt(2239029,{roughness:.55});if(i==="light"){const r=new Q(new Ee(.18,24,12),n);r.castShadow=!0,e.add(r);const a=new Q(new Ee(.1,32,16),new De({color:16774599,toneMapped:!1}));a.position.y=.015,e.add(a);const o=new Q(new Ee(.29,32,16),new De({color:t,transparent:!0,opacity:.15,blending:lr,depthWrite:!1,toneMapped:!1}));o.userData.noCastShadow=!0,e.add(o);const l=new Co(new br({map:pg(t).clone(),color:16777215,transparent:!0,opacity:.56,blending:lr,depthWrite:!1,depthTest:!0,toneMapped:!1}));l.scale.set(.9,.9,1),l.renderOrder=4,e.add(l),e.userData.lightGlow=l,e.userData.lightGlass=o;const c=new Q(new nn(.045,.045,.48,12),s);c.position.y=-.27,e.add(c)}else if(i==="camera"){const r=new Q(new Ut(.38,.25,.26),s);r.castShadow=!0,e.add(r);const a=new Q(new nn(.11,.11,.14,24),n);a.rotation.x=Math.PI/2,a.position.z=-.2,e.add(a);const o=new Q(new _s(.32,.75,4,1,!0),new De({color:t,transparent:!0,opacity:.18,wireframe:!0}));o.rotation.x=-Math.PI/2,o.position.z=-.54,e.add(o)}else{const r=new Q(new Ut(.36,.24,.36),n);r.castShadow=!0,e.add(r)}return e}function Sg(i){if(!i)return;const t=performance.now()*.001,e=.5+Math.sin(t*3.2)*.5;if(i.userData.lightGlow){const n=.86+e*.12;i.userData.lightGlow.scale.set(n,n,1),i.userData.lightGlow.material.opacity=.48+e*.14}i.userData.lightGlass&&(i.userData.lightGlass.scale.setScalar(1+e*.045),i.userData.lightGlass.material.opacity=.12+e*.06)}function rh(i,t=4649160){const e=new me,n=new Q(new Ut(1.1,.12,.78),Pt(2107189,{roughness:.64}));n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new Q(new Ut(.78,.035,.46),Pt(t,{emissive:t,emissiveIntensity:.14,roughness:.48}));s.position.y=.08,e.add(s);const r=Pe(i,{scale:.25,fontSize:30,color:"#ffffff",background:"rgba(0,0,0,0.62)"});return r.position.set(0,.42,0),e.add(r),e}function yg(i=16765286){const t=new me,e=Pt(i,{roughness:.56,metalness:.02,emissive:i,emissiveIntensity:.08,transparent:!0,opacity:.08,envMapIntensity:.18});e.userData.noDepthWrite=!0,e.depthWrite=!1;const n=new Q(new gs(.18,.58,5,10),e);n.position.y=.55,n.castShadow=!1,t.add(n);const s=new Q(new Ee(.16,12,8),e);return s.position.y=1.04,s.castShadow=!1,t.add(s),t.userData.reveal=0,t}function bg(i=16731535,t=6678271){return yg(i)}function Eg(i=2239286,t=9417983){const e=new me,n=Pt(i,{roughness:.34,metalness:.42}),s=Pt(4609642,{roughness:.28,metalness:.55}),r=Pt(t,{emissive:t,emissiveIntensity:.32,roughness:.35}),a=new Q(new Ut(.13,.34,.12),n);a.position.set(0,-.18,.08),a.rotation.x=cs(-12),a.castShadow=!0,e.add(a);const o=new Q(new Ut(.22,.16,.38),n);o.position.set(0,.01,-.08),o.castShadow=!0,e.add(o);const l=new Q(new Ut(.24,.08,.46),s);l.position.set(0,.12,-.14),l.castShadow=!0,e.add(l);const c=new Q(new nn(.035,.035,.34,16),s);c.rotation.x=Math.PI/2,c.position.set(0,.1,-.43),c.castShadow=!0,e.add(c);const u=new Q(new Ut(.05,.035,.05),r);u.position.set(0,.19,-.28),e.add(u);const d=new Q(new Ee(.09,14,8),new De({color:16773544,transparent:!0,opacity:0,depthWrite:!1}));return d.position.set(0,.1,-.62),d.renderOrder=1200,e.add(d),e.userData.flash=d,e}function as(i,t){i.traverse(e=>{var n;if(e.isLight&&e.userData.baseIntensity!==void 0&&(e.intensity=e.userData.baseIntensity*t),e.isMesh&&(e.visible=t>.001,e.castShadow=e.userData.noCastShadow?!1:t>.08),e.material){const s=Array.isArray(e.material)?e.material:[e.material];for(const r of s)r.transparent=t<.98,r.opacity=t,r.depthWrite=(n=r.userData)!=null&&n.noDepthWrite?!1:t>.3,r.emissive&&(r.emissiveIntensity=t*.24)}})}function fc(i,t){i.traverse(e=>{(e.isMesh||e.isLine||e.isSprite)&&(e.visible=t)})}class wg{constructor(){this.title=kt("roomTitle"),this.goal=kt("roomGoal"),this.controls=kt("controls"),this.scoreRows=kt("scoreRows"),this.toast=kt("toast"),this.progress=kt("progress")}setProgress(t,e){this.progress.textContent=`방 ${t+1} / ${e}`}setRoom(t,e){this.title.textContent=t,this.goal.innerHTML=e,this.toast.textContent=""}setControls(t){this.controls.innerHTML=t}showToast(t){this.toast.textContent=t}updateScores(t){this.scoreRows.innerHTML=t.map(e=>{const n=ue(e.value),s=Math.round(n*100),r=e.bad?"bad":"",a=e.label,o=e.text??`${s}%`;return`<div class="score-row">
        <div class="score-label">${a}</div>
        <div class="score-bar"><div class="score-fill ${r}" style="width:${s}%"></div></div>
        <div class="score-value">${o}</div>
      </div>`}).join("")}}class Jn{constructor(t){this.game=t,this.group=new me,this.listeners=[],this.interactables=[],this.solved=!1,this.door=null,this.score=0,this.player=null,this.carried=null,this.cameraTarget=null,this.playerCanFly=!1,this.bounds=qe}enter(){this.game.scene.add(this.group)}listen(t,e,n,s){t&&(t.addEventListener(e,n,s),this.listeners.push([t,e,n,s]))}setupPlayer(t=new M(0,0,2.7),e={}){return this.playerCanFly=!!e.fly,this.player=Mg(e.color??4649160),this.player.traverse(n=>{n.isMesh&&(n.visible=!1)}),this.player.position.copy(t),this.player.position.y=this.playerCanFly?Math.max(t.y,.4):0,this.group.add(this.player),this.cameraTarget=this.player,this.player}addInteractable(t,e,n,s){this.interactables.push({object:t,radius:e,getMessage:n,onUse:s})}nearestInteractable(){if(!this.player)return null;let t=null,e=1/0;for(const n of this.interactables){if(!n.object.visible||n.object.userData.carried)continue;const s=this.player.position.distanceTo(n.object.position);s<=n.radius&&s<e&&(t=n,e=s)}return t}onKeyDown(t){var n;if(t!=="KeyE")return;const e=this.nearestInteractable();e&&((n=e.onUse)==null||n.call(e))}movementVector(t=!1){return this.game.movementVector(t)}moveObjectWithKeys(t,e,n={}){const s=!!n.fly,r=this.movementVector(s);r.lengthSq()<=1e-4||(t.position.addScaledVector(r,(n.speed??(s?2.4:2.2))*e),eh(t.position,n.bounds??this.bounds,s),!s&&r.lengthSq()>.001&&(t.rotation.y=Math.atan2(r.x,r.z)))}updatePlayer(t){if(this.player&&(this.moveObjectWithKeys(this.player,t,{fly:this.playerCanFly,speed:this.playerCanFly?2.15:2.35}),this.carried)){const e=this.game.lookDirection(!1);this.carried.position.copy(this.player.position).add(e.multiplyScalar(.58)),this.carried.position.y=this.player.position.y+.65}}updateFollowCamera(t,e=this.cameraTarget,n={}){if(!e)return;const s=e.getWorldPosition(new M),r=n.eyeHeight??n.height??(e===this.player?1.18:.28),a=s.add(new M(0,r,0)),o=n.bounds??this.bounds;a.x=he.clamp(a.x,o.minX+.12,o.maxX-.12),a.z=he.clamp(a.z,o.minZ+.12,o.maxZ-.12),a.y=he.clamp(a.y,.35,o.maxY+.9),this.game.camera.position.copy(a),this.game.applyMouseLook(),e===this.player&&(e.rotation.y=this.game.lookYaw)}updateInteractPrompt(){const t=this.nearestInteractable();if(t){const e=typeof t.getMessage=="function"?t.getMessage():t.getMessage;this.game.ui.showToast(`E: ${e}`)}else this.solved||this.game.ui.showToast("")}complete(t="문이 열렸습니다. 다음 방으로 이동합니다."){this.solved||(this.solved=!0,this.game.ui.showToast(t),this.game.roomSolved())}update(t){if(this.updateInteractPrompt(),this.door){const e=this.solved?1:0,n=this.door.userData.openAmount??0;sh(this.door,Kn(n,e,1-Math.pow(.001,t)))}}dispose(){for(const[t,e,n,s]of this.listeners)t.removeEventListener(e,n,s);this.listeners=[],this.game.scene.remove(this.group),Oo(this.group)}}class Tg extends Jn{constructor(t){super(t);const e=Math.random()*Math.PI*2,n=1.15+Math.random()*1.65;this.lightPos=new M(Math.cos(e)*n,1.65+Math.random()*1.15,Math.sin(e)*n-.25),this.renderCamPos=new M(3.35,1.25,2.6),this.samples=[],this.objectCenter=new M(0,1.18,-.05),this.targetRadiance=.5,this.puzzleObject=null,this.sampleMarkers=null,this.componentModels=[],this.aimRaycaster=new No,this.lightInstalled=!0,this.cameraInstalled=!0,this.activeControl="camera",this.cameraMoved=!1,this.requiredScore=.96,this.submittedRadiance=!1,this.equationDebug=null}enter(){super.enter();const t=10462893;this.game.scene.background=new lt(t),this.game.scene.fog=new Gi(t,18,50),this.setupPlayer(new M(0,0,2.95),{color:16765286}),this.game.setCamera(new M(0,1.9,5.2),this.objectCenter);const e=qi(this.group,16765286,{floorColor:t,wallColor:t});this.door=e.door;const n=Pt(t,{roughness:.84}),s=new Q(new Ut(9.5,.08,8.2),n);s.position.set(0,3.4,0),s.receiveShadow=!0,this.group.add(s);const r=new Q(new Ut(9.5,3.4,.12),n.clone());r.position.set(0,1.7,4.1),r.receiveShadow=!0,this.group.add(r),this.group.add(new Ku(15922422,.32)),this.group.add(new Rr(14673128,9410722,.34));const a=new Cr(15988215,.16);a.position.set(-3.5,6.2,4.6),this.group.add(a);const o=new Q(new Ut(4.1,.18,3.2),Pt(9410722,{roughness:.65}));o.position.set(0,.08,.05),o.receiveShadow=!0,o.castShadow=!0,this.group.add(o);const l=new Q(new nn(.54,.68,.34,48),Pt(9607844,{roughness:.62,metalness:.05}));l.position.set(this.objectCenter.x,.29,this.objectCenter.z),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l);const c=new Tr(.62,.23,220,36,3,5);c.computeVertexNormals(),this.puzzleObject=new Q(c,mg(0)),this.puzzleObject.position.copy(this.objectCenter),this.puzzleObject.rotation.set(cs(18),cs(-32),cs(8)),this.puzzleObject.scale.set(1.18,1,1.08),this.puzzleObject.castShadow=!0,this.puzzleObject.receiveShadow=!0,this.group.add(this.puzzleObject),this.puzzleObject.updateMatrixWorld(!0);const u=Pt(9147549,{roughness:.74});for(const[h,p]of[[-3.65,2.75],[3.65,2.55]]){const g=new Q(new Ut(.92,.52,.72),u);g.position.set(h,.26,p),g.castShadow=!0,g.receiveShadow=!0,this.group.add(g)}this.lightRig=dc("light",16765286),this.lightRig.position.copy(this.lightPos),this.group.add(this.lightRig),this.light=new xs(16773573,1.55,9,2),this.light.castShadow=!0,this.light.shadow.mapSize.set(1024,1024),this.light.shadow.camera.near=.1,this.light.shadow.camera.far=9,this.light.shadow.bias=-.0015,this.lightRig.add(this.light),this.cameraRig=dc("camera",9417983),this.cameraRig.position.copy(this.renderCamPos),this.group.add(this.cameraRig),this.cameraTarget=this.cameraRig;const d=ar(`매끈한 glossy 3D 물체의 표면 radiance를 계산합니다.
렌더 카메라로 가장 강한 반사 방향을 찾고 좌클릭으로 제출하세요.`,{scale:.48,fontSize:26,background:"rgba(5, 9, 18, 0.82)"});d.position.set(-1.75,2.55,-4.02),this.group.add(d),this.listen(this.game.renderer.domElement,"pointerdown",h=>{document.pointerLockElement===this.game.renderer.domElement&&h.button===0&&this.submitRadianceAtAim()}),this.generateSamples(),this.targetRadiance=this.estimateTargetRadiance(),this.createEquationDebug(),this.game.ui.setRoom("1. Lighting Room","광원은 방 안의 랜덤한 3D 위치에 고정되어 있습니다. <b>렌더 카메라</b>를 WASD와 Space/Shift로 움직여, 화면 중앙 에임이 닿는 glossy 표면점 x의 직접광 outgoing radiance Lo(x, wo)를 최대화하세요. 가장 강한 위치를 찾은 뒤 <b>좌클릭으로 제출해야</b> 문이 열립니다. x, 법선 n, 입사광 Li, 시선 v, 반사 방향 r이 표시됩니다."),this.updateControlPanel()}setupInteractables(){this.addInteractable(this.lightRig,.82,"광원 모듈 줍기",()=>this.pickUpDevice(this.lightRig)),this.addInteractable(this.cameraRig,.82,"렌더 카메라 줍기",()=>this.pickUpDevice(this.cameraRig))}pickUpDevice(t){if(!t.userData.installed){if(this.carried&&this.carried!==t){this.game.ui.showToast("장비는 한 번에 하나만 들 수 있습니다.");return}this.carried=t,t.userData.carried=!0}}installDevice(t){const e=t==="light"?this.lightRig:this.cameraRig;if(this.carried!==e){this.game.ui.showToast(`${t==="light"?"광원 모듈":"렌더 카메라"}를 먼저 이 위치로 가져오세요.`);return}const n=t==="light"?this.lightPad:this.cameraPad;e.userData.carried=!1,e.userData.installed=!0,e.position.copy(n.position).add(new M(0,.65,0)),this.carried=null,t==="light"&&(this.lightInstalled=!0),t==="camera"&&(this.cameraInstalled=!0),this.lightInstalled&&this.cameraInstalled?(this.activeControl="light",this.cameraTarget=this.lightRig,this.game.ui.showToast("두 장비가 모두 도킹되었습니다. 1: 광원, 2: 카메라")):(this.activeControl="player",this.cameraTarget=this.player),this.updateControlPanel()}updateControlPanel(){this.lightInstalled&&this.cameraInstalled,this.game.ui.setControls(`
      <div class="control-card">
        <h3>조작</h3>
        <p class="small-text">광원은 랜덤 위치에 고정되어 움직일 수 없습니다. 렌더 카메라는 WASD로 수평 이동하고 Space/Shift로 위아래 이동합니다.</p>
        <p class="small-text"><b>중요:</b> 에임을 표면에 맞춘 뒤 좌클릭해야 현재 위치의 radiance가 제출됩니다. 바라보기만 하면 통과되지 않습니다.</p>
      </div>
      <div class="control-card">
        <h3>렌더링 이퀘이션</h3>
        <div class="button-grid">
          <button disabled>광원 고정</button>
          <button class="active">카메라 조종</button>
          <button disabled>P 스킵</button>
        </div>
        <p class="small-text">에임이 닿은 실제 mesh 표면점 x에서 Phong: Lo = Li * nDotL * (diffuse + specular * pow(R·V, shininess))를 계산합니다.</p>
        <p class="small-text">메인 물체에는 광원이 만드는 diffuse, Phong highlight, shadow terminator가 함께 표시됩니다. 에임이 닿은 x에서는 Li, n, v, r 벡터가 갱신되고, 좌클릭 시점의 radiance만 제출됩니다.</p>
      </div>
    `)}setActiveControl(t){t==="camera"&&(this.activeControl="camera",this.cameraTarget=this.cameraRig,this.updateControlPanel())}onKeyDown(t){(t==="Digit1"||t==="Digit2")&&this.setActiveControl("camera"),super.onKeyDown(t)}submitRadianceAtAim(){const t=this.computeRenderingScore();if(this.score=t.total,this.updateEquationDebug(t),!this.cameraMoved){this.game.ui.showToast("카메라를 움직인 뒤, 목표 표면을 조준하고 좌클릭으로 radiance를 제출하세요.");return}if(!t.aimHit){this.game.ui.showToast("에임이 glossy 물체 표면을 가리키지 않습니다.");return}this.submittedRadiance=!0,t.total>=this.requiredScore?this.complete("좌클릭으로 제출한 표면 반응이 기준을 넘었습니다. 다음 방으로 이동합니다."):this.game.ui.showToast("아직 통과 기준에 부족합니다. 하이라이트 방향을 더 강하게 맞춰보세요.")}generateSamples(){if(this.samples=[],!this.puzzleObject)return;this.puzzleObject.updateMatrixWorld(!0);const t=this.puzzleObject.geometry.attributes.position,e=this.puzzleObject.geometry.attributes.normal,n=new Dt().getNormalMatrix(this.puzzleObject.matrixWorld),s=150;for(let r=0;r<s;r++){const a=Math.floor((r+.5)*t.count/s),o=new M().fromBufferAttribute(t,a).applyMatrix4(this.puzzleObject.matrixWorld),l=new M().fromBufferAttribute(e,a).applyMatrix3(n).normalize();this.samples.push({p:o,n:l})}}addSampleMarkers(){const t=new Ee(.014,8,4),e=new De({color:16747586,transparent:!0,opacity:.72,depthTest:!1}),n=new Uu(t,e,this.samples.length);n.renderOrder=850;const s=new re;for(let r=0;r<this.samples.length;r++){const a=this.samples[r].p.clone().add(this.samples[r].n.clone().multiplyScalar(.018));s.makeTranslation(a.x,a.y,a.z),n.setMatrixAt(r,s)}this.sampleMarkers=n,this.group.add(n)}createLightingTermViews(){}createEquationDebug(){const t=new me;this.group.add(t);const e=new ye;t.add(e);const n=a=>{const o=new td(new M(0,1,0),new M,.5,a,.12,.06);return o.traverse(l=>{l.material&&(l.material.depthTest=!1,l.renderOrder=900)}),t.add(o),o},s={x:Pe("x",{scale:.18,fontSize:34,color:"#ffb15c",background:"rgba(0,0,0,0.62)"}),li:Pe("Li",{scale:.2,fontSize:32,color:"#ffd166",background:"rgba(0,0,0,0.62)"}),n:Pe("n",{scale:.18,fontSize:34,color:"#46f0c8",background:"rgba(0,0,0,0.62)"}),v:Pe("v",{scale:.18,fontSize:34,color:"#8fb4ff",background:"rgba(0,0,0,0.62)"}),r:Pe("r",{scale:.18,fontSize:34,color:"#d7a5ff",background:"rgba(0,0,0,0.62)"})};for(const a of Object.values(s))t.add(a);const r=gg(`x=(0,0,0)
n=(0,1,0)`,{scale:.42,fontSize:24,color:"#f7fbff",background:"rgba(5, 9, 18, 0.72)"});t.add(r),this.equationDebug={root:t,point:e,lightRay:n(16765286),normal:n(4649160),view:n(9417983),reflect:n(14132735),labels:s,readout:r}}setDebugArrow(t,e,n,s,r=.12,a=.06){if(!t)return;const o=n.clone();if(o.lengthSq()<1e-6){t.visible=!1;return}t.visible=!0,o.normalize(),t.position.copy(e),t.setDirection(o),t.setLength(s,r,a)}vectorText(t){return`(${Ne(t.x,2)}, ${Ne(t.y,2)}, ${Ne(t.z,2)})`}updateGlossyUniforms(t){var n;const e=[this.puzzleObject,...this.componentModels].filter(Boolean);for(const s of e){const r=(n=s.material)==null?void 0:n.uniforms;r&&(r.uLightPos.value.copy(this.lightPos),r.uCameraPos.value.copy(t),r.uLightPower.value=5.2,r.uShininess.value=42)}}aimSurfaceSample(){var o;if(!this.puzzleObject)return null;const t=this.game.camera.position.clone(),e=this.game.lookDirection(!0);this.aimRaycaster.set(t,e),this.aimRaycaster.near=.05,this.aimRaycaster.far=8;const n=this.aimRaycaster.intersectObject(this.puzzleObject,!1);if(!n.length)return null;const s=n[0],r=new Dt().getNormalMatrix(this.puzzleObject.matrixWorld),a=(((o=s.face)==null?void 0:o.normal)??new M(0,1,0)).clone().applyMatrix3(r).normalize();return a.dot(t.clone().sub(s.point))<0&&a.negate(),{p:s.point.clone(),n:a}}debugLightingForSample(t,e,n){const l=n.clone().sub(t.p);if(l.lengthSq()<1e-6)return null;const c=l.normalize(),u=Math.max(0,t.n.dot(c)),d=e.clone().sub(t.p),h=Math.max(.18,d.lengthSq()),p=d.normalize(),g=Math.max(0,t.n.dot(p)),y=5.2/h,m=p.clone().negate().reflect(t.n).normalize(),f=Math.max(0,m.dot(c)),v=g>0?Math.pow(f,42):0,E=.52*y*g,b=1.9*y*v,C=E+b;return{p:t.p.clone(),n:t.n.clone(),l:p,v:c,r:m,nDotL:g,nDotV:u,rDotV:f,incomingRadiance:y,diffuseTerm:g,specularTerm:v,brdf:.52+1.9*v,diffuse:E,specular:b,radiance:C,distance:Math.sqrt(h),contribution:C}}updateEquationDebug(t){if(!this.equationDebug)return;const e=t.debug;if(this.equationDebug.root.visible=!!e,!e)return;const n=e.p,s=n.clone().sub(this.lightPos);this.equationDebug.point.position.copy(n),this.setDebugArrow(this.equationDebug.lightRay,this.lightPos,s,s.length(),.17,.09),this.setDebugArrow(this.equationDebug.normal,n,e.n,.68,.13,.07),this.setDebugArrow(this.equationDebug.view,n,e.v,.78,.13,.07),this.setDebugArrow(this.equationDebug.reflect,n,e.r,.7,.13,.07);const r=this.equationDebug.labels;r.x.position.copy(n).add(new M(0,.18,0)),r.li.position.copy(this.lightPos).lerp(n,.54).add(new M(0,.16,0)),r.n.position.copy(n).add(e.n.clone().multiplyScalar(.82)),r.v.position.copy(n).add(e.v.clone().multiplyScalar(.94)),r.r.position.copy(n).add(e.r.clone().multiplyScalar(.86)),this.equationDebug.readout.position.copy(n).add(new M(0,1.05,0)),this.equationDebug.readout.userData.setText(`x=${this.vectorText(e.p)}
n=${this.vectorText(e.n)}
Li=${Ne(e.incomingRadiance,3)}  N dot L=${Ne(e.nDotL,3)}
R dot V=${Ne(e.rDotV,3)}`)}evaluateRenderingEquation(t,e){const s=this.objectCenter.clone().sub(e).normalize(),r=Math.cos(cs(38));let a=0,o=0,l=0,c=0,u=0,d=null;for(const p of this.samples){const y=e.clone().sub(p.p).normalize(),m=Math.max(0,p.n.dot(y));if(m<=0)continue;const f=p.p.clone().sub(e).normalize(),v=s.dot(f);if(v<=r)continue;const E=(v-r)/(1-r);u++;const b=this.debugLightingForSample(p,t,e);if(!b||b.nDotL<=0)continue;const C=b.diffuse,T=b.specular,R=m*E,_=(C+T)*R;(!d||_>d.contribution)&&(d={...b,contribution:_}),a+=_,o+=C*R,l+=T*R,c+=R}return{radiance:c>0?a/c:0,diffuse:c>0?o/c:0,specular:c>0?l/c:0,visible:ue(u/Math.max(1,this.samples.length*.28)),visibleCount:u,debug:d}}estimateTargetRadiance(){let t=0;const e=this.objectCenter;for(const n of[2,2.6,3.15])for(const s of[.62,1.05,1.55,2.05,2.55])for(let r=0;r<28;r++){const a=r/28*Math.PI*2,o=new M(e.x+Math.cos(a)*n,s,e.z+Math.sin(a)*n);if(!(o.x<qe.minX||o.x>qe.maxX||o.z<qe.minZ||o.z>qe.maxZ))for(const l of this.samples){const c=this.debugLightingForSample(l,this.lightPos,o);c&&c.nDotV>.03&&(t=Math.max(t,c.radiance))}}return Math.max(.12,t*.94)}computeRenderingScore(){if(!this.lightInstalled||!this.cameraInstalled)return{total:0,radiance:0,diffuse:0,specular:0,visible:0};this.lightRig.getWorldPosition(this.lightPos),this.cameraRig.getWorldPosition(this.renderCamPos);const t=this.game.camera.position.clone(),e=this.aimSurfaceSample(),n=this.targetRadiance,s=e?this.debugLightingForSample(e,this.lightPos,t):null,r=(s==null?void 0:s.radiance)??0;return{total:ue(r/n),targetRadiance:n,radiance:r,diffuse:(s==null?void 0:s.diffuse)??0,specular:(s==null?void 0:s.specular)??0,visible:s?1:0,visibleCount:s?1:0,debug:s,aimHit:!!s}}update(t){super.update(t),Sg(this.lightRig);const e=this.cameraRig.position.clone();this.moveObjectWithKeys(this.cameraRig,t,{fly:!0,speed:2.1}),e.distanceToSquared(this.cameraRig.position)>1e-6&&(this.cameraMoved=!0),this.cameraRig.lookAt(this.objectCenter),this.lightInstalled&&this.cameraInstalled,fc(this.lightRig,!0),fc(this.cameraRig,!1),this.updateFollowCamera(t,this.cameraRig,{fly:!0,eyeHeight:.2});const n=this.computeRenderingScore();this.score=n.total,this.updateGlossyUniforms(this.game.camera.position),this.updateEquationDebug(n);const s=n.debug;this.game.ui.updateScores([{label:"광원 상태",value:1,text:"랜덤 고정"},{label:"카메라 이동",value:this.cameraMoved?1:0,text:this.cameraMoved?"완료":"필요"},{label:"조준 x",value:s?1:0,text:s?this.vectorText(s.p):"빗나감"},{label:"N dot L",value:(s==null?void 0:s.nDotL)??0,text:s?Ne(s.nDotL,3):"-"},{label:"R dot V",value:(s==null?void 0:s.rDotV)??0,text:s?Ne(s.rDotV,3):"-"},{label:"Li",value:ue(((s==null?void 0:s.incomingRadiance)??0)/7),text:s?Ne(s.incomingRadiance,3):"-"},{label:"Phong spec",value:(s==null?void 0:s.specularTerm)??0,text:s?Ne(s.specularTerm,3):"-"},{label:"Diffuse",value:ue(n.diffuse*2.2),text:Ne(n.diffuse,3)},{label:"Specular",value:ue(n.specular*8),text:Ne(n.specular,3)},{label:"조준 표면",value:n.aimHit?1:0,text:n.aimHit?"표면":"빗나감"},{label:"문 잠금",value:this.submittedRadiance?this.score/this.requiredScore:0,text:this.submittedRadiance&&this.score>=this.requiredScore?"열림":"좌클릭"}])}}const or=new M(2.5,3.2,2.8),Ag=new lt(.82,.88,1);function Sa(i,t=Ag){const e=t instanceof lt?t.clone():new lt(t);if(i==="flat")return new Xu({color:e,shininess:34,flatShading:!0,specular:16777215});const n={uLightPos:{value:or.clone()},uCameraPos:{value:new M},uColor:{value:e},uShininess:{value:45}},s=`
    vec3 shade(vec3 worldPos, vec3 n) {
      vec3 N = normalize(n);
      vec3 L = normalize(uLightPos - worldPos);
      vec3 V = normalize(uCameraPos - worldPos);
      vec3 R = reflect(-L, N);
      float diff = max(dot(N, L), 0.0);
      float spec = pow(max(dot(R, V), 0.0), uShininess) * 0.55;
      vec3 ambient = vec3(0.08, 0.10, 0.16);
      return ambient + uColor * diff + vec3(spec);
    }
  `;return i==="gouraud"?new sn({uniforms:n,vertexShader:`
        varying vec3 vCol;
        uniform vec3 uLightPos;
        uniform vec3 uCameraPos;
        uniform vec3 uColor;
        uniform float uShininess;
        ${s}
        void main() {
          vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vec3 n = normalize(mat3(modelMatrix) * normal);
          vCol = shade(worldPos, n);
          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vCol;
        void main() {
          gl_FragColor = vec4(vCol, 1.0);
        }
      `}):new sn({uniforms:n,vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      void main() {
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      uniform vec3 uLightPos;
      uniform vec3 uCameraPos;
      uniform vec3 uColor;
      uniform float uShininess;
      ${s}
      void main() {
        gl_FragColor = vec4(shade(vWorldPos, vNormal), 1.0);
      }
    `})}function pc(){const i=new Lo(1.13,3).toNonIndexed();return i.computeVertexNormals(),i}class Rg extends Jn{constructor(t){super(t),this.targetMode="phong",this.currentMode="flat",this.keypadInput="",this.keypadWrong=!1,this.keypadKeys=[],this.keypadRaycaster=new No,this.keypadDisplay=null}useWorldDepthForSprites(t){t==null||t.traverse(e=>{!e.isSprite||!e.material||(e.material.depthTest=!0,e.material.depthWrite=!1,e.renderOrder=0)})}enter(){super.enter(),this.game.setRenderProfile({exposure:.72,bloomStrength:0,bloomRadius:.12,bloomThreshold:1,ssao:!1,pixelRatio:1.35}),this.setupPlayer(new M(0,0,2.95),{color:9417983}),this.game.setCamera(new M(0,2.7,7.1),new M(0,1.1,-.35));const t=xg(this.group,9417983,{floorColor:1185314,wallColor:988451});this.door=t.door,vg(this.group,9417983);const e=new xs(16777215,.85,7.5,2);e.position.copy(or),this.group.add(e),this.buildDoorKeypad(),this.listen(this.game.renderer.domElement,"pointerdown",h=>{h.button===0&&this.clickKeypad(h)});const n=new Q(new Ee(.1,16,8),Pt(16777215,{emissive:16777215,emissiveIntensity:.65,envMapIntensity:0}));n.position.copy(or),this.group.add(n);const s=Pt(2568516,{roughness:.8,envMapIntensity:0}),r=new Q(new Ut(2.9,.12,2.9),s);r.position.set(-2.2,.06,0);const a=r.clone();a.position.x=2.2,this.group.add(r,a);const o=Pe(`TARGET
match the shading`,{scale:.5,fontSize:32});o.position.set(-2.2,2.65,-.4);const l=Pe(`내 물체
기법을 선택해 일치시키기`,{scale:.5,fontSize:32});l.position.set(2.2,2.65,-.4),this.group.add(o,l),this.useWorldDepthForSprites(this.group);const c=pc();this.targetMesh=new Q(c,Sa(this.targetMode)),this.targetMesh.position.set(-2.2,1.24,0),this.targetMesh.castShadow=!0,this.group.add(this.targetMesh);const u=new wr({color:791072,transparent:!0,opacity:.35}),d=new ho(new Al(c,12),u);d.position.copy(this.targetMesh.position),this.targetEdges=d,this.group.add(d),this.playerGeo=pc(),this.playerMesh=new Q(this.playerGeo,Sa(this.currentMode)),this.playerMesh.position.set(2.2,1.24,0),this.playerMesh.castShadow=!0,this.group.add(this.playerMesh),this.playerEdges=new ho(new Al(this.playerGeo,12),u.clone()),this.playerEdges.position.copy(this.playerMesh.position),this.group.add(this.playerEdges),this.game.ui.setRoom("2. Shading Room","같은 삼각형 mesh 위에서 Flat, Gouraud, Phong shading이 어떻게 다르게 계산되는지 비교하고 왼쪽 물체와 같은 technique을 적용하세요."),this.game.ui.setControls(`
      <div class="control-card">
        <h3>Shading Technique</h3>
        <div class="button-grid">
          <button id="shadeFlat" class="active">1 Flat</button>
          <button id="shadeGouraud">2 Gouraud</button>
          <button id="shadePhong">3 Phong</button>
        </div>
        <p class="small-text">숫자키로 전환합니다. 1: Flat, 2: Gouraud, 3: Phong.</p>
        <p class="small-text">선택 즉시 오른쪽 물체에 적용됩니다. Flat은 triangle마다 한 번, Gouraud는 vertex마다 한 번, Phong은 pixel마다 lighting 값을 계산합니다.</p>
      </div>
    `),this.listen(kt("shadeFlat"),"click",()=>this.setMode("flat")),this.listen(kt("shadeGouraud"),"click",()=>this.setMode("gouraud")),this.listen(kt("shadePhong"),"click",()=>this.setMode("phong")),this.buildKeypadPanel(),this.updateKeypadDisplays()}onKeyDown(t){t==="Digit1"&&this.setMode("flat"),t==="Digit2"&&this.setMode("gouraud"),t==="Digit3"&&this.setMode("phong"),t==="Backspace"&&this.deleteKeypadChar(),t==="Enter"&&this.submitKeypadAnswer(),t==="KeyR"&&this.resetKeypadInput(),super.onKeyDown(t)}setMode(t){var n,s;this.currentMode=t;const e=this.playerMesh.material;this.playerMesh.material=Sa(t),e.dispose();for(const r of["shadeFlat","shadeGouraud","shadePhong"])(n=kt(r))==null||n.classList.remove("active");(s=kt(`shade${t[0].toUpperCase()}${t.slice(1)}`))==null||s.classList.add("active")}keypadText(){return this.keypadInput}buildKeypadPanel(){var t;(t=kt("controls"))==null||t.insertAdjacentHTML("beforeend",`
      <div class="control-card">
        <h3>문 키패드</h3>
        <div id="keypadInputStatus" class="keypad-readout">${this.keypadText()}</div>
        <div class="button-grid">
          <button id="keypadDelete">지우기</button>
          <button id="keypadReset" class="danger">초기화</button>
          <button id="keypadSubmit">제출</button>
        </div>
        <p class="small-text">문 옆 키패드를 에임으로 보고 좌클릭해서 입력합니다. Backspace는 한 글자 지우기, R은 전체 초기화입니다.</p>
      </div>
    `),this.listen(kt("keypadDelete"),"click",()=>this.deleteKeypadChar()),this.listen(kt("keypadReset"),"click",()=>this.resetKeypadInput()),this.listen(kt("keypadSubmit"),"click",()=>this.submitKeypadAnswer())}updateKeypadDisplays(){const t=this.keypadText();this.keypadDisplay&&this.keypadDisplay.userData.setText(t,this.keypadWrong?"wrong":"");const e=kt("keypadInputStatus");e&&(e.textContent=this.keypadWrong?`${t}  -  틀렸습니다`:t,e.classList.toggle("wrong",this.keypadWrong))}appendKeypadLetter(t){this.keypadInput+=t,this.keypadWrong=!1,this.updateKeypadDisplays()}submitKeypadAnswer(){const t=this.keypadInput.trim().toUpperCase();if(t==="PHONG"){this.keypadWrong=!1,this.updateKeypadDisplays(),this.complete("문 잠금장치의 답안을 맞혔습니다. 다음 방으로 이동합니다.");return}this.keypadWrong=!0,this.updateKeypadDisplays(),this.game.ui.showToast(t?"틀렸습니다. 지우거나 초기화한 뒤 다시 제출하세요.":"답안을 입력한 뒤 Enter로 제출하세요.")}deleteKeypadChar(){this.keypadInput=this.keypadInput.slice(0,-1),this.keypadWrong=!1,this.updateKeypadDisplays(),this.game.ui.showToast("마지막 글자를 지웠습니다.")}resetKeypadInput(){this.keypadInput="",this.keypadWrong=!1,this.updateKeypadDisplays(),this.game.ui.showToast("키패드 입력을 처음부터 다시 시작합니다.")}buildDoorKeypad(){const t=new me;t.position.set(2.9,1.42,-4.02),this.group.add(t);const e=new Q(new Ut(1.72,1.48,.08),Pt(1383725,{roughness:.65,emissive:1785202,emissiveIntensity:.18}));t.add(e),this.keypadDisplay=_g(this.keypadText(),{worldWidth:1.58,worldHeight:.38,fontSize:48,background:"rgba(0,0,0,0.88)"}),this.keypadDisplay.position.set(0,.55,.08),t.add(this.keypadDisplay);const n=["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"],s=Pt(2240842,{roughness:.5,emissive:1789859,emissiveIntensity:.15}),r=new Ut(.13,.13,.055);n.forEach((u,d)=>{const h=.31-d*.23,p=-(u.length-1)*.085;[...u].forEach((g,y)=>{const m=new Q(r,s.clone());m.position.set(p+y*.17,h,.07),m.userData.keyLetter=g,t.add(m),this.keypadKeys.push(m);const f=ar(g,{scale:.095,fontSize:34,color:"#ffffff",background:"rgba(0,0,0,0)"});f.position.copy(m.position).add(new M(0,0,.055)),t.add(f)})});const a=new Ut(.36,.14,.055),o=Pt(4859703,{roughness:.52,emissive:9379117,emissiveIntensity:.2}),l=(u,d,h)=>{const p=new Q(a,o.clone());p.position.set(h,-.39,.07),p.userData.keyAction=d,t.add(p),this.keypadKeys.push(p);const g=ar(u,{scale:.105,fontSize:30,color:"#ffffff",background:"rgba(0,0,0,0)"});g.position.copy(p.position).add(new M(0,0,.055)),t.add(g)};l("지움","delete",-.48),l("초기화","reset",0),l("제출","submit",.48);const c=ar("문 비밀번호",{scale:.22,fontSize:26,color:"#d7e6ff",background:"rgba(0,0,0,0.58)"});c.position.set(0,-.63,.08),t.add(c),this.useWorldDepthForSprites(t)}clickKeypad(t){if(t&&document.pointerLockElement!==this.game.renderer.domElement){const r=this.game.renderer.domElement.getBoundingClientRect(),a=new Tt((t.clientX-r.left)/r.width*2-1,-((t.clientY-r.top)/r.height)*2+1);this.keypadRaycaster.setFromCamera(a,this.game.camera)}else this.keypadRaycaster.set(this.game.camera.position,this.game.lookDirection(!0));this.keypadRaycaster.near=.05,this.keypadRaycaster.far=8;const e=this.keypadRaycaster.intersectObjects(this.keypadKeys,!1)[0];if(!e)return;const n=this.keypadRaycaster.intersectObjects([this.targetMesh,this.playerMesh].filter(Boolean),!0)[0];if(n&&n.distance<e.distance)return;if(e.object.userData.keyAction==="delete"){this.deleteKeypadChar();return}if(e.object.userData.keyAction==="reset"){this.resetKeypadInput();return}if(e.object.userData.keyAction==="submit"){this.submitKeypadAnswer();return}const s=e.object.userData.keyLetter;s&&this.appendKeypadLetter(s)}updateShaderUniforms(t){const e=t.material;e.uniforms&&(e.uniforms.uCameraPos.value.copy(this.game.camera.position),e.uniforms.uLightPos.value.copy(or))}update(t){super.update(t),this.useWorldDepthForSprites(this.group),this.updatePlayer(t),this.updateFollowCamera(t,this.player,{distance:3}),this.targetMesh.rotation.y+=t*.38,this.playerMesh.rotation.y=this.targetMesh.rotation.y,this.targetEdges.rotation.copy(this.targetMesh.rotation),this.playerEdges.rotation.copy(this.playerMesh.rotation),this.updateShaderUniforms(this.targetMesh),this.updateShaderUniforms(this.playerMesh);const e=this.currentMode===this.targetMode?1:this.currentMode==="flat"?.48:.64;this.score=e,this.game.ui.updateScores([{label:"문 잠금",value:this.solved?1:0,text:this.solved?"열림":"잠김"}])}}class Cg extends Jn{constructor(t){super(t),this.settings={wrapName:"ClampToEdgeWrapping",repeatX:1,repeatY:1,offsetX:0,offsetY:0},this.target={wrapName:"MirroredRepeatWrapping",repeatX:2.6,repeatY:1.8,offsetX:.18,offsetY:-.12}}enter(){super.enter(),this.game.setCamera(new M(0,2.75,6.9),new M(0,1.15,-.3));const t=qi(this.group,15681391,{floorColor:1382434,wallColor:1119521});this.door=t.door,Ir(this.group,15681391),this.baseTexture=nh(512);const e=this.makeTexture(this.target),n=this.makeTexture(this.settings),s=this.makeTexture({wrapName:"ClampToEdgeWrapping",repeatX:1,repeatY:1,offsetX:0,offsetY:0}),r=new mn(2.25,2.25,1,1);this.targetPlane=new Q(r,new De({map:e,side:Ge})),this.targetPlane.position.set(-2.45,1.3,-.25),this.playerPlane=new Q(r.clone(),new De({map:n,side:Ge})),this.playerPlane.position.set(2.45,1.3,-.25);const a=new Q(new mn(1.15,1.15),new De({map:s,side:Ge}));a.position.set(0,.75,.45),a.rotation.x=-.08,this.group.add(this.targetPlane,this.playerPlane,a);const o=Pe("TARGET TEXTURE",{scale:.45,fontSize:34});o.position.set(-2.45,2.78,-.35);const l=Pe("YOUR TEXTURE",{scale:.45,fontSize:34});l.position.set(2.45,2.78,-.35);const c=Pe("ORIGINAL",{scale:.34,fontSize:34});c.position.set(0,1.55,.35),this.textureLabels=[o,l,c],this.textureLabels.forEach(u=>{u.visible=!1}),this.group.add(o,l,c),this.game.ui.setRoom("3. Texture Room","원본 UV 이미지를 이용해 오른쪽을 왼쪽과 동일하게 만드세요. wrapping, repeat, offset이 모두 비슷해야 문이 열립니다."),this.game.ui.setControls(`
      <div class="control-card">
        <h3>Texture Wrapping</h3>
        <div class="button-grid">
          <button id="wrapClamp" class="active">Clamp</button>
          <button id="wrapRepeat">Repeat</button>
          <button id="wrapMirror">Mirror</button>
        </div>
      </div>
      <div class="control-card">
        <h3>UV Transform</h3>
        ${this.slider("repeatX","Repeat X",.5,4,.01,this.settings.repeatX)}
        ${this.slider("repeatY","Repeat Y",.5,4,.01,this.settings.repeatY)}
        ${this.slider("offsetX","Offset X",-.5,.5,.01,this.settings.offsetX)}
        ${this.slider("offsetY","Offset Y",-.5,.5,.01,this.settings.offsetY)}
        <p class="small-text">목표는 Mirror wrapping, Repeat X≈2.6, Repeat Y≈1.8, Offset X≈0.18, Offset Y≈-0.12 근처입니다.</p>
      </div>
    `),this.listen(kt("wrapClamp"),"click",()=>this.setWrap("ClampToEdgeWrapping")),this.listen(kt("wrapRepeat"),"click",()=>this.setWrap("RepeatWrapping")),this.listen(kt("wrapMirror"),"click",()=>this.setWrap("MirroredRepeatWrapping"));for(const u of["repeatX","repeatY","offsetX","offsetY"])this.listen(kt(u),"input",()=>this.readSliders());this.readSliders()}slider(t,e,n,s,r,a){return`<div class="control-row">
      <label for="${t}">${e}</label>
      <input type="range" id="${t}" min="${n}" max="${s}" step="${r}" value="${a}">
      <span id="${t}Val">${Ne(a)}</span>
    </div>`}makeTexture(t){const e=this.baseTexture.clone();return e.wrapS=e.wrapT=uc(t.wrapName),e.repeat.set(t.repeatX,t.repeatY),e.offset.set(t.offsetX,t.offsetY),e.needsUpdate=!0,e}setWrap(t){var e,n,s;this.settings.wrapName=t,(e=kt("wrapClamp"))==null||e.classList.toggle("active",t==="ClampToEdgeWrapping"),(n=kt("wrapRepeat"))==null||n.classList.toggle("active",t==="RepeatWrapping"),(s=kt("wrapMirror"))==null||s.classList.toggle("active",t==="MirroredRepeatWrapping"),this.applyTexture()}readSliders(){for(const t of["repeatX","repeatY","offsetX","offsetY"])this.settings[t]=Number(kt(t).value),kt(`${t}Val`).textContent=Ne(this.settings[t]);this.applyTexture()}applyTexture(){if(!this.playerPlane)return;const t=this.playerPlane.material.map;t.wrapS=t.wrapT=uc(this.settings.wrapName),t.repeat.set(this.settings.repeatX,this.settings.repeatY),t.offset.set(this.settings.offsetX,this.settings.offsetY),t.needsUpdate=!0}computeScore(){const t=this.settings.wrapName===this.target.wrapName?1:0,e=Math.abs(this.settings.repeatX-this.target.repeatX)/1.4+Math.abs(this.settings.repeatY-this.target.repeatY)/1.4,n=ue(1-e/2),s=Math.abs(this.settings.offsetX-this.target.offsetX)/.45+Math.abs(this.settings.offsetY-this.target.offsetY)/.45,r=ue(1-s/2);return{wrapScore:t,repeatScore:n,offsetScore:r,total:t*.45+n*.35+r*.2}}update(t){super.update(t);const e=this.computeScore();this.score=e.total,this.game.ui.updateScores([{label:"Wrapping",value:e.wrapScore,text:this.settings.wrapName.replace("Wrapping","")},{label:"선택 항목",value:1,text:this.selectedTextureControl},{label:"Repeat",value:e.repeatScore},{label:"Offset",value:e.offsetScore},{label:"문 잠금",value:this.score/.88,text:this.score>=.88?"열림":"잠김"}]),this.score>=.88&&this.complete("Texture transform이 목표와 일치했습니다. 다음 방으로 이동합니다.")}}class Pg extends Cg{constructor(t){super(t),this.originalInstalled=!1,this.selectedTextureControl="repeatX",this.escapeThreshold=.92}enter(){Jn.prototype.enter.call(this),this.setupPlayer(new M(0,0,2.95),{color:15681391}),this.game.setCamera(new M(0,2.3,6.2),new M(0,1.05,1.1));const t=qi(this.group,15681391,{floorColor:1382434,wallColor:1119521});this.door=t.door,Ir(this.group,15681391),this.baseTexture=nh(512);const e=this.makeTexture(this.target),n=this.makeTexture(this.settings),s=this.makeTexture({wrapName:"ClampToEdgeWrapping",repeatX:1,repeatY:1,offsetX:0,offsetY:0}),r=new mn(2.25,2.25,1,1);this.targetPlane=new Q(r,new De({map:e,side:Ge})),this.targetPlane.position.set(-2.45,1.3,-.25),this.playerPlane=new Q(r.clone(),new De({map:n,side:Ge})),this.playerPlane.position.set(2.45,1.3,-.25),this.originalPlane=new Q(new mn(1.15,1.15),new De({map:s,side:Ge})),this.originalPlane.position.set(0,.82,.45),this.originalPlane.rotation.x=-.08,this.targetPlane.visible=!1,this.playerPlane.visible=!1,this.originalPlane.visible=!1,this.group.add(this.targetPlane,this.playerPlane,this.originalPlane);const a=new Q(new Ut(1.05,.55,.72),Pt(2761522,{roughness:.78}));a.position.set(-3.55,.28,2.65),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a);const o=Pe("서랍",{scale:.22,fontSize:28});o.position.set(-3.55,.86,2.65),this.group.add(o),this.originalCard=new me;const l=new Q(new mn(.58,.58),new De({map:s.clone(),side:Ge}));l.rotation.x=-Math.PI/2,this.originalCard.add(l),this.originalCard.position.set(-3.55,.61,2.65),this.group.add(this.originalCard),this.textureMachine=rh("IMAGE SLOT",15681391),this.textureMachine.position.set(0,.25,1.28),this.group.add(this.textureMachine);const c=Pe("TARGET TEXTURE",{scale:.45,fontSize:34});c.position.set(-2.45,2.78,-.35);const u=Pe("YOUR TEXTURE",{scale:.45,fontSize:34});u.position.set(2.45,2.78,-.35);const d=Pe("ORIGINAL",{scale:.34,fontSize:34});d.position.set(0,1.55,.35),this.group.add(c,u,d),this.addInteractable(this.originalCard,.78,"원본 이미지 줍기",()=>this.pickOriginal()),this.addInteractable(this.textureMachine,.9,"image slot에 original image 올리기",()=>this.installOriginal()),this.game.ui.setRoom("3. Texture Room","서랍에 숨겨진 original image를 찾아 image slot 위에 올리세요. original image를 올리기 전에는 original, target texture, your texture가 보이지 않고 조작 패널도 잠겨 있습니다."),this.showSearchControls()}showSearchControls(){this.game.ui.setControls(`
      <div class="control-card">
        <h3>Texture Machine</h3>
        <p class="small-text">서랍에서 original image card를 찾은 뒤 image slot에 올리면 original, target texture, your texture와 조작 패널이 나타납니다.</p>
        <p class="small-text">WASD로 서랍을 찾고 E로 original image를 줍습니다. image slot 앞에서 다시 E를 누르면 puzzle이 열립니다.</p>
      </div>
    `)}pickOriginal(){this.originalInstalled||(this.carried=this.originalCard,this.originalCard.userData.carried=!0)}installOriginal(){var t;if(this.carried!==this.originalCard){this.game.ui.showToast("original image card를 먼저 image slot으로 가져오세요.");return}this.carried=null,this.originalInstalled=!0,this.originalCard.visible=!1,this.originalPlane.visible=!0,this.targetPlane.visible=!0,this.playerPlane.visible=!0,(t=this.textureLabels)==null||t.forEach(e=>{e.visible=!0}),this.buildPuzzleControls()}buildPuzzleControls(){this.game.ui.setControls(`
      <div class="control-card">
        <h3>Texture Wrapping</h3>
        <div class="button-grid">
          <button id="wrapClamp" class="active">1 Clamp</button>
          <button id="wrapRepeat">2 Repeat</button>
          <button id="wrapMirror">3 Mirror</button>
        </div>
        <p class="small-text">숫자키로 wrapping 방식을 전환합니다. 1: Clamp, 2: Repeat, 3: Mirror.</p>
      </div>
      <div class="control-card">
        <h3>UV Transform</h3>
        ${this.slider("repeatX","Repeat X",.5,4,.01,this.settings.repeatX)}
        ${this.slider("repeatY","Repeat Y",.5,4,.01,this.settings.repeatY)}
        ${this.slider("offsetX","Offset X",-.5,.5,.01,this.settings.offsetX)}
        ${this.slider("offsetY","Offset Y",-.5,.5,.01,this.settings.offsetY)}
        <p class="small-text">키보드 조작: 4 Repeat X, 5 Repeat Y, 6 Offset X, 7 Offset Y 선택. 방향키 오른쪽/위는 증가, 왼쪽/아래는 감소.</p>
        <p class="small-text">목표와 거의 맞으면 통과됩니다. Mirror, Repeat X 2.60, Repeat Y 1.80, Offset X 0.18, Offset Y -0.12.</p>
      </div>
    `),this.listen(kt("wrapClamp"),"click",()=>this.setWrap("ClampToEdgeWrapping")),this.listen(kt("wrapRepeat"),"click",()=>this.setWrap("RepeatWrapping")),this.listen(kt("wrapMirror"),"click",()=>this.setWrap("MirroredRepeatWrapping"));for(const t of["repeatX","repeatY","offsetX","offsetY"])this.listen(kt(t),"input",()=>this.readSliders());this.readSliders()}onKeyDown(t){this.originalInstalled&&(t==="Digit1"&&this.setWrap("ClampToEdgeWrapping"),t==="Digit2"&&this.setWrap("RepeatWrapping"),t==="Digit3"&&this.setWrap("MirroredRepeatWrapping"),t==="Digit4"&&(this.selectedTextureControl="repeatX"),t==="Digit5"&&(this.selectedTextureControl="repeatY"),t==="Digit6"&&(this.selectedTextureControl="offsetX"),t==="Digit7"&&(this.selectedTextureControl="offsetY"),(t==="ArrowUp"||t==="ArrowRight")&&this.adjustTextureControl(1),(t==="ArrowDown"||t==="ArrowLeft")&&this.adjustTextureControl(-1)),super.onKeyDown(t)}adjustTextureControl(t){const e=this.selectedTextureControl,n=e.startsWith("repeat")?.05:.01,s={repeatX:[.5,4],repeatY:[.5,4],offsetX:[-.5,.5],offsetY:[-.5,.5]},[r,a]=s[e];this.settings[e]=he.clamp(this.settings[e]+t*n,r,a);const o=kt(e);o&&(o.value=this.settings[e]);const l=kt(`${e}Val`);l&&(l.textContent=Ne(this.settings[e])),this.applyTexture()}computeScore(){const t=this.settings.wrapName===this.target.wrapName?1:0,e=Math.abs(this.settings.repeatX-this.target.repeatX)/.55+Math.abs(this.settings.repeatY-this.target.repeatY)/.55,n=ue(1-e/2),s=Math.abs(this.settings.offsetX-this.target.offsetX)/.18+Math.abs(this.settings.offsetY-this.target.offsetY)/.18,r=ue(1-s/2);return{wrapScore:t,repeatScore:n,offsetScore:r,total:t*.42+n*.34+r*.24}}update(t){if(Jn.prototype.update.call(this,t),this.updatePlayer(t),this.updateFollowCamera(t,this.player,{distance:3}),!this.originalInstalled){this.game.ui.updateScores([{label:"Original image",value:0,text:"숨김"},{label:"문 잠금",value:0,text:"잠김"}]);return}const e=this.computeScore();this.score=e.total,this.game.ui.updateScores([{label:"Wrapping",value:e.wrapScore,text:this.settings.wrapName.replace("Wrapping","")},{label:"Repeat",value:e.repeatScore},{label:"Offset",value:e.offsetScore},{label:"문 잠금",value:this.score/this.escapeThreshold,text:this.score>=this.escapeThreshold?"열림":"잠김"}]),this.score>=this.escapeThreshold&&this.complete("Texture source와 transform이 목표와 일치했습니다. 다음 방으로 이동합니다.")}}function Dg(i=4649160){const t=new me,e=Pt(i,{roughness:.58,metalness:.06,emissive:i,emissiveIntensity:.015,envMapIntensity:.28}),n=Pt(10135736,{roughness:.48,metalness:.1,envMapIntensity:.3}),s=new me;t.add(s);const r=new Q(new nn(.42,.52,.22,32),Pt(2568516,{roughness:.72}));r.position.y=.11,r.castShadow=!0,r.receiveShadow=!0,t.add(r);const a=new Q(new nn(.09,.11,.82,18),e);a.position.y=.55,s.add(a);const o=new me;o.position.y=.98,s.add(o),o.add(new Q(new Ee(.15,18,10),n));const l=new Q(new Ut(.18,.18,1.22),e);l.position.z=-.61,l.castShadow=!0,o.add(l);const c=new me;c.position.z=-1.22,o.add(c),c.add(new Q(new Ee(.13,18,10),n));const u=new Q(new Ut(.16,.16,1.04),e);u.position.z=-.52,u.castShadow=!0,c.add(u);const d=new me;d.position.z=-1.04,c.add(d);const h=new Q(new Ee(.16,24,14),n);h.castShadow=!0,d.add(h);const p=Pt(8360360,{roughness:.45,metalness:.14,envMapIntensity:.28}),g=new Q(new Io(.18,.012,8,28),p),y=g.clone();y.rotation.y=Math.PI/2,d.add(g,y);const m=new Q(new nn(.045,.06,.42,14),e);m.rotation.x=Math.PI/2,m.position.z=-.24,m.castShadow=!0,d.add(m);const f=new me;f.position.z=-.46,d.add(f);const v=new Q(new Ee(.13,18,10),e);v.position.y=-.03,v.castShadow=!0,f.add(v);const E=new Q(new nn(.18,.18,.08,24),e);E.position.y=-.08,E.castShadow=!0,f.add(E);const b=[],C=Pt(9412788,{roughness:.42,metalness:.24,envMapIntensity:.3}),T=(R,_,A=.028)=>{const D=_.clone().sub(R),P=D.length(),I=new Q(new nn(A,A,P,12),C);return I.position.copy(R).add(_).multiplyScalar(.5),I.quaternion.setFromUnitVectors(new M(0,1,0),D.normalize()),I.castShadow=!0,I};for(let R=0;R<4;R++){const _=R*Math.PI/2,A=new me;A.position.set(Math.cos(_)*.17,-.08,Math.sin(_)*.17),A.rotation.y=-_,f.add(A);const D=new me;A.add(D);const P=new M(0,0,0),I=new M(.22,-.31,0),H=new M(.07,-.58,0),X=new M(-.06,-.52,0);D.userData.collisionPoints=[P,I,H,X],D.add(T(P,I,.03)),D.add(T(I,H,.03)),D.add(T(H,X,.026));const N=new Q(new Ee(.045,12,8),n);N.castShadow=!0,D.add(N);const G=new Q(new Ee(.035,12,8),C);G.position.copy(X),G.castShadow=!0,D.add(G),b.push(D)}return{root:t,base:s,shoulder:o,elbow:c,wrist:d,claw:f,clawCore:v,hookPivots:b}}function Lg(){const i=new me,t=new Q(new gs(.13,.34,6,12),Pt(16765286,{roughness:.5}));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new Q(new Ee(.12,16,8),Pt(16173480,{roughness:.5}));return e.position.y=.58,e.castShadow=!0,i.add(e),i}const ke=.17,ya=.72,mc=.58,Ig=new M(0,-.52,0);function Ug(i,t,e){const n=e.clone().sub(t),s=n.lengthSq();if(s<1e-8)return t.clone();const r=he.clamp(i.clone().sub(t).dot(n)/s,0,1);return t.clone().addScaledVector(n,r)}function gc(i,t,e,n,s=ke){const r=e.clone().add(new M(0,s,0)),a=e.clone().add(new M(0,n-s,0));let o=1/0;for(let l=0;l<=10;l++){const c=i.clone().lerp(t,l/10);o=Math.min(o,c.distanceTo(Ug(c,r,a)))}return o}function Ng(i,t,e,n,s,r,a=0){const o=n+a;let l=0;for(let c=0;c<=12;c++){const u=i.clone().lerp(t,c/12);u.y<s-a||u.y>r+a||(l=Math.max(l,o-Math.hypot(u.x-e.x,u.z-e.z)))}return l}class Fg extends Jn{constructor(t){super(t),this.selectedJoint="base",this.timer=50,this.holdingDoll=!1,this.dollVelocity=new M,this.dropHeight=1.16,this.joints={base:-.62,shoulder:.34,elbow:-.56,wrist:.18,wristYaw:0,claw:0},this.dropRadius=.52,this.dropTopRadius=.42,this.dropSuccessRadius=.4}enter(){super.enter(),this.game.setRenderProfile({exposure:.68,bloomStrength:0,bloomRadius:.08,bloomThreshold:1,ssao:!0});const t=3125407;this.setupPlayer(new M(0,0,2.9),{color:t}),this.game.setCamera(new M(0,2.25,5.4),new M(0,.85,-.5));const e=qi(this.group,t,{floorColor:1186074,wallColor:988952});this.door=e.door,Ir(this.group,t),this.arm=Dg(t),this.arm.root.position.set(0,0,1.05),this.group.add(this.arm.root),this.cameraTarget=this.player,this.dollStart=new M(-1.45,0,-.7),this.doll=Lg(),this.doll.position.copy(this.dollStart),this.group.add(this.doll);const n=new Q(new nn(.38,.52,this.dropHeight,30),Pt(2568516,{roughness:.72}));n.position.set(2.45,this.dropHeight/2,.4),n.castShadow=!0,n.receiveShadow=!0,this.group.add(n),this.targetPad=rh("목표 지점",16765286),this.targetPad.position.set(2.45,this.dropHeight+.08,.4),this.group.add(this.targetPad);const s=Pe("시간 안에 인형을 목표 지점으로 옮기세요",{scale:.56,fontSize:32});s.position.set(0,2.86,-2.75),this.group.add(s),this.game.ui.setRoom("4. Animation Room","플레이어 시점으로 방 안을 이동하면서 로봇팔을 조종합니다. 숫자키로 관절 하나를 선택한 뒤 방향키로 선택된 관절만 움직여 인형을 목표 지점으로 옮기세요."),this.buildJointControls(),this.applyJointPose()}buildJointControls(){const t=[["base","베이스"],["shoulder","어깨"],["elbow","팔꿈치"],["wrist","손목"],["claw","집게"]];this.game.ui.setControls(`
      <div class="control-card">
        <h3>선택 관절</h3>
        <div class="button-grid">
          ${t.map(([e,n],s)=>`<button id="joint${n}" class="${this.selectedJoint===e?"active":""}">${s+1} ${n}</button>`).join("")}
        </div>
        <p class="small-text">WASD는 플레이어 이동입니다. 1: 베이스, 2: 어깨, 3: 팔꿈치, 4: 손목 볼 관절, 5: 네 갈고리 집게. 선택한 관절만 움직입니다. 손목은 ←/→ 회전, ↑/↓ 기울이기이고 집게는 ↑로 닫고 ↓로 엽니다.</p>
      </div>
    `);for(const[e,n]of t)this.listen(kt(`joint${n}`),"click",()=>this.setSelectedJoint(e))}setSelectedJoint(t){this.selectedJoint=t,this.buildJointControls()}jointLabel(t){return{base:"베이스",shoulder:"어깨",elbow:"팔꿈치",wrist:"손목",claw:"집게"}[t]??t}onKeyDown(t){const e={Digit1:"base",Digit2:"shoulder",Digit3:"elbow",Digit4:"wrist",Digit5:"claw"};e[t]&&this.setSelectedJoint(e[t]),super.onKeyDown(t)}applyJointPose(){this.arm.base.rotation.y=this.joints.base,this.arm.shoulder.rotation.x=this.joints.shoulder,this.arm.elbow.rotation.x=this.joints.elbow,this.arm.wrist.rotation.set(this.joints.wrist,this.joints.wristYaw,0);const t=1-this.joints.claw;for(const e of this.arm.hookPivots??[])e.rotation.z=Kn(-.36,.32,t)}updateSelectedJoint(t){const e={...this.joints},n=this.poseCollisionScore(),s=1.25*t;if(this.selectedJoint==="base")this.game.keys.has("ArrowLeft")&&(this.joints.base+=s),this.game.keys.has("ArrowRight")&&(this.joints.base-=s),this.joints.base=he.clamp(this.joints.base,-1.65,1.65);else if(this.selectedJoint==="claw")this.game.keys.has("ArrowUp")&&(this.joints.claw+=s*1.2),this.game.keys.has("ArrowDown")&&(this.joints.claw-=s*1.2),this.joints.claw=ue(this.joints.claw);else if(this.selectedJoint==="wrist"){const a=(this.game.keys.has("ArrowUp")?1:0)-(this.game.keys.has("ArrowDown")?1:0),o=(this.game.keys.has("ArrowLeft")?1:0)-(this.game.keys.has("ArrowRight")?1:0);this.joints.wrist+=a*s,this.joints.wristYaw+=o*s,this.joints.wrist=he.clamp(this.joints.wrist,-.85,.85),this.joints.wristYaw=he.clamp(this.joints.wristYaw,-.72,.72)}else{const a=(this.game.keys.has("ArrowUp")?1:0)-(this.game.keys.has("ArrowDown")?1:0);this.joints[this.selectedJoint]+=a*s,this.joints.shoulder=he.clamp(this.joints.shoulder,-.45,.85),this.joints.elbow=he.clamp(this.joints.elbow,-1.1,.65)}this.applyJointPose(),this.holdingDoll||this.tryGrabDoll({forgiving:!0});const r=this.poseCollisionScore();r>.001&&r>=n-.002&&(Object.assign(this.joints,e),this.applyJointPose())}worldPoint(t,e=new M){return t.updateWorldMatrix(!0,!1),t.localToWorld(e.clone())}clawWorldPosition(){return this.arm.claw.updateWorldMatrix(!0,!1),this.arm.claw.getWorldPosition(new M)}clawGripWorldPosition(){return this.worldPoint(this.arm.claw,Ig)}dollGripWorldPosition(){return this.doll.position.clone().add(new M(0,mc,0))}targetSurfaceY(){return this.targetPad.position.y+.105}heldDollTargetPosition(){const t=this.clawGripWorldPosition();return new M(t.x,Math.max(0,t.y-mc),t.z)}armCollisionSegments(){const t=this.worldPoint(this.arm.shoulder),e=this.worldPoint(this.arm.elbow),n=this.worldPoint(this.arm.wrist),s=this.clawWorldPosition(),r=this.clawGripWorldPosition(),a=[{a:t,b:e,radius:.13,kind:"arm"},{a:e,b:n,radius:.12,kind:"arm"},{a:n,b:s,radius:.11,kind:"wrist"},{a:s,b:r,radius:.08,kind:"clawCenter"}];for(const o of this.arm.hookPivots??[]){const l=o.userData.collisionPoints??[new M(0,0,0),new M(.22,-.31,0),new M(.07,-.58,0),new M(-.06,-.52,0)];for(let c=0;c<l.length-1;c++)a.push({a:this.worldPoint(o,l[c]),b:this.worldPoint(o,l[c+1]),radius:c===2?.028:.032,kind:"claw"})}return a}dollInClawCage(t={}){this.arm.claw.updateWorldMatrix(!0,!1);const e=this.arm.claw.worldToLocal(this.dollGripWorldPosition().clone()),n=Math.hypot(e.x,e.z),s=!!t.forgiving;return n<(s?.64:.3)&&e.y<(s?.16:-.2)&&e.y>(s?-1.08:-.78)}clawDollContactInfo(t={}){const n=!!t.forgiving?.2:.08;let s=0,r=1/0,a=!1;for(const o of this.armCollisionSegments()){if(o.kind!=="claw")continue;const l=gc(o.a,o.b,this.doll.position,ya,ke);r=Math.min(r,l);const c=ke+o.radius+n;if(l<c){s+=1;const u=o.a.clone().add(o.b).multiplyScalar(.5),d=this.doll.position.y+ya*.5;Math.abs(u.y-d)<.52&&(a=!0)}}return{nearSegments:s,minDistance:r,sideContact:a}}armHitsDoll(){return this.armDollCollisionScore()>0}armDollCollisionScore(){if(this.holdingDoll)return 0;const t=this.dollInClawCage();let e=0;for(const n of this.armCollisionSegments()){if(n.kind==="clawCenter"&&t)continue;const s=n.kind==="claw",r=s?Kn(.105,.135,this.joints.claw):ke,a=s?.012:0,o=gc(n.a,n.b,this.doll.position,ya,r);e=Math.max(e,r+n.radius-o-a)}return e}armHitsDropZone(){return this.armDropZoneCollisionScore()>0}armDropZoneCollisionScore(){const t=this.targetPad.position,e=this.targetSurfaceY();let n=0;for(const s of this.armCollisionSegments())n=Math.max(n,Ng(s.a,s.b,t,this.dropRadius,0,e,s.radius));return n}wouldDollPenetrateEnvironment(t){if(t.y<-.001||t.x<qe.minX+ke||t.x>qe.maxX-ke||t.z<qe.minZ+ke||t.z>qe.maxZ-ke)return!0;const e=this.targetPad.position,n=this.targetSurfaceY();return Math.hypot(t.x-e.x,t.z-e.z)<this.dropRadius+ke&&t.y<n-.025}poseBlockedByCollision(){return this.poseCollisionScore()>.001}poseCollisionScore(){const t=this.clawGripWorldPosition();let e=Math.max(0,.46-t.y)*4;return e+=this.armDropZoneCollisionScore()*2,e+=this.armDollCollisionScore()*2,this.holdingDoll&&this.wouldDollPenetrateEnvironment(this.heldDollTargetPosition())&&(e+=1),e}failAndReset(){this.timer=50,this.holdingDoll=!1,this.dollVelocity.set(0,0,0),Object.assign(this.joints,{base:-.62,shoulder:.34,elbow:-.56,wrist:.18,wristYaw:0,claw:0}),this.doll.position.copy(this.dollStart),this.applyJointPose(),this.game.ui.showToast("시간이 끝났습니다. 로봇팔을 초기화합니다.")}resolveDollEnvironment(){const t=this.doll.position,e=this.targetPad.position,n=this.targetSurfaceY();let s=t.x-e.x,r=t.z-e.z,a=Math.hypot(s,r);if(a<this.dropTopRadius&&t.y<=n&&t.y>n-.46&&this.dollVelocity.y<=0)t.y=n,this.dollVelocity.y=0;else if(a<this.dropRadius+ke&&t.y<n-.025){a<1e-4&&(s=1,r=0,a=1);const l=this.dropRadius+ke-a+.006;t.x+=s/a*l,t.z+=r/a*l,this.dollVelocity.x=0,this.dollVelocity.z=0}t.y<0&&(t.y=0,this.dollVelocity.y=0),t.x=he.clamp(t.x,qe.minX+ke,qe.maxX-ke),t.z=he.clamp(t.z,qe.minZ+ke,qe.maxZ-ke)}tryGrabDoll(t={}){if(this.holdingDoll)return!0;const e=!!t.forgiving;if(this.joints.claw<(e?.04:.42))return!1;const n=this.clawGripWorldPosition().distanceTo(this.dollGripWorldPosition()),s=this.dollInClawCage({forgiving:e}),r=this.clawDollContactInfo({forgiving:e}),a=n<(e?1.02:.42),o=e&&r.sideContact&&r.nearSegments>=1&&r.minDistance<ke+.24,l=e&&r.nearSegments>=2&&n<1.24;if(!s&&!a&&!o&&!l)return!1;const c=this.heldDollTargetPosition();return this.wouldDollPenetrateEnvironment(c)?!1:(this.holdingDoll=!0,this.dollVelocity.set(0,0,0),this.doll.position.copy(c),!0)}dollOnDropZone(){const t=this.targetPad.position,e=this.targetSurfaceY();return Math.hypot(this.doll.position.x-t.x,this.doll.position.z-t.z)<this.dropSuccessRadius&&Math.abs(this.doll.position.y-e)<.08}dollCrossedDropZone(t,e){const n=this.targetPad.position,s=this.targetSurfaceY();if(t.y<s||e.y>s)return!1;const r=e.y-t.y,a=Math.abs(r)<1e-5?0:he.clamp((s-t.y)/r,0,1),o=Kn(t.x,e.x,a),l=Kn(t.z,e.z,a);return Math.hypot(o-n.x,l-n.z)<this.dropSuccessRadius}completeDollDrop(){this.doll.position.set(this.targetPad.position.x,this.targetSurfaceY(),this.targetPad.position.z),this.dollVelocity.set(0,0,0),this.complete("claw가 시간 안에 인형을 옮겼습니다. GI room으로 이동합니다.")}updateDoll(t){if(this.tryGrabDoll({forgiving:!0}),this.holdingDoll){const e=this.heldDollTargetPosition();this.wouldDollPenetrateEnvironment(e)||this.doll.position.copy(e),this.joints.claw<.08&&(this.holdingDoll=!1,this.dollVelocity.set(0,0,0),this.resolveDollEnvironment(),this.dollOnDropZone()&&this.completeDollDrop())}else{const e=this.doll.position.clone();this.dollVelocity.y-=5.8*t,this.doll.position.addScaledVector(this.dollVelocity,t),this.resolveDollEnvironment(),(this.dollOnDropZone()||this.dollCrossedDropZone(e,this.doll.position))&&this.completeDollDrop()}}update(t){super.update(t),this.updatePlayer(t),this.solved||(this.timer-=t,this.timer<=0&&this.failAndReset()),this.updateSelectedJoint(t),this.updateDoll(t),this.updateFollowCamera(t,this.player,{eyeHeight:1.18});const n=this.clawGripWorldPosition().distanceTo(this.dollGripWorldPosition()),s=new M(this.targetPad.position.x,this.targetSurfaceY(),this.targetPad.position.z),r=this.doll.position.distanceTo(s);this.game.ui.updateScores([{label:"남은 시간",value:this.timer/50,text:`${Math.ceil(this.timer)}초`,bad:this.timer<12},{label:"선택 관절",value:1,text:this.jointLabel(this.selectedJoint)},{label:"집게",value:this.joints.claw,text:this.holdingDoll?"잡음":`${Math.round(this.joints.claw*100)}%`},{label:"인형 거리",value:ue(1-n/1.4),text:`${Ne(n,2)}m`},{label:"목표 거리",value:ue(1-r/2.1),text:`${Ne(r,2)}m`}])}}function Og(i,t,e){const n=t.clone().sub(i);let s=0,r=1;const a=[["x",e.minX,e.maxX],["y",e.minY,e.maxY],["z",e.minZ,e.maxZ]];for(const[o,l,c]of a){const u=i[o],d=n[o];if(Math.abs(d)<1e-6){if(u<l||u>c)return!1}else{const h=1/d;let p=(l-u)*h,g=(c-u)*h;if(p>g&&([p,g]=[g,p]),s=Math.max(s,p),r=Math.min(r,g),s>r)return!1}}return!0}function hs(i,t){return[{minX:-.18,maxX:1.08,minY:0,maxY:4.35,minZ:-4.6,maxZ:2.95}].some(n=>Og(i,t,n))}function Bg(i){const t=[],e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n++){const s=1-n/Math.max(1,i-1)*2,r=Math.sqrt(Math.max(0,1-s*s)),a=e*n;t.push(new M(Math.cos(a)*r,s,Math.sin(a)*r).normalize())}return t}function ah(i){const t=i.x,e=i.y,n=i.z;return[.282095,.488603*e,.488603*n,.488603*t,1.092548*t*e,1.092548*e*n,.315392*(3*n*n-1),1.092548*t*n,.546274*(t*t-e*e)]}function _c(){return new Array(9).fill(0)}function zg(i,t,e,n=1){const s=ah(t);for(let r=0;r<i.length;r++)i[r]+=e*s[r]*n}function kg(i,t){const e=ah(t);let n=0;for(let s=0;s<i.length;s++)n+=i[s]*e[s];return Math.max(0,n)}function Gg(i,t,e){const n=i.userData.monsterVisual;if(!n){const a=i.userData.reveal??0;i.rotation.y+=t*(.5+a*.8),i.position.y+=Math.sin(e*2.2+(i.userData.enemyPhase??0))*t*.08;return}const s=i.userData.reveal??0,r=e*5.2+n.seed;n.body.rotation.y=Math.sin(e*1.6+n.seed)*.18,n.chest.rotation.z=Math.sin(e*2.3+n.seed)*.08,n.head.rotation.x=Math.sin(e*2.8+n.seed)*.1,n.head.rotation.y=Math.sin(e*2.1+n.seed)*.16,n.wings.forEach((a,o)=>{const l=o===0?-1:1;a.rotation.z=l*(.32+Math.sin(r)*.48),a.rotation.y=l*(.18+Math.cos(r*.7)*.12)}),n.tentacles.forEach((a,o)=>{a.rotation.x=Math.sin(e*2+n.seed+o)*.18,a.rotation.z=Math.cos(e*1.7+n.seed+o)*.14}),i.position.y+=Math.sin(e*3.1+n.seed)*t*.18,i.scale.setScalar(.92+s*.18+Math.sin(e*4.5+n.seed)*.015)}class oh extends Jn{constructor(t,e){super(t),this.bounds=fg,this.accent=e,this.hiders=[],this.found=new Set,this.giPatches=[],this.cinematicGFX=null,this.directLightPos=new M(-1.4,4.65,9.2),this.gun=null,this.gunRaycaster=new No,this.shotCooldown=0,this.lastShotHit=!1,this.enemyRevealThreshold=.48}enterCommon(t,e,n=null){super.enter(),this.game.setRenderProfile({exposure:.66,bloomStrength:0,bloomRadius:.08,bloomThreshold:1,ssao:!1,pixelRatio:1.15}),this.game.scene.background=new lt(12963802),this.game.scene.fog=new Gi(12963802,24,58),this.setupPlayer(new M(0,1.35,9.35),{fly:!0,color:this.accent}),this.game.setCamera(new M(0,2.3,10.8),new M(0,1.35,6)),this.createGun(),this.listen(this.game.renderer.domElement,"pointerdown",b=>{b.button===0&&document.pointerLockElement===this.game.renderer.domElement&&this.fireGun()});const s=qi(this.group,this.accent,{floorColor:7635341,wallColor:13160667,width:35.6,depth:32.2,height:5.4});this.door=s.door,Object.assign(s.floor.material,{roughness:.96,metalness:0,envMapIntensity:.05,roughnessMap:null}),s.floor.material.color.setHex(7635341),s.floor.material.needsUpdate=!0,this.group.add(new Rr(16777215,9279652,.42));const r=new Cr(16777215,.14);r.position.set(-4.5,7.5,6.5),r.castShadow=!0,this.group.add(r);const a=new Q(new Ut(35.6,.08,32.2),Pt(13226716,{roughness:.82,envMapIntensity:.06}));a.position.set(0,this.bounds.maxY-.12,-.15),a.receiveShadow=!0,this.group.add(a);const o=new Q(new Ut(35.6,5.4,.12),Pt(12503251,{roughness:.82,envMapIntensity:.08}));o.position.set(0,2.7,this.bounds.maxZ-.08),o.receiveShadow=!0,this.group.add(o);const l=new Q(new Ut(.32,4.8,27.8),Pt(13192031,{roughness:.82}));l.position.set(this.bounds.minX+.42,2.4,-.6);const c=new Q(new Ut(.32,4.8,27.8),Pt(3962072,{roughness:.82}));c.position.set(this.bounds.maxX-.42,2.4,-.6);const u=new Q(new Ut(1.26,4.35,7.55),Pt(11187391,{roughness:.86,envMapIntensity:.08}));u.position.set(.45,2.18,-.82),this.group.add(l,c,u),this.cinematicGFX=null;const d=Pt(6648189,{roughness:.82,envMapIntensity:.08}),h=Pt(8358549,{roughness:.84,envMapIntensity:.08}),p=(b,C,T=d)=>{const R=new Q(new Ut(b.x,b.y,b.z),T);return R.position.copy(C),R.receiveShadow=!0,this.group.add(R),R};p(new M(35,.08,.08),new M(0,.46,this.bounds.minZ-.42)),p(new M(35,.08,.08),new M(0,.46,this.bounds.maxZ-.12)),p(new M(.08,.08,30.7),new M(this.bounds.minX+.62,.46,-.15)),p(new M(.08,.08,30.7),new M(this.bounds.maxX-.62,.46,-.15)),p(new M(34.8,.055,.06),new M(0,2.15,this.bounds.maxZ-.14),h),p(new M(34.8,.055,.06),new M(0,3.72,this.bounds.maxZ-.14),h),p(new M(34.8,.055,.06),new M(0,2.15,this.bounds.minZ-.42),h),p(new M(34.8,.055,.06),new M(0,3.72,this.bounds.minZ-.42),h),p(new M(.07,5.05,.07),new M(this.bounds.minX+.58,2.62,this.bounds.minZ-.36)),p(new M(.07,5.05,.07),new M(this.bounds.maxX-.58,2.62,this.bounds.minZ-.36)),p(new M(.07,5.05,.07),new M(this.bounds.minX+.58,2.62,this.bounds.maxZ-.14)),p(new M(.07,5.05,.07),new M(this.bounds.maxX-.58,2.62,this.bounds.maxZ-.14));const g=[],y=.026;for(let b=-16;b<=16;b+=4)g.push(new M(b,y,this.bounds.minZ+.7)),g.push(new M(b,y,this.bounds.maxZ-.7));for(let b=-14;b<=14;b+=4)g.push(new M(this.bounds.minX+1,y,b)),g.push(new M(this.bounds.maxX-1,y,b));const m=new ho(new we().setFromPoints(g),new wr({color:5266020,transparent:!0,opacity:.36,depthTest:!0,depthWrite:!1}));m.renderOrder=3,this.group.add(m);const f=new xs(16733525,.28,8.5,2);f.position.copy(this.directLightPos),this.group.add(f);const v=new Q(new Ee(.14,18,10),Pt(16733525,{emissive:16720418,emissiveIntensity:.35}));v.position.copy(f.position),this.group.add(v),this.buildGIPatches(),(n??[new M(-8.8,0,-8.4),new M(8.2,0,-7.1),new M(9.7,2,5.3),new M(-6.4,3,7.6)]).forEach((b,C)=>{const R=bg(C===0?16731535:C===1?9417983:C===2?4649160:14132735,this.accent);R.position.copy(b),R.position.y<.8&&(R.position.y=1.05+C*.28),R.userData.id=C,R.userData.enemyTarget=this.randomEnemyTarget(b),R.userData.enemySpeed=2.05+C*.34,R.userData.enemyPhase=Math.random()*Math.PI*2,R.userData.eliminated=!1,this.group.add(R),as(R,0),this.hiders.push(R)}),this.game.ui.setRoom(t,e)}buildGIPatches(){this.giPatches=[];const t=(e,n,s,r=1)=>{const a=this.directLightPos.clone().sub(e),o=Math.max(0,n.dot(a.clone().normalize()))/Math.max(.2,a.lengthSq()),l=hs(this.directLightPos,e)?0:1,c=o*r*l*8;this.giPatches.push({pos:e,normal:n.clone().normalize(),color:s.clone(),irradiance:c})};for(const e of[.75,2,3.3,4.45])for(const n of[-9.2,-6.2,-3.2,-.2,2.8,5.8,8.4])t(new M(this.bounds.minX+.52,e,n),new M(1,0,0),new lt(1,.12,.08),2.25),t(new M(this.bounds.maxX-.52,e,n),new M(-1,0,0),new lt(.08,.22,1),1.8);for(const e of[-10,-7,-4,-1,2,5,8,11])for(const n of[-10,-7,-4,-1,2,5,8,10.4])t(new M(e,.04,n),new M(0,1,0),new lt(.42,.42,.38),.95);for(const e of[-10,-7,-4,-1,2,5,8,11])for(const n of[1,2.35,3.7])t(new M(e,n,this.bounds.minZ+.24),new M(0,0,1),new lt(.5,.56,.72),4.6),t(new M(e,n,this.bounds.maxZ-.24),new M(0,0,-1),new lt(.38,.44,.58),2.35);for(const e of[-10,-7,-4,-1,2,5,8,11])for(const n of[-10,-7,-4,-1,2,5,8,10.4])t(new M(e,this.bounds.maxY-.16,n),new M(0,-1,0),new lt(.44,.52,.7),1.9)}createGun(){this.gun=Eg(1777704,this.accent),this.gun.scale.setScalar(.86),this.group.add(this.gun)}updateGunVisuals(t){if(!this.gun)return;const e=this.game.camera,n=this.game.lookDirection(!0),s=new M().crossVectors(n,new M(0,1,0));s.lengthSq()<.001&&s.set(1,0,0),s.normalize();const r=new M(0,1,0);this.gun.position.copy(e.position).addScaledVector(s,.43).addScaledVector(r,-.34).addScaledVector(n,.62),this.gun.quaternion.copy(e.quaternion);const a=this.gun.userData.flash;a&&(a.material.opacity=Math.max(0,a.material.opacity-t*8.5),a.scale.setScalar(.75+a.material.opacity*1.4)),this.shotCooldown=Math.max(0,this.shotCooldown-t)}updatePlayer(t){if(!this.player)return;const e=this.player.position.clone(),n=this.game.lookDirection(!1);n.lengthSq()<.001&&n.set(0,0,-1),n.y=0,n.normalize();const s=new M().crossVectors(n,new M(0,1,0)).normalize(),r=new M;this.game.keys.has("KeyW")&&r.add(n),this.game.keys.has("KeyS")&&r.sub(n),this.game.keys.has("KeyD")&&r.add(s),this.game.keys.has("KeyA")&&r.sub(s),this.game.keys.has("Space")&&(r.y+=.75),(this.game.keys.has("KeyQ")||this.game.keys.has("ControlLeft")||this.game.keys.has("ControlRight"))&&(r.y-=.75),r.lengthSq()>1&&r.normalize();const a=this.game.keys.has("ShiftLeft")||this.game.keys.has("ShiftRight");this.player.position.addScaledVector(r,(a?5.6:2.85)*t),this.resolvePlayerRoomCollision(e),this.player.rotation.y=this.game.lookYaw}resolvePlayerRoomCollision(t){const e=this.player.position,n=.48;e.x=he.clamp(e.x,this.bounds.minX+n,this.bounds.maxX-n),e.z=he.clamp(e.z,this.bounds.minZ+n,this.bounds.maxZ-n),e.y=he.clamp(e.y,.42,this.bounds.maxY-.62);const s={minX:-.18-n,maxX:1.08+n,minY:0,maxY:4.35+.32,minZ:-4.6-n,maxZ:2.95+n};if(!(e.x>s.minX&&e.x<s.maxX&&e.z>s.minZ&&e.z<s.maxZ&&e.y>s.minY&&e.y<s.maxY))return;[{amount:e.x-s.minX,apply:()=>{e.x=s.minX}},{amount:s.maxX-e.x,apply:()=>{e.x=s.maxX}},{amount:e.z-s.minZ,apply:()=>{e.z=s.minZ}},{amount:s.maxZ-e.z,apply:()=>{e.z=s.maxZ}}].sort((o,l)=>o.amount-l.amount)[0].apply(),t&&this.enemyBlocked(e)&&e.copy(t),e.x=he.clamp(e.x,this.bounds.minX+n,this.bounds.maxX-n),e.z=he.clamp(e.z,this.bounds.minZ+n,this.bounds.maxZ-n),e.y=he.clamp(e.y,.42,this.bounds.maxY-.62)}enemyBlocked(t){return t.x>-.3&&t.x<1.2&&t.y<4.4&&t.z>-4.75&&t.z<3.1}randomEnemyTarget(t=new M){for(let e=0;e<24;e++){const n=new M(Kn(this.bounds.minX+1.8,this.bounds.maxX-1.8,Math.random()),Kn(.75,4.25,Math.random()),Kn(this.bounds.minZ+2,this.bounds.maxZ-2,Math.random()));if(!this.enemyBlocked(n)&&n.distanceTo(t)>3.2)return n}return new M(-8+Math.random()*16,.4+Math.random()*2.6,-8+Math.random()*16)}updateEnemies(t){const e=performance.now()*.001;for(const n of this.hiders){if(this.found.has(n.userData.id)){n.visible=!1,as(n,0);continue}const r=(n.userData.enemyTarget??this.randomEnemyTarget(n.position)).clone().sub(n.position);if(r.length()<.55||this.enemyBlocked(n.position)){n.userData.enemyTarget=this.randomEnemyTarget(n.position);continue}const a=n.position.clone(),o=r.normalize().multiplyScalar((n.userData.enemySpeed??.9)*t);n.position.add(o),n.position.y+=Math.sin(e*2.4+n.userData.enemyPhase)*.006,eh(n.position,this.bounds,!0),this.enemyBlocked(n.position)&&(n.position.copy(a),n.userData.enemyTarget=this.randomEnemyTarget(n.position)),o.lengthSq()>1e-5&&(n.rotation.y=Math.atan2(o.x,o.z)),Gg(n,t,e)}}fireGun(){var r;if(this.shotCooldown>0||this.solved)return;this.shotCooldown=.24;const t=(r=this.gun)==null?void 0:r.userData.flash;t&&(t.material.opacity=.95);const e=this.game.camera.position.clone(),n=this.game.lookDirection(!0);this.gunRaycaster.set(e,n),this.gunRaycaster.near=.15,this.gunRaycaster.far=34;let s=null;for(const a of this.hiders){if(this.found.has(a.userData.id)||(a.userData.reveal??0)<this.enemyRevealThreshold)continue;const o=a.position.clone().add(new M(0,.65,0));if(hs(e,o))continue;const l=this.gunRaycaster.intersectObject(a,!0);l.length&&(!s||l[0].distance<s.distance)&&(s={enemy:a,distance:l[0].distance})}if(s){const a=s.enemy;this.found.add(a.userData.id),a.userData.eliminated=!0,a.visible=!1,as(a,0),this.game.ui.showToast("명중. GI로 드러난 적을 맞혔습니다."),this.found.size>=this.hiders.length&&this.complete("움직이는 적을 모두 맞혔습니다. 다음 방으로 이동합니다.")}else this.game.ui.showToast("빗나갔습니다. GI 도구로 드러난 적만 맞출 수 있습니다.")}updateCombat(t,e){this.updateEnemies(t),this.updateGunVisuals(t),this.updateHiders(e)}updateCinematicGFX(t){var n,s;if(!this.cinematicGFX||this.cinematicGFX.static)return;const e=performance.now()*.001;this.cinematicGFX.particles&&(this.cinematicGFX.particles.rotation.y+=t*.015,this.cinematicGFX.particles.material.opacity=.14+Math.sin(e*.7)*.04);for(let r=0;r<this.cinematicGFX.strips.length;r++){const a=this.cinematicGFX.strips[r];((n=a.material)==null?void 0:n.emissiveIntensity)!==void 0&&(a.material.emissiveIntensity=.24+Math.sin(e*1.4+r*.37)*.08)}for(let r=0;r<this.cinematicGFX.rings.length;r++){const a=this.cinematicGFX.rings[r];a.rotation.z+=t*(.18+r*.04),((s=a.material)==null?void 0:s.emissiveIntensity)!==void 0&&(a.material.emissiveIntensity=.32+Math.sin(e*1.9+r)*.1)}}update(t){super.update(t),this.updateCinematicGFX(t)}oneBounceGI(t,e={}){const n=new lt(0,0,0);let s=0;for(const r of this.giPatches){const a=t.clone().sub(r.pos),o=Math.max(.28,a.lengthSq()),l=a.normalize(),c=Math.max(0,r.normal.dot(l))/o;if(c<=0)continue;const u=hs(r.pos,t);if(u&&!e.allowLeak)continue;const d=u?.12:1,h=r.irradiance*c*d;n.add(r.color.clone().multiplyScalar(h)),s+=h*(.2126*r.color.r+.7152*r.color.g+.0722*r.color.b)}return{color:n,scalar:s}}giSurfaceHit(t,e,n=42){const s=[],r=this.bounds,a={minX:-.18,maxX:1.08,minY:0,maxY:4.35,minZ:-4.6,maxZ:2.95},o=(l,c,u,d,h,p,g,y)=>{const m=e[l];if(Math.abs(m)<1e-4)return;const f=(c-t[l])/m;if(f<=.08||f>n)return;const v=t.clone().add(e.clone().multiplyScalar(f)),E=l==="x"?v.y:v.x,b=l==="z"?v.y:v.z;E<d||E>h||b<p||b>g||s.push({t:f,pos:v,normal:u.clone().normalize(),color:y.clone()})};return o("x",r.minX+.52,new M(1,0,0),.08,5.15,r.minZ+1.2,r.maxZ-1.1,new lt(1,.12,.08)),o("x",r.maxX-.52,new M(-1,0,0),.08,5.15,r.minZ+1.2,r.maxZ-1.1,new lt(.08,.22,1)),o("y",.04,new M(0,1,0),r.minX+.8,r.maxX-.8,r.minZ+.8,r.maxZ-.8,new lt(.42,.42,.38)),o("y",r.maxY-.12,new M(0,-1,0),r.minX+.8,r.maxX-.8,r.minZ+.8,r.maxZ-.8,new lt(.44,.52,.7)),o("z",r.minZ+.24,new M(0,0,1),r.minX+.8,r.maxX-.8,.08,5.15,new lt(.5,.56,.72)),o("z",r.maxZ-.08,new M(0,0,-1),r.minX+.8,r.maxX-.8,.08,5.15,new lt(.38,.44,.58)),o("x",a.minX,new M(-1,0,0),a.minY+.05,a.maxY,a.minZ,a.maxZ,new lt(.86,.9,.98)),o("x",a.maxX,new M(1,0,0),a.minY+.05,a.maxY,a.minZ,a.maxZ,new lt(.86,.9,.98)),o("y",a.maxY,new M(0,1,0),a.minX,a.maxX,a.minZ,a.maxZ,new lt(.86,.9,.98)),o("z",a.minZ,new M(0,0,-1),a.minX,a.maxX,a.minY+.05,a.maxY,new lt(.86,.9,.98)),o("z",a.maxZ,new M(0,0,1),a.minX,a.maxX,a.minY+.05,a.maxY,new lt(.86,.9,.98)),s.sort((l,c)=>l.t-c.t),s[0]??null}directSurfaceRadiance(t){const e=this.directLightPos.clone().sub(t.pos),n=Math.max(.35,e.lengthSq()),s=e.normalize(),r=Math.max(0,t.normal.dot(s));if(r<=0||hs(this.directLightPos,t.pos))return{color:new lt,scalar:0};const a=r*10.5/n;return{color:t.color.clone().multiplyScalar(a),scalar:a*(.2126*t.color.r+.7152*t.color.g+.0722*t.color.b)}}traceIndirectRay(t,e){const n=this.giSurfaceHit(t,e);if(!n)return null;const s=this.directSurfaceRadiance(n);return{...n,radiance:s.scalar,color:s.color,visibilityDepth:n.t}}revealFromRadiance(t){return ue((t-.004)/.04)}updateHiders(t){for(const e of this.hiders){const n=e.userData.id;if(this.found.has(n)){e.userData.reveal=1,e.visible=!1,as(e,0);continue}const s=e.position.clone().add(new M(0,.68,0)),r=ue(t(s));as(e,r*.96),e.userData.reveal=r}this.found.size>=this.hiders.length&&this.complete("움직이는 적을 모두 맞혔습니다. 다음 방으로 이동합니다.")}foundRows(t=[]){return[...t,{label:"맞힌 적",value:this.found.size/this.hiders.length,text:`${this.found.size}/${this.hiders.length}`},{label:"문 잠금",value:this.found.size/this.hiders.length,text:this.found.size>=this.hiders.length?"열림":"잠김"}]}}class Vg extends oh{constructor(t){super(t,16748459),this.probes=[],this.maxProbes=128,this.ddgiDirections=null,this.activeProbeCount=0,this.ddgiRaysPerProbe=64,this.ddgiHysteresis=.18}enter(){this.enterCommon("5. DDGI Hide and Seek","술래가 되어 매우 큰 방을 3차원으로 이동합니다. E로 DDGI probe를 설치하면 probe가 실제 one-bounce indirect irradiance를 저장합니다. 충분한 probe가 제공되므로 3~4m 간격의 규칙적인 grid로 배열하면 숨은 적을 모두 드러낼 수 있습니다.",[new M(-10,0,2),new M(8,0,8),new M(-4,3,6),new M(2,2,6)]),this.game.ui.setRoom("5. DDGI Hide and Seek","방은 밝지만 움직이는 적들은 direct light나 ambient light로 보이지 않습니다. E로 DDGI probe를 설치해 indirect light로 적을 드러낸 뒤, 오른손 권총으로 보이는 적만 맞히세요. Shift로 달릴 수 있습니다."),this.game.ui.setControls(`
      <div class="control-card">
        <h3>DDGI Probe Tool</h3>
        <div class="button-grid">
          <button id="placeProbe">E Probe</button>
          <button id="clearProbe" class="danger">C 초기화</button>
        </div>
        <p class="small-text">WASD 이동, Shift 달리기, Space 상승, Q/Ctrl 하강. E는 현재 위치에 64-ray SH DDGI probe를 설치합니다. C는 probe field를 초기화합니다.</p>
      </div>
    `),this.listen(kt("placeProbe"),"click",()=>this.placeProbe()),this.listen(kt("clearProbe"),"click",()=>this.clearProbes())}onKeyDown(t){t==="KeyE"&&this.placeProbe(),t==="KeyC"&&this.clearProbes(),super.onKeyDown(t)}placeProbe(){if(this.probes.length>=this.maxProbes)return;const t=this.player.position.clone(),e=new Q(new Ee(.085,14,8),new De({color:3356999,transparent:!0,opacity:.22,depthWrite:!1}));e.position.copy(t),this.group.add(e);const n={pos:t,mesh:e,blocked:!1,active:!1,irradiance:0,color:new lt,rays:[],sh:_c()};this.probes.push(n),this.bakeDDGIProbe(n),this.activeProbeCount=this.probes.length,this.game.ui.showToast(`DDGI probe installed: ${this.probes.length}/${this.maxProbes}`)}probeRayDirections(){return this.ddgiDirections?this.ddgiDirections:(this.ddgiDirections=Bg(this.ddgiRaysPerProbe),this.ddgiDirections)}bakeDDGIProbe(t){const e=this.captureDDGIProbe(t.pos,t.active?t:null);t.active=!0,t.irradiance=e.scalar,t.color.copy(e.color),t.rays=e.rays,t.sh=e.sh;const n=e.color.clone();n.r+n.g+n.b<.01&&n.setHex(3812148),t.mesh.material.color.copy(n),t.mesh.material.opacity=.86,t.mesh.scale.setScalar(1.32)}captureDDGIProbe(t,e=null){const n=new lt,s=[],r=_c();let a=0,o=0;const l=this.probeRayDirections(),c=4*Math.PI/l.length;for(const u of l){const d=this.traceIndirectRay(t,u);if(!d){s.push({dir:u.clone(),depth:24,depth2:24*24,radiance:0});continue}const h=Math.max(.08,Math.abs(d.normal.dot(u.clone().negate()))),p=c*h,g=d.radiance*h;zg(r,u,g,p),n.add(d.color.clone().multiplyScalar(h)),a+=g,o+=h;const y=d.visibilityDepth;s.push({dir:u.clone(),depth:y,depth2:y*y+.16+g*.25,radiance:g})}if(o>0&&(n.multiplyScalar(1/o),a/=o),e){const u=this.ddgiHysteresis;for(let d=0;d<r.length;d++)r[d]=e.sh[d]*u+r[d]*(1-u);a=e.irradiance*u+a*(1-u),n.lerp(e.color,u)}return{color:n,scalar:a,rays:s,sh:r}}probeVisibility(t,e){const n=e.clone().sub(t.pos),s=n.length();if(s<.001)return 1;const r=n.normalize();let a=null,o=-1;for(const h of t.rays){const p=h.dir.dot(r);p>o&&(o=p,a=h)}if(!a)return 0;const l=Math.max(.035,(a.depth2??a.depth*a.depth)-a.depth*a.depth),c=s-a.depth,u=c<=0?1:l/(l+c*c),d=ue((o-.38)/.62);return ue(u*d)}sampleProbeField(t){let e=0,n=0;for(const s of this.probes){if(!s.active)continue;const r=t.clone().sub(s.pos),a=Math.max(.18,r.lengthSq()),o=ue(1-Math.sqrt(a)/7.2),l=this.probeVisibility(s,t),c=r.normalize(),u=o*o*l/(1+Math.sqrt(a)*.35);e+=kg(s.sh,c)*u,n+=u}return n>0?e/n:0}clearProbes(){for(const t of this.probes)this.group.remove(t.mesh),Oo(t.mesh);this.probes=[],this.activeProbeCount=0}update(t){super.update(t),this.updatePlayer(t),this.updateFollowCamera(t,this.player,{fly:!0,distance:1.35,height:.35,lookHeight:.05});for(const n of this.probes)n.active&&n.mesh.scale.setScalar(1.22+Math.sin(performance.now()*.004+n.pos.x)*.12);this.updateCombat(t,n=>this.revealFromRadiance(this.sampleProbeField(n))),this.activeProbeCount=this.probes.filter(n=>n.active).length;const e=ue(this.activeProbeCount/Math.max(1,this.maxProbes));this.game.ui.updateScores(this.foundRows([{label:"DDGI probes",value:e,text:`${this.activeProbeCount}/${this.maxProbes}`},{label:"SH rays",value:ue(this.ddgiRaysPerProbe/64),text:`L2 ${this.ddgiRaysPerProbe}r`},{label:"Depth visibility",value:this.activeProbeCount?.92:0,text:this.activeProbeCount?"moments":"empty"}]))}dispose(){this.clearProbes(),super.dispose()}}class Hg extends oh{constructor(t){super(t,4649160),this.surfels=[],this.maxSurfels=120,this.surfelArea=.72,this.surfelRadius=8.4,this.surfelBounceIterations=2}enter(){this.enterCommon("6. Surfel GI Hide and Seek","큰 방의 표면을 바라보고 E로 surfel을 설치해 indirect light cache를 만듭니다. 바닥, 모든 벽, 천장, 중앙 차폐물 표면에 붙일 수 있고 충분한 surfel이 제공됩니다.",[new M(-8,0,8),new M(4,1,10),new M(-4,2,4),new M(-10,2,8)]),this.game.ui.setRoom("6. Surfel GI Hide and Seek","방은 밝지만 움직이는 적들은 Surfel GI로 드러난 순간에만 사격할 수 있습니다. E로 벽, 바닥, 천장, 차폐물 표면에 surfel을 설치하고 오른손 권총으로 보이는 적을 맞히세요."),this.game.ui.setControls(`
      <div class="control-card">
        <h3>Surfel Tool</h3>
        <div class="button-grid">
          <button id="placeSurfel">E Surfel</button>
          <button id="clearSurfel" class="danger">C 초기화</button>
        </div>
        <p class="small-text">WASD 이동, Shift 달리기, Space 상승, Q/Ctrl 하강. E는 에임이 닿은 표면에 surfel point를 설치하고, C는 surfel cache를 초기화합니다.</p>
      </div>
    `),this.listen(kt("placeSurfel"),"click",()=>this.placeSurfel()),this.listen(kt("clearSurfel"),"click",()=>this.clearSurfels())}onKeyDown(t){t==="KeyE"&&this.placeSurfel(),t==="KeyC"&&this.clearSurfels(),super.onKeyDown(t)}placeSurfel(){if(this.surfels.length>=this.maxSurfels)return;const t=this.surfaceHitFromView();if(!t){this.game.ui.showToast("에임 안에 GI 표면이 없습니다.");return}const e=this.directSurfaceRadiance(t),n=this.sampleSurfels(t.pos.clone().add(t.normal.clone().multiplyScalar(.08)),t.normal,null)*.55,s=Math.min(.34,e.scalar+n),r=e.color.clone();r.r+r.g+r.b<.01&&r.copy(t.color).multiplyScalar(.42);const a=new De({color:r,transparent:!0,opacity:.92,depthWrite:!1}),o=new Q(new Ee(.065,12,8),a);o.position.copy(t.pos).add(t.normal.clone().multiplyScalar(.045)),o.renderOrder=860,this.group.add(o),this.surfels.push({pos:t.pos.clone(),normal:t.normal.clone(),irradiance:s,direct:e.scalar,color:t.color.clone(),area:this.surfelArea,radius:this.surfelRadius,point:o}),this.relightSurfels(this.surfelBounceIterations)}surfaceHitFromView(){const t=this.player.position.clone().add(new M(0,.35,0)),e=this.game.lookDirection(!0),n=[],s=this.bounds,r={minX:-.18,maxX:1.08,minY:0,maxY:4.35,minZ:-4.6,maxZ:2.95},a=(o,l,c,u,d,h,p,g)=>{const y=e[o];if(Math.abs(y)<1e-4)return;const m=(l-t[o])/y;if(m<=.15||m>26)return;const f=t.clone().add(e.clone().multiplyScalar(m)),v=o==="x"?f.y:f.x,E=o==="z"?f.y:f.z;v<u||v>d||E<h||E>p||n.push({t:m,pos:f,normal:c.clone().normalize(),color:g})};return a("x",s.minX+.52,new M(1,0,0),.08,5.15,s.minZ+1.2,s.maxZ-1.1,new lt(1,.12,.08)),a("x",s.maxX-.52,new M(-1,0,0),.08,5.15,s.minZ+1.2,s.maxZ-1.1,new lt(.08,.22,1)),a("y",.04,new M(0,1,0),s.minX+.8,s.maxX-.8,s.minZ+.8,s.maxZ-.8,new lt(.42,.42,.38)),a("y",s.maxY-.12,new M(0,-1,0),s.minX+.8,s.maxX-.8,s.minZ+.8,s.maxZ-.8,new lt(.44,.52,.7)),a("z",s.minZ+.24,new M(0,0,1),s.minX+.8,s.maxX-.8,.08,5.15,new lt(.5,.56,.72)),a("z",s.maxZ-.08,new M(0,0,-1),s.minX+.8,s.maxX-.8,.08,5.15,new lt(.38,.44,.58)),a("x",r.minX,new M(-1,0,0),r.minY+.05,r.maxY,r.minZ,r.maxZ,new lt(.86,.9,.98)),a("x",r.maxX,new M(1,0,0),r.minY+.05,r.maxY,r.minZ,r.maxZ,new lt(.86,.9,.98)),a("y",r.maxY,new M(0,1,0),r.minX,r.maxX,r.minZ,r.maxZ,new lt(.86,.9,.98)),a("z",r.minZ,new M(0,0,-1),r.minX,r.maxX,r.minY+.05,r.maxY,new lt(.86,.9,.98)),a("z",r.maxZ,new M(0,0,1),r.minX,r.maxX,r.minY+.05,r.maxY,new lt(.86,.9,.98)),n.sort((o,l)=>o.t-l.t),n[0]??null}relightSurfels(t=1){for(let e=0;e<t;e++){const n=[];for(const s of this.surfels){const r=this.directSurfaceRadiance(s),a=s.pos.clone().add(s.normal.clone().multiplyScalar(.08)),o=this.sampleSurfels(a,s.normal,s)*.62;n.push({irradiance:Math.min(.38,r.scalar+o),direct:r.scalar,color:r.color})}for(let s=0;s<this.surfels.length;s++){const r=this.surfels[s];r.irradiance=r.irradiance*.22+n[s].irradiance*.78,r.direct=n[s].direct;const a=n[s].color.clone();a.r+a.g+a.b<.01&&a.copy(r.color).multiplyScalar(.35+ue(r.irradiance*3)),r.point.material.color.copy(a),r.point.scale.setScalar(.82+ue(r.irradiance/.08)*.62)}}}sampleSurfels(t,e=null,n=null){let s=0;for(const r of this.surfels){if(r===n||hs(r.pos,t))continue;const a=t.clone().sub(r.pos),o=Math.max(.16,a.lengthSq()),l=a.normalize(),c=Math.max(0,r.normal.dot(l));if(c<=0)continue;const u=e?Math.max(0,e.dot(l.clone().negate())):.78;if(u<=0)continue;const d=Math.sqrt(o),h=ue(1-d/(r.radius??this.surfelRadius)),p=(r.area??this.surfelArea)/o;s+=r.irradiance*c*u*p*h*18/Math.PI}return s}clearSurfels(){for(const t of this.surfels)this.group.remove(t.point),Oo(t.point);this.surfels=[]}update(t){super.update(t),this.updatePlayer(t),this.updateFollowCamera(t,this.player,{fly:!0,distance:1.35,height:.35,lookHeight:.05}),this.updateCombat(t,e=>this.revealFromRadiance(this.sampleSurfels(e,null,null))),this.game.ui.updateScores(this.foundRows([{label:"Surfels",value:ue(this.surfels.length/72),text:`${this.surfels.length}/${this.maxSurfels}`},{label:"Transport",value:this.surfels.length?.9:0,text:this.surfels.length?"2 bounce":"empty"},{label:"Kernel",value:ue(this.surfelRadius/9),text:`${Ne(this.surfelRadius,1)}m`}]))}dispose(){this.clearSurfels(),super.dispose()}}class Wg extends Jn{enter(){super.enter(),this.game.setCamera(new M(0,2.7,6.4),new M(0,1.25,-.4));const t=qi(this.group,4649160,{floorColor:1055003,wallColor:528403});sh(t.door,1),Ir(this.group,4649160);const e=Pe(`탈출 성공
렌더링 방탈출 완료`,{scale:1.2,fontSize:40,color:"#46f0c8"});e.position.set(0,2.35,-1.6),this.group.add(e);const n=new Q(new Tr(.68,.19,128,18),Pt(16765286,{metalness:.25,roughness:.35,emissive:16765286,emissiveIntensity:.18}));n.position.set(0,1.05,-.2),n.castShadow=!0,this.trophy=n,this.group.add(n),this.game.ui.setRoom("탈출 성공","Lighting → Shading → Texture → Animation → DDGI → Surfel GI 순서의 모든 rendering puzzle을 통과했습니다."),this.game.ui.setControls(`
      <div class="control-card">
        <h3>완료</h3>
        <p class="small-text">이 프로젝트는 발표용으로 각 방의 핵심 개념, 조작 UI, 점수 판정, 디버그 시각화를 포함합니다.</p>
        <button id="restartGame">처음부터 다시 시작</button>
      </div>
    `),this.listen(kt("restartGame"),"click",()=>this.game.loadRoom(0)),this.game.ui.updateScores([{label:"최종",value:1,text:"완료"}])}update(t){super.update(t),this.trophy.rotation.x+=t*.25,this.trophy.rotation.y+=t*.55}}class Xg{constructor(){this.host=kt("canvasHost"),this.renderer=new J0({antialias:!0,powerPreference:"high-performance"}),this.renderPixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.renderPixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=pn,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xc,this.host.appendChild(this.renderer.domElement),this.scene=new Tu,this.scene.background=new lt(527122),this.scene.fog=new Gi(527122,9,26),this.scene.environment=null,this.camera=new Qe(55,window.innerWidth/window.innerHeight,.1,80),this.controls=new tg(this.camera,this.renderer.domElement),this.controls.enabled=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.target.set(0,1.1,-.2),this.ui=new wg,kt("bottomHelp").textContent="WASD 이동 | P 방 스킵",this.clock=new Qu,this.currentRoom=null,this.index=0,this.keys=new Set,this.lookYaw=0,this.lookPitch=-.08,this.mouseSensitivity=.0022,this.pointerLocked=!1,this.roomClasses=[Tg,Rg,Pg,Fg,Vg,Hg],this.transitionTimer=null,window.addEventListener("resize",()=>this.onResize()),window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),this.renderer.domElement.addEventListener("click",()=>this.lockPointer()),document.addEventListener("pointerlockchange",()=>this.onPointerLockChange()),document.addEventListener("mousemove",t=>this.onMouseMove(t)),this.loadRoom(0),this.animate()}lockPointer(){var t,e;document.pointerLockElement!==this.renderer.domElement&&((e=(t=this.renderer.domElement).requestPointerLock)==null||e.call(t))}onPointerLockChange(){this.pointerLocked=document.pointerLockElement===this.renderer.domElement,kt("bottomHelp").textContent="WASD 이동 | P 방 스킵"}onMouseMove(t){this.pointerLocked&&(this.lookYaw+=t.movementX*this.mouseSensitivity,this.lookPitch-=t.movementY*this.mouseSensitivity,this.lookPitch=he.clamp(this.lookPitch,-1.42,1.42))}setRenderProfile({exposure:t=1,pixelRatio:e=2}={}){this.renderer.toneMappingExposure=t;const n=Math.min(window.devicePixelRatio,e);Math.abs((this.renderPixelRatio??0)-n)>.001&&(this.renderPixelRatio=n,this.renderer.setPixelRatio(n))}lookDirection(t=!0){const e=t?this.lookPitch:0,n=Math.cos(e);return new M(Math.sin(this.lookYaw)*n,Math.sin(e),-Math.cos(this.lookYaw)*n).normalize()}movementVector(t=!1){const e=this.lookDirection(!1);e.y=0,e.lengthSq()<.001&&e.set(0,0,-1),e.normalize();const n=new M().crossVectors(e,new M(0,1,0)).normalize(),s=new M;return this.keys.has("KeyW")&&s.add(e),this.keys.has("KeyS")&&s.sub(e),this.keys.has("KeyD")&&s.add(n),this.keys.has("KeyA")&&s.sub(n),t?(this.keys.has("Space")&&(s.y+=1),(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&(s.y-=1)):s.y=0,s.lengthSq()>1&&s.normalize(),s}applyMouseLook(){const t=this.camera.position.clone().add(this.lookDirection(!0));this.camera.up.set(0,1,0),this.camera.lookAt(t),this.controls.target.copy(t)}onKeyDown(t){var e,n;if(hc(t.target)||(this.keys.add(t.code),["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()),t.code==="KeyP"){t.preventDefault(),(e=this.currentRoom)==null||e.complete("P로 방을 스킵했습니다.");return}hc(t.target)||(n=this.currentRoom)==null||n.onKeyDown(t.code)}onKeyUp(t){this.keys.delete(t.code)}setCamera(t,e){this.camera.position.copy(t),this.controls.target.copy(e);const n=e.clone().sub(t).normalize();this.lookPitch=Math.asin(he.clamp(n.y,-1,1)),this.lookYaw=Math.atan2(n.x,-n.z),this.applyMouseLook()}loadRoom(t){if(this.keys.clear(),this.transitionTimer&&(clearTimeout(this.transitionTimer),this.transitionTimer=null),this.currentRoom&&(this.currentRoom.dispose(),this.currentRoom=null),this.index=t,this.scene.background=new lt(527122),this.scene.fog=new Gi(527122,9,26),this.setRenderProfile(),t>=this.roomClasses.length)this.ui.setProgress(this.roomClasses.length-1,this.roomClasses.length),this.currentRoom=new Wg(this);else{this.ui.setProgress(t,this.roomClasses.length);const e=this.roomClasses[t];this.currentRoom=new e(this)}this.currentRoom.enter()}roomSolved(){this.transitionTimer||(this.transitionTimer=setTimeout(()=>{this.loadRoom(this.index+1)},1550))}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){var e;requestAnimationFrame(()=>this.animate());const t=Math.min(this.clock.getDelta(),.05);(e=this.currentRoom)==null||e.update(t),this.renderer.render(this.scene,this.camera)}}new Xg;
