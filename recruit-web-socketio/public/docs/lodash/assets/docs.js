(function(){"use strict";function e(e){this.__engine__=new u(c(e),{threshold:.25})}function t(){if(!d&&"undefined"==typeof phantom&&!document.hidden&&navigator.onLine&&"none"==getComputedStyle(p).display){d=!0;var e=document.createElement("script");e.addEventListener("error",function(){C.style.transform=""}),e.id="_carbonads_js",e.src="https://cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=lodashcom",C.style.transform="none",C.insertBefore(e,C.firstChild)}}function n(){return E.call(arguments).join(" ")}function a(e){var t=v.exec(e);return t?function(e){return decodeURIComponent(e).replace(/\+/g," ")}(t[1]):""}function o(e){return function(e){return e.replace(/^\s+|\s+$/g,"")}(function(e){return e.replace(/\s+/g,"")}(e.toLowerCase()))}function c(e){return o(e).replace(/^_\.?/,"")}function r(e,t){return e[t]?"":"hidden"}function i(e){e=void 0===e?!C.classList.contains("open"):e,p.firstChild.title=(e?"Collapse":"Expand")+" Menu",C.classList[e?"add":"remove"]("open"),e&&l.focus()}var s,l,u=(new Fuse).options.searchFn,d=!1,h=0,f=document.querySelector(".doc-container"),m=document.querySelector("a"),p=document.querySelector(".mobile-menu"),v=/[?&]q=([^&]+)/,y=/\blodash[. ](\w+)/i,g=function(e){var t=function(e){var t=y.exec(a(e));return t?o(t[1]):""}(e);return _.findKey(t&&_.prototype,function(e,n){return o(n)==t})||""}(document.referrer),E=Array.prototype.slice,C=document.querySelector(".toc-container"),b=a(location.search),R=location.pathname.match(/[\d.]+(?=(?:\.html)?$)/),L=document.getElementById("version"),S=R?R[0]:"4.17.4";e.prototype.isMatch=function(e){return this.__engine__.search(c(e)).isMatch};var k=React.createClass({displayName:"Menu",getInitialState:function(){return{content:[],searchFound:!0,searchValue:""}},componentWillMount:function(){this.setState({content:_.map(C.children,function(e,t){return{key:t,title:e.querySelector("h2 code").textContent,expanded:!0,visible:!0,functions:_.map(e.querySelectorAll("ul li a"),function(e,n){return{key:t+":"+n,name:e.textContent,href:e.href,visible:!0}})}})})},componentDidMount:function(){document.addEventListener("keydown",this.onDocumentKeyDown,!0)},componentWillUnmount:function(){document.removeEventListener("keydown",this.onDocumentKeyDown,!0)},handleSearchChange:function(t){var n=c(t),a=new e(t),o=!1;this.setState({content:this.state.content.map(function(e){var t=!n||a.isMatch(e.title),c=t,r=e.visible!==c,i=e.functions.map(function(e){var n=t||a.isMatch(e.name)||a.isMatch(e.href.split("#")[1]);return c||(c=n),o||(o=n),e.visible!==n?(r=!0,_.assign({},e,{visible:n})):e});return r?_.assign({},e,{functions:i,visible:c}):e}),searchFound:o,searchValue:t})},onChangeExpanded:function(e,t){var n=this.state.content.slice(),a=n[t];n[t]=_.assign({},a,{expanded:!a.expanded}),this.setState({content:n})},onChangeSearch:function(e){this.handleSearchChange(e.target.value)},onClickMenuItem:function(){if(++h%4==0&&"undefined"!=typeof _carbonads&&"function"==typeof _carbonads.refresh)try{_carbonads.refresh()}catch(e){}i(!1)},onDocumentKeyDown:function(e){var t=e.key||e.keyIdentifier;"Tab"!=t&&"U+0009"!=t||!C.classList.contains("open")||e.target!==s||(e.preventDefault(),m.focus()),"/"!=t&&"U+002F"!=t||(e.preventDefault(),l.focus())},onRefMenuItem:function(e){s=e},onRefSearch:function(e){l=e,this.handleSearchChange(b||g)},shouldComponentUpdate:function(e,t){return(this.state.searchFound||t.searchFound)&&(o(this.state.searchValue)!==o(t.searchValue)||!_.isEqual(this.state.content,t.content))},render:function(){var e=this,t=this.state.content.map(function(t,a,o){var c=t.expanded,i=a+1==o.size,s=function(t){(function(e){if("click"==e.type)return!0;var t=e.key||e.keyIdentifier;return" "==t||"U+0020"==t?(e.preventDefault(),!0):"Enter"==t})(t)&&e.onChangeExpanded(t,a)};return React.createElement("div",{key:t.key,className:r(t,"visible")},React.createElement("h2",null,React.createElement("i",{className:n("fa",c?"fa-minus-square-o":"fa-plus-square-o"),tabIndex:0,title:(c?"Collapse":"Expand")+" Category",onClick:s,onKeyPress:s}),t.title),React.createElement("ul",{className:r(t,"expanded")},t.functions.map(function(t,n,a){var o=[t.name],c=i&&n+1==a.size;return/^_\./.test(t.name)&&(o=[React.createElement("span",{className:"subtle-punctuation"},"_."),t.name.slice(2)]),React.createElement("li",{key:t.key,className:r(t,"visible")},React.createElement("a",{href:t.href,onClick:e.onClickMenuItem,ref:c?e.onRefMenuItem:void 0},React.createElement.apply(React,["code",null].concat(o))))})))});return React.createElement("div",{className:"react-menu-container"},React.createElement("div",{className:"search"},React.createElement("i",{"aria-hidden":!0,className:"fa fa-search"}),React.createElement("input",{autoFocus:"none"==getComputedStyle(p).display,placeholder:"Search",type:"search",value:this.state.searchValue,onChange:this.onChangeSearch,ref:this.onRefSearch})),t,React.createElement("div",{className:n("empty-state",this.state.searchFound?"hidden":"")},"Sorry, no matches."))}});ReactDOM.render(React.createElement(k),C),_.each(L.options,function(e){if(e.value==S)return e.selected=!0,!1}),L.addEventListener("change",function(e){var t=e.target.value;t&&(location.href="1.3.1"==t?"https://github.com/lodash/lodash/blob/1.3.1/doc/README.md":"/docs/"+t+location.hash)}),p.addEventListener("click",function(e){e.preventDefault(),i()}),f.addEventListener("click",function(){i(!1)}),addEventListener("hashchange",function(){var e=document.getElementById(location.hash.slice(1));e&&e.scrollIntoView()}),document.addEventListener("visibilitychange",t),document.addEventListener("DOMContentLoaded",function(){document.hidden||t(),"innerText"in f&&_.each(f.querySelectorAll(".highlight.js"),function(e){var t=document.createElement("a"),n=e.parentNode;t.classList.add("btn-repl"),t.textContent="Try in REPL",t.style.display=navigator.onLine?"":"none",t.addEventListener("click",function(){var a=e.innerText;n.removeChild(e),n.removeChild(t),RunKit.createNotebook({element:n,nodeVersion:"*",preamble:['var _ = require("lodash@'+L.value+'")','_.assign(global, require("lodash-doc-globals"))\nObject.observe = _.noop'].join("\n"),source:a,syntaxTheme:"atom-light-syntax",onLoad:function(e){var t=n.lastElementChild;t.style.cssText="height:"+t.style.height,t.classList.add("repl"),e.evaluate()}})}),n.appendChild(t)})})})();