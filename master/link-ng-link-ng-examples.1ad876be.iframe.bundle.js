(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[8749],{"./.storybook/angular-decorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>APP_NAME});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node},__WEBPACK_DEFAULT_EXPORT__=()=>angularDecorator},"./src/link-ng/link-ng.examples.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/angular-decorator.js"),_link_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/link-ng/link-ng.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Legacy Angular/Link Ng",decorators:[(0,_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport LinkNG from './link-ng';\n\nexport default {\n  title: 'Legacy Angular/Link Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'Displays a link.'\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [LinkNG]);\n\n  return '<rg-link href=\"http://example.com\" class=\"test-class\">Open example</rg-link>';\n};\n\nbasic.storyName = 'Link Ng';\n",locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:1,line:20},startBody:{col:21,line:16},endBody:{col:1,line:20}}}},notes:"Displays a link."}},basic=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.i,[_link_ng__WEBPACK_IMPORTED_MODULE_2__.Z]),'<rg-link href="http://example.com" class="test-class">Open example</rg-link>');basic.storyName="Link Ng"},"./src/link-ng/link-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_link_link_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/link/link.css"),_link_link_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_link_link_css__WEBPACK_IMPORTED_MODULE_1__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.link",[]);angularModule.directive("rgLink",(function rgLinkDirective(){return{restrict:"E",transclude:!0,replace:!0,template:`\n<a class="${_link_link_css__WEBPACK_IMPORTED_MODULE_1___default().link} ${_link_link_css__WEBPACK_IMPORTED_MODULE_1___default().compatibilityUnderlineMode}"\n><span class="${_link_link_css__WEBPACK_IMPORTED_MODULE_1___default().inner}" ng-transclude></span></a>\n    `}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,gCCxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/link/link.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/link/link.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);