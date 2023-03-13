"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6298],{"./src/components/Pagination/Pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories,pagination:()=>pagination});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),styles_link=__webpack_require__("./src/utils/styles/link.ts"),theme=__webpack_require__("./src/utils/theme/index.ts"),Input=__webpack_require__("./src/components/Input/Input.tsx");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Pagination__Container",componentId:"sc-1nmj7lx-0"})(["width:100%;display:flex;justify-content:space-between;align-items:center;"]),Content=styled_components_browser_esm.ZP.div.withConfig({displayName:"Pagination__Content",componentId:"sc-1nmj7lx-1"})(["display:flex;flex-direction:row;align-items:center;font-family:",";"],(0,theme.I8)("default")),InputWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"Pagination__InputWrapper",componentId:"sc-1nmj7lx-2"})(["width:55px;"]),StyledInput=(0,styled_components_browser_esm.ZP)(Input.I).withConfig({displayName:"Pagination__StyledInput",componentId:"sc-1nmj7lx-3"})(["min-width:40px;"]),Text=styled_components_browser_esm.ZP.div.withConfig({displayName:"Pagination__Text",componentId:"sc-1nmj7lx-4"})(["",";padding:",";color:",";"],(0,theme.cp)("description"),(0,theme.W0)(2),(0,theme.$_)("content.primary")),ButtonWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"Pagination__ButtonWrapper",componentId:"sc-1nmj7lx-5"})(["visibility:hidden;",""],(0,modifier.c)("visible",styled_components_browser_esm.iv`
			visibility: visible;
		`)),Anchor=styled_components_browser_esm.ZP.button.withConfig({displayName:"Pagination__Anchor",componentId:"sc-1nmj7lx-6"})([""," ",";border:none;padding-left:",";"],(0,theme.cp)("description"),styles_link.J,(0,theme.W0)(2));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const calculateCurrentPage=(offset,limit)=>Math.floor(offset/limit+1),calculateNewOffset=(newPage,limit)=>(newPage-1)*limit,selectOptions=[{value:25,label:25},{value:50,label:50},{value:100,label:100}],Pagination=_ref=>{let{limit,offset,total,onPaginationChange,className}=_ref;const[pageInputValue,setPageInputValue]=(0,react.useState)(1),pageCount=((total,limit)=>Math.ceil(total/limit))(total,limit),currentPage=calculateCurrentPage(offset,limit),selectValue=selectOptions.find((_ref2=>{let{value}=_ref2;return value===limit}));return(0,react.useEffect)((()=>{setPageInputValue(1)}),[limit,offset,total]),(0,jsx_runtime.jsxs)(Container,{className,children:[(0,jsx_runtime.jsx)(ButtonWrapper,{visible:currentPage>1,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"accent",variant:"secondary",size:"md",onClick:()=>{currentPage<=1||onPaginationChange([currentPage-1,limit,calculateNewOffset(currentPage-1,limit)])},children:"← Prev"})}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:["Page ",currentPage," of ",pageCount||1,". Jump to page"]}),(0,jsx_runtime.jsx)(InputWrapper,{children:(0,jsx_runtime.jsx)(StyledInput,{"aria-label":"page number",type:"number",min:"1",error:!pageInputValue||pageCount<pageInputValue,max:`${pageCount}`,value:pageInputValue.toString(),onChange:event=>{setPageInputValue(parseInt(event.currentTarget.value,10))}})}),(0,jsx_runtime.jsx)(Anchor,{onClick:()=>{!pageInputValue||pageInputValue>pageCount||pageInputValue===currentPage||onPaginationChange([pageInputValue,limit,calculateNewOffset(pageInputValue,limit)])},children:"Go"}),(0,jsx_runtime.jsx)(Text,{children:"Show per page"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Select.P,{"aria-label":"page size",isSearchable:!1,value:selectValue,options:selectOptions,onChange:option=>{null!==option&&onPaginationChange([calculateCurrentPage(offset,option.value),option.value,offset])}})})]}),(0,jsx_runtime.jsx)(ButtonWrapper,{visible:currentPage<pageCount,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"accent",variant:"secondary",size:"md",onClick:()=>{currentPage+1>pageCount||onPaginationChange([currentPage+1,limit,calculateNewOffset(currentPage+1,limit)])},children:"Next →"})})]})};Pagination.displayName="Pagination",Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{limit:{defaultValue:null,description:"Sets the maximum number of items to display per page.",name:"limit",required:!0,type:{name:"enum",value:[{value:"25"},{value:"50"},{value:"100"}]}},offset:{defaultValue:null,description:"Sets the current item offset, used to calculate which page should be displayed, can be a number ≥0 and <`total`.",name:"offset",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"Sets the total number of items.",name:"total",required:!0,type:{name:"number"}},onPaginationChange:{defaultValue:null,description:"Function executed when changing pages or changing the number of items displayed per page.",name:"onPaginationChange",required:!0,type:{name:"(pageData: [pageNo: number, limit: PageSize, offset: number]) => void"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(Pagination,_extends({},args,{onPaginationChange:([,limit,offset])=>{updateArgs({offset,limit})},mdxType:"Pagination"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Pagination",component:Pagination,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)("div",{style:{height:"130px"}},Story())],mdxType:"Meta"}),(0,esm.kt)("h1",{id:"pagination"},"Pagination"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"The pagination component is a way to navigate through long lists of data. It allows the user to select a specific page to view, and provides an easy way to move between pages."),(0,esm.kt)("p",null,"Pagination expects items to start counting at ",(0,esm.kt)("inlineCode",{parentName:"p"},"0")," (where the last item equals ",(0,esm.kt)("inlineCode",{parentName:"p"},"total - 1"),")."),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Pagination } from '@lokalise/louis';\n\nexport default () => (\n    <Pagination\n        total={100}\n        offset={0}\n        limit={25}\n        onPaginationChange={([pageNo, limit, offset]) => {\n            // react to page change\n        }}\n    />\n);\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29260",target:"_blank"},"Figma Source File | Pagination"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Pagination,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Pagination",args:{offset:0,limit:25,total:100},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const pagination=Template.bind({});pagination.storyName="Pagination",pagination.args={offset:0,limit:25,total:100},pagination.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Pagination {...args} onPaginationChange={([, limit, offset]) => {\n    updateArgs({\n      offset,\n      limit\n    });\n  }} />;\n}"}};const componentMeta={title:"Components/Pagination",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)("div",{style:{height:"130px"}},Story())],component:Pagination,includeStories:["pagination"]},mdxStoryNameToKey={Pagination:"pagination"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Pagination_stories=componentMeta,__namedExportsOrder=["Template","pagination"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),inputStyle=__webpack_require__("./src/utils/styles/inputStyle.ts"),theme=__webpack_require__("./src/utils/theme/index.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const isDisabledModifier=style=>(0,modifier.c)((_ref=>{let{isLoading}=_ref;return!isLoading}),styled_components_browser_esm.iv`
			&:disabled {
				${style}
			}
		`),defineAppearance=input=>styled_components_browser_esm.iv`
	// Idle
	${input.idle};

	// Hover
	&:hover:not([disabled]):not([aria-expanded='true']) {
		${input.hover};
	}

	// Pressed
	&:active:not([disabled]):not([aria-expanded='true']),
	&:focus:active:not([disabled]):not([aria-expanded='true']) {
		${input.active};
	}

	// Activated
	${(0,modifier.c)("active",input.active)};

	// Disabled
	${isDisabledModifier(input.disabled)}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"Button__Container",componentId:"sc-wyblvi-0"})(["display:inline-flex;align-items:center;background-color:transparent;border:1px solid transparent;text-decoration:none;vertical-align:middle;border-radius:",";cursor:pointer;position:relative;transition:all ",";box-sizing:border-box;font-family:",";",";"," ",";",";"],(0,theme.q0)("md"),(0,theme.YJ)(),(0,theme.I8)("default"),isDisabledModifier(styled_components_browser_esm.iv`
			cursor: not-allowed;
		`),(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			font-size: 11px;
			padding: ${(0,theme.W0)(0,2)};
			height: 20px;
			line-height: 12px;
		`,sm:styled_components_browser_esm.iv`
			font-size: 12px;
			padding: ${(0,theme.W0)(0,3)};
			height: ${inputStyle.dC}px;
			line-height: 12px;
		`,md:styled_components_browser_esm.iv`
			font-size: 14px;
			padding: ${(0,theme.W0)(0,3)};
			height: ${inputStyle.WC}px;
			line-height: 14px;
		`,lg:styled_components_browser_esm.iv`
			font-size: 18px;
			padding: ${(0,theme.W0)(0,4)};
			height: 45px;
			line-height: 18px;
		`}),(0,variants.o)("appearance",{accent:defineAppearance({idle:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.primary.idle")};
				--button-appearance-secondary-color: ${(0,theme.$_)("content.buttonText1")};
			`,hover:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.primary.hover")};
			`,active:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.primary.pressed")};
			`,disabled:styled_components_browser_esm.iv`
				--button-appearance-secondary-color: ${(0,theme.$_)("interactive.primary.disabled")};
				--button-appearance-primary-color: ${(0,theme.$_)("surface.secondary")};
			`}),danger:defineAppearance({idle:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.red.idle")};
				--button-appearance-secondary-color: ${(0,theme.$_)("content.buttonText1")};
			`,hover:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.red.hover")};
			`,active:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.red.pressed")};
			`,disabled:styled_components_browser_esm.iv`
				--button-appearance-secondary-color: ${(0,theme.$_)("interactive.red.disabled")};
				--button-appearance-primary-color: ${(0,theme.$_)("surface.secondary")};
			`}),warning:defineAppearance({idle:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.yellow.idle")};
				--button-appearance-secondary-color: ${(0,theme.$_)("content.buttonText2")};
			`,hover:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.yellow.hover")};
			`,active:styled_components_browser_esm.iv`
				--button-appearance-primary-color: ${(0,theme.$_)("interactive.yellow.pressed")};
			`,disabled:styled_components_browser_esm.iv`
				--button-appearance-secondary-color: ${(0,theme.$_)("interactive.yellow.disabled")};
				--button-appearance-primary-color: ${(0,theme.$_)("surface.secondary")};
			`})}),(0,variants.o)("variant",{primary:styled_components_browser_esm.iv`
			background-color: var(--button-appearance-primary-color);
			color: var(--button-appearance-secondary-color);

			${isDisabledModifier(styled_components_browser_esm.iv`
					border: 1px solid var(--button-appearance-secondary-color);
				`)}
		`,secondary:styled_components_browser_esm.iv`
			background-color: transparent;
			border-width: 1px;
			border-color: var(--button-appearance-primary-color);
			color: var(--button-appearance-primary-color);

			${isDisabledModifier(styled_components_browser_esm.iv`
					color: var(--button-appearance-secondary-color);
					border: 1px solid var(--button-appearance-secondary-color);
				`)}
		`,tertiary:styled_components_browser_esm.iv`
			background-color: transparent;
			border-color: transparent;
			color: var(--button-appearance-primary-color);

			${isDisabledModifier(styled_components_browser_esm.iv`
					color: var(--button-appearance-secondary-color);
				`)}
		`})),Content=styled_components_browser_esm.ZP.span.withConfig({displayName:"Button__Content",componentId:"sc-wyblvi-1"})(["display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;width:100%;"," ",""],(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(1)};
		`,sm:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(2)};
		`,md:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(2)};
		`,lg:styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(2)};
		`}),(0,modifier.c)("isHidden",styled_components_browser_esm.iv`
			opacity: 0;
		`)),Text=styled_components_browser_esm.ZP.span.withConfig({displayName:"Button__Text",componentId:"sc-wyblvi-2"})(["position:relative;align-items:center;display:inline-flex;white-space:nowrap;",""],(0,variants.o)("size",{xs:styled_components_browser_esm.iv`
			top: 0;
		`,sm:styled_components_browser_esm.iv`
			top: 0;
		`,md:styled_components_browser_esm.iv`
			top: 0;
		`,lg:styled_components_browser_esm.iv`
			top: -1px; // Make text visually centered
		`})),StyledLoadingSign=(0,styled_components_browser_esm.ZP)(LoadingSign.X).withConfig({displayName:"Button__StyledLoadingSign",componentId:"sc-wyblvi-3"})(["font-size:1.3em;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",type="button",appearance="accent",variant="tertiary",loading=!1,active=!1,children,leftIcon,rightIcon,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,appearance,variant,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(StyledLoadingSign,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"})]})}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:{value:"accent"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"accent"'},{value:'"danger"'}]}},variant:{defaultValue:{value:"tertiary"},description:"Change the button variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"md"},description:"Changes button scale in padding and font size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'}]}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"Enables the type attribute for the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},leftIcon:{defaultValue:null,description:"Renders an icon on the left side of the button through a provided child element.",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"Renders an icon on the right side of the button through a provided child element.",name:"rightIcon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const withLinkStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["cursor:pointer;font-size:inherit;font-weight:inherit;line-height:inherit;color:",";transition:color ",";background-color:transparent;padding:0;border:none;font-family:",";&:hover,&:focus{color:",";}&:active{color:",";}&:active:hover{color:",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.idle"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.YJ)(),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.I8)("default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.hover"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.pressed"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.pressedHover"))}}]);
//# sourceMappingURL=components-Pagination-Pagination-stories-mdx.bc5fdef5.iframe.bundle.js.map