(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8792],{"./.storybook/stories lazy recursive ^\\.\\/.*$ include: (?:\\/\\.storybook\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./overview/advanced-usage.mdx":["./.storybook/stories/overview/advanced-usage.mdx",3977],"./overview/changelog.mdx":["./.storybook/stories/overview/changelog.mdx",6293],"./overview/intro.mdx":["./.storybook/stories/overview/intro.mdx",6125],"./overview/testing.mdx":["./.storybook/stories/overview/testing.mdx",1435]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./.storybook/stories lazy recursive ^\\.\\/.*$ include: (?:\\/\\.storybook\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:\.storybook\/stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(21);return __webpack_require__("./.storybook/stories lazy recursive ^\\.\\/.*$ include: (?:\\/\\.storybook\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.[^/]*?\/?)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-styling/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,parameters:()=>parameters});var dist=__webpack_require__("./node_modules/@storybook/addon-styling/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-lokalise-light.css"),__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-lokalise-dark.css"),__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-autopilot-light.css"),__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-autopilot-dark.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),preview=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/preview/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(preview.A,options);preview.A&&preview.A.locals&&preview.A.locals;var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const decorators=[(({themes,defaultTheme,attributeName})=>{const themeNames=Object.keys(themes);return dist.Pe.initializeThemeState(themeNames,defaultTheme),(storyFn,context)=>{const{themeOverride}=dist.Pe.useThemeParameters(),selected=dist.Pe.pluckThemeFromContext(context);return(0,react.useEffect)((()=>{const parentElement=document.querySelector("html"),themeKey=themeOverride||selected||defaultTheme;parentElement.setAttribute(attributeName,themes[themeKey].cssModulesTheme)}),[themeOverride,selected,attributeName]),storyFn()}})({themes:{"Lokalise (light)":{cssModulesTheme:"lokalise-light"},"Lokalise (dark)":{cssModulesTheme:"lokalise-dark"},"Flow (light)":{cssModulesTheme:"autopilot-light"}},defaultTheme:"Lokalise (light)",attributeName:"data-theme"})],parameters={options:{storySort:{method:"alphabetical",order:["Overview",["Intro","Changelog","Theming","Testing","Advanced Usage"],"Foundations",["ThemeProvider","Design Tokens","Icons"],"Components","Deprecated"]}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},previewTabs:{canvas:{hidden:!1,title:"Playground"}},viewMode:"docs",backgrounds:{disable:!0},docs:{container:props=>(0,jsx_runtime.jsx)(blocks_dist.vD,{...props})}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/config.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root {\n\t--sb-theme-color-white: #ffffff;\n\t--sb-theme-color-black: #000000;\n\t--sb-theme-color-light-grey: #e2e1e1;\n\t--sb-theme-color-grey: #999999;\n\t--sb-theme-color-dark-grey: #333333;\n\t--sb-theme-color-lokalise-brand: #ffc500;\n\t--sb-theme-small-text-size: 12px;\n\t--sb-theme-default-text-size: 14px;\n\t--sb-theme-motion-default: 150ms ease-out;\n\t--sb-theme-font-family-default: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco',\n\t\tBlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/config.css"],names:[],mappings:"AAAA;CACC,+BAA+B;CAC/B,+BAA+B;CAC/B,oCAAoC;CACpC,8BAA8B;CAC9B,mCAAmC;CACnC,wCAAwC;CACxC,gCAAgC;CAChC,kCAAkC;CAClC,yCAAyC;CACzC;gFAC+E;AAChF",sourcesContent:[":root {\n\t--sb-theme-color-white: #ffffff;\n\t--sb-theme-color-black: #000000;\n\t--sb-theme-color-light-grey: #e2e1e1;\n\t--sb-theme-color-grey: #999999;\n\t--sb-theme-color-dark-grey: #333333;\n\t--sb-theme-color-lokalise-brand: #ffc500;\n\t--sb-theme-small-text-size: 12px;\n\t--sb-theme-default-text-size: 14px;\n\t--sb-theme-motion-default: 150ms ease-out;\n\t--sb-theme-font-family-default: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco',\n\t\tBlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/preview/index.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_config_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/config.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_typography_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/preview/typography.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_views_designtokens_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/preview/views/designtokens.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_config_css__WEBPACK_IMPORTED_MODULE_2__.A),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_typography_css__WEBPACK_IMPORTED_MODULE_3__.A),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_views_designtokens_css__WEBPACK_IMPORTED_MODULE_4__.A),___CSS_LOADER_EXPORT___.push([module.id,"pre {\n\ttab-size: 4ch;\n}\n\n/* Ensures Stories have correct background */\nbody.sb-show-main {\n\tbackground-color: var(--lok-color-background-surface-default) !important;\n}\n\n/* Ensures all stories in docs mode use the correct theme background color */\n.docs-story {\n\tbackground-color: var(--lok-color-background-surface-default);\n\tcolor: var(--lok-color-text-default);\n}\n\n/* Set #root font color to allow components that don't set their own default color to inherit the color in canvas mode */\n#storybook-root {\n\tcolor: var(--lok-color-text-default);\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/preview/index.css"],names:[],mappings:"AAIA;CACC,aAAa;AACd;;AAEA,4CAA4C;AAC5C;CACC,wEAAwE;AACzE;;AAEA,4EAA4E;AAC5E;CACC,6DAA6D;CAC7D,oCAAoC;AACrC;;AAEA,wHAAwH;AACxH;CACC,oCAAoC;AACrC",sourcesContent:["@import url('../config.css');\n@import url('./typography.css');\n@import url('./views/designtokens.css');\n\npre {\n\ttab-size: 4ch;\n}\n\n/* Ensures Stories have correct background */\nbody.sb-show-main {\n\tbackground-color: var(--lok-color-background-surface-default) !important;\n}\n\n/* Ensures all stories in docs mode use the correct theme background color */\n.docs-story {\n\tbackground-color: var(--lok-color-background-surface-default);\n\tcolor: var(--lok-color-text-default);\n}\n\n/* Set #root font color to allow components that don't set their own default color to inherit the color in canvas mode */\n#storybook-root {\n\tcolor: var(--lok-color-text-default);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/preview/typography.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./.storybook/static/fonts/FactorA-Bold.woff2"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,`@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: 500;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff') format('woff');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Factor A';\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');\n\tfont-weight: 700;\n}\n\n.sbdocs-wrapper .sbdocs-a,\n.sbdocs-wrapper .sbdocs-p a,\n.sbdocs-wrapper .sbdocs-li a {\n\tcolor: var(--sb-theme-color-dark-grey);\n\ttext-decoration: underline;\n\ttransition: color var(--sb-theme-motion-default);\n\tfont-size: var(--sb-theme-default-text-size);\n}\n\n.sbdocs-wrapper .sbdocs-a:hover,\n.sbdocs-wrapper .sbdocs-p a:hover,\n.sbdocs-wrapper .sbdocs-li a:hover {\n\tcolor: var(--sb-theme-color-grey);\n}\n\n.sbdocs-wrapper .sbdocs.sbdocs-h2:not(:first-of-type) {\n\tmargin-top: 55px;\n}\n\n.sbdocs-wrapper .changelog-story h1 .sbdocs-a,\n.sbdocs-wrapper .changelog-story h2 .sbdocs-a {\n\tfont-size: inherit;\n}\n\n.sbdocs-wrapper .changelog-story h1:not(:first-of-type),\n.sbdocs-wrapper .changelog-story h2 {\n\tmargin-top: 40px;\n}\n`,"",{version:3,sources:["webpack://./.storybook/static/styles/preview/typography.css"],names:[],mappings:"AAAA;CACC,oBAAoB;CACpB;;0FAEyF;CACzF,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB;;yFAEwF;CACxF,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB;;2FAE0F;CAC1F,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB;;yFAEwF;CACxF,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,oBAAoB;CACpB;;yFAEwF;CACxF,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,uBAAuB;CACvB,4DAA0D;CAC1D,gBAAgB;AACjB;;AAEA;;;CAGC,sCAAsC;CACtC,0BAA0B;CAC1B,gDAAgD;CAChD,4CAA4C;AAC7C;;AAEA;;;CAGC,iCAAiC;AAClC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;;CAEC,kBAAkB;AACnB;;AAEA;;CAEC,gBAAgB;AACjB",sourcesContent:["@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: 500;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff') format('woff');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: Graphik;\n\tsrc:\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Factor A';\n\tsrc: url('../../fonts/FactorA-Bold.woff2') format('woff2');\n\tfont-weight: 700;\n}\n\n.sbdocs-wrapper .sbdocs-a,\n.sbdocs-wrapper .sbdocs-p a,\n.sbdocs-wrapper .sbdocs-li a {\n\tcolor: var(--sb-theme-color-dark-grey);\n\ttext-decoration: underline;\n\ttransition: color var(--sb-theme-motion-default);\n\tfont-size: var(--sb-theme-default-text-size);\n}\n\n.sbdocs-wrapper .sbdocs-a:hover,\n.sbdocs-wrapper .sbdocs-p a:hover,\n.sbdocs-wrapper .sbdocs-li a:hover {\n\tcolor: var(--sb-theme-color-grey);\n}\n\n.sbdocs-wrapper .sbdocs.sbdocs-h2:not(:first-of-type) {\n\tmargin-top: 55px;\n}\n\n.sbdocs-wrapper .changelog-story h1 .sbdocs-a,\n.sbdocs-wrapper .changelog-story h2 .sbdocs-a {\n\tfont-size: inherit;\n}\n\n.sbdocs-wrapper .changelog-story h1:not(:first-of-type),\n.sbdocs-wrapper .changelog-story h2 {\n\tmargin-top: 40px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./.storybook/static/styles/preview/views/designtokens.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* ColorPalette width styling */\n.docblock-colorpalette > div > div:first-child {\n\tflex: 0 0 15%;\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/preview/views/designtokens.css"],names:[],mappings:"AAAA,+BAA+B;AAC/B;CACC,aAAa;AACd",sourcesContent:["/* ColorPalette width styling */\n.docblock-colorpalette > div > div:first-child {\n\tflex: 0 0 15%;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Checkbox/Checkbox.stories.mdx":["./src/components/Checkbox/Checkbox.stories.mdx",9033],"./components/DateRangePicker/DateRangePicker.stories.mdx":["./src/components/DateRangePicker/DateRangePicker.stories.mdx",7048,5014,6212,5933,5422,4037],"./components/Dropzone/Dropzone.stories.mdx":["./src/components/Dropzone/Dropzone.stories.mdx",7634,2981],"./components/Flex/Flex.stories.mdx":["./src/components/Flex/Flex.stories.mdx",2485],"./components/IconButton/IconButton.stories.mdx":["./src/components/IconButton/IconButton.stories.mdx",7048,6212,363,2545],"./components/Input/Input.stories.mdx":["./src/components/Input/Input.stories.mdx",7048,6212,2225,8685],"./components/InputErrorMessage/InputErrorMessage.stories.mdx":["./src/components/InputErrorMessage/InputErrorMessage.stories.mdx",6153],"./components/Label/Label.stories.mdx":["./src/components/Label/Label.stories.mdx",7048,6212,2225,5813],"./components/Link/Link.stories.mdx":["./src/components/Link/Link.stories.mdx",4667],"./components/Menu/Menu.stories.mdx":["./src/components/Menu/Menu.stories.mdx",7048,5933,837],"./components/Modal/Modal.stories.mdx":["./src/components/Modal/Modal.stories.mdx",7048,8969,5014,4508,3182,6212,5933,2225,6494,5422,4824,7425],"./components/Pagination/Pagination.stories.mdx":["./src/components/Pagination/Pagination.stories.mdx",7048,8969,6212,5933,2225,6494,8299],"./components/Popover/Popover.stories.mdx":["./src/components/Popover/Popover.stories.mdx",7048,5933,1329],"./components/Portal/Portal.stories.mdx":["./src/components/Portal/Portal.stories.mdx",2479],"./components/ProgressBar/ProgressBar.stories.mdx":["./src/components/ProgressBar/ProgressBar.stories.mdx",269],"./components/Radio/Radio.stories.mdx":["./src/components/Radio/Radio.stories.mdx",5597],"./components/SearchInput/SearchInput.stories.mdx":["./src/components/SearchInput/SearchInput.stories.mdx",7048,9264,6212,2225,6345],"./components/Select/Select.stories.mdx":["./src/components/Select/Select.stories.mdx",7048,8969,6212,6494,6767],"./components/Skeleton/Skeleton.stories.mdx":["./src/components/Skeleton/Skeleton.stories.mdx",4337],"./components/Spacer/Spacer.stories.mdx":["./src/components/Spacer/Spacer.stories.mdx",9367],"./components/Stats/Stats.stories.mdx":["./src/components/Stats/Stats.stories.mdx",1229],"./components/StepWizard/StepWizard.stories.mdx":["./src/components/StepWizard/StepWizard.stories.mdx",7048,4508,6212,5933,2225,4824,689],"./components/Table/Table.stories.mdx":["./src/components/Table/Table.stories.mdx",2753],"./components/Tabs/Tabs.stories.mdx":["./src/components/Tabs/Tabs.stories.mdx",9507],"./components/Tag/Tag.stories.mdx":["./src/components/Tag/Tag.stories.mdx",7048,6212,1793],"./components/Textarea/Textarea.stories.mdx":["./src/components/Textarea/Textarea.stories.mdx",1355],"./components/Toast/Toast.stories.mdx":["./src/components/Toast/Toast.stories.mdx",7048,4508,6212,5933,4824,6157],"./components/Toggle/Toggle.stories.mdx":["./src/components/Toggle/Toggle.stories.mdx",8887],"./components/TopBanner/TopBanner.stories.mdx":["./src/components/TopBanner/TopBanner.stories.mdx",7048,6212,6529],"./components/ViewButtonGroup/ViewButtonGroup.stories.mdx":["./src/components/ViewButtonGroup/ViewButtonGroup.stories.mdx",7048,6212,3453],"./foundations/designTokens/color/colors.mdx":["./src/foundations/designTokens/color/colors.mdx",7048,8679,6212,5305,3385],"./foundations/designTokens/motion.mdx":["./src/foundations/designTokens/motion.mdx",8679,7313],"./foundations/designTokens/radius.mdx":["./src/foundations/designTokens/radius.mdx",8679,3225],"./foundations/designTokens/size.mdx":["./src/foundations/designTokens/size.mdx",8679,9080],"./foundations/designTokens/spacing.mdx":["./src/foundations/designTokens/spacing.mdx",8679,4578],"./foundations/designTokens/typography/typography.mdx":["./src/foundations/designTokens/typography/typography.mdx",7048,8679,6212,5305,5986],"./foundations/designTokens/zIndex.mdx":["./src/foundations/designTokens/zIndex.mdx",8679,273],"./foundations/icons/icons.mdx":["./src/foundations/icons/icons.mdx",363,3009],"./foundations/themes/overview.stories.mdx":["./src/foundations/themes/overview.stories.mdx",1316]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Alert/Alert.stories":["./src/components/Alert/Alert.stories.tsx",7048,6212,4287],"./components/Alert/Alert.stories.tsx":["./src/components/Alert/Alert.stories.tsx",7048,6212,4287],"./components/Avatar/Avatar.stories":["./src/components/Avatar/Avatar.stories.tsx",6807],"./components/Avatar/Avatar.stories.tsx":["./src/components/Avatar/Avatar.stories.tsx",6807],"./components/Button/Button.stories":["./src/components/Button/Button.stories.tsx",5933,363,7721],"./components/Button/Button.stories.tsx":["./src/components/Button/Button.stories.tsx",5933,363,7721],"./components/Card/Card.stories":["./src/components/Card/Card.stories.tsx",2513],"./components/Card/Card.stories.tsx":["./src/components/Card/Card.stories.tsx",2513],"./components/Checkbox/Checkbox.stories.mdx":["./src/components/Checkbox/Checkbox.stories.mdx",9033],"./components/Code/Code.stories":["./src/components/Code/Code.stories.tsx",7048,6212,5305,9071],"./components/Code/Code.stories.tsx":["./src/components/Code/Code.stories.tsx",7048,6212,5305,9071],"./components/DatePicker/DatePicker.stories":["./src/components/DatePicker/DatePicker.stories.tsx",7048,5014,6212,5422,2573],"./components/DatePicker/DatePicker.stories.tsx":["./src/components/DatePicker/DatePicker.stories.tsx",7048,5014,6212,5422,2573],"./components/DateRangePicker/DateRangePicker.stories.mdx":["./src/components/DateRangePicker/DateRangePicker.stories.mdx",7048,5014,6212,5933,5422,4037],"./components/Dropzone/Dropzone.stories.mdx":["./src/components/Dropzone/Dropzone.stories.mdx",7634,2981],"./components/Editable/Editable.stories":["./src/components/Editable/Editable.stories.tsx",7048,6212,2225,5137],"./components/Editable/Editable.stories.tsx":["./src/components/Editable/Editable.stories.tsx",7048,6212,2225,5137],"./components/Flex/Flex.stories.mdx":["./src/components/Flex/Flex.stories.mdx",2485],"./components/Hint/Hint.stories":["./src/components/Hint/Hint.stories.tsx",7048,6212,2225,9975],"./components/Hint/Hint.stories.tsx":["./src/components/Hint/Hint.stories.tsx",7048,6212,2225,9975],"./components/IconButton/IconButton.stories.mdx":["./src/components/IconButton/IconButton.stories.mdx",7048,6212,363,2545],"./components/Input/Input.stories.mdx":["./src/components/Input/Input.stories.mdx",7048,6212,2225,8685],"./components/InputErrorMessage/InputErrorMessage.stories.mdx":["./src/components/InputErrorMessage/InputErrorMessage.stories.mdx",6153],"./components/Label/Label.stories.mdx":["./src/components/Label/Label.stories.mdx",7048,6212,2225,5813],"./components/Link/Link.stories.mdx":["./src/components/Link/Link.stories.mdx",4667],"./components/Loading/Loading.stories":["./src/components/Loading/Loading.stories.tsx",6647],"./components/Loading/Loading.stories.tsx":["./src/components/Loading/Loading.stories.tsx",6647],"./components/Menu/Menu.stories.mdx":["./src/components/Menu/Menu.stories.mdx",7048,5933,837],"./components/Modal/Modal.stories.mdx":["./src/components/Modal/Modal.stories.mdx",7048,8969,5014,4508,3182,6212,5933,2225,6494,5422,4824,7425],"./components/Pagination/Pagination.stories.mdx":["./src/components/Pagination/Pagination.stories.mdx",7048,8969,6212,5933,2225,6494,8299],"./components/Popover/Popover.stories.mdx":["./src/components/Popover/Popover.stories.mdx",7048,5933,1329],"./components/Portal/Portal.stories.mdx":["./src/components/Portal/Portal.stories.mdx",2479],"./components/ProgressBar/ProgressBar.stories.mdx":["./src/components/ProgressBar/ProgressBar.stories.mdx",269],"./components/Radio/Radio.stories.mdx":["./src/components/Radio/Radio.stories.mdx",5597],"./components/SearchInput/SearchInput.stories.mdx":["./src/components/SearchInput/SearchInput.stories.mdx",7048,9264,6212,2225,6345],"./components/Select/Select.stories.mdx":["./src/components/Select/Select.stories.mdx",7048,8969,6212,6494,6767],"./components/Skeleton/Skeleton.stories.mdx":["./src/components/Skeleton/Skeleton.stories.mdx",4337],"./components/Spacer/Spacer.stories.mdx":["./src/components/Spacer/Spacer.stories.mdx",9367],"./components/Stats/Stats.stories.mdx":["./src/components/Stats/Stats.stories.mdx",1229],"./components/StepWizard/StepWizard.stories.mdx":["./src/components/StepWizard/StepWizard.stories.mdx",7048,4508,6212,5933,2225,4824,689],"./components/Switch/Switch.stories":["./src/components/Switch/Switch.stories.tsx",2857],"./components/Switch/Switch.stories.tsx":["./src/components/Switch/Switch.stories.tsx",2857],"./components/Table/Table.stories.mdx":["./src/components/Table/Table.stories.mdx",2753],"./components/Tabs/Tabs.stories.mdx":["./src/components/Tabs/Tabs.stories.mdx",9507],"./components/Tag/Tag.stories.mdx":["./src/components/Tag/Tag.stories.mdx",7048,6212,1793],"./components/Textarea/Textarea.stories.mdx":["./src/components/Textarea/Textarea.stories.mdx",1355],"./components/Toast/Toast.stories.mdx":["./src/components/Toast/Toast.stories.mdx",7048,4508,6212,5933,4824,6157],"./components/Toggle/Toggle.stories.mdx":["./src/components/Toggle/Toggle.stories.mdx",8887],"./components/Tooltip/Tooltip.stories":["./src/components/Tooltip/Tooltip.stories.tsx",7048,6212,5933,9459],"./components/Tooltip/Tooltip.stories.tsx":["./src/components/Tooltip/Tooltip.stories.tsx",7048,6212,5933,9459],"./components/TopBanner/TopBanner.stories.mdx":["./src/components/TopBanner/TopBanner.stories.mdx",7048,6212,6529],"./components/ViewButtonGroup/ViewButtonGroup.stories.mdx":["./src/components/ViewButtonGroup/ViewButtonGroup.stories.mdx",7048,6212,3453],"./foundations/icons/icons.stories":["./src/foundations/icons/icons.stories.tsx",363,5331],"./foundations/icons/icons.stories.tsx":["./src/foundations/icons/icons.stories.tsx",363,5331],"./foundations/themes/overview.stories.mdx":["./src/foundations/themes/overview.stories.mdx",1316]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$",module.exports=webpackAsyncContext},"./.storybook/static/fonts/FactorA-Bold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/FactorA-Bold.144e004e.woff2"},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_API__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[6446],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);