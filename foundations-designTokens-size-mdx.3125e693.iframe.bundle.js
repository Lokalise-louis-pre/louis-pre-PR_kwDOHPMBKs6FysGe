"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9080],{"./src/foundations/designTokens/size.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Size:()=>Size,default:()=>size});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),ThemeSwitcher=__webpack_require__("./src/foundations/designTokens/ThemeSwitcher.tsx"),tokenValues=__webpack_require__("./src/foundations/designTokens/tokenValues.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),size_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/foundations/designTokens/size.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(size_module.A,options);const designTokens_size_module=size_module.A&&size_module.A.locals?size_module.A.locals:void 0,Size=()=>{const _components=Object.assign({div:"div",span:"span",code:"code"},(0,lib.RP)()),[selectedTheme,setSelectedTheme]=(0,react.useState)("themeLokaliseLight"),sizeOptions=(0,tokenValues.A)(ThemeSwitcher.w[selectedTheme].size);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ThemeSwitcher.H,{selectedTheme,onSelectTheme:setSelectedTheme}),(0,jsx_runtime.jsx)(_components.div,{className:designTokens_size_module.container,children:sizeOptions.map((({key,tokenValue})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(_components.span,{children:(0,jsx_runtime.jsxs)(_components.code,{children:["value('size.",key,"')"]})}),(0,jsx_runtime.jsx)(_components.div,{className:designTokens_size_module.block,style:{height:tokenValue}})]},key)))})]})};const size=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",code:"code"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/Design Tokens/Size"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#size-options",children:"Size Options"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"const StyledButton = () => (\n\t<button\n\t\tstyle={{\n\t\t\theight: 'var(--lok-size-height-button-default)',\n\t\t}}\n\t></button>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"size-options",children:"Size Options"}),"\n",(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsx)(Size,{})})]})}}},"./src/foundations/designTokens/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ThemeSwitcher,w:()=>themeMap});var _lokalise_token_dictionary_theme_autopilot_light__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-autopilot-light.js"),_lokalise_token_dictionary_theme_lokalise_dark__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-lokalise-dark.js"),_lokalise_token_dictionary_theme_lokalise_light__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-lokalise-light.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const themeMap={themeLokaliseLight:_lokalise_token_dictionary_theme_lokalise_light__WEBPACK_IMPORTED_MODULE_1__.w,themeLokaliseDark:_lokalise_token_dictionary_theme_lokalise_dark__WEBPACK_IMPORTED_MODULE_2__.w,themeAutopilotLight:_lokalise_token_dictionary_theme_autopilot_light__WEBPACK_IMPORTED_MODULE_3__.w},ThemeSwitcher=({onSelectTheme,selectedTheme})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{onChange:e=>onSelectTheme(e.target.value),value:selectedTheme,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"themeLokaliseLight",children:"Lokalise Light"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"themeLokaliseDark",children:"Lokalise Dark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"themeAutopilotLight",children:"Autopilot Light"})]});ThemeSwitcher.displayName="ThemeSwitcher";try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{onSelectTheme:{defaultValue:null,description:"",name:"onSelectTheme",required:!0,type:{name:"(selectedTheme: Themes) => void"}},selectedTheme:{defaultValue:null,description:"",name:"selectedTheme",required:!0,type:{name:"enum",value:[{value:'"themeLokaliseLight"'},{value:'"themeLokaliseDark"'},{value:'"themeAutopilotLight"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/designTokens/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/foundations/designTokens/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/designTokens/tokenValues.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getTokenEntries});const getTokenEntries=tokenObject=>{const tokenEntries=[],traverseTokens=(obj,parentKeys)=>{Object.entries(obj).forEach((([key,tokenValue])=>{if(null!==tokenValue&&"object"==typeof tokenValue)traverseTokens(tokenValue,[...parentKeys,key]);else{const tokenEntry={key:[...parentKeys,key].join("."),tokenValue};tokenEntries.push(tokenEntry)}}))};return traverseTokens(tokenObject,[]),tokenEntries}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/foundations/designTokens/size.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".WDAABFAbM2jprfkzyk7X {\n\tdisplay: grid;\n\tgrid-auto-flow: row;\n\tgrid-template-columns: max-content 1fr;\n\tgap: 20px;\n\tpadding: 20px;\n\talign-items: center;\n}\n\n.VfIcQugSXyCkWdrigr3T {\n\twidth: 300px;\n\tborder: 1px solid #2a9141;\n\tbackground-color: #b1debb;\n}\n","",{version:3,sources:["webpack://./src/foundations/designTokens/size.module.css"],names:[],mappings:"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,sCAAsC;CACtC,SAAS;CACT,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,yBAAyB;CACzB,yBAAyB;AAC1B",sourcesContent:[".container {\n\tdisplay: grid;\n\tgrid-auto-flow: row;\n\tgrid-template-columns: max-content 1fr;\n\tgap: 20px;\n\tpadding: 20px;\n\talign-items: center;\n}\n\n.block {\n\twidth: 300px;\n\tborder: 1px solid #2a9141;\n\tbackground-color: #b1debb;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"WDAABFAbM2jprfkzyk7X",block:"VfIcQugSXyCkWdrigr3T"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);