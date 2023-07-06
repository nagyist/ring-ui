(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[1941],{"./node_modules/@jetbrains/icons/close.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><polygon points="13.63 3.65 12.35 2.38 8 6.73 3.64 2.38 2.37 3.65 6.72 8.01 2.38 12.35 3.65 13.63 8 9.28 12.35 13.64 13.63 12.36 9.27 8.01 13.63 3.65"/></g></svg>'},"./node_modules/@jetbrains/icons/search.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./src/form-ng/form-ng.examples.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/angular-decorator.js"),_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./src/form/form.css"),__webpack_require__("./src/button-ng/button-ng.js")),_select_ng_select_ng__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/select-ng/select-ng.js"),_checkbox_ng_checkbox_ng__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/checkbox-ng/checkbox-ng.js"),_input_ng_input_ng__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/input-ng/input-ng.js"),_form_ng__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/form-ng/form-ng.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Legacy Angular/Form Ng",decorators:[(0,_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_2__.Z)()],parameters:{storySource:{source:'import angular from \'angular\';\n\nimport angularDecorator, {APP_NAME} from \'../../.storybook/angular-decorator\';\n\nimport \'../form/form.css\';\n\nimport ButtonNG from \'../button-ng/button-ng\';\nimport SelectNG from \'../select-ng/select-ng\';\nimport CheckboxNG from \'../checkbox-ng/checkbox-ng\';\n\nimport InputNG from \'../input-ng/input-ng\';\n\nimport FormNG from \'./form-ng\';\n\nexport default {\n  title: \'Legacy Angular/Form Ng\',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes: \'Provides an Angular wrapper for Form.\'\n  }\n};\n\nexport const basic = () => {\n  angular.\n    module(APP_NAME, [FormNG, CheckboxNG, SelectNG, ButtonNG, InputNG]).\n    controller(\'FormExampleCtrl\', function ctrl() {\n      this.checkedModel = true;\n      this.data = [{name: \'Ada\'}, {name: \'Nik\'}];\n    });\n\n  return `\n      <div style="width: 700px"\n        ng-controller="FormExampleCtrl as formExampleCtrl">\n\n        <form class="ring-form" name="ExampleForm" novalidate>\n          <span class="ring-form__title">Form Title</span>\n\n          <div class="ring-form__group">\n            <rg-input size="M" required ng-model="formExampleCtrl.inputValue" label="Medium Input" name="inputMD" type="text"></rg-input>\n            <div rg-error-bubble="ExampleForm.inputMD"></div>\n          </div>\n\n          <div class="ring-form__group">\n            <rg-select options="item.name for item in formExampleCtrl.data track by item.name"></rg-select>\n            <div class="ring-form__control__description">I am a simple description</div>\n          </div>\n\n          <div class="ring-form__group">\n            <div>\n              <rg-checkbox ng-model="formExampleCtrl.checkedModel">Checkbox 1</rg-checkbox>\n            </div>\n            <div>\n              <rg-checkbox ng-model="formExampleCtrl.checkedModel">Checkbox 2</rg-checkbox>\n            </div>\n            <div>\n              <rg-checkbox>Checkbox 3</rg-checkbox>\n            </div>\n            <div>\n              <rg-checkbox>Checkbox 4</rg-checkbox>\n            </div>\n          </div>\n\n          <div class="ring-form__footer">\n            <rg-button mode="primary">Save</rg-button>\n            <rg-button>Cancel</rg-button>\n          </div>\n        </form>\n      </div>\n    `;\n};\n\nbasic.storyName = \'Form Ng\';\n',locationsMap:{basic:{startLoc:{col:21,line:24},endLoc:{col:1,line:71},startBody:{col:21,line:24},endBody:{col:1,line:71}}}},notes:"Provides an Angular wrapper for Form."}},basic=()=>(angular__WEBPACK_IMPORTED_MODULE_0___default().module(_storybook_angular_decorator__WEBPACK_IMPORTED_MODULE_2__.i,[_form_ng__WEBPACK_IMPORTED_MODULE_3__.Z,_checkbox_ng_checkbox_ng__WEBPACK_IMPORTED_MODULE_4__.Z,_select_ng_select_ng__WEBPACK_IMPORTED_MODULE_5__.Z,_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_6__.Z,_input_ng_input_ng__WEBPACK_IMPORTED_MODULE_7__.Z]).controller("FormExampleCtrl",(function ctrl(){this.checkedModel=!0,this.data=[{name:"Ada"},{name:"Nik"}]})),'\n      <div style="width: 700px"\n        ng-controller="FormExampleCtrl as formExampleCtrl">\n\n        <form class="ring-form" name="ExampleForm" novalidate>\n          <span class="ring-form__title">Form Title</span>\n\n          <div class="ring-form__group">\n            <rg-input size="M" required ng-model="formExampleCtrl.inputValue" label="Medium Input" name="inputMD" type="text"></rg-input>\n            <div rg-error-bubble="ExampleForm.inputMD"></div>\n          </div>\n\n          <div class="ring-form__group">\n            <rg-select options="item.name for item in formExampleCtrl.data track by item.name"></rg-select>\n            <div class="ring-form__control__description">I am a simple description</div>\n          </div>\n\n          <div class="ring-form__group">\n            <div>\n              <rg-checkbox ng-model="formExampleCtrl.checkedModel">Checkbox 1</rg-checkbox>\n            </div>\n            <div>\n              <rg-checkbox ng-model="formExampleCtrl.checkedModel">Checkbox 2</rg-checkbox>\n            </div>\n            <div>\n              <rg-checkbox>Checkbox 3</rg-checkbox>\n            </div>\n            <div>\n              <rg-checkbox>Checkbox 4</rg-checkbox>\n            </div>\n          </div>\n\n          <div class="ring-form__footer">\n            <rg-button mode="primary">Save</rg-button>\n            <rg-button>Cancel</rg-button>\n          </div>\n        </form>\n      </div>\n    ');basic.storyName="Form Ng"},"./src/button-ng/button-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>LOADER_BACKGROUND_SELECTOR,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/global/ring-angular-component.js"),_global_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/dom.ts"),_icon_ng_icon_ng__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/icon-ng/icon-ng.js"),_button_button_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/button.css"),_button_button_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_button_button_css__WEBPACK_IMPORTED_MODULE_2__),_button_button_classes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/button/button__classes.ts"),_global_controls_height__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/global/controls-height.tsx"),_button_ng_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/button-ng/button-ng.css"),_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_button_ng_css__WEBPACK_IMPORTED_MODULE_3__);const{ringIconDefaultColor,iconMarginFix,transcludeSpacer}=_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default(),angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.button",[_icon_ng_icon_ng__WEBPACK_IMPORTED_MODULE_4__.Z]),buttonClassesMap=Object.values({..._button_button_css__WEBPACK_IMPORTED_MODULE_2___default(),..._button_ng_css__WEBPACK_IMPORTED_MODULE_3___default()}).reduce(((acc,classes)=>(classes.split(" ").forEach((value=>acc[value]=!0)),acc)),{}),LOADER_BACKGROUND_SELECTOR=".js-button-loader";class ButtonController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_5__.Z{constructor(){super(...arguments);const{$element,$attrs,$scope}=this.$inject;$scope.styles=_button_button_css__WEBPACK_IMPORTED_MODULE_2___default(),this.element=$element[0];["delayed","loader","danger","short","active","text","inline","narrowRight"].forEach((mod=>{$scope.$watch((()=>$scope.$eval($attrs[mod])),(val=>{this.updateClasses();const attrName=`data-test-${mod}`;if(val?this.element.setAttribute(attrName,!0):this.element.removeAttribute(attrName),"loader"===mod){const isText=this.getAttrValue($attrs.text),withIcon=!!$attrs.icon;(0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.nk)(!val||isText||withIcon?"remove":"add")(this.element.querySelector(LOADER_BACKGROUND_SELECTOR).classList,_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().loaderBackground)}}))}));const tabIndex=$attrs.tabindex||"-1";"-1"!==tabIndex&&this.element.setAttribute("tabindex",tabIndex),$scope.$watch((()=>$scope.$eval($attrs.loader)),(val=>{val?this.element.setAttribute("tabindex","-1"):"-1"!==tabIndex?this.element.setAttribute("tabindex",tabIndex):this.element.removeAttribute("tabindex")}))}$postLink(){this.updateClasses();const{$attrs}=this.$inject;$attrs.$observe("mode",this.updateClasses),$attrs.$observe("icon",(()=>{this.updateClasses(),this.updateIcon()})),$attrs.$observe("iconSize",(()=>{this.updateClasses(),this.updateIcon()}))}getAttrValue(attribute){const{$scope}=this.$inject;return $scope.$eval(attribute)}updateClasses=()=>{const{$attrs}=this.$inject,foreignClasses=[...this.element.classList].filter((name=>!buttonClassesMap[name]));this.element.className=classnames__WEBPACK_IMPORTED_MODULE_1___default()(foreignClasses,(0,_button_button_classes__WEBPACK_IMPORTED_MODULE_7__.y)({height:$attrs.height||_global_controls_height__WEBPACK_IMPORTED_MODULE_8__.oW.S,className:_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().button,active:this.getAttrValue($attrs.active),disabled:this.getAttrValue($attrs.disabled),loader:this.getAttrValue($attrs.loader),primary:"primary"===$attrs.mode||"blue"===$attrs.mode,short:this.getAttrValue($attrs.short),text:this.getAttrValue($attrs.text),inline:this.getAttrValue($attrs.inline),danger:this.getAttrValue($attrs.danger),delayed:this.getAttrValue($attrs.delayed),icon:$attrs.icon}),{[_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default().buttonWithoutIcon]:!$attrs.icon,[_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default().narrowRight]:this.getAttrValue($attrs.narrowRight)}),$attrs.hasOwnProperty("mode")?(0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.GK)(this.findTranscludeNode().classList,ringIconDefaultColor):(0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.PT)(this.findTranscludeNode().classList,ringIconDefaultColor)};findTranscludeNode=()=>this.element.querySelector("ng-transclude");updateIcon=()=>{const{$attrs,$compile,$scope}=this.$inject,icon=this.element.querySelector("rg-icon"),transcludeNode=this.findTranscludeNode(),glyph=$attrs.icon,size=$attrs.iconSize,isLoading=this.getAttrValue($attrs.loader);glyph&&isLoading?icon.setAttribute("loading",!0):icon.setAttribute("loading",!1),glyph?((0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.PT)(transcludeNode.classList,transcludeSpacer),icon.setAttribute("glyph",glyph),size&&icon.setAttribute("size",size)):((0,_global_dom__WEBPACK_IMPORTED_MODULE_6__.GK)(transcludeNode.classList,transcludeSpacer),icon.removeAttribute("glyph"),icon.removeAttribute("size")),$compile(icon)($scope)}}function createButtonDirective(tagName){return()=>({restrict:"E",transclude:!0,replace:!0,template:`\n  <${tagName} class="${_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().button}">\n  <span class="${_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().content}"\n  ><rg-icon class="${classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_button_css__WEBPACK_IMPORTED_MODULE_2___default().icon,_button_ng_css__WEBPACK_IMPORTED_MODULE_3___default().iconNg,iconMarginFix)}"></rg-icon\n  ><ng-transclude></ng-transclude\n  ></span\n  ><div class="js-button-loader"></div>\n  </${tagName}>\n    `,controller:ButtonController})}ButtonController.$inject=["$element","$attrs","$scope","$compile","$log"],angularModule.directive("rgButton",createButtonDirective("button")),angularModule.directive("rgButtonLink",createButtonDirective("a"));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/checkbox-ng/checkbox-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_jetbrains_icons_checkmark_14px__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@jetbrains/icons/checkmark-14px.js"),_jetbrains_icons_checkmark_14px__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_jetbrains_icons_checkmark_14px__WEBPACK_IMPORTED_MODULE_1__),_icon_ng_icon_ng__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon-ng/icon-ng.js"),_proxy_attrs_proxy_attrs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/proxy-attrs/proxy-attrs.js"),_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/checkbox/checkbox.css"),_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.checkbox",[_icon_ng_icon_ng__WEBPACK_IMPORTED_MODULE_3__.Z]);let idCounter=0;angularModule.directive("rgCheckbox",(function rgCheckboxDirective(){return{restrict:"E",transclude:!0,replace:!0,template:(0,_proxy_attrs_proxy_attrs__WEBPACK_IMPORTED_MODULE_4__.Z)(`\n<label class="${_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default().checkbox}">\n  <input\n    data-proxy-ng-disabled\n    data-proxy-ng-model\n    data-proxy-ng-change\n    data-proxy-ng-true-value\n    data-proxy-ng-false-value\n    data-proxy-name\n    data-proxy-title\n    data-proxy-aria-label\n    data-test="ring-checkbox"\n    type="checkbox"\n    class="${_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default().input}"\n  />\n  <span class="${_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default().cell}">\n    <rg-icon class="${_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default().check}" glyph="{{:: checkmarkIcon}}" />\n  </span><span class="${_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default().label}" ng-transclude></span>\n</label>\n    `),link:function link(scope,iElement,attrs,controller,transcludeFn){scope.checkmarkIcon=_jetbrains_icons_checkmark_14px__WEBPACK_IMPORTED_MODULE_1___default();const input=iElement[0].querySelector('input[type="checkbox"]'),label=iElement[0].querySelector(`*[class~="${_checkbox_checkbox_css__WEBPACK_IMPORTED_MODULE_2___default().label}"]`),id="rg-checkbox-"+idCounter++;iElement[0].setAttribute("for",id),input.setAttribute("id",id),transcludeFn((clone=>{clone.length?label.style.display="initial":label.style.display="none"}))}}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/form-ng/form-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_message_bundle_ng_message_bundle_ng__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/message-bundle-ng/message-bundle-ng.js");__webpack_require__("./src/input/input-legacy.css"),__webpack_require__("./src/error-bubble/error-bubble-legacy.css");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.form",[_message_bundle_ng_message_bundle_ng__WEBPACK_IMPORTED_MODULE_3__.Z]);angularModule.factory("getFormErrorMessages",["RingMessageBundle",function getFormErrorMessagesDirective(RingMessageBundle){function msg(id,formError){const messageBundleId=`form_${id}`;if(RingMessageBundle.hasOwnProperty(messageBundleId))return RingMessageBundle[messageBundleId]();const formErrors=formError&&formError[id]||[];for(let j=0;j<formErrors.length;++j)if(formErrors[j]&&formErrors[j].message)return formErrors[j].message}return formErrors=>{const errorMessages=[];for(const key in formErrors)formErrors.hasOwnProperty(key)&&formErrors[key]&&errorMessages.push(msg(key,formErrors));return errorMessages}}]),angularModule.directive("rgErrorBubble",["getFormErrorMessages",function rgErrorBubbleDirective(getFormErrorMessages){return{scope:{errorBubble:"&rgErrorBubble"},replace:!0,template:'<div class="ring-error-bubble" ng-class="{ active: active, \'ring-error-bubble_material\': material }" ng-style="style">\n  <div ng-repeat="errorMessage in getFormErrorMessages(errorBubble().$error)">{{ errorMessage }}</div>\n</div>',link:function link(scope,iElement,iAttrs){scope.style={};const siblings=Array.from(iElement[0].parentNode.children);let element,tagName;for(let i=0;i<siblings.length;i++)if(tagName=siblings[i].tagName.toLowerCase(),"input"===tagName||"textarea"===tagName){element=siblings[i];break}scope.material=void 0!==iAttrs.material,scope.$watch((()=>{const result=scope.errorBubble();return result.$invalid&&result.$dirty}),(active=>{scope.active=active,active&&element&&(scope.style.left=element.offsetWidth+2)})),scope.getFormErrorMessages=getFormErrorMessages}}}]),angularModule.directive("rgEqualValue",(function rgEqualValueDirective(){return{require:"ngModel",link:function link(scope,iElement,iAttrs,ngModelCtrl){const element=iElement[0];function assertEqual(thisValue,thatValue){ngModelCtrl.$setValidity("equalvalue",thisValue===thatValue)}scope.$watch(iAttrs.rgEqualValue,(value=>{assertEqual(element.value,value)})),element.addEventListener("keyup",(()=>{const thatValue=scope.$eval(iAttrs.rgEqualValue);scope.$apply((()=>{assertEqual(element.value,thatValue)}))}))}}})),angularModule.filter("rgInputClass",(()=>(input,submitted)=>({"ring-input":!0,"ring-input_error":input.$invalid&&(input.$dirty||submitted),"ring-input_correct":!input.$invalid&&(input.$dirty||submitted)}))),angularModule.directive("rgFormAutofillFix",["$timeout",$timeout=>({require:"?form",priority:10,link:function link($scope,element,attrs,form){if(form){const POLL_INTERVAL=150,MAX_COUNT=5;let promise,count=0;!function poll(){let filled;angular__WEBPACK_IMPORTED_MODULE_0___default().forEach(element.find("input"),(elem=>{const $elem=angular__WEBPACK_IMPORTED_MODULE_0___default().element(elem),controller=$elem.controller("ngModel"),val=$elem.val(),type=$elem.attr("type");controller&&val&&"checkbox"!==type&&"radio"!==type&&(controller.$setViewValue(val),filled=!0)})),(!filled||count<MAX_COUNT)&&(promise=$timeout(poll,POLL_INTERVAL),count++)}(),element.on("$destroy",(()=>{$timeout.cancel(promise)}))}}})]);const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/icon-ng/icon-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/icon__constants.ts"),_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/template-ng/template-ng.js"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.css"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.icon",[_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__.Z]);angularModule.directive("rgIcon",(function rgIconDirective(){return{restrict:"E",scope:{glyph:"@",loading:"=?",color:"@?",size:"@?",height:"@?",width:"@?"},template:`<span class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().icon}" rg-template="normalizedGlyph" rg-template-class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().glyph}"></span>`,controller:["$scope",$scope=>{$scope.$watch("glyph",(value=>{value&&($scope.normalizedGlyph=function decodeBase64IfNeeded(glyph){return 0===glyph.indexOf("data:image/svg+xml;base64,")?window.atob(glyph.replace("data:image/svg+xml;base64,","")):glyph}(value))}))}],link:function link(scope,iElement,iAttrs){iAttrs.$addClass("ring-icon"),scope.$watch("loading",(value=>{value?iAttrs.$addClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading):iAttrs.$removeClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading)})),scope.$watch((()=>scope.color&&_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]&&_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default()[_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]]),((colorClass,prevColorClass)=>{colorClass&&(iAttrs.$addClass(colorClass),prevColorClass&&prevColorClass!==colorClass&&iAttrs.$removeClass(prevColorClass))})),scope.$watchGroup(["size","width","height"],(_ref=>{let[size,width,height]=_ref;const svgNode=iElement[0].querySelector("svg");if(svgNode)if(!size||width||height)width&&svgNode.setAttribute("style",`width: ${width}px;`),height&&svgNode.setAttribute("style",`height: ${height}px;`);else{const sizeString=`${size}px`,style=`width: ${sizeString}; height: ${sizeString};`;svgNode.setAttribute("style",style)}}))}}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/input-ng/input-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_jetbrains_icons_close__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@jetbrains/icons/close.js"),_jetbrains_icons_close__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_jetbrains_icons_close__WEBPACK_IMPORTED_MODULE_2__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/global/ring-angular-component.js"),_input_input_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/input/input.css"),_input_input_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_input_input_css__WEBPACK_IMPORTED_MODULE_3__),_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/button-ng/button-ng.js"),_input_ng_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/input-ng/input-ng.css"),_input_ng_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_input_ng_css__WEBPACK_IMPORTED_MODULE_4__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.input",[_button_ng_button_ng__WEBPACK_IMPORTED_MODULE_5__.Z]);class RingInputComponent extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_6__.Z{static require={ngModelCtrl:"?ngModel"};static bindings={name:"@",required:"@",ngMinlength:"@",ngMaxlength:"@",placeholder:"@",ngModel:"<",onChange:"&",label:"@",hint:"@",size:"@",disabled:"@",active:"<",error:"@",empty:"<",clearable:"<",borderless:"<",multiline:"<"};$onInit(){this.closeIcon=_jetbrains_icons_close__WEBPACK_IMPORTED_MODULE_2___default(),this.ngModelCtrl&&(this.ngModelCtrl.$render=()=>{this.value=this.ngModelCtrl.$viewValue})}onInputChange(){this.ngModelCtrl&&this.ngModelCtrl.$setViewValue(this.value)}stretch(el){el&&(el.style.height=`${el.scrollHeight}px`)}onKeyUp(){this.inputNode||(this.inputNode=this.$inject.$element[0].querySelector('[data-test="ring-input"]')),this.multiline&&this.inputNode.scrollHeight>this.inputNode.clientHeight&&this.stretch(this.inputNode)}onClear(){this.value=""}getContainerClasses(){return classnames__WEBPACK_IMPORTED_MODULE_1___default()(_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().outerContainer,this.size?[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default()[`size${this.size}`]]:null,_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().heightS,{[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().active]:this.active,[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().error]:null!=this.error,[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().empty]:!this.value,[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().noLabel]:!this.label,[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().clearable]:this.clearable,[_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().borderless]:this.borderless})}static template=`\n<div\n  data-test="ring-input-container"\n  ng-class="$ctrl.getContainerClasses()"\n>\n  <label\n    ng-if="!$ctrl.borderless"\n    class="${_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().label}"\n  >{{$ctrl.label}}</label>\n  <div class="${_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().container}">\n    <input\n      aria-label="{{$ctrl.label || $ctrl.placeholder}}"\n      type="text"\n      data-test="ring-input"\n      class="${_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().input}"\n      name="{{$ctrl.name}}"\n      ng-if="!$ctrl.multiline"\n      placeholder="{{$ctrl.placeholder}}"\n      ng-model="$ctrl.value"\n      ng-required="$ctrl.required"\n      ng-disabled="$ctrl.disabled"\n      ng-minlength="$ctrl.ngMinlength"\n      ng-maxlength="$ctrl.ngMaxlength"\n      ng-change="$ctrl.onInputChange()"\n      ng-keyup="$ctrl.onKeyUp()"\n    />\n\n    <textarea\n      aria-label="{{$ctrl.label || $ctrl.placeholder}}"\n      data-test="ring-input"\n      ng-if="$ctrl.multiline"\n      class="${_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().input}"\n      rows="1"\n      name="{{$ctrl.name}}"\n      placeholder="{{$ctrl.placeholder}}"\n      ng-model="$ctrl.value"\n      ng-required="$ctrl.required"\n      ng-disabled="$ctrl.disabled"\n      ng-minlength="$ctrl.ngMinlength"\n      ng-maxlength="$ctrl.ngMaxlength"\n      ng-change="$ctrl.onInputChange()"\n      ng-keyup="$ctrl.onKeyUp()"\n    ></textarea>\n\n    <rg-button\n      ng-if="$ctrl.clearable"\n      data-test="ring-input-clear"\n      class="${_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().clear} ${_input_ng_css__WEBPACK_IMPORTED_MODULE_4___default().clear}"\n      icon="{{:: $ctrl.closeIcon}}"\n      ng-click="$ctrl.onClear()"\n    ></rg-button>\n  </div>\n\n  <div ng-if="!$ctrl.borderless && $ctrl.error" class="${_input_input_css__WEBPACK_IMPORTED_MODULE_3___default().errorText} ${_input_ng_css__WEBPACK_IMPORTED_MODULE_4___default().errorText}">{{$ctrl.error}}</div>\n</div>\n  `}RingInputComponent.$inject=["$element"],angularModule.component("rgInput",RingInputComponent);const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./src/proxy-attrs/proxy-attrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function proxyAttrs(template,attrsWhitelist){return function copyAttrs(iElement,iAttrs){const attrsList=attrsWhitelist||Object.keys(iAttrs.$attr);let resultTemplate=template;return attrsList.forEach((attrName=>{if(void 0!==iAttrs[attrName]){const attrLower=iAttrs.$attr[attrName],attrValue=iAttrs[attrName],attrFind=`data-proxy-${attrLower}`.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),attrReplace=`${attrLower}="${attrValue}"`;resultTemplate=resultTemplate.replace(RegExp(`${attrFind}(="")*`,"g"),attrReplace)}})),resultTemplate}}},"./src/template-ng/template-ng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/ring-angular-component.js");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.template",[]);class RgTemplateController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__.Z{currentScope=null;constructor(){super(...arguments);const{$scope,$attrs}=this.$inject;$scope.$watch($attrs.rgTemplate||$attrs.template,this.render)}render=template=>{const{$scope,$element,$compile}=this.$inject;this.cleanup(),this.currentScope=$scope.$new(),this.currentScope.$evalAsync((()=>{$element.html(template),this.addInnerClass(),$compile($element.contents())(this.currentScope)}))};addInnerClass=()=>{const{rgTemplateClass}=this.$inject.$attrs;rgTemplateClass&&this.$inject.$element.contents().addClass(rgTemplateClass)};cleanup(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}RgTemplateController.$inject=[],RgTemplateController.$inject=["$scope","$element","$attrs","$compile"],angularModule.directive("rgTemplate",(function rgTemplateDirective(){return{controller:RgTemplateController}}));const __WEBPACK_DEFAULT_EXPORT__=angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button-ng/button-ng.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable-next-line selector-type-no-unknown */\n.ringIconDefaultColor_eb36 rg-icon,\n.ringIconDefaultColor_eb36 .ring-icon {\n  color: var(--ring-icon-secondary-color);\n}\n\n.iconMarginFix_b792.iconMarginFix_b792 {\n  margin-right: 0;\n}\n\n.transcludeSpacer_a566:not(:empty) {\n  margin-left: 4px;\n}\n\n.buttonWithoutIcon_c7f7 .iconNg_cb23 {\n  display: none;\n}\n\n.narrowRight_ea8f {\n  padding-right: 12px;\n}\n","",{version:3,sources:["webpack://./src/button-ng/button-ng.css"],names:[],mappings:"AAEA,yDAAyD;AACzD;;EAEE,uCAAuC;AACzC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n/* stylelint-disable-next-line selector-type-no-unknown */\n.ringIconDefaultColor rg-icon,\n.ringIconDefaultColor :global(.ring-icon) {\n  color: var(--ring-icon-secondary-color);\n}\n\n.iconMarginFix.iconMarginFix {\n  margin-right: 0;\n}\n\n.transcludeSpacer:not(:empty) {\n  margin-left: 4px;\n}\n\n.buttonWithoutIcon .iconNg {\n  display: none;\n}\n\n.narrowRight {\n  padding-right: 12px;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ringIconDefaultColor:"ringIconDefaultColor_eb36",iconMarginFix:"iconMarginFix_b792",transcludeSpacer:"transcludeSpacer_a566",buttonWithoutIcon:"buttonWithoutIcon_c7f7",iconNg:"iconNg_cb23",narrowRight:"narrowRight_ea8f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/input-ng/input-ng.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".errorText_ccd5 {\n  height: auto;\n}\n\n.clear_bc99.clear_bc99 {\n  position: absolute;\n}\n","",{version:3,sources:["webpack://./src/input-ng/input-ng.css"],names:[],mappings:"AAAA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB",sourcesContent:[".errorText {\n  height: auto;\n}\n\n.clear.clear {\n  position: absolute;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={errorText:"errorText_ccd5",clear:"clear_bc99"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/button-ng/button-ng.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/button-ng/button-ng.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/input-ng/input-ng.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/input-ng/input-ng.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);