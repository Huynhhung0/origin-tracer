!function(t){var o={};function e(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)e.d(n,a,function(o){return t[o]}.bind(null,a));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";function n(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}e.r(o);class a{constructor(t){n(this,"txhash",void 0),n(this,"hasTrace",void 0),n(this,"hasTxInfo",void 0),n(this,"callbacks",void 0),n(this,"trace",void 0),n(this,"txInfo",void 0),this.txhash=t,this.hasTrace=!1,this.hasTxInfo=!1,this.callbacks=[]}async load(){const t=window.localStorage[this.cacheKey()];if(t)return console.log("Using cached transaction"),this.trace=JSON.parse(t),this.hasTrace=!0,this.processLogs(this.trace.result.structLogs),void this.trigger();console.log("Fetching");let o={jsonrpc:"2.0",id:2,method:"debug_traceTransaction",params:[this.txhash,{disableStorage:!0,disableMemory:!1,disableStack:!1,fullStorage:!1}]},e=await fetch("http://node.web3api.com:8545/",{credentials:"omit",headers:{"content-type":"application/json"},referrerPolicy:"same-origin",body:JSON.stringify(o),method:"POST",mode:"cors"}),n=await e.json();this.hasTrace=!0;try{window.localStorage[this.cacheKey()]=JSON.stringify(n)}catch(t){}this.trace=n,this.processLogs(this.trace.result.structLogs),this.trigger()}async loadTxInfo(){let t={jsonrpc:"2.0",id:2,method:"eth_getTransactionByHash",params:[this.txhash]},o=await fetch("http://node.web3api.com:8545/",{credentials:"omit",headers:{"content-type":"application/json"},referrerPolicy:"same-origin",body:JSON.stringify(t),method:"POST",mode:"cors"});this.txInfo=await o.json(),console.log(this.txInfo),this.hasTxInfo=!0,this.trigger()}processLogs(t){for(const o in t);}cacheKey(){return"trace_"+this.txhash}on(t){this.callbacks.push(t)}trigger(){this.callbacks.forEach(t=>t())}}function r(t,o,e){let n=[],a=e,r=Math.floor(o/32),s=o-32*r;for(console.log("READ start",o,"length",e,a,r,s);a>0;){const o=Math.min(32-s,a);if(a-=o,null==t.memory[r]){console.log("READ PAST SLOT");break}n.push(t.memory[r].substr(2*s,2*o)),s=0,r+=1}return n.join("")}function s(t){const o=function(t){if("DELEGATECALL"==t.op){return r(t,parseInt(t.stack[t.stack.length-3],16),parseInt(t.stack[t.stack.length-4],16))}if("CALL"==t.op){return r(t,parseInt(t.stack[t.stack.length-4],16),parseInt(t.stack[t.stack.length-5],16))}return r(t,parseInt(t.stack[t.stack.length-4],16),parseInt(t.stack[t.stack.length-5],16))}(t);let e="?";return o.length>0&&(e=o.substr(0,8)),e}function c(){return JSON.parse(window.localStorage._METHOD_CACHE||"{}")}async function l(t){if("?"===t)return[];if(console.log(t),"00000000"===t)return["CREATE"];const o=c();if(o[t])return o[t].value;const e="https://www.4byte.directory/api/v1/signatures/?hex_signature="+t,n=await fetch(e),a=(await n.json()).results.map(t=>t.text_signature);return a.length>0&&function(t,o){const e=c();e[t]={value:o,date:new Date},window.localStorage._METHOD_CACHE=JSON.stringify(e)}(t,a),a}let i,d;!function(t){t.write="write",t.read="read",t.move="move",t.compute="compute",t.environment="environment",t.stack="stack",t.control="control",t.jump="jump",t.standard="standard",t.writeStorage="writeStorage"}(i||(i={})),function(t){t.standard="standard",t.stack="stack",t.memory="memory",t.storage="storage",t.jump="jump",t.log="log",t.jumpdest="jumpdest",t.control="control",t.environment="environment"}(d||(d={}));const h={PUSH:{color:i.read,shape:d.stack},STOP:{color:i.control,shape:d.control,callstack:-1},ADDRESS:{color:i.environment,shape:d.standard},BALANCE:{color:i.environment,shape:d.standard},ORIGIN:{color:i.environment,shape:d.standard},CALLER:{color:i.environment,shape:d.standard},CALLVALUE:{color:i.environment,shape:d.standard},CALLDATALOAD:{color:i.environment,shape:d.standard},CALLDATASIZE:{color:i.environment,shape:d.standard},CALLDATACOPY:{color:i.environment,shape:d.standard},CODESIZE:{color:i.environment,shape:d.standard},CODECOPY:{color:i.environment,shape:d.standard},GASPRICE:{color:i.environment,shape:d.standard},EXTCODESIZE:{color:i.environment,shape:d.standard},EXTCODECOPY:{color:i.environment,shape:d.standard},RETURNDATASIZE:{color:i.environment,shape:d.standard},RETURNDATACOPY:{color:i.environment,shape:d.standard},BLOCKHASH:{color:i.environment,shape:d.standard},COINBASE:{color:i.environment,shape:d.standard},TIMESTAMP:{color:i.environment,shape:d.standard},NUMBER:{color:i.environment,shape:d.standard},DIFFICULTY:{color:i.environment,shape:d.standard},GASLIMIT:{color:i.environment,shape:d.standard},POP:{color:i.stack,shape:d.stack},DUP:{color:i.stack,shape:d.stack},SWAP:{color:i.stack,shape:d.stack},LOG:{color:i.write,shape:d.log},CREATE:{color:i.control,shape:d.control,callstack:1},CREATE2:{color:i.control,shape:d.control,callstack:1},CALL:{color:i.control,shape:d.control,callstack:1},CALLCODE:{color:i.control,shape:d.control,callstack:1},RETURN:{color:i.control,shape:d.control,callstack:-1},DELEGATECALL:{color:i.control,shape:d.control,callstack:1},STATICCALL:{color:i.control,shape:d.control,callstack:1},REVERT:{color:i.control,shape:d.control,callstack:-1},SELFDESTRUCT:{color:i.control,shape:d.control,callstack:-1},MLOAD:{color:i.standard,shape:d.memory},MSTORE:{color:i.standard,shape:d.memory},MSTORE8:{color:i.standard,shape:d.memory},SLOAD:{color:i.standard,shape:d.storage},SSTORE:{color:i.writeStorage,shape:d.storage},JUMP:{color:i.jump,shape:d.jump},JUMPI:{color:i.jump,shape:d.jump},PC:{color:i.standard,shape:d.standard},MSIZE:{color:i.standard,shape:d.standard},GAS:{color:i.standard,shape:d.environment},JUMPDEST:{color:i.standard,shape:d.jumpdest}};function p(t){let o="...",e="...";t.txInfo&&(o=t.txInfo.result.input.substring(0,8),e=t.txInfo.result.to);const n=t.trace.result.structLogs.map(t=>{const o=t.op.replace(/[0-9]/,"");let e=h[t.op];e||(e=h[o]),e||(e={color:i.standard,shape:d.standard});let n=Object.assign({},e);return n.op=t.op,n.opShort=o,n.log=t,n.label=t.op,n});!function(t){let o=50,e=20,n=o;for(const a of t)a.x=e,a.y=n,n+=16,"JUMP"!==a.label&&"JUMPI"!==a.label||(n+=16),-1===a.callstack?(e+=140,n=o-=48):1===a.callstack?(e+=140,n=o+=48):n>o+800&&(n=o,e+=70)}(n);const a=document.getElementById("traceArea");if(a.innerHTML="",a.onclick=function(t){console.log(t.target)},null===a)return void console.error("No area to draw in");let r=void 0;for(const t of n){const n=document.createElement("div");n.className="op",n.innerText=t.label,n.style.left=t.x+"px",n.style.top=t.y+"px",n.onmouseover=function(){clearTimeout(r),m(),u(t,a)},n.onmouseout=function(){r=setTimeout(m,1e3)};const i=document.createElement("div");if(i.className=`icon ${t.color} ${t.shape}`,n.insertBefore(i,n.childNodes[0]),a.appendChild(n),o){const n=document.createElement("h1");n.innerText=o,n.className="callLabel",n.style.left=t.x+"px",n.style.top=t.y-64+"px",a.appendChild(n),(async()=>{const t=await l(o);if(void 0===t||0===t.length)return;const e=t[0].replace(/\(.+/,"");1===t.length&&(n.innerText=e),t.length>1&&(n.innerText=e+"*"),n.setAttribute("title",t.join(" / "))})();const r=document.createElement("div");r.innerText=e,r.className="callAddress",r.style.left=t.x+"px",r.style.top=t.y-24+"px",a.appendChild(r),e=void 0,o=void 0}1===t.callstack&&(console.log(t),o=s(t.log),e="0x"+(c=t.log).stack[c.stack.length-2].replace(/^000000000000000000000000/,""))}var c}function u(t,o){const e=[].concat(t.log.stack);e.reverse();const n=document.createElement("div");n.className="infoBox",n.innerText=`${t.label}\nPC: ${t.log.pc} 0x${t.log.pc.toString(16)}\n\nGas Cost: ${t.log.gasCost}\nGas: ${t.log.gas}\n\nStack:\n${e.join("\n")}\n    \n    `,n.style.left=t.x+40+"px",n.style.top=t.y-9+"px",o.appendChild(n)}function m(){var t=document.querySelector(".infoBox");null!==t&&null!==t.parentNode&&t.parentNode.removeChild(t)}const f=document.getElementById("txHash");function g(){const t=window.location.hash.replace("#","");if(f.value=t,""!==t){const o=new a(t);o.on(()=>{o.hasTrace&&o.hasTxInfo&&p(o)}),o.load(),o.loadTxInfo()}}const v=document.getElementById("txHashForm");null===v?console.error("No #txHashForm form"):v.onsubmit=function(){return window.location.hash="#"+f.value,!1},window.onload=function(){g()},window.onhashchange=()=>{g()}}]);