webpackJsonp([0],{161:function(e,t){},297:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),s=n(u),f=r(306),p=n(f),d=r(303),c=n(d),h=function(e){function t(){var e,r,n,i;a(this,t);for(var o=arguments.length,u=Array(o),s=0;s<o;s++)u[s]=arguments[s];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={query:""},n.handleQueryChange=function(e){n.setState({query:JSON.stringify(e,null,"  ")})},i=r,l(n,i)}return i(t,e),o(t,[{key:"render",value:function(){return s.default.createElement("div",{style:{display:"flex"}},s.default.createElement("div",{style:{width:"300px"}},s.default.createElement(p.default,{filterDefs:c.default,handleQueryChange:this.handleQueryChange})),s.default.createElement("div",null,s.default.createElement("h3",null,"Preview of query:"),s.default.createElement("pre",null,this.state.query)))}}]),t}(s.default.Component);t.default=h},299:function(e,t,r){var n=r(1),a=r(166);a.__esModule&&(a=a.default),e.exports=n.createClass({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:r(643)}},componentWillMount:function(){},render:function(){return n.createElement(a,Object.assign({},this.props,{content:this.state.content}))}})},300:function(e,t){},301:function(e,t){},303:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(198),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=[{field:"name",label:"Name",operators:[{label:"starts with",operator:"beginswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"ends with",operator:"endswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"contains",operator:"contains",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}}]},{field:"nickname",label:"Nickname",operators:[{label:"starts with",operator:"beginswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"ends with",operator:"endswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"contains",operator:"contains",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"has any value",operator:"ne",inputType:"none",defaultValue:""},{label:"is blank",operator:"eq",inputType:"none",defaultValue:""}]},{field:"occupation",label:"Occupation",operators:[{label:"starts with",operator:"beginswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"ends with",operator:"endswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"contains",operator:"contains",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"has any value",operator:"ne",inputType:"none",defaultValue:""},{label:"is blank",operator:"eq",inputType:"none",defaultValue:""}]},{field:"employer",label:"Employer",operators:[{label:"starts with",operator:"beginswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"ends with",operator:"endswith",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"contains",operator:"contains",inputType:"text",shouldApplyFilter:function(e){return!(0,a.default)(e)}},{label:"has any value",operator:"ne",inputType:"none",defaultValue:""},{label:"is blank",operator:"eq",inputType:"none",defaultValue:""}]}]},304:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(1),i=n(l),o=r(74),u=n(o),s=r(302),f=n(s),p=r(298);r(301),r(300),r(161);var d=r(297),c=n(d),h={},y=[{path:"/",title:"Introduction",component:r(299)},{path:"/demo",title:"Demo",component:c.default}];u.default.render(i.default.createElement("div",null,i.default.createElement(f.default,{href:"https://github.com/leahjlou/react-query-builder",bannerColor:"#fff",octoColor:"#000",width:80,height:80,direction:"right"}),i.default.createElement(p.Catalog,{imports:h,pages:y,specimens:{javascript:function(e){return i.default.createElement(p.CodeSpecimen,a({},e,{lang:"javascript"}))},js:function(e){return i.default.createElement(p.CodeSpecimen,a({},e,{lang:"javascript"}))},jsx:function(e){return i.default.createElement(p.ReactSpecimen,e)}},title:"react-query-builder v1.1.0"})),document.getElementById("app"))},305:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),u=function(e){return e&&e.__esModule?e:{default:e}}(o),s=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){switch(this.props.operator.inputType){case"none":return null;case"text":default:return u.default.createElement("div",{style:{margin:"8px 0"}},u.default.createElement("input",{type:"text",value:this.props.filterValue||"",onChange:this.props.onChange}))}}}]),t}(u.default.Component);t.default=s},306:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),p=n(f),d=r(335),c=n(d),h=r(198),y=n(h),b=r(417),v=n(b),m=r(418),g=n(m);r(161);var w=r(305),_=n(w),F=function(e){function t(e){l(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={filters:r.setUpFilters(r.props.initialFilters),activeFilterIndex:null,showFilterSelector:!0},r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){(0,y.default)(this.state.filters)||this.applyFilters()}},{key:"setUpFilters",value:function(e){var t=this;return(0,y.default)(e)?[]:e.map(function(e){var r=t.props.filterDefs.find(function(t){return t.field===e.field});return u({},e,{operator:r&&e.operatorIndex>=0?r.operators[e.operatorIndex]:{},filterDef:r})})}},{key:"setActiveFilterIndex",value:function(e){this.state.filters[e]&&!this.state.filters[e].disabled&&this.setState({activeFilterIndex:e})}},{key:"filterOperatorChanged",value:function(e,t,r){var n=(0,v.default)(this.state.filters);n[t]=u({},e,{operator:r,value:r.defaultValue||""}),this.setState({filters:n},this.applyFilters)}},{key:"filterValueChanged",value:function(e,t,r){var n=(0,v.default)(this.state.filters);n[t]=u({},e,{value:r.target.value}),this.setState({filters:n},this.applyFilters)}},{key:"applyFilters",value:function(){var e=this;this.setState({filters:this.state.filters.map(function(t){return u({},t,{disabled:t.filterDef.shouldDisableFilter&&t.filterDef.shouldDisableFilter(t,e.state.filters)})})},function(){e.state.activeFilter&&e.state.activeFilter.disabled&&e.setState({activeFilterIndex:null});var t=e.filtersToQuery(e.state.filters);e.props.handleQueryChange(t)})}},{key:"filtersToQuery",value:function(e){return e.reduce(function(e,t){return(0,y.default)(t.operator)||t.disabled||void 0===t.value||(0,g.default)(t.operator,"shouldApplyFilter")&&!t.operator.shouldApplyFilter(t.value)?e:[].concat(a(e),[{field:t.field,operator:(0,g.default)(t,"operator.operator")?t.operator.operator:t.operator,value:(0,g.default)(t,"operator.valueTransformer")&&"function"==typeof t.operator.valueTransformer?t.operator.valueTransformer(t.value):t.value}])},[])}},{key:"getSummaryString",value:function(e){return this.isFilterValueDefined(e)?(e.operator.label||"")+("none"===e.operator.inputType?"":" "+this.formatValue(e)):"not yet defined"}},{key:"isFilterValueDefined",value:function(e){return!!(!e.value||2!=e.value.length||e.value[0]&&e.value[1])&&!(e.operator&&"datepicker"===e.operator.inputType&&!e.value)}},{key:"formatValue",value:function(e){if("datepicker"===e.operator.inputType)return $filter("date")(e.value,"birthday"===e.field?"MMM d":"M/d/yyyy");if("daterange"===e.operator.inputType&&2===e.value.length){return $filter("date")(e.value[0],"birthday"===e.field?"MMM d":"M/d/yyyy")+" and "+$filter("date")(e.value[1],"birthday"===e.field?"MMM d":"M/d/yyyy")}if("multiselect"===e.operator.inputType){var t=e.filterDef.label.toLowerCase();return"tags"===t&&(t="tag"),prettyList(e.value,3,t,null,e.operator.getItemTitle)}if("select"===e.operator.inputType){var r=find(e.operator.options,{key:e.value});return r?r.value:""}return'"'+e.value+'"'||"not yet defined"}},{key:"addNewFilter",value:function(e){var t={field:e.field,operator:{},value:e.defaultValue||"",filterDef:e};this.setState({filters:[].concat(a(this.state.filters),[t]),activeFilterIndex:this.state.filters.length,showFilterSelector:!1})}},{key:"removeFilter",value:function(e){var t=this;this.setState({filters:this.state.filters.filter(function(t,r){return e!=r})},function(){t.applyFilters(),e===t.state.activeFilterIndex&&t.setState({activeFilterIndex:null}),(0,y.default)(t.state.filters)&&t.addFilter()})}},{key:"addFilter",value:function(){this.setState({activeFilterIndex:null,showFilterSelector:!0})}},{key:"render",value:function(){var e=this,t=this.state.filters.map(function(t,r){var n=(0,c.default)("rqb-filter-group__filter",{"rqb-filter-group__filter-summary":e.state.activeFilterIndex!=r,"+disabled":t.disabled}),a=p.default.createElement("div",{className:"rqb-filter-group__disabled-overlay"}),l=t.filterDef.operators.map(function(n){var a=t.operator==n,l=a?p.default.createElement(_.default,{filterValue:t.value,operator:t.operator,onChange:e.filterValueChanged.bind(e,t,r)}):null;return p.default.createElement("div",{key:n.operator},p.default.createElement("label",null,p.default.createElement("input",{type:"radio",value:n,checked:a,onChange:e.filterOperatorChanged.bind(e,t,r,n)}),p.default.createElement("span",{style:{marginLeft:"4px"}},n.label)),l)}),i=p.default.createElement("div",{style:{marginTop:"8px"}},l),o=p.default.createElement("div",null,e.getSummaryString(t));return p.default.createElement("div",{key:t.field+r,className:n,onClick:e.setActiveFilterIndex.bind(e,r)},t.disabled?a:null,p.default.createElement("div",null,p.default.createElement("a",{className:"rqb-filter-group__close-filter",onClick:e.removeFilter.bind(e,r)},"×"),p.default.createElement("div",{style:{marginBottom:"8px"}},p.default.createElement("strong",null,t.filterDef.label)),e.state.activeFilterIndex==r?i:o))}),r=p.default.createElement("div",{style:{paddingBottom:"8px"},className:"rqb-filter-group__filter"},p.default.createElement("h3",{style:{marginTop:"0",marginBottom:"8px"}},p.default.createElement("strong",null,"Start filtering by:")),this.props.filterDefs.map(function(t){return p.default.createElement("div",{key:t.field,onClick:e.addNewFilter.bind(e,t),className:"rqb-filter-group__menu-item"},t.label)})),n=p.default.createElement("div",{style:{display:"flex",justifyContent:"center"}},p.default.createElement("a",{className:"rqb-filter-group__button",style:{cursor:"pointer"},onClick:this.addFilter.bind(this)},"Add Filter"));return p.default.createElement("div",{className:"rqb-filter-group"},t,this.state.showFilterSelector?r:n)}}]),t}(p.default.Component);t.default=F,F.propTypes={}},643:function(e,t){e.exports="# cpr-query-builder\n\nA React component for building queries/filters.\n\n![Demo](demo.gif)\n\nThe `QueryBuilder` component provides a simple UI to build a query (or set of filters) for a data set, based on custom filters and operators.\n\nIt is intended to build [Json-Query-Language](https://github.com/CanopyTax/Json-Query-Language), but operators can be defined and handled however you want.\n\n## Installation\n\n`npm install cpr-query-builder`\n\nFor default styles, you'll also need to load the stylesheet `style.css`\n\n## Usage\n\n### Props\n\n+ [`filterDefs`](#filterdefs): **(required)** an array of objects that define all possible filters that can be applied to the query\n+ `handleQueryChange`: **(required)** a function that gets called every time the query changes, to be called with one argument: the new query\n+ [`initialFilters`](#initial-filters-optional): _(optional)_ filters with which to initialize\n\n### Simple Usage\n\n```javascript\nimport QueryBuilder from 'react-query-builder';\n\nlet myFilterDefs = [\n  {\n    field: 'name',\n    label: 'Name',\n    operators: [\n      {\n        label: 'Is',\n        operator: 'eq',\n        inputType: 'text',\n      }\n    ],\n  }\n];\n\nfunction handleQueryChange(query) {\n  // Do stuff with the query\n}\n\n<QueryBuilder filterDefs={myFilterDefs} handleQueryChange={handleQueryChange} />\n```\n\n### filterDefs\n\n`filterDefs` is an array of objects that define all possible filters that can be applied to the query. Each object in the array has the following fields:\n\n+ `field`: **(required)** the field on which to filter, will be passed into the query (i.e. 'first_name')\n+ `label`: **(required)** the display label for the filter (i.e. 'First Name')\n+ [`operators`](#operators): **(required)** an array of operator objects that are supported on this filter (see [`operators`](#operators) below)\n+ `shouldDisableFilter`: _(optional)_ a function to determine whether the filter should be disabled. When disabled, a filter will not appear in the list of available filters, and any currently applied filters of that type will be \"grayed out\" in the list and not included in the query. This is useful for indicating that a filter is \"incompatible\" with something else.\n\nExample:\n\n```javascript\nlet myFilterDefs = [\n  {\n    field: 'first_name',\n    label: 'First Name',\n    operators: [/* see section on operators below */],\n    shouldDisableFilter: () => true,\n  },\n];\n```\n\n### Operators\n\n`operators`, within each filterDef object, is an array of operator objects that describes which operators are supported by the filter and what the input type should look like for that operator.\n\nFor example, a `first_name` filter might support an operator called \"startswith\" and use a text input, while a `created_on` filter might support an operator called \"between\" and use a datepicker range input.\n\nEach operator object has (or can have) the following fields:\n\n+ `operator`: **(required)** the operator value to be passed to the query (i.e. 'in')\n+ `label`: **(required)** the display label for the operator, displayed as a radio button option within a filter (i.e. 'is any of')\n+ `inputType`: **(required)** the input type to display for that operator. Supported values are 'text' and 'none' (use a `defaultValue`, see below)\n+ `defaultValue`: _(optional)_ the default value for a filter. This is especially useful if you want your operator to have an `inputType` of 'none' to have a \"hard-coded\" filter.\n+ `shouldApplyFilter`: _(optional)_ a function to determine whether to apply the filter to the query, to be called with one argument: the current user-entered value. This is useful if you don't want to apply, say, filters with empty strings.\n+ `valueTransformer`: _(optional)_ a function to transform your value before applying to the query, to be called with one argument: the current user-entered value.\n\nExample:\n\n```javascript\nlet myOperators = [\n  {\n    label: 'Starts With',\n    operator: 'startswith',\n    inputType: 'text',\n    shouldApplyFilter: value => value && value.length > 0,\n    valueTransformer: value => 'foo' + value,\n  },\n  {\n    operator: 'eq',\n    label: 'Is Empty',\n    inputType: 'none',\n    defaultValue: null,\n  },\n];\n```\n\n### Query\n\nThe query passed to your `handleQueryChange` function will be an array of objects, each with three fields: `field`, `operator`, and `value`.\n\n### Initial Filters (optional)\n\nOptionally, you can pass an array of filters to initialize the component. Each filter should have the following fields:\n\n+ `field`: the filtered field\n+ `operatorIndex`: the index (in `operators` of the filtered field's filterDef) of the applied operator. _(This has to be an index because a filter can have multiple operators with the same `operator` string.)_\n+ `value`: the value\n\nExample:\n\n```javascript\nlet myInitialFilters = {\n  field: 'first_name',\n  operatorIndex: 0,\n  value: 'jim',\n}\n```\n\n## Development\n\n1. Clone this repo\n2. `cd react-query-builder`\n3. `yarn`\n4. `npm start`\n5. Open `localhost:8080`\n\n"}},[304]);