(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[3386,817,516,3388],{"./node_modules/highlight.js/lib/languages/javascript.js":module=>{const KEYWORDS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],LITERALS=["true","false","null","undefined","NaN","Infinity"],BUILT_INS=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function lookahead(re){return concat("(?=",re,")")}function concat(...args){return args.map((x=>function source(re){return re?"string"==typeof re?re:re.source:null}(x))).join("")}module.exports=function javascript(hljs){const IDENT_RE$1="[A-Za-z$_][0-9A-Za-z$_]*",FRAGMENT_begin="<>",FRAGMENT_end="</>",XML_TAG={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(match,response)=>{const afterMatchIndex=match[0].length+match.index,nextChar=match.input[afterMatchIndex];"<"!==nextChar?">"===nextChar&&(((match,{after})=>{const tag="</"+match[0].slice(1);return-1!==match.input.indexOf(tag,after)})(match,{after:afterMatchIndex})||response.ignoreMatch()):response.ignoreMatch()}},KEYWORDS$1={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:KEYWORDS,literal:LITERALS,built_in:BUILT_INS},frac="\\.([0-9](_?[0-9])*)",NUMBER={className:"number",variants:[{begin:`(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((${frac})|\\.)?|(${frac}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((${frac})\\b|\\.)?|(${frac})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},SUBST={className:"subst",begin:"\\$\\{",end:"\\}",keywords:KEYWORDS$1,contains:[]},HTML_TEMPLATE={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[hljs.BACKSLASH_ESCAPE,SUBST],subLanguage:"xml"}},CSS_TEMPLATE={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[hljs.BACKSLASH_ESCAPE,SUBST],subLanguage:"css"}},TEMPLATE_STRING={className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE,SUBST]},COMMENT={className:"comment",variants:[hljs.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:IDENT_RE$1+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),hljs.C_BLOCK_COMMENT_MODE,hljs.C_LINE_COMMENT_MODE]},SUBST_INTERNALS=[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,HTML_TEMPLATE,CSS_TEMPLATE,TEMPLATE_STRING,NUMBER,hljs.REGEXP_MODE];SUBST.contains=SUBST_INTERNALS.concat({begin:/\{/,end:/\}/,keywords:KEYWORDS$1,contains:["self"].concat(SUBST_INTERNALS)});const SUBST_AND_COMMENTS=[].concat(COMMENT,SUBST.contains),PARAMS_CONTAINS=SUBST_AND_COMMENTS.concat([{begin:/\(/,end:/\)/,keywords:KEYWORDS$1,contains:["self"].concat(SUBST_AND_COMMENTS)}]),PARAMS={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS$1,contains:PARAMS_CONTAINS};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:KEYWORDS$1,exports:{PARAMS_CONTAINS},illegal:/#(?![$_A-z])/,contains:[hljs.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,HTML_TEMPLATE,CSS_TEMPLATE,TEMPLATE_STRING,COMMENT,NUMBER,{begin:concat(/[{,\n]\s*/,lookahead(concat(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,IDENT_RE$1+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:IDENT_RE$1+lookahead("\\s*:"),relevance:0}]},{begin:"("+hljs.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[COMMENT,hljs.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+hljs.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:hljs.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS$1,contains:PARAMS_CONTAINS}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:FRAGMENT_begin,end:FRAGMENT_end},{begin:XML_TAG.begin,"on:begin":XML_TAG.isTrulyOpeningTag,end:XML_TAG.end}],subLanguage:"xml",contains:[{begin:XML_TAG.begin,end:XML_TAG.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:KEYWORDS$1,contains:["self",hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1}),PARAMS],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:hljs.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[PARAMS,hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1})]},{variants:[{begin:"\\."+IDENT_RE$1},{begin:"\\$"+IDENT_RE$1}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},hljs.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1}),"self",PARAMS]},{begin:"(get|set)\\s+(?="+IDENT_RE$1+"\\()",end:/\{/,keywords:"get set",contains:[hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1}),{begin:/\(\)/},PARAMS]},{begin:/\$[(.]/}]}}},"./node_modules/highlight.js/lib/languages/xml.js":module=>{function source(re){return re?"string"==typeof re?re:re.source:null}function lookahead(re){return concat("(?=",re,")")}function concat(...args){return args.map((x=>source(x))).join("")}function either(...args){return"("+args.map((x=>source(x))).join("|")+")"}module.exports=function xml(hljs){const TAG_NAME_RE=concat(/[A-Z_]/,function optional(re){return concat("(",re,")?")}(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),XML_ENTITIES={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},XML_META_KEYWORDS={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},XML_META_PAR_KEYWORDS=hljs.inherit(XML_META_KEYWORDS,{begin:/\(/,end:/\)/}),APOS_META_STRING_MODE=hljs.inherit(hljs.APOS_STRING_MODE,{className:"meta-string"}),QUOTE_META_STRING_MODE=hljs.inherit(hljs.QUOTE_STRING_MODE,{className:"meta-string"}),TAG_INTERNALS={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[XML_ENTITIES]},{begin:/'/,end:/'/,contains:[XML_ENTITIES]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[XML_META_KEYWORDS,QUOTE_META_STRING_MODE,APOS_META_STRING_MODE,XML_META_PAR_KEYWORDS,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[XML_META_KEYWORDS,XML_META_PAR_KEYWORDS,QUOTE_META_STRING_MODE,APOS_META_STRING_MODE]}]}]},hljs.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},XML_ENTITIES,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[TAG_INTERNALS],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[TAG_INTERNALS],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:concat(/</,lookahead(concat(TAG_NAME_RE,either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:TAG_NAME_RE,relevance:0,starts:TAG_INTERNALS}]},{className:"tag",begin:concat(/<\//,lookahead(concat(TAG_NAME_RE,/>/))),contains:[{className:"name",begin:TAG_NAME_RE,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);