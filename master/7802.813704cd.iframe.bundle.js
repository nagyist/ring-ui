(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[7802],{"./node_modules/highlight.js/lib/core.js":module=>{function deepFreeze(obj){return obj instanceof Map?obj.clear=obj.delete=obj.set=function(){throw new Error("map is read-only")}:obj instanceof Set&&(obj.add=obj.clear=obj.delete=function(){throw new Error("set is read-only")}),Object.freeze(obj),Object.getOwnPropertyNames(obj).forEach((function(name){var prop=obj[name];"object"!=typeof prop||Object.isFrozen(prop)||deepFreeze(prop)})),obj}var deepFreezeEs6=deepFreeze,_default=deepFreeze;deepFreezeEs6.default=_default;class Response{constructor(mode){void 0===mode.data&&(mode.data={}),this.data=mode.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function escapeHTML(value){return value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function inherit(original,...objects){const result=Object.create(null);for(const key in original)result[key]=original[key];return objects.forEach((function(obj){for(const key in obj)result[key]=obj[key]})),result}const emitsWrappingTags=node=>!!node.kind;class HTMLRenderer{constructor(parseTree,options){this.buffer="",this.classPrefix=options.classPrefix,parseTree.walk(this)}addText(text){this.buffer+=escapeHTML(text)}openNode(node){if(!emitsWrappingTags(node))return;let className=node.kind;node.sublanguage||(className=`${this.classPrefix}${className}`),this.span(className)}closeNode(node){emitsWrappingTags(node)&&(this.buffer+="</span>")}value(){return this.buffer}span(className){this.buffer+=`<span class="${className}">`}}class TokenTree{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(node){this.top.children.push(node)}openNode(kind){const node={kind,children:[]};this.add(node),this.stack.push(node)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(builder){return this.constructor._walk(builder,this.rootNode)}static _walk(builder,node){return"string"==typeof node?builder.addText(node):node.children&&(builder.openNode(node),node.children.forEach((child=>this._walk(builder,child))),builder.closeNode(node)),builder}static _collapse(node){"string"!=typeof node&&node.children&&(node.children.every((el=>"string"==typeof el))?node.children=[node.children.join("")]:node.children.forEach((child=>{TokenTree._collapse(child)})))}}class TokenTreeEmitter extends TokenTree{constructor(options){super(),this.options=options}addKeyword(text,kind){""!==text&&(this.openNode(kind),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(emitter,name){const node=emitter.root;node.kind=name,node.sublanguage=!0,this.add(node)}toHTML(){return new HTMLRenderer(this,this.options).value()}finalize(){return!0}}function source(re){return re?"string"==typeof re?re:re.source:null}const BACKREF_RE=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[BACKSLASH_ESCAPE]},QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[BACKSLASH_ESCAPE]},PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT=function(begin,end,modeOptions={}){const mode=inherit({className:"comment",begin,end,contains:[]},modeOptions);return mode.contains.push(PHRASAL_WORDS_MODE),mode.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),mode},C_LINE_COMMENT_MODE=COMMENT("//","$"),C_BLOCK_COMMENT_MODE=COMMENT("/\\*","\\*/"),HASH_COMMENT_MODE=COMMENT("#","$"),NUMBER_MODE={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE={className:"number",begin:C_NUMBER_RE,relevance:0},BINARY_NUMBER_MODE={className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[BACKSLASH_ESCAPE]}]}]},TITLE_MODE={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var MODES=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(opts={})=>{const beginShebang=/^#![ ]*\//;return opts.binary&&(opts.begin=function concat(...args){return args.map((x=>source(x))).join("")}(beginShebang,/.*\b/,opts.binary,/\b.*/)),inherit({className:"meta",begin:beginShebang,end:/$/,relevance:0,"on:begin":(m,resp)=>{0!==m.index&&resp.ignoreMatch()}},opts)},BACKSLASH_ESCAPE,APOS_STRING_MODE,QUOTE_STRING_MODE,PHRASAL_WORDS_MODE,COMMENT,C_LINE_COMMENT_MODE,C_BLOCK_COMMENT_MODE,HASH_COMMENT_MODE,NUMBER_MODE,C_NUMBER_MODE,BINARY_NUMBER_MODE,CSS_NUMBER_MODE,REGEXP_MODE,TITLE_MODE,UNDERSCORE_TITLE_MODE,METHOD_GUARD,END_SAME_AS_BEGIN:function(mode){return Object.assign(mode,{"on:begin":(m,resp)=>{resp.data._beginMatch=m[1]},"on:end":(m,resp)=>{resp.data._beginMatch!==m[1]&&resp.ignoreMatch()}})}});function skipIfhasPrecedingDot(match,response){"."===match.input[match.index-1]&&response.ignoreMatch()}function beginKeywords(mode,parent){parent&&mode.beginKeywords&&(mode.begin="\\b("+mode.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",mode.__beforeBegin=skipIfhasPrecedingDot,mode.keywords=mode.keywords||mode.beginKeywords,delete mode.beginKeywords,void 0===mode.relevance&&(mode.relevance=0))}function compileIllegal(mode,_parent){Array.isArray(mode.illegal)&&(mode.illegal=function either(...args){return"("+args.map((x=>source(x))).join("|")+")"}(...mode.illegal))}function compileMatch(mode,_parent){if(mode.match){if(mode.begin||mode.end)throw new Error("begin & end are not supported with match");mode.begin=mode.match,delete mode.match}}function compileRelevance(mode,_parent){void 0===mode.relevance&&(mode.relevance=1)}const COMMON_KEYWORDS=["of","and","for","in","not","or","if","then","parent","list","value"],DEFAULT_KEYWORD_CLASSNAME="keyword";function compileKeywords(rawKeywords,caseInsensitive,className=DEFAULT_KEYWORD_CLASSNAME){const compiledKeywords={};return"string"==typeof rawKeywords?compileList(className,rawKeywords.split(" ")):Array.isArray(rawKeywords)?compileList(className,rawKeywords):Object.keys(rawKeywords).forEach((function(className){Object.assign(compiledKeywords,compileKeywords(rawKeywords[className],caseInsensitive,className))})),compiledKeywords;function compileList(className,keywordList){caseInsensitive&&(keywordList=keywordList.map((x=>x.toLowerCase()))),keywordList.forEach((function(keyword){const pair=keyword.split("|");compiledKeywords[pair[0]]=[className,scoreForKeyword(pair[0],pair[1])]}))}}function scoreForKeyword(keyword,providedScore){return providedScore?Number(providedScore):function commonKeyword(keyword){return COMMON_KEYWORDS.includes(keyword.toLowerCase())}(keyword)?0:1}function compileLanguage(language,{plugins}){function langRe(value,global){return new RegExp(source(value),"m"+(language.case_insensitive?"i":"")+(global?"g":""))}class MultiRegex{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(re,opts){opts.position=this.position++,this.matchIndexes[this.matchAt]=opts,this.regexes.push([opts,re]),this.matchAt+=function countMatchGroups(re){return new RegExp(re.toString()+"|").exec("").length-1}(re)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const terminators=this.regexes.map((el=>el[1]));this.matcherRe=langRe(function join(regexps,separator="|"){let numCaptures=0;return regexps.map((regex=>{numCaptures+=1;const offset=numCaptures;let re=source(regex),out="";for(;re.length>0;){const match=BACKREF_RE.exec(re);if(!match){out+=re;break}out+=re.substring(0,match.index),re=re.substring(match.index+match[0].length),"\\"===match[0][0]&&match[1]?out+="\\"+String(Number(match[1])+offset):(out+=match[0],"("===match[0]&&numCaptures++)}return out})).map((re=>`(${re})`)).join(separator)}(terminators),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const match=this.matcherRe.exec(s);if(!match)return null;const i=match.findIndex(((el,i)=>i>0&&void 0!==el)),matchData=this.matchIndexes[i];return match.splice(0,i),Object.assign(match,matchData)}}class ResumableMultiRegex{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(index){if(this.multiRegexes[index])return this.multiRegexes[index];const matcher=new MultiRegex;return this.rules.slice(index).forEach((([re,opts])=>matcher.addRule(re,opts))),matcher.compile(),this.multiRegexes[index]=matcher,matcher}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(re,opts){this.rules.push([re,opts]),"begin"===opts.type&&this.count++}exec(s){const m=this.getMatcher(this.regexIndex);m.lastIndex=this.lastIndex;let result=m.exec(s);if(this.resumingScanAtSamePosition())if(result&&result.index===this.lastIndex);else{const m2=this.getMatcher(0);m2.lastIndex=this.lastIndex+1,result=m2.exec(s)}return result&&(this.regexIndex+=result.position+1,this.regexIndex===this.count&&this.considerAll()),result}}if(language.compilerExtensions||(language.compilerExtensions=[]),language.contains&&language.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return language.classNameAliases=inherit(language.classNameAliases||{}),function compileMode(mode,parent){const cmode=mode;if(mode.isCompiled)return cmode;[compileMatch].forEach((ext=>ext(mode,parent))),language.compilerExtensions.forEach((ext=>ext(mode,parent))),mode.__beforeBegin=null,[beginKeywords,compileIllegal,compileRelevance].forEach((ext=>ext(mode,parent))),mode.isCompiled=!0;let keywordPattern=null;if("object"==typeof mode.keywords&&(keywordPattern=mode.keywords.$pattern,delete mode.keywords.$pattern),mode.keywords&&(mode.keywords=compileKeywords(mode.keywords,language.case_insensitive)),mode.lexemes&&keywordPattern)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return keywordPattern=keywordPattern||mode.lexemes||/\w+/,cmode.keywordPatternRe=langRe(keywordPattern,!0),parent&&(mode.begin||(mode.begin=/\B|\b/),cmode.beginRe=langRe(mode.begin),mode.endSameAsBegin&&(mode.end=mode.begin),mode.end||mode.endsWithParent||(mode.end=/\B|\b/),mode.end&&(cmode.endRe=langRe(mode.end)),cmode.terminatorEnd=source(mode.end)||"",mode.endsWithParent&&parent.terminatorEnd&&(cmode.terminatorEnd+=(mode.end?"|":"")+parent.terminatorEnd)),mode.illegal&&(cmode.illegalRe=langRe(mode.illegal)),mode.contains||(mode.contains=[]),mode.contains=[].concat(...mode.contains.map((function(c){return function expandOrCloneMode(mode){mode.variants&&!mode.cachedVariants&&(mode.cachedVariants=mode.variants.map((function(variant){return inherit(mode,{variants:null},variant)})));if(mode.cachedVariants)return mode.cachedVariants;if(dependencyOnParent(mode))return inherit(mode,{starts:mode.starts?inherit(mode.starts):null});if(Object.isFrozen(mode))return inherit(mode);return mode}("self"===c?mode:c)}))),mode.contains.forEach((function(c){compileMode(c,cmode)})),mode.starts&&compileMode(mode.starts,parent),cmode.matcher=function buildModeRegex(mode){const mm=new ResumableMultiRegex;return mode.contains.forEach((term=>mm.addRule(term.begin,{rule:term,type:"begin"}))),mode.terminatorEnd&&mm.addRule(mode.terminatorEnd,{type:"end"}),mode.illegal&&mm.addRule(mode.illegal,{type:"illegal"}),mm}(cmode),cmode}(language)}function dependencyOnParent(mode){return!!mode&&(mode.endsWithParent||dependencyOnParent(mode.starts))}function BuildVuePlugin(hljs){const Component={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,escapeHTML(this.code);let result={};return this.autoDetect?(result=hljs.highlightAuto(this.code),this.detectedLanguage=result.language):(result=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),result.value},autoDetect(){return!this.language||function hasValueOrEmptyAttribute(value){return Boolean(value||""===value)}(this.autodetect)},ignoreIllegals:()=>!0},render(createElement){return createElement("pre",{},[createElement("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component,VuePlugin:{install(Vue){Vue.component("highlightjs",Component)}}}}const mergeHTMLPlugin={"after:highlightElement":({el,result,text})=>{const originalStream=nodeStream(el);if(!originalStream.length)return;const resultNode=document.createElement("div");resultNode.innerHTML=result.value,result.value=function mergeStreams(original,highlighted,value){let processed=0,result="";const nodeStack=[];function selectStream(){return original.length&&highlighted.length?original[0].offset!==highlighted[0].offset?original[0].offset<highlighted[0].offset?original:highlighted:"start"===highlighted[0].event?original:highlighted:original.length?original:highlighted}function open(node){function attributeString(attr){return" "+attr.nodeName+'="'+escapeHTML(attr.value)+'"'}result+="<"+tag(node)+[].map.call(node.attributes,attributeString).join("")+">"}function close(node){result+="</"+tag(node)+">"}function render(event){("start"===event.event?open:close)(event.node)}for(;original.length||highlighted.length;){let stream=selectStream();if(result+=escapeHTML(value.substring(processed,stream[0].offset)),processed=stream[0].offset,stream===original){nodeStack.reverse().forEach(close);do{render(stream.splice(0,1)[0]),stream=selectStream()}while(stream===original&&stream.length&&stream[0].offset===processed);nodeStack.reverse().forEach(open)}else"start"===stream[0].event?nodeStack.push(stream[0].node):nodeStack.pop(),render(stream.splice(0,1)[0])}return result+escapeHTML(value.substr(processed))}(originalStream,nodeStream(resultNode),text)}};function tag(node){return node.nodeName.toLowerCase()}function nodeStream(node){const result=[];return function _nodeStream(node,offset){for(let child=node.firstChild;child;child=child.nextSibling)3===child.nodeType?offset+=child.nodeValue.length:1===child.nodeType&&(result.push({event:"start",offset,node:child}),offset=_nodeStream(child,offset),tag(child).match(/br|hr|img|input/)||result.push({event:"stop",offset,node:child}));return offset}(node,0),result}const seenDeprecations={},error=message=>{console.error(message)},warn=(message,...args)=>{console.log(`WARN: ${message}`,...args)},deprecated=(version,message)=>{seenDeprecations[`${version}/${message}`]||(console.log(`Deprecated as of ${version}. ${message}`),seenDeprecations[`${version}/${message}`]=!0)},escape$1=escapeHTML,inherit$1=inherit,NO_MATCH=Symbol("nomatch");var highlight=function(hljs){const languages=Object.create(null),aliases=Object.create(null),plugins=[];let SAFE_MODE=!0;const fixMarkupRe=/(^(<[^>]+>|\t|)+|\n)/gm,LANGUAGE_NOT_FOUND="Could not find the language '{}', did you forget to load/include a language module?",PLAINTEXT_LANGUAGE={disableAutodetect:!0,name:"Plain text",contains:[]};let options={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:TokenTreeEmitter};function shouldNotHighlight(languageName){return options.noHighlightRe.test(languageName)}function highlight(codeOrlanguageName,optionsOrCode,ignoreIllegals,continuation){let code="",languageName="";"object"==typeof optionsOrCode?(code=codeOrlanguageName,ignoreIllegals=optionsOrCode.ignoreIllegals,languageName=optionsOrCode.language,continuation=void 0):(deprecated("10.7.0","highlight(lang, code, ...args) has been deprecated."),deprecated("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),languageName=codeOrlanguageName,code=optionsOrCode);const context={code,language:languageName};fire("before:highlight",context);const result=context.result?context.result:_highlight(context.language,context.code,ignoreIllegals,continuation);return result.code=context.code,fire("after:highlight",result),result}function _highlight(languageName,codeToHighlight,ignoreIllegals,continuation){function keywordData(mode,match){const matchText=language.case_insensitive?match[0].toLowerCase():match[0];return Object.prototype.hasOwnProperty.call(mode.keywords,matchText)&&mode.keywords[matchText]}function processBuffer(){null!=top.subLanguage?function processSubLanguage(){if(""===modeBuffer)return;let result=null;if("string"==typeof top.subLanguage){if(!languages[top.subLanguage])return void emitter.addText(modeBuffer);result=_highlight(top.subLanguage,modeBuffer,!0,continuations[top.subLanguage]),continuations[top.subLanguage]=result.top}else result=highlightAuto(modeBuffer,top.subLanguage.length?top.subLanguage:null);top.relevance>0&&(relevance+=result.relevance),emitter.addSublanguage(result.emitter,result.language)}():function processKeywords(){if(!top.keywords)return void emitter.addText(modeBuffer);let lastIndex=0;top.keywordPatternRe.lastIndex=0;let match=top.keywordPatternRe.exec(modeBuffer),buf="";for(;match;){buf+=modeBuffer.substring(lastIndex,match.index);const data=keywordData(top,match);if(data){const[kind,keywordRelevance]=data;if(emitter.addText(buf),buf="",relevance+=keywordRelevance,kind.startsWith("_"))buf+=match[0];else{const cssClass=language.classNameAliases[kind]||kind;emitter.addKeyword(match[0],cssClass)}}else buf+=match[0];lastIndex=top.keywordPatternRe.lastIndex,match=top.keywordPatternRe.exec(modeBuffer)}buf+=modeBuffer.substr(lastIndex),emitter.addText(buf)}(),modeBuffer=""}function startNewMode(mode){return mode.className&&emitter.openNode(language.classNameAliases[mode.className]||mode.className),top=Object.create(mode,{parent:{value:top}}),top}function endOfMode(mode,match,matchPlusRemainder){let matched=function startsWith(re,lexeme){const match=re&&re.exec(lexeme);return match&&0===match.index}(mode.endRe,matchPlusRemainder);if(matched){if(mode["on:end"]){const resp=new Response(mode);mode["on:end"](match,resp),resp.isMatchIgnored&&(matched=!1)}if(matched){for(;mode.endsParent&&mode.parent;)mode=mode.parent;return mode}}if(mode.endsWithParent)return endOfMode(mode.parent,match,matchPlusRemainder)}function doIgnore(lexeme){return 0===top.matcher.regexIndex?(modeBuffer+=lexeme[0],1):(resumeScanAtSamePosition=!0,0)}function doBeginMatch(match){const lexeme=match[0],newMode=match.rule,resp=new Response(newMode),beforeCallbacks=[newMode.__beforeBegin,newMode["on:begin"]];for(const cb of beforeCallbacks)if(cb&&(cb(match,resp),resp.isMatchIgnored))return doIgnore(lexeme);return newMode&&newMode.endSameAsBegin&&(newMode.endRe=function escape(value){return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}(lexeme)),newMode.skip?modeBuffer+=lexeme:(newMode.excludeBegin&&(modeBuffer+=lexeme),processBuffer(),newMode.returnBegin||newMode.excludeBegin||(modeBuffer=lexeme)),startNewMode(newMode),newMode.returnBegin?0:lexeme.length}function doEndMatch(match){const lexeme=match[0],matchPlusRemainder=codeToHighlight.substr(match.index),endMode=endOfMode(top,match,matchPlusRemainder);if(!endMode)return NO_MATCH;const origin=top;origin.skip?modeBuffer+=lexeme:(origin.returnEnd||origin.excludeEnd||(modeBuffer+=lexeme),processBuffer(),origin.excludeEnd&&(modeBuffer=lexeme));do{top.className&&emitter.closeNode(),top.skip||top.subLanguage||(relevance+=top.relevance),top=top.parent}while(top!==endMode.parent);return endMode.starts&&(endMode.endSameAsBegin&&(endMode.starts.endRe=endMode.endRe),startNewMode(endMode.starts)),origin.returnEnd?0:lexeme.length}let lastMatch={};function processLexeme(textBeforeMatch,match){const lexeme=match&&match[0];if(modeBuffer+=textBeforeMatch,null==lexeme)return processBuffer(),0;if("begin"===lastMatch.type&&"end"===match.type&&lastMatch.index===match.index&&""===lexeme){if(modeBuffer+=codeToHighlight.slice(match.index,match.index+1),!SAFE_MODE){const err=new Error("0 width match regex");throw err.languageName=languageName,err.badRule=lastMatch.rule,err}return 1}if(lastMatch=match,"begin"===match.type)return doBeginMatch(match);if("illegal"===match.type&&!ignoreIllegals){const err=new Error('Illegal lexeme "'+lexeme+'" for mode "'+(top.className||"<unnamed>")+'"');throw err.mode=top,err}if("end"===match.type){const processed=doEndMatch(match);if(processed!==NO_MATCH)return processed}if("illegal"===match.type&&""===lexeme)return 1;if(iterations>1e5&&iterations>3*match.index){throw new Error("potential infinite loop, way more iterations than matches")}return modeBuffer+=lexeme,lexeme.length}const language=getLanguage(languageName);if(!language)throw error(LANGUAGE_NOT_FOUND.replace("{}",languageName)),new Error('Unknown language: "'+languageName+'"');const md=compileLanguage(language,{plugins});let result="",top=continuation||md;const continuations={},emitter=new options.__emitter(options);!function processContinuations(){const list=[];for(let current=top;current!==language;current=current.parent)current.className&&list.unshift(current.className);list.forEach((item=>emitter.openNode(item)))}();let modeBuffer="",relevance=0,index=0,iterations=0,resumeScanAtSamePosition=!1;try{for(top.matcher.considerAll();;){iterations++,resumeScanAtSamePosition?resumeScanAtSamePosition=!1:top.matcher.considerAll(),top.matcher.lastIndex=index;const match=top.matcher.exec(codeToHighlight);if(!match)break;const processedCount=processLexeme(codeToHighlight.substring(index,match.index),match);index=match.index+processedCount}return processLexeme(codeToHighlight.substr(index)),emitter.closeAllNodes(),emitter.finalize(),result=emitter.toHTML(),{relevance:Math.floor(relevance),value:result,language:languageName,illegal:!1,emitter,top}}catch(err){if(err.message&&err.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:err.message,context:codeToHighlight.slice(index-100,index+100),mode:err.mode},sofar:result,relevance:0,value:escape$1(codeToHighlight),emitter};if(SAFE_MODE)return{illegal:!1,relevance:0,value:escape$1(codeToHighlight),emitter,language:languageName,top,errorRaised:err};throw err}}function highlightAuto(code,languageSubset){languageSubset=languageSubset||options.languages||Object.keys(languages);const plaintext=function justTextHighlightResult(code){const result={relevance:0,emitter:new options.__emitter(options),value:escape$1(code),illegal:!1,top:PLAINTEXT_LANGUAGE};return result.emitter.addText(code),result}(code),results=languageSubset.filter(getLanguage).filter(autoDetection).map((name=>_highlight(name,code,!1)));results.unshift(plaintext);const sorted=results.sort(((a,b)=>{if(a.relevance!==b.relevance)return b.relevance-a.relevance;if(a.language&&b.language){if(getLanguage(a.language).supersetOf===b.language)return 1;if(getLanguage(b.language).supersetOf===a.language)return-1}return 0})),[best,secondBest]=sorted,result=best;return result.second_best=secondBest,result}const brPlugin={"before:highlightElement":({el})=>{options.useBR&&(el.innerHTML=el.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result})=>{options.useBR&&(result.value=result.value.replace(/\n/g,"<br>"))}},TAB_REPLACE_RE=/^(<[^>]+>|\t)+/gm,tabReplacePlugin={"after:highlightElement":({result})=>{options.tabReplace&&(result.value=result.value.replace(TAB_REPLACE_RE,(m=>m.replace(/\t/g,options.tabReplace))))}};function highlightElement(element){let node=null;const language=function blockLanguage(block){let classes=block.className+" ";classes+=block.parentNode?block.parentNode.className:"";const match=options.languageDetectRe.exec(classes);if(match){const language=getLanguage(match[1]);return language||(warn(LANGUAGE_NOT_FOUND.replace("{}",match[1])),warn("Falling back to no-highlight mode for this block.",block)),language?match[1]:"no-highlight"}return classes.split(/\s+/).find((_class=>shouldNotHighlight(_class)||getLanguage(_class)))}(element);if(shouldNotHighlight(language))return;fire("before:highlightElement",{el:element,language}),node=element;const text=node.textContent,result=language?highlight(text,{language,ignoreIllegals:!0}):highlightAuto(text);fire("after:highlightElement",{el:element,result,text}),element.innerHTML=result.value,function updateClassName(element,currentLang,resultLang){const language=currentLang?aliases[currentLang]:resultLang;element.classList.add("hljs"),language&&element.classList.add(language)}(element,language,result.language),element.result={language:result.language,re:result.relevance,relavance:result.relevance},result.second_best&&(element.second_best={language:result.second_best.language,re:result.second_best.relevance,relavance:result.second_best.relevance})}const initHighlighting=()=>{if(initHighlighting.called)return;initHighlighting.called=!0,deprecated("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(highlightElement)};let wantsHighlight=!1;function highlightAll(){if("loading"===document.readyState)return void(wantsHighlight=!0);document.querySelectorAll("pre code").forEach(highlightElement)}function getLanguage(name){return name=(name||"").toLowerCase(),languages[name]||languages[aliases[name]]}function registerAliases(aliasList,{languageName}){"string"==typeof aliasList&&(aliasList=[aliasList]),aliasList.forEach((alias=>{aliases[alias.toLowerCase()]=languageName}))}function autoDetection(name){const lang=getLanguage(name);return lang&&!lang.disableAutodetect}function fire(event,args){const cb=event;plugins.forEach((function(plugin){plugin[cb]&&plugin[cb](args)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function boot(){wantsHighlight&&highlightAll()}),!1),Object.assign(hljs,{highlight,highlightAuto,highlightAll,fixMarkup:function deprecateFixMarkup(arg){return deprecated("10.2.0","fixMarkup will be removed entirely in v11.0"),deprecated("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),function fixMarkup(html){return options.tabReplace||options.useBR?html.replace(fixMarkupRe,(match=>"\n"===match?options.useBR?"<br>":match:options.tabReplace?match.replace(/\t/g,options.tabReplace):match)):html}(arg)},highlightElement,highlightBlock:function deprecateHighlightBlock(el){return deprecated("10.7.0","highlightBlock will be removed entirely in v12.0"),deprecated("10.7.0","Please use highlightElement now."),highlightElement(el)},configure:function configure(userOptions){userOptions.useBR&&(deprecated("10.3.0","'useBR' will be removed entirely in v11.0"),deprecated("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),options=inherit$1(options,userOptions)},initHighlighting,initHighlightingOnLoad:function initHighlightingOnLoad(){deprecated("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),wantsHighlight=!0},registerLanguage:function registerLanguage(languageName,languageDefinition){let lang=null;try{lang=languageDefinition(hljs)}catch(error$1){if(error("Language definition for '{}' could not be registered.".replace("{}",languageName)),!SAFE_MODE)throw error$1;error(error$1),lang=PLAINTEXT_LANGUAGE}lang.name||(lang.name=languageName),languages[languageName]=lang,lang.rawDefinition=languageDefinition.bind(null,hljs),lang.aliases&&registerAliases(lang.aliases,{languageName})},unregisterLanguage:function unregisterLanguage(languageName){delete languages[languageName];for(const alias of Object.keys(aliases))aliases[alias]===languageName&&delete aliases[alias]},listLanguages:function listLanguages(){return Object.keys(languages)},getLanguage,registerAliases,requireLanguage:function requireLanguage(name){deprecated("10.4.0","requireLanguage will be removed entirely in v11."),deprecated("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const lang=getLanguage(name);if(lang)return lang;throw new Error("The '{}' language is required, but not loaded.".replace("{}",name))},autoDetection,inherit:inherit$1,addPlugin:function addPlugin(plugin){!function upgradePluginAPI(plugin){plugin["before:highlightBlock"]&&!plugin["before:highlightElement"]&&(plugin["before:highlightElement"]=data=>{plugin["before:highlightBlock"](Object.assign({block:data.el},data))}),plugin["after:highlightBlock"]&&!plugin["after:highlightElement"]&&(plugin["after:highlightElement"]=data=>{plugin["after:highlightBlock"](Object.assign({block:data.el},data))})}(plugin),plugins.push(plugin)},vuePlugin:BuildVuePlugin(hljs).VuePlugin}),hljs.debugMode=function(){SAFE_MODE=!1},hljs.safeMode=function(){SAFE_MODE=!0},hljs.versionString="10.7.2";for(const key in MODES)"object"==typeof MODES[key]&&deepFreezeEs6(MODES[key]);return Object.assign(hljs,MODES),hljs.addPlugin(brPlugin),hljs.addPlugin(mergeHTMLPlugin),hljs.addPlugin(tabReplacePlugin),hljs}({});module.exports=highlight}}]);