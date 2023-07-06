(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[1205],{"./node_modules/@jetbrains/icons/close-12px.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"/></svg>'},"./src/tag/tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Tag});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@jetbrains/icons/close-12px.js"),_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2__),_icon_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/icon/icon.tsx"),_button_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/button/button.tsx"),_global_controls_height__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/global/controls-height.tsx"),_tag_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tag/tag.css"),_tag_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_tag_css__WEBPACK_IMPORTED_MODULE_3__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class Tag extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={onRemove:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,rgTagIcon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType]),icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,avatar:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,rgTagTitle:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,readOnly:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,focused:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,angled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,textColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,render:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func};static defaultProps={onRemove:()=>{},onClick:()=>{},readOnly:!1,disabled:!1,focused:!1,render:props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_extends({type:"button"},props))};state={focused:!1};componentDidUpdate(prevProps){this.props.focused!==prevProps.focused&&this.setState({focused:this.props.focused}),this.state.focused&&this.tagNode?.focus(),this.setDocumentClickListener(this.state.focused)}componentWillUnmount(){this.setDocumentClickListener(!1),this.setState({focused:!1})}onDocumentClick=event=>{this.tagNode&&this.setState({focused:this.tagNode===event.target})};tagNode;tagRef=el=>{this.tagNode=el};setDocumentClickListener(setListener){setListener?document.addEventListener("click",this.onDocumentClick):document.removeEventListener("click",this.onDocumentClick)}renderCustomIcon(){return this.props.rgTagIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_5__.ZP,{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().icon,title:this.props.rgTagTitle,glyph:this.props.rgTagIcon}):null}_renderImageElement(avatarSrc){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()({[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().customIcon]:this.props.icon,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().avatarIcon]:avatarSrc});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:avatarSrc?"Avatar":"Icon",className:classes,src:avatarSrc||this.props.icon})}renderImage(){return this.props.icon&&!this.props.avatar?this._renderImageElement():null}renderAvatar(){return this.props.avatar?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().avatarContainer},this._renderImageElement(this.props.avatar)):null}renderRemoveIcon(){return this.props.readOnly?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_button__WEBPACK_IMPORTED_MODULE_6__.ZP,{title:"Remove",icon:_jetbrains_icons_close_12px__WEBPACK_IMPORTED_MODULE_2___default(),"data-test":"ring-tag-remove",className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().remove,iconClassName:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().removeIcon,onClick:this.props.onRemove,style:{"--ring-icon-secondary-color":this.props.textColor},height:_global_controls_height__WEBPACK_IMPORTED_MODULE_7__.oW.M})}render(){const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ring-js-shortcuts",_tag_css__WEBPACK_IMPORTED_MODULE_3___default().tag,{[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().focused]:this.state.focused,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().disabled]:this.props.disabled,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().tagAngled]:this.props.angled,[_tag_css__WEBPACK_IMPORTED_MODULE_3___default().withRemove]:!this.props.readOnly},this.props.className),{backgroundColor,textColor,render}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().container},render({"data-test":"ring-tag",className:classes,ref:this.tagRef,onClick:this.props.onClick,style:{backgroundColor,color:textColor},disabled:this.props.disabled,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,this.renderAvatar(),this.renderCustomIcon(),this.renderImage(),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_tag_css__WEBPACK_IMPORTED_MODULE_3___default().content},this.props.children))}),this.renderRemoveIcon())}}Tag.__docgenInfo={description:"@name Tag",methods:[{name:"onDocumentClick",docblock:null,modifiers:[],params:[{name:"event",type:{name:"MouseEvent",alias:"MouseEvent"}}],returns:null},{name:"tagRef",docblock:null,modifiers:[],params:[{name:"el",type:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}],returns:null},{name:"setDocumentClickListener",docblock:null,modifiers:[],params:[{name:"setListener",type:{name:"boolean"}}],returns:null},{name:"renderCustomIcon",docblock:null,modifiers:[],params:[],returns:null},{name:"renderImage",docblock:null,modifiers:[],params:[],returns:null},{name:"renderAvatar",docblock:null,modifiers:[],params:[],returns:null},{name:"renderRemoveIcon",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tag",props:{onRemove:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],return:{name:"void"}}}},onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]}}],return:{name:"void"}}}},readOnly:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},focused:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"",tsType:{name:"boolean"}},render:{defaultValue:{value:'props => <button type="button" {...props}/>',computed:!1},type:{name:"func"},required:!1,description:"",tsType:{name:"signature",type:"function",raw:"(props: TagRenderProps) => ReactNode",signature:{arguments:[{name:"props",type:{name:"TagRenderProps"}}],return:{name:"ReactNode"}}}},rgTagIcon:{type:{name:"union",value:[{name:"string"},{name:"elementType"}]},required:!1,description:"",tsType:{name:"union",raw:"string | IconType | null | undefined",elements:[{name:"string"},{name:"IconType"},{name:"null"},{name:"undefined"}]}},icon:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},avatar:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},rgTagTitle:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},angled:{type:{name:"bool"},required:!1,description:"",tsType:{name:"union",raw:"boolean | null | undefined",elements:[{name:"boolean"},{name:"null"},{name:"undefined"}]}},backgroundColor:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},textColor:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}},children:{type:{name:"node"},required:!1,description:"",tsType:{name:"ReactNode"}},className:{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tag/tag.tsx"]={name:"Tag",docgenInfo:Tag.__docgenInfo,path:"src/tag/tag.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tag/tag.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_3__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,'@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.tag_ae7d:hover,\n.tagAngled_b4d0:hover::before {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}}\n\n.tag_ae7d {\n\n  position: relative;\n  z-index: 1;\n\n  display: inline-flex;\n\n  box-sizing: border-box;\n  max-width: 100%;\n  height: 20px;\n\n  padding: 0 8px;\n\n  cursor: pointer;\n\n  vertical-align: top;\n\n  color: var(--ring-text-color);\n\n  border: none;\n  border-radius: var(--ring-border-radius);\n\n  font-size: 12px;\n  line-height: var(--ring-line-height);\n}\n\n.tag_ae7d,\n.tagAngled_b4d0::before {\n  transition: background-color var(--ring-ease);\n\n  background-color: var(--ring-tag-background-color);\n}\n\n.withRemove_d56a {\n  padding-right: 22px;\n}\n\n.container_a5d8 {\n  position: relative;\n\n  display: inline-block;\n\n  max-width: calc(100% - 4px);\n\n  margin-right: 4px;\n\n  white-space: nowrap;\n}\n\n.focused_bbe2,\n.tag_ae7d:focus-visible {\n  position: relative;\n\n  outline: none;\n  box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n}\n\n.focused_bbe2,\n.focused_bbe2.tagAngled_b4d0::before,\n.tag_ae7d:focus-visible,\n.tagAngled_b4d0:focus-visible::before {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}\n\n.tagAngled_b4d0 {\n  /* it needs to fix vertical alignment broken by "overflow: hidden". Remove this class, when IE11 will be deprecated */\n\n  margin-bottom: -5px !important;\n\n  margin-left: 8px;\n  padding-left: 4px;\n\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.tagAngled_b4d0::before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n\n    box-sizing: border-box;\n    width: 12px;\n    height: 12px;\n\n    content: "";\n    transform: scaleY(1.177) rotate(45deg);\n    transform-origin: 0 0;\n\n    border: none;\n  }\n\n.tagAngled_b4d0.focused_bbe2,\n  .tagAngled_b4d0:focus {\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color) inset, 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n.tagAngled_b4d0:focus::before {\n    box-shadow:\n      1px -1px var(--ring-border-hover-color) inset,\n      -0.8px 0.8px 0 0.5px var(--ring-border-hover-color);\n  }\n\n.content_a0ee {\n}\n\n.disabled_ffbd.tag_ae7d,\n.disabled_ffbd.tagAngled_b4d0::before {\n  pointer-events: none;\n\n  color: var(--ring-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n}\n\n.remove_eac2 {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  right: 0;\n\n  height: auto;\n  padding: 0 4px;\n\n  line-height: 16px;\n}\n\n.removeIcon_e2b4.removeIcon_e2b4 {\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon_bb17 {\n  margin-right: 6px;\n\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon_bb17 svg {\n    vertical-align: -3px;\n  }\n\n.avatarContainer_b363 {\n  display: inline-block;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  margin-right: 4px;\n  margin-left: -8px;\n\n  vertical-align: top;\n\n  border-top-left-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n}\n\n.customIcon_dbd7 {\n  max-width: 16px;\n  max-height: 16px;\n\n  margin-right: 4px;\n\n  vertical-align: bottom;\n}\n\n.avatarIcon_c087 {\n  width: 20px;\n\n  margin-right: -4px;\n\n  object-fit: contain;\n  object-position: center;\n}\n',"",{version:3,sources:["<no source>","webpack://./src/tag/tag.css"],names:[],mappings:"AAAA,wGAAA;;EAAA,iBAAA;;EAAA,yDAAA;CAAA,CAAA;;ACKA;;EAGE,kBAAkB;EAClB,UAAU;;EAEV,oBAAoB;;EAEpB,sBAAsB;EACtB,eAAe;EACf,YAAkB;;EAElB,cAAe;;EAEf,eAAe;;EAEf,mBAAmB;;EAEnB,6BAA6B;;EAE7B,YAAY;EACZ,wCAAwC;;EAExC,eAAe;EACf,oCAAoC;AACtC;;AAEA;;EAEE,6CAA6C;;EAE7C,kDAAkD;AACpD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,qBAAqB;;EAErB,2BAAgC;;EAEhC,iBAA4B;;EAE5B,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;;EAElB,aAAa;EACb,oDAAoD;AACtD;;AAEA;;;;EAME,gBAAgB;;EAEhB,wDAAwD;AAC1D;;AAEA;EACE,qHAAqH;;EAErH,8BAA8B;;EAE9B,gBAAiB;EACjB,iBAA4B;;EAE5B,yBAAyB;EACzB,4BAA4B;AA6B9B;;AA3BE;IACE,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,OAAO;;IAEP,sBAAsB;IACtB,WAAW;IACX,YAAY;;IAEZ,WAAW;IACX,sCAAsC;IACtC,qBAAqB;;IAErB,YAAY;EACd;;AAEA;;IAEE,oGAAoG;EACtG;;AAEA;IACE;;yDAEqD;EACvD;;AAGF;AAEA;;AAEA;;EAEE,oBAAoB;;EAEpB,iCAAiC;EACjC,uDAAuD;AACzD;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,QAAQ;;EAER,YAAY;EACZ,cAAyB;;EAEzB,iBAA2B;AAC7B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;;EAEjB,uCAAuC;AAKzC;;AAHE;IACE,oBAAoB;EACtB;;AAGF;EACE,qBAAqB;EACrB,gBAAgB;;EAEhB,sBAAsB;EACtB,WAAiB;EACjB,YAAkB;EAClB,iBAA4B;EAC5B,iBAA2B;;EAE3B,mBAAmB;;EAEnB,iDAAiD;EACjD,oDAAoD;AACtD;;AAEA;EACE,eAAyB;EACzB,gBAA0B;;EAE1B,iBAA4B;;EAE5B,sBAAsB;AACxB;;AAEA;EACE,WAAiB;;EAEjB,kBAAkB;;EAElB,mBAAmB;EACnB,uBAAuB;AACzB",sourcesContent:[null,'@import "../global/variables.css";\n\n@value unit from "../global/global.css";\n@value max-height: 20px;\n\n.tag {\n  composes: resetButton from "../global/global.css";\n\n  position: relative;\n  z-index: 1;\n\n  display: inline-flex;\n\n  box-sizing: border-box;\n  max-width: 100%;\n  height: max-height;\n\n  padding: 0 unit;\n\n  cursor: pointer;\n\n  vertical-align: top;\n\n  color: var(--ring-text-color);\n\n  border: none;\n  border-radius: var(--ring-border-radius);\n\n  font-size: 12px;\n  line-height: var(--ring-line-height);\n}\n\n.tag,\n.tagAngled::before {\n  transition: background-color var(--ring-ease);\n\n  background-color: var(--ring-tag-background-color);\n}\n\n.withRemove {\n  padding-right: 22px;\n}\n\n.container {\n  position: relative;\n\n  display: inline-block;\n\n  max-width: calc(100% - unit / 2);\n\n  margin-right: calc(unit / 2);\n\n  white-space: nowrap;\n}\n\n.focused,\n.tag:focus-visible {\n  position: relative;\n\n  outline: none;\n  box-shadow: 0 0 0 2px var(--ring-border-hover-color);\n}\n\n.focused,\n.focused.tagAngled::before,\n.tag:focus-visible,\n.tagAngled:focus-visible::before,\n.tag:hover,\n.tagAngled:hover::before {\n  transition: none;\n\n  background-color: var(--ring-tag-hover-background-color);\n}\n\n.tagAngled {\n  /* it needs to fix vertical alignment broken by "overflow: hidden". Remove this class, when IE11 will be deprecated */\n\n  margin-bottom: -5px !important;\n\n  margin-left: unit;\n  padding-left: calc(unit / 2);\n\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n\n  &::before {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n\n    box-sizing: border-box;\n    width: 12px;\n    height: 12px;\n\n    content: "";\n    transform: scaleY(1.177) rotate(45deg);\n    transform-origin: 0 0;\n\n    border: none;\n  }\n\n  &.focused,\n  &:focus {\n    box-shadow: 0 0 0 1px var(--ring-border-hover-color) inset, 0 0 0 1px var(--ring-border-hover-color);\n  }\n\n  &:focus::before {\n    box-shadow:\n      1px -1px var(--ring-border-hover-color) inset,\n      -0.8px 0.8px 0 0.5px var(--ring-border-hover-color);\n  }\n}\n\n.content {\n  composes: ellipsis from "../global/global.css";\n}\n\n.disabled.tag,\n.disabled.tagAngled::before {\n  pointer-events: none;\n\n  color: var(--ring-disabled-color);\n  background-color: var(--ring-disabled-background-color);\n}\n\n.remove {\n  position: absolute;\n  z-index: 1;\n  top: 2px;\n  right: 0;\n\n  height: auto;\n  padding: 0 calc(unit / 2);\n\n  line-height: calc(unit * 2);\n}\n\n.removeIcon.removeIcon {\n  color: var(--ring-icon-secondary-color);\n}\n\n.icon {\n  margin-right: 6px;\n\n  color: var(--ring-icon-secondary-color);\n\n  & svg {\n    vertical-align: -3px;\n  }\n}\n\n.avatarContainer {\n  display: inline-block;\n  overflow: hidden;\n\n  box-sizing: border-box;\n  width: max-height;\n  height: max-height;\n  margin-right: calc(unit / 2);\n  margin-left: calc(0 - unit);\n\n  vertical-align: top;\n\n  border-top-left-radius: var(--ring-border-radius);\n  border-bottom-left-radius: var(--ring-border-radius);\n}\n\n.customIcon {\n  max-width: calc(unit * 2);\n  max-height: calc(unit * 2);\n\n  margin-right: calc(unit / 2);\n\n  vertical-align: bottom;\n}\n\n.avatarIcon {\n  width: max-height;\n\n  margin-right: -4px;\n\n  object-fit: contain;\n  object-position: center;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.unit}`,"max-height":"20px",tag:`tag_ae7d ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.resetButton}`,tagAngled:"tagAngled_b4d0",withRemove:"withRemove_d56a",container:"container_a5d8",focused:"focused_bbe2",content:`content_a0ee ${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.ellipsis}`,disabled:"disabled_ffbd",remove:"remove_eac2",removeIcon:"removeIcon_e2b4",icon:"icon_bb17",avatarContainer:"avatarContainer_b363",customIcon:"customIcon_dbd7",avatarIcon:"avatarIcon_c087"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/tag/tag.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/tag/tag.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);