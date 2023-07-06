(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[7639],{"./node_modules/@jetbrains/icons/search.js":module=>{module.exports='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><path d="M14.64,13.36,10.13,8.85A4.94,4.94,0,0,0,11,6a5,5,0,1,0-2.17,4.12l4.51,4.51ZM2.42,6A3.6,3.6,0,1,1,6,9.61,3.6,3.6,0,0,1,2.42,6Z"/></g></svg>'},"./src/table/table.examples.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:()=>basic,default:()=>table_table_examples,emptyTable:()=>emptyTable,multiTable:()=>multiTable});var react=__webpack_require__("./node_modules/react/index.js"),react_decorator=__webpack_require__("./.storybook/react-decorator.tsx"),grid=__webpack_require__("./src/grid/grid.tsx"),row=__webpack_require__("./src/grid/row.tsx"),col=__webpack_require__("./src/grid/col.tsx"),link_link=__webpack_require__("./src/link/link.tsx"),pager=__webpack_require__("./src/pager/pager.tsx"),button_button=__webpack_require__("./src/button/button.tsx"),table=__webpack_require__("./src/table/table.tsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);class MultiTable extends react.PureComponent{static propTypes={children:prop_types_default().any.isRequired};componentDidUpdate(prevProps){if(prevProps.children){const prevSelections=prevProps.children.map((element=>element.props.selection)),prevFocusedIndex=prevSelections.findIndex((selection=>selection.getFocused())),prevFocused=prevSelections[prevFocusedIndex];this.props.children.map((element=>element.props.selection)).filter((selection=>selection.getFocused())).includes(prevFocused)&&prevProps.children[prevFocusedIndex].props.onSelect?.(prevFocused.resetFocus())}}onUpPress=()=>{const{children:tables}=this.props,tableIndex=tables.findIndex((_ref=>{let{props:{selection}}=_ref;return selection.getFocused()})),currentTable=tables[tableIndex].props,prevTable=tables[tableIndex-1]?tables[tableIndex-1].props:null;let newSelection=currentTable.selection.moveUp();return newSelection?currentTable.onSelect?.(newSelection):prevTable&&(currentTable.onSelect?.(currentTable.selection.resetFocus()),newSelection=prevTable.selection.moveUp(),newSelection&&prevTable.onSelect?.(newSelection)),!1};onDownPress=()=>{const{children:tables}=this.props,tableIndex=tables.findIndex((_ref2=>{let{props:{selection}}=_ref2;return selection.getFocused()})),currentTable=tables[tableIndex].props,nextTable=tables[tableIndex+1]?tables[tableIndex+1].props:null;let newSelection=currentTable.selection.moveDown();return newSelection?currentTable.onSelect?.(newSelection):nextTable&&(currentTable.onSelect?.(currentTable.selection.resetFocus()),newSelection=nextTable.selection.moveDown(),newSelection&&nextTable.onSelect?.(newSelection)),!1};onEscPress=()=>{const{children}=this.props;react.Children.forEach(children,(_ref3=>{let{props:{selection,onSelect}}=_ref3;onSelect(selection.reset())}))};onCmdAPress=()=>{const{children}=this.props;return react.Children.forEach(children,(_ref4=>{let{props:{selection,onSelect}}=_ref4;onSelect(selection.selectAll())})),!1};shortcuts={up:this.onUpPress,down:this.onDownPress,esc:this.onEscPress,"command+a":this.onCmdAPress,"ctrl+a":this.onCmdAPress};render(){return react.createElement("div",{"data-test":"ring-multitable"},react.Children.map(this.props.children,(child=>{const props={shortcuts:this.shortcuts};return(0,react.cloneElement)(child,props)})))}}MultiTable.__docgenInfo={description:"",methods:[{name:"onUpPress",docblock:null,modifiers:[],params:[],returns:null},{name:"onDownPress",docblock:null,modifiers:[],params:[],returns:null},{name:"onEscPress",docblock:null,modifiers:[],params:[],returns:null},{name:"onCmdAPress",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MultiTable",props:{children:{type:{name:"any"},required:!0,description:"",tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TableAttrs",elements:[{name:"SelectionItem"}],raw:"TableAttrs<SelectionItem>"}],raw:"ReactElement<TableAttrs<SelectionItem>>"}],raw:"ReactElement<TableAttrs<SelectionItem>>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/multitable.tsx"]={name:"MultiTable",docgenInfo:MultiTable.__docgenInfo,path:"src/table/multitable.tsx"});var table_selection=__webpack_require__("./src/table/selection.ts"),table_examples=__webpack_require__("./src/table/table.examples.json");const table_examples2_namespaceObject=JSON.parse('{"b":[{"id":1,"continent":"Asia","url":"https://en.wikipedia.org/wiki/Asia"},{"id":2,"continent":"Europe","url":"https://en.wikipedia.org/wiki/Europe"},{"id":3,"continent":"America","url":"https://en.wikipedia.org/wiki/America"},{"id":4,"continent":"Africa","url":"https://en.wikipedia.org/wiki/Africa"},{"id":5,"continent":"Australia","url":"https://en.wikipedia.org/wiki/Australia"}],"h":[{"id":1,"country":"Russia","city":"Moscow","url":"https://en.wikipedia.org/wiki/Russia"},{"id":2,"country":"France","city":"Paris","url":"https://en.wikipedia.org/wiki/France"},{"id":3,"country":"Sweden","city":"Stockholm","url":"https://en.wikipedia.org/wiki/Sweden"},{"id":4,"country":"USA","city":"NYC","url":"https://en.wikipedia.org/wiki/USA"},{"id":5,"country":"South Africa","city":"Johannesburg","url":"https://en.wikipedia.org/wiki/South Africa"},{"id":6,"country":"Finland","city":"Helsinki","url":"https://en.wikipedia.org/wiki/Finland"},{"id":7,"country":"Latvia","city":"Riga","url":"https://en.wikipedia.org/wiki/Latvia"},{"id":8,"country":"Norway","city":"Oslo","url":"https://en.wikipedia.org/wiki/Norway"}]}');function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const table_table_examples={title:"Components/Table",decorators:[(0,react_decorator.Z)()],parameters:{storySource:{source:"import React, {Component} from 'react';\n\nimport {Story} from '@storybook/react';\n\nimport reactDecorator from '../../.storybook/react-decorator';\n\nimport {Grid, Row, Col} from '../grid/grid';\nimport Link from '../link/link';\nimport Pager from '../pager/pager';\nimport Button from '../button/button';\n\nimport Table, {Table as BaseTable, TableAttrs} from './table';\nimport MultiTable from './multitable';\nimport Selection, {SelectionItem} from './selection';\nimport mock from './table.examples.json';\nimport {continents, countries} from './table.examples2.json';\nimport {SortParams} from './header-cell';\n\nexport default {\n  title: 'Components/Table',\n  decorators: [reactDecorator()],\n\n  parameters: {\n    component: BaseTable,\n    framework: 'react',\n    hermione: {skip: true}\n  },\n  argTypes: {\n    selection: {\n      control: {disable: true}\n    }\n  }\n};\n\nconst PAGE_SIZE = 7;\nconst TOTAL = mock.length;\ninterface Item extends SelectionItem {\n  country: string\n  city: string\n  url: string\n  children?: Item[]\n}\ninterface BasicDemoProps extends TableAttrs<Item> {\n  withCaption: boolean\n}\ninterface BasicDemoState {\n  data: Item[]\n  selection: Selection<Item>\n  page: number\n  pageSize: number\n  total: number\n  sortKey: string\n  sortOrder: boolean\n}\nclass BasicDemo extends Component<BasicDemoProps, BasicDemoState> {\n  state: BasicDemoState = {\n    data: [],\n    selection: new Selection(),\n    page: 1,\n    pageSize: PAGE_SIZE,\n    total: TOTAL,\n    sortKey: 'country',\n    sortOrder: true\n  };\n\n  componentDidMount() {\n    this.loadPage();\n  }\n\n  componentDidUpdate(prevProps: BasicDemoProps, prevState: BasicDemoState) {\n    const {page, sortKey, sortOrder} = this.state;\n    if (\n      page !== prevState.page ||\n      sortKey !== prevState.sortKey ||\n      sortOrder !== prevState.sortOrder\n    ) {\n      this.loadPage();\n    }\n  }\n\n  onSort = (event: SortParams) => {\n    this.props.onSort?.(event);\n    this.setState({sortKey: event.column.id, sortOrder: event.order});\n  };\n\n  onPageChange = (page: number) => {\n    this.setState({page});\n  };\n\n  isItemSelectable(item: Item) {\n    return item.id !== 14;\n  }\n\n  loadPage = () => {\n    const {page, pageSize, sortKey, sortOrder} = this.state;\n\n    let data: Item[] = [...mock];\n    data.sort((a, b) =>\n      String(a[sortKey]).localeCompare(String(b[sortKey])) * (sortOrder ? 1 : -1));\n    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);\n\n    const selection = new Selection({data, isItemSelectable: this.isItemSelectable});\n\n    this.setState({data, selection});\n  };\n\n  render() {\n    const {onSelect, withCaption, onReorder, ...restProps} = this.props;\n    const {\n      data,\n      page,\n      pageSize,\n      total,\n      selection,\n      sortKey,\n      sortOrder\n    } = this.state;\n\n    return (\n      <div>\n        <Table\n          {...restProps}\n          data={data}\n          selection={selection}\n          onSelect={newSelection => {\n            onSelect?.(newSelection);\n            this.setState({selection: newSelection});\n          }}\n          onReorder={event => {\n            onReorder?.(event);\n            this.setState({data: event.data});\n          }}\n          onSort={this.onSort}\n          sortKey={sortKey}\n          sortOrder={sortOrder}\n          caption={withCaption ? 'Countries' : undefined}\n          isItemSelectable={this.isItemSelectable}\n          getItemDataTest={it => String(it.country)}\n          dragHandleTitle=\"Drag me!\"\n        />\n\n        <Grid>\n          <Row>\n            <Col>\n              <Pager\n                total={total}\n                pageSize={pageSize}\n                currentPage={page}\n                disablePageSizeSelector\n                onPageChange={this.onPageChange}\n              />\n            </Col>\n          </Row>\n\n          <Row>\n            <Col>\n              Active items: {[...selection.getActive()].map(item => item.country).join(', ')}\n            </Col>\n          </Row>\n\n          <Row>\n            <Col>\n              <Button onClick={() => this.setState({data: [...data]})}>\n                Recreate data array\n              </Button>\n              {page === 1 && data.length > 5 && (\n                <>\n                  {' '}\n                  <span id=\"button-select-bulgaria\">\n                    {selection.isSelected(data[3])\n                      ? (\n                        <Button\n                          onClick={() => this.setState({selection: selection.deselect(data[3])})}\n                        >\n                          Deselect {data[3].country}\n                        </Button>\n                      )\n                      : (\n                        <Button\n                          onClick={() => this.setState({selection: selection.select(data[3])})}\n                        >\n                          Select {data[3].country}\n                        </Button>\n                      )}\n                  </span>\n\n                  <span id=\"button-select-finland\">\n                    {' '}\n                    {selection.isSelected(data[5])\n                      ? (\n                        <Button\n                          onClick={() => this.setState({selection: selection.deselect(data[5])})}\n                        >\n                          Deselect {data[5].country}\n                        </Button>\n                      )\n                      : (\n                        <Button\n                          onClick={() => this.setState({selection: selection.select(data[5])})}\n                        >\n                          Select {data[5].country}\n                        </Button>\n                      )}\n                  </span>\n                </>\n              )}\n            </Col>\n          </Row>\n        </Grid>\n      </div>\n    );\n  }\n}\nexport const basic: Story<BasicDemoProps> = args => <BasicDemo {...args}/>;\nbasic.args = {\n  columns: [\n    {\n      id: 'country',\n      title: 'Country',\n      sortable: true\n    },\n\n    {\n      id: 'id',\n      title: 'ID',\n      rightAlign: true\n    },\n\n    {\n      id: 'city',\n      title: 'City',\n      getDataTest: item => item.city,\n      sortable: true\n    },\n\n    {\n      id: 'url',\n      title: 'URL',\n      getValue({url}) {\n        return <Link href={url}>{url}</Link>;\n      }\n    }\n  ],\n  autofocus: true,\n  selectable: true,\n  draggable: true,\n  withCaption: false,\n  isItemSelectable: item => item.id !== 14\n};\nbasic.argTypes = {\n  data: {\n    control: {disable: true}\n  },\n  sortKey: {\n    control: {disable: true}\n  },\n  sortOrder: {\n    control: {disable: true}\n  },\n  caption: {\n    control: {disable: true}\n  },\n  onSelect: {},\n  onReorder: {}\n};\nbasic.storyName = 'basic';\n\nconst data1 = continents;\nconst data2 = countries;\n\nclass MultiTableDemo extends Component {\n  state = {\n    selection1: new Selection({data: data1}),\n    selection2: new Selection({data: data2})\n  };\n\n  columns1 = [\n    {\n      id: 'continent',\n      title: 'Continent'\n    },\n    {\n      id: 'url',\n      title: 'URL'\n    }\n  ];\n\n  columns2 = [\n    {\n      id: 'country',\n      title: 'Country'\n    },\n    {\n      id: 'city',\n      title: 'City'\n    },\n    {\n      id: 'url',\n      title: 'URL'\n    }\n  ];\n\n  render() {\n    return (\n      <MultiTable>\n        <Table\n          data={data1}\n          columns={this.columns1}\n          caption=\"Continents\"\n          selection={this.state.selection1}\n          onSelect={selection => this.setState({selection1: selection})}\n        />\n\n        <Table\n          data={data2}\n          columns={this.columns2}\n          caption=\"Countries\"\n          autofocus\n          selection={this.state.selection2}\n          onSelect={selection => this.setState({selection2: selection})}\n        />\n      </MultiTable>\n    );\n  }\n}\nexport const multiTable = () => <MultiTableDemo/>;\nmultiTable.storyName = 'multi table';\n\nclass EmptyTableDemo extends Component<TableAttrs<SelectionItem>> {\n  state = {\n    selection: new Selection({})\n  };\n\n  render() {\n    const {onSelect, ...restProps} = this.props;\n\n    return (\n      <Table\n        {...restProps}\n        selection={this.state.selection}\n        onSelect={selection => {\n          onSelect?.(selection);\n          this.setState({selection});\n        }}\n      />\n    );\n  }\n}\n\nexport const emptyTable: Story<TableAttrs<SelectionItem>> = args => <EmptyTableDemo {...args}/>;\nemptyTable.args = {\n  data: [],\n  columns: [\n    {\n      id: 'country',\n      title: 'Country'\n    },\n    {\n      id: 'city',\n      title: 'City'\n    },\n    {\n      id: 'url',\n      title: 'URL'\n    }\n  ],\n  renderEmpty: () => 'Empty table',\n  selectable: false\n};\nemptyTable.storyName = 'empty table';\n",locationsMap:{basic:{startLoc:{col:44,line:214},endLoc:{col:74,line:214},startBody:{col:44,line:214},endBody:{col:74,line:214}},"multi-table":{startLoc:{col:26,line:326},endLoc:{col:49,line:326},startBody:{col:26,line:326},endBody:{col:49,line:326}},"empty-table":{startLoc:{col:60,line:350},endLoc:{col:95,line:350},startBody:{col:60,line:350},endBody:{col:95,line:350}}}},component:table.i,framework:"react",hermione:{skip:!0}},argTypes:{selection:{control:{disable:!0}}}},TOTAL=table_examples.length;class BasicDemo extends react.Component{state={data:[],selection:new table_selection.Z,page:1,pageSize:7,total:TOTAL,sortKey:"country",sortOrder:!0};componentDidMount(){this.loadPage()}componentDidUpdate(prevProps,prevState){const{page,sortKey,sortOrder}=this.state;page===prevState.page&&sortKey===prevState.sortKey&&sortOrder===prevState.sortOrder||this.loadPage()}onSort=event=>{this.props.onSort?.(event),this.setState({sortKey:event.column.id,sortOrder:event.order})};onPageChange=page=>{this.setState({page})};isItemSelectable(item){return 14!==item.id}loadPage=()=>{const{page,pageSize,sortKey,sortOrder}=this.state;let data=[...table_examples];data.sort(((a,b)=>String(a[sortKey]).localeCompare(String(b[sortKey]))*(sortOrder?1:-1))),data=data.slice((page-1)*pageSize,(page-1)*pageSize+pageSize);const selection=new table_selection.Z({data,isItemSelectable:this.isItemSelectable});this.setState({data,selection})};render(){const{onSelect,withCaption,onReorder,...restProps}=this.props,{data,page,pageSize,total,selection,sortKey,sortOrder}=this.state;return react.createElement("div",null,react.createElement(table.Z,_extends({},restProps,{data,selection,onSelect:newSelection=>{onSelect?.(newSelection),this.setState({selection:newSelection})},onReorder:event=>{onReorder?.(event),this.setState({data:event.data})},onSort:this.onSort,sortKey,sortOrder,caption:withCaption?"Countries":void 0,isItemSelectable:this.isItemSelectable,getItemDataTest:it=>String(it.country),dragHandleTitle:"Drag me!"})),react.createElement(grid.rj,null,react.createElement(row.Z,null,react.createElement(col.Z,null,react.createElement(pager.Z,{total,pageSize,currentPage:page,disablePageSizeSelector:!0,onPageChange:this.onPageChange}))),react.createElement(row.Z,null,react.createElement(col.Z,null,"Active items: ",[...selection.getActive()].map((item=>item.country)).join(", "))),react.createElement(row.Z,null,react.createElement(col.Z,null,react.createElement(button_button.ZP,{onClick:()=>this.setState({data:[...data]})},"Recreate data array"),1===page&&data.length>5&&react.createElement(react.Fragment,null," ",react.createElement("span",{id:"button-select-bulgaria"},selection.isSelected(data[3])?react.createElement(button_button.ZP,{onClick:()=>this.setState({selection:selection.deselect(data[3])})},"Deselect ",data[3].country):react.createElement(button_button.ZP,{onClick:()=>this.setState({selection:selection.select(data[3])})},"Select ",data[3].country)),react.createElement("span",{id:"button-select-finland"}," ",selection.isSelected(data[5])?react.createElement(button_button.ZP,{onClick:()=>this.setState({selection:selection.deselect(data[5])})},"Deselect ",data[5].country):react.createElement(button_button.ZP,{onClick:()=>this.setState({selection:selection.select(data[5])})},"Select ",data[5].country)))))))}}const basic=args=>react.createElement(BasicDemo,args);basic.args={columns:[{id:"country",title:"Country",sortable:!0},{id:"id",title:"ID",rightAlign:!0},{id:"city",title:"City",getDataTest:item=>item.city,sortable:!0},{id:"url",title:"URL",getValue(_ref){let{url}=_ref;return react.createElement(link_link.ZP,{href:url},url)}}],autofocus:!0,selectable:!0,draggable:!0,withCaption:!1,isItemSelectable:item=>14!==item.id},basic.argTypes={data:{control:{disable:!0}},sortKey:{control:{disable:!0}},sortOrder:{control:{disable:!0}},caption:{control:{disable:!0}},onSelect:{},onReorder:{}},basic.storyName="basic";const data1=table_examples2_namespaceObject.b,data2=table_examples2_namespaceObject.h;class MultiTableDemo extends react.Component{state={selection1:new table_selection.Z({data:data1}),selection2:new table_selection.Z({data:data2})};columns1=[{id:"continent",title:"Continent"},{id:"url",title:"URL"}];columns2=[{id:"country",title:"Country"},{id:"city",title:"City"},{id:"url",title:"URL"}];render(){return react.createElement(MultiTable,null,react.createElement(table.Z,{data:data1,columns:this.columns1,caption:"Continents",selection:this.state.selection1,onSelect:selection=>this.setState({selection1:selection})}),react.createElement(table.Z,{data:data2,columns:this.columns2,caption:"Countries",autofocus:!0,selection:this.state.selection2,onSelect:selection=>this.setState({selection2:selection})}))}}const multiTable=()=>react.createElement(MultiTableDemo,null);multiTable.storyName="multi table";class EmptyTableDemo extends react.Component{state={selection:new table_selection.Z({})};render(){const{onSelect,...restProps}=this.props;return react.createElement(table.Z,_extends({},restProps,{selection:this.state.selection,onSelect:selection=>{onSelect?.(selection),this.setState({selection})}}))}}const emptyTable=args=>react.createElement(EmptyTableDemo,args);emptyTable.args={data:[],columns:[{id:"country",title:"Country"},{id:"city",title:"City"},{id:"url",title:"URL"}],renderEmpty:()=>"Empty table",selectable:!1},emptyTable.storyName="empty table",basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/table.examples.tsx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/table/table.examples.tsx"}),multiTable.__docgenInfo={description:"",methods:[],displayName:"multiTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/table.examples.tsx"]={name:"multiTable",docgenInfo:multiTable.__docgenInfo,path:"src/table/table.examples.tsx"}),emptyTable.__docgenInfo={description:"",methods:[],displayName:"emptyTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/table.examples.tsx"]={name:"emptyTable",docgenInfo:emptyTable.__docgenInfo,path:"src/table/table.examples.tsx"})},"./src/loader-inline/loader-inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_global_data_tests__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/global/data-tests.ts"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/loader-inline/loader-inline.css"),_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2__);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}class LoaderInline extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{static propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,"data-test":prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};render(){const{className,"data-test":dataTest,children,...restProps}=this.props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().loader,className),loader=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},restProps,{"data-test":(0,_global_data_tests__WEBPACK_IMPORTED_MODULE_4__.Z)("ring-loader-inline",dataTest),className:classes}));return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,loader,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:_loader_inline_css__WEBPACK_IMPORTED_MODULE_2___default().children},children)):loader}}LoaderInline.__docgenInfo={description:"@name Loader Inline",methods:[],displayName:"LoaderInline",props:{className:{type:{name:"string"},required:!1,description:""},"data-test":{type:{name:"string"},required:!1,description:"",tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]}},children:{type:{name:"node"},required:!1,description:""}},composes:["HTMLAttributes"]};const __WEBPACK_DEFAULT_EXPORT__=LoaderInline;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loader-inline/loader-inline.tsx"]={name:"LoaderInline",docgenInfo:LoaderInline.__docgenInfo,path:"src/loader-inline/loader-inline.tsx"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables_dark.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/global.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/global/variables.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_css__WEBPACK_IMPORTED_MODULE_4__.default),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default,"",!0),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default,"",!0),___CSS_LOADER_EXPORT___.push([module.id,`:root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n.${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark},\n.ring-ui-theme-dark {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin_c5fc {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse_d8f9 {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(1.41667);\n  }\n}\n\n.loader_f65a,\n.ring-loader-inline {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin_c5fc 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: 8px;\n}\n\n.loader_f65a,\n  .ring-loader-inline,\n  .loader_f65a::after,\n  .ring-loader-inline::after {\n    transform-origin: 50% 50%;\n  }\n\n.loader_f65a::after, .ring-loader-inline::after {\n    display: block;\n\n    width: 16px;\n    height: 16px;\n\n    content: "";\n    animation: pulse_d8f9 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(#ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb);\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    -webkit-mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n            mask-image: radial-gradient(8px, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n\n.children_d816 {\n  margin-left: 4px;\n}\n`,"",{version:3,sources:["webpack://./src/loader-inline/loader-inline.css"],names:[],mappings:"AAKA;EACE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;;EAEE,6CAA6C;EAC7C,gFAAgF;AAClF;;AAEA;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,yBAA+B;EACjC;AACF;;AAEA;;EAEE,6CAA6C;;EAE7C,kBAAkB;;EAElB,qBAAqB;;EAErB,gBAAgB;;EAEhB,oBAAoB;EACpB,uCAAkC;EAClC,oBAAoB;;EAEpB,kBAAmB;AAmBrB;;AAjBE;;;;IAEE,yBAAyB;EAC3B;;AAEA;IACE,cAAc;;IAEd,WAAqB;IACrB,YAAsB;;IAEtB,WAAW;IACX,gFAA2E;;IAE3E,sFAAiE;;IAAjE,iEAAiE;IACjE,2GAAoG;YAApG,mGAAoG;EACtG;;AAGF;EACE,gBAA2B;AAC7B",sourcesContent:['@import "../global/variables.css";\n\n@value dark from "../global/variables_dark.css";\n@value unit from "../global/global.css";\n\n:root {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb;\n}\n\n.dark,\n:global(.ring-ui-theme-dark) {\n  /* stylelint-disable-next-line color-no-hex */\n  --ring-loader-inline-stops: #ff2eef, #d178ff, #289fff, #88d444, #ffe000, #ff2eef;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(calc(17 / 12));\n  }\n}\n\n.loader,\n:global(.ring-loader-inline) {\n  /* needed for better backward-compatibility */\n\n  position: relative;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  transform: rotate(0);\n  animation: spin 1s linear infinite;\n  vertical-align: -3px;\n\n  border-radius: unit;\n\n  &,\n  &::after {\n    transform-origin: 50% 50%;\n  }\n\n  &::after {\n    display: block;\n\n    width: calc(unit * 2);\n    height: calc(unit * 2);\n\n    content: "";\n    animation: pulse 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;\n\n    background-image: conic-gradient(var(--ring-loader-inline-stops));\n    mask-image: radial-gradient(unit, transparent 71.875%, var(--ring-content-background-color) 71.875%);\n  }\n}\n\n.children {\n  margin-left: calc(unit / 2);\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dark:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_variables_dark_css__WEBPACK_IMPORTED_MODULE_2__.default.locals.dark}`,unit:`${_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_global_global_css__WEBPACK_IMPORTED_MODULE_3__.default.locals.unit}`,loader:"loader_f65a",spin:"spin_c5fc",pulse:"pulse_d8f9",children:"children_d816"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/loader-inline/loader-inline.css":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/loader-inline/loader-inline.css");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}}}]);