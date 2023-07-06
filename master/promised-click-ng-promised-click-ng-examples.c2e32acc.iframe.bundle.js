(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[8988],{"./.storybook/angular-decorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>APP_NAME});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node},__WEBPACK_DEFAULT_EXPORT__=()=>angularDecorator},"./src/promised-click-ng/promised-click-ng.examples.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/angular-decorator.js"),_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button-ng/button-ng.js"),_promised_click_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/promised-click-ng/promised-click-ng.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Legacy Angular/Promised Click Ng",decorators:[(0,_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.Z)()],parameters:{storySource:{source:"import angular from 'angular';\n\nimport angularDecorator, {APP_NAME} from '../../.storybook/angular-decorator';\n\nimport ButtonNG from '../button-ng/button-ng';\n\nimport PromisedClickNG from './promised-click-ng';\n\nexport default {\n  title: 'Legacy Angular/Promised Click Ng',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: 'Controls the active state of a button.',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  angular.\n    module(APP_NAME, [PromisedClickNG, ButtonNG]).\n    controller('testController', function controller($scope, $timeout) {\n      this.onClick = () => $timeout(angular.noop, 5000);\n    }).\n    directive('rgTestDirective', $timeout => ({\n      require: 'rgPromisedClick',\n      link: (scope, iElement, iAttrs, rgPromisedClick) => {\n        rgPromisedClick.onClick(() => $timeout(angular.noop, 1000));\n      }\n    }));\n\n  return `\n      <div class=\"button-example\" ng-controller=\"testController as ctrl\">\n        <rg-button rg-promised-click=\"ctrl.onClick()\">Simple use</rg-button>\n        <rg-button rg-promised-click=\"ctrl.onClick()\" promised-mode=\"loader\">Simple use loader mode</rg-button>\n        <rg-button rg-promised-click rg-test-directive>Via controller</rg-button>\n        <rg-button rg-promised-click=\"ctrl.onClick()\">Ring button</rg-button>\n      </div>\n    `;\n};\n\nbasic.storyName = 'Promised Click Ng';\n",locationsMap:{basic:{startLoc:{col:21,line:19},endLoc:{col:1,line:40},startBody:{col:21,line:19},endBody:{col:1,line:40}}}},notes:"Controls the active state of a button.",hermione:{skip:!0}}},basic=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_1__.i,[_promised_click_ng__WEBPACK_IMPORTED_MODULE_2__.Z,_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_3__.Z]).controller("testController",["$scope","$timeout",function controller($scope,$timeout){this.onClick=()=>$timeout(angular__WEBPACK_IMPORTED_MODULE_0___default().noop,5e3)}]).directive("rgTestDirective",["$timeout",$timeout=>({require:"rgPromisedClick",link:(scope,iElement,iAttrs,rgPromisedClick)=>{rgPromisedClick.onClick((()=>$timeout(angular__WEBPACK_IMPORTED_MODULE_0___default().noop,1e3)))}})]),'\n      <div class="button-example" ng-controller="testController as ctrl">\n        <rg-button rg-promised-click="ctrl.onClick()">Simple use</rg-button>\n        <rg-button rg-promised-click="ctrl.onClick()" promised-mode="loader">Simple use loader mode</rg-button>\n        <rg-button rg-promised-click rg-test-directive>Via controller</rg-button>\n        <rg-button rg-promised-click="ctrl.onClick()">Ring button</rg-button>\n      </div>\n    ');basic.storyName="Promised Click Ng"},"./src/button-ng/button-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>LOADER_BACKGROUND_SELECTOR,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/ring-angular-component.js"),_global_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/dom.ts"),_icon_ng_icon_ng__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/icon-ng/icon-ng.js"),_button_button_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/button.css"),_button_button_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_button_button_css__WEBPACK_IMPORTED_MODULE_2__),_button_button_classes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button__classes.ts"),_global_controls_height__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/global/controls-height.tsx"),_button_ng_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button-ng/button-ng.css"),_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_button_ng_css__WEBPACK_IMPORTED_MODULE_3__);const{ringIconDefaultColor,iconMarginFix,transcludeSpacer}=_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default(),angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.button",[_icon_ng_icon_ng__WEBPACK_IMPORTED_MODULE_4__.Z]),buttonClassesMap=Object.values({..._button_button_css__WEBPACK_IMPORTED_MODULE_2___default(),..._button_ng_css__WEBPACK_IMPORTED_MODULE_3___default()}).reduce(((acc,classes)=>(classes.split(" ").forEach((value=>acc[value]=!0)),acc)),{}),LOADER_BACKGROUND_SELECTOR=".js-button-loader";class ButtonController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_5__.Z{constructor(){super(...arguments);const{$element,$attrs,$scope}=this.$inject;$scope.styles=_button_button_css__WEBPACK_IMPORTED_MODULE_2___default(),this.element=$element[0];["delayed","loader","danger","short","active","text","inline","narrowRight"].forEach((mod=>{$scope.$watch((()=>$scope.$eval($attrs[mod])),(val=>{this.updateClasses();const attrName=`data-test-${mod}`;if(val?this.element.setAttribute(attrName,!0):this.element.removeAttribute(attrName),"loader"===mod){const isText=this.getAttrValue($attrs.text),withIcon=!!$attrs.icon;(0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.nk)(!val||isText||withIcon?"remove":"add")(this.element.querySelector(LOADER_BACKGROUND_SELECTOR).classList,_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().loaderBackground)}}))}));const tabIndex=$attrs.tabindex||"-1";"-1"!==tabIndex&&this.element.setAttribute("tabindex",tabIndex),$scope.$watch((()=>$scope.$eval($attrs.loader)),(val=>{val?this.element.setAttribute("tabindex","-1"):"-1"!==tabIndex?this.element.setAttribute("tabindex",tabIndex):this.element.removeAttribute("tabindex")}))}$postLink(){this.updateClasses();const{$attrs}=this.$inject;$attrs.$observe("mode",this.updateClasses),$attrs.$observe("icon",(()=>{this.updateClasses(),this.updateIcon()})),$attrs.$observe("iconSize",(()=>{this.updateClasses(),this.updateIcon()}))}getAttrValue(attribute){const{$scope}=this.$inject;return $scope.$eval(attribute)}updateClasses=()=>{const{$attrs}=this.$inject,foreignClasses=[...this.element.classList].filter((name=>!buttonClassesMap[name]));this.element.className=classnames__WEBPACK_IMPORTED_MODULE_1___default()(foreignClasses,(0,_button_button_classes__WEBPACK_IMPORTED_MODULE_7__.y)({height:$attrs.height||_global_controls_height__WEBPACK_IMPORTED_MODULE_8__.oW.S,className:_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().button,active:this.getAttrValue($attrs.active),disabled:this.getAttrValue($attrs.disabled),loader:this.getAttrValue($attrs.loader),primary:"primary"===$attrs.mode||"blue"===$attrs.mode,short:this.getAttrValue($attrs.short),text:this.getAttrValue($attrs.text),inline:this.getAttrValue($attrs.inline),danger:this.getAttrValue($attrs.danger),delayed:this.getAttrValue($attrs.delayed),icon:$attrs.icon}),{[_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default().buttonWithoutIcon]:!$attrs.icon,[_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default().narrowRight]:this.getAttrValue($attrs.narrowRight)}),$attrs.hasOwnProperty("mode")?(0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.GK)(this.findTranscludeNode().classList,ringIconDefaultColor):(0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.PT)(this.findTranscludeNode().classList,ringIconDefaultColor)};findTranscludeNode=()=>this.element.querySelector("ng-transclude");updateIcon=()=>{const{$attrs,$compile,$scope}=this.$inject,icon=this.element.querySelector("rg-icon"),transcludeNode=this.findTranscludeNode(),glyph=$attrs.icon,size=$attrs.iconSize,isLoading=this.getAttrValue($attrs.loader);glyph&&isLoading?icon.setAttribute("loading",!0):icon.setAttribute("loading",!1),glyph?((0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.PT)(transcludeNode.classList,transcludeSpacer),icon.setAttribute("glyph",glyph),size&&icon.setAttribute("size",size)):((0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.GK)(transcludeNode.classList,transcludeSpacer),icon.removeAttribute("glyph"),icon.removeAttribute("size")),$compile(icon)($scope)}}function createButtonDirective(tagName){return()=>({restrict:"E",transclude:!0,replace:!0,template:`\n  <${tagName} class="${_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().button}">\n  <span class="${_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().content}"\n  ><rg-icon class="${classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().icon,_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default().iconNg,iconMarginFix)}"></rg-icon\n  ><ng-transclude></ng-transclude\n  ></span\n  ><div class="js-button-loader"></div>\n  </${tagName}>\n    `,controller:ButtonController})}ButtonController.$inject=["$element","$attrs","$scope","$compile","$log"],angularModule.directive("rgButton",createButtonDirective("button")),angularModule.directive("rgButtonLink",createButtonDirective("a"));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/global/ring-angular-component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>RingAngularComponent});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/icon-ng/icon-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/icon__constants.ts"),_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/template-ng/template-ng.js"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.css"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.icon",[_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__.Z]);angularModule.directive("rgIcon",(function rgIconDirective(){return{restrict:"E",scope:{glyph:"@",loading:"=?",color:"@?",size:"@?",height:"@?",width:"@?"},template:`<span class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().icon}" rg-template="normalizedGlyph" rg-template-class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().glyph}"></span>`,controller:["$scope",$scope=>{$scope.$watch("glyph",(value=>{value&&($scope.normalizedGlyph=function decodeBase64IfNeeded(glyph){return 0===glyph.indexOf("data:image/svg+xml;base64,")?window.atob(glyph.replace("data:image/svg+xml;base64,","")):glyph}(value))}))}],link:function link(scope,iElement,iAttrs){iAttrs.$addClass("ring-icon"),scope.$watch("loading",(value=>{value?iAttrs.$addClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading):iAttrs.$removeClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading)})),scope.$watch((()=>scope.color&&_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]&&_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default()[_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]]),((colorClass,prevColorClass)=>{colorClass&&(iAttrs.$addClass(colorClass),prevColorClass&&prevColorClass!==colorClass&&iAttrs.$removeClass(prevColorClass))})),scope.$watchGroup(["size","width","height"],(_ref=>{let[size,width,height]=_ref;const svgNode=iElement[0].querySelector("svg");if(svgNode)if(!size||width||height)width&&svgNode.setAttribute("style",`width: ${width}px;`),height&&svgNode.setAttribute("style",`height: ${height}px;`);else{const sizeString=`${size}px`,style=`width: ${sizeString}; height: ${sizeString};`;svgNode.setAttribute("style",style)}}))}}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/promised-click-ng/promised-click-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_button_button_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/button/button.css"),_button_button_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_button_button_css__WEBPACK_IMPORTED_MODULE_1__),_global_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/dom.ts"),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/global/ring-angular-component.js"),_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button-ng/button-ng.js");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.promised-click",[]);class PromisedClickController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_2__.Z{constructor(){super(...arguments);const{$scope,$element,$attrs,$parse}=this.$inject;this.element=$element[0],this.active=!1,$attrs.rgPromisedClick&&this.onClick((e=>$parse($attrs.rgPromisedClick)($scope,{event:e})));let currentMode=null;this.toggleActive=enable=>{if("loader"===currentMode){(0,_global_dom__WEBPACK_IMPORTED_MODULE_3__.nk)(enable?"add":"remove")(this.element.classList,_button_button_css__WEBPACK_IMPORTED_MODULE_1___default().loader);this.element.querySelector(_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_4__.G)&&(0,_global_dom__WEBPACK_IMPORTED_MODULE_3__.nk)(enable?"add":"remove")(this.element.querySelector(_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_4__.G).classList,_button_button_css__WEBPACK_IMPORTED_MODULE_1___default().loaderBackground)}else"active"===currentMode&&(0,_global_dom__WEBPACK_IMPORTED_MODULE_3__.nk)(enable?"add":"remove")(this.element.classList,_button_button_css__WEBPACK_IMPORTED_MODULE_1___default().active)};const setModeParams=mode=>{currentMode=mode};setModeParams($attrs.promisedMode||"active"),$attrs.promisedMode&&-1!==$attrs.promisedMode.indexOf("{{")&&$attrs.$observe("promisedMode",(newMode=>{newMode!==currentMode&&(this.toggleActive(!1),setModeParams(newMode))}))}onClick(callback){this.element.addEventListener("click",(e=>{this.active?e.preventDefault():this.process(callback,e)}))}process(callback,e){const{$scope}=this.$inject;this.promise=callback(e),this.promise&&this.activate(),$scope.$root.$$phase||$scope.$apply()}activate(){this.active=!0,this.toggleActive(!0);const done=()=>{this.active=!1,this.toggleActive(!1)};this.promise.then(done,done)}}PromisedClickController.$inject=[],PromisedClickController.$inject=["$scope","$element","$attrs","$parse"],angularModule.directive("rgPromisedClick",(function rgPromisedClickDirective(){return{controller:PromisedClickController}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/template-ng/template-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/ring-angular-component.js");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.template",[]);class RgTemplateController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__.Z{currentScope=null;constructor(){super(...arguments);const{$scope,$attrs}=this.$inject;$scope.$watch($attrs.rgTemplate||$attrs.template,this.render)}render=template=>{const{$scope,$element,$compile}=this.$inject;this.cleanup(),this.currentScope=$scope.$new(),this.currentScope.$evalAsync((()=>{$element.html(template),this.addInnerClass(),$compile($element.contents())(this.currentScope)}))};addInnerClass=()=>{const{rgTemplateClass}=this.$inject.$attrs;rgTemplateClass&&this.$inject.$element.contents().addClass(rgTemplateClass)};cleanup(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}RgTemplateController.$inject=[],RgTemplateController.$inject=["$scope","$element","$attrs","$compile"],angularModule.directive("rgTemplate",(function rgTemplateDirective(){return{controller:RgTemplateController}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button-ng/button-ng.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable-next-line selector-type-no-unknown */\n.ringIconDefaultColor_eb36 rg-icon,\n.ringIconDefaultColor_eb36 .ring-icon {\n  color: var(--ring-icon-secondary-color);\n}\n\n.iconMarginFix_b792.iconMarginFix_b792 {\n  margin-right: 0;\n}\n\n.transcludeSpacer_a566:not(:empty) {\n  margin-left: 4px;\n}\n\n.buttonWithoutIcon_c7f7 .iconNg_cb23 {\n  display: none;\n}\n\n.narrowRight_ea8f {\n  padding-right: 12px;\n}\n","",{version:3,sources:["webpack://./src/button-ng/button-ng.css"],names:[],mappings:"AAEA,yDAAyD;AACzD;;EAEE,uCAAuC;AACzC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n/* stylelint-disable-next-line selector-type-no-unknown */\n.ringIconDefaultColor rg-icon,\n.ringIconDefaultColor :global(.ring-icon) {\n  color: var(--ring-icon-secondary-color);\n}\n\n.iconMarginFix.iconMarginFix {\n  margin-right: 0;\n}\n\n.transcludeSpacer:not(:empty) {\n  margin-left: 4px;\n}\n\n.buttonWithoutIcon .iconNg {\n  display: none;\n}\n\n.narrowRight {\n  padding-right: 12px;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ringIconDefaultColor:"ringIconDefaultColor_eb36",iconMarginFix:"iconMarginFix_b792",transcludeSpacer:"transcludeSpacer_a566",buttonWithoutIcon:"buttonWithoutIcon_c7f7",iconNg:"iconNg_cb23",narrowRight:"narrowRight_ea8f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/button-ng/button-ng.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button-ng/button-ng.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);