(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[9578],{"./node_modules/@jetbrains/icons/chevron-10px.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><polygon points="5 7.99 1.5 4.5 2.5 3.5 5 6.01 7.5 3.5 8.49 4.5 5 7.99"/></g></svg>'},"./node_modules/@jetbrains/icons/pencil.js":function(module){module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.55,4.6h0L11.37,1.41h0a1.29,1.29,0,0,0-.88-.35,1.33,1.33,0,0,0-.94.39L2.28,8.72a1.29,1.29,0,0,0-.37.72L1,15l5.58-.93a1.29,1.29,0,0,0,.72-.37l7.26-7.26A1.31,1.31,0,0,0,14.55,4.6ZM10.2,2.78l3,3L6.94,12.1l-3-3ZM2.92,11.9h0l.26-1.59,2.5,2.5-1.57.26Z"/></g></svg>'},"./.storybook/angular-decorator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{i:function(){return APP_NAME}});var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api");const APP_NAME="ring-ui.story.app",angularDecorator=story=>{const node=document.createElement("div");node.innerHTML=story();const app=angular__WEBPACK_IMPORTED_MODULE_0___default().bootstrap(node,[APP_NAME],{strictDi:!0});return(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{app.get("$rootScope").$destroy(),node.innerHTML=""})),node};__webpack_exports__.Z=()=>angularDecorator},"./src/avatar-editor-ng/avatar-editor-ng.examples.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return avatar_editor_ng_examples}});var angular=__webpack_require__("./node_modules/angular/index.js"),angular_default=__webpack_require__.n(angular),angular_decorator=__webpack_require__("./.storybook/angular-decorator.js"),pencil=__webpack_require__("./node_modules/@jetbrains/icons/pencil.js"),pencil_default=__webpack_require__.n(pencil),message_bundle_ng=__webpack_require__("./src/message-bundle-ng/message-bundle-ng.js"),alert_service=__webpack_require__("./src/alert-service/alert-service.tsx"),icon_ng=__webpack_require__("./src/icon-ng/icon-ng.js");__webpack_require__("./src/avatar-editor-ng/avatar-editor-ng.css");const angularModule=angular_default().module("Ring.avatar-editor",[message_bundle_ng.Z,icon_ng.Z]);angularModule.directive("rgAvatarEditor",(function rgAvatarEditor(){return{restrict:"E",scope:{model:"=ngModel",onSelect:"&",default:"@",ngDisabled:"=",showDeleteButton:"=?",showAddButton:"=?",deleteLabel:"@",addMessage:"@"},template:'<div>\n  <div ng-click="!ngDisabled && controls.select()" class="ring-avatar-editor__frame" ng-class="{\n        \'ring-avatar-editor_controlled\': controlled,\n        \'ring-avatar-editor\': !ngDisabled\n    }" ng-show="model || default">\n    <img alt="Avatar" class="ring-avatar-editor__img" ng-src="{{ model }}" ng-show="model">\n    <img alt="Default avatar" class="ring-avatar-editor__img" ng-src="{{ default }}"\n         ng-show="!model && default" ng-click="!ngDisabled && controls.select()">\n    <rg-icon glyph="{{editIcon}}" size="16" class="ring-avatar-editor__icon" ng-if="!ngDisabled"></rg-icon>\n  </div>\n  <input class="ring-avatar-editor__file-input" rg-avatar-editor-file-input type="file" ng-model="fileInput" accept="image/*" ng-if="!ngDisabled">\n\n  <rg-button\n    delayed="true"\n    ng-disabled="ngDisabled"\n    ng-if="showAddButton && !model && !default"\n    ng-click="controls.select()"\n  >{{ getAddMessage() }}</rg-button>\n\n  <rg-button\n    ng-if="showDeleteButton&& model && !ngDisabled"\n    danger="true"\n    class="ring-avatar-editor__remove"\n    ng-click="controls.remove()"\n  >\n    <span translate>{{ getDeleteLabel() }}</span>\n  </rg-button>\n</div>',transclude:!0,controller:["$scope","$attrs","RingMessageBundle",function controller($scope,$attrs,RingMessageBundle){let fileInput;function createFileLoadListener(file){return readEvent=>{const data=readEvent.target.result,result=$scope.onSelect({name:file.name,data:data});result&&result.then?result.then((()=>{$scope.model=data})):!1!==result&&$scope.$apply((()=>{$scope.model=data}))}}function onClick(e){e.stopPropagation()}$scope.editIcon=pencil_default(),$scope.showAddButton=!("showAddButton"in $scope)||$scope.showAddButton,$scope.showDeleteButton=!("showDeleteButton"in $scope)||$scope.showDeleteButton,"controls"in $attrs&&($scope.controlled=!0),this.registerFileInput=input=>{fileInput=input,fileInput.addEventListener("change",(e=>{let imageFileSelected=!1;for(let i=0;i<e.target.files.length;i++){const file=e.target.files[i];if(0===file.type.indexOf("image/")){imageFileSelected=!0;const reader=new FileReader;reader.onload=createFileLoadListener(file),reader.readAsDataURL(file);break}}e.target.files.length&&!imageFileSelected&&alert_service.Z.error(RingMessageBundle.avatareditor_noselected())}))},$scope.controls={},$scope.controls.select=()=>{FileReader?(fileInput.addEventListener("click",onClick),fileInput.dispatchEvent(new MouseEvent("click")),fileInput.removeEventListener("click",onClick)):alert_service.Z.error(RingMessageBundle.avatareditor_nosupport())},$scope.controls.remove=()=>{const result=$scope.onSelect({name:"",data:""});result&&result.then?result.then((()=>{$scope.model=""})):!1!==result&&($scope.model="")},$scope.getDeleteLabel=()=>$scope.deleteLabel||RingMessageBundle.avatareditor_delete(),$scope.getAddMessage=()=>$scope.addMessage||RingMessageBundle.avatareditor_add()}]}})),angularModule.directive("rgAvatarEditorFileInput",(function rgAvatarEditorFileInput(){return{restrict:"A",require:"^rgAvatarEditor",link:function link(scope,iElement,iAttrs,avatarEditorCtrl){avatarEditorCtrl.registerFileInput(iElement[0])}}}));var avatar_editor_ng_avatar_editor_ng=angularModule.name,avatar_editor_ng_examples={title:"Legacy Angular/Avatar Editor Ng",decorators:[(0,angular_decorator.Z)()],parameters:{storySource:{source:'import angular from \'angular\';\n\nimport angularDecorator, {APP_NAME} from \'../../.storybook/angular-decorator\';\n\nimport AvatarEditorNG from \'./avatar-editor-ng\';\n\nexport default {\n  title: \'Legacy Angular/Avatar Editor Ng\',\n  decorators: [angularDecorator()],\n\n  parameters: {\n    notes:\n      \'Allows to choose images to be uploaded as Data URI. On-select attribute will receive the * filename as `name` and the file contents as `data`.\',\n    hermione: {skip: true}\n  }\n};\n\nexport const basic = () => {\n  angular.module(APP_NAME, [AvatarEditorNG]).controller(\'testCtrl\', function controller() {\n    this.data = `data:image/svg+xml;utf8,\n          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="60" cy="60" r="50" style="fill: #00cc00"/>\n          </svg>\n        `;\n  });\n\n  return `\n      <div ng-controller="testCtrl as ctrl">\n        <rg-avatar-editor\n          on-select="ctrl.name = name"\n          delete-label="Clear"\n          ng-model="ctrl.data"\n        ></rg-avatar-editor>\n\n        <h3>{{ ctrl.name || \'No file name\' }}</h3>\n        <img alt="Avatar" style="max-width: 300px; max-height: 300px;" ng-src="{{ctrl.data}}" />\n      </div>\n    `;\n};\n\nbasic.storyName = \'Avatar Editor Ng\';\n',locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:1,line:39},startBody:{col:21,line:18},endBody:{col:1,line:39}}}},notes:"Allows to choose images to be uploaded as Data URI. On-select attribute will receive the * filename as `name` and the file contents as `data`.",hermione:{skip:!0}}};const basic=()=>(angular_default().module(angular_decorator.i,[avatar_editor_ng_avatar_editor_ng]).controller("testCtrl",(function controller(){this.data='data:image/svg+xml;utf8,\n          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="60" cy="60" r="50" style="fill: #00cc00"/>\n          </svg>\n        '})),'\n      <div ng-controller="testCtrl as ctrl">\n        <rg-avatar-editor\n          on-select="ctrl.name = name"\n          delete-label="Clear"\n          ng-model="ctrl.data"\n        ></rg-avatar-editor>\n\n        <h3>{{ ctrl.name || \'No file name\' }}</h3>\n        <img alt="Avatar" style="max-width: 300px; max-height: 300px;" ng-src="{{ctrl.data}}" />\n      </div>\n    ');basic.storyName="Avatar Editor Ng"},"./src/alert-service/alert-service.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/global/react-render-adapter.ts"),_global_get_uid__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/get-uid.ts"),_alert_alert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/alert/container.tsx"),_alert_alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/alert/alert.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const alertService=new class AlertService{defaultTimeout=0;showingAlerts=[];containerElement=document.createElement("div");_getShowingAlerts(){return[...this.showingAlerts]}renderAlertContainer(alerts){return 0===alerts.length?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_alert__WEBPACK_IMPORTED_MODULE_1__.Z,null,alerts.map((alert=>{const{message:message,key:key,...rest}=alert;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP,_extends({key:key},rest),message)})))}renderAlerts(){(0,_global_react_render_adapter__WEBPACK_IMPORTED_MODULE_3__.sY)(this.renderAlertContainer(this.showingAlerts),this.containerElement)}findSameAlert(message,type){return this.showingAlerts.filter((it=>it.type===type&&it.message===message))[0]}startAlertClosing(alert){alert.isClosing=!0,this.renderAlerts()}remove(key){const alertToClose=this.showingAlerts.filter((alert=>alert.key===key))[0];alertToClose&&this.startAlertClosing(alertToClose)}removeWithoutAnimation(key){this.showingAlerts=this.showingAlerts.filter((alert=>alert.key!==key)),this.renderAlerts()}stopShakingWhenAnimationDone(shakingAlert){setTimeout((()=>{shakingAlert.showWithAnimation=!1,shakingAlert.isShaking=!1,this.renderAlerts()}),_alert_alert__WEBPACK_IMPORTED_MODULE_2__.o)}addAlert(message,type){let timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.defaultTimeout,options=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{onCloseRequest:onCloseRequest,onClose:onClose,...restOptions}=options,sameAlert=this.findSameAlert(message,type);if(sameAlert)return sameAlert.isShaking=!0,this.renderAlerts(),this.stopShakingWhenAnimationDone(sameAlert),sameAlert.key;const alert={key:(0,_global_get_uid__WEBPACK_IMPORTED_MODULE_4__.Z)("alert-service-"),message:message,type:type,timeout:timeout,isClosing:!1,onCloseRequest:()=>{onCloseRequest&&onCloseRequest(),this.startAlertClosing(alert)},onClose:()=>{onClose&&onClose(),this.removeWithoutAnimation(alert.key)},...restOptions};return this.showingAlerts=[alert,...this.showingAlerts],this.renderAlerts(),alert.key}setDefaultTimeout(timeout){this.defaultTimeout=timeout}error(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.ERROR,timeout)}message(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.MESSAGE,timeout)}warning(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.WARNING,timeout)}successMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.SUCCESS,timeout)}loadingMessage(message,timeout){return this.addAlert(message,_alert_alert__WEBPACK_IMPORTED_MODULE_2__.ZP.Type.LOADING,timeout)}};__webpack_exports__.Z=alertService},"./src/global/ring-angular-component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return RingAngularComponent}});class RingAngularComponent{static get controller(){return this}$inject={};constructor(){for(var _this$constructor$$in,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(null!==(_this$constructor$$in=this.constructor.$inject)&&void 0!==_this$constructor$$in?_this$constructor$$in:[]).forEach(((injectName,i)=>{this.$inject[injectName]=args[i]}))}}},"./src/icon-ng/icon-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icon/icon__constants.ts"),_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/template-ng/template-ng.js"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.css"),_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1__);const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.icon",[_template_ng_template_ng__WEBPACK_IMPORTED_MODULE_2__.Z]);angularModule.directive("rgIcon",(function rgIconDirective(){return{restrict:"E",scope:{glyph:"@",loading:"=?",color:"@?",size:"@?",height:"@?",width:"@?"},template:`<span class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().icon}" rg-template="normalizedGlyph" rg-template-class="${_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().glyph}"></span>`,controller:["$scope",$scope=>{$scope.$watch("glyph",(value=>{value&&($scope.normalizedGlyph=function decodeBase64IfNeeded(glyph){return 0===glyph.indexOf("data:image/svg+xml;base64,")?window.atob(glyph.replace("data:image/svg+xml;base64,","")):glyph}(value))}))}],link:function link(scope,iElement,iAttrs){iAttrs.$addClass("ring-icon"),scope.$watch("loading",(value=>{value?iAttrs.$addClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading):iAttrs.$removeClass(_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default().loading)})),scope.$watch((()=>scope.color&&_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]&&_icon_icon_css__WEBPACK_IMPORTED_MODULE_1___default()[_icon_icon_constants__WEBPACK_IMPORTED_MODULE_3__.I[scope.color]]),((colorClass,prevColorClass)=>{colorClass&&(iAttrs.$addClass(colorClass),prevColorClass&&prevColorClass!==colorClass&&iAttrs.$removeClass(prevColorClass))})),scope.$watchGroup(["size","width","height"],(_ref=>{let[size,width,height]=_ref;const svgNode=iElement[0].querySelector("svg");if(svgNode)if(!size||width||height)width&&svgNode.setAttribute("style",`width: ${width}px;`),height&&svgNode.setAttribute("style",`height: ${height}px;`);else{const sizeString=`${size}px`,style=`width: ${sizeString}; height: ${sizeString};`;svgNode.setAttribute("style",style)}}))}}})),__webpack_exports__.Z=angularModule.name},"./src/message-bundle-ng/message-bundle-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js");const angularModule=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__)().module("Ring.message-bundle",[]);angularModule.factory("ringI18n",(function emptyI18n(){return str=>str})),angularModule.service("RingMessageBundle",["ringI18n",function RingMessageBundle(ringI18n){const i18n=ringI18n;this.form_required=()=>i18n("Value is required"),this.form_invalid=()=>i18n("Value is invalid"),this.form_url=()=>i18n("Should be a valid URL"),this.form_email=()=>i18n("Should be a valid email"),this.form_number=()=>i18n("Should be a number"),this.form_maxlength=()=>i18n("Is too long"),this.form_minlength=()=>i18n("Is too short"),this.form_pattern=()=>i18n("Doesn't match the pattern"),this.form_equalvalue=()=>i18n("Is not the same"),this.form_unique=()=>i18n("Is not unique"),this.form_max=()=>i18n("Is out of range"),this.form_min=()=>i18n("Is out of range"),this.form_save=()=>i18n("Save"),this.form_saved=()=>i18n("Saved"),this.form_cancel=()=>i18n("Cancel"),this.avatareditor_nosupport=()=>i18n("Sorry, your browser doesn't support File API"),this.avatareditor_noselected=()=>i18n("No image file was selected"),this.avatareditor_delete=()=>i18n("Delete Image"),this.avatareditor_add=()=>i18n("Add Image"),this.errorpage_seriouslywrong=()=>i18n("Oh-oh... Something went seriously wrong."),this.errorpage_offline=()=>i18n("There's nothing we can do: The server seems to be offline."),this.errorpage_disconnected=()=>i18n("Disconnected"),this.errorpage_disconnectedmsg=()=>i18n("No, no one's there."),this.errorpage_401=()=>i18n("Authorization required"),this.errorpage_401msg=()=>i18n("You have requested access to a page that requires authorization, but the request is missing valid authentication credentials. It can also mean that your account has been banned."),this.errorpage_403=()=>i18n("Woah, you can't touch this!"),this.errorpage_403msg=()=>i18n("Unfortunately, you are not allowed to access the page you've requested. It seems you don't have sufficient permissions."),this.errorpage_404=()=>i18n("Nope, can't find it!"),this.errorpage_404msg=()=>i18n("Despite our best efforts, there's nothing here to show you with the URL you requested. Most likely the URL is invalid or you don't have permissions to access the page."),this.errorpage_500=()=>i18n("Oh-oh... Something went seriously wrong"),this.errorpage_500msg=()=>i18n("Despite our best efforts, the server is not working properly."),this.select_options_not_found=()=>i18n("No options found"),this.select_loading=()=>i18n("Loading..."),this.select_label=()=>i18n("Select an option"),this.previous_page=()=>i18n("previous"),this.next_page=()=>i18n("next page"),this.first_page=()=>i18n("First page"),this.last_page=()=>i18n("Last page"),this.items_per_page=()=>i18n("per page"),this.confirmation_ok=()=>i18n("Ok"),this.confirmation_cancel=()=>i18n("Cancel")}]),__webpack_exports__.Z=angularModule.name},"./src/template-ng/template-ng.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/angular/index.js"),angular__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__),_global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/global/ring-angular-component.js");const angularModule=angular__WEBPACK_IMPORTED_MODULE_0___default().module("Ring.template",[]);class RgTemplateController extends _global_ring_angular_component__WEBPACK_IMPORTED_MODULE_1__.Z{currentScope=null;constructor(){super(...arguments);const{$scope:$scope,$attrs:$attrs}=this.$inject;$scope.$watch($attrs.rgTemplate||$attrs.template,this.render)}render=template=>{const{$scope:$scope,$element:$element,$compile:$compile}=this.$inject;this.cleanup(),this.currentScope=$scope.$new(),this.currentScope.$evalAsync((()=>{$element.html(template),this.addInnerClass(),$compile($element.contents())(this.currentScope)}))};addInnerClass=()=>{const{rgTemplateClass:rgTemplateClass}=this.$inject.$attrs;rgTemplateClass&&this.$inject.$element.contents().addClass(rgTemplateClass)};cleanup(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}RgTemplateController.$inject=[],RgTemplateController.$inject=["$scope","$element","$attrs","$compile"],angularModule.directive("rgTemplate",(function rgTemplateDirective(){return{controller:RgTemplateController}})),__webpack_exports__.Z=angularModule.name},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/avatar-editor-ng/avatar-editor-ng.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'/* stylelint-disable selector-max-specificity */\n\n.ring-avatar-editor {\n  position: relative;\n\n  width: 40px;\n  height: 40px;\n  padding: 1px;\n\n  text-align: center;\n}\n\n.ring-avatar-editor::after {\n    display: inline-block;\n\n    width: 0;\n    height: 40px;\n\n    content: "";\n    vertical-align: middle;\n  }\n\n.ring-avatar-editor_right {\n  float: right;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.ring-avatar-editor:hover:not(:disabled, .ring-avatar-editor_controlled) {\n  padding: 0;\n\n  border: 1px solid var(--ring-link-hover-color);\n}\n\n  .ring-avatar-editor:hover:not(:disabled, .ring-avatar-editor_controlled) .ring-avatar-editor__icon {\n    visibility: visible;\n  }\n\n  .ring-avatar-editor:hover:not(:disabled, .ring-avatar-editor_controlled) .ring-avatar-editor__img {\n    outline: 0;\n  }\n\n  .ring-avatar-editor:hover:not(:disabled, .ring-avatar-editor_controlled)::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    content: "";\n\n    background-color: rgba(0, 0, 0, 0.8);\n  }}\n\n.ring-avatar-editor__img {\n  max-width: 40px;\n  max-height: 40px;\n\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.ring-avatar-editor__file-input {\n  position: absolute;\n  left: -10000px;\n\n  visibility: hidden;\n}\n\n.ring-avatar-editor__icon {\n  position: absolute;\n  top: 10px;\n  left: 0;\n\n  visibility: hidden;\n\n  width: 100%;\n\n  color: var(--ring-content-background-color);\n\n  line-height: 14px;\n}\n\n.ring-avatar-editor__frame {\n  display: inline-block;\n\n  padding: 0;\n\n  cursor: pointer;\n  vertical-align: top;\n\n  border: 1px solid var(--ring-disabled-color);\n}\n\n.ring-avatar-editor__remove {\n  display: inline-block;\n\n  margin-left: 16px;\n\n  vertical-align: top;\n}\n',"",{version:3,sources:["webpack://./src/avatar-editor-ng/avatar-editor-ng.css","<no source>"],names:[],mappings:"AAIA,+CAA+C;;AAE/C;EACE,kBAAkB;;EAElB,WAAqB;EACrB,YAAsB;EACtB,YAAY;;EAEZ,kBAAkB;AAWpB;;AATE;IACE,qBAAqB;;IAErB,QAAQ;IACR,YAAsB;;IAEtB,WAAW;IACX,sBAAsB;EACxB;;AAGF;EACE,YAAY;AACd;;AC5BA,wGAAA;EAAA,WAAA;;EAAA,+CAAA;CAAA;;EAAA;IAAA,oBAAA;GAAA;;EAAA;IAAA,WAAA;GAAA;;EAAA;IAAA,mBAAA;IAAA,OAAA;IAAA,QAAA;;IAAA,YAAA;IAAA,aAAA;;IAAA,YAAA;;IAAA,qCAAA;GAAA,CAAA;;ADyDA;EACE,eAAyB;EACzB,gBAA0B;;EAE1B,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,cAAc;;EAEd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;;EAEP,kBAAkB;;EAElB,WAAW;;EAEX,2CAA2C;;EAE3C,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;;EAErB,UAAU;;EAEV,eAAe;EACf,mBAAmB;;EAEnB,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;;EAErB,iBAA2B;;EAE3B,mBAAmB;AACrB",sourcesContent:['@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n\n/* stylelint-disable selector-max-specificity */\n\n:global(.ring-avatar-editor) {\n  position: relative;\n\n  width: calc(unit * 5);\n  height: calc(unit * 5);\n  padding: 1px;\n\n  text-align: center;\n\n  &::after {\n    display: inline-block;\n\n    width: 0;\n    height: calc(unit * 5);\n\n    content: "";\n    vertical-align: middle;\n  }\n}\n\n:global(.ring-avatar-editor_right) {\n  float: right;\n}\n\n:global(.ring-avatar-editor:hover:not(:disabled, .ring-avatar-editor_controlled)) {\n  padding: 0;\n\n  border: 1px solid var(--ring-link-hover-color);\n\n  & :global(.ring-avatar-editor__icon) {\n    visibility: visible;\n  }\n\n  & :global(.ring-avatar-editor__img) {\n    outline: 0;\n  }\n\n  &::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    content: "";\n\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n\n:global(.ring-avatar-editor__img) {\n  max-width: calc(unit * 5);\n  max-height: calc(unit * 5);\n\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n:global(.ring-avatar-editor__file-input) {\n  position: absolute;\n  left: -10000px;\n\n  visibility: hidden;\n}\n\n:global(.ring-avatar-editor__icon) {\n  position: absolute;\n  top: 10px;\n  left: 0;\n\n  visibility: hidden;\n\n  width: 100%;\n\n  color: var(--ring-content-background-color);\n\n  line-height: 14px;\n}\n\n:global(.ring-avatar-editor__frame) {\n  display: inline-block;\n\n  padding: 0;\n\n  cursor: pointer;\n  vertical-align: top;\n\n  border: 1px solid var(--ring-disabled-color);\n}\n\n:global(.ring-avatar-editor__remove) {\n  display: inline-block;\n\n  margin-left: calc(unit * 2);\n\n  vertical-align: top;\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:""+_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/link/link.css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_2__.default),___CSS_LOADER_EXPORT___.push([module.id,".link_c73c {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  outline: none;\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover {\n    text-decoration: none;\n  }}\n\n.link_c73c {\n    text-decoration: none;\n  }\n\n.link_c73c.hover_e4ca {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }}\n\n.link_c73c.active_eef2 {\n    color: inherit;\n  }\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.compatibilityUnderlineMode_a632:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.compatibilityUnderlineMode_a632:hover .inner_d16b {\n      border: none;\n    }}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c.pseudo_cb40:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n  }\n    .link_c73c.pseudo_cb40:hover .inner_d16b {\n      border: none;\n    }}\n\n.link_c73c:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_c73c:hover .inner_d16b {\n    border-bottom-width: 1px;\n  }}\n}\n\n.text_e0fe {\n  border-radius: var(--ring-border-radius);\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_c3d7:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_cb40 {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n}\n\n.pseudo_cb40::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n","",{version:3,sources:["webpack://./src/link/link.css","<no source>"],names:[],mappings:"AAEA;EACE,eAAe;EACf,uCAAuC;;EAEvC,6BAA6B;;EA2C7B,aAAa;AAKf;;ACtDA,wGAAA;IAAA,iBAAA;;IAAA,oCAAA;GAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;GAAA,CAAA;;ADQE;IAEE,qBAAqB;EACvB;;AAEA;IAEE,gBAAgB;;IAEhB,mCAAmC;EACrC;;AClBF,wGAAA;IAAA,gBAAA;IAAA,yBAAA;IAAA,wEAAA;IAAA,+BAAA;GAAA,CAAA;;AD2BE;IACE,cAAc;EAChB;;AC7BF,wGAAA;IAAA,2BAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;AAAA,wGAAA;IAAA,sBAAA;;IAAA,0DAAA;GAAA;IAAA;MAAA,aAAA;KAAA,CAAA;;ADmDE;IACE,oDAAoD;EACtD;;AAGF,qECxDA,wGAAA;IAAA,yBAAA;GAAA,CAAA;AD4DA;;AAEA;EACE,wCAAwC;AAC1C;;AChEA,wGAAA;EAAA,eAAA;CAAA,CAAA;;ADsEA;EACE,SAAS;EACT,UAAU;;EAEV,gBAAgB;;EAEhB,SAAS;;EAET,uBAAuB;;EAEvB,aAAa;AAOf;;AALE;IACE,UAAU;;IAEV,SAAS;EACX",sourcesContent:['@import "../global/variables.css";\n\n.link {\n  cursor: pointer;\n  transition: color var(--ring-fast-ease);\n\n  color: var(--ring-link-color);\n\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:hover,\n  &.hover {\n    transition: none;\n\n    color: var(--ring-link-hover-color);\n  }\n\n  &:hover .inner {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n  }\n\n  &.active {\n    color: inherit;\n  }\n\n  &.compatibilityUnderlineMode:hover {\n    text-decoration: underline;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  &.pseudo:hover {\n    text-decoration: none;\n\n    /* stylelint-disable-next-line selector-max-specificity */\n    & .inner {\n      border: none;\n    }\n  }\n\n  outline: none;\n\n  &:focus-visible {\n    box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n  }\n}\n\n@media (min-resolution: 2dppx) {\n  .link:hover .inner {\n    border-bottom-width: 1px;\n  }\n}\n\n.text {\n  border-radius: var(--ring-border-radius);\n}\n\n.inherit:not(:hover) {\n  color: inherit;\n}\n\n.pseudo {\n  margin: 0;\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit;\n\n  &::-moz-focus-inner {\n    padding: 0;\n\n    border: 0;\n  }\n}\n',null],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link_c73c",hover:"hover_e4ca",inner:"inner_d16b",active:"active_eef2",compatibilityUnderlineMode:"compatibilityUnderlineMode_a632",pseudo:"pseudo_cb40",text:"text_e0fe",inherit:"inherit_c3d7"},__webpack_exports__.default=___CSS_LOADER_EXPORT___},"./src/avatar-editor-ng/avatar-editor-ng.css":function(module,__unused_webpack_exports,__webpack_require__){var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/avatar-editor-ng/avatar-editor-ng.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./node_modules/util-deprecate/browser.js":function(module,__unused_webpack_exports,__webpack_require__){function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}}}]);