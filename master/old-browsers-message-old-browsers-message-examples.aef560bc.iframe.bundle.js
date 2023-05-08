(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[2823],{"./src/old-browsers-message/old-browsers-message.examples.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return old_browsers_message_examples}});__webpack_require__("./src/old-browsers-message/old-browsers-message.css");var sniffer=__webpack_require__("./src/global/sniffer.ts");const WHITE_LISTED_BROWSERS=["chrome","firefox","safari","edge"],WHITE_LIST=(["and_chr 112","chrome 111","chrome 110","chrome 109","edge 111","edge 110","firefox 110","ios_saf 16.3","ios_saf 16.2","ios_saf 16.1","ios_saf 16.0","ios_saf 15.6","op_mini all","safari 16.3","samsung 20"]||0).reduce(((acc,item)=>{var _item$match;const[,browserName,version]=null!==(_item$match=item.match(/(\S+)\s(\S+)/))&&void 0!==_item$match?_item$match:[];return WHITE_LISTED_BROWSERS.includes(browserName)?{...acc,[browserName]:parseInt(version,10)}:acc}),{});let smileChanges=0;const MAX_SMILE_CHANGES=50;let previousWindowErrorHandler;function changeSmileClickListener(event){const eyes=["O","o","-",">","<"],target=event.target||event.srcElement;function getRandomEye(){return eyes[function rand(min,max){return Math.round(Math.random()*(max-min))+min}(0,eyes.length-1)]}smileChanges++,target.innerHTML=function getRandomSmile(){return smileChanges>=MAX_SMILE_CHANGES?"\\\\ (x_x) //":`{{ (${getRandomEye()}_${getRandomEye()}) }}`}()}function stopOldBrowserDetector(){window.onerror=previousWindowErrorHandler}!function startOldBrowsersDetector(onOldBrowserDetected){previousWindowErrorHandler=window.onerror,window.onerror=function oldBrowsersMessageShower(errorMsg,url,lineNumber){return onOldBrowserDetected&&onOldBrowserDetected(),!!previousWindowErrorHandler&&previousWindowErrorHandler(errorMsg,url,lineNumber)}}((()=>{const oldBrowsersMessageContainer=document.getElementById("ring-old-browsers-message"),browserMessage=document.getElementById("ring-old-browsers-message__browser-message"),errorMessage=document.getElementById("ring-old-browsers-message__error-message"),smileNode=document.getElementById("ring-old-browsers-message__smile");null!=browserMessage&&null!=errorMessage&&(!function isBrowserInWhiteList(){return sniffer.Z.browser.version[0]>=WHITE_LIST[sniffer.Z.browser.name]}()?(browserMessage.style.display="block",errorMessage.style.display="none"):(browserMessage.style.display="none",errorMessage.style.display="block")),oldBrowsersMessageContainer&&(oldBrowsersMessageContainer.hidden=!1,oldBrowsersMessageContainer.style.display="block"),smileNode&&function attachSmileClickListener(smileNode){smileNode.addEventListener?smileNode.addEventListener("click",changeSmileClickListener):smileNode.attachEvent&&smileNode.attachEvent("onclick",changeSmileClickListener)}(smileNode)}));var old_browsers_message_examples={title:"Style-only/Old Browsers Message",parameters:{storySource:{source:'import \'./old-browsers-message.css\';\nimport {stop} from \'./old-browsers-message\';\n\nexport default {\n  title: \'Style-only/Old Browsers Message\',\n\n  parameters: {\n    notes: `\nDisplays a full-screen "Browser is unsupported" message if a JavaScript error occurs on page load in an old browser.\n\nNote: this script does not have any dependencies, you should include it directly.\nOnce loaded, it attaches a global error handler. When your app finishes loading you should probably turn it off by calling oldBrowserMessage.stop();\n    `\n  }\n};\n\nexport const basic = () => {\n  function triggerGlobalError() {\n    // @ts-expect-error testing a runtime error\n    Object.unknownMethodToTriggerOldBrowsersMessage();\n    setTimeout(stop);\n  }\n\n  setTimeout(triggerGlobalError);\n\n  return `\n      <div id="ring-old-browsers-message" class="ring-old-browsers-message ring-old-browsers-message_hidden" hidden>\n        <span id="ring-old-browsers-message__smile" class="ring-old-browsers-message__smile">{{ (&gt;_&lt;) }}</span>\n        <br/><br/>\n        <span id="ring-old-browsers-message__browser-message">This version of your browser is not <a href="https://documentation.link">supported</a>.<br/>\n        Try upgrading to the latest stable version.</span>\n        <span id="ring-old-browsers-message__error-message">Something went seriously wrong.</span>\n        <br/><br/>\n      </div>\n    `;\n};\n\nbasic.storyName = \'Old Browsers Message\';\n',locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:1,line:36},startBody:{col:21,line:17},endBody:{col:1,line:36}}}},notes:'\nDisplays a full-screen "Browser is unsupported" message if a JavaScript error occurs on page load in an old browser.\n\nNote: this script does not have any dependencies, you should include it directly.\nOnce loaded, it attaches a global error handler. When your app finishes loading you should probably turn it off by calling oldBrowserMessage.stop();\n    '}};const basic=()=>(setTimeout((function triggerGlobalError(){Object.unknownMethodToTriggerOldBrowsersMessage(),setTimeout(stopOldBrowserDetector)})),'\n      <div id="ring-old-browsers-message" class="ring-old-browsers-message ring-old-browsers-message_hidden" hidden>\n        <span id="ring-old-browsers-message__smile" class="ring-old-browsers-message__smile">{{ (&gt;_&lt;) }}</span>\n        <br/><br/>\n        <span id="ring-old-browsers-message__browser-message">This version of your browser is not <a href="https://documentation.link">supported</a>.<br/>\n        Try upgrading to the latest stable version.</span>\n        <span id="ring-old-browsers-message__error-message">Something went seriously wrong.</span>\n        <br/><br/>\n      </div>\n    ');basic.storyName="Old Browsers Message"},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/old-browsers-message/old-browsers-message.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'.ring-old-browsers-message {\n  display: block;\n\n  margin-top: 15%;\n\n  text-align: center;\n\n  color: var(--ring-text-color);\n\n  font-family: -apple-system, BlinkMacSystemFont, Ubuntu, "Helvetica Neue", Arial, sans-serif;\n  font-size: var(--ring-font-size-larger);\n  line-height: 20px;\n}\n\n.ring-old-browsers-message_hidden {\n  display: none;\n}\n\n.ring-old-browsers-message__smile {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n\n  font-size: 24px;\n}\n',"",{version:3,sources:["webpack://./src/old-browsers-message/old-browsers-message.css"],names:[],mappings:"AAIA;EACE,cAAc;;EAEd,eAAe;;EAEf,kBAAkB;;EAElB,6BAA6B;;EAE7B,2FAA2F;EAC3F,uCAAuC;EACvC,iBAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,yBAAiB;UAAjB,iBAAiB;;EAEjB,eAAyB;AAC3B",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n:global(.ring-old-browsers-message) {\n  display: block;\n\n  margin-top: 15%;\n\n  text-align: center;\n\n  color: var(--ring-text-color);\n\n  font-family: -apple-system, BlinkMacSystemFont, Ubuntu, "Helvetica Neue", Arial, sans-serif;\n  font-size: var(--ring-font-size-larger);\n  line-height: calc(2.5 * unit);\n}\n\n:global(.ring-old-browsers-message_hidden) {\n  display: none;\n}\n\n:global(.ring-old-browsers-message__smile) {\n  cursor: pointer;\n  user-select: none;\n\n  font-size: calc(3 * unit);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/old-browsers-message/old-browsers-message.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/old-browsers-message/old-browsers-message.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);