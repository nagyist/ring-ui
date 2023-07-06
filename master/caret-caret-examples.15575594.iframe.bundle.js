(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[6351],{"./src/caret/caret.examples.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/link/link__legacy.css");var _caret__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/caret/caret.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Utilities/Caret",parameters:{storySource:{source:"import '../link/link__legacy.css';\nimport Caret from './caret';\n\nexport default {\n  title: 'Utilities/Caret',\n\n  parameters: {\n    notes:\n      'Allows manipulation of the caret position in a text box or a contenteditable element. Ported from [jquery-caret](https://github.com/accursoft/caret/).',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  const node = document.createElement('div');\n\n  node.innerHTML = `\n<label>\n  Textarea\n  <textarea id=\"test-input\" class=\"ring-input\">\n  Lorem ipsum\n  dolor sit amet\n  </textarea>\n</label>\n<div><a href=\"\" id=\"cursor-action\" class=\"ring-link\">Set caret position</a></div>\n    `;\n\n  const input = node.querySelector<HTMLElement>('#test-input');\n  const caret = input && new Caret(input);\n\n  node.querySelector('#cursor-action')?.addEventListener('click', event => {\n    caret?.focus();\n    caret?.setPosition(4);\n    event.preventDefault();\n  });\n\n  return node;\n};\n\nbasic.storyName = 'Caret';\n",locationsMap:{basic:{startLoc:{col:21,line:14},endLoc:{col:1,line:38},startBody:{col:21,line:14},endBody:{col:1,line:38}}}},notes:"Allows manipulation of the caret position in a text box or a contenteditable element. Ported from [jquery-caret](https://github.com/accursoft/caret/).",hermione:{skip:!0}}},basic=()=>{const node=document.createElement("div");node.innerHTML='\n<label>\n  Textarea\n  <textarea id="test-input" class="ring-input">\n  Lorem ipsum\n  dolor sit amet\n  </textarea>\n</label>\n<div><a href="" id="cursor-action" class="ring-link">Set caret position</a></div>\n    ';const input=node.querySelector("#test-input"),caret=input&&new _caret__WEBPACK_IMPORTED_MODULE_1__.Z(input);return node.querySelector("#cursor-action")?.addEventListener("click",(event=>{caret?.focus(),caret?.setPosition(4),event.preventDefault()})),node};basic.storyName="Caret"},"./src/caret/caret.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Caret});var _global_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/global/dom.ts");class Caret{static returnRE=/\r/g;static normalizeNewlines(value){return"string"==typeof value?value.replace(this.returnRE,""):value}target;constructor(target){this.target=target}isContentEditable(){return"true"===this.target.contentEditable}focus(){document.activeElement&&document.activeElement===this.target||this.target.focus()}getAbsolutePosition(node){let _curNode=node,curPos=0;for(;null!=_curNode&&_curNode!==this.target;){for(;_curNode.previousSibling;){var _curNode$previousSibl;curPos+=null!==(_curNode$previousSibl=_curNode.previousSibling.textContent?.length)&&void 0!==_curNode$previousSibl?_curNode$previousSibl:0,_curNode=_curNode.previousSibling}_curNode=_curNode.parentNode}return curPos}getPosition(){let params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.isContentEditable()){params.avoidFocus||this.focus();const selection=window.getSelection();if(!selection?.rangeCount)return 0;const range1=selection.getRangeAt(0),range2=range1.cloneRange();range2.selectNodeContents(this.target),range2.setEnd(range1.endContainer,range1.endOffset);const _curNode=range1.startContainer;if(this.target===_curNode)return 0===range1.startOffset||null==_curNode.textContent?0:_curNode.textContent.length;if(!this.target.contains(_curNode))return-1;if(!_curNode)return"selectionStart"in this.target&&this.target.selectionStart||-1;const curPos=this.getAbsolutePosition(_curNode);if(range1.startContainer===range1.endContainer)return range1.startOffset===range1.endOffset?curPos+range1.startOffset:{startOffset:curPos+range1.startOffset,endOffset:curPos+range1.endOffset,position:range2.toString().length};return{startOffset:curPos+range1.startOffset,endOffset:this.getAbsolutePosition(range1.endContainer)+range1.endOffset,position:range2.toString().length}}return"selectionStart"in this.target&&this.target.selectionStart||-1}getRelativePosition(curNode,position){let curPos=0,_curNode=curNode;if(!_curNode)return{_curNode:this.target,_correctedPosition:position};if(0===position){for(;3!==_curNode.nodeType;)_curNode=_curNode.childNodes[0];return{_curNode,_correctedPosition:position}}let i=-1;if(_curNode&&void 0!==_curNode.nodeType)for(;curPos<position&&3!==_curNode.nodeType&&(i++,null!=_curNode.childNodes[i]);){var _curNode$childNodes$i,_curNode$textContent$;curPos+=null!==(_curNode$childNodes$i=_curNode.childNodes[i].textContent?.length)&&void 0!==_curNode$childNodes$i?_curNode$childNodes$i:0,curPos>=position&&(_curNode=_curNode.childNodes[i],curPos-=null!==(_curNode$textContent$=_curNode.textContent?.length)&&void 0!==_curNode$textContent$?_curNode$textContent$:0,i=-1)}return{_curNode,_correctedPosition:position-curPos}}setPosition(position){const isContentEditable=this.isContentEditable();let correctedPosition,curNode=this.target&&this.target.childNodes[0];if(void 0!==position)if("object"==typeof position){const range=new Range,start=this.getRelativePosition(curNode,position.startOffset);range.setStart(start._curNode,start._correctedPosition);const end=this.getRelativePosition(curNode,position.endOffset);range.setEnd(end._curNode,end._correctedPosition),correctedPosition=range}else if(-1===position){var _value$length;const value=isContentEditable?this.target.textContent:Caret.normalizeNewlines("value"in this.target?this.target.value:void 0);correctedPosition=null!==(_value$length=value?.length)&&void 0!==_value$length?_value$length:0}else{const{_curNode,_correctedPosition}=this.getRelativePosition(curNode,position);curNode=_curNode,correctedPosition=_correctedPosition}if(isContentEditable){this.focus();try{correctedPosition instanceof Range?(window.getSelection()?.removeAllRanges(),window.getSelection()?.addRange(correctedPosition)):window.getSelection()?.collapse(curNode||this.target,correctedPosition)}catch(e){}}else"setSelectionRange"in this.target&&"number"==typeof correctedPosition&&this.target.setSelectionRange(correctedPosition,correctedPosition);return correctedPosition}getOffset(){let range,offset=0;try{range=window.getSelection()?.getRangeAt(0).cloneRange(),range?.setStart(range.startContainer,range.startOffset-1)}catch(e){return offset}return range&&0!==range.endOffset&&""!==range.toString()&&(offset=(0,_global_dom__WEBPACK_IMPORTED_MODULE_0__.Dz)(range).right-(0,_global_dom__WEBPACK_IMPORTED_MODULE_0__.Dz)(this.target).left-(range.startContainer instanceof HTMLElement&&range.startContainer.offsetLeft||0)),offset}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link__legacy.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,'/**\n  These styles are deprecated and kept for backward compatibility with direct class usages\n  like `<a class="ring-link">link</a>\n */\n\n.ring-link {\n    cursor: pointer;\n    transition: color var(--ring-fast-ease);\n\n    text-decoration: none;\n\n    color: var(--ring-link-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.ring-link:hover {\n    transition: none;\n\n    text-decoration: underline;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.ring-link_inherit:not(:hover) {\n  color: inherit;\n}}\n',"",{version:3,sources:["webpack://./src/link/link__legacy.css","<no source>"],names:[],mappings:"AAEA;;;EAGE;;AAGA;IACE,eAAe;IACf,uCAAuC;;IAEvC,qBAAqB;;IAErB,6BAA6B;EAC/B;;ACfF,wGAAA;IAAA,iBAAA;;IAAA,2BAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;EAAA,eAAA;CAAA,CAAA",sourcesContent:['@import "../global/variables.css";\n\n/**\n  These styles are deprecated and kept for backward compatibility with direct class usages\n  like `<a class="ring-link">link</a>\n */\n\n:global .ring-link {\n  & {\n    cursor: pointer;\n    transition: color var(--ring-fast-ease);\n\n    text-decoration: none;\n\n    color: var(--ring-link-color);\n  }\n\n  &:hover {\n    transition: none;\n\n    text-decoration: underline;\n\n    color: var(--ring-link-hover-color);\n  }\n}\n\n:global .ring-link_inherit:not(:hover) {\n  color: inherit;\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/link/link__legacy.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link__legacy.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);