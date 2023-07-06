(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[8039],{"./node_modules/highlight.js/lib/languages/typescript.js":module=>{const IDENT_RE="[A-Za-z$_][0-9A-Za-z$_]*",KEYWORDS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],LITERALS=["true","false","null","undefined","NaN","Infinity"],BUILT_INS=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function lookahead(re){return concat("(?=",re,")")}function concat(...args){return args.map((x=>function source(re){return re?"string"==typeof re?re:re.source:null}(x))).join("")}module.exports=function typescript(hljs){const IDENT_RE$1=IDENT_RE,KEYWORDS$1={$pattern:IDENT_RE,keyword:KEYWORDS.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:LITERALS,built_in:BUILT_INS.concat(["any","void","number","boolean","string","object","never","enum"])},DECORATOR={className:"meta",begin:"@"+IDENT_RE$1},swapMode=(mode,label,replacement)=>{const indx=mode.contains.findIndex((m=>m.label===label));if(-1===indx)throw new Error("can not find mode to replace");mode.contains.splice(indx,1,replacement)},tsLanguage=function javascript(hljs){const IDENT_RE$1=IDENT_RE,FRAGMENT_begin="<>",FRAGMENT_end="</>",XML_TAG={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(match,response)=>{const afterMatchIndex=match[0].length+match.index,nextChar=match.input[afterMatchIndex];"<"!==nextChar?">"===nextChar&&(((match,{after})=>{const tag="</"+match[0].slice(1);return-1!==match.input.indexOf(tag,after)})(match,{after:afterMatchIndex})||response.ignoreMatch()):response.ignoreMatch()}},KEYWORDS$1={$pattern:IDENT_RE,keyword:KEYWORDS,literal:LITERALS,built_in:BUILT_INS},frac="\\.([0-9](_?[0-9])*)",NUMBER={className:"number",variants:[{begin:`(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((${frac})|\\.)?|(${frac}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((${frac})\\b|\\.)?|(${frac})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},SUBST={className:"subst",begin:"\\$\\{",end:"\\}",keywords:KEYWORDS$1,contains:[]},HTML_TEMPLATE={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[hljs.BACKSLASH_ESCAPE,SUBST],subLanguage:"xml"}},CSS_TEMPLATE={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[hljs.BACKSLASH_ESCAPE,SUBST],subLanguage:"css"}},TEMPLATE_STRING={className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE,SUBST]},COMMENT={className:"comment",variants:[hljs.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:IDENT_RE$1+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),hljs.C_BLOCK_COMMENT_MODE,hljs.C_LINE_COMMENT_MODE]},SUBST_INTERNALS=[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,HTML_TEMPLATE,CSS_TEMPLATE,TEMPLATE_STRING,NUMBER,hljs.REGEXP_MODE];SUBST.contains=SUBST_INTERNALS.concat({begin:/\{/,end:/\}/,keywords:KEYWORDS$1,contains:["self"].concat(SUBST_INTERNALS)});const SUBST_AND_COMMENTS=[].concat(COMMENT,SUBST.contains),PARAMS_CONTAINS=SUBST_AND_COMMENTS.concat([{begin:/\(/,end:/\)/,keywords:KEYWORDS$1,contains:["self"].concat(SUBST_AND_COMMENTS)}]),PARAMS={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS$1,contains:PARAMS_CONTAINS};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:KEYWORDS$1,exports:{PARAMS_CONTAINS},illegal:/#(?![$_A-z])/,contains:[hljs.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,HTML_TEMPLATE,CSS_TEMPLATE,TEMPLATE_STRING,COMMENT,NUMBER,{begin:concat(/[{,\n]\s*/,lookahead(concat(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,IDENT_RE$1+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:IDENT_RE$1+lookahead("\\s*:"),relevance:0}]},{begin:"("+hljs.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[COMMENT,hljs.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+hljs.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:hljs.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS$1,contains:PARAMS_CONTAINS}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:FRAGMENT_begin,end:FRAGMENT_end},{begin:XML_TAG.begin,"on:begin":XML_TAG.isTrulyOpeningTag,end:XML_TAG.end}],subLanguage:"xml",contains:[{begin:XML_TAG.begin,end:XML_TAG.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:KEYWORDS$1,contains:["self",hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1}),PARAMS],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:hljs.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[PARAMS,hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1})]},{variants:[{begin:"\\."+IDENT_RE$1},{begin:"\\$"+IDENT_RE$1}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},hljs.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1}),"self",PARAMS]},{begin:"(get|set)\\s+(?="+IDENT_RE$1+"\\()",end:/\{/,keywords:"get set",contains:[hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE$1}),{begin:/\(\)/},PARAMS]},{begin:/\$[(.]/}]}}(hljs);return Object.assign(tsLanguage.keywords,KEYWORDS$1),tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR),tsLanguage.contains=tsLanguage.contains.concat([DECORATOR,{beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"}]),swapMode(tsLanguage,"shebang",hljs.SHEBANG()),swapMode(tsLanguage,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),tsLanguage.contains.find((m=>"function"===m.className)).relevance=0,Object.assign(tsLanguage,{name:"TypeScript",aliases:["ts","tsx"]}),tsLanguage}}}]);